import Global from "../Global";
import DialogUpdate from "../ui/DialogUpdate";

export default class DialogRuntime extends Laya.Dialog {

    public updater: DialogUpdate = null;

    public initContentHeight: number = 0;
    public initHeight: number = 0;

    public confirmCallback: () => any = () => null;
    public cancelCallback: () => any = () => null;

    constructor() {
        super();
    }

    init(updater: DialogUpdate) {
        this.updater = updater;
        this.updater.contentLabel.editable = false;
        this.updater.contentLabel.disabled = true;
        this.initContentHeight = this.updater.labelBox.height;
        this.initHeight = this.height;

        this.updater.confirmBth.offAll();
        this.updater.confirmBth.on(Laya.Event.CLICK, this, () => {
            console.log("confirm");
            this.close();
        });

        this.updater.cancelBth.offAll();
        this.updater.cancelBth.on(Laya.Event.CLICK, this, () => {
            console.log("cancel");
            this.close();
        });
    }

    show(closeOther?: boolean, showEffect?: boolean) {
        super.show(closeOther, showEffect);
        this.resetBtns();
        this.zOrder = 1000000;
        this.visible = true;
    }

    popup(closeOther?: boolean, showEffect?: boolean) {
        super.popup(closeOther, showEffect);
        this.resetBtns();
    }

    setTitle(title: string) {
        let label = this.updater.titleLabel;
        label.text = title + "";
        label.pivot(label.width / 2, 0).pos(this.width / 2, 10);
    }

    setContent(content: string) {
        let label = this.updater.contentLabel;
        let box = this.updater.labelBox;

        label.text = content + "";
        let input = label._children[0] as Laya.Input;

        if (input.textHeight > box.height) {
            box.height = input.textHeight + 60;
            label.height = box.height;
        }

        if (input.textHeight < this.initContentHeight) {
            box.height = this.initContentHeight;
            label.height = box.height;
            this.height = this.initHeight;
            this.updater.bgSprite.height = this.height;
        }

        if (box.height - this.initContentHeight > 0) {
            this.height += box.height - this.initContentHeight;
            this.updater.bgSprite.height = this.height;
        }

        this.resetBtns();
    }

    resetBtns() {
        let confirmBth = this.updater.confirmBth;
        let cancelBth = this.updater.cancelBth;
        let confirmLabel = this.updater.confirmLabel;
        let cancelLabel = this.updater.cancelLabel;

        confirmBth.x = this.width - confirmBth.width;
        confirmBth.y = this.height - confirmBth.height;

        cancelBth.x = 0;
        cancelBth.y = this.height - cancelBth.height;

        confirmLabel.pivot(confirmLabel.width / 2, confirmLabel.height / 2).pos(confirmBth.x + confirmBth.width / 2, confirmBth.y + confirmBth.height / 2)
        cancelLabel.pivot(cancelLabel.width / 2, cancelLabel.height / 2).pos(cancelBth.x + cancelBth.width / 2, cancelBth.y + cancelBth.height / 2)
    }

    setConfirm(text: string, callback?) {
        let confirmBth = this.updater.confirmBth;
        let confirmLabel = this.updater.confirmLabel;

        confirmLabel.text = text;

        this.resetBtns();

        confirmBth.offAll();
        confirmBth.on(Laya.Event.CLICK, this, () => {
            console.log("dialog confirm");
            this.visible && callback && setTimeout(callback);
            this.visible = false;
        });
    }

    setCancel(text: string, callback?) {
        let cancelBth = this.updater.cancelBth;
        let cancelLabel = this.updater.cancelLabel;

        cancelLabel.text = text;

        this.resetBtns();

        cancelBth.offAll();
        cancelBth.on(Laya.Event.CLICK, this, () => {
            console.log("dialog cancel");
            this.visible && callback && setTimeout(callback);
            this.visible = false;
        });
    }

    showDialog(title: string, content: string, confirm?: { confirmText?: string, confirmCallback: any }, cancel?: { cancelText?: string, cancelCallback: any }) {
        this.setTitle(title);
        this.setContent(content);

        let comfirmCallback = confirm ? (confirm.confirmCallback || (() => this.close())) : (() => this.close());
        let cancelCallback = cancel ? (cancel.cancelCallback || (() => this.close())) : (() => this.close());

        confirm && this.setConfirm(confirm.confirmText || "确定", comfirmCallback);
        cancel && this.setCancel(cancel.cancelText || "取消", cancelCallback);

        !confirm && this.setConfirm("确定", comfirmCallback);
        !cancel && this.setCancel("取消", cancelCallback);

        this.show();
    }

}