import { mgobexsInterface } from "./mgobexsInterface";
import { Que } from "./Question";
import { randomQue } from "./Util";
import { ANS_TIME } from "./pushHandler";
import * as pushHandler from "./pushHandler";

export interface Player {
    score: number,
    sumScore: number,
    ans: number,
    playerId: string,
    customStatus: number,
    customProfile: string,
    teamId: string,
	name: string,
}

export interface GameState {
    playerGroup: [Player[], Player[]],
    que: Que,
    time: number,
    finish: boolean,
    curQueId: number,
}

export interface AnsGameData {
    gameState: GameState,
    roundTimer: NodeJS.Timeout,
    startRoundTime: number,
    ques: Que[],
}

interface AnsActionData {
    cmd: string,
    ans: number,
}

function readyHandler({ actionData, gameData, SDK, room, sender }: mgobexsInterface.ActionArgs<AnsActionData>) {

    let gData = gameData as AnsGameData;

    if (!gData.gameState) {
        initGameData(gData, room);
        return setTimeout(() => pushHandler.newGame(arguments[0]), 1000);
    }

    // 发送最新游戏信息
    pushHandler.curGame(arguments[0], pushHandler.SER_PUSH_CMD.CURRENT, [sender]);
}

function submitHandler({ actionData, gameData, SDK, room, sender }: mgobexsInterface.ActionArgs<AnsActionData>) {
    pushHandler.checkSubmit(arguments[0], sender, actionData.ans);
}

function curStateHandler({ actionData, gameData, SDK, room, sender }: mgobexsInterface.ActionArgs<AnsActionData>) {
    pushHandler.curGame(arguments[0], pushHandler.SER_PUSH_CMD.CURRENT, [sender]);
}

function initGameData(gData: AnsGameData, room: mgobexsInterface.IRoomInfo) {
    gData.gameState = {} as any;
    gData.ques = randomQue();

    gData.gameState.curQueId = -1;
    gData.gameState.playerGroup = [[], []];
    gData.gameState.time = ANS_TIME;
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

const handlerWarpper = (handler: (arsg: mgobexsInterface.ActionArgs<AnsActionData>) => any) => (args: mgobexsInterface.ActionArgs<AnsActionData>) => {
    handler(args);
    
    args.SDK.exitAction();
};

export default {
    READY: handlerWarpper(readyHandler),
    SUBMIT: handlerWarpper(submitHandler),
    CURRENT: handlerWarpper(curStateHandler),
};