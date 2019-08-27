import Global from "../Global";

export default class TimerRuntime extends Laya.Label {

    constructor() {
        super();
    }

    public time: number = 0;
    public start: number = 0;
    public t: Laya.Sprite = null;
    public s: Laya.Sprite = null;
    public circle: Laya.Sprite = null;
    public lastUpdate: number = 0;

    public timeoutCallback = null;

    init(t: Laya.Sprite, s: Laya.Sprite, circle: Laya.Sprite) {
        this.t = t;
        this.s = s;
        this.circle = circle;
        this.t.visible = this.s.visible = false; 

        (this.t.parent.parent as Laya.Box).scaleX = 0.7;
        (this.t.parent.parent as Laya.Box).scaleY = 0.7;   
    }

    loadNumberImage(sprite: Laya.Sprite, num: number, cb?) {
        num = Math.round(Math.abs(num)) % 10;
        sprite.loadImage(`image/${num}.png`, new Laya.Handler(this, () => {
            cb && cb();
        }));
    }

    getDelta() {
        let delta = Date.now() - this.start;

        return delta;
    }

    setText(num) {

        num = Math.round(num);

        let s = num % 10;
        let t = (num - s) / 10;

        this.loadNumberImage(this.t, t, () => {
            this.t.pivot(this.t.width / 2, 0);
            this.t.x = (this.t.parent as Laya.Box).width / 2;
        });

        this.loadNumberImage(this.s, s, () => {
            this.s.pivot(this.s.width / 2, 0);
            this.s.x = (this.s.parent as Laya.Box).width / 2;
        });
    }

    clearCircle() {
        this.circle.graphics.clear();
    }

    setNumber() {
        this.t.visible = this.s.visible = true;
        let delta = Math.round(this.getDelta() / 1000);
        let num = Math.max(this.time - delta, 0);

        this.setText(num);
    }

    setCircle() {

        if (this.time === 0) {
            return;
        }

        let now = Date.now();
        let delta = this.getDelta();
        let angle = (delta / (this.time * 1000)) * 360;

        if (this.lastUpdate === 0) {
            this.lastUpdate = this.start;
        }

        this.circle.graphics.clear();
        this.circle.graphics.drawPie(this.circle.width / 2, this.circle.height / 2, this.circle.width / 2, -90, angle - 90, "#ff4747", "", 0);
        this.circle.graphics.drawPie(this.circle.width / 2, this.circle.height / 2, this.circle.width / 2 - 7, -90, angle - 90, "#ffffff", "", 0);

        if (delta > this.time * 1000) {
            this.timeoutCallback && this.timeoutCallback();
            this.clearTimer();
        }

        this.lastUpdate = now;
    }

    setTimer(time: number, callback) {
        this.time = time;
        this.lastUpdate = 0;
        this.start = -1;

        this.t && (this.t.visible = this.s.visible = true);
        this.timeoutCallback = callback;

        this.setText(time);
        this.clearCircle();
    }

    run() {
        this.start = Date.now();
    }

    clearTimer() {
        this.timeoutCallback = null;
        this.time = 0;
        this.start = -1;
    }
}
