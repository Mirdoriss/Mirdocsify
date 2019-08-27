import Global from "../Global";
import { Player } from "../GameState";

const ANI_TIMER_TAG = "__ani_timer";

export default class PlayerRuntime extends Laya.Sprite {
    public playerId: string;
    public jumpTag: boolean = false;
    public isEnemy: boolean = false;

    public profile: string = "";
    public name: string = "";

    public bullets: Array<Laya.Sprite> = [];
    public playerAnimation: Laya.Animation = null;

    private pool = laya.utils.Pool;

    constructor() { super(); }

    init(gameBox: Laya.Box, playerId: string, isEnemy: boolean, name, profile) {

        const width = this.width * this.scaleX;
        const height = this.height * this.scaleY;

        this.pivot(this.width / 2, this.height / 2);

        this.x += this.width * this.scaleX / 2;

        this.visible = true;
        this._children[0].visible = false;

        this.isEnemy = isEnemy;
        this.playerId = playerId;
        this.name = name;
        this.profile = profile;
    }

    updateState(playerState: Player) {
        this.updatePlayerLocate(playerState.y);

        var i = 0;
        const oldBulltes = this.bullets;

        this.removeAllBullet();
        for (i = 0; i < playerState.bullets.length; i++) {
            const x = playerState.bullets[i].x;
            const y = playerState.bullets[i].y;
            const isBig = playerState.bullets[i].isBig;
            const bullet = this.addBullet(isBig);
            this.updateBulletLocate(x, y, bullet);
        }
    }

    // 更新坐标
    updatePlayerLocate(y?: number) {
        this.y = y;
        this.playerAnimation && (this.playerAnimation.y = y);
    }

    // 更新子弹
    updateBulletLocate(x: number, y: number, bullet: Laya.Sprite) {
        bullet.x = x;
        bullet.y = y;
    }

    private bulletPath: string = "image/bullet.png";
    private bigBulletPath: string = "image/big_bullet.png";

    runBlow() {

        if (this._children[0].visible === true) { return; }

        let path = "image/tian-shi-zhu-1.png";
        let offsetX = 60;

        if (this.isEnemy) {
            path = "image/e-mo-zhu1.png";
            offsetX *= -1;
        }

        this.loadImage(path);
        this._children[0].visible = true;
    }

    runLive() {
        this._children[0].visible = false;

        let path = "image/tian-shi-zhu.png";

        if (this.isEnemy) { path = "image/e-mo-zhu.png"; }

        this.loadImage(path);
    }

    addBullet(isBig: boolean = false): Laya.Sprite {
        const tag = isBig ? "big_bullet" : "bullet";
        let bullet = (this.pool.getItem(tag) || new Laya.Sprite()) as Laya.Sprite;
        bullet["isBig"] = isBig;

        let bulletPath = this.bulletPath;

        if (isBig) {
            bulletPath = this.bigBulletPath;
        }

        bullet.loadImage(bulletPath).pivot(bullet.width / 2, bullet.height / 2).scale(0.5, 0.5).pos(this.x, this.y);

        if (this.isEnemy) {
            bullet.rotation = 180;
        } else {
            bullet.rotation = 0;
        }

        this.parent.addChild(bullet);

        let index = this.bullets.indexOf(bullet)
        index < 0 && this.bullets.push(bullet);

        return bullet;
    }

    removeBullet(bullet: Laya.Sprite) {
        bullet.removeSelf();

        const isBig = bullet["isBig"];
        const tag = isBig ? "big_bullet" : "bullet";

        this.pool.recover(tag, bullet);

        let index = this.bullets.indexOf(bullet)
        index >= 0 && this.bullets.splice(index, 1);
    }

    removeAllBullet() {
        this.bullets.forEach(bullet => {
            this.removeBullet(bullet);
        });
    }
}