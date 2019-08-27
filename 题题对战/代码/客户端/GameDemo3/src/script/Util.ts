
import { GameInfo } from "./scene/Base";
import Global from "./Global";

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


export function modeViewFilter<T>(items: T[]) {
    let matchMode = Global.matchMode;
    return items.slice(0, matchMode);
}

export function modeViewXYAdjust(items: any[], opitem: (item: any) => any, isXYAjust: boolean) {
    let matchMode = Global.matchMode;
    if (matchMode === 1) {
        opitem(items[0]).x = opitem(items[1]).x;
        opitem(items[0]).y = opitem(items[1]).y;
        items.slice(1).forEach(item => opitem(item).visible = false);
    } else if (matchMode === 2) {
        if (isXYAjust) {
            let defX = Math.round((opitem(items[1]).x - opitem(items[0]).x) / 2);
            let defY = Math.round((opitem(items[1]).y - opitem(items[0]).y) / 2);
            opitem(items[0]).x += defX;
            opitem(items[0]).y += defY;
            opitem(items[1]).x += defX;
            opitem(items[1]).y += defY;
        }
        items.slice(2).forEach(item => opitem(item).visible = false);
    }
}

export { getGameInfoFromStorage, setGameInfoToStorage };