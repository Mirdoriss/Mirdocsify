import Global from "../Global";
import "../../../libs/MGOBE";
import DialogRuntime from "../runtime/DialogRuntime";
import { getGameInfoFromStorage, setGameInfoToStorage } from "../Util";

export default class Base extends Laya.Script {

	public static ProgressBar: Laya.Animation = null;
	public static dialog: DialogRuntime = null;
	public scene: Laya.Scene;

	constructor() {
		super();
	}

	async onAwake() {
		this.initScene();
		this.setBroadcast();

		Base.dialog && Base.dialog.close();

		await this.loadProgressBar();

		if (!Global.userInfo) {
			this.openScene("AuthScene");
			return;
		}

		if (!Global.openId) {
			await this.login();
		}
	}

	// 初始化场景设置
	initScene(): void {
		// 使场景居中
		this.scene.x = (Laya.stage.width - this.scene.width) / 2;
		this.scene.y = (Laya.stage.height - this.scene.height) / 2;
		// 自动清理
		this.scene.autoDestroyAtClosed = true;
	}

	// 加载进度条条
	loadProgressBar(): Promise<boolean> {
		if (Base.ProgressBar) {
			this.showProgressBar(false);
			return Promise.resolve(true);
		};

		const loadingPath = "ani/load.json";

		return new Promise((resolve) => {
			Laya.loader.load(loadingPath, Laya.Handler.create(this, () => {
				Base.ProgressBar = new Laya.Animation();
				Base.ProgressBar.loadAtlas(loadingPath);
				Base.ProgressBar.interval = 100;
				Base.ProgressBar.index = 1;
				Base.ProgressBar.loop = true;
				Base.ProgressBar.play();

				var bounds = Base.ProgressBar.getGraphicBounds();
				Base.ProgressBar.pivot(bounds.width / 2, bounds.height / 2);
				Base.ProgressBar.pos(this.scene.width / 2, this.scene.height - 20);

				Base.ProgressBar.x = this.scene.x + this.scene.width / 2;

				Laya.stage.addChild(Base.ProgressBar);

				this.showProgressBar(false);

				return resolve(true);
			}), null, Laya.Loader.ATLAS);
		});
	}

	// 关闭/显示 进度条
	showProgressBar(show: boolean): void {
		Base.ProgressBar && (Base.ProgressBar.visible = show);
	}

	// 判断进度条正在显示中
	isInProgress(): boolean {
		return !!Base.ProgressBar && Base.ProgressBar.visible === true;
	}

	// 打开场景
	openScene(sceneName: string) {
		sceneName = sceneName.replace(".json", "") + ".json";
		laya.display.Scene.open(sceneName);
	}

	// 微信登录态
	async login(): Promise<boolean> {

		// 已登录
		if (Global.openId && MGOBE.Player.id) return Promise.resolve(true);

		this.showProgressBar(true);

		let gameInfo = getGameInfoFromStorage();

		if (!gameInfo) {
			gameInfo = {
				gameId: "",
				openId: Date.now() + "_" + Math.random(),
				secretKey: "",
				server: "",
				matchCodes: {
					1: "", // 1V1 匹配Code
					2: "", // 2V2 匹配Code
					3: "", // 2V2 匹配Code
				}
			};
			setGameInfoToStorage(gameInfo);
		}

		const res = await initSDK(gameInfo);

		this.showProgressBar(false);

		if (res) {
			this.setBroadcast();
		} else {
			Base.dialog.showDialog("提示", "初始化失败");
		}

		return Promise.resolve(res);
	}

	// 获取玩家的房间信息
	getUserRoom(): Promise<MGOBE.types.RoomInfo> {
		return new Promise((resolve) => {
			MGOBE.Room.getRoomByRoomId({ roomId: undefined }, event => {
				if (event.data && event.data.roomInfo) {
					Global.room.initRoom(event.data.roomInfo);
					return resolve(event.data.roomInfo);
				}

				resolve(null);
			});
		});
	}

	// 退出房间
	leaveRoom(): Promise<number> {
		return new Promise((resolve) => {
			Global.room.leaveRoom({}, event => {
				return resolve(event.code);
			});
		});
	}

	// 发起匹配
	match(): Promise<number> {
		return new Promise((resolve) => {
			Global.room.matchPlayers({
				matchCode: Global.matchCodes[Global.matchMode],
				playerInfo: {
					name: Global.userInfo.nickName,
					customPlayerStatus: 1,
					customProfile: Global.userInfo.avatarUrl,
					matchAttributes: []
				}
			}, event => {
				return resolve(event.code);
			});
		});
	}

	// 取消匹配
	cancelMatch(): Promise<number> {
		return new Promise((resolve) => {
			Global.room.cancelPlayerMatch({ matchType: MGOBE.ENUM.MatchType.PLAYER_COMPLEX }, event => {
				return resolve(event.code);
			});
		});
	}

	// 发送消息
	sendToGameSvr(data: object): Promise<number> {
		return new Promise((resolve) => {
			Global.room.sendToGameSvr({ data }, event => {
				return resolve(event.code);
			})
		});
	}

	// 获得自己的队伍
	getMyGroup(): Player[] {
		if (!Global.gameState) { return; }

		return Global.gameState.playerGroup.filter(group => group.filter(player => player.playerId === MGOBE.Player.id).length > 0)[0];
	}

	// 获得敌人的队伍
	getEnemyGroup(): Player[] {
		if (!Global.gameState) { return; }

		return Global.gameState.playerGroup.filter(group => group.filter(player => player.playerId === MGOBE.Player.id).length === 0)[0];
	}

	setGameState(gameState: GameState) {
		Global.gameState = gameState;
		Global.myGroup = this.getMyGroup();
		Global.enemyGroup = this.getEnemyGroup();
		Global.playsers = Global.myGroup.concat(Global.enemyGroup);

		Global.matchMode = Global.myGroup.length || 1;
	}

	// 设置广播处理
	setBroadcast(): void {

		if (!Global.room) { return; }

		Global.room.onJoinRoom = this.onJoinRoom.bind(this);
		Global.room.onLeaveRoom = this.onLeaveRoom.bind(this);
		Global.room.onDismissRoom = this.onDismissRoom.bind(this);
		Global.room.onStartFrameSync = this.onStartFrameSync.bind(this);
		Global.room.onStopFrameSync = this.onStopFrameSync.bind(this);
		Global.room.onChangeCustomPlayerStatus = this.onChangeCustomPlayerStatus.bind(this);
		Global.room.onAutoRequestFrameError = this.onAutoRequestFrameError.bind(this);
		Global.room.onRecvFromGameSvr = this.onRecvFromGameSvr.bind(this);
	}

	async handleErrToLeaveRoom(callback) {
		let success = await this.leaveRoom();
		let res = await callback(success);

		return res;
	}

	onJoinRoom(event: MGOBE.types.BroadcastEvent<MGOBE.types.JoinRoomBst>) {
		console.log("onJoinRoom", "base");
	}

	onLeaveRoom(event: MGOBE.types.BroadcastEvent<MGOBE.types.LeaveRoomBst>) {
		console.log("onLeaveRoom", "base");
	}

	onDismissRoom(event: MGOBE.types.BroadcastEvent<MGOBE.types.DismissRoomBst>) {
		console.log("onDismissRoom", "base");
	}

	onStartFrameSync(event: MGOBE.types.BroadcastEvent<null>) {
		console.log("onStartFrameSync", "base");
	}

	onStopFrameSync(event: MGOBE.types.BroadcastEvent<null>) {
		console.log("onStopFrameSync", "base");
	}

	onChangeCustomPlayerStatus(event: MGOBE.types.BroadcastEvent<MGOBE.types.ChangeCustomPlayerStatusBst>) {
		console.log("onChangeCustomPlayerStatus", "base");
	}

	onAutoRequestFrameError(event: MGOBE.types.BroadcastEvent<MGOBE.types.ResponseEvent<MGOBE.types.RequestFrameRsp>>) {
		console.error("onAutoRequestFrameError", "base");
	};

	async onRecvFromGameSvr(event: MGOBE.types.BroadcastEvent<MGOBE.types.RecvFromGameSvrBst>): Promise<any> {
		console.log("onRecvFromGameSvr", event);

		let data: SerPushMsg = event.data.data as SerPushMsg;
		let err = false;

		if (!data) {
			return;
		}

		if (data.cmd === SER_PUSH_CMD.ERR) {
			err = true;
			Base.dialog.showDialog("提示", `Error`,
				{
					confirmCallback: () => this.handleErrToLeaveRoom(() => this.openScene("Main"))
				},
				{
					cancelCallback: () => this.handleErrToLeaveRoom(() => this.openScene("Main"))
				}
			);
		}

		if (data.gameState && data.gameState.playerGroup) {
			Global.matchMode = data.gameState.playerGroup[0].length;
		}

		if (data.cmd === SER_PUSH_CMD.CURRENT) {
			this.setGameState(data.gameState);
		}

		if (data.cmd === SER_PUSH_CMD.GAME_STEP) {
			this.setGameState(data.gameState);

			if (Global.gameState.finish) {
				this.openScene("Finish");
			}
		}

		return err;
	}
}

export interface GameInfo {
	gameId: string,
	openId: string,
	secretKey: string,
	server: string,
	matchCodes: { 1: string, 2: string, 3: string, },
};

function initSDK(initGameInfo: GameInfo): Promise<boolean> {
	const { Room, Listener, ErrCode, ENUM, DebuggerLog } = MGOBE;

	Global.gameId = initGameInfo.gameId;
	Global.openId = initGameInfo.openId;
	Global.secretKey = initGameInfo.secretKey;
	Global.server = initGameInfo.server;
	Global.matchCodes = initGameInfo.matchCodes;
	
	const gameInfo: MGOBE.types.GameInfoPara = {
		gameId: Global.gameId,
		openId: Global.openId,
		secretKey: Global.secretKey,
	};

	const config: MGOBE.types.ConfigPara = {
		url: Global.server,
		reconnectMaxTimes: 5,
		reconnectInterval: 4000,
		resendInterval: 2000,
		resendTimeout: 20000,
		isAutoRequestFrame: true,
	};

	return new Promise(resolve => {
		MGOBE.Listener.init(gameInfo, config, event => {
			if (event.code === MGOBE.ErrCode.EC_OK) {
				Global.room = new Room();
				MGOBE.Listener.add(Global.room);

				return resolve(true);
			}

			return resolve(false);
		});
	});
}

export interface Player {
	score: number,
	ans: number,
	sumScore: number,
	playerId: string,
	customStatus: number,
	customProfile: string,
	teamId: string,
	name: string,
}

export interface Que {
	tag: string,
	que: string,
	opt: string[],
	ans: number,
}

export interface GameState {
	playerGroup: [Player[], Player[]],
	que: Que,
	time: number,
	finish: boolean,
	curQueId: number,
}

export interface SerPushMsg {
	cmd: SER_PUSH_CMD,
	err: string,
	gameState: GameState,
}

export enum SER_PUSH_CMD {
	CURRENT = 1,
	GAME_STEP = 2,
	ERR = 3,
}

export const CMD = {
	READY: "READY",
	SUBMIT: "SUBMIT",
	CURRENT: "CURRENT",
}
