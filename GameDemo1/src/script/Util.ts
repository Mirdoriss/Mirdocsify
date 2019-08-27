import { GameInfo } from "./scene/Base";

const GAME_INFO_TAG = "__gameInfo__";

function getGameInfoFromStorage(): GameInfo {
    let res: GameInfo;
    try {
        var value = wx.getStorageSync(GAME_INFO_TAG)
        if (value) { 
            res = JSON.parse(value);
        }
    } catch (e) {
    }
    return res;
}

function setGameInfoToStorage(gameInfo: GameInfo) {
    try {
        let str = gameInfo ? JSON.stringify(gameInfo) : "";
        wx.setStorageSync(GAME_INFO_TAG, str);
    } catch (e) { }
}

export { getGameInfoFromStorage, setGameInfoToStorage };