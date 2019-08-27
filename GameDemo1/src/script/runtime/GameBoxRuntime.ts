import Global from "../Global";

export default class GameBoxRuntime extends Laya.Box {

    private me: Laya.Sprite;
    private enemy: Laya.Sprite;

    constructor() { super(); }

    onAwake() {
        this.me = this._children[0];
        this.enemy = this._children[1];
    }
}