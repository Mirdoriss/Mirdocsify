import Base from "./Base";
import Global from "../Global";
import CircleSpriteRuntime from "../runtime/CircleSpriteRuntime";

declare var GameGlobal;

export default class Main extends Base {

	/** @prop {name: scene, tips: "scene", type: Node} */
	public scene: Laya.Scene;

	/** @prop {name: head, tips: "head", type: Node} */
	public head: CircleSpriteRuntime;

	/** @prop {name: btn1, tips: "btn1", type: Node} */
	public btn1: Laya.Button;

	/** @prop {name: btn2, tips: "btn2", type: Node} */
	public btn2: Laya.Button;

	/** @prop {name: btn3, tips: "btn3", type: Node} */
	public btn3: Laya.Button;

	/** @prop {name: dialogPrefab, tips: "dialogPrefab", type: Prefab} */
	public dialogPrefab: Laya.Prefab;

	constructor() {
		super();
	}

	async onAwake() {
		await super.onAwake();
	}

	onEnable(): void {
		this.initView();
		this.initListener();
	}

	initView() {
		if (!Base.dialog && this.dialogPrefab) {
			Base.dialog = this.dialogPrefab.create();
			Base.dialog.show();
			Base.dialog.zOrder = 1000000;
			Base.dialog.close();
		}
		
		Global.userInfo && Global.userInfo.avatarUrl && this.head.loadImage(Global.userInfo.avatarUrl);
	}

	initListener() {
		this.btn1.on(Laya.Event.CLICK, this, () => {
			Global.matchMode = 1;
			!this.isInProgress() && this.openMatch();
		});

		this.btn2.on(Laya.Event.CLICK, this, () => {
			Global.matchMode = 2;
			// todo
		});

		this.btn3.on(Laya.Event.CLICK, this, () => {
			Global.matchMode = 3;
			// todo
		});
	}

	async leaveMyRoom() {
		this.showProgressBar(true);
		let res = await this.leaveRoom();

		if (res !== MGOBE.ErrCode.EC_OK) {
			Base.dialog.showDialog("提示", "退出房间失败，请重试", { confirmCallback: () => this.leaveMyRoom() });
		}

		this.showProgressBar(false);
	}

	handleInRoom() {
		Base.dialog.showDialog("提示", "玩家已在房间内，是否进入", { confirmCallback: () => this.openScene("VSRoom") }, { cancelCallback: () => this.leaveMyRoom() })
	}

	// 点击进入游戏后调用
	async openMatch() {

		this.showProgressBar(true);

		let res;

		if (!MGOBE.Player.id) {
			res = await this.login();

			if (!res) {
				return;
			}
		}

		res = await this.getUserRoom();

		this.showProgressBar(false);

		if (res) {
			// 玩家已经在房间内
			Global.room.initRoom(res);
			this.handleInRoom();
			return;
		}

		// 开始匹配
		this.openScene("MatchRoom");
	}
}