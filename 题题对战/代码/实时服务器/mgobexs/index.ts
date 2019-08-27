import { mgobexsInterface } from './mgobexsInterface';
import msgHandler from './msgHandler';
import { SER_PUSH_CMD } from './pushHandler';

const gameServer: mgobexsInterface.GameServer.IGameServer = {
	mode: 'sync',
	onInitGameData: function (): mgobexsInterface.GameData {
		return {};
	},
	onRecvFromClient: function onClientData({ actionData, gameData, SDK, sender, room, exports }: mgobexsInterface.ActionArgs<mgobexsInterface.UserDefinedData>) {

		let cmd = actionData.cmd;

		if (!room) {
			SDK.sendData({ playerIdList: [], data: { err: " ERROR NO_ROOM ", cmd: SER_PUSH_CMD.ERR, gameState: null } });
			return SDK.exitAction();
		}

		if (!cmd || !msgHandler[cmd]) {
			SDK.sendData({ playerIdList: [], data: { err: " ERROR NO_CMD ", cmd: SER_PUSH_CMD.ERR, gameState: null } });
			return SDK.exitAction();
		}

		try {
			msgHandler[cmd](arguments[0]);
		} catch (e) {
			SDK.sendData({ playerIdList: [], data: { err: " ERROR " + e + sender, cmd: SER_PUSH_CMD.ERR, gameState: null } });
			SDK.exitAction();
		}

		return;

	},
	onJoinRoom: function ({ actionData, gameData, SDK, room, exports }) {
		SDK.logger.debug(
			'actionData', actionData,
			'\n',
			'gameData', gameData,
			'\n',
			'room', room
		);
	},
	onCreateRoom: function ({ actionData, gameData, SDK, room, exports }) {
		SDK.logger.debug(
			'actionData', actionData,
			'\n',
			'gameData', gameData,
			'\n',
			'room', room
		);
	},
	onLeaveRoom: function ({ actionData, gameData, SDK, room, exports }) {
		SDK.logger.debug(
			'actionData', actionData,
			'\n',
			'gameData', gameData,
			'\n',
			'room', room
		);
	},
	onRemovePlayer: function ({ actionData, gameData, SDK, room, exports }) {
		SDK.logger.debug(
			'actionData', actionData,
			'\n',
			'gameData', gameData,
			'\n',
			'room', room
		);
	},
	onDestroyRoom: function ({ actionData, gameData, SDK, room, exports }) {
		SDK.logger.debug(
			'actionData', actionData,
			'\n',
			'gameData', gameData,
			'\n',
			'room', room
		);
	},
	onChangeRoom: function ({ actionData, gameData, SDK, room, exports }) {
		SDK.logger.debug(
			'actionData', actionData,
			'\n',
			'gameData', gameData,
			'\n',
			'room', room
		);
	},
	onChangeCustomPlayerStatus: function ({ actionData, gameData, SDK, room, exports }) {
		SDK.logger.debug(
			'actionData', actionData,
			'\n',
			'gameData', gameData,
			'\n',
			'room', room
		);
	},
	onChangePlayerNetworkState: function ({ actionData, gameData, SDK, room, exports }) {
		SDK.logger.debug(
			'actionData', actionData,
			'\n',
			'gameData', gameData,
			'\n',
			'room', room
		);
	},
	onStartFrameSync: function ({ actionData, gameData, SDK, room, exports }) {
		SDK.logger.debug(
			'onStartFrameSync',
			'actionData:', actionData,
			'gameData:', gameData,
			'room:', room
		);
	},
	onStopFrameSync: function ({ actionData, gameData, SDK, room, exports }) {
		SDK.logger.debug(
			'onStopFrameSync',
			'actionData:', actionData,
			'gameData:', gameData,
			'room:', room
		);
	}
};

export const mgobexsCode: mgobexsInterface.mgobexsCode = {
	gameServer
}
