import Base from "./Base";
import Global from "../Global";
import GameBoxRuntime from "../runtime/GameBoxRuntime";
import PlayerRuntime from "../runtime/PlayerRuntime";
import DialogRuntime from "../runtime/DialogRuntime";
import BoardRuntime from "../runtime/BoardRuntime";
import GameState, { Player, PlayerFrame, INIT_SCORE, Action } from "../GameState";

export default class Game extends Base {
    /** @prop {name:scene,tips:"",type:Node}*/
    scene: Laya.Scene;

    /** @prop {name:board,tips:"",type:Node}*/
    board: BoardRuntime;

    /** @prop {name:gamebox,tips:"",type:Node}*/
    gamebox: GameBoxRuntime;

    /** @prop {name:me,tips:"",type:Node}*/
    me: PlayerRuntime;

    /** @prop {name:enemy,tips:"",type:Node}*/
    enemy: PlayerRuntime;

    /** @prop {name:dialogPrefeb,tips:"",type:Prefab}*/
    dialogPrefeb: Laya.Prefab;

    /** @prop {name:leaveBtn,tips:"",type:Node}*/
    leaveBtn: Laya.Sprite;

    /** @prop {name:bomb,tips:"",type:Node}*/
    bomb: Laya.Sprite;

    private isInit: boolean = false;
    private isEnd: boolean = false;
    private dialog: DialogRuntime = null;
    private state: GameState = null;
    private timer: number = 0;

    constructor() { super(); }

    async onAwake() {
        await super.onAwake();
    }

    // canvas 更新方法
    onUpdate(): any {
        if (this.isEnd) { return; }
        if (!this.isInit) { return this.init(); }

        const now = Date.now();
        const deltaFrameTime = now - this.state.timestamp;

        // 渲染层状态更新
        this.state.me.update(deltaFrameTime);
        this.state.enemy.update(deltaFrameTime);

        // 更新炸弹
        this.bomb.y = this.state.bomb.y;
        // 更新玩家
        this.me.updateState(this.state.me);
        this.enemy.updateState(this.state.enemy);
        // 修改时间
        this.state.timestamp = now;

        // 未开局则清除子弹
        if (!this.state.isBattle) {
            this.me.removeAllBullet();
            this.enemy.removeAllBullet();
        }
    }

    init(): void {

        if (this.isInit) { return; }

        this.initView();
        this.initListener();

        this.isInit = true;
        this.isEnd = false;
        this.dialog = this.dialogPrefeb.create() as DialogRuntime;

		// 初始化表现层状态
        if (!this.state) {
            this.state = new GameState();
            Global.state.cloneTo(this.state);
        }

        // 修改玩家状态
        Global.room.changeCustomPlayerStatus({ customPlayerStatus: 0 });

        // 检查房间成员与帧广播状态
        Global.room.onUpdate = () => {
            if (Global.room.roomInfo.playerList.length !== 2 || Global.room.roomInfo.frameSyncState === MGOBE.ENUM.FrameSyncState.STOP) {
                Global.room.roomInfo.frameSyncState === MGOBE.ENUM.FrameSyncState.START && Global.room.stopFrameSync({});
                Global.room.onUpdate = null;
                this.timer = setTimeout(() => this.timer && this.openScene("Room"), 3000);
            }
        }
    }

    initView(): void {
        this.enemy.visible = false;
        this.me.visible = false;

        const me = Global.room.roomInfo.playerList.filter(u => u.id === MGOBE.Player.id)[0];
        const enemy = Global.room.roomInfo.playerList.filter(u => u.id !== MGOBE.Player.id)[0];

        this.me.init(this.gamebox, MGOBE.Player.id, false, me.name, me.customProfile);
        this.enemy.init(this.gamebox, enemy.id, true, enemy.name, enemy.customProfile);

        this.updateLiveBar();
    }

    initListener(): void {
        this.scene.on(Laya.Event.CLICK, this, this.jump);
        this.leaveBtn.on(Laya.Event.CLICK, this, () => this.showDialog("是否退出游戏？", () => this.leaveMyRoom()));
    }

    // 弹出对话框
    openRoundDialog(num: number, time = 1000): void {
        this.dialog.showRound(num);
        setTimeout(() => Laya.Dialog.closeAll(), time);
    }

    // 发送请求：跳
    jump() {
        if (!this.state.isBattle || this.isEnd) { return; }

        const data: PlayerFrame = {
            playerId: MGOBE.Player.id,
            action: Action.JUMP,
        };

        Global.room.sendFrame({ data });
    }

    // 游戏画面方法：计算状态
    onRecvFrame(event: MGOBE.types.BroadcastEvent<MGOBE.types.RecvFrameBst>): void {
        super.onRecvFrame(event);

        const isBattleState = this.state.isBattle;

        // 自动补帧的时候不需要拷贝到表现层
        if (event.data.frame.isReplay) { return; }

        if (this.isEnd || !this.isInit) { return; }

        // 拷贝到游戏表现层
        Global.state.cloneTo(this.state);

        if (!isBattleState && this.state.isBattle) {
            this.openRoundDialog(this.state.roundTimes);
            this.me.runLive();
            this.enemy.runLive();
        }

        this.updateLiveBar();
        this.checkGameState();
    }

    // 检查游戏状态
    checkGameState() {
        if (this.isEnd) { return; }

        // 对局结束
        if ((this.state.me.isDie || this.state.enemy.isDie) && this.state.roundStartFrameId > 0) {
            this.endRound();
        }

        // 游戏结束
        if (this.state.me.score <= 0 || this.state.enemy.score <= 0) {
            // 游戏结束
            this.isEnd = true;
            this.endGame();
        }
    }

    // 结束当前局，播放击中动画
    endRound() {
        this.state.enemy.isDie && this.enemy.runBlow();
        this.state.me.isDie && this.me.runBlow();
    }

    // 结束当前游戏
    endGame() {
        const score1 = INIT_SCORE - Global.state.enemy.score;
        const score2 = INIT_SCORE - Global.state.me.score;

        const name1 = this.me.name;
        const name2 = this.enemy.name;

        const url1 = this.me.profile;
        const url2 = this.enemy.profile;

		// 弹框显示结果
        this.dialog.showEnd(score1, score2, name1, name2, url1, url2);

		Global.state.initState();
		// 停止帧同步
        Global.room.stopFrameSync({});

        this.leaveBtn.visible = false;

		// 点击画面回到房间
        this.scene.once(Laya.Event.CLICK, this, () => {
            Laya.Dialog.closeAll();
            this.openScene("Room");
        });
    }

    // 更新血量条
    updateLiveBar() {

        let myScore = Global.state.me.score;
        let enemyScore = Global.state.enemy.score;

        const me = {
            name: this.me.name,
            score: myScore,
            profile: this.me.profile,
        };

        const enemy = {
            name: this.enemy.name,
            score: enemyScore,
            profile: this.enemy.profile,
        };

        this.board.set(me, enemy);
    }

    onDisable() {
        Global.room.onUpdate = null;
        this.onUpdate = () => null;
        clearTimeout(this.timer);
        Laya.Dialog.closeAll();
        this.timer = 0;
    }

    onAutoRequestFrameError(event: MGOBE.types.BroadcastEvent<MGOBE.types.ResponseEvent<MGOBE.types.RequestFrameRsp>>) {
        this.showDialog("补帧失败，无法继续游戏");
        this.leaveMyRoom();
    }

    async leaveMyRoom() {
        let res = await this.leaveRoom();

        if (!Global.room.isInRoom()) {
            this.openScene("Main");
        }
    }
}
