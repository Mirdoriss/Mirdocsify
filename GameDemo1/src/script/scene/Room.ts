import Base from "./Base";
import Global from "../Global";
import CircleSprite from "../runtime/CircleSpriteRuntime";
import GameState from "../GameState";

enum BUTTON_TAG {
    READY = "READY",
    CANCEL_READY = "CANCEL_READY",
    CANCEL_MATCH = "CANCEL_MATCH",
    LEAVE = "LEAVE",
}

const BUTTON_URL  = {
    READY: "image/ready_button.png",
    CANCEL_READY: "image/cancel_ready_button.png",
    CANCEL_MATCH: "image/cancel_match_button.png",
    LEAVE: "image/leave_button.png",
}

export default class Room extends Base {
    /** @prop {name:scene,tips:"",type:Node}*/
    scene: Laya.Scene;

    /** @prop {name:readyBtn,tips:"",type:Node}*/
    readyBtn: Laya.Sprite;

    /** @prop {name:leaveBtn,tips:"",type:Node}*/
    leaveBtn: Laya.Sprite;

    /** @prop {name:myHead,tips:"",type:Node}*/
    myHead: CircleSprite;

    /** @prop {name:enemyHead,tips:"",type:Node}*/
    enemyHead: CircleSprite;

    /** @prop {name:enemyStatus,tips:"",type:Node}*/
    enemyStatus: Laya.Sprite;

    /** @prop {name:myNetWork,tips:"",type:Node}*/
    myNetWork: Laya.Label;

    /** @prop {name:enemyNetWork,tips:"",type:Node}*/
    enemyNetWork: Laya.Label;

    private matchTag: BUTTON_TAG = BUTTON_TAG.LEAVE;
    private buttonTag: BUTTON_TAG = BUTTON_TAG.READY;

    private isDisable: boolean = false;

    constructor() { super(); }

    async onAwake() {
        await super.onAwake();

        Global.room.onUpdate = () => this.onRoomUpdate();
        this.isDisable = false;
    }

    onEnable() {
        this.initView(Global.room.isInRoom());
        this.initListener();

        // 如果不在房间中就发起匹配
        !Global.room.isInRoom() && this.callMatchRoom();
    }

    initView(isMyRoom: boolean) {
        this.setReadyButtonTag(BUTTON_TAG.READY);
        this.setLeaveButtonTag(BUTTON_TAG.LEAVE);

        this.myHead.loadImage(Global.userInfo.avatarUrl);
        Global.state.initState();

        this.myNetWork.text = "";
        this.enemyNetWork.text = "";
        this.readyBtn.visible = true;

        this.setRoom();
    }

    initListener() {
        this.leaveBtn.on(Laya.Event.CLICK, this, () => this.leave());
        this.readyBtn.on(Laya.Event.CLICK, this, () => this.changeState());
    }

    setReadyButtonTag(tag: BUTTON_TAG.READY | BUTTON_TAG.CANCEL_READY) {
        this.readyBtn.loadImage(BUTTON_URL[tag]);
        this.buttonTag = tag;
    }

    setLeaveButtonTag(tag: BUTTON_TAG.CANCEL_MATCH | BUTTON_TAG.LEAVE) {
        this.leaveBtn.loadImage(BUTTON_URL[tag]);
        this.matchTag = tag;
    }

    onRoomUpdate() {
        this.setRoom();

        // 如果满足开始条件，直接进入游戏
        if (Global.room.roomInfo.frameSyncState === MGOBE.ENUM.FrameSyncState.STOP &&
            Global.room.roomInfo.playerList.length === 2 &&
            Global.room.roomInfo.playerList.filter(u => u.customPlayerStatus !== 1 || u.commonNetworkState !== MGOBE.ENUM.NetworkState.COMMON_ONLINE).length === 0
        ) {
            this.start();
        }
    }

    setRoom() {
        this.myNetWork.text = "";
        this.enemyNetWork.text = "";

        if (Global.room.roomInfo.playerList.length === 2) {
            this.setLeaveButtonTag(BUTTON_TAG.LEAVE);
        }

        Global.room.roomInfo.playerList.forEach(user => {
            let label: Laya.Label;

            if (user.id === MGOBE.Player.id) {
                label = this.myNetWork;
                if (user.customPlayerStatus === 1) {
                    // 玩家已准备
                    this.setReadyButtonTag(BUTTON_TAG.CANCEL_READY);
                } else {
                    // 玩家未准备
                    this.setReadyButtonTag(BUTTON_TAG.READY);
                }
                this.myHead.loadImage(user.customProfile);
            } else {
                label = this.enemyNetWork;
                if (user.customPlayerStatus === 1) {
                    // 敌人已准备
                    this.enemyStatus.loadImage("image/ready.png");
                } else {
                    // 敌人未准备
                    this.enemyStatus.loadImage("image/not_ready.png");
                }
                this.enemyHead.loadImage(user.customProfile);
            }

            if (user.commonNetworkState === MGOBE.ENUM.NetworkState.COMMON_ONLINE) {
                label.text = "在线";
            } else {
                label.text = "离线";
            }
        });

        if (Global.room.roomInfo.playerList.length <= 1) {
            this.enemyHead.loadImage("image/search.png");
            this.enemyStatus.loadImage("image/not_ready.png");
            this.enemyNetWork.text = "";
        }
    }

    start() {
        const startFunc = async () => {
            await this.changeState(0);

            // 只有房主才能调用开始帧同步
            if (Global.room.roomInfo.owner !== MGOBE.Player.id) {
                return;
            }

            let res = await this.startFrameSync();

            if (res !== MGOBE.ErrCode.EC_OK) {
                return this.showDialog("开始失败" + res, () => startFunc());
            }
        };

        startFunc();
    }

    async callMatchRoom() {
        this.showProgressBar(true);
        this.setLeaveButtonTag(BUTTON_TAG.CANCEL_MATCH);

        let res = await this.matchRoom();
        this.showProgressBar(false);

        if (res === MGOBE.ErrCode.EC_ROOM_PLAYER_ALREADY_IN_ROOM) {
            return;
        }

        if (res !== MGOBE.ErrCode.EC_OK) {
            return this.showDialog("准备失败" + res, () => this.openScene("Main"), () => this.openScene("Main"));
        }
    }

    async leave() {
        let res = await this.leaveRoom();
        
        if (!Global.room.isInRoom()) {
            // 直接离开
            return this.openScene("Main");
        }
    }

    async changeState(status?: number): Promise<boolean> {

        this.showProgressBar(true);
        let customStatus = this.buttonTag === BUTTON_TAG.READY ? 1 : 0;

        status !== undefined && (customStatus = status);

        let res = await this.changeCustomPlayerStatus(customStatus);

        this.showProgressBar(false);

        if (res !== MGOBE.ErrCode.EC_OK) {
            this.showDialog("修改状态失败");
            return Promise.resolve(false);
        }

        return Promise.resolve(true);
    }

    onRecvFrame(event: MGOBE.types.BroadcastEvent<MGOBE.types.RecvFrameBst>) {
        super.onRecvFrame(event);

        if (this.isDisable) {
            return;
        }

        this.isDisable = true;
        this.openScene("GameScene");
    }

    onDisable() {
        this.onUpdate = () => null;
        Global.room.onUpdate = null;
    }
}