import QueRuntime from "../runtime/QueRuntime";

export default class QueDialogUpdate extends Laya.Script {

    /** @prop {name: titleLabel, tips: "titleLabel", type: Node} */
    public titleLabel: Laya.Label;

    /** @prop {name: typeLabel, tips: "typeLabel", type: Node} */
    public typeLabel: Laya.Label;

    /** @prop {name: queLabel, tips: "queLabel", type: Node} */
    public queLabel: Laya.TextArea;

    /** @prop {name: doubleSprite, tips: "doubleSprite", type: Node} */
    public doubleSprite: Laya.Sprite;

    /** @prop {name: dialog, tips: "dialog", type: Node} */
    public dialog: QueRuntime;

    private init: boolean = false;

    constructor() {
        super();
    }

    onAwake(): void {
        this.dialog.init(this);
    }

    onUpdate() {
        if (!this.dialog.updater) {
            return;
        }

        if (!this.init) {
            this.init = true;

            if (this.dialog.title.length > 0) {
                let double = this.dialog.double;
                this.dialog.showQuestion(this.dialog.title, this.dialog.type, this.dialog.que, this.dialog.offsetX, this.dialog.offsetY);
                double && this.dialog.showDouble();
            }
        }
    }
}