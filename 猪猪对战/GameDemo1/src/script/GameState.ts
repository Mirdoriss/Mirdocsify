import Global from "./Global";

// 最大速度
export const MAX_SPEED = 0.6;
export const JUMP_SPEED = 0.3;

// 加速度
export const ACC = 0.0006;

// 活动范围
export const MAX_Y = 640;
export const MIN_Y = 51.5;
export const MAX_X = 434.5;
export const MIN_X = 54.5;

// 初始分数
export const INIT_SCORE = 3;

// 子弹参数
export const BULLET_SPEED = 0.5;
export const BULLET_GAP = 5;

// 物体盒子的宽高
const PLAYER_WIDTH: number = 90;
const PLAYER_HEIGHT: number = 90;

const BULLET_WIDTH: number = 20;
const BULLET_HEIGHT: number = 20;

const BOMB_WIDTH: number = 80;
const BOMB_HEIGHT: number = 80;

// 需要玩家发起帧消息的操作
export enum Action {
    JUMP = 1,
}

// 玩家发送的帧消息格式
export interface PlayerFrame {
    playerId: string,
    action: Action,
}

function scaleRandom(random, start, end, fixed) {
    let scale = (end - start) * random + start;
    return Math.ceil(scale * Math.pow(10, fixed)) / Math.pow(10, fixed);
}

class Box {
    // x, y : 中心坐标
    public x: number = 0;
    public y: number = 0;
    public width: number = 0;
    public height: number = 0;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public checkCollide(box: Box): boolean {
        let collide = false;

        const offsetX = (box.width + this.width) / 2;
        const offsetY = (box.height + this.height) / 2;

        collide = Math.abs(this.x - box.x) < offsetX && Math.abs(this.y - box.y) < offsetY;

        return collide;
    }

    public update(deltaTime: number) { }
}

export class Player extends Box {
    public speed: number = 0;
    public bullets: Array<Bullet> = [];
    public isDie: boolean = true;
    public score: number = INIT_SCORE;
    public lastBulletFrameId: number = 0;
    public dieFrameId: number = 0;
    public power: number = 0;

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height);
    }

    cloneTo(player: Player) {
        player.x = this.x;
        player.y = this.y;
        player.width = this.width;
        player.height = this.height;

        player.speed = this.speed;

        player.isDie = this.isDie;
        player.score = this.score;
        player.lastBulletFrameId = this.lastBulletFrameId;
        player.dieFrameId = this.dieFrameId;
        player.power = this.power;

        let i = 0;
        let playerBulletLength = player.bullets.length;
        let bulletLength = this.bullets.length;
        let length = Math.min(playerBulletLength, bulletLength);

        for (i = 0; i < length; i++) {
            this.bullets[i].cloneTo(player.bullets[i]);
        }

        player.bullets.splice(i);

        for (; i < bulletLength; i++) {
            player.bullets.push(this.bullets[i].clone());
        }
    }

    public addBullet(width: number, height: number, speed: number) {
        const bullet = new Bullet(this.x + Math.abs(speed) / speed * this.width * 0.7, this.y + 30, width, height, speed);
        this.power > 0 && (bullet.upgrade());
        this.bullets.push(bullet);
    }

    public clearBullets() {
        this.bullets = [];
    }

    public update(deltaTime: number) {
        // 更新全部子弹
        this.bullets = this.bullets.filter(bullet => {
            bullet.update(deltaTime);
            return !bullet.isOut;
        });

        // 更新位置
        if (this.y <= MIN_Y) {
            this.y = MIN_Y;
            this.speed = 0;
        }

        let y = this.y + (this.speed * deltaTime + 0.5 * ACC * deltaTime * deltaTime);

        if (y > MAX_Y) y = MAX_Y;
        if (y < MIN_Y) y = MIN_Y;

        let speed = this.speed + ACC * deltaTime;

        if (speed > MAX_SPEED) speed = MAX_SPEED;
        if (y >= MAX_Y || y <= MIN_Y) speed = 0;

        this.y = y;
        this.speed = speed;

        this.power > 0 && this.power--;
    }

    public handleAction(action: Action) {
        if (action === Action.JUMP) {
            this.speed = - JUMP_SPEED;
        }
    }

    public init(frameId: number) {
        this.bullets = []
        this.y = MAX_Y;
        this.power = 0;
        this.lastBulletFrameId = frameId;
    }

    public die(frameId: number) {
        this.isDie = true;
        this.score--;
        this.dieFrameId = frameId;
    }

    public upgrade(frameRate: number) {
        this.power = frameRate * 7;
    }
}

class Bullet extends Box {

    public gap: number = BULLET_GAP;
    public speed: number = 0;
    public isBig: boolean = false;
    public isOut: boolean = false;

    constructor(x: number, y: number, width: number, height: number, speed: number) {
        super(x, y, width, height);
        this.speed = speed;
        this.isOut = false;
    }

    public update(deltaTime: number) {
        this.x = this.x + deltaTime * this.speed;
        this.x > MAX_X + this.gap && (this.isOut = true);
        this.x < MIN_X - this.gap && (this.isOut = true);
    }

    clone(): Bullet {
        const bullet = new Bullet(this.x, this.y, this.width, this.height, this.speed);

        bullet.gap = this.gap;
        bullet.isBig = this.isBig;
        bullet.isOut = this.isOut;

        return bullet;
    }

    cloneTo(bullet: Bullet) {
        bullet.x = this.x;
        bullet.y = this.y;
        bullet.width = this.width;
        bullet.height = this.height;
        bullet.speed = this.speed;

        bullet.gap = this.gap;
        bullet.isBig = this.isBig;
        bullet.isOut = this.isOut;
    }

    upgrade() {
        this.isBig = true;
        this.height = 1.6 * BULLET_HEIGHT;
    }
}

class Bomb extends Box {
    public create: number = 0;
    public clear: number = 0;
    public y: number = 0;
    public show: boolean = false;

    constructor() {
        super((MAX_X + MIN_X) / 2, 0, BOMB_WIDTH, BOMB_HEIGHT);

        this.show = false;
    }

    clearBomb(frameId: number) {
        this.show = false;
        this.clear = frameId;
        this.y = -100000;
    }

    showBomb(y: number, frameId: number) {
        this.show = true;
        this.create = frameId;
        this.y = y;

        // console.log("bomb", frameId, seed);
    }

    clone(): Bomb {
        const bomb = new Bomb();

        bomb.create = this.create;
        bomb.clear = this.clear;
        bomb.y = this.y;
        bomb.show = this.show;

        return bomb;
    }

    cloneTo(bomb: Bomb) {
        bomb.create = this.create;
        bomb.clear = this.clear;
        bomb.y = this.y;
        bomb.show = this.show;
    }
}

export default class GameState {

    public me: Player = null;
    public enemy: Player = null;
    public bomb: Bomb = null;

    public timestamp: number = 0;
    public frameId: number = 0;
    public roundTimes: number = 0;
    public roundStartFrameId: number = 0;
    public isBattle: boolean = false;

    constructor() {
        this.initState();
    }

    initState() {

        this.me = new Player(MIN_X, MAX_Y, PLAYER_WIDTH, PLAYER_HEIGHT);
        this.enemy = new Player(MAX_X, MAX_Y, PLAYER_WIDTH, PLAYER_HEIGHT);

        this.timestamp = 0;
        this.frameId = 0;
        this.roundTimes = 0;
        this.roundStartFrameId = 0;
        this.isBattle = false;
        this.bomb = new Bomb();
    }

    cloneTo(state: GameState) {

        if (!state) {
            throw new Error("state is null");
        }

        // 复制玩家
        this.me.cloneTo(state.me);
        this.enemy.cloneTo(state.enemy);

        // 复制炸弹
        this.bomb.cloneTo(state.bomb);

        // 复制其他信息
        state.timestamp = this.timestamp;
        state.frameId = this.frameId;
        state.roundTimes = this.roundTimes;
        state.roundStartFrameId = this.roundStartFrameId;
        state.isBattle = this.isBattle;
    }

    checkAllCollide(frameRate: number) {
        // 子弹碰撞
        let bullet1 = this.me.bullets.filter(bullet => this.enemy.bullets.filter(eBullet => bullet.checkCollide(eBullet)).length === 0);
        let bullet2 = this.enemy.bullets.filter(bullet => this.me.bullets.filter(mBullet => bullet.checkCollide(mBullet)).length === 0);

        this.me.bullets = bullet1;
        this.enemy.bullets = bullet2;

        // 子弹-玩家碰撞
        let meDie = this.enemy.bullets.filter(bullet => bullet.checkCollide(this.me)).length > 0;
        let enemyDie = this.me.bullets.filter(bullet => bullet.checkCollide(this.enemy)).length > 0;

        meDie && this.me.die(this.frameId);
        enemyDie && this.enemy.die(this.frameId);

        // 子弹-炸弹碰撞
        // 距离创建时间大于一帧才产生碰撞
        if (this.frameId > this.bomb.create) {
            let index1 = -1;
            let index2 = -1;

            this.me.bullets.forEach((bullet, i) => bullet.checkCollide(this.bomb) && (index1 = i));
            this.enemy.bullets.forEach((bullet, i) => bullet.checkCollide(this.bomb) && (index2 = i));

            index1 >= 0 && this.me.upgrade(frameRate);
            index2 >= 0 && this.enemy.upgrade(frameRate);

            index1 >= 0 && this.me.bullets.splice(index1, 1);
            index2 >= 0 && this.enemy.bullets.splice(index2, 1);

            (index1 >= 0 || index2 >= 0) && this.bomb.clearBomb(this.frameId);
        }

    }

    checkRound(frameRate: number) {

        if (this.shouldEndRound(frameRate)) {

            this.isBattle = false;
            this.roundStartFrameId = this.frameId;

            this.me.clearBullets();
            this.enemy.clearBullets();
            this.bomb.clearBomb(this.frameId);
        }

        if (this.shouldStartRound()) {

            this.isBattle = true;
            this.roundTimes++;

            this.me.init(this.frameId);
            this.enemy.init(this.frameId);
            this.bomb.clearBomb(this.frameId);
        }
    }

    shouldEndRound(frameRate: number) {
        return this.isBattle && (this.me.isDie || this.enemy.isDie);
    }

    shouldStartRound() {
        return !this.me.isDie && !this.enemy.isDie && !this.isBattle;
    }

    checkRelivePlayer(player: Player, x: number, frameRate: number) {
        if (player.isDie && this.frameId - player.dieFrameId > frameRate * 1.5) {
            player.init(this.frameId);
            player.isDie = false;
            player.x = x;
        }
    }

    checkEmitBullet(player: Player, speed: number, frameRate: number) {
        if (player.lastBulletFrameId + frameRate * 1 < this.frameId) {
            player.lastBulletFrameId = this.frameId;
            player.addBullet(BULLET_WIDTH, BULLET_HEIGHT, speed);
        }
    }

    checkBombCreate(frameRate: number) {
        if (!this.bomb.show && this.bomb.clear + frameRate * 4 < this.frameId) {
            // 生成
            const random = MGOBE.RandomUtil.random();

            if (random > 0.7) {
                const y = scaleRandom(MGOBE.RandomUtil.random(), MIN_Y, MAX_Y, 0);
                this.bomb.showBomb(y, this.frameId);
            }
        }
    }

    checkBombClear(frameRate: number) {
        if (this.bomb.show && this.bomb.create + frameRate * 4 < this.frameId) {
            // 销毁
            this.bomb.clearBomb(this.frameId);
        }
    }

    runAutoTask(frameRate: number) {
        if (this.isBattle) {
            // 对战逻辑

            // 是否发射子弹
            this.checkEmitBullet(this.me, BULLET_SPEED, frameRate);
            this.checkEmitBullet(this.enemy, -BULLET_SPEED, frameRate);

            // 生成/销毁炸弹
            this.checkBombCreate(frameRate);
            this.checkBombClear(frameRate);
        }
    }

    calcFrame(bst: MGOBE.types.RecvFrameBst, frameRate: number) {

        let frame = bst.frame;

        // 初始化随机种子
        const seed = frame.ext.seed + frame.id;
        MGOBE.RandomUtil.init(seed);

        // 处理帧item
        for (let i = frame.items.length - 1; i >= 0; i--) {
            let frameItem = frame.items[i];
            let playerFrame: PlayerFrame = frameItem.data as PlayerFrame;
            let player: Player = this.enemy;

            if (frameItem.playerId === MGOBE.Player.id) {
                player = this.me;
            }

            player.handleAction(playerFrame.action);
        }

        // 一帧的时间差
        let deltaTime = Math.floor((1000 / frameRate) * 10000) / 10000;

        // 计算状态
        this.me.update(deltaTime);
        this.enemy.update(deltaTime);

        // 更新时间
        this.timestamp = frame.time;
        this.frameId = frame.id;

        // 碰撞处理
        this.checkAllCollide(frameRate);

        // 检查对局信息
        this.checkRound(frameRate);

        // 处理复活
        this.checkRelivePlayer(this.me, MIN_X, frameRate);
        this.checkRelivePlayer(this.enemy, MAX_X, frameRate);

        // 游戏自动逻辑：发射子弹/出现炸弹
        this.runAutoTask(frameRate);
    }

}