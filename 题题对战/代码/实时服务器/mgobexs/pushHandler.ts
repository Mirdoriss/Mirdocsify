import { mgobexsInterface } from "./mgobexsInterface";
import { AnsGameData, Player, GameState } from "./msgHandler";
import { Que } from "./Question";
import { calcScore } from "./Util";

export const ANS_TIME = 16500;
export const ANS_COUNT = 5;
export const ANS_FULL = 200;

export interface SerPushMsg {
    cmd: SER_PUSH_CMD,
    err: string,
    gameState: GameState,
}

export enum SER_PUSH_CMD {
    CURRENT = 1,
    GAME_STEP = 2,
    ERR = 3,
}

// 新游戏
function newGame({ gameData, SDK, room }: mgobexsInterface.ActionArgs<null>) {
    let gData = gameData as AnsGameData;
    gData.gameState.curQueId = -1;
    gData.gameState.que = null;

    // 重置总分
    gData.gameState.playerGroup.forEach(group => group.forEach(player => {
        player.sumScore = 0;
        player.ans = -1;
    }));

    newRound(arguments[0]);
}

// 当前游戏状态
function curGame({ gameData, SDK, room }: mgobexsInterface.ActionArgs<null>, pushCmd: SER_PUSH_CMD, playerIdList: string[] = []) {
    let gData = gameData as AnsGameData;

    playerIdList = playerIdList.filter(id => !!id);

    if (gData.gameState.curQueId >= 0 && gData.gameState.time >= 0) {
        // 剩余时间
        gData.gameState.time = ANS_TIME - (Date.now() - gData.startRoundTime);
    }

    const gameState = { ...gData.gameState };

    SDK.sendData({ playerIdList, data: { cmd: pushCmd, err: "", gameState } });
}

// 新一局
function newRound({ gameData, SDK, room }: mgobexsInterface.ActionArgs<null>) {
    let gData = gameData as AnsGameData;
    gData.gameState.curQueId++;
    gData.gameState.que = gData.ques[gData.gameState.curQueId];
    gData.gameState.time = ANS_TIME;
    gData.startRoundTime = Date.now();

    // 重置当前分数
    gData.gameState.playerGroup.forEach(group => group.forEach(player => {
        player.score = -1;
        player.ans = -1;
    }));

    curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);

    // 计时结束
    gData.roundTimer = setTimeout(() => {
        endRound(arguments[0]);
    }, ANS_TIME);
}

// 结束一局
function endRound({ gameData, SDK, room }: mgobexsInterface.ActionArgs<null>) {
    let gData = gameData as AnsGameData;
    gData.gameState.time = -100;

    curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);

    // 2秒后结束游戏
    if (!gData.gameState.finish && gData.gameState.curQueId >= ANS_COUNT - 1) {
        return setTimeout(() => endGame(arguments[0]), 2000);
    }

    // 2秒后新一局
    return setTimeout(() => newRound(arguments[0]), 2000);
}

// 结束游戏
async function endGame({ gameData, SDK, room }: mgobexsInterface.ActionArgs<null>) {
    let gData = gameData as AnsGameData;
    gData.gameState.curQueId = 100000;
    gData.gameState.finish = true;

    curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);
}

// 检查提交的答案
function checkSubmit({ gameData, SDK, room }: mgobexsInterface.ActionArgs<null>, playerId: string, ans: number) {
    let gData = gameData as AnsGameData;

    // 超过时间
    if (gData.gameState.time <= 0) {
        return curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);;
    }

    // 超过题目数量
    if (gData.gameState.curQueId >= ANS_COUNT) {
        return curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);
    }

    let player: Player = null;
    let que: Que = gData.gameState.que;

    gData.gameState.playerGroup.forEach(group => group.forEach(p => p.playerId === playerId && (player = p)));

    // 异常
    if (!player || player.score > 0 || player.ans >= 0 || !que) {
        return curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);
    }

    player.ans = ans;

    if (que.ans !== ans) {
        // 答错
        player.score = 0;
    } else {
        // 答对

        let scale = 1;

        if (gData.gameState.curQueId === ANS_COUNT - 1) { scale = 2; }

        let score = calcScore(ANS_FULL * scale, Date.now() - gData.startRoundTime);

        player.score = score;
        player.sumScore += score;
    }

    // 全部提交就结束一局
    if (isAllSubmit(arguments[0])) {
        clearTimeout(gData.roundTimer);
        return endRound(arguments[0]);
    }

    return curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);
}

function isAllSubmit({ gameData, SDK, room }: mgobexsInterface.ActionArgs<null>): boolean {
    let gData = gameData as AnsGameData;
    let res = true;

    gData.gameState.playerGroup.forEach(group => group.forEach(p => p.ans < 0 && (res = false)));

    return res;
}

export { newGame, curGame, newRound, endRound, endGame, checkSubmit };