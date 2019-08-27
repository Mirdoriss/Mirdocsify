import AnsRuntime from "../runtime/AnsRuntime";
import CircleSpriteRuntime from "../runtime/CircleSpriteRuntime";

export default class AnsUpdate extends Laya.Script {

    /** @prop {name: a1, tips: "a1", type: Node} */
    public a1: Laya.Label;

    /** @prop {name: a2, tips: "a2", type: Node} */
    public a2: Laya.Label;

    /** @prop {name: a3, tips: "a3", type: Node} */
    public a3: Laya.Label;

    /** @prop {name: a4, tips: "a4", type: Node} */
    public a4: Laya.Label;

    /** @prop {name: h1, tips: "h1", type: Node} */
    public h1: Laya.Box;

    /** @prop {name: h2, tips: "h2", type: Node} */
    public h2: Laya.Box;

    /** @prop {name: h3, tips: "h3", type: Node} */
    public h3: Laya.Box;

    /** @prop {name: h4, tips: "h4", type: Node} */
    public h4: Laya.Box;

    /** @prop {name: h5, tips: "h5", type: Node} */
    public h5: Laya.Box;

    /** @prop {name: h6, tips: "h6", type: Node} */
    public h6: Laya.Box;

    /** @prop {name: ans, tips: "ans", type: Node} */
    public ans: AnsRuntime;

    private init: boolean = false;

    constructor() {
        super();
    }

    onAwake(): void {
        this.ans._heads = [[this.h1._children[1], this.h2._children[1],this.h3._children[1]], [this.h4._children[1], this.h5._children[1],this.h6._children[1]]];

        this.ans.init(this);
    }

    onUpdate() {
        if (!this.ans.updater) {
            return;
        }

        if (!this.init) {
            this.init = true;

            if (this.ans.a1.length > 0) {
                this.ans.showAnswers(this.ans.a1, this.ans.a2, this.ans.a3, this.ans.a4);
            }

            if (this.ans.answers) {
                this.ans.showPlayersAnswer(this.ans.answers, -1, -1);
            }

            this.ans.loagHeadImage();
        }
    }
}