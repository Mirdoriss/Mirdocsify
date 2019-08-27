"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const msgHandler_1 = __importDefault(require("./msgHandler"));
const pushHandler_1 = require("./pushHandler");
const gameServer = {
    mode: 'sync',
    onInitGameData: function () {
        return {};
    },
    onRecvFromClient: function onClientData({ actionData, gameData, SDK, sender, room, exports }) {
        let cmd = actionData.cmd;
        if (!room) {
            SDK.sendData({ playerIdList: [], data: { err: " ERROR NO_ROOM ", cmd: pushHandler_1.SER_PUSH_CMD.ERR, gameState: null } });
            return SDK.exitAction();
        }
        if (!cmd || !msgHandler_1.default[cmd]) {
            SDK.sendData({ playerIdList: [], data: { err: " ERROR NO_CMD ", cmd: pushHandler_1.SER_PUSH_CMD.ERR, gameState: null } });
            return SDK.exitAction();
        }
        try {
            msgHandler_1.default[cmd](arguments[0]);
        }
        catch (e) {
            SDK.sendData({ playerIdList: [], data: { err: " ERROR " + e + sender, cmd: pushHandler_1.SER_PUSH_CMD.ERR, gameState: null } });
            SDK.exitAction();
        }
        return;
    },
    onJoinRoom: function ({ actionData, gameData, SDK, room, exports }) {
        SDK.logger.debug('actionData', actionData, '\n', 'gameData', gameData, '\n', 'room', room);
    },
    onCreateRoom: function ({ actionData, gameData, SDK, room, exports }) {
        SDK.logger.debug('actionData', actionData, '\n', 'gameData', gameData, '\n', 'room', room);
    },
    onLeaveRoom: function ({ actionData, gameData, SDK, room, exports }) {
        SDK.logger.debug('actionData', actionData, '\n', 'gameData', gameData, '\n', 'room', room);
    },
    onRemovePlayer: function ({ actionData, gameData, SDK, room, exports }) {
        SDK.logger.debug('actionData', actionData, '\n', 'gameData', gameData, '\n', 'room', room);
    },
    onDestroyRoom: function ({ actionData, gameData, SDK, room, exports }) {
        SDK.logger.debug('actionData', actionData, '\n', 'gameData', gameData, '\n', 'room', room);
    },
    onChangeRoom: function ({ actionData, gameData, SDK, room, exports }) {
        SDK.logger.debug('actionData', actionData, '\n', 'gameData', gameData, '\n', 'room', room);
    },
    onChangeCustomPlayerStatus: function ({ actionData, gameData, SDK, room, exports }) {
        SDK.logger.debug('actionData', actionData, '\n', 'gameData', gameData, '\n', 'room', room);
    },
    onChangePlayerNetworkState: function ({ actionData, gameData, SDK, room, exports }) {
        SDK.logger.debug('actionData', actionData, '\n', 'gameData', gameData, '\n', 'room', room);
    },
    onStartFrameSync: function ({ actionData, gameData, SDK, room, exports }) {
        SDK.logger.debug('onStartFrameSync', 'actionData:', actionData, 'gameData:', gameData, 'room:', room);
    },
    onStopFrameSync: function ({ actionData, gameData, SDK, room, exports }) {
        SDK.logger.debug('onStopFrameSync', 'actionData:', actionData, 'gameData:', gameData, 'room:', room);
    }
};
exports.mgobexsCode = {
    gameServer
};
