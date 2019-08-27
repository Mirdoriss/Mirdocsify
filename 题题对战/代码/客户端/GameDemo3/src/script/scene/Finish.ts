import Base, { Player } from "./Base";
import Global from "../Global";
import DialogRuntime from "../runtime/DialogRuntime";
import AnsHeadRuntime from "../runtime/AnsHeadRuntime";
import { modeViewFilter, modeViewXYAdjust } from "../Util";

export default class Finish extends Base {

	/** @prop {name: scene, tips: "scene", type: Node} */
	public scene: Laya.Scene;

	/** @prop {name: resDialog, tips: "resDialog", type: Node} */
	public resDialog: Laya.Dialog;

	/** @prop {name: redScore, tips: "redScore", type: Node} */
	public redScore: Laya.Label;

	/** @prop {name: blueScore, tips: "blueScore", type: Node} */
	public blueScore: Laya.Label;

	/** @prop {name: name1, tips: "name1", type: Node} */
	public name1: Laya.Label;

	/** @prop {name: score1, tips: "score1", type: Node} */
	public score1: Laya.Label;

	/** @prop {name: name2, tips: "name2", type: Node} */
	public name2: Laya.Label;

	/** @prop {name: score2, tips: "score2", type: Node} */
	public score2: Laya.Label;

	/** @prop {name: name3, tips: "name3", type: Node} */
	public name3: Laya.Label;

	/** @prop {name: score3, tips: "score3", type: Node} */
	public score3: Laya.Label;

	/** @prop {name: name4, tips: "name4", type: Node} */
	public name4: Laya.Label;

	/** @prop {name: score4, tips: "score4", type: Node} */
	public score4: Laya.Label;

	/** @prop {name: name5, tips: "name5", type: Node} */
	public name5: Laya.Label;

	/** @prop {name: score5, tips: "score5", type: Node} */
	public score5: Laya.Label;

	/** @prop {name: name6, tips: "name6", type: Node} */
	public name6: Laya.Label;

	/** @prop {name: score6, tips: "score6", type: Node} */
	public score6: Laya.Label;

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

	/** @prop {name: resLabel, tips: "resLabel", type: Node} */
	public resLabel: Laya.Label;

	/** @prop {name: resScore, tips: "resScore", type: Node} */
	public resScore: Laya.Label;

	/** @prop {name: mvpScore, tips: "mvpScore", type: Node} */
	public mvpScore: Laya.Label;

	/** @prop {name: sumScore, tips: "sumScore", type: Node} */
	public sumScore: Laya.Label;

	/** @prop {name: againBth, tips: "againBth", type: Node} */
	public againBth: Laya.Sprite;

	/** @prop {name: backBth, tips: "backBth", type: Node} */
	public backBth: Laya.Sprite;

	heads: AnsHeadRuntime[][];
	names: Laya.Label[][];
	scores: Laya.Label[][];

	constructor() {
		super();
	}

	async onAwake() {
		await super.onAwake();
	}

	onEnable() {
		this.initView();
		this.initListener();
		this.leaveRoom();
	}

	initView() {
		this.resDialog.isPopupCenter = false;
		this.resDialog.closeEffect = null;
		this.resDialog.close();

		this.resDialog.x = this.scene.x + 153;
		this.resDialog.y = this.scene.y + 24;

		this.heads = [[this.head1, this.head2, this.head3], [this.head4, this.head5, this.head6]];
		this.names = [[this.name1, this.name2, this.name3], [this.name4, this.name5, this.name6]];
		this.scores = [[this.score1, this.score2, this.score3], [this.score4, this.score5, this.score6]];

		this.heads.forEach(items => modeViewXYAdjust(items, item => item.parent, true));

		this.showResult();
	}

	initListener() {
		this.againBth.offAll();
		this.backBth.offAll();

		this.againBth.on(Laya.Event.CLICK, this, () => !this.isInProgress() && this.OnAgain());
		this.backBth.on(Laya.Event.CLICK, this, () => !this.isInProgress() && this.OnBack());
	}

	async OnAgain() {
		this.showProgressBar(true);

		let res = await this.leaveRoom();
		this.showProgressBar(false);

		if (!res) {
			Base.dialog.showDialog("提示", "操作失败");
			return;
		}

		return this.openScene("MatchRoom");
	}

	async OnBack() {
		this.showProgressBar(true);

		let res = await this.leaveRoom();
		this.showProgressBar(false);

		if (!res) {
			Base.dialog.showDialog("提示", "操作失败");
			return;
		}

		return this.openScene("Main");
	}

	showResult() {
		let u = Global.userInfo.avatarUrl;
		let heads = [...modeViewFilter(this.heads[0]), ...modeViewFilter(this.heads[1])];
		let names = [...modeViewFilter(this.names[0]), ...modeViewFilter(this.names[1])];
		let scores = [...modeViewFilter(this.scores[0]), ...modeViewFilter(this.scores[1])];
		let players = Global.myGroup.concat(Global.enemyGroup);
		let me: Player = null;
		let maxSumScore = -100;

		players.forEach((player, i) => {
			heads[i].loadHeadImage(player.customProfile);
			this.setName(names[i], player.name);
			this.setScore(scores[i], player.sumScore);

			player.playerId === MGOBE.Player.id && (me = player);

			player.sumScore > maxSumScore && (maxSumScore = player.sumScore);
		});

		if (!me) { return; }

		let redScore = Global.myGroup.reduce((s, p) => s + p.sumScore, 0);
		let blueScore = Global.enemyGroup.reduce((s, p) => s + p.sumScore, 0);

		this.setRedScore(redScore);
		this.setBlueScore(blueScore);

		let result: Result;

		if (redScore > blueScore) {
			result = Result.win;
		} else if (redScore < blueScore) {
			result = Result.fail
		} else {
			result = Result.draw;
		}

		let isMVP = me.sumScore === maxSumScore && maxSumScore > 0;
		let mvpScore = isMVP ? MVP_COINS : 0;

		this.setMvpScore(mvpScore);
		this.setResultScore(result, ResultCoins[result]);
		this.setSumScore(ResultCoins[result] + mvpScore);
		this.showResDialog(result);

		players.forEach((player, i) => {
			player.sumScore === maxSumScore && maxSumScore > 0 && heads[i].showCrown();
		});

		return ResultCoins[result] + mvpScore;
	}

	setName(label: Laya.Label, name: string) {
		let parent = label.parent as Laya.Box;
		label.text = this.nameToStr(name);
		label.pivot(label.width / 2, 0).pos(parent.width / 2, label.y);
		label.bold = true;
	}

	setScore(label: Laya.Label, score: number) {
		let parent = label.parent._children[0] as Laya.Box;
		label.text = score + "";
		label.pivot(label.width / 2, label.height / 2).pos(parent.width / 2, parent.height / 2 + parent.y);
		label.bold = true;
	}

	setRedScore(score: number) {
		let parent = this.redScore.parent as Laya.Box;
		this.redScore.text = score + "";
		this.redScore.pivot(this.redScore.width / 2, this.redScore.height / 2).pos(parent.width / 2, parent.height / 2);
		this.redScore.bold = true;
	}

	setBlueScore(score: number) {
		let parent = this.blueScore.parent as Laya.Box;
		this.blueScore.text = score + "";
		this.blueScore.pivot(this.blueScore.width / 2, this.blueScore.height / 2).pos(parent.width / 2, parent.height / 2);
		this.blueScore.bold = true;
	}

	setSumScore(score: number) {
		this.sumScore.text = this.socreToStr(score) + "";
		this.sumScore.bold = true;
	}

	setMvpScore(score: number) {
		this.mvpScore.text = this.socreToStr(score) + "";
		this.mvpScore.bold = true;

		if (score === 0) {
			this.mvpScore.text = "-";
		}
	}

	setResultScore(result: Result, score: number) {
		let info = ResultInfo[result];

		this.resLabel.text = info.text;
		this.resScore.text = this.socreToStr(score) + "";

		this.resLabel.color = this.resScore.color = info.color;

		this.resLabel.bold = true;
		this.resScore.bold = true;
	}

	showResDialog(result: Result) {
		let info = ResultInfo[result];
		this.resDialog.loadImage(info.path, new Laya.Handler(this, () => {
			this.resDialog.show();
		}));
	}

	socreToStr(score: number): string {
		if (score > 0) return "+" + score;
		if (score < 0) return "-" + score;
		return score + "";
	}

	nameToStr(name: string): string {
		if (name.length > 4) return name.slice(0, 4) + "...";
		return name + "";
	}

	onDisable() {
		this.resDialog.close();
	}
}

enum Result {
	win = 1,
	fail = 2,
	draw = 3,
}

const ResultCoins = {
	1: 150,
	2: 0,
	3: 100
}

const MVP_COINS = 100;

const ResultInfo = {
	1: {
		text: "成功",
		color: "#ff2f2f",
		path: "image/shen-li1.png",
	},
	2: {
		text: "失败",
		color: "#616161",
		path: "image/shi-bai.png",
	},
	3: {
		text: "平局",
		color: "#0c50ed",
		path: "image/ping-ju.png",
	},
}