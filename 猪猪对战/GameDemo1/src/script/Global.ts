import GameState from "./GameState";

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
	public state: GameState;
}

const global = new Global();

export default global;