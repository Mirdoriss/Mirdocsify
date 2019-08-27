import DialogRuntime from "../runtime/DialogRuntime";

export default class DialogUpdate extends Laya.Script {

    /** @prop {name: labelBox, tips: "labelBox", type: Node} */
    public labelBox: Laya.Box;

    /** @prop {name: contentLabel, tips: "contentLabel", type: Node} */
    public contentLabel: Laya.TextArea;

    /** @prop {name: titleLabel, tips: "titleLabel", type: Node} */
    public titleLabel: Laya.Label;

    /** @prop {name: confirmLabel, tips: "confirmLabel", type: Node} */
    public confirmLabel: Laya.Label;

    /** @prop {name: cancelLabel, tips: "cancelLabel", type: Node} */
    public cancelLabel: Laya.Label;

    /** @prop {name: bgSprite, tips: "bgSprite", type: Node} */
    public bgSprite: Laya.Sprite;

    /** @prop {name: confirmBth, tips: "confirmBth", type: Node} */
    public confirmBth: Laya.Sprite;

    /** @prop {name: cancelBth, tips: "cancelBth", type: Node} */
    public cancelBth: Laya.Sprite;

    /** @prop {name: dialog, tips: "dialog", type: Node} */
    public dialog: DialogRuntime;

    constructor() {
        super();
    }

    onAwake(): void {
        this.dialog.init(this);
    }

    onUpdate() {
    }
}