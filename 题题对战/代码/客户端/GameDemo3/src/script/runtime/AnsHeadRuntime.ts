import Global from "../Global";
import AnsHeadUpdate from "../ui/AnsHeadUpdate";

export default class AnsHeadRuntime extends Laya.Box {

    public updater: AnsHeadUpdate = null;

    constructor() {
        super();
    }

    public isShowResult: boolean = false;

    public playerId: string = "";
    public headUrl: string = "";
    public score: number = 0;
    public result: boolean = false;
    public hasPrize: boolean = false;
    public isCrown: boolean = false;

    init(updater: AnsHeadUpdate) {
        this.updater = updater;

        let arrow = this.updater.arrow;
        arrow.visible = !!(this.playerId === MGOBE.Player.id);

        this.updater.crown.visible = false;
    }

    showResult(_playerId: string, _score: number, _result: boolean, _hasPrize: boolean) {
        this.isShowResult = true;

        this.playerId = _playerId;
        this.score = _score;
        this.result = _result;
        this.hasPrize = _hasPrize;

        if (!this.updater) { return; }

        let prize = this.updater.prize;
        let layer = this.updater.layer;
        let result = this.updater.result;
        let score = this.updater.score;

        prize.visible = !!_hasPrize;
        layer.visible = true;

        result.loadImage(this.result ? "image/zhen-que.png" : "image/cuo-wu.png");
        result.visible = true;

        score.text = this.score + "";
        score.pivot(score.width / 2, 0).pos(this.width / 2, score.y);
        score.visible = true;
    }

    hideResult() {
        this.isShowResult = false;

        let prize = this.updater.prize;
        let layer = this.updater.layer;
        let result = this.updater.result;
        let score = this.updater.score;

        prize.visible = false;
        layer.visible = false;
        result.visible = false;
        score.visible = false;
    }

    loadHeadImage(url: string) {
        this.headUrl = url;

        if (!this.updater) { return; }

        this.updater.head.loadImage(this.headUrl);
    }

    showCrown() {
        this.isCrown = true;
        if (!this.updater) { return; }

        this.updater.crown.visible = true;
    }

    hideCrown() {
        this.isCrown = false;
        if (!this.updater) { return; }

        this.updater.crown.visible = false;
    }
}