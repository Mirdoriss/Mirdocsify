import Global from "../Global";
import GradeUpdate from "../ui/GradeUpdate";

export default class GradeRuntime extends Laya.Label {

    constructor() {
        super();
    }

    public updater: GradeUpdate = null;
    public red: number = 0;
    public blue: number = 0;

    init(updater: GradeUpdate) {
        this.updater = updater;
    }

    setGrades(red: number, blue: number) {

        if (typeof red === "number" && typeof blue === "number") {
            this.red = red;
            this.blue = blue;
        }

        if (!this.updater) { return; }

        let labelRed = this.updater.labelRed;
        let labelBlue = this.updater.labelBlue;
        let labelRedBox = this.updater.labelRedBox;
        let labelBlueBox = this.updater.labelBlueBox;

        labelRed.text = red + "";
        labelBlue.text = blue + "";

        labelRed.pivot(labelRed.width / 2, labelRed.height / 2).pos(labelRedBox.width / 2, labelRedBox.height / 2);
        labelBlue.pivot(labelBlue.width / 2, labelBlue.height / 2).pos(labelBlueBox.width / 2, labelBlueBox.height / 2);
    }
}