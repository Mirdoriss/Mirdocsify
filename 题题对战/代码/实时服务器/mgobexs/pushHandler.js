"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("./Util");
exports.ANS_TIME = 16500;
exports.ANS_COUNT = 5;
exports.ANS_FULL = 200;
var SER_PUSH_CMD;
(function (SER_PUSH_CMD) {
    SER_PUSH_CMD[SER_PUSH_CMD["CURRENT"] = 1] = "CURRENT";
    SER_PUSH_CMD[SER_PUSH_CMD["GAME_STEP"] = 2] = "GAME_STEP";
    SER_PUSH_CMD[SER_PUSH_CMD["ERR"] = 3] = "ERR";
})(SER_PUSH_CMD = exports.SER_PUSH_CMD || (exports.SER_PUSH_CMD = {}));
// 新游戏
function newGame({ gameData, SDK, room }) {
    let gData = gameData;
    gData.gameState.curQueId = -1;
    gData.gameState.que = null;
    // 重置总分
    gData.gameState.playerGroup.forEach(group => group.forEach(player => {
        player.sumScore = 0;
        player.ans = -1;
    }));
    newRound(arguments[0]);
}
exports.newGame = newGame;
// 当前游戏状态
function curGame({ gameData, SDK, room }, pushCmd, playerIdList = []) {
    let gData = gameData;
    playerIdList = playerIdList.filter(id => !!id);
    if (gData.gameState.curQueId >= 0 && gData.gameState.time >= 0) {
        // 剩余时间
        gData.gameState.time = exports.ANS_TIME - (Date.now() - gData.startRoundTime);
    }
    const gameState = Object.assign({}, gData.gameState);
    SDK.sendData({ playerIdList, data: { cmd: pushCmd, err: "", gameState } });
}
exports.curGame = curGame;
// 新一局
function newRound({ gameData, SDK, room }) {
    let gData = gameData;
    gData.gameState.curQueId++;
    gData.gameState.que = gData.ques[gData.gameState.curQueId];
    gData.gameState.time = exports.ANS_TIME;
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
    }, exports.ANS_TIME);
}
exports.newRound = newRound;
// 结束一局
function endRound({ gameData, SDK, room }) {
    let gData = gameData;
    gData.gameState.time = -100;
    curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);
    // 2秒后结束游戏
    if (!gData.gameState.finish && gData.gameState.curQueId >= exports.ANS_COUNT - 1) {
        return setTimeout(() => endGame(arguments[0]), 2000);
    }
    // 2秒后新一局
    return setTimeout(() => newRound(arguments[0]), 2000);
}
exports.endRound = endRound;
// 结束游戏
function endGame({ gameData, SDK, room }) {
    return __awaiter(this, arguments, void 0, function* () {
        let gData = gameData;
        gData.gameState.curQueId = 100000;
        gData.gameState.finish = true;
        curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);
    });
}
exports.endGame = endGame;
// 检查提交的答案
function checkSubmit({ gameData, SDK, room }, playerId, ans) {
    let gData = gameData;
    // 超过时间
    if (gData.gameState.time <= 0) {
        return curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);
        ;
    }
    // 超过题目数量
    if (gData.gameState.curQueId >= exports.ANS_COUNT) {
        return curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);
    }
    let player = null;
    let que = gData.gameState.que;
    gData.gameState.playerGroup.forEach(group => group.forEach(p => p.playerId === playerId && (player = p)));
    // 异常
    if (!player || player.score > 0 || player.ans >= 0 || !que) {
        return curGame(arguments[0], SER_PUSH_CMD.GAME_STEP);
    }
    player.ans = ans;
    if (que.ans !== ans) {
        // 答错
        player.score = 0;
    }
    else {
        // 答对
        let scale = 1;
        if (gData.gameState.curQueId === exports.ANS_COUNT - 1) {
            scale = 2;
        }
        let score = Util_1.calcScore(exports.ANS_FULL * scale, Date.now() - gData.startRoundTime);
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
exports.checkSubmit = checkSubmit;
function isAllSubmit({ gameData, SDK, room }) {
    let gData = gameData;
    let res = true;
    gData.gameState.playerGroup.forEach(group => group.forEach(p => p.ans < 0 && (res = false)));
    return res;
}
