import Global from "../Global";
import "../../../libs/MGOBE";
import GameState from "../GameState";
import { getGameInfoFromStorage, setGameInfoToStorage } from "../Util";

export interface GameInfo { 
	gameId: string, 
	openId: string, 
	secretKey: string, 
	server: string, 
};

function initSDK(initGameInfo: GameInfo): Promise<boolean> {
	const { Room, Listener, ErrCode, ENUM, DebuggerLog } = MGOBE;

	Global.gameId = initGameInfo.gameId;
	Global.openId = initGameInfo.openId;
	Global.secretKey = initGameInfo.secretKey;
	Global.server = initGameInfo.server;

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

export default class Base extends Laya.Script {

	public static ProgressBar: Laya.Animation = null;
	public static sceneName: string;
	public scene: Laya.Scene;

	constructor() {
		super();
	}

	async onAwake() {
		// 初始化场景
		this.initScene();
		this.setBroadcast();

		await this.loadProgressBar();

		// 判断是否拿到玩家信息
		if (!Global.userInfo) {
			this.openScene("Auth");
			return;
		}

		// 登录
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
		// 记录当前 scene 名称
		Base.sceneName = this.scene.url.split(".")[0] || "";
	}

	// 对话框
	showDialog(content, confirm?, cancel?): void {
		wx.showModal({
			title: "提示", content: content + "", success: res => {
				res.confirm && confirm && confirm();
				!res.confirm && cancel && cancel();
			}
		});
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
			};
			setGameInfoToStorage(gameInfo);
		}

		const res = await initSDK(gameInfo);

		this.showProgressBar(false);

		if (res) {
			this.setBroadcast();
			// 游戏状态
			Global.state = new GameState();
			Global.state.initState();
		} else {
			this.showDialog("初始化失败");
		}

		return Promise.resolve(res);
	}

	// 创建房间
	createRoom(): Promise<number> {
		const playerInfo: MGOBE.types.CreateRoomPara["playerInfo"] = {
			name: Global.userInfo.nickName,
			customPlayerStatus: 0,
			customProfile: Global.userInfo.avatarUrl,
		};

		const createRoomPara: MGOBE.types.CreateRoomPara = {
			roomName: "猪猪对战",
			maxPlayers: 2,
			roomType: "1V1",
			customProperties: "",
			isPrivate: true,
			playerInfo,
		};

		return new Promise((resolve) => {
			Global.room.createRoom(createRoomPara, event => {
				return resolve(event.code);
			});
		});
	}

	// 获取自己的room
	getMyRoom(): Promise<boolean> {
		return new Promise((resolve) => {
			Global.room.initRoom();
			Global.room.getRoomDetail(event => {
				if (event.code === MGOBE.ErrCode.EC_OK) {
					return resolve(true);
				} else {
					return resolve(false);
				}
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

	// 房间匹配
	matchRoom(): Promise<number> {
		const playerInfo: MGOBE.types.MatchRoomPara["playerInfo"] = {
			name: Global.userInfo.nickName,
			customPlayerStatus: 0,
			customProfile: Global.userInfo.avatarUrl,
		};

		const matchRoomPara: MGOBE.types.MatchRoomPara = {
			playerInfo,
			maxPlayers: 2,
			roomType: "1V1",
		};

		return new Promise((resolve) => {
			Global.room.matchRoom(matchRoomPara, event => {
				return resolve(event.code);
			});
		});
	}

	// 修改玩家状态
	changeCustomPlayerStatus(customPlayerStatus): Promise<number> {
		return new Promise((resolve) => {
			Global.room.changeCustomPlayerStatus({ customPlayerStatus }, event => {
				return resolve(event.code);
			});
		});
	}

	// 开始帧同步
	startFrameSync(): Promise<number> {
		return new Promise((resolve) => {
			Global.room.startFrameSync({}, event => {
				return resolve(event.code);
			});
		});
	}

	// 更新游戏状态
	updateGlobalState(event: MGOBE.types.BroadcastEvent<MGOBE.types.RecvFrameBst>): void {
		Global.state.calcFrame(event.data, Global.room.roomInfo.frameRate);
	}

	// 设置广播处理
	setBroadcast(): void {

		if (!Global.room) { return; }

		Global.room.onJoinRoom = this.onJoinRoom.bind(this);
		Global.room.onLeaveRoom = this.onLeaveRoom.bind(this);
		Global.room.onDismissRoom = this.onDismissRoom.bind(this);
		Global.room.onStartFrameSync = this.onStartFrameSync.bind(this);
		Global.room.onStopFrameSync = this.onStopFrameSync.bind(this);
		Global.room.onRecvFrame = this.onRecvFrame.bind(this);
		Global.room.onChangeCustomPlayerStatus = this.onChangeCustomPlayerStatus.bind(this);
		Global.room.onAutoRequestFrameError = this.onAutoRequestFrameError.bind(this);
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

	onRecvFrame(event: MGOBE.types.BroadcastEvent<MGOBE.types.RecvFrameBst>) {
		this.updateGlobalState(event);
	}

	onChangeCustomPlayerStatus(event: MGOBE.types.BroadcastEvent<MGOBE.types.ChangeCustomPlayerStatusBst>) {
		console.log("onChangeUserState", "base");
	}

	onAutoRequestFrameError(event: MGOBE.types.BroadcastEvent<MGOBE.types.ResponseEvent<MGOBE.types.RequestFrameRsp>>) {
		console.error("frameErrorBroadcast", "base", event);

		this.showDialog("补帧失败，无法继续游戏" + event.data.code);
	};
}