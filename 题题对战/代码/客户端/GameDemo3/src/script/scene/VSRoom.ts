import Base, { GameState, Player, SerPushMsg, CMD } from "./Base";
import Global from "../Global";
import CircleSpriteRuntime from "../runtime/CircleSpriteRuntime";
import TimerRuntime from "../runtime/TimerRuntime";
import { modeViewXYAdjust, modeViewFilter } from "../Util";

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

	/** @prop {name: vsDialog, tips: "vsDialog", type: Node} */
	public vsDialog: Laya.Dialog;

	public timer;

	heads: CircleSpriteRuntime[][];

	constructor() {
		super();
	}

	async onAwake() {
		await super.onAwake();
	}

	onEnable(): void {
		this.initView();
		this.ready();
	}

	initView() {
		this.vsDialog.isPopupCenter = false;
		this.vsDialog.closeEffect = null;
		this.vsDialog.close();

		this.vsDialog.x += this.scene.x;
		this.vsDialog.y += this.scene.y;

		this.vsDialog.show();

		this.heads = [[this.head1, this.head2, this.head3], [this.head4, this.head5, this.head6]];
		this.heads.forEach(items => modeViewXYAdjust(items, item => item.parent, true));

		this.initPlayer();
	}

	getMyHeads() {
		return modeViewFilter(this.heads[0]);
	}

	getEnemyHeads() {
		return modeViewFilter(this.heads[1]);
	}

	initPlayer() {
		if (!Global.room) { return; }

		let myGroupHeads = this.getMyHeads();
		let enemyGroupHeads = this.getEnemyHeads();

		let teamId = Global.room.roomInfo.playerList[0].teamId;

		let group1 = Global.room.roomInfo.playerList.filter(u => u.teamId === teamId);
		let group2 = Global.room.roomInfo.playerList.filter(u => u.teamId !== teamId);

		let myGroup, enemyGroup;

		if (group1.filter(u => u.id === MGOBE.Player.id)[0]) {
			myGroup = group1;
			enemyGroup = group2;
		} else {
			myGroup = group2;
			enemyGroup = group1;
		}

		this.initGroup(myGroup, myGroupHeads);
		this.initGroup(enemyGroup, enemyGroupHeads);

		Global.matchMode = Math.max(myGroup.length, enemyGroup.length)
	}

	initGroup(group: Player[], heads: CircleSpriteRuntime[]) {
		group.forEach((player, i) => {
			let head = heads[i];
			setTimeout(() => {
				head && head.loadImage(player.customProfile);
			}, i * 250);
		});
	}

	async ready() {
		this.showProgressBar(true);

		// 获取房间
		let roomRes = await this.getUserRoom();

		if (!roomRes) {
			return this.readyFail();
		}

		Global.room.initRoom(roomRes);

		// 发送准备消息
		let res = await this.sendToGameSvr({ cmd: CMD.READY });

		if (res !== MGOBE.ErrCode.EC_OK) {
			return this.readyFail();
		}
		
		// 超时弹框重试
		this.timer = setTimeout(() => this.readyFail(), 15000);
	}

	readyFail() {
		Base.dialog.showDialog("提示", `准备失败，请重试`,
			{
				confirmCallback: () => this.ready()
			},
			{
				cancelCallback: () => this.handleErrToLeaveRoom(() => this.openScene("Main"))
			}
		);
	}

	async onRecvFromGameSvr(event: MGOBE.types.BroadcastEvent<MGOBE.types.RecvFromGameSvrBst>) {
		const err = await super.onRecvFromGameSvr(event);
		if (err) { return; }

		clearTimeout(this.timer);
		this.showProgressBar(false);

		// 跳转
		if (Global.gameState.finish) { return this.openScene("Finish") };
		if (Global.gameState.curQueId >= 0) { return this.openScene("Answer") };
	}

	onDisable() {
		this.vsDialog.close();
		this.readyFail = () => {};
		clearTimeout(this.timer);
	}
}