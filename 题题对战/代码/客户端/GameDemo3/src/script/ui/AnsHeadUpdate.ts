import AnsHeadRuntime from "../runtime/AnsHeadRuntime";
import CircleSpriteRuntime from "../runtime/CircleSpriteRuntime";

export default class AnsHeadUpdate extends Laya.Script {

    /** @prop {name: prize, tips: "prize", type: Node} */
    public prize: Laya.Sprite;

    /** @prop {name: arrow, tips: "arrow", type: Node} */
    public arrow: Laya.Sprite;

    /** @prop {name: layer, tips: "layer", type: Node} */
    public layer: Laya.Sprite;

    /** @prop {name: result, tips: "result", type: Node} */
    public result: Laya.Sprite;

    /** @prop {name: crown, tips: "crown", type: Node} */
    public crown: Laya.Sprite;

    /** @prop {name: score, tips: "score", type: Node} */
    public score: Laya.Label;

    /** @prop {name: head, tips: "head", type: Node} */
    public head: CircleSpriteRuntime;

    /** @prop {name: ansHead, tips: "ansHead", type: Node} */
    public ansHead: AnsHeadRuntime;

    private init: boolean = false;

    constructor() {
        super();
    }

    onAwake(): void {
        if (!this.ansHead) return;

        this.ansHead.init(this);
    }

    onUpdate() {
        if (!this.ansHead || !this.ansHead.updater) {
            return;
        }

        if (!this.init) {
            this.init = true;

            if (this.ansHead.playerId.length > 0 && this.ansHead.isShowResult) {
                this.ansHead.showResult(this.ansHead.playerId, this.ansHead.score, this.ansHead.result, this.ansHead.hasPrize);
            }

            if (!this.ansHead.isShowResult) {
                this.ansHead.hideResult();
            }

            if (this.ansHead.headUrl) {
                this.ansHead.loadHeadImage(this.ansHead.headUrl);
            }

            console.log("crown", this.ansHead.isCrown);
            if (this.ansHead.isCrown) {
                this.ansHead.showCrown();
            }
        }
    }
}