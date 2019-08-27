import Global from "../Global";
import AnsUpdate from "../ui/AnsUpdate";
import CircleSpriteRuntime from "../runtime/CircleSpriteRuntime";
import { modeViewFilter } from "../Util";

const IMG_TAG = "__IMG__";

export default class AnsRuntime extends Laya.Dialog {

    public updater: AnsUpdate = null;

    green: string = "image/xuan-xiang1.png";
    red: string = "image/xuan-xiang2.png";
    blue: string = "image/xuan-xiang3.png";
    white: string = "image/xuan-xiang4.png";

    constructor() {
        super();
    }

    public a1: string = "";
    public a2: string = "";
    public a3: string = "";
    public a4: string = "";

    public answers: [number, number, number, number, number, number] = null;
    public aniTime = 0;

    public _heads: CircleSpriteRuntime[][];
    private _urls: string[] = [];

    public onSelect: (index: number) => any = null;

    init(updater: AnsUpdate) {
        this.visible = false;
        this.updater = updater;
    }

    showAnswers(a1: string, a2: string, a3: string, a4: string) {
        let a = [
            this.a1 = a1,
            this.a2 = a2,
            this.a3 = a3,
            this.a4 = a4
        ];
        this.visible = true;

        let aLabel = [
            this.updater.a1,
            this.updater.a2,
            this.updater.a3,
            this.updater.a4
        ];
        let aParent = aLabel.map(x => x.parent as Laya.Sprite);

        if (!this.updater) { return; }


        aLabel.forEach((aiLabel, idx) => aiLabel.text = a[idx]);

        aLabel.forEach((aiLabel, idx) => aiLabel.pivot(aiLabel.width / 2, aiLabel.height / 2).pos(aParent[idx].width / 2, aParent[idx].height / 2))

        aParent.forEach((parent, index) => {

            parent[IMG_TAG] = this.white;
            parent.loadImage(this.white);
            aLabel[index].color = "#133ce2";

            parent.offAll();
            parent.on(Laya.Event.CLICK, this, () => {
                this.onSelect && this.onSelect(index);
            });
            parent.on(Laya.Event.MOUSE_DOWN, this, () => {
                parent.loadImage(this.blue);
                aLabel[index].color = "#ffffff";
            });
            parent.on(Laya.Event.CLICK, this, () => {
                parent.loadImage(parent[IMG_TAG]);

                if (parent[IMG_TAG] === this.white) {
                    aLabel[index].color = "#133ce2";
                } else {
                    aLabel[index].color = "#ffffff";
                }
            });
        });
    }

    hide() {
        this.visible = false;
    }

    setHeadImages(urls: [string, string, string, string, string, string]) {
        this._urls = urls;
        if (!this.updater || !this._heads.length) { return; }

        this.loagHeadImage();
    }

    loagHeadImage() {
        if (this._urls.length && this._heads.length) {
            let heads = this._heads.map(x => modeViewFilter(x));
            [this._urls.slice(0, heads[0].length), this._urls.slice(heads[0].length, heads[0].length + this._heads[1].length)].forEach((urls, idx0) => {
                urls.forEach((url, idx1) => {
                    url && this._heads[idx0][idx1].loadImage(url);
                })
            });
        }
    }

    showPlayersAnswer(answers: [number, number, number, number, number, number], myAnswer, rightAnswer, isEnd = false) {

        this.answers = answers;

        if (!this.updater) { return; }
        this.hidePlayersAnswer();

        let redAnsCounter = [0, 0, 0, 0];
        let blueAnsCounter = [0, 0, 0, 0];

        let heads = [
            modeViewFilter([
                this.updater.h1,
                this.updater.h2,
                this.updater.h3
            ]),
            modeViewFilter([
                this.updater.h4,
                this.updater.h5,
                this.updater.h6
            ])
        ];

        let ansBoxs = [
            this.updater.a1,
            this.updater.a2,
            this.updater.a3,
            this.updater.a4,
        ];
        function showHeads(heads: Laya.Sprite[], answers: number[], direction: -1 | 1) {
            let counter = ansBoxs.map(x => 0);
            heads.forEach((head, idx) => {
                let answer = answers[idx];
                if (answer < 0 || answer >= ansBoxs.length) {
                    head.visible = false;
                    return;
                }
                let num = ++counter[answer];
                let ansBox = ansBoxs[answer].parent as Laya.Sprite;
                let aw2 = ansBox.width / 2;
                let ah2 = ansBox.height / 2;
                let hw2 = head.width / 2;
                let hh2 = head.height / 2;
                let hw3 = head.width / 3;
                let centerX = ansBox.x + aw2;
                let defx = (aw2 + hw2 + hw3 * num) * direction;
                head.x = centerX - hw2 + defx;
                head.y = ansBox.y + ah2 - hh2;
                head.visible = true;
            });
        }

        showHeads(heads[0], answers.slice(0, heads[0].length), -1);
        showHeads(heads[1], answers.slice(heads[0].length, heads[0].length + heads[1].length), 1);

        if (myAnswer >= 0 && ansBoxs[myAnswer]) {
            let sp = ansBoxs[myAnswer].parent as Laya.Sprite;
            if (myAnswer === rightAnswer) {
                sp.loadImage(this.green);
                sp[IMG_TAG] = this.green;
            } else {
                sp.loadImage(this.red);
                sp[IMG_TAG] = this.red;
            }
            ansBoxs[myAnswer].color = "#ffffff";
        }

        if (isEnd && rightAnswer >= 0 && ansBoxs[rightAnswer]) {
            let sp = ansBoxs[rightAnswer].parent as Laya.Sprite;
            sp.loadImage(this.green);
            sp[IMG_TAG] = this.green;
            ansBoxs[rightAnswer].color = "#ffffff";
        }
    }

    hidePlayersAnswer() {
        this.updater.h1.visible = false;
        this.updater.h2.visible = false;
        this.updater.h3.visible = false;
        this.updater.h4.visible = false;
        this.updater.h5.visible = false;
        this.updater.h6.visible = false;

        this.answers = null;
    }

    aniShow(callback) {
        let ansBoxs = [
            this.updater.a1,
            this.updater.a2,
            this.updater.a3,
            this.updater.a4,
        ];

        this.aniTime = Date.now();

        ansBoxs.forEach(ans => {
            ans.parent["visible"] = false;
        });

        setTimeout(() => {
            callback();
            ansBoxs.forEach((ans, i) => ans.parent["visible"] = true);
        }, 1000);
    }
}
