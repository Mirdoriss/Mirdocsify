import Base, { Player, CMD, Que, GameState } from "./Base";
import Global from "../Global";
import AnsHeadRuntime from "../runtime/AnsHeadRuntime";
import TimerRuntime from "../runtime/TimerRuntime";
import GradeRuntime from "../runtime/GradeRuntime";
import QueRuntime from "../runtime/QueRuntime";
import AnsRuntime from "../runtime/AnsRuntime";
import CircleSpriteRuntime from "../runtime/CircleSpriteRuntime";
import { modeViewFilter, modeViewXYAdjust } from "../Util";

const number = ["一", "二", "三", "四", "五"];

export default class Answer extends Base {

	/** @prop {name: scene, tips: "scene", type: Node} */
	public scene: Laya.Scene;

	/** @prop {name: headPrefab, tips: "headPrefab", type: Prefab} */
	public headPrefab: Laya.Prefab;

	/** @prop {name: head1, tips: "head1", type: Node} */
	public head1: AnsHeadRuntime;

	/** @prop {name: head2, tips: "head2", type: Node} */
	public head2: AnsHeadRuntime;

	/** @prop {name: head3, tips: "head3", type: Node} */
	public head3: AnsHeadRuntime;

	/** @prop {name: head4, tips: "head4", type: Node} */
	public head4: AnsHeadRuntime;

	/** @prop {name: head5, tips: "head5", type: Node} */
	public head5: AnsHeadRuntime;

	/** @prop {name: head6, tips: "head6", type: Node} */
	public head6: AnsHeadRuntime;

	/** @prop {name: timer, tips: "timer", type: Node} */
	public timer: TimerRuntime;

	/** @prop {name: grade, tips: "grade", type: Node} */
	public grade: GradeRuntime;

	/** @prop {name: queDialog, tips: "queDialog", type: Node} */
	public queDialog: QueRuntime;

	/** @prop {name: ans, tips: "ans", type: Node} */
	public ans: AnsRuntime;

	/** @prop {name: bgBox, tips: "bgBox", type: Node} */
	public bgBox: Laya.Box;

	private heads: AnsHeadRuntime[][];

	private playersAns: number[] = [];
	private curQueId: number;

	private offsetX;
	private offsetY;

	private isSubmiting = false;

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
		this.offsetX = this.bgBox.x + this.scene.x;
		this.offsetY = this.bgBox.y + this.scene.y;

		this.heads = [[this.head1, this.head2, this.head3], [this.head4, this.head5, this.head6]];
		this.heads.forEach(items => modeViewXYAdjust(items, item => item, true));

		this.initPlayer();
		this.setQue();
	}

	initListener() {
		this.ans.onSelect = (index) => this.submit(index);
	}

	getMyHeads() {
		return modeViewFilter(this.heads[0]);
	}

	getEnemyHeads() {
		return modeViewFilter(this.heads[1]);
	}

	initPlayer() {
		if (!Global.gameState) { return; }

		let myGroupHeads = this.getMyHeads();
		let enemyGroupHeads = this.getEnemyHeads();

		this.initGroup(Global.myGroup, myGroupHeads);
		this.initGroup(Global.enemyGroup, enemyGroupHeads);

		let images = [];

		Global.myGroup.forEach(p => images.push(p.customProfile));
		Global.enemyGroup.forEach(p => images.push(p.customProfile));

		this.ans.setHeadImages(images as any);
	}

	initGroup(group: Player[], heads: AnsHeadRuntime[]) {
		group.forEach((player, i) => {
			let head = heads[i];

			if (!head) { return; }

			head.loadHeadImage(player.customProfile);
		});
	}

	setQue() {
		const gameState = Global.gameState;
		const me = Global.myGroup.filter(player => player.playerId === MGOBE.Player.id)[0];
		const que = gameState.que;
		const heads = [...this.getMyHeads(), ...this.getEnemyHeads()];

		if (!que || gameState.curQueId > 4) { return; }

		if (this.curQueId !== gameState.curQueId) {
			this.setNewQue(gameState, que);
		}

		let maxMyGroupScore = Math.max.apply(Math, Global.myGroup.map(p => p.score));
		let mySum = Global.myGroup.reduce((score, player) => score + player.sumScore, 0);
		let enemySum = Global.enemyGroup.reduce((score, player) => score + player.sumScore, 0);

		this.grade.setGrades(mySum, enemySum);

		Global.playsers.forEach((p, i) => {
			if (p.ans < 0) { return heads[i].hideResult(); }

			this.playersAns[i] = p.ans;

			let hasPrize = p.score === maxMyGroupScore && i < 3 && Global.myGroup.filter(player => player.ans < 0).length <= 0 && p.score > 0;
			gameState.time <= 0 && heads[i].showResult(p.playerId, p.score, p.ans === que.ans, hasPrize);
		});

		this.ans.showAnswers.apply(this.ans, que.opt);
		this.ans.showPlayersAnswer(this.playersAns as any, me.ans, que.ans, gameState.time <= 0);

		this.playersAns.filter(ans => ans < 0).length <= 0 && this.timer.clearTimer();

		this.curQueId = gameState.curQueId;
	}

	setNewQue(gameState: GameState, que: Que) {
		this.timer.setTimer(Math.min(15, gameState.time / 1000 - 2), null);
		this.playersAns = [-1, -1, -1, -1, -1, -1];
		this.queDialog.showQuestion(`第${number[gameState.curQueId]}题`, que.tag, que.que, this.offsetX, this.offsetY);

		gameState.curQueId === 4 && this.queDialog.showDouble();

		// 隐藏答案后再显示
		this.ans.aniShow(() => this.timer.run());
	}

	async submit(ans: number) {

		if (this.isSubmiting) { return; }

		this.isSubmiting = true;

		await this.sendToGameSvr({ cmd: CMD.SUBMIT, ans });

		this.isSubmiting = false;
	}

	async onRecvFromGameSvr(event: MGOBE.types.BroadcastEvent<MGOBE.types.RecvFromGameSvrBst>) {
		if (await super.onRecvFromGameSvr(event)) { return; }

		this.setQue();
	}

	onDisable() {
		this.queDialog.close();
	}
}