import { GameState, Player } from "./scene/Base";

interface UserInfo {
	nickName: string,
	gender: number,
	language: string,
	city: string,
	province: string,
	country: string,
	avatarUrl: string,
}

class Global {
	public room: MGOBE.Room;
	public userInfo: UserInfo;
	public openId: string;
	public gameId: string;
	public secretKey: string;
	public server: string;
	public gameState: GameState = null;
	// 匹配Code
	public matchCodes: {1: string, 2: string, 3: string, } = null;
	// 当前使用的匹配模式
	public matchMode: number = 1;
	// 我方成员
	public myGroup: Player[] = [];
	// 敌方成员
	public enemyGroup: Player[] = [];
	// 全部玩家
	public playsers: Player[] = [];
}

const global = new Global();

export default global;