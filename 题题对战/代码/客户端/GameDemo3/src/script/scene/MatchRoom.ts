import Base from "./Base";
import Global from "../Global";
import CircleSpriteRuntime from "../runtime/CircleSpriteRuntime";
import TimerRuntime from "../runtime/TimerRuntime";
import { modeViewXYAdjust } from "../Util";

export default class MatchRoom extends Base {

	/** @prop {name: scene, tips: "scene", type: Node} */
	public scene: Laya.Scene;

	/** @prop {name: head1, tips: "head1", type: Node} */
	public head1: CircleSpriteRuntime;

	/** @prop {name: head2, tips: "head2", type: Node} */
	public head2: CircleSpriteRuntime;

	/** @prop {name: head3, tips: "head3", type: Node} */
	public head3: CircleSpriteRuntime;

	/** @prop {name: head4, tips: "head4", type: Node} */
	public head4: CircleSpriteRuntime;

	/** @prop {name: head5, tips: "head5", type: Node} */
	public head5: CircleSpriteRuntime;

	/** @prop {name: head6, tips: "head6", type: Node} */
	public head6: CircleSpriteRuntime;

	/** @prop {name: searchSprite, tips: "searchSprite", type: Node} */
	public searchSprite: Laya.Sprite;

	/** @prop {name: loadlabel, tips: "loadlabel", type: Node} */
	public loadlabel: Laya.Label;

	/** @prop {name: btn, tips: "btn", type: Node} */
	public btn: Laya.Button;

	/** @prop {name: timerCmp, tips: "timerCmp", type: Node} */
	public timerCmp: TimerRuntime;

	public timer: number = 0;

	isDisable: boolean = false;

	constructor() {
		super();
	}

	async onAwake() {
		await super.onAwake();

		this.isDisable = false;

		Global.room.onUpdate = () => {
			if (Global.room.isInRoom()) {
				// 已经在房间内
				this.openVSScene();
			}
		};
	}

	onEnable(): void {
		this.initView();
		this.initListener();

		this.showProgressBar(false);
		this.callMatch();
	}

	initView() {
		this.head1.loadImage(Global.userInfo.avatarUrl || "");

		const heads = [[this.head1, this.head2, this.head3], [this.head4, this.head5, this.head6]];
		heads.forEach(items => modeViewXYAdjust(items, item => item, false));
	}

	initListener() {
		this.btn.offAll();
		this.btn.on(Laya.Event.CLICK, this, () => {
			this.callCancelMatch();
		});
	}

	async callMatch() {
		this.setTimer();

		let res;

		res = await this.match();

		if (this.isDisable) { return; }

		// 已经在匹配中
		if (res === MGOBE.ErrCode.EC_MATCH_PLAYER_IS_IN_MATCH) {
			Base.dialog.showDialog("提示", "已经在匹配中，请等待");
			return;
		}

		this.clearTimer();

		// 已经在房间内
		if (res === MGOBE.ErrCode.EC_ROOM_PLAYER_ALREADY_IN_ROOM) {
			this.openVSScene();
			return;
		}

		// 匹配成功
		if (res === MGOBE.ErrCode.EC_OK) {
			this.openVSScene();
			return;
		}

		Base.dialog.showDialog("提示", "超时未匹配到对手，请您重新匹配",
			{ confirmCallback: () => this.callMatch() },
			{ cancelCallback: () => this.openScene("Main") }
		);
	}

	async handleMatchTimeout() {

		if (Global.room.isInRoom()) {
			return;
		}

		let res = await this.cancelMatch();

		if (this.isDisable) { return; }

		// 取消成功
		if (res === MGOBE.ErrCode.EC_OK) {
			Base.dialog.showDialog("提示", "超时未匹配到对手，请您重新匹配",
				{ confirmCallback: () => this.callMatch() },
				{ cancelCallback: () => this.openScene("Main") }
			);
			return;
		}

		// 已经在房间内
		if (res === MGOBE.ErrCode.EC_ROOM_PLAYER_ALREADY_IN_ROOM) {
			this.openVSScene();
			return;
		}

		Base.dialog.showDialog("提示", "超时未匹配到对手，请您重新匹配",
			{ confirmCallback: () => this.callMatch() },
			{ cancelCallback: () => this.openScene("Main") }
		);
	}

	async callCancelMatch() {
		let res = await this.cancelMatch();

		if (this.isDisable) { return; }

		// 取消成功
		if (res === MGOBE.ErrCode.EC_OK) {
			this.openScene("Main");
			return;
		}

		// 已经在房间内
		if (res === MGOBE.ErrCode.EC_ROOM_PLAYER_ALREADY_IN_ROOM) {
			this.openVSScene();
			return;
		}
	}

	openVSScene() {
		!this.isDisable && this.openScene("VSRoom");
	}

	setTimer() {
		let time = 90000;
		this.clearTimer();
		this.timerCmp.setTimer(time / 1000, () => this.handleMatchTimeout());
		this.timerCmp.run();
		this.timer = setTimeout(() => this.handleTimeout(), time);
	}

	clearTimer() {
		clearTimeout(this.timer);
		this.timer = 0;
		this.timerCmp.clearTimer();
	}

	handleTimeout() {
		this.clearTimer();
	}

	onDisable() {
		this.clearTimer();
		this.callMatch = () => null;
		this.handleMatchTimeout = () => null;
		Global.room.onUpdate = () => null;
		this.isDisable = true;
		Base.dialog.close();
	}
}