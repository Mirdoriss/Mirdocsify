import Global from "../Global";

export default class ScoreRuntime extends Laya.Sprite {

    public score: number;

    constructor() { super(); }

    set(score) {

        if (this.score === score) { return; }

        this.score = score;

        if (score === 0) return this.loadImage("image/transparent.png");

        const path = `image/xue-${score}.png`;
        this.loadImage(path);
    }
}