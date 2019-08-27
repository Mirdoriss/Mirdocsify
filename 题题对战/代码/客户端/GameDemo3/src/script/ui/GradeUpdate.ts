import GradeRuntime from "../runtime/GradeRuntime";

export default class DialogUpdate extends Laya.Script {

    /** @prop {name: labelRedBox, tips: "labelRedBox", type: Node} */
    public labelRedBox: Laya.Box;

    /** @prop {name: labelBlueBox, tips: "labelBlueBox", type: Node} */
    public labelBlueBox: Laya.Box;

    /** @prop {name: labelRed, tips: "labelRed", type: Node} */
    public labelRed: Laya.Label;

    /** @prop {name: labelBlue, tips: "labelBlue", type: Node} */
    public labelBlue: Laya.Label;

    /** @prop {name: grade, tips: "grade", type: Node} */
    public grade: GradeRuntime;

    private init: boolean = false;

    constructor() {
        super();
    }

    onAwake(): void {
        this.grade.init(this);
    }

    onEnable() {
    }

    onUpdate() {
        if (!this.grade.updater) {
            return;
        }

        if (!this.init) {
            this.init = true;

            if (typeof this.grade.red === "number" && typeof this.grade.blue === "number") {
                this.grade.setGrades(this.grade.red, this.grade.blue);
            }
        }
    }
}