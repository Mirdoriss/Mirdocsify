declare namespace MGOBE {
    /********************************* 玩家信息 ************************************/
    /**
     * @name 玩家信息
     * @description 该对象记录了玩家的基本信息，默认全部为空。成功初始化Listener之后，id、openId 属性将生效。
     * @description 玩家进入房间后，该对象的属性与 roomInfo.playerList 中当前玩家信息保持一致。
     * @description 玩家 ID 是 MGOBE 后台生成的 ID，openId 是开发者初始化时候使用的 ID。openId 只有初始化 Listener 的时候使用，其它接口的“玩家 ID”均指后台生成的 ID。
     * @field {string}  id  玩家ID
     * @field {string}  openId  玩家openId
     * @field {string}  name  玩家昵称
     * @field {string}  teamId  队伍ID
     * @field {number}  customPlayerStatus  自定义玩家状态
     * @field {string}  customProfile  自定义玩家属性
     * @field {MGOBE.types.NetworkState}  commonNetworkState  房间网络状态
     * @field {MGOBE.types.NetworkState}  relayNetworkState  帧同步网络状态
     */
    export const Player: {
        readonly id: string;
        readonly openId: string;
        readonly name: string;
        readonly teamId: string;
        readonly customPlayerStatus: number;
        readonly customProfile: string;
        readonly commonNetworkState: MGOBE.types.NetworkState;
        readonly relayNetworkState: MGOBE.types.NetworkState;
    };

    /********************************* SDK 枚举 *********************************/
    /**
     * @name 操作类型枚举
     * @enum {MGOBE.types.CreateRoomType}  CreateRoomType  创建房间方式
     * @enum {MGOBE.types.MatchType}  MatchType  匹配类型
     * @enum {MGOBE.types.NetworkState}  NetworkState  网络状态
     * @enum {MGOBE.types.FrameSyncState}  FrameSyncState  房间帧同步状态
     * @enum {MGOBE.types.RecvType}  RecvType  消息接收者范围
     */
    export const ENUM: {
        readonly CreateRoomType: typeof MGOBE.types.CreateRoomType;
        readonly MatchType: typeof MGOBE.types.MatchType;
        readonly NetworkState: typeof MGOBE.types.NetworkState;
        readonly FrameSyncState: typeof MGOBE.types.FrameSyncState;
        readonly RecvType: typeof MGOBE.types.RecvType;
    };

    /********************************* SDK 随机数工具 *********************************/
    export const RandomUtil: {
        /**
         * @name 初始化随机数
         * @description init 方法接受一个 seed 为参数，RandomUtil 在后续生成随机数的过程中将以 seed 为种子。使用相同的 seed 初始化，调用 random 方法生成的随机数序列相同。
         * @param {number} seed 随机数种子
         * @returns {void}
         */
        init(seed: number): void;
        /**
         * @name 生成随机数
         * @description 如果种子相同、初始化后调用次数相同，生成的随机数将相同。
         * @returns {number} 随机数
         */
        random(): number;
    };

    /********************************* SDK 日志打印 ************************************/
    export class DebuggerLog {
        static enable: boolean;
        static callback: (...logs: any[]) => any;
    }

    export const StatCallbacks: {
        onPingTime(time: number): void;
        onFitFrameTime(deltaTime: number): void;
        onBstFrameRate(deltaTime: number): void;
        onRenderFrameRate(deltaTime: number): void;
    };

    /********************************* Room 广播回调 *********************************/
    class RoomBroadcastHandler {
        /**
         * @name 新玩家加入房间广播回调接口
         * @description onJoinRoom 广播表示该房间有新玩家加入。房间内全部成员都会收到该广播。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.JoinRoomBst>} event 回调参数
         * @returns {void}
         */
        onJoinRoom: (event: MGOBE.types.BroadcastEvent<MGOBE.types.JoinRoomBst>) => any;
        /**
         * @name 玩家退出房间广播回调接口
         * @description onLeaveRoom 广播表示该房间有玩家退出。房间内全部成员都会收到该广播。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.LeaveRoomBst>} event 回调参数
         * @returns {void}
         */
        onLeaveRoom: (event: MGOBE.types.BroadcastEvent<MGOBE.types.LeaveRoomBst>) => any;
        /**
         * @name 房间被解散广播回调接口
         * @description onDismissRoom 广播表示房主解散了该房间。房间内全部成员都会收到该广播。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.DismissRoomBst>} event 回调参数
         * @returns {void}
         */
        onDismissRoom: (event: MGOBE.types.BroadcastEvent<MGOBE.types.DismissRoomBst>) => any;
        /**
         * @name 房主修改房间信息广播回调接口
         * @description onChangeRoom 广播表示房主修改了该房间属性。房间内全部成员都会收到该广播。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.ChangeRoomBst>} event 回调参数
         * @returns {void}
         */
        onChangeRoom: (event: MGOBE.types.BroadcastEvent<MGOBE.types.ChangeRoomBst>) => any;
        /**
         * @name 房间内玩家被移除广播回调接口
         * @description onRemovePlayer 广播表示有玩家被房主移除。房间内全部成员都会收到该广播。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.RemovePlayerBst>} event 回调参数
         * @returns {void}
         */
        onRemovePlayer: (event: MGOBE.types.BroadcastEvent<MGOBE.types.RemovePlayerBst>) => any;
        /**
         * @name 收到房间内其他玩家消息广播回调接口
         * @description onRecvFromClient 广播表示收到来自 ID 为 sendPlayerId 的玩家消息。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.RecvFromClientBst>} event 回调参数
         * @returns {void}
         */
        onRecvFromClient: (event: MGOBE.types.BroadcastEvent<MGOBE.types.RecvFromClientBst>) => any;
        /**
         * @name 收到自定义服务消息广播回调接口
         * @description onRecvFromGameSvr 广播表示收到来自自定义服务的消息。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.RecvFromGameSvrBst>} event 回调参数
         * @returns {void}
         */
        onRecvFromGameSvr: (event: MGOBE.types.BroadcastEvent<MGOBE.types.RecvFromGameSvrBst>) => any;
        /**
         * @name 房间内玩家网络状态变化广播回调接口
         * @description onChangePlayerNetworkState 广播表示 ID 为 changePlayerId 的玩家网络状态发生变化。
         * @description 玩家在房间中、帧同步中的网络变化都会触发该广播，因此 networkState 将有四中情况，分别表示房间中上下线、帧同步中上下线。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.ChangePlayerNetworkStateBst>} event 回调参数
         * @returns {void}
         */
        onChangePlayerNetworkState: (event: MGOBE.types.BroadcastEvent<MGOBE.types.ChangePlayerNetworkStateBst>) => any;
        /**
         * @name 玩家自定义状态变化广播回调接口
         * @description onChangeCustomPlayerStatus 广播表示房间内 ID 为 changePlayerId 的玩家状态发生变化。玩家状态由开发者自定义。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.ChangeCustomPlayerStatusBst>} event 回调参数
         * @returns {void}
         */
        onChangeCustomPlayerStatus: (event: MGOBE.types.BroadcastEvent<MGOBE.types.ChangeCustomPlayerStatusBst>) => any;
        /**
         * @name 开始帧同步广播回调接口
         * @description onStartFrameSync 广播表示房间开始帧同步。收到该广播后将持续收到 onRecvFrame 广播。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.StartFrameSyncBst>} event 回调参数
         * @returns {void}
         */
        onStartFrameSync: (event: MGOBE.types.BroadcastEvent<MGOBE.types.StartFrameSyncBst>) => any;
        /**
         * @name 停止帧同步广播回调接口
         * @description onStopFrameSync 广播表示房间停止帧同步。收到该广播后将不再收到 onRecvFrame 广播。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.StopFrameSyncBst>} event 回调参数
         * @returns {void}
         */
        onStopFrameSync: (event: MGOBE.types.BroadcastEvent<MGOBE.types.StopFrameSyncBst>) => any;
        /**
         * @name 房间帧消息广播回调接口
         * @description onRecvFrame 广播表示收到一个帧 frame，frame 的内容由多个 MGOBE.types.FrameItem 组成，即一帧时间内房间内所有玩家向服务器发送帧消息的集合。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.RecvFrameBst>} event 回调参数
         * @returns {void}
         */
        onRecvFrame: (event: MGOBE.types.BroadcastEvent<MGOBE.types.RecvFrameBst>) => any;
        /**
         * @name 自动补帧失败回调接口
         * @description onAutoRequestFrameError 表示自动补帧失败，在初始化 Listener 时开启自动补帧后才能触发。
         * @description 发生补帧失败后，将不能收到帧广播，开发者可以使用 retryAutoRequestFrame 方法重试自动补帧。
         * @param {MGOBE.types.BroadcastEvent<MGOBE.types.ResponseEvent<MGOBE.types.RequestFrameRsp>>} event 回调参数
         * @returns {void}
         */
        onAutoRequestFrameError: (event: MGOBE.types.BroadcastEvent<MGOBE.types.ResponseEvent<MGOBE.types.RequestFrameRsp>>) => any;
    }
    /********************************* SDK Room对象 *********************************/
    export class Room extends RoomBroadcastHandler {

        /**
         * @name 构造器
         * @description 实例化 Room 对象时可以传入一个 MGOBE.types.RoomInfo 对象 roomInfo，后续接口调用都将基于该 roomInfo，例如修改该房间的属性、接收该房间的广播。
         * @description 如果不传 roomInfo 参数，开发者可以通过直接调用 initRoom、createRoom、joinRoom 等方法获取 roomInfo。
         * @description Room 对象会自动维护内部的 roomInfo 属性保持最新，开发者可以直接通过访问该属性获得最新的房间信息。
         * @param {MGOBE.types.RoomInfo} roomInfo 房间信息（可选）
         * @returns {void}
         */
        constructor(roomInfo?: MGOBE.types.RoomInfo);
        /**
         * @name 房间信息
         * @description roomInfo 为 Room 实例的属性，类型为 MGOBE.types.RoomInfo，调用 Room 相关的接口会导致该属性发生变化。
         */
        roomInfo: MGOBE.types.RoomInfo;
        /**
         * @name 获取房间列表
         * @description 调用结果将在 callback 中异步返回。
         * @description 该接口为 Room 的静态方法，只能通过 Room.getRoomList 方式调用，Room 实例无法直接访问该方法。
         * @param {MGOBE.types.GetRoomListPara} getRoomListPara  获取房间列表参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.GetRoomListRsp>} callback  响应回调函数
         * @returns {void}
         */
        static getRoomList(getRoomListPara: MGOBE.types.GetRoomListPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.GetRoomListRsp>): void;
        /**
         * @name 根据房间 ID 获取房间
         * @description 调用结果将在 callback 中异步返回。
         * @description 该接口为 Room 的静态方法，只能通过 Room.getRoomByRoomId 方式调用，Room 实例无法直接访问该方法。
         * @description 如果参数中的 roomId 为空字符串，将查询玩家所在的房间。
         * @param {MGOBE.types.GetRoomByRoomIdPara} getRoomByRoomIdPara  获取房间参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.GetRoomByRoomIdRsp>} callback  响应回调函数
         * @returns {void}
         */
        static getRoomByRoomId(getRoomByRoomIdPara: MGOBE.types.GetRoomByRoomIdPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.GetRoomByRoomIdRsp>): void;
        /**
         * @name 判断玩家是否在该 Room 实例中
         * @description isInRoom 方法本质上是检查 roomInfo.playerList 中是否存在玩家 ID。如果存在，就返回 true。
         * @returns {boolean} 玩家是否在该room实例中。
         */
        isInRoom(): boolean;
        /**
         * @name 初始化 Room 实例的房间信息，即更新 roomInfo 属性
         * @description initRoom 会更新 Room 实例的 roomInfo，接受 MGOBE.types.RoomInfo 或 { id: string; } 类型的参数。
         * @description 如果不传参数，该方法将清空 Room 实例的 roomInfo 属性，此时调用 getRoomDetail 方法将查询玩家所在的房间。
         * @description 当玩家需要加入指定 id 房间时，需要使用该接口初始化 Room 实例的 roomInfo 属性，然后才能通过调用 joinRoom 方法加入该 Room 实例所代表的房间。
         * @param {MGOBE.types.RoomInfo 或 { id: string }} roomInfo  初始化参数，id表示房间id
         * @returns {void}
         */
        initRoom(roomInfo?: MGOBE.types.RoomInfo | {
            id: string;
        }): void;
        /**
         * @name 房间信息更新回调接口
         * @description onUpdate 表明 Room 实例的 roomInfo 信息发生变化，这种变化原因包括各种房间操作、房间广播、本地网络状态变化等。
         * @description 开发者可以在该接口中更新游戏画面，或者使用 networkState 属性判断网络状态。
         * @param {Room} room 更新的Room实例（可选）
         * @returns {void}
         */
        onUpdate(room?: Room): void;
        /**
         * @name 该属性为只读属性，用于获取客户端本地 SDK 网络状态
         * @description 该属性类型为 ```{ COMMON: boolean, RELAY: boolean }``` 。COMMON 表示房间网络状态；RELAY 表示帧同步网络状态。为 true 时表示网络已连接，为 false 时表示网络未连接。
         * @description 该网络状态与玩家信息中的网络状态（Player.commonNetworkState/Player.relayNetworkState）概念不同，前者表示本地 socket 状态，后者表示玩家在 MGOBE 后台中的状态。
         * @description 本地 socket 网络状态变化时，onUpdate 将被触发。
         */
        readonly networkState: {
            COMMON: boolean;
            RELAY: boolean;
        };
        /**
         * @name 创建房间
         * @description createRoom 调用结果将在 callback 中异步返回。操作成功后，roomInfo 属性将更新。
         * @description 创建房间成功后，玩家自动进入该房间，因此无法继续调用 joinRoom、matchPlayers 等方法，可以利用房间ID邀请其他玩家进入该房间。
         * @param {MGOBE.types.CreateRoomPara} createRoomPara  创建房间参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.CreateRoomRsp>} callback  响应回调函数
         * @returns {void}
         */
        createRoom(createRoomPara: MGOBE.types.CreateRoomPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.CreateRoomRsp>): void;
        /**
         * @name 创建团队房间
         * @description createTeamRoom 调用结果将在 callback 中异步返回。操作成功后，roomInfo 属性将更新。
         * @description 创建房间成功后，玩家自动进入该房间，因此无法继续调用 joinRoom、matchPlayers 等方法。
         * @description 参数中的“房间最大玩家数量”要求能被“队伍数量”整除，创建成功后每个队伍的“队伍最小人数”为1，“队伍最大人数”为整除结果。
         * @param {MGOBE.types.CreateTeamRoomPara} createTeamRoomPara  创建团队房间参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.CreateRoomRsp>} callback  响应回调函数
         * @returns {void}
         */
        createTeamRoom(createTeamRoomPara: MGOBE.types.CreateTeamRoomPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.CreateRoomRsp>): void;
        /**
         * @name 加入房间
         * @description joinRoom 调用结果将在 callback 中异步返回。
         * @description 该接口加入的房间是 Room 实例所代表的房间，如果该 Room 实例的 roomInfo 不存在 roomId，则需要使用 roomId 通过 init 方法初始化 Room 实例。
         * @description 加房成功后，房间内全部成员都会收到一条玩家加入房间广播 onJoinRoom，roomInfo 属性将更新。
         * @param {MGOBE.types.JoinRoomPara} joinRoomPara  加入房间参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.JoinRoomRsp>} callback  响应回调函数
         * @returns {void}
         */
        joinRoom(joinRoomPara: MGOBE.types.JoinRoomPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.JoinRoomRsp>): void;
        /**
         * @name 加入团队房间
         * @description joinTeamRoom 调用结果将在 callback 中异步返回。
         * @description 与 joinRoom 类似，该接口加入的房间是 Room 实例所代表的房间。teamId 为 roomInfo.teamList 中定义的队伍 ID。
         * @param {MGOBE.types.JoinTeamRoomPara} joinTeamRoomPara  加入团队房间参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.JoinRoomRsp>} callback  响应回调函数
         * @returns {void}
         */
        joinTeamRoom(joinTeamRoomPara: MGOBE.types.JoinTeamRoomPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.JoinRoomRsp>): void;
        /**
         * @name 退出房间
         * @description leaveRoom 调用结果将在 callback 中异步返回。退出成功后，房间内全部成员都会收到一条玩家退出房间广播 onLeaveRoom，roomInfo 属性将更新，roomInfo.playerList 中将没有该玩家信息。
         * @description 退房后，如果房间内还剩下其他玩家，则该 room 实例仍然代表退房前的房间，可以继续调用 room.initRoom() 清除房间信息。
         * @param {object} para  预留参数，传{}即可
         * @param {MGOBE.types.ReqCallback<MGOBE.types.LeaveRoomRsp>} callback 响应回调函数
         * @returns {void}
         */
        leaveRoom(para: {}, callback?: MGOBE.types.ReqCallback<MGOBE.types.LeaveRoomRsp>): void;
        /**
         * @name 解散房间
         * @description dismissRoom 调用结果将在 callback 中异步返回。解散成功后，房间内全部成员都会收到一条解散房间广播 onDismissRoom，roomInfo 属性将更新。
         * @description 只有房主有权限解散房间
         * @param {object} para  预留参数，传{}即可
         * @param {MGOBE.types.ReqCallback<MGOBE.types.DismissRoomRsp>} callback 响应回调函数
         * @returns {void}
         */
        dismissRoom(para: {}, callback?: MGOBE.types.ReqCallback<MGOBE.types.DismissRoomRsp>): void;
        /**
         * @name 修改房间信息
         * @description changeRoom 调用结果将在 callback 中异步返回。修改成功后，房间内全部成员都会收到一条修改房间广播 onChangeRoom，roomInfo 属性将更新。
         * @description 只有房主有权限修改房间
         * @param {MGOBE.types.ChangeRoomPara} changeRoomPara  修改房间参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.ChangeRoomRsp>} callback  响应回调函数
         * @returns {void}
         */
        changeRoom(changeRoomPara: MGOBE.types.ChangeRoomPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.ChangeRoomRsp>): void;
        /**
         * @name 修改玩家自定义状态
         * @description 修改玩家状态是修改 PlayerInfo 中的 customPlayerStatus 字段，玩家的状态由开发者自定义。
         * @description 修改成功后，房间内全部成员都会收到一条修改玩家状态广播 onChangeCustomPlayerStatus，roomInfo 属性将更新。
         * @description 每个玩家只能修改自己的状态，调用结果将在 callback 中异步返回。
         * @param {MGOBE.types.ChangeCustomPlayerStatusPara} changeCustomPlayerStatusPara  修改玩家状态参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.ChangeCustomPlayerStatusRsp>} callback  响应回调函数
         * @returns {void}
         */
        changeCustomPlayerStatus(changeCustomPlayerStatusPara: MGOBE.types.ChangeCustomPlayerStatusPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.ChangeCustomPlayerStatusRsp>): void;
        /**
         * @name 移除房间内玩家
         * @description 调用结果将在 callback 中异步返回。移除玩家成功后，房间内全部成员都会收到一条移除玩家广播 onRemovePlayer，roomInfo 属性将更新。
         * @description 只有房主有权限移除其他玩家
         * @param {MGOBE.types.RemovePlayerPara} removePlayerPara 移除房间内玩家参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.RemovePlayerRsp>} callback  响应回调函数
         * @returns {void}
         */
        removePlayer(removePlayerPara: MGOBE.types.RemovePlayerPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.RemovePlayerRsp>): void;
        /**
         * @name 获取Room实例的房间信息
         * @description 该接口获取的是 Room 实例的房间信息，调用结果将在 callback 中异步返回。
         * @description 如果该 Room 实例中的 roomInfo 属性没有 ID，该接口将查询玩家所在的房间。
         * @description 如果 roomInfo 属性含有 ID，则查询该 ID 对应的房间信息。
         * @description 操作成功后，roomInfo 属性将更新。
         * @description 如果需要获取指定 ID 的房间信息，可以使用 getRoomByRoomId 方法。
         * @param {MGOBE.types.ReqCallback<MGOBE.types.GetRoomByRoomIdRsp>} callback  响应回调函数
         * @returns {void}
         */
        getRoomDetail(callback?: MGOBE.types.ReqCallback<MGOBE.types.GetRoomByRoomIdRsp>): void;
        /**
         * @name 多人在线匹配
         * @description 调用该接口后将发起多人在线匹配，callback 将异步返回调用结果。返回码为0表示匹配成功，Room 对象内部 roomInfo 属性将自动更新。
         * @description 该接口需要与匹配规则配合使用，因此，匹配超时时间由开发者在匹配规则中定义。开发者需要在控制台上创建匹配，得到匹配 Code 作为该方法的参数 matchCode。
         * @description matchPlayersPara.playerInfo 中的 matchAttributes 数组对应匹配规则中定义的 playerAttributes，playerAttributes 的每一种属性都要填入 matchAttributes 中，name 表示属性名，value 表示玩家该属性的值。
         * @param {MGOBE.types.MatchPlayersPara} matchPlayersPara  多人匹配参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.MatchPlayersRsp>} callback  响应回调函数
         * @returns {void}
         */
        matchPlayers(matchPlayersPara: MGOBE.types.MatchPlayersPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.MatchPlayersRsp>): void;
        /**
         * @name 房间匹配
         * @description 调用该接口后将发起房间匹配，匹配结果将在 callback 中异步返回。操作成功后，Room 对象内部 roomInfo 属性将更新。
         * @description 房间匹配是指按照传入的参数搜索现存的房间，如果存在，则将玩家加入该房间；如果不存在，则为玩家创建并加入一个新房间。
         * @param {MGOBE.types.MatchRoomPara} matchRoomPara  房间匹配参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.MatchRoomSimpleRsp>} callback  响应回调函数
         * @returns {void}
         */
        matchRoom(matchRoomPara: MGOBE.types.MatchRoomPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.MatchRoomSimpleRsp>): void;
        /**
         * @name 取消玩家匹配
         * @description 该接口作用是取消多人匹配请求，即 matchPlayers 请求。调用结果将在 callback 中异步返回。如果玩家已经在房间中，回调函数将返回 roomInfo。
         * @description cancelMatchPara.matchType 需要设置为 MGOBE.ENUM.MatchType.PLAYER_COMPLEX
         * @param {MGOBE.types.CancelMatchPara} cancelMatchPara  取消匹配参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.CancelMatchRsp>} callback  响应回调函数
         * @returns {void}
         */
        cancelPlayerMatch(cancelMatchPara: MGOBE.types.CancelPlayerMatchPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.CancelPlayerMatchRsp>): void;
        /**
         * @name 开始帧同步
         * @description 调用结果将在 callback 中异步返回。调用成功后房间内全部成员将收到 onStartFrameSync 广播。该接口会修改房间帧同步状态为“已开始帧同步”。
         * @description 房间内任意一个玩家成功调用该接口将导致全部玩家开始接收帧广播。
         * @param {object} para  预留参数，传{}即可
         * @param {MGOBE.types.ReqCallback<MGOBE.types.StartFrameSyncRsp>} callback  响应回调函数
         * @returns {void}
         */
        startFrameSync(para: {}, callback?: MGOBE.types.ReqCallback<MGOBE.types.StartFrameSyncRsp>): void;
        /**
         * @name 停止帧同步
         * @description 调用结果将在 callback 中异步返回。调用成功后房间内全部成员将收到 onStopFrameSync 广播。该接口会修改房间帧同步状态为“已停止帧同步”。
         * @description 房间内任意一个玩家成功调用该接口将导致全部玩家停止接收帧广播。
         * @param {object} para  预留参数，传{}即可
         * @param {MGOBE.types.ReqCallback<MGOBE.types.StoptFrameSyncRsp>} callback  响应回调函数
         * @returns {void}
         */
        stopFrameSync(para: {}, callback?: MGOBE.types.ReqCallback<MGOBE.types.StopFrameSyncRsp>): void;
        /**
         * @name 发送帧同步数据
         * @description 帧数据内容 data 类型为普通 object，由开发者自定义，目前支持最大长度不超过1k。
         * @description 后台将集合全部玩家的帧数据，并以一定时间间隔（由房间帧率定义）通过 onRecvFrame 广播给各客户端。调用结果将在 callback 中异步返回。
         * @description 只有房间处于“已开始帧同步”状态才能调用该接口。
         * @param {MGOBE.types.SendFramePara} sendFramePara  发送帧同步数据参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.SendFrameRsp>} callback  响应回调函数
         * @returns {void}
         */
        sendFrame(sendFramePara: MGOBE.types.SendFramePara, callback?: MGOBE.types.ReqCallback<MGOBE.types.SendFrameRsp>): void;
        /**
         * @name 请求补帧
         * @description 调用结果将在 callback 中异步返回。
         * @param {MGOBE.types.RequestFramePara} requestFramePara  请求补帧参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.RequestFrameRsp>} callback  响应回调函数
         * @returns {void}
         */
        requestFrame(requestFramePara: MGOBE.types.RequestFramePara, callback?: MGOBE.types.ReqCallback<MGOBE.types.RequestFrameRsp>): void;
        /**
         * @name 重试自动补帧
         * @description 当收到 onAutoRequestFrameError 回调时，表示自动补帧失败，可以使用该方法重新触发自动补帧。
         * @returns {void}
         */
        retryAutoRequestFrame(): void;
        /**
         * @name 发送消息给房间内玩家
         * @description 调用结果将在 callback 中异步返回。调用成功后所指定的接收消息的玩家将收到 onRecvFromClient 广播。
         * @description 当 recvType 值为 1 （即 ROOM_ALL ） 时，房间内全部玩家将收到消息；
         * @description 当 recvType 值为 2 （即 ROOM_OTHERS ） 时，房间内除消息发送者外的其他玩家将收到消息；
         * @description 当 recvType 值为 3 （即 ROOM_SOME ） 时，接收消息玩家才由 recvPlayerList 决定。
         * @param {MGOBE.types.SendToClientPara} sendToClientPara  发送消息参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.SendToClientRsp>} callback  响应回调函数
         * @returns {void}
         */
        sendToClient(sendToClientPara: MGOBE.types.SendToClientPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.SendToClientRsp>): void;
        /**
         * @name 发送消息给自定义游戏Server
         * @description 该接口只能在玩家进入房间后调用，调用结果将在 callback 中异步返回。
         * @param {MGOBE.types.SendToGameSvrPara} sendToGameSvrPara  发送消息参数
         * @param {MGOBE.types.ReqCallback<MGOBE.types.SendToGameSvrRsp>} callback  响应回调函数
         * @returns {void}
         */
        sendToGameSvr(sendToGameSvrPara: MGOBE.types.SendToGameSvrPara, callback?: MGOBE.types.ReqCallback<MGOBE.types.SendToGameSvrRsp>): void;
    }
    /********************************* SDK Listener对象 *********************************/
    export class Listener {

        /**
         * @name 初始化监听器
         * @description 该方法为静态方法。初始化 Listener 时需要传入 gameInfo 和 config 两个参数。
         * @description 初始化结果在 callback 中异步返回，错误码为 0 表示初始化成功。
         * @param {MGOBE.types.GameInfoPara} gameInfo  游戏信息
         * @param {MGOBE.types.ConfigPara} config  游戏配置
         * @param {MGOBE.types.ReqCallback<null>} callback  初始化回调函数
         * @returns {void}
         */
        static init(gameInfo: MGOBE.types.GameInfoPara, config: MGOBE.types.ConfigPara, callback: MGOBE.types.ReqCallback<null>): void;
        /**
         * @name 为Room实例添加广播监听
         * @description 该方法为静态方法。实例化 Room 对象之后，需要通过该方法给 Room 注册广播事件监听。
         * @description Listener 完成初始化之后才能添加监听。
         * @param {Room} room  需要监听的房间对象
         * @returns {void}
         */
        static add(room: Room): void;
        /**
         * @name 为Room实例移除广播监听
         * @description 该方法为静态方法。如果不再需要监听某个 Room 对象的广播事件，可以通过该方法进行移除。
         * @param {Room} room  需要移除监听的房间对象
         * @returns {void}
         */
        static remove(room: Room): void;
        /**
         * @name 移除全部Room对象的广播监听
         * @description 该方法为静态方法。
         * @returns {void}
         */
        static clear(): void;
    }

    /********************************* SDK 错误码 *********************************/
    export enum ErrCode {
        EC_OK = 0,
        EC_REQ_BAD_PKG = 1,
        EC_CMD_INVALID = 2,
        EC_PARAMS_INVALID = 3,
        EC_INNER_ERROR = 4,
        EC_TIME_OUT = 5,
        EC_SERVER_BUSY = 6,
        EC_NO_RIGHT = 7,
        EC_ACCESS_CMD_INVALID_ERR = 200,
        EC_ACCESS_CMD_GET_TOKEN_ERR = 201,
        EC_ACCESS_CMD_TOKEN_PRE_EXPIRE = 202,
        EC_ACCESS_CMD_INVALID_TOKEN = 203,
        EC_ACCESS_PUSH_SERIALIZE_ERR = 204,
        EC_ACCESS_LOGIN_BODY_PARSE_ERR = 205,
        EC_ACCESS_CONN_ERR = 206,
        EC_ACCESS_GET_RS_IP_ERR = 207,
        EC_ACCESS_ADD_COMM_CONN_ERR = 208,
        EC_ACCESS_ADD_HEART_CONN_ERR = 209,
        EC_ACCESS_ADD_RELAY_CONN_ERR = 210,
        EC_ACCESS_HEART_BODY_PARSE_ERR = 211,
        EC_ACCESS_GET_COMM_CONNECT_ERR = 212,
        EC_ACCESS_GET_RELAY_CONNECT_ERR = 213,
        EC_ACCESS_ACCESS_INFO_EMPTY = 214,
        EC_ACCESS_PLAYER_DUPLICATE_LOGIN = 215,
        EC_PLAYER_GAME_NOT_EXIST = 10000,
        EC_PLAYER_SECRET_KEY_FAIL = 10001,
        EC_PLAYER_SIGN_ERR = 10002,
        EC_PLAYER_DUPLICATE_REQ = 10003,
        EC_PLAYER_TIMESTAMP_INVALID = 10004,
        EC_PLAYER_QUERY_PLAYER_FAIL = 10005,
        EC_PLAYER_ADD_PLAYER_FAIL = 10006,
        EC_PLAYER_QUERY_GAME_FAIL = 10007,
        EC_PLAYER_RECORD_NUM_ERR = 10008,
        EC_PLAYER_GET_TOKEN_FAIL = 10009,
        EC_PLAYER_TOKEN_NOT_EXIST = 10010,
        EC_PLAYER_TOKEN_INVALID = 10011,
        EC_PLAYER_CLEAR_TOKEN_FAIL = 10012,
        EC_PLAYER_LOCK_FAIL = 10013,
        EC_PLAYER_UNLOCK_FAIL = 10014,
        EC_PLAYER_SAVE_TOKEN_FAIL = 10015,
        EC_ROOM_CREATE_NO_PERMISSION = 20000,
        EC_ROOM_DESTORY_NO_PERMISSION = 20001,
        EC_ROOM_JOIN_NO_PERMISSION = 20002,
        EC_ROOM_REMOVE_PLAYER_NO_PERMISSION = 20003,
        EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION = 20004,
        EC_ROOM_DISSMISS_NO_PERMISSION = 20005,
        EC_ROOM_REMOVE_SELF_NO_PERMISSION = 20006,
        EC_ROOM_CHECK_LOGIN_SESSION_ERR = 20007,
        EC_ROOM_PLAYER_ALREADY_IN_ROOM = 20010,
        EC_ROOM_PLAYER_NOT_IN_ROOM = 20011,
        EC_ROOM_PLAYERS_EXCEED_LIMIT = 20012,
        EC_ROOM_JOIN_NOT_ALLOW = 20013,
        EC_ROOM_MAX_PLAYERS_INVALID = 20014,
        EC_ROOM_CREATE_FAIL = 20015,
        EC_ROOM_PLAYER_OFFLINE = 20016,
        EC_ROOM_PARAM_PAGE_INVALID = 20017,
        EC_ROOM_GET_PLAYER_INFO_ERR = 20050,
        EC_ROOM_GET_ROOM_INFO_ERR = 20051,
        EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR = -20052,
        EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR = -20053,
        EC_ROOM_REDIS_UPDATE_ERR = -20054,
        EC_ROOM_REDIS_GET_LOCK_ERR = -20055,
        EC_ROOM_REDIS_CHECK_LOCK_ERR = -20056,
        EC_ROOM_REDIS_DEL_LOCK_ERR = -20057,
        EC_ROOM_QUERY_PLAYER_ERR = 20060,
        EC_ROOM_QUERY_GAME_ERR = 20061,
        EC_ROOM_PLAYER_INFO_NOT_EXIST = 20062,
        EC_ROOM_GAME_INFO_NOT_EXIST = 20063,
        EC_ROOM_HISTORY_INFO_INSERT_ERR = -20064,
        EC_ROOM_REGION_INFO_NOT_EXIST = 20065,
        EC_ROOM_QUERY_REGION_ERR = 20066,
        EC_ROOM_INFO_UNEXIST = 20080,
        EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR = 20090,
        EC_ROOM_INVALID_PARAMS_TEAM_ID = 20100,
        EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED = 20101,
        EC_MATCH_NO_ROOM = 30000,
        EC_MATCH_TIMEOUT = 30001,
        EC_MATCH_LOGIC_ERR = 30002,
        EC_MATCH_ERR = 30010,
        EC_MATCH_PLAYER_IS_IN_MATCH = 30011,
        EC_MATCH_PLAYER_NOT_IN_MATCH = 30012,
        EC_MATCH_GET_MATCH_INFO_ERR = 30013,
        EC_MATCH_UPDATE_MATCH_INFO_ERR = 30014,
        EC_MATCH_CANCEL_FAILED = 30015,
        EC_MATCH_GET_PLAYER_LIST_INFO_ERR = 30016,
        EC_MATCH_CREATE_ROOM_ERR = 30041,
        EC_MATCH_JOIN_ROOM_ERR = 30042,
        EC_MATCH_QUERY_PLAYER_ERR = 30100,
        EC_MATCH_PLAYER_INFO_NOT_EXIST = 30101,
        EC_MATCH_QUERY_GAME_ERR = 30102,
        EC_MATCH_GAME_INFO_NOT_EXIST = 30103,
        EC_MATCH_QUERY_REGION_ERR = 30104,
        EC_MATCH_REGION_INFO_NOT_EXIST = 30105,
        EC_MATCH_TEAM_FAIL = 30106,
        EC_MATCH_PLAY_RULE_NOT_RUNNING = 30107,
        EC_MATCH_PLAY_ATTR_NOT_FOUND = 30108,
        EC_MATCH_PLAY_RULE_NOT_FOUND = 30109,
        EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND = 30110,
        EC_MATCH_PLAY_RULE_FUNC_ERR = 30111,
        EC_MATCH_GET_PLAYER_ATTR_FAIL = 30112,
        EC_MATCH_GET_TEAM_ATTR_FAIL = 30113,
        EC_MATCH_INNER_LOGIC_ERR = -30150,
        EC_RELAY_ALREADY_EXISTS = 40000,
        EC_RELAY_NOT_EXISTS = 40001,
        EC_RELAY_DATA_EXCEED_LIMITED = 40002,
        EC_RELAY_MEMBER_ALREADY_EXISTS = 40003,
        EC_RELAY_MEMBER_NOT_EXISTS = 40004,
        EC_RELAY_STATE_INVALID = 40005,
        EC_RELAY_INVALID_FRAME_RATE = 40006,
        EC_RELAY_SET_FRAME_RATE_FORBIDDEN = 40007,
        EC_RELAY_NO_MEMBERS = 40008,
        EC_RELAY_GAMESVR_SERVICE_NOT_OPEN = 40009,
        EC_RELAY_REQ_POD_FAIL = 40010,
        EC_RELAY_LOGIC_ERROR = 40014,
        EC_RELAY_HKV_CACHE_ERROR = 40015,
        EC_RELAY_REDIS_CACHE_ERROR = 40016,
        EC_RELAY_CACHE_ERROR = 40017,
        EC_RELAY_NOTIFY_RELAYWORKER_FAIL = 40018,
        EC_RELAY_RESET_RELAY_ROOM_FAIL = 40019,
        EC_RELAY_CLEAN_RELAY_ROOM_FAIL = 40020,
        EC_RELAY_NO_PERMISSION = 40100,
        EC_RELAY_NOTIFY_GAMESVR_FAIL = 40200,
        EC_RELAY_FORWARD_TO_GAMESVR_FAIL = 40201,
        EC_RELAY_FORWARD_TO_CLIENT_FAIL = 40202,
        EC_INVALID_PARAMS = 60000,
        EC_INVALID_PARAMS_PLAY_MODE_VERSION = 60001,
        EC_INVALID_PARAMS_PLAY_MODE_RULETYPE = 60002,
        EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION = 60003,
        EC_INVALID_PARAMS_PLAY_MODE_TEAM = 60004,
        EC_INVALID_PARAMS_MSGQ_ENCODE = 60020,
        EC_INVALID_PARAMS_MSGQ_DECODE = 60021,
        EC_INVALID_PARAMS_GAME_ID = 61000,
        EC_INVALID_PARAMS_PLAYER_INFO = 61001,
        EC_INVALID_PARAMS_MAX_PLAYERS = 61002,
        EC_INVALID_PARAMS_ROOM_TYPE = 61003,
        EC_INVALID_PARAMS_PLAYER_ID = 61004,
        EC_INVALID_PARAMS_MATCH_TYPE = 61005,
        EC_INVALID_PARAMS_MATCH_CODE = 61006,
        EC_INVALID_PARAMS_OPEN_ID = 61007,
        EC_INVALID_PARAMS_PLATFORM = 61008,
        EC_INVALID_PARAMS_TIMESTAMP = 61009,
        EC_INVALID_PARAMS_SIGN = 61010,
        EC_INVALID_PARAMS_NONCE = 61011,
        EC_INVALID_PARAMS_TOKEN = 61012,
        EC_INVALID_PARAMS_NETWORK_STATE = 61013,
        EC_INVALID_PARAMS_ROOM_NAME = 61014,
        EC_INVALID_PARAMS_CREATE_ROOM_TYPE = 61015,
        EC_INVALID_PARAMS_DEVICE_ID = 61016,
        EC_MYSPP_SYSTEM_ERR = -1000,
        EC_REDIS_KEY_NOT_EXIST = -66000,
        EC_REDIS_SET_OP_ERR = -66001,
        EC_REDIS_GET_OP_ERR = -66002,
        EC_REDIS_DEL_OP_ERR = -66003,
        EC_REDIS_EXPIRE_OP_ERR = -66004,
        EC_REDIS_LOCK_OP_ERR = -66005,
        EC_REDIS_LOCK_ALREADY_EXIST = -66006,
        EC_REDIS_LIST_OP_ERR = -66020,
        EC_REDIS_LIST_POP_EMPTY = -66021,
        EC_MYSQL_NO_ROW_FOUND = -66100,
        EC_MYSQL_MULTI_ROW_FOUND = -66101,
        EC_MYSQL_INSERT_FAIL = -66102,
        EC_MYSQL_DELETE_FAIL = -66103,
        EC_MYSQL_UPDATE_FAIL = -66104,
        EC_MYSQL_QUERYS_FAIL = -66105,
        EC_PB_SERIALIZE_TO_STR_ERR = -66200,
        EC_PB_PARSE_FROM_STR_ERR = -66201,
        EC_DATA_FORMAT_ERR = -66210,
        EC_JSON_FORMAT_ERR = -66211,
        EC_JSON_PLAY_MODE_FORMAT_ERR = -66212,
        EC_JSON_PLAY_MODE_PARISE_ERR = -66213,
        EC_INVALID_PARAMS_RECORE_ID = -66601,
        EC_HASHID_ERR = -66700,
        EC_HASHID_ENCODE_ERR = -66701,
        EC_HASHID_DECODE_ERR = -66702,
        EC_CONF_ROOM_ID_BUCKET_ERR = -66801,
        EC_SDK_SEND_FAIL = 90001,
        EC_SDK_UNINIT = 90002,
        EC_SDK_RES_TIMEOUT = 90003,
        EC_SDK_NO_LOGIN = 90004,
        EC_SDK_NO_CHECK_LOGIN = 90005,
        EC_SDK_SOCKET_ERROR = 90006,
        EC_SDK_SOCKET_CLOSE = 90007,
        EC_SDK_NO_ROOM = 90008
    }
    namespace types {
        /**
            * @name 玩家信息参数
            * @field {string} name  玩家昵称
            * @field {number} customPlayerStatus  自定义玩家状态
            * @field {string} customProfile  自定义玩家信息
            */
        interface PlayerInfoPara {
            name: string;
            customPlayerStatus: number;
            customProfile: string;
        }
        /**
         * @name 玩家信息参数
         * @field {string} name  玩家昵称
         * @field {number} customPlayerStatus  自定义玩家状态
         * @field {string} customProfile  自定义玩家信息
         * @field {MGOBE.types.MatchAttribute[]} matchAttributes  匹配属性
         */
        interface MatchPlayerInfoPara {
            name: string;
            customPlayerStatus: number;
            customProfile: string;
            matchAttributes: MGOBE.types.MatchAttribute[];
        }
        /**
         * @description 游戏秘钥指控制台上的“游戏key”
         * @name  初始化参数：游戏信息
         * @field {string} gameId  游戏ID
         * @field {string} openId  玩家openId
         * @field {string} secretKey  游戏秘钥
         */
        interface GameInfoPara {
            gameId: string;
            openId: string;
            secretKey: string;
        }
        /**
         * @name  初始化参数：配置参数
         * @description 服务地址指控制台上的“域名”
         * @field {number} reconnectMaxTimes  重连接次数
         * @field {number} reconnectInterval  重连接时间间隔
         * @field {number} resendInterval  消息重发时间间隔
         * @field {number} resendTimeout  消息重发超时时间
         * @field {string} url  服务地址
         * @field {boolean} isAutoRequestFrame  是否自动补帧
         */
        interface ConfigPara {
            reconnectMaxTimes?: number;
            reconnectInterval?: number;
            resendInterval?: number;
            resendTimeout?: number;
            url?: string;
            isAutoRequestFrame?: boolean;
        }
        /**
         * @name 修改玩家状态参数
         * @field {number} customPlayerStatus  自定义玩家状态
         */
        interface ChangeCustomPlayerStatusPara {
            customPlayerStatus: number;
        }
        /**
         * @name  创建房间参数
         * @field {string} roomName  房间名称
         * @field {string} roomType  房间类型
         * @field {number} maxPlayers  房间最大玩家数量
         * @field {boolean} isPrivate  是否私有
         * @field {string} customProperties  自定义房间属性
         * @field {MGOBE.types.PlayerInfoPara} playerInfo  玩家信息
         */
        interface CreateRoomPara {
            roomName: string;
            roomType: string;
            maxPlayers: number;
            isPrivate: boolean;
            customProperties: string;
            playerInfo: MGOBE.types.PlayerInfoPara;
        }
        /**
         * @name 创建团队房间参数
         * @field {string} roomName  房间名称
         * @field {string} roomType  房间类型
         * @field {number} maxPlayers  房间最大玩家数量
         * @field {boolean} isPrivate  是否私有
         * @field {string} customProperties  自定义房间属性
         * @field {MGOBE.types.PlayerInfoPara} playerInfo  玩家信息
         * @field {number} teamNumber  队伍数量
         */
        interface CreateTeamRoomPara {
            roomName: string;
            roomType: string;
            maxPlayers: number;
            isPrivate: boolean;
            customProperties: string;
            playerInfo: MGOBE.types.PlayerInfoPara;
            teamNumber: number;
        }
        /**
         * @name 加入房间参数
         * @field {MGOBE.types.PlayerInfoPara} playerInfo  玩家信息
         */
        interface JoinRoomPara {
            playerInfo: MGOBE.types.PlayerInfoPara;
        }
        /**
         * @name 加入团队房间参数
         * @field {MGOBE.types.PlayerInfoPara} playerInfo  玩家信息
         * @field {string} teamId  队伍ID
         */
        interface JoinTeamRoomPara {
            playerInfo: MGOBE.types.PlayerInfoPara;
            teamId: string;
        }
        /**
         * @name 房间变更参数
         * @field {string} roomName  房间名称（可选）
         * @field {string} owner  房主ID（可选）
         * @field {boolean} isPrivate  是否私有（可选）
         * @field {string} customProperties  自定义房间属性（可选）
         */
        interface ChangeRoomPara {
            roomName?: string;
            owner?: string;
            isPrivate?: boolean;
            customProperties?: string;
        }
        /**
         * @name 移除房间内玩家参数
         * @field {string} removePlayerId  被移除玩家ID
         */
        interface RemovePlayerPara {
            removePlayerId: string;
        }
        /**
         * @name 获取房间列表参数
         * @field {number} pageNo  页号，从1开始
         * @field {number} pageSize  每页数量，最大为100
         */
        interface GetRoomListPara {
            pageNo: number;
            pageSize: number;
        }
        /**
         * @name 获取房间参数
         * @field {number} roomId  房间ID
         */
        interface GetRoomByRoomIdPara {
            roomId: string;
        }
        /**
         * @name 多人匹配参数
         * @description 匹配 code 需要在控制台创建匹配获得。
         * @field {string} matchCode  匹配Code
         * @field {MGOBE.types.MatchPlayerInfoPara} playerInfo  玩家信息
         */
        interface MatchPlayersPara {
            matchCode: string;
            playerInfo: MGOBE.types.MatchPlayerInfoPara;
        }
        /**
         * @name 房间匹配参数
         * @field {MGOBE.types.PlayerInfoPara} playerInfo  玩家信息
         * @field {number} maxPlayers  房间最大玩家数量
         * @field {string} roomType  房间的类型
         */
        interface MatchRoomPara {
            playerInfo: MGOBE.types.PlayerInfoPara;
            maxPlayers: number;
            roomType: string;
        }
        /**
         * @name 取消匹配参数
         * @field {MGOBE.types.MatchType}  matchType 匹配类型
         */
        interface CancelPlayerMatchPara {
            matchType: MGOBE.types.MatchType;
        }
        /**
         * @name 发送帧数据参数
         * @field {object} data  帧数据
         */
        interface SendFramePara {
            data: object;
        }
        /**
         * @name 请求补帧参数
         * @description 补帧范围大于等于beginFrameId，小于等于endFrameId
         * @field {number} beginFrameId  起始帧号
         * @field {number} endFrameId  结束帧号
         */
        interface RequestFramePara {
            beginFrameId: number;
            endFrameId: number;
        }
        /**
         * @name 消息接收者类型
         * @field {1} ROOM_ALL 全部玩家
         * @field {2} ROOM_OTHERS 除自己外的其他玩家
         * @field {3} ROOM_SOME 房间中部分玩家
         */
        enum RecvType {
            ROOM_ALL = 1,
            ROOM_OTHERS = 2,
            ROOM_SOME = 3
        }
        /**
         * @name 发送房间内消息参数
         * @field {string[]} recvPlayerList  接收消息玩家ID列表
         * @field {string} msg  消息内容
         * @field {MGOBE.types.RecvType} recvType  消息接收者类型
         */
        interface SendToClientPara {
            recvPlayerList: string[];
            msg: string;
            recvType: MGOBE.types.RecvType;
        }
        /**
         * @name 发自定义服务消息参数
         * @field {object} data  消息内容
         */
        interface SendToGameSvrPara {
            data: object;
        }
        /**
         * @name 自定义服务消息广播回调参数
         * @field {number} roomId  房间ID
         * @field {string[]} playerIdList  接收消息玩家ID列表
         * @field {object} data  消息内容
         */
        interface RecvFromGameSvrBst {
            roomId: string;
            playerIdList: string[];
            data: object;
        }
        /**
         * @name 帧内容
         * @field {string} playerId  玩家ID
         * @field {object} data  玩家帧内容
         * @field {number} timestamp  时间戳，各玩家本地发送帧的时间
         */
        interface FrameItem {
            playerId: string;
            data: object;
            timestamp: number;
        }
        /**
         * @name 帧数据
         * @description 附加信息包含一个 number 类型随机种子，开发者可以使用帧 ID 与随机种子组合成一个值来初始化 RandomUtil 工具。
         * @description time 为 SDK 拟合出来的时间，目的是使每一帧到达客户端的时间尽量均匀分布，并且时间间隔尽量接近帧率的倒数。
         * @description isReplay 表示该帧是否为自动补帧产生的帧，自动补帧需要在初始化 Listener 时设置。
         * @field {number} frameId  帧ID
         * @field {MGOBE.types.FrameItem[]} items  帧内容
         * @field {MGOBE.types.FrameExtInfo} ext  附加信息
         * @field {number} roomId  房间ID
         * @field {number} time  该帧到达客户端时间
         * @field {boolean} isReplay  是否为补帧
         */
        interface Frame {
            id: number;
            items: MGOBE.types.FrameItem[];
            ext: MGOBE.types.FrameExtInfo;
            roomId: string;
            time?: number;
            isReplay?: boolean;
        }
        /**
         * @name 帧广播回调参数
         * @field {MGOBE.types.Frame} frame  帧数据
         */
        interface RecvFrameBst {
            frame: MGOBE.types.Frame;
        }
        /**
         * @name 请求补帧回调参数
         * @field {MGOBE.types.Frame[]} frames  帧数据数组
         */
        interface RequestFrameRsp {
            frames: MGOBE.types.Frame[];
        }
        /**
         * @name 玩家加入房间广播回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         * @field {string} joinPlayerId  加房玩家ID
         */
        interface JoinRoomBst {
            roomInfo: MGOBE.types.RoomInfo;
            joinPlayerId: string;
        }
        /**
         * @name 玩家退出房间广播回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         * @field {string} leavePlayerId  退房玩家ID
         */
        interface LeaveRoomBst {
            roomInfo: MGOBE.types.RoomInfo;
            leavePlayerId: string;
        }
        /**
         * @name 房间被解散广播回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间解散前的信息
         */
        interface DismissRoomBst {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 房间属性变更广播回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface ChangeRoomBst {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 房间内玩家被移除广播回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         * @field {string} removePlayerId  被移除玩家ID
         */
        interface RemovePlayerBst {
            roomInfo: MGOBE.types.RoomInfo;
            removePlayerId: string;
        }
        /**
         * @name 房间消息广播回调参数
         * @field {number} roomId  房间ID
         * @field {string} sendPlayerId  发送者ID
         * @field {string} msg  消息内容
         */
        interface RecvFromClientBst {
            roomId: string;
            sendPlayerId: string;
            msg: string;
        }
        /**
         * @name 房间内玩家网络状态变化广播回调参数
         * @field {string} changePlayerId  玩家ID
         * @field {MGOBE.types.NetworkState} networkState  网络状态
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface ChangePlayerNetworkStateBst {
            changePlayerId: string;
            networkState: MGOBE.types.NetworkState;
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 玩家自定义状态变化广播回调参数
         * @field {string} changePlayerId  玩家ID
         * @field {number} customPlayerStatus  自定义玩家信息
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface ChangeCustomPlayerStatusBst {
            changePlayerId: string;
            customPlayerStatus: number;
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 开始帧同步广播回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface StartFrameSyncBst {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 停止帧同步广播回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface StopFrameSyncBst {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 房间属性
         * @description isPrivate 属性为 true 表示该房间为私有房间，不能被 matchRoom 接口匹配到。
         * @field {number} id  房间ID
         * @field {string} name  房间名称
         * @field {string} type  房间类型
         * @field {MGOBE.types.CreateRoomType} createType  创建房间方式
         * @field {number} maxPlayers  房间最大玩家数量
         * @field {string} owner  房主ID
         * @field {boolean} isPrivate  是否私有
         * @field {string} customProperties  房间自定义属性
         * @field {MGOBE.types.PlayerInfo[]} playerList  玩家列表
         * @field {MGOBE.types.TeamInfo[]} teamList  团队属性
         * @field {MGOBE.types.FrameSyncState} frameSyncState  房间帧同步状态
         * @field {number} frameRate  帧率
         * @field {string} routeId  路由ID
         * @field {number} createTime  房间创建时的时间戳（单位：秒）
         * @field {number} startGameTime  开始帧同步时的时间戳（单位：秒）
         */
        interface RoomInfo {
            id: string;
            name: string;
            type: string;
            createType: MGOBE.types.CreateRoomType;
            maxPlayers: number;
            owner: string;
            isPrivate: boolean;
            customProperties: string;
            playerList: MGOBE.types.PlayerInfo[];
            teamList: MGOBE.types.TeamInfo[];
            frameSyncState: MGOBE.types.FrameSyncState;
            frameRate: number;
            routeId: string;
            createTime: number;
            startGameTime: number;
        }
        /**
         * @name 修改玩家状态回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface ChangeCustomPlayerStatusRsp {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 创建房间回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface CreateRoomRsp {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 加入房间回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface JoinRoomRsp {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 退出房间回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface LeaveRoomRsp {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 解散房间回调参数
         */
        interface DismissRoomRsp {
        }
        /**
         * @name 修改房间回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface ChangeRoomRsp {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 移除房间内玩家回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface RemovePlayerRsp {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 获取房间信息回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface GetRoomByRoomIdRsp {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 获取房间列表回调参数
         * @field {MGOBE.types.RoomInfo[]} roomList  房间列表
         * @field {number} total  房间总数
         */
        interface GetRoomListRsp {
            gameId: string;
            roomList: MGOBE.types.RoomInfo[];
            total: number;
        }
        /**
         * @name 多人匹配回调参数
         * @field {MGOBE.types.MatchType} matchType  匹配类型
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface MatchPlayersRsp {
            matchType: MGOBE.types.MatchType;
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 房间匹配回调参数
         * @field {MGOBE.types.RoomInfo} roomInfo  房间信息
         */
        interface MatchRoomSimpleRsp {
            roomInfo: MGOBE.types.RoomInfo;
        }
        /**
         * @name 取消匹配回调参数
         */
        interface CancelPlayerMatchRsp {
        }
        /**
         * @name  开始帧同步回调参数
         */
        interface StartFrameSyncRsp {
        }
        /**
         * @name 停止帧同步回调参数
         */
        interface StopFrameSyncRsp {
        }
        /**
         * @name 发送帧同步数据回调参数
         */
        interface SendFrameRsp {
        }
        /**
         * @name 房间内发送消息回调参数
         */
        interface SendToClientRsp {
        }
        /**
         * @name 发送自定义服务消息回调参数
         */
        interface SendToGameSvrRsp {
        }
        /**
         * @name 匹配属性
         * @field {string} name  属性名称
         * @field {number} value  属性值
         */
        interface MatchAttribute {
            name: string;
            value: number;
        }
        /**
         * @name 匹配类型
         * @field {1} ROOM_SIMPLE 房间匹配
         * @field {2} PLAYER_COMPLEX 玩家匹配
         */
        enum MatchType {
            ROOM_SIMPLE = 1,
            PLAYER_COMPLEX = 2
        }
        /**
         * @name 帧数据附加信息
         * @field {number} seed  随机数种子
         */
        interface FrameExtInfo {
            seed: number;
        }
        /**
         * @name 创建房间方式
         * @field {0} COMMON_CREATE  普通创建
         * @field {1} MATCH_CREATE  匹配创建
         */
        enum CreateRoomType {
            COMMON_CREATE = 0,
            MATCH_CREATE = 1
        }
        /**
         * @name 网络状态
         * @field {0} COMMON_OFFLINE  房间中玩家掉线
         * @field {1} COMMON_ONLINE  房间中玩家在线
         * @field {2} RELAY_OFFLINE  帧同步中玩家掉线
         * @field {3} RELAY_ONLINE  帧同步中玩家在线
         */
        enum NetworkState {
            COMMON_OFFLINE = 0,
            COMMON_ONLINE = 1,
            RELAY_OFFLINE = 2,
            RELAY_ONLINE = 3
        }
        /**
         * @name 房间帧同步状态
         * @field {0} STOP 未开始帧同步
         * @field {1} START 已开始帧同步
         */
        enum FrameSyncState {
            STOP = 0,
            START = 1
        }
        /**
         * @name 玩家信息
         * @field {string} id  玩家ID
         * @field {string} name  玩家昵称
         * @field {string} teamId  队伍ID
         * @field {number} customPlayerStatus  自定义玩家状态
         * @field {string} customProfile  自定义玩家信息
         * @field {MGOBE.types.NetworkState} commonNetworkState  玩家在房间的网络状态
         * @field {MGOBE.types.NetworkState} relayNetworkState  玩家在游戏中的网络状态
         */
        interface PlayerInfo {
            id: string;
            name: string;
            teamId: string;
            customPlayerStatus: number;
            customProfile: string;
            commonNetworkState: MGOBE.types.NetworkState;
            relayNetworkState: MGOBE.types.NetworkState;
        }
        /**
         * @name 队伍信息
         * @field {string} id  队伍ID
         * @field {string} name  队伍名称
         * @field {number} minPlayers  队伍最小人数
         * @field {number} maxPlayers  队伍最大人数
         */
        interface TeamInfo {
            id: string;
            name: string;
            minPlayers: number;
            maxPlayers: number;
        }
        /**
         * 响应回调参数
         * @field {number} code  错误码
         * @field {string} msg  错误信息
         * @field {string} seq  响应序列号
         * @field {any} data  响应数据
         */
        interface ResponseEvent<T> {
            code: number;
            msg: string;
            seq: string;
            data?: T;
        }
        /**
         * 广播回调参数
         * @field {any} data  广播数据
         */
        interface BroadcastEvent<T> {
            data: T;
            seq: string;
        }
        /**
         * 响应回调函数
         */
        type ReqCallback<T> = (event: MGOBE.types.ResponseEvent<T>) => any;

    }
}