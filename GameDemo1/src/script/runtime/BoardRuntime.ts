import Global from "../Global";
import ScoreRuntime from "./ScoreRuntime";
import CircleSpriteRuntime from "./CircleSpriteRuntime";

export default class BoardRuntime extends Laya.Sprite {

    private head1: CircleSpriteRuntime;
    private head2: CircleSpriteRuntime;
    private name1: Laya.Label;
    private name2: Laya.Label;
    public scoreBg1: Laya.Sprite;
    public scoreBg2: Laya.Sprite;
    public score1: ScoreRuntime;
    public score2: ScoreRuntime;

    constructor() { super(); }

    init() {
        this.head1 = this._children[0];
        this.head2 = this._children[1];

        this.name1 = this._children[2];
        this.name2 = this._children[3];

        this.scoreBg1 = this._children[4];
        this.scoreBg2 = this._children[5];

        this.score1 = this._children[6];
        this.score2 = this._children[7];

        this.name1.text = "";
        this.name2.text = "";

        this.setScoreBar(3, 3);
    }

    // 设置血量条
    setScoreBar(score1: number, score2: number) {

        this.score1.set(score1);
        this.score2.set(score2);

        this.score1.pivotX = 0;
        this.score2.pivotX = this.score2.width;

        this.score1.x = this.scoreBg1.x;
        this.score2.x = this.scoreBg2.x + this.scoreBg2.width * this.scoreBg2.scaleX;
    }

    // 设置头像、名字、血量条
    set(player1: { name: string, score: number, profile: string }, player2: { name: string, score: number, profile: string }) {

        if (!this.score2) {
            this.init();
        }

        if (this.score1.score === player1.score && this.score2.score === player2.score && !!this.name1.text) {
            return;
        }

        this.head1.loadImage(player1.profile);
        this.head2.loadImage(player2.profile);

        let name1 = player1.name;
        let name2 = player2.name;

        name1.length > 5 && (name1 = name1.slice(0, 5) + "...");
        name2.length > 5 && (name2 = name2.slice(0, 5) + "...");

        this.name1.text = name1;
        this.name2.text = name2;

        this.setScoreBar(player1.score, player2.score);
    }
}