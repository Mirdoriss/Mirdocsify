import Global from "../Global";
import CircleSpriteRuntime from "./CircleSpriteRuntime";

export default class DialogRuntime extends Laya.Dialog {

    constructor() { super(); }

    showRound(num: number) {
        this._children.forEach(node => node.visible = false);

        const round = this._children[0] as Laya.Sprite;
        round.visible = true;
        round.pivot(0.5, 0.5);

        const path = `image/di-${num}-ju.png`;

        round.loadImage(path);

        this.popup(true, true);
    }

    showEnd(score1: number, score2: number, name1: string, name2: string, url1: string, url2: string) {
        this._children.forEach(node => node.visible = true);
        this._children[0].visible = false;

        const end = this._children[1] as Laya.Sprite;

        const myHead = this._children[2] as CircleSpriteRuntime;
        const enemyHead = this._children[3] as CircleSpriteRuntime;

        const myName = this._children[4] as Laya.Label;
        const enemyName = this._children[5] as Laya.Label;

        const myScore = this._children[7] as Laya.Sprite;
        const enemyScore = this._children[8] as Laya.Sprite;

        const endTitle = this._children[9] as Laya.Sprite;

        end.loadImage(score1 >= score2 ? "image/tan-kuang-shen-li.png" : "image/tan-kuang-shi-bai.png");

        myHead.loadImage(url1);
        enemyHead.loadImage(url2);

        name1.length > 5 && (name1 = name1.slice(0, 5) + "...");
        name2.length > 5 && (name2 = name2.slice(0, 5) + "...");

        myName.text = name1;
        enemyName.text = name2;

        myScore.loadImage(`image/${score1}.png`);
        enemyScore.loadImage(`image/${score2}.png`);

        score1 > score2 && endTitle.loadImage("image/shen-li.png");
        score1 === score2 && endTitle.loadImage("image/ping-ju.png");
        score1 < score2 && endTitle.loadImage("image/shi-bai.png");
        
        this.show(true, true);
    }
}