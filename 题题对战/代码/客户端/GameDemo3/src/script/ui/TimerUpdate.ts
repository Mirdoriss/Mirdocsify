import TimerRuntime from "../runtime/TimerRuntime";

export default class TimerUpdate extends Laya.Script {

    /** @prop {name: t, tips: "t", type: Node} */
    public t: Laya.Sprite;

    /** @prop {name: s, tips: "s", type: Node} */
    public s: Laya.Sprite;

    /** @prop {name: circle, tips: "circle", type: Node} */
    public circle: Laya.Sprite;

    /** @prop {name: timer, tips: "timer", type: Node} */
    public timer: TimerRuntime;

    constructor() {
        super();
    }

    onAwake(): void {
        this.timer.init(this.t, this.s, this.circle);
    }

    onEnable() {
    }

    onUpdate() {
        if (this.timer.time <= 0) { return; }
        if (this.timer.start <= 0) { return; }

        this.timer.setNumber();
        this.timer.setCircle();
    }
}