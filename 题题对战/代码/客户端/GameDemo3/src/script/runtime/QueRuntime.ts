import Global from "../Global";
import QueDialogUpdate from "../ui/QueDialogUpdate";

export default class QueRuntime extends Laya.Dialog {

    public updater: QueDialogUpdate = null;

    public offsetX: number = 0;
    public offsetY: number = 0;

    constructor() {
        super();
    }

    public title: string = "";
    public type: string = "";
    public que: string = "";
    public double: boolean = false;

    init(updater: QueDialogUpdate) {
        this.updater = updater;
        this.isPopupCenter = false;
        this.closeEffect = null;
        this.isShowEffect = false;

        this.close();
    }

    showQuestion(title: string, type: string, que: string, offsetX: number, offsetY: number) {

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        this.x = 161 + this.offsetX;
        this.y = 45 + this.offsetY;

        this.title = title;
        this.type = type;
        this.que = que;
        this.double = false;

        if (!this.updater) {
            return;
        }

        this.show();

        let titleLabel = this.updater.titleLabel;
        let typeLabel = this.updater.typeLabel;
        let queLabel = this.updater.queLabel;
        let doubleSprite = this.updater.doubleSprite;

        doubleSprite.visible = false;

        titleLabel.text = title;
        typeLabel.text = type;
        queLabel.text = que;

        titleLabel.pivot(titleLabel.width / 2, 0).pos(this.width / 2, titleLabel.y);
        typeLabel.pivot(typeLabel.width / 2, 0).pos(this.width / 2, typeLabel.y);

        titleLabel.visible = true;
        typeLabel.visible = true;
        queLabel.visible = false;

        setTimeout(() => {
            titleLabel.visible = false;
            typeLabel.visible = false;
            queLabel.visible = true;
            doubleSprite.visible = false;
        }, 1000);
    }

    showDouble() {
        this.double = true;

        if (!this.updater) {
            return;
        }
        let doubleSprite = this.updater.doubleSprite;

        doubleSprite.visible = true;
    }
}