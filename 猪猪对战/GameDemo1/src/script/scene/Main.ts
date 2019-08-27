import Base from "./Base";
import Global from "../Global";
import CircleSpriteRuntime from "../runtime/CircleSpriteRuntime";

export default class Main extends Base {
    /** @prop {name:scene,tips:"",type:Node}*/
    scene: Laya.Scene;

    /** @prop {name:createRoomBtn,tips:"",type:Node}*/
    createRoomBtn: Laya.Button;

    /** @prop {name:matchBtn,tips:"",type:Node}*/
    matchBtn: Laya.Button;

    /** @prop {name:myHead,tips:"",type:Node}*/
    myHead: CircleSpriteRuntime;

    constructor() {
        super();
    }

    async onAwake() {        
        await super.onAwake();
    }

    onEnable() {
        this.initView();
        this.initListener();
    }

    initListener() {
        this.createRoomBtn.on(Laya.Event.CLICK, this, () => this.onCreateRoomClick());
        this.matchBtn.on(Laya.Event.CLICK, this, () => this.onMatchClick());
    }

    initView() {
        this.myHead.loadImage(Global.userInfo.avatarUrl);
    }

    async onCreateRoomClick() {

        // todo: 通过邀请链接加房

        if (this.isInProgress()) {
            return;
        }

        this.showProgressBar(true);

        let loginRes = await this.login();

        if (!loginRes) { return this.showProgressBar(false); }

        let res = await this.createRoom();

        this.showProgressBar(false);

        if (res === MGOBE.ErrCode.EC_ROOM_PLAYER_ALREADY_IN_ROOM) {
            return this.handleInRoom();
        }

        if (res === MGOBE.ErrCode.EC_OK) {
            this.openScene("Room");
            return this.invite();
        }

        return this.showDialog("创建房间失败");
    }

    async onMatchClick() {

        if (this.isInProgress()) {
            return;
        }

        let loginRes = await this.login();

        if (!loginRes) { return;}

        this.openScene("Room");
    }

    invite() {
        wx.shareAppMessage({
            title: "你还在犹豫什么，快来和我对战一场！",
            query: "roomId=" + Global.room.roomInfo.id,
            imageUrl: "image/share.png",
        });
    }

    async leaveMyRoom(): Promise<boolean> {
        this.showProgressBar(true);

        let res = await this.leaveRoom();

        this.showProgressBar(false);

        if (res === MGOBE.ErrCode.EC_OK || res === MGOBE.ErrCode.EC_ROOM_PLAYER_NOT_IN_ROOM) {
            return Promise.resolve(true);
        } else {
            this.showDialog("退房失败");
            return Promise.resolve(false);
        }
    }

    handleInRoom() {
        this.showDialog("用户已在房间内，是否进入房间？", () => {
            // 进入旧房间
            this.openScene("Room");
        }, () => {
            // 退出旧房间
            this.leaveMyRoom();
        });
    }

    onDisable() {
        this.onUpdate = () => null;
    }
}