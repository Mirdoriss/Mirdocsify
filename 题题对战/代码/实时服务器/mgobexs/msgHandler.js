"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("./Util");
const pushHandler_1 = require("./pushHandler");
const pushHandler = __importStar(require("./pushHandler"));
function readyHandler({ actionData, gameData, SDK, room, sender }) {
    let gData = gameData;
    if (!gData.gameState) {
        initGameData(gData, room);
        return setTimeout(() => pushHandler.newGame(arguments[0]), 1000);
    }
    // 发送最新游戏信息
    pushHandler.curGame(arguments[0], pushHandler.SER_PUSH_CMD.CURRENT, [sender]);
}
function submitHandler({ actionData, gameData, SDK, room, sender }) {
    pushHandler.checkSubmit(arguments[0], sender, actionData.ans);
}
function curStateHandler({ actionData, gameData, SDK, room, sender }) {
    pushHandler.curGame(arguments[0], pushHandler.SER_PUSH_CMD.CURRENT, [sender]);
}
function initGameData(gData, room) {
    gData.gameState = {};
    gData.ques = Util_1.randomQue();
    gData.gameState.curQueId = -1;
    gData.gameState.playerGroup = [[], []];
    gData.gameState.time = pushHandler_1.ANS_TIME;
    gData.gameState.finish = false;
    gData.gameState.que = null;
    let teamId = room.playerList[0].teamId;
    gData.gameState.playerGroup[0] = room.playerList.filter(u => u.teamId === teamId).map(player => ({
        score: 0,
        sumScore: 0,
        playerId: player.id,
        customStatus: player.customPlayerStatus,
        teamId: player.teamId,
        customProfile: player.customProfile,
        ans: -1,
        name: player.name,
    }));
    gData.gameState.playerGroup[1] = room.playerList.filter(u => u.teamId !== teamId).map(player => ({
        score: 0,
        sumScore: 0,
        playerId: player.id,
        customStatus: player.customPlayerStatus,
        teamId: player.teamId,
        customProfile: player.customProfile,
        ans: -1,
        name: player.name,
    }));
}
const handlerWarpper = (handler) => (args) => {
    handler(args);
    args.SDK.exitAction();
};
exports.default = {
    READY: handlerWarpper(readyHandler),
    SUBMIT: handlerWarpper(submitHandler),
    CURRENT: handlerWarpper(curStateHandler),
};
