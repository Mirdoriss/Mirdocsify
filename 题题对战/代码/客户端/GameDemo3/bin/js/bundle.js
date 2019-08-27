var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*v1.1.1_1*/if(typeof GameGlobal!=="undefined"&&!GameGlobal.window)GameGlobal.window=GameGlobal;!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MGOBE=t():e.MGOBE=t()}(window,function(){return function(e){var t={};function _(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,_),n.l=!0,n.exports}return _.m=e,_.c=t,_.d=function(e,t,s){_.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,t){if(1&t&&(e=_(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(_.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)_.d(s,n,function(t){return e[t]}.bind(null,n));return s},_.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="",_(_.s=12)}([function(e,t,_){"use strict";var s=_(1);var n=_(3),o=_(4);_.d(t,"j",function(){return E}),_.d(t,"l",function(){return i}),_.d(t,"k",function(){return a}),_.d(t,"d",function(){return R}),_.d(t,"h",function(){return c}),_.d(t,"i",function(){return C}),_.d(t,"a",function(){return d}),_.d(t,"e",function(){return l}),_.d(t,"f",function(){return O}),_.d(t,"g",function(){return S}),_.d(t,"c",function(){return n.a}),_.d(t,"b",function(){return o.a});_(10);const r=_(8),E={pingTimeout:5e3,reconnectInterval:500,reconnectMaxTimes:15,resendInterval:1e3,resendTimeout:2e4,url:void 0},i={version:r.version,appName:void 0,cmd:"",seq:void 0,clientIp:void 0,serviceIp:void 0,business:void 0,authKey:void 0,authType:void 0,authIp:void 0,gameId:void 0,uid:void 0,playerId:void 0,body:void 0},a={gameId:void 0,openId:void 0,secretKey:void 0};var R,c,C,d;!function(e){let t={};e.getInfo=(()=>t),e.setInfo=(e=>t=e)}(R||(R={})),function(e){let t;!function(e){e[e.INITED=1]="INITED",e[e.INITING=2]="INITING",e[e.UNINIT=3]="UNINIT"}(t=e.StatusType||(e.StatusType={}));let _=t.UNINIT;e.isInited=(()=>_===t.INITED),e.isIniting=(()=>_===t.INITING),e.isUnInit=(()=>_===t.UNINIT),e.setStatus=(e=>_=e)}(c||(c={})),function(e){let t;!function(e){e[e.LOGIN=1]="LOGIN",e[e.LOGINING=2]="LOGINING",e[e.LOGOUT=3]="LOGOUT",e[e.LOGOUTING=4]="LOGOUTING"}(t=e.StatusType||(e.StatusType={}));let _=t.LOGOUT,s=0,n="";e.isStatus=(e=>_===e),e.setStatus=(e=>{_=e,e===t.LOGIN&&(s=0)}),e.setErrCode=((e,t)=>{s=e,n=t}),e.getErrCode=(()=>s),e.getErrMsg=(()=>n)}(C||(C={})),function(e){let t;!function(e){e[e.CHECKING=1]="CHECKING",e[e.CHECKED=2]="CHECKED",e[e.OFFLINE=3]="OFFLINE"}(t=e.StatusType||(e.StatusType={}));let _=t.CHECKING;e.isChecked=(()=>_===t.CHECKED),e.isOffline=(()=>_===t.OFFLINE),e.setStatus=(e=>_=e)}(d||(d={}));const l=s.a.ClientSendServerReqWrap2Cmd,O=s.a.ServerSendClientBstWrap2Type,S=5443},function(e,t,_){"use strict";var s;_.d(t,"a",function(){return s}),function(e){let t,_,s,n,o,r,E,i,a,R,c;!function(e){e[e.COMMON=0]="COMMON",e[e.RELAY=1]="RELAY"}(t=e.ConnectionType||(e.ConnectionType={})),function(e){e[e.E_PUSH_TYPE_TEST=0]="E_PUSH_TYPE_TEST",e[e.E_PUSH_TYPE_RELAY=1]="E_PUSH_TYPE_RELAY",e[e.E_PUSH_TYPE_GAMESVR=2]="E_PUSH_TYPE_GAMESVR",e[e.E_PUSH_TYPE_JOIN_ROOM=100]="E_PUSH_TYPE_JOIN_ROOM",e[e.E_PUSH_TYPE_LEAVE_ROOM=101]="E_PUSH_TYPE_LEAVE_ROOM",e[e.E_PUSH_TYPE_DISMISS_ROOM=102]="E_PUSH_TYPE_DISMISS_ROOM",e[e.E_PUSH_TYPE_REMOVE_PLAYER=103]="E_PUSH_TYPE_REMOVE_PLAYER",e[e.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY=104]="E_PUSH_TYPE_MODIFY_ROOM_PROPERTY",e[e.E_PUSH_TYPE_NETWORK_STATE=105]="E_PUSH_TYPE_NETWORK_STATE",e[e.E_PUSH_TYPE_ROOM_CHAT=106]="E_PUSH_TYPE_ROOM_CHAT",e[e.E_PUSH_TYPE_PLAYER_STATE=107]="E_PUSH_TYPE_PLAYER_STATE",e[e.E_PUSH_TYPE_START_GAME=108]="E_PUSH_TYPE_START_GAME",e[e.E_PUSH_TYPE_STOP_GAME=109]="E_PUSH_TYPE_STOP_GAME",e[e.E_PUSH_TYPE_CREATE_ROOM=110]="E_PUSH_TYPE_CREATE_ROOM",e[e.E_PUSH_TYPE_DESTROY_ROOM=111]="E_PUSH_TYPE_DESTROY_ROOM",e[e.E_PUSH_TYPE_MATCH_SUCCESS=200]="E_PUSH_TYPE_MATCH_SUCCESS",e[e.E_PUSH_TYPE_MATCH_TIMEOUT=201]="E_PUSH_TYPE_MATCH_TIMEOUT"}(_=e.ServerSendClientBstWrap2Type||(e.ServerSendClientBstWrap2Type={})),function(e){e[e.E_CMD_INVALID=0]="E_CMD_INVALID",e[e.E_CMD_HEART_BEAT_REQ=100]="E_CMD_HEART_BEAT_REQ",e[e.E_CMD_CHECK_LOGIN_REQ=101]="E_CMD_CHECK_LOGIN_REQ",e[e.E_CMD_LOGIN_TO_ROOM_REQ=102]="E_CMD_LOGIN_TO_ROOM_REQ",e[e.E_CMD_FORWARD_TO_RELAY_REQ=103]="E_CMD_FORWARD_TO_RELAY_REQ",e[e.E_CMD_LOGIN_REQ=1e3]="E_CMD_LOGIN_REQ",e[e.E_CMD_LOGOUT_REQ=1001]="E_CMD_LOGOUT_REQ",e[e.E_CMD_AUTH_REQ=1002]="E_CMD_AUTH_REQ",e[e.E_CMD_QUERY_BY_PLAYER_ID_REQ=1003]="E_CMD_QUERY_BY_PLAYER_ID_REQ",e[e.E_CMD_QUERY_BY_GAME_ID_REQ=1004]="E_CMD_QUERY_BY_GAME_ID_REQ",e[e.E_CMD_GET_ROOM_DETAIL_REQ=2001]="E_CMD_GET_ROOM_DETAIL_REQ",e[e.E_CMD_JOIN_ROOM_REQ=2002]="E_CMD_JOIN_ROOM_REQ",e[e.E_CMD_QUIT_ROOM_REQ=2003]="E_CMD_QUIT_ROOM_REQ",e[e.E_CMD_CREATE_ROOM_REQ=2004]="E_CMD_CREATE_ROOM_REQ",e[e.E_CMD_DESTORY_ROOM_REQ=2005]="E_CMD_DESTORY_ROOM_REQ",e[e.E_CMD_REMOVE_MEMBER_REQ=2006]="E_CMD_REMOVE_MEMBER_REQ",e[e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ=2007]="E_CMD_CHANGE_ROOM_PROPERTIS_REQ",e[e.E_CMD_DISSMISS_ROOM_REQ=2008]="E_CMD_DISSMISS_ROOM_REQ",e[e.E_CMD_CHANGE_PLAYER_STATE_REQ=2009]="E_CMD_CHANGE_PLAYER_STATE_REQ",e[e.E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ=2010]="E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ",e[e.E_CMD_ROOM_CHAT_REQ=2011]="E_CMD_ROOM_CHAT_REQ",e[e.E_CMD_START_FRAME_SYNC_REQ=2012]="E_CMD_START_FRAME_SYNC_REQ",e[e.E_CMD_STOP_FRAME_SYNC_REQ=2013]="E_CMD_STOP_FRAME_SYNC_REQ",e[e.E_CMD_GET_ROOM_LIST_REQ=2014]="E_CMD_GET_ROOM_LIST_REQ",e[e.E_CMD_MATCH_ROOM_SIMPLE_REQ=3001]="E_CMD_MATCH_ROOM_SIMPLE_REQ",e[e.E_CMD_MATCH_USER_SIMPLE_REQ=3002]="E_CMD_MATCH_USER_SIMPLE_REQ",e[e.E_CMD_MATCH_CANCEL_MATCH_REQ=3003]="E_CMD_MATCH_CANCEL_MATCH_REQ",e[e.E_CMD_MATCH_ROOM_COMPLEX_REQ=3004]="E_CMD_MATCH_ROOM_COMPLEX_REQ",e[e.E_CMD_MATCH_PLAYER_COMPLEX_REQ=3005]="E_CMD_MATCH_PLAYER_COMPLEX_REQ",e[e.E_CMD_RELAY_SEND_FRAME_REQ=4e3]="E_CMD_RELAY_SEND_FRAME_REQ",e[e.E_CMD_RELAY_REQUEST_FRAME_REQ=4001]="E_CMD_RELAY_REQUEST_FRAME_REQ",e[e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ=4002]="E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ",e[e.E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ=4003]="E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ",e[e.E_CMD_NOTIFY_JOIN_ROOM=5e3]="E_CMD_NOTIFY_JOIN_ROOM",e[e.E_CMD_NOTIFY_QUIT_ROOM=5001]="E_CMD_NOTIFY_QUIT_ROOM",e[e.E_CMD_NOTIFY_DESTORY_ROOM=5002]="E_CMD_NOTIFY_DESTORY_ROOM",e[e.E_CMD_NOTIFY_NET_STATE=5003]="E_CMD_NOTIFY_NET_STATE",e[e.E_CMD_NOTIFY_KICK_MEMBER=5004]="E_CMD_NOTIFY_KICK_MEMBER",e[e.E_CMD_GET_ADDR_BY_ROUTER_ID_REQ=6e3]="E_CMD_GET_ADDR_BY_ROUTER_ID_REQ"}(s=e.ClientSendServerReqWrap2Cmd||(e.ClientSendServerReqWrap2Cmd={})),function(e){e[e.EC_OK=0]="EC_OK",e[e.EC_REQ_BAD_PKG=1]="EC_REQ_BAD_PKG",e[e.EC_CMD_INVALID=2]="EC_CMD_INVALID",e[e.EC_PARAMS_INVALID=3]="EC_PARAMS_INVALID",e[e.EC_INNER_ERROR=4]="EC_INNER_ERROR",e[e.EC_TIME_OUT=5]="EC_TIME_OUT",e[e.EC_SERVER_BUSY=6]="EC_SERVER_BUSY",e[e.EC_NO_RIGHT=7]="EC_NO_RIGHT",e[e.EC_ACCESS_CMD_INVALID_ERR=200]="EC_ACCESS_CMD_INVALID_ERR",e[e.EC_ACCESS_CMD_GET_TOKEN_ERR=201]="EC_ACCESS_CMD_GET_TOKEN_ERR",e[e.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE=202]="EC_ACCESS_CMD_TOKEN_PRE_EXPIRE",e[e.EC_ACCESS_CMD_INVALID_TOKEN=203]="EC_ACCESS_CMD_INVALID_TOKEN",e[e.EC_ACCESS_PUSH_SERIALIZE_ERR=204]="EC_ACCESS_PUSH_SERIALIZE_ERR",e[e.EC_ACCESS_LOGIN_BODY_PARSE_ERR=205]="EC_ACCESS_LOGIN_BODY_PARSE_ERR",e[e.EC_ACCESS_CONN_ERR=206]="EC_ACCESS_CONN_ERR",e[e.EC_ACCESS_GET_RS_IP_ERR=207]="EC_ACCESS_GET_RS_IP_ERR",e[e.EC_ACCESS_ADD_COMM_CONN_ERR=208]="EC_ACCESS_ADD_COMM_CONN_ERR",e[e.EC_ACCESS_ADD_HEART_CONN_ERR=209]="EC_ACCESS_ADD_HEART_CONN_ERR",e[e.EC_ACCESS_ADD_RELAY_CONN_ERR=210]="EC_ACCESS_ADD_RELAY_CONN_ERR",e[e.EC_ACCESS_HEART_BODY_PARSE_ERR=211]="EC_ACCESS_HEART_BODY_PARSE_ERR",e[e.EC_ACCESS_GET_COMM_CONNECT_ERR=212]="EC_ACCESS_GET_COMM_CONNECT_ERR",e[e.EC_ACCESS_GET_RELAY_CONNECT_ERR=213]="EC_ACCESS_GET_RELAY_CONNECT_ERR",e[e.EC_ACCESS_ACCESS_INFO_EMPTY=214]="EC_ACCESS_ACCESS_INFO_EMPTY",e[e.EC_ACCESS_PLAYER_DUPLICATE_LOGIN=215]="EC_ACCESS_PLAYER_DUPLICATE_LOGIN",e[e.EC_PLAYER_GAME_NOT_EXIST=1e4]="EC_PLAYER_GAME_NOT_EXIST",e[e.EC_PLAYER_SECRET_KEY_FAIL=10001]="EC_PLAYER_SECRET_KEY_FAIL",e[e.EC_PLAYER_SIGN_ERR=10002]="EC_PLAYER_SIGN_ERR",e[e.EC_PLAYER_DUPLICATE_REQ=10003]="EC_PLAYER_DUPLICATE_REQ",e[e.EC_PLAYER_TIMESTAMP_INVALID=10004]="EC_PLAYER_TIMESTAMP_INVALID",e[e.EC_PLAYER_QUERY_PLAYER_FAIL=10005]="EC_PLAYER_QUERY_PLAYER_FAIL",e[e.EC_PLAYER_ADD_PLAYER_FAIL=10006]="EC_PLAYER_ADD_PLAYER_FAIL",e[e.EC_PLAYER_QUERY_GAME_FAIL=10007]="EC_PLAYER_QUERY_GAME_FAIL",e[e.EC_PLAYER_RECORD_NUM_ERR=10008]="EC_PLAYER_RECORD_NUM_ERR",e[e.EC_PLAYER_GET_TOKEN_FAIL=10009]="EC_PLAYER_GET_TOKEN_FAIL",e[e.EC_PLAYER_TOKEN_NOT_EXIST=10010]="EC_PLAYER_TOKEN_NOT_EXIST",e[e.EC_PLAYER_TOKEN_INVALID=10011]="EC_PLAYER_TOKEN_INVALID",e[e.EC_PLAYER_CLEAR_TOKEN_FAIL=10012]="EC_PLAYER_CLEAR_TOKEN_FAIL",e[e.EC_PLAYER_LOCK_FAIL=10013]="EC_PLAYER_LOCK_FAIL",e[e.EC_PLAYER_UNLOCK_FAIL=10014]="EC_PLAYER_UNLOCK_FAIL",e[e.EC_PLAYER_SAVE_TOKEN_FAIL=10015]="EC_PLAYER_SAVE_TOKEN_FAIL",e[e.EC_ROOM_CREATE_NO_PERMISSION=2e4]="EC_ROOM_CREATE_NO_PERMISSION",e[e.EC_ROOM_DESTORY_NO_PERMISSION=20001]="EC_ROOM_DESTORY_NO_PERMISSION",e[e.EC_ROOM_JOIN_NO_PERMISSION=20002]="EC_ROOM_JOIN_NO_PERMISSION",e[e.EC_ROOM_REMOVE_PLAYER_NO_PERMISSION=20003]="EC_ROOM_REMOVE_PLAYER_NO_PERMISSION",e[e.EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION=20004]="EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION",e[e.EC_ROOM_DISSMISS_NO_PERMISSION=20005]="EC_ROOM_DISSMISS_NO_PERMISSION",e[e.EC_ROOM_REMOVE_SELF_NO_PERMISSION=20006]="EC_ROOM_REMOVE_SELF_NO_PERMISSION",e[e.EC_ROOM_CHECK_LOGIN_SESSION_ERR=20007]="EC_ROOM_CHECK_LOGIN_SESSION_ERR",e[e.EC_ROOM_PLAYER_ALREADY_IN_ROOM=20010]="EC_ROOM_PLAYER_ALREADY_IN_ROOM",e[e.EC_ROOM_PLAYER_NOT_IN_ROOM=20011]="EC_ROOM_PLAYER_NOT_IN_ROOM",e[e.EC_ROOM_PLAYERS_EXCEED_LIMIT=20012]="EC_ROOM_PLAYERS_EXCEED_LIMIT",e[e.EC_ROOM_JOIN_NOT_ALLOW=20013]="EC_ROOM_JOIN_NOT_ALLOW",e[e.EC_ROOM_MAX_PLAYERS_INVALID=20014]="EC_ROOM_MAX_PLAYERS_INVALID",e[e.EC_ROOM_CREATE_FAIL=20015]="EC_ROOM_CREATE_FAIL",e[e.EC_ROOM_PLAYER_OFFLINE=20016]="EC_ROOM_PLAYER_OFFLINE",e[e.EC_ROOM_PARAM_PAGE_INVALID=20017]="EC_ROOM_PARAM_PAGE_INVALID",e[e.EC_ROOM_GET_PLAYER_INFO_ERR=20050]="EC_ROOM_GET_PLAYER_INFO_ERR",e[e.EC_ROOM_GET_ROOM_INFO_ERR=20051]="EC_ROOM_GET_ROOM_INFO_ERR",e[e.EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR=-20052]="EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR",e[e.EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR=-20053]="EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR",e[e.EC_ROOM_REDIS_UPDATE_ERR=-20054]="EC_ROOM_REDIS_UPDATE_ERR",e[e.EC_ROOM_REDIS_GET_LOCK_ERR=-20055]="EC_ROOM_REDIS_GET_LOCK_ERR",e[e.EC_ROOM_REDIS_CHECK_LOCK_ERR=-20056]="EC_ROOM_REDIS_CHECK_LOCK_ERR",e[e.EC_ROOM_REDIS_DEL_LOCK_ERR=-20057]="EC_ROOM_REDIS_DEL_LOCK_ERR",e[e.EC_ROOM_QUERY_PLAYER_ERR=20060]="EC_ROOM_QUERY_PLAYER_ERR",e[e.EC_ROOM_QUERY_GAME_ERR=20061]="EC_ROOM_QUERY_GAME_ERR",e[e.EC_ROOM_PLAYER_INFO_NOT_EXIST=20062]="EC_ROOM_PLAYER_INFO_NOT_EXIST",e[e.EC_ROOM_GAME_INFO_NOT_EXIST=20063]="EC_ROOM_GAME_INFO_NOT_EXIST",e[e.EC_ROOM_HISTORY_INFO_INSERT_ERR=-20064]="EC_ROOM_HISTORY_INFO_INSERT_ERR",e[e.EC_ROOM_REGION_INFO_NOT_EXIST=20065]="EC_ROOM_REGION_INFO_NOT_EXIST",e[e.EC_ROOM_QUERY_REGION_ERR=20066]="EC_ROOM_QUERY_REGION_ERR",e[e.EC_ROOM_INFO_UNEXIST=20080]="EC_ROOM_INFO_UNEXIST",e[e.EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR=20090]="EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR",e[e.EC_ROOM_INVALID_PARAMS_TEAM_ID=20100]="EC_ROOM_INVALID_PARAMS_TEAM_ID",e[e.EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED=20101]="EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED",e[e.EC_MATCH_NO_ROOM=3e4]="EC_MATCH_NO_ROOM",e[e.EC_MATCH_TIMEOUT=30001]="EC_MATCH_TIMEOUT",e[e.EC_MATCH_LOGIC_ERR=30002]="EC_MATCH_LOGIC_ERR",e[e.EC_MATCH_ERR=30010]="EC_MATCH_ERR",e[e.EC_MATCH_PLAYER_IS_IN_MATCH=30011]="EC_MATCH_PLAYER_IS_IN_MATCH",e[e.EC_MATCH_PLAYER_NOT_IN_MATCH=30012]="EC_MATCH_PLAYER_NOT_IN_MATCH",e[e.EC_MATCH_GET_MATCH_INFO_ERR=30013]="EC_MATCH_GET_MATCH_INFO_ERR",e[e.EC_MATCH_UPDATE_MATCH_INFO_ERR=30014]="EC_MATCH_UPDATE_MATCH_INFO_ERR",e[e.EC_MATCH_CANCEL_FAILED=30015]="EC_MATCH_CANCEL_FAILED",e[e.EC_MATCH_GET_PLAYER_LIST_INFO_ERR=30016]="EC_MATCH_GET_PLAYER_LIST_INFO_ERR",e[e.EC_MATCH_CREATE_ROOM_ERR=30041]="EC_MATCH_CREATE_ROOM_ERR",e[e.EC_MATCH_JOIN_ROOM_ERR=30042]="EC_MATCH_JOIN_ROOM_ERR",e[e.EC_MATCH_QUERY_PLAYER_ERR=30100]="EC_MATCH_QUERY_PLAYER_ERR",e[e.EC_MATCH_PLAYER_INFO_NOT_EXIST=30101]="EC_MATCH_PLAYER_INFO_NOT_EXIST",e[e.EC_MATCH_QUERY_GAME_ERR=30102]="EC_MATCH_QUERY_GAME_ERR",e[e.EC_MATCH_GAME_INFO_NOT_EXIST=30103]="EC_MATCH_GAME_INFO_NOT_EXIST",e[e.EC_MATCH_QUERY_REGION_ERR=30104]="EC_MATCH_QUERY_REGION_ERR",e[e.EC_MATCH_REGION_INFO_NOT_EXIST=30105]="EC_MATCH_REGION_INFO_NOT_EXIST",e[e.EC_MATCH_TEAM_FAIL=30106]="EC_MATCH_TEAM_FAIL",e[e.EC_MATCH_PLAY_RULE_NOT_RUNNING=30107]="EC_MATCH_PLAY_RULE_NOT_RUNNING",e[e.EC_MATCH_PLAY_ATTR_NOT_FOUND=30108]="EC_MATCH_PLAY_ATTR_NOT_FOUND",e[e.EC_MATCH_PLAY_RULE_NOT_FOUND=30109]="EC_MATCH_PLAY_RULE_NOT_FOUND",e[e.EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND=30110]="EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND",e[e.EC_MATCH_PLAY_RULE_FUNC_ERR=30111]="EC_MATCH_PLAY_RULE_FUNC_ERR",e[e.EC_MATCH_GET_PLAYER_ATTR_FAIL=30112]="EC_MATCH_GET_PLAYER_ATTR_FAIL",e[e.EC_MATCH_GET_TEAM_ATTR_FAIL=30113]="EC_MATCH_GET_TEAM_ATTR_FAIL",e[e.EC_MATCH_INNER_LOGIC_ERR=-30150]="EC_MATCH_INNER_LOGIC_ERR",e[e.EC_RELAY_ALREADY_EXISTS=4e4]="EC_RELAY_ALREADY_EXISTS",e[e.EC_RELAY_NOT_EXISTS=40001]="EC_RELAY_NOT_EXISTS",e[e.EC_RELAY_DATA_EXCEED_LIMITED=40002]="EC_RELAY_DATA_EXCEED_LIMITED",e[e.EC_RELAY_MEMBER_ALREADY_EXISTS=40003]="EC_RELAY_MEMBER_ALREADY_EXISTS",e[e.EC_RELAY_MEMBER_NOT_EXISTS=40004]="EC_RELAY_MEMBER_NOT_EXISTS",e[e.EC_RELAY_STATE_INVALID=40005]="EC_RELAY_STATE_INVALID",e[e.EC_RELAY_INVALID_FRAME_RATE=40006]="EC_RELAY_INVALID_FRAME_RATE",e[e.EC_RELAY_SET_FRAME_RATE_FORBIDDEN=40007]="EC_RELAY_SET_FRAME_RATE_FORBIDDEN",e[e.EC_RELAY_NO_MEMBERS=40008]="EC_RELAY_NO_MEMBERS",e[e.EC_RELAY_GAMESVR_SERVICE_NOT_OPEN=40009]="EC_RELAY_GAMESVR_SERVICE_NOT_OPEN",e[e.EC_RELAY_REQ_POD_FAIL=40010]="EC_RELAY_REQ_POD_FAIL",e[e.EC_RELAY_LOGIC_ERROR=40014]="EC_RELAY_LOGIC_ERROR",e[e.EC_RELAY_HKV_CACHE_ERROR=40015]="EC_RELAY_HKV_CACHE_ERROR",e[e.EC_RELAY_REDIS_CACHE_ERROR=40016]="EC_RELAY_REDIS_CACHE_ERROR",e[e.EC_RELAY_CACHE_ERROR=40017]="EC_RELAY_CACHE_ERROR",e[e.EC_RELAY_NOTIFY_RELAYWORKER_FAIL=40018]="EC_RELAY_NOTIFY_RELAYWORKER_FAIL",e[e.EC_RELAY_RESET_RELAY_ROOM_FAIL=40019]="EC_RELAY_RESET_RELAY_ROOM_FAIL",e[e.EC_RELAY_CLEAN_RELAY_ROOM_FAIL=40020]="EC_RELAY_CLEAN_RELAY_ROOM_FAIL",e[e.EC_RELAY_NO_PERMISSION=40100]="EC_RELAY_NO_PERMISSION",e[e.EC_RELAY_NOTIFY_GAMESVR_FAIL=40200]="EC_RELAY_NOTIFY_GAMESVR_FAIL",e[e.EC_RELAY_FORWARD_TO_GAMESVR_FAIL=40201]="EC_RELAY_FORWARD_TO_GAMESVR_FAIL",e[e.EC_RELAY_FORWARD_TO_CLIENT_FAIL=40202]="EC_RELAY_FORWARD_TO_CLIENT_FAIL",e[e.EC_INVALID_PARAMS=6e4]="EC_INVALID_PARAMS",e[e.EC_INVALID_PARAMS_PLAY_MODE_VERSION=60001]="EC_INVALID_PARAMS_PLAY_MODE_VERSION",e[e.EC_INVALID_PARAMS_PLAY_MODE_RULETYPE=60002]="EC_INVALID_PARAMS_PLAY_MODE_RULETYPE",e[e.EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION=60003]="EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION",e[e.EC_INVALID_PARAMS_PLAY_MODE_TEAM=60004]="EC_INVALID_PARAMS_PLAY_MODE_TEAM",e[e.EC_INVALID_PARAMS_MSGQ_ENCODE=60020]="EC_INVALID_PARAMS_MSGQ_ENCODE",e[e.EC_INVALID_PARAMS_MSGQ_DECODE=60021]="EC_INVALID_PARAMS_MSGQ_DECODE",e[e.EC_INVALID_PARAMS_GAME_ID=61e3]="EC_INVALID_PARAMS_GAME_ID",e[e.EC_INVALID_PARAMS_PLAYER_INFO=61001]="EC_INVALID_PARAMS_PLAYER_INFO",e[e.EC_INVALID_PARAMS_MAX_PLAYERS=61002]="EC_INVALID_PARAMS_MAX_PLAYERS",e[e.EC_INVALID_PARAMS_ROOM_TYPE=61003]="EC_INVALID_PARAMS_ROOM_TYPE",e[e.EC_INVALID_PARAMS_PLAYER_ID=61004]="EC_INVALID_PARAMS_PLAYER_ID",e[e.EC_INVALID_PARAMS_MATCH_TYPE=61005]="EC_INVALID_PARAMS_MATCH_TYPE",e[e.EC_INVALID_PARAMS_MATCH_CODE=61006]="EC_INVALID_PARAMS_MATCH_CODE",e[e.EC_INVALID_PARAMS_OPEN_ID=61007]="EC_INVALID_PARAMS_OPEN_ID",e[e.EC_INVALID_PARAMS_PLATFORM=61008]="EC_INVALID_PARAMS_PLATFORM",e[e.EC_INVALID_PARAMS_TIMESTAMP=61009]="EC_INVALID_PARAMS_TIMESTAMP",e[e.EC_INVALID_PARAMS_SIGN=61010]="EC_INVALID_PARAMS_SIGN",e[e.EC_INVALID_PARAMS_NONCE=61011]="EC_INVALID_PARAMS_NONCE",e[e.EC_INVALID_PARAMS_TOKEN=61012]="EC_INVALID_PARAMS_TOKEN",e[e.EC_INVALID_PARAMS_NETWORK_STATE=61013]="EC_INVALID_PARAMS_NETWORK_STATE",e[e.EC_INVALID_PARAMS_ROOM_NAME=61014]="EC_INVALID_PARAMS_ROOM_NAME",e[e.EC_INVALID_PARAMS_CREATE_ROOM_TYPE=61015]="EC_INVALID_PARAMS_CREATE_ROOM_TYPE",e[e.EC_INVALID_PARAMS_DEVICE_ID=61016]="EC_INVALID_PARAMS_DEVICE_ID",e[e.EC_MYSPP_SYSTEM_ERR=-1e3]="EC_MYSPP_SYSTEM_ERR",e[e.EC_REDIS_KEY_NOT_EXIST=-66e3]="EC_REDIS_KEY_NOT_EXIST",e[e.EC_REDIS_SET_OP_ERR=-66001]="EC_REDIS_SET_OP_ERR",e[e.EC_REDIS_GET_OP_ERR=-66002]="EC_REDIS_GET_OP_ERR",e[e.EC_REDIS_DEL_OP_ERR=-66003]="EC_REDIS_DEL_OP_ERR",e[e.EC_REDIS_EXPIRE_OP_ERR=-66004]="EC_REDIS_EXPIRE_OP_ERR",e[e.EC_REDIS_LOCK_OP_ERR=-66005]="EC_REDIS_LOCK_OP_ERR",e[e.EC_REDIS_LOCK_ALREADY_EXIST=-66006]="EC_REDIS_LOCK_ALREADY_EXIST",e[e.EC_REDIS_LIST_OP_ERR=-66020]="EC_REDIS_LIST_OP_ERR",e[e.EC_REDIS_LIST_POP_EMPTY=-66021]="EC_REDIS_LIST_POP_EMPTY",e[e.EC_MYSQL_NO_ROW_FOUND=-66100]="EC_MYSQL_NO_ROW_FOUND",e[e.EC_MYSQL_MULTI_ROW_FOUND=-66101]="EC_MYSQL_MULTI_ROW_FOUND",e[e.EC_MYSQL_INSERT_FAIL=-66102]="EC_MYSQL_INSERT_FAIL",e[e.EC_MYSQL_DELETE_FAIL=-66103]="EC_MYSQL_DELETE_FAIL",e[e.EC_MYSQL_UPDATE_FAIL=-66104]="EC_MYSQL_UPDATE_FAIL",e[e.EC_MYSQL_QUERYS_FAIL=-66105]="EC_MYSQL_QUERYS_FAIL",e[e.EC_PB_SERIALIZE_TO_STR_ERR=-66200]="EC_PB_SERIALIZE_TO_STR_ERR",e[e.EC_PB_PARSE_FROM_STR_ERR=-66201]="EC_PB_PARSE_FROM_STR_ERR",e[e.EC_DATA_FORMAT_ERR=-66210]="EC_DATA_FORMAT_ERR",e[e.EC_JSON_FORMAT_ERR=-66211]="EC_JSON_FORMAT_ERR",e[e.EC_JSON_PLAY_MODE_FORMAT_ERR=-66212]="EC_JSON_PLAY_MODE_FORMAT_ERR",e[e.EC_JSON_PLAY_MODE_PARISE_ERR=-66213]="EC_JSON_PLAY_MODE_PARISE_ERR",e[e.EC_INVALID_PARAMS_RECORE_ID=-66601]="EC_INVALID_PARAMS_RECORE_ID",e[e.EC_HASHID_ERR=-66700]="EC_HASHID_ERR",e[e.EC_HASHID_ENCODE_ERR=-66701]="EC_HASHID_ENCODE_ERR",e[e.EC_HASHID_DECODE_ERR=-66702]="EC_HASHID_DECODE_ERR",e[e.EC_CONF_ROOM_ID_BUCKET_ERR=-66801]="EC_CONF_ROOM_ID_BUCKET_ERR",e[e.EC_SDK_SEND_FAIL=90001]="EC_SDK_SEND_FAIL",e[e.EC_SDK_UNINIT=90002]="EC_SDK_UNINIT",e[e.EC_SDK_RES_TIMEOUT=90003]="EC_SDK_RES_TIMEOUT",e[e.EC_SDK_NO_LOGIN=90004]="EC_SDK_NO_LOGIN",e[e.EC_SDK_NO_CHECK_LOGIN=90005]="EC_SDK_NO_CHECK_LOGIN",e[e.EC_SDK_SOCKET_ERROR=90006]="EC_SDK_SOCKET_ERROR",e[e.EC_SDK_SOCKET_CLOSE=90007]="EC_SDK_SOCKET_CLOSE",e[e.EC_SDK_NO_ROOM=90008]="EC_SDK_NO_ROOM"}(n=e.QAppProtoErrCode||(e.QAppProtoErrCode={})),function(e){e[e.COMMON_OFFLINE=0]="COMMON_OFFLINE",e[e.COMMON_ONLINE=1]="COMMON_ONLINE",e[e.RELAY_OFFLINE=2]="RELAY_OFFLINE",e[e.RELAY_ONLINE=3]="RELAY_ONLINE"}(o=e.NetworkState||(e.NetworkState={})),function(e){e[e.COMMON_CREATE=0]="COMMON_CREATE",e[e.MATCH_CREATE=1]="MATCH_CREATE"}(r=e.CreateRoomType||(e.CreateRoomType={})),function(e){e[e.STOP=0]="STOP",e[e.START=1]="START"}(E=e.FrameSyncState||(e.FrameSyncState={})),function(e){e[e.COMMON_JOIN=0]="COMMON_JOIN",e[e.MATCH_JOIN=1]="MATCH_JOIN"}(i=e.JoinRoomType||(e.JoinRoomType={})),function(e){e[e.PENDING=0]="PENDING",e[e.MATCHING=1]="MATCHING",e[e.SUCCESS=3]="SUCCESS",e[e.TIMEOUT=4]="TIMEOUT"}(a=e.MatchStatus||(e.MatchStatus={})),function(e){e[e.ROOM_SIMPLE=1]="ROOM_SIMPLE",e[e.PLAYER_COMPLEX=2]="PLAYER_COMPLEX"}(R=e.MatchType||(e.MatchType={})),function(e){e[e.E_GS_FORWARDTYPE_DEFAULT=0]="E_GS_FORWARDTYPE_DEFAULT",e[e.E_GS_FORWARDTYPE_NOTIFY_CONNECTION=1]="E_GS_FORWARDTYPE_NOTIFY_CONNECTION",e[e.E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT=2]="E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT",e[e.E_GS_FORWARDTYPE_NOTIFY_COM_EVENT=3]="E_GS_FORWARDTYPE_NOTIFY_COM_EVENT",e[e.E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR=4]="E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR"}(c=e.GameSvrForwardType||(e.GameSvrForwardType={}))}(s||(s={}))},function(e,t,_){"use strict";_.d(t,"a",function(){return s});const s={onPingTime(e){},onFitFrameTime(e){},onBstFrameRate(e){},onRenderFrameRate(e){}}},function(e,t,_){"use strict";const s=_(1).a.QAppProtoErrCode;var n;!function(e){e.EC_SDK_SEND_FAIL="发送失败",e.EC_SDK_UNINIT="未初始化",e.EC_SDK_RES_TIMEOUT="发送超时",e.EC_SDK_NO_LOGIN="未登录",e.EC_SDK_NO_CHECK_LOGIN="CheckLogin失败",e.EC_SDK_SOCKET_ERROR="Socket错误",e.EC_SDK_SOCKET_CLOSE="Socket断开",e.EC_SDK_NO_ROOM="无房间信息"}(n||(n={}));const o={};o[s.EC_SDK_SEND_FAIL]=n.EC_SDK_SEND_FAIL,o[s.EC_SDK_UNINIT]=n.EC_SDK_UNINIT,o[s.EC_SDK_RES_TIMEOUT]=n.EC_SDK_RES_TIMEOUT,o[s.EC_SDK_NO_LOGIN]=n.EC_SDK_NO_LOGIN,o[s.EC_SDK_NO_CHECK_LOGIN]=n.EC_SDK_NO_CHECK_LOGIN,o[s.EC_SDK_SOCKET_ERROR]=n.EC_SDK_SOCKET_ERROR,o[s.EC_SDK_SOCKET_CLOSE]=n.EC_SDK_SOCKET_CLOSE,o[s.EC_SDK_NO_ROOM]=n.EC_SDK_NO_ROOM,t.a=s},function(e,t,_){"use strict";var s,n=_(1);!function(e){let t,_,s,n,o;!function(e){e[e.ROOM_ALL=1]="ROOM_ALL",e[e.ROOM_OTHERS=2]="ROOM_OTHERS",e[e.ROOM_SOME=3]="ROOM_SOME"}(t=e.RecvType||(e.RecvType={})),function(e){e[e.ROOM_SIMPLE=1]="ROOM_SIMPLE",e[e.PLAYER_COMPLEX=2]="PLAYER_COMPLEX"}(_=e.MatchType||(e.MatchType={})),function(e){e[e.COMMON_CREATE=0]="COMMON_CREATE",e[e.MATCH_CREATE=1]="MATCH_CREATE"}(s=e.CreateRoomType||(e.CreateRoomType={})),function(e){e[e.COMMON_OFFLINE=0]="COMMON_OFFLINE",e[e.COMMON_ONLINE=1]="COMMON_ONLINE",e[e.RELAY_OFFLINE=2]="RELAY_OFFLINE",e[e.RELAY_ONLINE=3]="RELAY_ONLINE"}(n=e.NetworkState||(e.NetworkState={})),function(e){e[e.STOP=0]="STOP",e[e.START=1]="START"}(o=e.FrameSyncState||(e.FrameSyncState={}))}(s||(s={}));const o={get CreateRoomType(){return n.a.CreateRoomType},get MatchType(){return n.a.MatchType},get NetworkState(){return n.a.NetworkState},get FrameSyncState(){return n.a.FrameSyncState},get RecvType(){return s.RecvType}};t.a=o},function(e,t,_){var s;e.exports=(s=s||function(e,t){var _=Object.create||function(){function e(){}return function(t){var _;return e.prototype=t,_=new e,e.prototype=null,_}}(),s={},n=s.lib={},o=n.Base={extend:function(e){var t=_(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},r=n.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||i).stringify(this)},concat:function(e){var t=this.words,_=e.words,s=this.sigBytes,n=e.sigBytes;if(this.clamp(),s%4)for(var o=0;o<n;o++){var r=_[o>>>2]>>>24-o%4*8&255;t[s+o>>>2]|=r<<24-(s+o)%4*8}else for(var o=0;o<n;o+=4)t[s+o>>>2]=_[o>>>2];return this.sigBytes+=n,this},clamp:function(){var t=this.words,_=this.sigBytes;t[_>>>2]&=4294967295<<32-_%4*8,t.length=e.ceil(_/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var _,s=[],n=function(t){var t=t,_=987654321,s=4294967295;return function(){var n=((_=36969*(65535&_)+(_>>16)&s)<<16)+(t=18e3*(65535&t)+(t>>16)&s)&s;return n/=4294967296,(n+=.5)*(e.random()>.5?1:-1)}},o=0;o<t;o+=4){var E=n(4294967296*(_||e.random()));_=987654071*E(),s.push(4294967296*E()|0)}return new r.init(s,t)}}),E=s.enc={},i=E.Hex={stringify:function(e){for(var t=e.words,_=e.sigBytes,s=[],n=0;n<_;n++){var o=t[n>>>2]>>>24-n%4*8&255;s.push((o>>>4).toString(16)),s.push((15&o).toString(16))}return s.join("")},parse:function(e){for(var t=e.length,_=[],s=0;s<t;s+=2)_[s>>>3]|=parseInt(e.substr(s,2),16)<<24-s%8*4;return new r.init(_,t/2)}},a=E.Latin1={stringify:function(e){for(var t=e.words,_=e.sigBytes,s=[],n=0;n<_;n++){var o=t[n>>>2]>>>24-n%4*8&255;s.push(String.fromCharCode(o))}return s.join("")},parse:function(e){for(var t=e.length,_=[],s=0;s<t;s++)_[s>>>2]|=(255&e.charCodeAt(s))<<24-s%4*8;return new r.init(_,t)}},R=E.Utf8={stringify:function(e){try{return decodeURIComponent(escape(a.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return a.parse(unescape(encodeURIComponent(e)))}},c=n.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new r.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=R.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var _=this._data,s=_.words,n=_.sigBytes,o=this.blockSize,E=4*o,i=n/E,a=(i=t?e.ceil(i):e.max((0|i)-this._minBufferSize,0))*o,R=e.min(4*a,n);if(a){for(var c=0;c<a;c+=o)this._doProcessBlock(s,c);var C=s.splice(0,a);_.sigBytes-=R}return new r.init(C,R)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),C=(n.Hasher=c.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){c.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,_){return new e.init(_).finalize(t)}},_createHmacHelper:function(e){return function(t,_){return new C.HMAC.init(e,_).finalize(t)}}}),s.algo={});return s}(Math),s)},function(e,t,_){"use strict";const s=_(8);class n{}n.enable=!1,n.exclude=[],n.callback=(e=>console.log(...e)),n.log=((...e)=>{if(!n.enable)return;if(Array.isArray(n.exclude)&&n.exclude.findIndex(t=>t===e[0])>=0)return;const t=[`DEBUGGER_v${s.version}_${s.sdkType} `+Date.now()].concat(e);"function"==typeof n.callback&&n.callback(t)}),Object.defineProperty(n,"log",{enumerable:!1,configurable:!1,writable:!1,value:n.log}),t.a=n},function(e,t,_){"use strict";var s=_(0);const n={get id(){return s.d.getInfo().id},get openId(){return s.k.openId},get name(){return s.d.getInfo().name},get teamId(){return s.d.getInfo().teamId},get customPlayerStatus(){return s.d.getInfo().customPlayerStatus},get customProfile(){return s.d.getInfo().customProfile},get commonNetworkState(){return s.d.getInfo().commonNetworkState},get relayNetworkState(){return s.d.getInfo().relayNetworkState}};t.a=n},function(e){e.exports={sdkType:1,version:"1.1.1"}},function(e,t,_){"use strict";var s={};_.r(s),_.d(s,"DebuggerLog",function(){return c.a}),_.d(s,"getSequenceStr",function(){return I}),_.d(s,"Base64",function(){return d}),_.d(s,"HmacSHA1",function(){return l}),_.d(s,"errCodeConvert",function(){return M}),_.d(s,"getPlatform",function(){return h}),_.d(s,"getChannel",function(){return m}),_.d(s,"deviceId",function(){return p});var n={};_.r(n),_.d(n,"_string",function(){return q}),_.d(n,"_bytes",function(){return W}),_.d(n,"_bool",function(){return j}),_.d(n,"_uint64",function(){return X}),_.d(n,"_uint32",function(){return J}),_.d(n,"_int32",function(){return z}),_.d(n,"_varint",function(){return $});var o={};_.r(o),_.d(o,"_string",function(){return _e}),_.d(o,"_bytes",function(){return se}),_.d(o,"_bool",function(){return ne}),_.d(o,"_uint64",function(){return oe}),_.d(o,"_uint32",function(){return re}),_.d(o,"_int32",function(){return Ee}),_.d(o,"_varint",function(){return ie});var r=_(0);class E{constructor(e=-1){this.id=e}}const i=(e,t,_)=>{clearTimeout(e.id),e.id=setTimeout(t,_)},a=(...e)=>{e.forEach(e=>e&&clearTimeout(e.id))};var R,c=_(6);function C(){if("undefined"==typeof wx)return!1;if(void 0===wx.onHide)return!1;if(void 0===wx.offHide)return!1;if(void 0===wx.onShow)return!1;if(void 0===wx.offShow)return!1;if(void 0===wx.getSystemInfoSync)return!1;try{if(!wx.getSystemInfoSync())return!1}catch(e){return!1}return!0}!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.ANDROID=1]="ANDROID",e[e.IOS=2]="IOS"}(R||(R={}));const d=_(14),l=_(15),O=_(18).default,S=new O(T(),16),A=new O(T(),32);let u=1;function I(){let e=S.encode(u++);return u>=Number.MAX_SAFE_INTEGER&&(u=1),e}function T(){let e=Date.now().toString(36);for(let _=0;_<6;_++)e+=(t=1e6,Math.ceil((Math.random()+1)*t)).toString(36);var t;return e}const p=A.encode(Date.now()),M=function(e,t){return e<0&&(t=`服务器内部错误[${e}]`,e=r.c.EC_INNER_ERROR),{errCode:e,errMsg:t}};function h(){let e=R.UNKNOWN;return C()&&(e=function(){if(!C())return R.UNKNOWN;const e=wx.getSystemInfoSync(),t=e?e.system+"":"";return t.includes("Android")?R.ANDROID:t.includes("iOS")?R.IOS:R.UNKNOWN}()),e}function m(){let e=0;return C()&&(e=1),e}const f={connect:"connect",connectClose:"connectClose",connectClosing:"connectClosing",connectError:"connectError",connecting:"connecting",message:"message",autoAuth:"autoAuth"},N=Object.keys(f);var L=class{constructor(e,t){this.isMsgBind=!1,this.forceClose=!1,this.init(t),this.id=e}init(e){this.url=e,this.eventCallbacks=[],this.eventOnceCallbacks=new Map,this.socketTask=null;const t=new E;let _=0;const s=()=>{c.a.log("SOCKET_OPEN",this.id,this.isConnect()),_=0,O(),a(t)},n=e=>{c.a.log("SOCKET_CLOSE",e,this.id),l(),i(t,()=>R("close"),r.j.reconnectInterval),this.forceClose&&(_=0,this.forceClose=!1,a(t))},o=e=>{c.a.log("SOCKET_ERROR",e,this.id,this.socketTask&&this.socketTask.readyState),d(f.connectError,{msg:"socket connectError",data:e}),i(t,()=>R("error"),r.j.reconnectInterval)},R=e=>{if(!this.url)throw new Error("socket.url = "+this.url);if(!this.isConnect()&&!this.isClose())return i(t,()=>R("open"),r.j.reconnectInterval);if(!this.isClose())return;if(c.a.log("SOCKET_TRY_OPEN",this.id,e,this.socketTask&&this.socketTask.readyState,_,r.j.reconnectMaxTimes),++_>r.j.reconnectMaxTimes)return _=0,void c.a.log("SOCKET_RECONNECT_TIMEOUT");const E="wss://"+this.url.replace("wss://","").replace("ws://","");a(t),this.forceClose=!1,this.socketTask=wx.connectSocket({url:E,fail:()=>console.error("connectSocket fail")}),this.socketTask.onOpen(s.bind(this)),this.socketTask.onClose(n.bind(this)),this.socketTask.onError(o.bind(this)),this.socketTask.onMessage((e=>{d(f.message,{msg:"socket message",data:e.data})}).bind(this))},C=e=>{c.a.log("SOCKET_CONNECT",this.id,e),!this.isConnect()&&_>0&&_<r.j.reconnectMaxTimes||(_=0,R(e+" connect"))},d=(e,t={})=>{t.tag=e,this.eventCallbacks.forEach(([_,s])=>{_!==e&&"*"!==_||s(t)});const _=this.eventOnceCallbacks.get(e);_&&(_(t),this.eventOnceCallbacks.delete(e))},l=()=>d(f.connectClose,{msg:"socket is closed"}),O=()=>d(f.connect,{msg:"socket is connected"});this.connect=C,this.connectNewSocket=(e=>{c.a.log("SOCKET_CONNECT_NEW",this.id,this.isClose()),this.url=e,_=0;const t=()=>{C("connectNewSocket")};this.close(t,t)}),this.send=((e,{fail:t,success:_})=>{if(!this.isConnect())return t({data:e}),void C("send");this.socketTask.send({data:e.buffer,fail:_=>{c.a.log("SOCKET_SEND_FAIL",this.id,_),t({data:e})},success:()=>{_({data:e})}})}),this.close=((e,t)=>{if(this.forceClose=!0,!this.socketTask)return e&&e(),l();this.socketTask.close({success:t=>{c.a.log("SOCKET_CLOSE_SUCCESS",this.id,t),this.socketTask=null,e&&e()},fail:e=>{c.a.log("SOCKET_CLOSE_ERROR",this.id,e),this.socketTask=null,t&&t()}})}),this.destory=(()=>{a(t),!this.isClose()&&this.close(),this.eventCallbacks=[],this.isMsgBind=!1}),this.isConnect=(()=>this.socketTask&&this.socketTask.readyState===this.socketTask.OPEN),this.isConnecting=(()=>this.socketTask&&this.socketTask.readyState===this.socketTask.CONNECTING),this.isClose=(()=>!this.socketTask||this.socketTask&&this.socketTask.readyState===this.socketTask.CLOSED),this.isClosing=(()=>this.socketTask&&this.socketTask.readyState===this.socketTask.CLOSING),this.on=((e,t)=>{(N.includes(e)||"*"===e)&&"function"==typeof t&&(this.eventCallbacks.push([e,t]),e===f.message&&(this.isMsgBind=!0))}),this.once=((e,t)=>{N.includes(e)&&"function"==typeof t&&this.eventOnceCallbacks.set(e,t)}),this.emit=d}},y=_(1);const g=[r.e.E_CMD_LOGIN_REQ,r.e.E_CMD_LOGOUT_REQ],P=[r.e.E_CMD_RELAY_SEND_FRAME_REQ,r.e.E_CMD_RELAY_REQUEST_FRAME_REQ,r.e.E_CMD_HEART_BEAT_REQ,r.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ],D={FAIL:!1,SUCCESS:!0};var Y;!function(e){e[e.CLIENT_PRE=parseInt("0x2",16)]="CLIENT_PRE",e[e.CLIENT_END=parseInt("0x3",16)]="CLIENT_END",e[e.SERVER_PRE=parseInt("0x28",16)]="SERVER_PRE",e[e.SERVER_END=parseInt("0x29",16)]="SERVER_END"}(Y||(Y={}));class v{constructor(){this.queue=new Set,this.bdHandlers=new Set,this.socket=null}static startQueueLoop(){i(v.timer,()=>{const e=Date.now();return Array.from(v.sendQueue).forEach(([t,_])=>{if(e-_.time>r.j.resendTimeout){let e,t="";r.i.isStatus(r.i.StatusType.LOGIN)?e=r.c.EC_SDK_RES_TIMEOUT:r.i.getErrCode()===r.c.EC_OK?(e=r.c.EC_SDK_NO_LOGIN,t="登录失败"):(e=r.i.getErrCode(),t="登录失败，"+r.i.getErrMsg()),_.sendFail(e,t)}else!_.isSocketSend&&e-_.time>=r.j.resendInterval&&_.resend()}),v.startQueueLoop()},r.j.resendInterval)}static stopQueueLoop(){a(v.timer),Array.from(v.sendQueue).forEach(([e,t])=>{t.remove()}),v.sendQueue.clear()}bindSocket(e,t,_){if(this.socket||!e)return!1;this.socket=e;return!this.socket.isMsgBind&&this.socket.on(f.message,(e=>{if(!e.data)return;const{body:s,pre:n,end:o}=this.unpackBody(new Uint8Array(e.data));n===Y.CLIENT_PRE&&o===Y.CLIENT_END&&t(s),n===Y.SERVER_PRE&&o===Y.SERVER_END&&_(s)}).bind(this)),!0}unbindSocket(){this.socket=null,this.clearQueue(),this.clearBdHandlers()}clearQueue(){Array.from(this.queue).forEach(e=>{this.deleteSeqQueue(e)})}clearBdHandlers(){Array.from(this.bdHandlers).forEach(e=>{v.broadcastHandlers.delete(e),this.bdHandlers.delete(e)})}deleteSeqQueue(e){v.sendQueue.delete(e),this.queue.delete(e)}addSeqQueue(e,t){v.sendQueue.set(e,t),this.queue.add(e)}setBroadcastHandler(e,t){v.broadcastHandlers.set(e,t),this.bdHandlers.add(e)}handleErrCode(e){return!1}send(e,t,_){const s=this.getReadyCode(_);return v.sendQueue.size>10&&c.a.log("SENDQUEUE_size",v.sendQueue.size),0!==s?this.handleSendFail(t,s):this.socket.send(e,{fail:e=>this.handleSendFail(t,e),success:()=>this.handleSendSuccess(t)}),t}buildData(e,t,_){const s=5+t.length+1,n=new Uint8Array(function(e,t){let _=[];for(;e>255;)_.push(255&e),e>>=8;0!==e&&_.push(e);_=_.slice(0,t);for(;_.length<t;)_.push(0);return _.reverse()}(s,4)),o=new Uint8Array(s);return o.set(e),o.set(n,e.length),o.set(t,e.length+n.length),o.set(_,e.length+n.length+t.length),o}unpackBody(e){const t=e.slice(1,5),_=function(e){let t=0;const _=e.length;for(let s=_-1;s>=0;s--)t+=e[s]*Math.pow(2,8*(_-1-s));return t}(Array.from(t))-6;return{body:e.slice(5,5+_),pre:e[0],end:e[e.length-1]}}handleSendFail(e,t){const _=v.sendQueue.get(e);if(_)return Date.now()-_.time>r.j.resendTimeout?_.sendFail(r.i.getErrCode()||t):t===r.c.EC_SDK_UNINIT?_.sendFail(t):t===r.c.EC_SDK_NO_LOGIN?this.socket.emit(f.autoAuth,{}):t===r.c.EC_SDK_NO_CHECK_LOGIN?this.socket.emit(f.autoAuth,{}):void 0}handleSendSuccess(e){if(!v.sendQueue.has(e))return;v.sendQueue.get(e).sendSuccess()}getReadyCode(e){return r.h.isInited()||e===r.e.E_CMD_LOGIN_REQ?this.socket&&this.socket.url?r.i.isStatus(r.i.StatusType.LOGIN)||g.includes(e)?this.socket.id===y.a.ConnectionType.RELAY&&!r.a.isChecked()&&P.includes(e)?r.c.EC_SDK_NO_CHECK_LOGIN:0:r.c.EC_SDK_NO_LOGIN:r.c.EC_SDK_SEND_FAIL:(console.error("MGOBE.Listener 未初始化"),r.d.setInfo({id:""}),r.i.setStatus(r.i.StatusType.LOGOUT),r.c.EC_SDK_UNINIT)}}v.sendQueue=new Map,v.broadcastHandlers=new Map,v.timer=new E;var F=v;function U(e,t){if(G(t>=32,"无符号左移不能大于32位！",{value:e,offset:t}),0===e)return 0;let _=e<<t;return _<=0&&(_=e*Math.pow(2,t)),_}function H(e,t){if(G(t>=32,"无符号右移不能大于32位！",{value:e,offset:t}),e>=B){let _=e>>>0,s=(e-_)/B;return _=H(_,t),(s=U(s,32-t))+_}return e>>>t}function b(e,t=""){throw"object"==typeof t&&(t=JSON.stringify(t)),new Error(e+"\n"+t)}function G(e,t,_=""){e&&b(t,_)}function k(e,t){Array.isArray(t)||(t=[t]);const _=t.length;for(let s=0;s<_;s++)e.push(t[s])}function Q(e,t){if(e)return Array.isArray(e)?e.forEach((_,s)=>t(_,s,e)):w(e)?Object.keys(e).forEach(_=>w(e[_])||Array.isArray(e[_])?t(e[_],_,e)&&Q(e[_],t):t(e[_],_,e)):null}function w(e){return"[object Object]"===Object.prototype.toString.apply(e)}function K(e,t,_){Object.defineProperty(e,t,{enumerable:!1,value:_})}const B=Math.pow(2,32),x=Math.pow(2,53),V=2147483647;function q(e,t,_){let s,n,o,r,E;for(s="",n=t;n<t+_;)switch((o=e[n++])>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s+=String.fromCharCode(o);break;case 12:case 13:r=e[n++],s+=String.fromCharCode((31&o)<<6|63&r);break;case 14:r=e[n++],E=e[n++],s+=String.fromCharCode((15&o)<<12|(63&r)<<6|(63&E)<<0)}return{cursor:t+=_,value:s}}function W(e,t,_){const s=[].slice.call(e,t,t+_);return{cursor:t+=_,value:s}}function j(e,t){const _=$(e,t);G(_.value.length>1,"bool 溢出");const s=!!_.value[0];return{cursor:_.cursor,value:s}}function X(e,t){const _=$(e,t);let s=_.value;return G(s.length>2,"uint64 溢出"),s.length<2?s=_.value[0]:2===s.length&&(s=s[0]*B+s[1])>=x&&(s=_.value),{cursor:_.cursor,value:s}}function J(e,t){const _=$(e,t);return G(_.value.length>1,"uint32 溢出"),{cursor:_.cursor,value:_.value[0]}}function z(e,t){const _=$(e,t);if(G(_.value.length>2,"int32 溢出"),2===_.value.length){if(0!=~_.value[0])return b("int32 溢出");_.value[0]=_.value[1]}return _.value[0]>V&&(_.value[0]=-(1+~_.value[0])),{cursor:_.cursor,value:_.value[0]}}function $(e,t){const _=function(e,t){let _=1;for(;t<e.length&&e[t]>=128;)_++,t++;return _}(e,t),s=[];let n=0,o=0;if(1===_&&0===e[t])return{value:[0],cursor:t+1};for(let r=t;r<t+_;r++){let t=127&e[r],_=7;for(;_>0;)if(o+_<=32)n+=U(t,o),o+=_,_=0;else{const e=o+_-32,r=_-e;n+=U(t&Math.pow(2,r)-1,o),s.unshift(n),t=H(t,r),_=e,o=0,n=0}}return 0!==n&&s.unshift(n),{value:s,cursor:t+_}}function Z(e,t){let _,s;const n=$(e,t);G(n.value.length>1,"key字段长度不能大于32位！");const o=n.value[0];return t=n.cursor,s=7&o,{id:_=H(o,3),writeType:s,cursor:t}}function ee(e,t,_){return G(!["int32","uint32","uint64","bool"].includes(_),`无法解析 ${_} 类型`),n[`_${_}`](e,t)}function te(e,t,_){const s=$(e,t),n=[];let o=s;if(G(s.value.length>1,"目前只支持长度为小于 32位 的数据 ！"),"string"===_)return q(e,o.cursor,o.value[0]);if("bytes"===_)return W(e,o.cursor,o.value[0]);for(let t=0;t<s.value[0];t++)o=X(e,o.cursor),n.push(o.value);return{value:n,cursor:o.cursor}}function _e(e){e+="";let t=new Array;for(let _=0;_<e.length;_++){let s=e.charCodeAt(_);if(s<128)t.push(s);else if(s<2048)t.push(s>>6|192),t.push(63&s|128);else if(s<65536)if(s>=55296&&s<=56319&&_+1<e.length){const n=e.charCodeAt(_+1);n>=56320&&n<=57343&&(s=1024*(s-55296)+n-56320+65536,t.push(s>>18|240),t.push(s>>12&63|128),t.push(s>>6&63|128),t.push(63&s|128),_++)}else t.push(s>>12|224),t.push(s>>6&63|128),t.push(63&s|128)}const _=t.length;return G(_>=Math.pow(2,32),"数组长度过大"),t=ie(_).concat(t)}function se(e){e.forEach(e=>e>=256&&b("byte 溢出"));const t=ie(e.length),_=e.length;for(let s=0;s<_;s++)t.push(e[s]);return t}function ne(e){return ie(e=e?1:0)}function oe(e){let t,_;return Array.isArray(e)?(_=(Math.round(Math.abs(Number(e[0])))||0)>>>0,t=(Math.round(Math.abs(Number(e[1])))||0)>>>0):_=((e=Math.round(Math.abs(Number(e)))||0)-(t=e>>>0))/B,ie([_,t])}function re(e){return(e=Math.round(Math.abs(Number(e)))||0)>=B&&(e=B-1),ie(e)}function Ee(e){return ie(e=Math.round(Number(e))||0)}function ie(e){Array.isArray(e)||(e=[e]);let t=[];const _=e.length;let s=0,n=0;return e.reverse().forEach((e,o)=>{for(e=Number(e)||0,n=U(e,s)+n,s+=32;s>7;){const e=n-U(H(n,7),7);if(t.push(e),n=H(n,7),s-=7,0===n&&o===_-1)break}}),0!==n&&t.push(n),t=t.map((e,_)=>_===t.length-1?e:e+128)}function ae(e,t){return G(e>Math.pow(2,29)-1,"key字段长度不能大于32位！"),ie([U(e,3)+t])}function Re(e,t){return o[`_${t}`](e)}const ce=[["int32","int64","uint32","uint64","sint32","sint64","bool","enum"],["fixed64","sfixed64","double"],["string","bytes"],["_deprecated_"],["_deprecated_"],["fixed32","sfixed32","float"]],Ce=["int64","sint32","sint64","enum","fixed64","sfixed64","double","fixed32","sfixed32","float"],de=["int32","int64","uint32","uint64"],le="repeated",Oe="__parent",Se="__typeof",Ae="__keyname",ue="__primitive",Ie="__message",Te="__enum",pe="bytes",Me="uint32",he=".";function me(e){return ce.findIndex(t=>t.includes(e))}function fe(e){return Ce.includes(e)}function Ne(e,t){let _;return Q(e.fields,e=>{e.id===t&&(_=e)}),G(!_,"无法获取到类型",{id:t,fields:e.fields}),_}function Le(e,t){let _=e;const s=t.split(he);let n=null;for(;_!==_[Oe];){if(_.nested&&_.nested.hasOwnProperty(s[0])){n=s.reduce((e,t)=>e.nested[t],_);break}_=_[Oe]}return _!==_[Oe]||n||_.nested&&_.nested.hasOwnProperty(s[0])&&(n=s.reduce((e,t)=>e.nested[t],_)),G(!n,"没有嵌套类型，无法查询！",{message:e,paths:s}),n}var ye=class{constructor(e,t=""){var _;this.proto=(_=function(e,t){G(!w(e.nested),"没有嵌套类型，无法移除！",{proto:e,packageName:t});const _=t.split(he);return""===t?e:_.reduce((e,t)=>e.nested[t],e)}(e,t),JSON.parse(JSON.stringify(_))),K(this.proto,Oe,this.proto),Q(this.proto,(e,t,_)=>!(t===Oe||!w(e)||(K(e,Oe,_),K(e,Ae,t),0))),Q(this.proto,(e,t,_)=>{if(!w(e))return!1;if("fields"===t)return!0;if(!e.hasOwnProperty("type"))return!0;let s=ue;return function(e){return ce.findIndex(t=>t.includes(e))>=0}(e.type)||(s=Ie,Le(e,e.type).values&&(s=Te)),K(e,Se,s),K(e,Ae,t),!1})}getConverter(e,t){const _=Le(t=t||this.proto,e),s=this.getConverter.bind(this);return{decode:e=>(function(e,t,_,s){const n=function(e){const t={};for(const _ in e.fields){const s=e.fields[_];if(s[Se]===Te){t[_]=0;continue}if(s.rule===le&&s[Se]===Ie){t[_]=[];continue}if(s[Se]!==ue)continue;const n=me(s.type);switch(0===n&&(t[_]=0),s.type){case"string":t[_]="";break;case"bytes":t[_]=[];break;case"bool":t[_]=!1}}return t}(e),o=(e,t)=>{const _=e[Ae];e.rule===le&&n[_]?n[_].push(t):e.rule!==le||n[_]?n[_]=t:(n[_]=[],k(n[_],t))},r=new Uint8Array(s);let E=0;return(()=>{for(;E<r.length;){const t=Z(r,E);let s;E=t.cursor;const n=Ne(e,t.id);let i=n.type;const a=0===t.writeType,R=n[Se]===Te,c=n[Se]===ue,C=2===t.writeType;if(G(fe(i),`类型错误： ${i} 不支持`),C&&c)s=te(r,E,i);else if(C&&!c){const e=(s=ee(r,E,Me)).cursor,t=s.cursor+s.value,o=_(i,n);s.value=o.decode(r.slice(e,t)),s.cursor=t}else{if(!a)return b("不支持该类型",{keyInfo:t,field:n});R&&(i=Me),s=ee(r,E,i)}E=s.cursor,o(n,s.value)}})(),n})(_,0,s,e),encode:t=>(function(e,t,_,s){const n=(e,t)=>{const _=[],{type:s,id:n,rule:r}=e,E=me(s),i=-1!==E,a=r===le,R=function(e){return de.findIndex(t=>t===e)>=0}(s);if(G(fe(s),`类型错误： ${s} 不支持`),G(a&&!Array.isArray(t),"repeated 类型值应该为数组",e),!i&&a)Q(t,e=>{k(_,ae(n,2)),k(_,Re(o(e,s),pe))});else if(i&&a&&R){const e=[];k(_,ae(n,2)),Q(t,t=>k(e,Re(t,s))),k(_,Re(e,pe))}else if(i&&a&&!R)Q(t,e=>{k(_,ae(n,2)),k(_,Re(e,s))});else if(i||a){if(!i||a)return b("字段编码失败",{writeType:E,rule:r});k(_,ae(n,E)),k(_,Re(t,s))}else e[Se]===Te?(k(_,ae(n,0)),k(_,Re(t,Me))):(t=o(t,s),k(_,ae(n,2)),k(_,Re(t,pe)));return _},o=(t,_)=>{const s=[],o=Le(e,_).fields;return Q(t,(e,t,_)=>{if(null==e||!o[t])return!1;const r=n(o[t],e);k(s,r)}),s},r=o(s,t);return new Uint8Array(r)})(_,e,0,t)}}};const{errCodeConvert:ge}=s,Pe=new ye(_(10));function De(e){return Pe.getConverter.bind(Pe)(e)}const Ye=new Map,ve=new Map,Fe=new Map;const Ue=De("lagame.ClientSendServerReqWrap1"),He=De("lagame.ClientSendServerReqWrap2"),be=De("lagame.ClientSendServerRspWrap1"),Ge=De("lagame.ClientSendServerRspWrap2"),ke=De("lagame.ServerSendClientBstWrap1"),Qe=De("lagame.ServerSendClientBstWrap2");Ye.set(r.e.E_CMD_LOGIN_REQ,De("lagame.LoginReq")),ve.set(r.e.E_CMD_LOGIN_REQ,De("lagame.LoginRsp")),Ye.set(r.e.E_CMD_LOGOUT_REQ,De("lagame.LogoutReq")),ve.set(r.e.E_CMD_LOGOUT_REQ,De("lagame.LogoutRsp")),Ye.set(r.e.E_CMD_CHANGE_PLAYER_STATE_REQ,De("lagame.ChangeCustomPlayerStatusReq")),ve.set(r.e.E_CMD_CHANGE_PLAYER_STATE_REQ,De("lagame.ChangeCustomPlayerStatusRsp")),Ye.set(r.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ,De("lagame.SendToGameSvrReq")),ve.set(r.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ,De("lagame.SendToGameSvrRsp")),Ye.set(r.e.E_CMD_RELAY_SEND_FRAME_REQ,De("lagame.SendFrameReq")),ve.set(r.e.E_CMD_RELAY_SEND_FRAME_REQ,De("lagame.SendFrameRsp")),Ye.set(r.e.E_CMD_ROOM_CHAT_REQ,De("lagame.SendToClientReq")),ve.set(r.e.E_CMD_ROOM_CHAT_REQ,De("lagame.SendToClientRsp")),Ye.set(r.e.E_CMD_CHECK_LOGIN_REQ,De("lagame.CheckLoginReq")),ve.set(r.e.E_CMD_CHECK_LOGIN_REQ,De("lagame.CheckLoginRsp")),Ye.set(r.e.E_CMD_RELAY_REQUEST_FRAME_REQ,De("lagame.RequestFrameReq")),ve.set(r.e.E_CMD_RELAY_REQUEST_FRAME_REQ,De("lagame.RequestFrameRsp")),Ye.set(r.e.E_CMD_START_FRAME_SYNC_REQ,De("lagame.StartFrameSyncReq")),ve.set(r.e.E_CMD_START_FRAME_SYNC_REQ,De("lagame.StartFrameSyncRsp")),Ye.set(r.e.E_CMD_STOP_FRAME_SYNC_REQ,De("lagame.StopFrameSyncReq")),ve.set(r.e.E_CMD_STOP_FRAME_SYNC_REQ,De("lagame.StopFrameSyncRsp")),Ye.set(r.e.E_CMD_CREATE_ROOM_REQ,De("lagame.CreateRoomReq")),ve.set(r.e.E_CMD_CREATE_ROOM_REQ,De("lagame.CreateRoomRsp")),Ye.set(r.e.E_CMD_JOIN_ROOM_REQ,De("lagame.JoinRoomReq")),ve.set(r.e.E_CMD_JOIN_ROOM_REQ,De("lagame.JoinRoomRsp")),Ye.set(r.e.E_CMD_QUIT_ROOM_REQ,De("lagame.LeaveRoomReq")),ve.set(r.e.E_CMD_QUIT_ROOM_REQ,De("lagame.LeaveRoomRsp")),Ye.set(r.e.E_CMD_DISSMISS_ROOM_REQ,De("lagame.DismissRoomReq")),ve.set(r.e.E_CMD_DISSMISS_ROOM_REQ,De("lagame.DismissRoomRsp")),Ye.set(r.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ,De("lagame.ChangeRoomReq")),ve.set(r.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ,De("lagame.ChangeRoomRsp")),Ye.set(r.e.E_CMD_REMOVE_MEMBER_REQ,De("lagame.RemovePlayerReq")),ve.set(r.e.E_CMD_REMOVE_MEMBER_REQ,De("lagame.RemovePlayerRsp")),Ye.set(r.e.E_CMD_GET_ROOM_DETAIL_REQ,De("lagame.GetRoomByRoomIdReq")),ve.set(r.e.E_CMD_GET_ROOM_DETAIL_REQ,De("lagame.GetRoomByRoomIdRsp")),Ye.set(r.e.E_CMD_GET_ROOM_LIST_REQ,De("lagame.GetRoomListReq")),ve.set(r.e.E_CMD_GET_ROOM_LIST_REQ,De("lagame.GetRoomListRsp")),Ye.set(r.e.E_CMD_HEART_BEAT_REQ,De("lagame.HeartBeatReq")),ve.set(r.e.E_CMD_HEART_BEAT_REQ,De("lagame.HeartBeatRsp")),Ye.set(r.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ,De("lagame.MatchPlayersReq")),ve.set(r.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ,De("lagame.MatchPlayersRsp")),Ye.set(r.e.E_CMD_MATCH_ROOM_SIMPLE_REQ,De("lagame.MatchRoomSimpleReq")),ve.set(r.e.E_CMD_MATCH_ROOM_SIMPLE_REQ,De("lagame.MatchRoomSimpleRsp")),Ye.set(r.e.E_CMD_MATCH_CANCEL_MATCH_REQ,De("lagame.CancelPlayerMatchReq")),ve.set(r.e.E_CMD_MATCH_CANCEL_MATCH_REQ,De("lagame.CancelPlayerMatchRsp")),Fe.set(r.f.E_PUSH_TYPE_GAMESVR,De("lagame.RecvFromGameSvrBst")),Fe.set(r.f.E_PUSH_TYPE_ROOM_CHAT,De("lagame.RecvFromClientBst")),Fe.set(r.f.E_PUSH_TYPE_START_GAME,De("lagame.StartFrameSyncBst")),Fe.set(r.f.E_PUSH_TYPE_STOP_GAME,De("lagame.StopFrameSyncBst")),Fe.set(r.f.E_PUSH_TYPE_RELAY,De("lagame.RecvFrameBst")),Fe.set(r.f.E_PUSH_TYPE_JOIN_ROOM,De("lagame.JoinRoomBst")),Fe.set(r.f.E_PUSH_TYPE_LEAVE_ROOM,De("lagame.LeaveRoomBst")),Fe.set(r.f.E_PUSH_TYPE_DISMISS_ROOM,De("lagame.DismissRoomBst")),Fe.set(r.f.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY,De("lagame.ChangeRoomBst")),Fe.set(r.f.E_PUSH_TYPE_REMOVE_PLAYER,De("lagame.RemovePlayerBst")),Fe.set(r.f.E_PUSH_TYPE_PLAYER_STATE,De("lagame.ChangeCustomPlayerStatusBst")),Fe.set(r.f.E_PUSH_TYPE_NETWORK_STATE,De("lagame.ChangePlayerNetworkStateBst")),Fe.set(r.f.E_PUSH_TYPE_MATCH_TIMEOUT,De("lagame.MatchTimeoutBst")),Fe.set(r.f.E_PUSH_TYPE_MATCH_SUCCESS,De("lagame.MatchPlayersBst"));const we=Math.pow(2,32)-1-1-4-1;function Ke(e){let t=!1;return[r.c.EC_ACCESS_CMD_GET_TOKEN_ERR,r.c.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE,r.c.EC_ACCESS_CMD_INVALID_TOKEN,r.c.EC_ACCESS_GET_COMM_CONNECT_ERR].includes(e)&&(t=!0),t}function Be(e){let t=!1;return[r.c.EC_ACCESS_GET_RELAY_CONNECT_ERR].includes(e)&&(t=!0),t}var xe=class extends F{constructor(e){super(),this.responses=e}sendRequest(e,t,_,s,n,o=""){if(!o){o=I();const r={time:Date.now(),isSocketSend:!1,cmd:t,response:e=>{_(D.SUCCESS,e,s),this.deleteSeqQueue(o)},resend:()=>this.sendRequest(e,t,_,s,n,o),sendSuccess(){this.isSocketSend=!0},sendFail:(e,t="")=>{const n={seq:o,body:null,errCode:e,errMsg:`消息发送失败，${t} [${e}]`};_(D.FAIL,{RspWrap1:n,RspWrap2:null,body:null},s),this.deleteSeqQueue(o)},remove:()=>this.deleteSeqQueue(o)};this.addSeqQueue(o,r)}const E=function(e,t,_){let s=t.cmd,n=Ye.get(s);if(!n||!n.encode)throw new Error("找不到该 cmd 编码方法: "+s);let o=n.encode(_),r=He.encode(Object.assign({},t,{body:o}));return Ue.encode(Object.assign({},e,{body:r}))}(Object.assign({},r.l,{cmd:n,seq:o,body:null}),{cmd:t,body:null},e);if(E.length>we){const e=F.sendQueue.get(o);return setTimeout(()=>e&&e.sendFail(r.c.EC_SDK_SEND_FAIL,"数据长度超限")),o}const i=this.buildData(E);return this.send(i,o,t)}buildData(e){const t=new Uint8Array(1),_=new Uint8Array(1);return t[0]=Y.CLIENT_PRE,_[0]=Y.CLIENT_END,super.buildData(t,e,_)}handleMessage(e){let t=null;const _=function(e,t){let _=be.decode(e),s=Ge.decode(_.body),n=t(_.seq);if(!n)return null;let o=null,r=ve.get(n);if(!r||!r.decode)throw new Error("找不到该 cmd 解码方法: "+n);s.body&&(o=r.decode(s.body));let{errCode:E,errMsg:i}=ge(_.errCode,_.errMsg);return _.errMsg=i,_.errCode=E,_.body=null,s.body=null,{RspWrap1:_,RspWrap2:s,body:o}}(e,e=>{if(t=F.sendQueue.get(e))return t.cmd});if(t&&(t.cmd===r.e.E_CMD_HEART_BEAT_REQ||!this.handleErrCode(_.RspWrap1)))return t.response(_)}handleResponse(e){return this.handleMessage(e)}handleErrCode(e){return Ke(e.errCode)?(this.handleTokenErr(),c.a.log("TOKEN_ERROR",e),!0):Be(e.errCode)&&this.socket.id===y.a.ConnectionType.RELAY?(this.handleRelayConnectErr(),c.a.log("RELAY_CONNECT_ERROR",e),!0):(e.errCode!==r.c.EC_OK&&this.responses.error({code:e.errCode,msg:e.errMsg,seq:e.seq}),!1)}handleSuccess(e,t){e===r.c.EC_OK&&t()}handleTokenErr(){r.i.setStatus(r.i.StatusType.LOGOUT),this.socket.emit(f.autoAuth,{})}handleRelayConnectErr(){r.a.setStatus(r.a.StatusType.OFFLINE),this.socket.emit(f.autoAuth,{})}};var Ve,qe=class extends F{constructor(){super()}buildData(e){const t=new Uint8Array(1),_=new Uint8Array(1);return t[0]=Y.SERVER_PRE,_[0]=Y.SERVER_END,super.buildData(t,e,_)}handleMessage(e){const t=function(e){let t=ke.decode(e),_=Qe.decode(t.body),s=null,n=Fe.get(_.type);if(!n||!n.decode)throw new Error("找不到该 cmd 解码方法: "+_.type);return _.msg&&(s=n.decode(_.msg)),t.body=null,_.msg=null,{BstWrap1:t,BstWrap2:_,body:s}}(e),_=F.broadcastHandlers.get(t.BstWrap2.type);_&&_(t.body,t.BstWrap1.seq)}handleBroadcast(e){return this.handleMessage(e)}};!function(e){e.comm="comm_cmd",e.relay="relay_cmd"}(Ve||(Ve={}));var We=class{static startQueueLoop(){F.startQueueLoop()}static stopQueueLoop(){F.stopQueueLoop()}constructor(e){this.client=new xe(e),this.server=new qe,this.responses=e}bindSocket(e){const t=this.client.handleResponse.bind(this.client),_=this.server.handleBroadcast.bind(this.server);this.client.bindSocket(e,t,_),this.server.bindSocket(e,t,_)}unbindSocket(){this.client.unbindSocket(),this.server.unbindSocket()}setBroadcastHandler(e,t){this.server.setBroadcastHandler(e,t)}send(e,t,_,s){let n=Ve.comm;return this.client.socket.id===y.a.ConnectionType.RELAY&&(n=Ve.relay),this.client.sendRequest(e,t,_,s,n)}};var je=class extends We{constructor(e){super(e),this.matchTimeoutBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_TIMEOUT,this.matchUsersBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_SUCCESS,this.setBroadcastHandler(this.matchTimeoutBroadcastType,this.matchUsersTimeoutBroadcast.bind(this)),this.setBroadcastHandler(this.matchUsersBroadcastType,this.matchUsersBroadcast.bind(this))}matchUsersComplex(e,t){const _=r.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ,s=this.send(e,_,this.matchUsersComplexResponse.bind(this),t);return c.a.log("MATCHUSERSCOMPLEX_Para",e,s),s}matchRoom(e,t){const _=r.e.E_CMD_MATCH_ROOM_SIMPLE_REQ,s=this.send(e,_,this.matchRoomResponse.bind(this),t);return c.a.log("MATCHROOM_Para",e,s),s}cancelMatch(e,t){const _=r.e.E_CMD_MATCH_CANCEL_MATCH_REQ,s=this.send(e,_,this.cancelMatchResponse.bind(this),t);return c.a.log("CANCELMATCH_Para",e,s),s}matchUsersComplexResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.matchPlayersRsp(n)}matchRoomResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.matchRoomSimpleRsp(n)}cancelMatchResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.cancelPlayerMatchRsp(n)}matchUsersTimeoutBroadcast(e,t){const _={data:e,seq:t};return this.responses.onMatchTimeout(_)}matchUsersBroadcast(e,t){const _={data:e,seq:t};return this.responses.onMatchPlayers(_)}};var Xe,Je=class extends We{constructor(e){super(e),this.joinRoomBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_JOIN_ROOM,this.leaveRoomBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_LEAVE_ROOM,this.dismissRoomBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_DISMISS_ROOM,this.changeRoomBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY,this.removeUserBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_REMOVE_PLAYER,this.changeUserStateBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_PLAYER_STATE,this.roomUserNetworkBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_NETWORK_STATE,this.testBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_TEST,this.setBroadcastHandler(this.joinRoomBroadcastType,this.onJoinRoom.bind(this)),this.setBroadcastHandler(this.leaveRoomBroadcastType,this.onLeaveRoom.bind(this)),this.setBroadcastHandler(this.dismissRoomBroadcastType,this.onDismissRoom.bind(this)),this.setBroadcastHandler(this.changeRoomBroadcastType,this.onChangeRoom.bind(this)),this.setBroadcastHandler(this.removeUserBroadcastType,this.onRemoveUser.bind(this)),this.setBroadcastHandler(this.changeUserStateBroadcastType,this.onChangeUserState.bind(this)),this.setBroadcastHandler(this.roomUserNetworkBroadcastType,this.onChangePlayerNetworkState.bind(this)),this.setBroadcastHandler(this.testBroadcastType,this.testBroadcast.bind(this))}createRoom(e,t){const _=r.e.E_CMD_CREATE_ROOM_REQ,s=this.send(e,_,this.createRoomResponse.bind(this),t);return c.a.log("CREATEROOM_Para",e,s),s}joinRoom(e,t){const _=r.e.E_CMD_JOIN_ROOM_REQ,s=this.send(e,_,this.joinRoomResponse.bind(this),t);return c.a.log("JOINROOM_Para",e,s),s}leaveRoom(e,t){const _=r.e.E_CMD_QUIT_ROOM_REQ,s=this.send(e,_,this.leaveRoomResponse.bind(this),t);return c.a.log("LEAVEROOM_Para",e,s),s}dismissRoom(e,t){const _=r.e.E_CMD_DISSMISS_ROOM_REQ,s=this.send(e,_,this.dismissRoomResponse.bind(this),t);return c.a.log("DISMISSROOM_Para",e,s),s}changeRoom(e,t){const _=r.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ,s=this.send(e,_,this.changeRoomResponse.bind(this),t);return c.a.log("CHANGEROOM_Para",e,s),s}removeUser(e,t){const _=r.e.E_CMD_REMOVE_MEMBER_REQ,s=this.send(e,_,this.removeUserResponse.bind(this),t);return c.a.log("REMOVEUSER_Para",e,s),s}getRoomByRoomId(e,t){const _=r.e.E_CMD_GET_ROOM_DETAIL_REQ,s=this.send(e,_,this.getRoomByRoomIdRsp().bind(this),t);return c.a.log("GETROOMBYROOMID_Para",e,s),s}getRoomList(e,t){const _=r.e.E_CMD_GET_ROOM_LIST_REQ,s=this.send(e,_,this.getRoomListResponse.bind(this),t);return c.a.log("GETROOMLIST_Para",e,s),s}createTeamRoom(e,t){}joinTeamRoom(e,t){}createRoomResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.createRoomRsp(n)}joinRoomResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.joinRoomRsp(n)}leaveRoomResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.leaveRoomRsp(n)}dismissRoomResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.dismissRoomRsp(n)}changeRoomResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.changeRoomRsp(n)}removeUserResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.removePlayerRsp(n)}getRoomByRoomIdRsp(){return(e,t,_)=>{const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};_&&_(n),this.responses.getRoomByRoomIdRsp(n)}}getRoomListResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.getRoomListRsp(n)}testBroadcast(e,t){const _={data:e,seq:t};c.a.log("test 广播",_)}onJoinRoom(e,t){const _={data:e,seq:t};return this.responses.onJoinRoom(_)}onLeaveRoom(e,t){const _={data:e,seq:t};return this.responses.onLeaveRoom(_)}onDismissRoom(e,t){const _={data:e,seq:t};return this.responses.onDismissRoom(_)}onChangeRoom(e,t){const _={data:e,seq:t};return this.responses.onChangeRoom(_)}onRemoveUser(e,t){const _={data:e,seq:t};return this.responses.onRemovePlayer(_)}onChangeUserState(e,t){const _={data:e,seq:t};return this.responses.onChangeCustomPlayerStatus(_)}onChangePlayerNetworkState(e,t){const _={data:e,seq:t};return this.responses.onChangePlayerNetworkState(_)}};!function(e){e.initSdk="init_sdk",e.request="request",e.ping="ping",e.recFrame="recFrame"}(Xe||(Xe={}));var ze=_(2),$e=_(7);const Ze=_(8);let et=null,tt=!1,_t=[],st=[],nt=1e4;setInterval(()=>{if(tt){if(0!==_t.length){const e=JSON.stringify(_t);_t=[],Et(Xe.request,{requests:e})}if(0!==st.length){const e=JSON.stringify(st);st=[],Et(Xe.recFrame,{times:e})}}},nt);let ot=0;function rt(e,t,s,n){let o=++ot;c.a.log("EventUploader","validate"),function(e,t,s=1e4){nt=s,et||(et=_(19)),et.appLaunch(),et.setOpenid(e||""),tt=!0}(e,0,s),Et(Xe.initSdk,{},!0,e=>{o===ot&&n&&n(e)})}function Et(e,t,_=!1,s){t.sdkType=Ze.sdkType||"",t.sdkVersion=Ze.version||"",t.playerId=$e.a.id||"",t.gameId=r.k.gameId||"",(_||r.h.isInited())&&et.onEvent(e,t,e=>{s&&s(e)})}const it={lastTime:0,frameRate:0,callback:e=>{},run:e=>{it.callback&&it.callback(e),requestAnimationFrame(it.run)}};it.callback=(e=>{if(0===it.lastTime)return void(it.lastTime=e);let t=e,_=t-it.lastTime,s=Math.round(1e3/(_+1e-6));it.frameRate=s,it.lastTime=t,ze.a.onRenderFrameRate&&ze.a.onRenderFrameRate(_)}),it.run(0);const at={lastFrameTime:0,trigger:()=>{let e=Date.now();if(0===at.lastFrameTime)return void(at.lastFrameTime=e);let t=e-at.lastFrameTime;ze.a.onBstFrameRate&&ze.a.onBstFrameRate(t),at.lastFrameTime=e},clear:()=>{at.lastFrameTime=0}};var Rt=class{constructor(e){this.netUtil1=null,this.netUtil2=null,this.frameBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_RELAY,this.startGameBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_START_GAME,this.stopGameBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_STOP_GAME,this.sendMessageExtBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_GAMESVR,this.responses=e,this.netUtil1=new We(e),this.netUtil2=new We(e),this.netUtil1.setBroadcastHandler(this.startGameBroadcastType,this.onStartFrameSync.bind(this)),this.netUtil1.setBroadcastHandler(this.stopGameBroadcastType,this.onStopFrameSync.bind(this)),this.netUtil2.setBroadcastHandler(this.frameBroadcastType,this.onRecvFrame.bind(this)),this.netUtil2.setBroadcastHandler(this.sendMessageExtBroadcastType,this.onRecvFromGameSvr.bind(this))}setFrameRoom(e){c.a.log("SETFRAMEROOM",e);const t=this.getFrameRoom();this.roomInfo=e||{roomId:0,routeId:""};const _=t.routeId,s=this.roomInfo.routeId;return s?_!==s?(r.a.setStatus(r.a.StatusType.OFFLINE),this.autoCheckLogin()):_===s?this.autoCheckLogin():void 0:this.netUtil2.client.socket&&this.netUtil2.client.socket.close()}getFrameRoom(){return this.roomInfo||{id:0,routeId:""}}startFrameSync(e,t){if(!this.roomInfo.id){const e={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.startFrameSyncResponse(!1,e,t)}const _=r.e.E_CMD_START_FRAME_SYNC_REQ,s=this.netUtil1.send(e,_,this.startFrameSyncResponse.bind(this),t);return c.a.log("STARTFRAMESYNC_Para",e,s),s}stopFrameSync(e,t){if(!this.roomInfo.id){const e={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.stopFrameSyncResponse(!1,e,t)}const _=r.e.E_CMD_STOP_FRAME_SYNC_REQ,s=this.netUtil1.send(e,_,this.stopFrameSyncResponse.bind(this),t);return c.a.log("STOPFRAMESYNC_Para",e,s),s}sendFrame(e,t){if(!this.roomInfo.id){const e={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.sendFrameResponse(!1,e,t)}this.autoCheckLogin();const _=r.e.E_CMD_RELAY_SEND_FRAME_REQ,s=this.netUtil2.send(e,_,this.sendFrameResponse.bind(this),t);return c.a.log("SENDFRAME_Para",e,s),s}requestFrame(e,t){if(!this.roomInfo.id){const e={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.requestFrameResponse(!1,e,t)}this.autoCheckLogin();const _=r.e.E_CMD_RELAY_REQUEST_FRAME_REQ,s=this.netUtil2.send(e,_,this.requestFrameResponse.bind(this),t);return c.a.log("REQUESTFRAME_Para",e,s),s}checkLogin(e,t){if(!this.roomInfo.id){const t={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.checkLoginResponse(!1,t,e)}r.a.setStatus(r.a.StatusType.CHECKING);const _=r.e.E_CMD_CHECK_LOGIN_REQ,s={token:r.l.authKey,routeId:this.roomInfo.routeId},n=this.netUtil2.send(s,_,this.checkLoginResponse.bind(this),e);return c.a.log("CHECKLOGIN",n,t),n}sendMessageExt(e,t){if(!this.roomInfo.id){const e={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.sendMessageExtResponse(!1,e,t)}this.autoCheckLogin();const _=r.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ,s=this.netUtil2.send(e,_,this.sendMessageExtResponse.bind(this),t);return c.a.log("SENDTOGAMESVR_Para",e,s),s}startFrameSyncResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.startFrameSyncRsp(n)}stopFrameSyncResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.stopFrameSyncRsp(n)}autoCheckLogin(){this.connect(),this.netUtil2.client.socket.isConnect()&&r.a.isOffline()&&this.netUtil2.client.socket.emit(f.autoAuth,{})}connect(){!this.netUtil2.client.socket.isConnect()&&this.roomInfo&&(this.netUtil2.client.socket.url=r.j.url+":"+r.g,this.netUtil2.client.socket.connect("framesender connect"))}sendFrameResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.sendFrameRsp(n)}checkLoginResponse(e,t,_){r.a.setStatus(r.a.StatusType.OFFLINE);const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return n.code===r.c.EC_OK&&r.a.setStatus(r.a.StatusType.CHECKED),c.a.log("RESPONSE_CheckLoginResponse",n),_&&_(n)}requestFrameResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.requestFrameRsp(n)}sendMessageExtResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.sendToGameSvrRsp(n)}onRecvFrame(e,t){const _={data:{frame:Object.assign({},e.frame,{roomId:this.getFrameRoom().id})},seq:t};at.trigger();for(let t of e.frame.items)t.playerId===r.l.playerId&&(s={time:Date.now()-t.timestamp},tt&&st.push([s.time,it.frameRate]));var s;return this.responses.onRecvFrame(_)}onStartFrameSync(e,t){const _={data:Object.assign({},e),seq:t};return at.clear(),this.responses.onStartFrameSync(_)}onStopFrameSync(e,t){const _={data:Object.assign({},e),seq:t};return this.netUtil2&&this.netUtil2.client.clearQueue(),at.clear(),this.responses.onStopFrameSync(_)}onRecvFromGameSvr(e,t){let _={};try{_=JSON.parse(e.data)}catch(t){_=e.data}const s={data:Object.assign({},e,{data:_},{roomId:e.roomId}),seq:t};return this.responses.onRecvFromGameSvr(s)}};var ct=class extends We{constructor(e){super(e),this.messageBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_ROOM_CHAT,this.setBroadcastHandler(this.messageBroadcastType,this.onRecvFromClient.bind(this))}sendMessage(e,t){const _=r.e.E_CMD_ROOM_CHAT_REQ,s=this.send(e,_,this.sendMessageResponse.bind(this),t);return c.a.log("SENDMESSAGE_Para",e,s),s}sendMessageResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.sendToClientRsp(n)}onRecvFromClient(e,t){const _={data:e,seq:t};return this.responses.onRecvFromClient(_)}};var Ct=class extends We{constructor(e){super(e)}login(e,t,_){const s=r.e.E_CMD_LOGIN_REQ,n=Math.floor(Date.now()/1e3),o=Math.floor(Math.random()*(Math.pow(2,32)-1)),{sign:E}=function(e,t,_,s,n){const o=[["game_id",t],["open_id",_],["nonce",n],["timestamp",s]].sort().map(e=>e.join("=")).join("&"),r=l(o,e||"");return{sign:d.stringify(r),timestamp:s}}(t,e.gameId,e.openId,n,o),i=h(),a=m(),R=p,C=Object.assign({},e,{sign:E,timestamp:n,nonce:o,platform:i,channel:a,deviceId:R,mac:void 0,imei:void 0});r.i.setStatus(r.i.StatusType.LOGINING);const O=this.send(C,s,this.loginResponse.bind(this),_);return c.a.log("LOGIN_Para",C,O),r.i.setErrCode(0,""),O}logout(e,t){const _=r.e.E_CMD_LOGOUT_REQ,s=this.send(e,_,this.logoutResponse.bind(this),t);return c.a.log("LOGOUT_Para",e,s),r.i.setStatus(r.i.StatusType.LOGOUTING),s}changeUserState(e,t){const _=r.e.E_CMD_CHANGE_PLAYER_STATE_REQ,s=this.send(e,_,this.changeUserStateResponse.bind(this),t);return c.a.log("CHANGEUSERSTATE_Para",e,s),s}loginResponse(e,t,_){e||r.i.setStatus(r.i.StatusType.LOGOUT);const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return c.a.log("RESPONSE_LoginResponse",n),this.client.handleSuccess(n.code,()=>{r.l.authKey=t.body.token,r.l.playerId=t.body.playerId,r.i.setStatus(r.i.StatusType.LOGIN),r.d.setInfo({id:n.data.playerId})}),r.i.setErrCode(n.code,n.msg),_&&_(n)}logoutResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq};return c.a.log("RESPONSE_LogoutResponse",n),this.client.handleSuccess(n.code,()=>{r.l.authKey=void 0,r.l.playerId=void 0,r.i.setStatus(r.i.StatusType.LOGOUT),r.d.setInfo({id:void 0})}),_&&_(n)}changeUserStateResponse(e,t,_){const s=t.RspWrap1,n={code:s.errCode,msg:s.errMsg,seq:s.seq,data:t.body};return _&&_(n),this.responses.changeCustomPlayerStatusRsp(n)}};var dt=class extends We{constructor(e,t,_){super(e),this.pingTimer=new E,this.pongTimer=new E,this.currentSeq="",this.id=t,this.frameSender=_}unbindSocket(){this.stop(),super.unbindSocket()}ping(e){if(a(this.pingTimer),!r.l.authKey)return;const t=Date.now(),_=this.frameSender&&this.frameSender.roomInfo&&this.frameSender.roomInfo.routeId?this.frameSender.roomInfo.routeId:"",s={conType:this.id,routeId:_},n=this.send(s,r.e.E_CMD_HEART_BEAT_REQ,(e,_)=>this.handlePong(e,_,t),e);this.currentSeq=n,c.a.log("PING",this.id,n),i(this.pongTimer,()=>this.handlePongTimeout(n),r.j.pingTimeout)}stop(){a(this.pingTimer,this.pongTimer)}handlePong(e,t,_){if(c.a.log("Pong",this.id,t.RspWrap1,"send",e),a(this.pongTimer),!e)return this.handlePongTimeout(t.RspWrap1.seq);const s=t.RspWrap1.errCode;var n;return this.id===y.a.ConnectionType.RELAY&&s===r.c.EC_OK&&(n={type:this.id,time:Date.now()-_},tt&&(ze.a.onPingTime&&ze.a.onPingTime(n.time),Et(Xe.ping,n))),Ke(s)?(r.i.setStatus(r.i.StatusType.LOGOUT),this.client.socket.emit(f.autoAuth,{})):Be(s)&&this.client.socket.id===y.a.ConnectionType.RELAY?(r.a.setStatus(r.a.StatusType.OFFLINE),this.client.socket.emit(f.autoAuth,{})):void i(this.pingTimer,this.ping.bind(this),r.j.pingTimeout)}handlePongTimeout(e){e===this.currentSeq&&this.client.socket&&(this.client.socket.connectNewSocket(this.client.socket.url),c.a.log("Pong_Timeout",this.id))}};function lt(){return C()}const Ot=(e,t)=>_=>{if("error"!==_&&c.a.log(_,e),!_.startsWith("on")&&_.includes("Rsp")){const t=e;!function(e){tt&&_t.push(e)}({requestName:_.replace("Rsp",""),seq:t.seq,errcode:t.code})}const s=t.values();for(const t of s)t&&t[_]&&t[_].call(t,e)};class St{constructor(){this.context=null,St.instance=this,this.context=new Set}static bindResponses(e){St.instance.context.add(e)}static unbindResponses(e){St.instance.context.delete(e)}static clearResponses(){St.instance.context.clear()}onNetwork(e){Ot(e,St.instance.context)("onNetwork")}createRoomRsp(e){Ot(e,St.instance.context)("createRoomRsp")}joinRoomRsp(e){Ot(e,St.instance.context)("joinRoomRsp")}onJoinRoom(e){Ot(e,St.instance.context)("onJoinRoom")}leaveRoomRsp(e){Ot(e,St.instance.context)("leaveRoomRsp")}onLeaveRoom(e){Ot(e,St.instance.context)("onLeaveRoom")}dismissRoomRsp(e){Ot(e,St.instance.context)("dismissRoomRsp")}onDismissRoom(e){Ot(e,St.instance.context)("onDismissRoom")}changeRoomRsp(e){Ot(e,St.instance.context)("changeRoomRsp")}onChangeRoom(e){Ot(e,St.instance.context)("onChangeRoom")}removePlayerRsp(e){Ot(e,St.instance.context)("removePlayerRsp")}onRemovePlayer(e){Ot(e,St.instance.context)("onRemovePlayer")}getRoomByRoomIdRsp(e){Ot(e,St.instance.context)("getRoomByRoomIdRsp")}getRoomListRsp(e){Ot(e,St.instance.context)("getRoomListRsp")}matchPlayersSimpleRsp(e){Ot(e,St.instance.context)("matchPlayersSimpleRsp")}matchPlayersRsp(e){Ot(e,St.instance.context)("matchPlayersRsp")}matchRoomSimpleRsp(e){Ot(e,St.instance.context)("matchRoomSimpleRsp")}onMatchTimeout(e){Ot(e,St.instance.context)("onMatchTimeout")}onMatchPlayers(e){Ot(e,St.instance.context)("onMatchPlayers")}cancelPlayerMatchRsp(e){Ot(e,St.instance.context)("cancelPlayerMatchRsp")}startFrameSyncRsp(e){Ot(e,St.instance.context)("startFrameSyncRsp")}stopFrameSyncRsp(e){Ot(e,St.instance.context)("stopFrameSyncRsp")}sendFrameRsp(e){Ot(e,St.instance.context)("sendFrameRsp")}sendToClientRsp(e){Ot(e,St.instance.context)("sendToClientRsp")}onRecvFromClient(e){Ot(e,St.instance.context)("onRecvFromClient")}onRecvFromGameSvr(e){Ot(e,St.instance.context)("onRecvFromGameSvr")}onChangePlayerNetworkState(e){Ot(e,St.instance.context)("onChangePlayerNetworkState")}onRecvFrame(e){Ot(e,St.instance.context)("onRecvFrame")}requestFrameRsp(e){Ot(e,St.instance.context)("requestFrameRsp")}sendToGameSvrRsp(e){Ot(e,St.instance.context)("sendToGameSvrRsp")}changeCustomPlayerStatusRsp(e){Ot(e,St.instance.context)("changeCustomPlayerStatusRsp")}onChangeCustomPlayerStatus(e){Ot(e,St.instance.context)("onChangeCustomPlayerStatus")}onStartFrameSync(e){Ot(e,St.instance.context)("onStartFrameSync")}onStopFrameSync(e){Ot(e,St.instance.context)("onStopFrameSync")}error(e){Ot(e,St.instance.context)("error")}}let At;St.instance=null;let ut,It=null,Tt=null,pt=null,Mt=null,ht=null,mt=null,ft=null;function Nt(){var e,t,_;r.h.isUnInit()&&(pt&&Lt(),r.h.setStatus(r.h.StatusType.INITING),pt=new Ct(Pt.responses),ht=new je(Pt.responses),mt=new ct(Pt.responses),Mt=new Je(Pt.responses),ft=new Rt(Pt.responses),At=new L(y.a.ConnectionType.COMMON),ut=new L(y.a.ConnectionType.RELAY),It=new dt(Pt.responses,y.a.ConnectionType.COMMON,null),Tt=new dt(Pt.responses,y.a.ConnectionType.RELAY,ft),e=[It,pt,Mt,ht,mt,ft.netUtil1],t=[Tt,ft.netUtil2],e.forEach(e=>e.bindSocket(At)),t.forEach(e=>e.bindSocket(ut)),We.stopQueueLoop(),We.startQueueLoop(),At.url=r.j.url,At.on(f.connect,()=>{r.i.isStatus(r.i.StatusType.LOGINING)||yt.login(),At.url&&Pt.responses.onNetwork({code:r.c.EC_OK,data:{type:At.id}})}),ut.on(f.connect,()=>{ft.checkLogin(null,"connect "+!!ut.isConnect()),ut.url&&Pt.responses.onNetwork({code:r.c.EC_OK,data:{type:ut.id}}),Tt.ping()}),At.on(f.connectClose,()=>{gt(!1,{code:r.c.EC_SDK_SOCKET_CLOSE}),r.h.isInited()&&(r.i.setStatus(r.i.StatusType.LOGOUT),At.url&&Pt.responses.onNetwork({code:r.c.EC_SDK_SOCKET_CLOSE,msg:"Socket断开",seq:null}))}),ut.on(f.connectClose,()=>{r.h.isInited()&&(r.a.setStatus(r.a.StatusType.OFFLINE),ut.url&&Pt.responses.onNetwork({code:r.c.EC_SDK_SOCKET_CLOSE,msg:"Socket断开",seq:null}),Tt.stop())}),At.on(f.connectError,e=>{r.h.isInited()&&At.url&&Pt.responses.onNetwork({code:r.c.EC_SDK_SOCKET_ERROR,msg:"Socket错误",seq:null})}),ut.on(f.connectError,e=>{r.h.isInited()&&ut.url&&Pt.responses.onNetwork({code:r.c.EC_SDK_SOCKET_ERROR,msg:"Socket错误",seq:null})}),At.on(f.autoAuth,()=>{r.h.isInited()&&setTimeout(()=>{const e=r.i.isStatus(r.i.StatusType.LOGOUT);At.url&&e&&yt.login()},1e3)}),ut.on(f.autoAuth,()=>{r.h.isInited()&&setTimeout(()=>{ut.url&&r.i.isStatus(r.i.StatusType.LOGOUT)&&yt.login(),ut.url&&r.a.isOffline()&&ft.checkLogin(e=>{e.code===r.c.EC_OK&&Tt.ping()},"autoAuth")},1e3)}),At.connect("init sdk"),_=Pt.instance.onHide,lt()&&wx.onHide(_),function(e){lt()&&wx.onShow(e)}(Pt.instance.onShow))}function Lt(){var e;Pt.instance.clearResponses(),At&&At.destory(),ut&&ut.destory(),((...e)=>{e.forEach(e=>e&&e.unbindSocket())})(pt,Mt,ht,mt,ft.netUtil1,ft.netUtil2,It,Tt),e=Pt.instance.onHide,lt()&&wx.offHide(e),function(e){lt()&&wx.offShow(e)}(Pt.instance.onShow),r.h.setStatus(r.h.StatusType.UNINIT),r.i.setStatus(r.i.StatusType.LOGOUT)}const yt={login(e){const t=Object.assign({},r.k);return pt&&pt.login(t,r.k.secretKey,t=>{e&&e(t),yt.loginRsp(t)})},loginRsp(e){if(r.h.isIniting()){if(e.code!==r.c.EC_OK)return gt(!1,e);let t=5e3,_=1e4;return e.data.sdkConfig&&(e.data.sdkConfig.pingInterval&&(t=e.data.sdkConfig.pingInterval),e.data.sdkConfig.reportInterval&&(_=e.data.sdkConfig.reportInterval)),rt(r.k.openId,r.l.playerId,_),r.j.pingTimeout=t,gt(!0,{code:r.c.EC_OK}),It.ping()}e.code===r.c.EC_OK&&It.ping()},logout:()=>pt&&pt.logout({},yt.logoutRsp),logoutRsp(e){e.code===r.c.EC_OK&&It.stop()}};function gt(e,t){if(r.h.isIniting()){e&&r.h.setStatus(r.h.StatusType.INITED),!e&&r.h.setStatus(r.h.StatusType.UNINIT);let _=r.h.isInited()?r.c.EC_OK:r.c.EC_SDK_UNINIT,s=r.h.isInited()?"初始化成功":"初始化失败。请确认域名是否正确配置，以及网络是否顺畅。";!e&&t&&t.code!==r.c.EC_OK&&(_=t.code),t.code===r.c.EC_ACCESS_PLAYER_DUPLICATE_LOGIN&&(s="用户已在其他客户端登录"),Pt.instance.initRsp&&Pt.instance.initRsp({code:_,msg:s,seq:null})}}class Pt{constructor(e,t){if(this.ErrCode=Pt.ErrCode,this.ENUM=Pt.ENUM,Pt.instance instanceof Pt)return Pt.instance;Pt.instance=this,!e.openId&&(e.openId=""),e.openId=e.openId+"",Object.assign(r.k,e),Object.assign(r.j,t,{pingTimeout:r.j.pingTimeout}),r.l.gameId=r.k.gameId,c.a.log("CONSTRUCTOR",e,t)}bindResponses(e){St.bindResponses(e)}unbindResponses(e){St.unbindResponses(e)}clearResponses(){St.clearResponses()}onHide(){r.i.setStatus(r.i.StatusType.LOGOUT),r.a.setStatus(r.a.StatusType.OFFLINE),It&&It.stop(),Tt&&Tt.stop(),c.a.log("SDK_onHide")}onShow(){It&&It.stop(),Tt&&Tt.stop(),It&&It.client.socket.url&&It.ping(),Tt&&Tt.client.socket.url&&Tt.ping(),c.a.log("SDK_onShow",It.client.socket.url,Tt.client.socket.url)}getSocket(e){return e===y.a.ConnectionType.COMMON?At:e===y.a.ConnectionType.RELAY?ut:void 0}init(e){this.initRsp=(t=>{e(t)}),Nt()}initRsp(e){}uninit(){yt.logout(),r.i.setStatus(r.i.StatusType.LOGOUT),We.stopQueueLoop(),Lt()}isInited(){return r.h.isInited()}changeCustomPlayerStatus(e,t,_){const s=Object.assign({},e);return pt.changeUserState(s,_)}createRoom(e,t){return this.createTeamRoom(Object.assign({},e,{teamNumber:1}),t)}createTeamRoom(e,t){"object"!=typeof e&&(e={});let _=[],s=(e=JSON.parse(JSON.stringify(e))).maxPlayers||0,n=e.teamNumber||0;if(s%n!=0){let e="";return t&&t({seq:e,code:r.c.EC_PARAMS_INVALID,msg:"参数错误，最大玩家数无法被队伍数量整除",data:null}),e}let o=Object.assign({commonNetworkState:void 0,relayNetworkState:void 0,teamId:void 0,id:r.l.playerId},e.playerInfo);if(delete e.teamNumber,!("number"==typeof s&&"number"==typeof n&&s>=n&&n>=1)){let e="";return t&&t({seq:"",code:r.c.EC_PARAMS_INVALID,msg:"参数错误，请检查最大玩家数量和队伍数量",data:null}),e}{s=Math.floor(s),n=Math.floor(n);const e=Math.floor(s/n);for(let t=0;t<n;t++){let r={id:t+"",maxPlayers:e,minPlayers:1,name:""};!o.teamId&&(o.teamId=r.id),t===n-1&&(r.maxPlayers=s-(n-1)*e),_.push(r)}}const E=Object.assign({region:void 0,owner:void 0,playerList:void 0},e,{teamList:_,createType:r.b.CreateRoomType.COMMON_CREATE,playerInfo:o});return Mt.createRoom(E,t)}joinRoom(e,t,_){const s=Object.assign({},e,{teamId:"0",joinType:y.a.JoinRoomType.COMMON_JOIN,roomId:t,playerInfo:Object.assign({commonNetworkState:void 0,relayNetworkState:void 0,teamId:void 0,id:r.l.playerId},e.playerInfo)});return Mt.joinRoom(s,_)}joinTeamRoom(e,t,_){const s=Object.assign({},e,{joinType:y.a.JoinRoomType.COMMON_JOIN,roomId:t,playerInfo:Object.assign({commonNetworkState:void 0,relayNetworkState:void 0,teamId:void 0,id:r.l.playerId},e.playerInfo)});return Mt.joinRoom(s,_)}leaveRoom(e){return Mt.leaveRoom({},e)}dismissRoom(e,t,_){return Mt.dismissRoom({},_)}changeRoom(e,t){return Mt.changeRoom(e,t)}removePlayer(e,t){const _=Object.assign({},e);return Mt.removeUser(_,t)}getRoomByRoomId(e,t){const _=Object.assign({},e);return Mt.getRoomByRoomId(_,t)}getRoomList(e,t){const _=Object.assign({},e,{gameId:r.k.gameId});return Mt.getRoomList(_,t)}matchPlayers(e,t){const _=Object.assign({},e,{playerInfo:Object.assign({matchStatus:void 0,id:r.l.playerId,teamId:"",region:"",teamLeader:""},e.playerInfo)});return ht.matchUsersComplex(_,t)}matchRoom(e,t){const _=Object.assign({},e,{playerInfo:Object.assign({commonNetworkState:void 0,relayNetworkState:void 0,teamId:void 0,id:r.l.playerId},e.playerInfo)});return ht.matchRoom(_,t)}cancelMatch(e,t){const _=Object.assign({},e);return ht.cancelMatch(_,t)}setFrameRoom(e){return!(!e||!Array.isArray(e.playerList)||e.playerList.findIndex(e=>e.id===r.l.playerId)<0)&&(ft.setFrameRoom(e),!0)}startFrameSync(e){const t=ft.roomInfo;function _(t){e&&e(t),Pt.responses.startFrameSyncRsp(t)}if(!t)return c.a.log("STARTFRAMESYNC","fail at roomInfo === null"),_({code:Pt.ErrCode.EC_SDK_NO_ROOM,msg:"无房间信息",seq:null});c.a.log("STARTFRAMESYNC",ft.roomInfo),c.a.log("STARTFRAMESYNC","socket2 isConnect",ut.isConnect(),ut.socketTask);const s=()=>{ft.checkLogin(s=>{if(s.code===r.c.EC_OK){c.a.log("STARTFRAMESYNC","start");const _={roomId:t.id,gameId:r.k.gameId};return ft.startFrameSync(_,e)}return c.a.log("STARTFRAMESYNC","fail at CheckLogin, seq=",s.seq,", code=",s.code,t),_({code:Pt.ErrCode.EC_SDK_NO_CHECK_LOGIN,msg:"CheckLogin失败, seq="+s.seq,seq:null})},"sdk startFrame")};ut.url=r.j.url+":"+r.g,ut.isConnect()?s():(ut.connect("sdk startFrameSync"),ut.eventOnceCallbacks.clear(),ut.once(f.connect,()=>{ut.eventOnceCallbacks.clear(),s()}),ut.once(f.connectClose,()=>{c.a.log("STARTFRAMESYNC","fail at SocketEventType.connectClose"),ut.eventOnceCallbacks.clear(),_({code:Pt.ErrCode.EC_SDK_SOCKET_ERROR,msg:"Socket错误",seq:null})}),ut.once(f.connectError,()=>{c.a.log("STARTFRAMESYNC","fail at SocketEventType.connectError"),ut.eventOnceCallbacks.clear(),_({code:Pt.ErrCode.EC_SDK_SOCKET_ERROR,msg:"Socket错误",seq:null})}))}stopFrameSync(e){const t={roomId:ft.roomInfo.id,gameId:r.k.gameId};ft.stopFrameSync(t,t=>{t.code===r.c.EC_OK&&e&&e(t)})}sendFrame(e,t){const _={roomId:ft.roomInfo.id,item:{playerId:r.l.playerId,data:JSON.stringify(e.data),timestamp:Date.now()}};return ft.sendFrame(_,t)}requestFrame(e,t){const _=ft.roomInfo,s=Object.assign({},e,{roomId:_.id});return ft.requestFrame(s,t)}sendToClient(e,t,_){const s=Object.assign({},e,{roomId:t});return mt.sendMessage(s,_)}sendToGameSvr(e,t,_){const s=Object.assign({},e,{playerId:r.l.playerId,roomId:t,data:JSON.stringify(e.data)});return ft.sendMessageExt(s,_)}}Pt.instance=null,Pt.responses=new St,Pt.ErrCode=r.c,Pt.ENUM=r.b;class Dt{constructor(e,t){this.frameIdFill=0,this.frameIdSent=0,this.autoReqFrameErrTimes=0,this.lastFrameTime=0,this.beginFrameId=-1,this.endFrameId=-1,this.fillCache={},this.timer=new Yt(e),this.callback=t}reset(e=0){this.timer.init(),this.frameIdSent=e,this.frameIdFill=e,this.lastFrameTime=0}send(e){let t=e.data.frame.id;if(t<=this.frameIdSent)return;e.data.frame.time=this.timer.time(t),this.frameIdSent=t,this.callback(e),!this.lastFrameTime&&(this.lastFrameTime=e.data.frame.time);const _=e.data.frame.time-this.lastFrameTime;0!==_&&ze.a.onFitFrameTime(_),Math.abs(_)>300&&this.reset(t),this.lastFrameTime=e.data.frame.time}push(e,t){let _=e.data.frame.id;1===_&&this.reset(),this.timer.push(_,Date.now());let s=this.frameIdSent,n=this.frameIdFill;return this.frameIdFill=_,r.j.isAutoRequestFrame?_<=s+1?this.send(e):(this.fillCache[_]={endFrameId:_,data:[e.data.frame]},void(_>n+1&&this.fill(n+1,_-1,t))):this.send(e)}fillSend(e){if(e<=this.frameIdSent+1&&this.fillCache[e]){let t=this.fillCache[e];delete this.fillCache[e],t.data.forEach(e=>this.send({data:{frame:e},seq:""})),this.fillSend(t.endFrameId+1)}}fill(e,t,_){_.requestFrame({beginFrameId:e,endFrameId:t},s=>{if(this.beginFrameId=e,this.endFrameId=t,s.code!==y.a.QAppProtoErrCode.EC_OK){if(this.autoReqFrameErrTimes++,this.autoReqFrameErrTimes<=5)return this.fill(e,t,_);_.onAutoRequestFrameError&&_.onAutoRequestFrameError({data:s,seq:""})}else this.beginFrameId=-1,this.endFrameId=-1,this.autoReqFrameErrTimes=0,this.fillCache[e]={endFrameId:t,data:s.data.frames.map(e=>Object.assign({},e,{roomId:_.roomInfo.id,isReplay:!0}))},this.fillSend(e)})}retryFill(e){this.beginFrameId===this.endFrameId&&this.beginFrameId<0||(this.autoReqFrameErrTimes=0,this.fill(this.beginFrameId,this.endFrameId,e))}}class Yt{constructor(e){this._a1=e,this.init()}init(){this.n=0,this.S_xi=0,this.S_yi=0,this.S_xiyi=0,this.S_xixi=0}push(e,t){this.n++,this.S_xi+=e,this.S_yi+=t,this.S_xiyi+=e*t,this.S_xixi+=e*e}a0(e){return void 0===e&&(e=this.a1()),this.S_yi/this.n-this.a1()*this.S_xi/this.n}a1(){return(this.n*this.S_xiyi-this.S_xi*this.S_yi)/(this.n*this.S_xixi-this.S_xi*this.S_xi)}ap(){let e=this.a1();return{a0:this.a0(e),a1:e}}time(e){if(0===this.n)return 0;let t=this.n>=2?this.ap():{a0:this.S_yi-this.S_xi*this._a1,a1:this._a1};return Math.round(t.a0+e*t.a1)}}class vt{constructor(e){this.frameBroadcastFrameId=0,this.room=e,this._frameBroadcast=new Dt(this.room.roomInfo.frameRate?Math.floor(1e3/this.room.roomInfo.frameRate):66,e=>{e&&e.data&&e.data.frame&&e.data.frame.items&&e.data.frame.items.forEach(e=>e.data="object"==typeof e.data?e.data:JSON.parse(e.data)),this.matchFrameBstAndInvoke("onRecvFrame",e)})}matchRoomInfo(e){return this.room.roomInfo.id===e.data.roomInfo.id}matchID(e){return this.room.roomInfo.id===e.data.roomId}invoke(e,t){this.room[e]&&this.room[e].call(this.room,t)}saveAndInvoke(e,t){this.matchRoomInfo(t)&&(this.room.roomUtil.setRoomInfo(t.data.roomInfo),this.invoke(e,t))}matchFrameBstAndInvoke(e,t,_){this.matchID({data:t.data.frame,seq:""})&&(_&&_(t),this.invoke(e,t))}matchIDAndInvoke(e,t,_){this.matchID(t)&&(_&&_(t),this.invoke(e,t))}matchRoomInfoAndInvoke(e,t,_){this.matchRoomInfo(t)&&(_&&_(t),this.invoke(e,t))}onNetwork(e){this.room.onUpdate&&this.room.onUpdate(this.room)}onJoinRoom(e){this.saveAndInvoke("onJoinRoom",e)}onLeaveRoom(e){this.saveAndInvoke("onLeaveRoom",e)}onDismissRoom(e){this.matchRoomInfoAndInvoke("onDismissRoom",e,()=>this.room.roomInfo={})}onChangeRoom(e){this.saveAndInvoke("onChangeRoom",e)}onRemovePlayer(e){this.saveAndInvoke("onRemovePlayer",e)}onRecvFromClient(e){this.matchIDAndInvoke("onRecvFromClient",e)}onRecvFromGameSvr(e){this.matchIDAndInvoke("onRecvFromGameSvr",e,null)}onMatchPlayers(e){let t;this.room.roomUtil.setRoomInfo(e.data.roomInfo),e.data.roomInfo&&e.data.roomInfo.playerList&&e.data.roomInfo.playerList.find(e=>kt.isMe(e.id))&&this.room.roomUtil.activeFrame(),e.data.matchType===y.a.MatchType.PLAYER_COMPLEX&&(t=Ft.TAG.PLAYER_COMPLEX,Ut.once(t,{code:y.a.QAppProtoErrCode.EC_OK,msg:"",seq:"",data:e.data}))}onMatchTimeout(e){let t;if(e.data.matchType!==y.a.MatchType.PLAYER_COMPLEX)return;t=Ft.TAG.PLAYER_COMPLEX;let _=e.data.errCode||y.a.QAppProtoErrCode.EC_MATCH_TIMEOUT,{errCode:s,errMsg:n}=M(_,"");Ut.once(t,{code:s,msg:n,seq:"",data:{}})}onChangePlayerNetworkState(e){this.saveAndInvoke("onChangePlayerNetworkState",e)}onChangeCustomPlayerStatus(e){this.saveAndInvoke("onChangeCustomPlayerStatus",e)}onStartFrameSync(e){this.saveAndInvoke("onStartFrameSync",e)}onStopFrameSync(e){this._frameBroadcast.reset(),this.saveAndInvoke("onStopFrameSync",e)}onRecvFrame(e){this.room.roomInfo.frameSyncState!==y.a.FrameSyncState.STOP&&this._frameBroadcast.push(e,this.room)}frameBroadcastFrameIdReset(e=0){return this._frameBroadcast.reset(e)}}class Ft{constructor(){this.callbacks={}}push(e,t){!this.callbacks[e]&&(this.callbacks[e]=[]),this.callbacks[e].push(t)}once(e,t){(this.callbacks[e]||[]).forEach(e=>e&&e(t)),this.removeCallbacksByTag(e)}removeCallbacksByTag(e){e&&this.callbacks[e]&&delete this.callbacks[e]}}Ft.TAG={PLAYER_SIMPLE:"PLAYER_SIMPLE",PLAYER_COMPLEX:"PLAYER_COMPLEX"};const Ut=new Ft;class Ht{constructor(e){this.room=e}setRoomInfo(e){!e&&(e={}),this.room.roomInfo=JSON.parse(JSON.stringify(e||{})),this.room.roomInfo.playerList=this.room.roomInfo.playerList||[],this.room.onUpdate&&this.room.onUpdate(this.room),this.room.isInRoom()&&r.d.setInfo(this.room.roomInfo.playerList.find(e=>e.id===r.l.playerId))}saveRoomInfo(e){e.code===y.a.QAppProtoErrCode.EC_OK&&(this.setRoomInfo(e.data.roomInfo),this.room.roomInfo.playerList.find(e=>kt.isMe(e.id))&&this.activeFrame())}setParam(e){this.room.roomInfo.id&&(e.roomId=this.room.roomInfo.id)}addRoomParam(){return{roomId:this.room.roomInfo.id||""}}initBroadcast(){this.room.roomBroadcast||(this.room.roomBroadcast=new vt(this.room))}activeFrame(){return Pt.instance.setFrameRoom(this.room.roomInfo)}}_.d(t,"b",function(){return Gt}),_.d(t,"a",function(){return kt});class bt{}class Gt extends bt{constructor(e){super(),this.roomUtil=new Ht(this),this.roomUtil.setRoomInfo(e||null)}static getRoomList(e,t){Pt.instance.getRoomList(e,t)}static getRoomByRoomId(e,t){Pt.instance.getRoomByRoomId(e,t)}isInRoom(){return!!this.roomInfo.playerList.find(e=>e.id===r.l.playerId)}initRoom(e){this.roomUtil.setRoomInfo(e);let t=e;t&&t.id&&t.routeId&&Array.isArray(t.playerList)&&t.playerList.find(e=>e.id&&kt.isMe(e.id))&&this.roomUtil.activeFrame()}onUpdate(e){}get networkState(){let e=!1,t=!1;const _=Pt.instance.getSocket(y.a.ConnectionType.COMMON),s=Pt.instance.getSocket(y.a.ConnectionType.RELAY);return{COMMON:e=!(!_||!_.isConnect()),RELAY:t=!(!s||!s.isConnect())}}createRoom(e,t){Pt.instance.createRoom(e,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}createTeamRoom(e,t){Pt.instance.createTeamRoom(e,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}joinRoom(e,t){Pt.instance.joinRoom(Object.assign({},e),this.roomInfo.id,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}joinTeamRoom(e,t){Pt.instance.joinTeamRoom(Object.assign({},e),this.roomInfo.id,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}leaveRoom(e,t){this.roomUtil.setParam(e),Pt.instance.leaveRoom(e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}dismissRoom(e,t){Pt.instance.dismissRoom(e,this.roomInfo.id,e=>{e.code===y.a.QAppProtoErrCode.EC_OK&&this.roomUtil.setRoomInfo(null),t&&t(e)})}changeRoom(e,t){const _={roomName:this.roomInfo.name,owner:this.roomInfo.owner,customProperties:this.roomInfo.customProperties,isPrivate:this.roomInfo.isPrivate};Pt.instance.changeRoom(Object.assign({},_,e,this.roomUtil.addRoomParam()),e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}changeCustomPlayerStatus(e,t){Pt.instance.changeCustomPlayerStatus(Object.assign({},e),this.roomInfo.id,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}removePlayer(e,t){Pt.instance.removePlayer(e,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}getRoomDetail(e){Pt.instance.getRoomByRoomId(Object.assign({},this.roomUtil.addRoomParam()),t=>{this.roomUtil.saveRoomInfo(t),e&&e(t)})}matchPlayers(e,t){let _=Ut.push(Ft.TAG.PLAYER_COMPLEX,t);const s=Object.assign(e,{flowId:_});Pt.instance.matchPlayers(s,e=>{if(e.code!==y.a.QAppProtoErrCode.EC_OK)return e.data=null,Ut.once(Ft.TAG.PLAYER_COMPLEX,e)})}matchRoom(e,t){Pt.instance.matchRoom(e,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}cancelPlayerMatch(e,t){Pt.instance.cancelMatch(e,e=>{e.code===r.c.EC_OK&&(Ut.removeCallbacksByTag(Ft.TAG.PLAYER_COMPLEX),Ut.removeCallbacksByTag(Ft.TAG.PLAYER_SIMPLE)),t&&t(e)})}startFrameSync(e,t){this.roomUtil.activeFrame(),Pt.instance.startFrameSync(t)}stopFrameSync(e,t){this.roomUtil.activeFrame(),Pt.instance.stopFrameSync(t)}sendFrame(e,t){this.roomUtil.activeFrame(),Pt.instance.sendFrame(e,t)}requestFrame(e,t){this.roomUtil.activeFrame();Pt.instance.requestFrame(e,e=>{e.data.frames.forEach(e=>{e.items.forEach(e=>{e.data="object"==typeof e.data?e.data:JSON.parse(e.data)})}),t&&t(e)})}retryAutoRequestFrame(){this.roomBroadcast._frameBroadcast.retryFill(this)}sendToClient(e,t){let _=e.recvPlayerList;e.recvType===r.b.RecvType.ROOM_ALL?_=this.roomInfo.playerList.map(e=>e.id):e.recvType===r.b.RecvType.ROOM_OTHERS&&(_=this.roomInfo.playerList.filter(e=>e.id!==r.l.playerId).map(e=>e.id));const s={recvType:void 0,recvPlayerList:_,msg:e.msg};Pt.instance.sendToClient(s,this.roomInfo.id,t)}sendToGameSvr(e,t){Pt.instance.sendToGameSvr(e,this.roomInfo.id,t)}}class kt{static isMe(e){return r.l.playerId===e}static get isInited(){return Pt.instance.isInited()}static init(e,t,_){Pt.instance=new Pt(e,t),Pt.instance.init(_)}static add(e){e.roomUtil.initBroadcast(),Pt.instance.bindResponses(e.roomBroadcast)}static remove(e){Pt.instance.unbindResponses(e.roomBroadcast)}static clear(){Pt.instance.clearResponses()}}},function(e){e.exports={nested:{lagame:{nested:{ClientSendServerReqWrap1:{fields:{version:{type:"string",id:1},appName:{type:"string",id:2},cmd:{type:"string",id:3},seq:{type:"string",id:4},clientIp:{type:"string",id:5},serviceIp:{type:"string",id:6},business:{type:"string",id:7},authKey:{type:"string",id:8},authType:{type:"uint32",id:9},authIp:{type:"string",id:10},gameId:{type:"string",id:11},uid:{type:"uint64",id:12},playerId:{type:"string",id:13},body:{type:"bytes",id:14}}},ServerSendClientBstWrap1:{fields:{version:{type:"string",id:1},appName:{type:"string",id:2},cmd:{type:"string",id:3},seq:{type:"string",id:4},clientIp:{type:"string",id:5},serviceIp:{type:"string",id:6},business:{type:"string",id:7},authKey:{type:"string",id:8},authType:{type:"uint32",id:9},authIp:{type:"string",id:10},gameId:{type:"string",id:11},uid:{type:"uint64",id:12},playerId:{type:"string",id:13},body:{type:"bytes",id:14}}},ClientSendServerRspWrap1:{fields:{seq:{type:"string",id:1},errCode:{type:"int32",id:2},errMsg:{type:"string",id:3},body:{type:"bytes",id:4}}},ClientSendServerReqWrap2:{fields:{cmd:{type:"ClientSendServerReqWrap2Cmd",id:1},body:{type:"bytes",id:2}}},ClientSendServerRspWrap2:{fields:{body:{type:"bytes",id:1}}},ConnectionType:{values:{COMMON:0,RELAY:1}},HeartBeatReq:{fields:{conType:{type:"ConnectionType",id:1},routeId:{type:"string",id:2}}},HeartBeatRsp:{fields:{}},ServerSendClientBstWrap2:{fields:{type:{type:"ServerSendClientBstWrap2Type",id:1},msg:{type:"bytes",id:2}}},NOUSEServerSendClientBstRspWrap2:{fields:{}},CheckLoginReq:{fields:{token:{type:"string",id:1},routeId:{type:"string",id:2}}},CheckLoginRsp:{fields:{}},ServerSendClientBstWrap2Type:{values:{E_PUSH_TYPE_TEST:0,E_PUSH_TYPE_RELAY:1,E_PUSH_TYPE_GAMESVR:2,E_PUSH_TYPE_JOIN_ROOM:100,E_PUSH_TYPE_LEAVE_ROOM:101,E_PUSH_TYPE_DISMISS_ROOM:102,E_PUSH_TYPE_REMOVE_PLAYER:103,E_PUSH_TYPE_MODIFY_ROOM_PROPERTY:104,E_PUSH_TYPE_NETWORK_STATE:105,E_PUSH_TYPE_ROOM_CHAT:106,E_PUSH_TYPE_PLAYER_STATE:107,E_PUSH_TYPE_START_GAME:108,E_PUSH_TYPE_STOP_GAME:109,E_PUSH_TYPE_CREATE_ROOM:110,E_PUSH_TYPE_DESTROY_ROOM:111,E_PUSH_TYPE_MATCH_SUCCESS:200,E_PUSH_TYPE_MATCH_TIMEOUT:201}},PushBodyType:{fields:{pushMsg:{type:"string",id:1}}},ClientSendServerReqWrap2Cmd:{values:{E_CMD_INVALID:0,E_CMD_HEART_BEAT_REQ:100,E_CMD_CHECK_LOGIN_REQ:101,E_CMD_LOGIN_TO_ROOM_REQ:102,E_CMD_FORWARD_TO_RELAY_REQ:103,E_CMD_LOGIN_REQ:1e3,E_CMD_LOGOUT_REQ:1001,E_CMD_AUTH_REQ:1002,E_CMD_QUERY_BY_PLAYER_ID_REQ:1003,E_CMD_QUERY_BY_GAME_ID_REQ:1004,E_CMD_GET_ROOM_DETAIL_REQ:2001,E_CMD_JOIN_ROOM_REQ:2002,E_CMD_QUIT_ROOM_REQ:2003,E_CMD_CREATE_ROOM_REQ:2004,E_CMD_DESTORY_ROOM_REQ:2005,E_CMD_REMOVE_MEMBER_REQ:2006,E_CMD_CHANGE_ROOM_PROPERTIS_REQ:2007,E_CMD_DISSMISS_ROOM_REQ:2008,E_CMD_CHANGE_PLAYER_STATE_REQ:2009,E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ:2010,E_CMD_ROOM_CHAT_REQ:2011,E_CMD_START_FRAME_SYNC_REQ:2012,E_CMD_STOP_FRAME_SYNC_REQ:2013,E_CMD_GET_ROOM_LIST_REQ:2014,E_CMD_MATCH_ROOM_SIMPLE_REQ:3001,E_CMD_MATCH_USER_SIMPLE_REQ:3002,E_CMD_MATCH_CANCEL_MATCH_REQ:3003,E_CMD_MATCH_ROOM_COMPLEX_REQ:3004,E_CMD_MATCH_PLAYER_COMPLEX_REQ:3005,E_CMD_RELAY_SEND_FRAME_REQ:4e3,E_CMD_RELAY_REQUEST_FRAME_REQ:4001,E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ:4002,E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ:4003,E_CMD_NOTIFY_JOIN_ROOM:5e3,E_CMD_NOTIFY_QUIT_ROOM:5001,E_CMD_NOTIFY_DESTORY_ROOM:5002,E_CMD_NOTIFY_NET_STATE:5003,E_CMD_NOTIFY_KICK_MEMBER:5004,E_CMD_GET_ADDR_BY_ROUTER_ID_REQ:6e3}},QAppProtoErrCode:{values:{EC_OK:0,EC_REQ_BAD_PKG:1,EC_CMD_INVALID:2,EC_PARAMS_INVALID:3,EC_INNER_ERROR:4,EC_TIME_OUT:5,EC_SERVER_BUSY:6,EC_NO_RIGHT:7,EC_ACCESS_CMD_INVALID_ERR:200,EC_ACCESS_CMD_GET_TOKEN_ERR:201,EC_ACCESS_CMD_TOKEN_PRE_EXPIRE:202,EC_ACCESS_CMD_INVALID_TOKEN:203,EC_ACCESS_PUSH_SERIALIZE_ERR:204,EC_ACCESS_LOGIN_BODY_PARSE_ERR:205,EC_ACCESS_CONN_ERR:206,EC_ACCESS_GET_RS_IP_ERR:207,EC_ACCESS_ADD_COMM_CONN_ERR:208,EC_ACCESS_ADD_HEART_CONN_ERR:209,EC_ACCESS_ADD_RELAY_CONN_ERR:210,EC_ACCESS_HEART_BODY_PARSE_ERR:211,EC_ACCESS_GET_COMM_CONNECT_ERR:212,EC_ACCESS_GET_RELAY_CONNECT_ERR:213,EC_ACCESS_ACCESS_INFO_EMPTY:214,EC_ACCESS_PLAYER_DUPLICATE_LOGIN:215,EC_PLAYER_GAME_NOT_EXIST:1e4,EC_PLAYER_SECRET_KEY_FAIL:10001,EC_PLAYER_SIGN_ERR:10002,EC_PLAYER_DUPLICATE_REQ:10003,EC_PLAYER_TIMESTAMP_INVALID:10004,EC_PLAYER_QUERY_PLAYER_FAIL:10005,EC_PLAYER_ADD_PLAYER_FAIL:10006,EC_PLAYER_QUERY_GAME_FAIL:10007,EC_PLAYER_RECORD_NUM_ERR:10008,EC_PLAYER_GET_TOKEN_FAIL:10009,EC_PLAYER_TOKEN_NOT_EXIST:10010,EC_PLAYER_TOKEN_INVALID:10011,EC_PLAYER_CLEAR_TOKEN_FAIL:10012,EC_PLAYER_LOCK_FAIL:10013,EC_PLAYER_UNLOCK_FAIL:10014,EC_PLAYER_SAVE_TOKEN_FAIL:10015,EC_ROOM_CREATE_NO_PERMISSION:2e4,EC_ROOM_DESTORY_NO_PERMISSION:20001,EC_ROOM_JOIN_NO_PERMISSION:20002,EC_ROOM_REMOVE_PLAYER_NO_PERMISSION:20003,EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION:20004,EC_ROOM_DISSMISS_NO_PERMISSION:20005,EC_ROOM_REMOVE_SELF_NO_PERMISSION:20006,EC_ROOM_CHECK_LOGIN_SESSION_ERR:20007,EC_ROOM_PLAYER_ALREADY_IN_ROOM:20010,EC_ROOM_PLAYER_NOT_IN_ROOM:20011,EC_ROOM_PLAYERS_EXCEED_LIMIT:20012,EC_ROOM_JOIN_NOT_ALLOW:20013,EC_ROOM_MAX_PLAYERS_INVALID:20014,EC_ROOM_CREATE_FAIL:20015,EC_ROOM_PLAYER_OFFLINE:20016,EC_ROOM_PARAM_PAGE_INVALID:20017,EC_ROOM_GET_PLAYER_INFO_ERR:20050,EC_ROOM_GET_ROOM_INFO_ERR:20051,EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR:-20052,EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR:-20053,EC_ROOM_REDIS_UPDATE_ERR:-20054,EC_ROOM_REDIS_GET_LOCK_ERR:-20055,EC_ROOM_REDIS_CHECK_LOCK_ERR:-20056,EC_ROOM_REDIS_DEL_LOCK_ERR:-20057,EC_ROOM_QUERY_PLAYER_ERR:20060,EC_ROOM_QUERY_GAME_ERR:20061,EC_ROOM_PLAYER_INFO_NOT_EXIST:20062,EC_ROOM_GAME_INFO_NOT_EXIST:20063,EC_ROOM_HISTORY_INFO_INSERT_ERR:-20064,EC_ROOM_REGION_INFO_NOT_EXIST:20065,EC_ROOM_QUERY_REGION_ERR:20066,EC_ROOM_INFO_UNEXIST:20080,EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR:20090,EC_ROOM_INVALID_PARAMS_TEAM_ID:20100,EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED:20101,EC_MATCH_NO_ROOM:3e4,EC_MATCH_TIMEOUT:30001,EC_MATCH_LOGIC_ERR:30002,EC_MATCH_ERR:30010,EC_MATCH_PLAYER_IS_IN_MATCH:30011,EC_MATCH_PLAYER_NOT_IN_MATCH:30012,EC_MATCH_GET_MATCH_INFO_ERR:30013,EC_MATCH_UPDATE_MATCH_INFO_ERR:30014,EC_MATCH_CANCEL_FAILED:30015,EC_MATCH_GET_PLAYER_LIST_INFO_ERR:30016,EC_MATCH_CREATE_ROOM_ERR:30041,EC_MATCH_JOIN_ROOM_ERR:30042,EC_MATCH_QUERY_PLAYER_ERR:30100,EC_MATCH_PLAYER_INFO_NOT_EXIST:30101,EC_MATCH_QUERY_GAME_ERR:30102,EC_MATCH_GAME_INFO_NOT_EXIST:30103,EC_MATCH_QUERY_REGION_ERR:30104,EC_MATCH_REGION_INFO_NOT_EXIST:30105,EC_MATCH_TEAM_FAIL:30106,EC_MATCH_PLAY_RULE_NOT_RUNNING:30107,EC_MATCH_PLAY_ATTR_NOT_FOUND:30108,EC_MATCH_PLAY_RULE_NOT_FOUND:30109,EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND:30110,EC_MATCH_PLAY_RULE_FUNC_ERR:30111,EC_MATCH_GET_PLAYER_ATTR_FAIL:30112,EC_MATCH_GET_TEAM_ATTR_FAIL:30113,EC_MATCH_INNER_LOGIC_ERR:-30150,EC_RELAY_ALREADY_EXISTS:4e4,EC_RELAY_NOT_EXISTS:40001,EC_RELAY_DATA_EXCEED_LIMITED:40002,EC_RELAY_MEMBER_ALREADY_EXISTS:40003,EC_RELAY_MEMBER_NOT_EXISTS:40004,EC_RELAY_STATE_INVALID:40005,EC_RELAY_INVALID_FRAME_RATE:40006,EC_RELAY_SET_FRAME_RATE_FORBIDDEN:40007,EC_RELAY_NO_MEMBERS:40008,EC_RELAY_GAMESVR_SERVICE_NOT_OPEN:40009,EC_RELAY_REQ_POD_FAIL:40010,EC_RELAY_LOGIC_ERROR:40014,EC_RELAY_HKV_CACHE_ERROR:40015,EC_RELAY_REDIS_CACHE_ERROR:40016,EC_RELAY_CACHE_ERROR:40017,EC_RELAY_NOTIFY_RELAYWORKER_FAIL:40018,EC_RELAY_RESET_RELAY_ROOM_FAIL:40019,EC_RELAY_CLEAN_RELAY_ROOM_FAIL:40020,EC_RELAY_NO_PERMISSION:40100,EC_RELAY_NOTIFY_GAMESVR_FAIL:40200,EC_RELAY_FORWARD_TO_GAMESVR_FAIL:40201,EC_RELAY_FORWARD_TO_CLIENT_FAIL:40202,EC_INVALID_PARAMS:6e4,EC_INVALID_PARAMS_PLAY_MODE_VERSION:60001,EC_INVALID_PARAMS_PLAY_MODE_RULETYPE:60002,EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION:60003,EC_INVALID_PARAMS_PLAY_MODE_TEAM:60004,EC_INVALID_PARAMS_MSGQ_ENCODE:60020,EC_INVALID_PARAMS_MSGQ_DECODE:60021,EC_INVALID_PARAMS_GAME_ID:61e3,EC_INVALID_PARAMS_PLAYER_INFO:61001,EC_INVALID_PARAMS_MAX_PLAYERS:61002,EC_INVALID_PARAMS_ROOM_TYPE:61003,EC_INVALID_PARAMS_PLAYER_ID:61004,EC_INVALID_PARAMS_MATCH_TYPE:61005,EC_INVALID_PARAMS_MATCH_CODE:61006,EC_INVALID_PARAMS_OPEN_ID:61007,EC_INVALID_PARAMS_PLATFORM:61008,EC_INVALID_PARAMS_TIMESTAMP:61009,EC_INVALID_PARAMS_SIGN:61010,EC_INVALID_PARAMS_NONCE:61011,EC_INVALID_PARAMS_TOKEN:61012,EC_INVALID_PARAMS_NETWORK_STATE:61013,EC_INVALID_PARAMS_ROOM_NAME:61014,EC_INVALID_PARAMS_CREATE_ROOM_TYPE:61015,EC_INVALID_PARAMS_DEVICE_ID:61016,EC_MYSPP_SYSTEM_ERR:-1e3,EC_REDIS_KEY_NOT_EXIST:-66e3,EC_REDIS_SET_OP_ERR:-66001,EC_REDIS_GET_OP_ERR:-66002,EC_REDIS_DEL_OP_ERR:-66003,EC_REDIS_EXPIRE_OP_ERR:-66004,EC_REDIS_LOCK_OP_ERR:-66005,EC_REDIS_LOCK_ALREADY_EXIST:-66006,EC_REDIS_LIST_OP_ERR:-66020,EC_REDIS_LIST_POP_EMPTY:-66021,EC_MYSQL_NO_ROW_FOUND:-66100,EC_MYSQL_MULTI_ROW_FOUND:-66101,EC_MYSQL_INSERT_FAIL:-66102,EC_MYSQL_DELETE_FAIL:-66103,EC_MYSQL_UPDATE_FAIL:-66104,EC_MYSQL_QUERYS_FAIL:-66105,EC_PB_SERIALIZE_TO_STR_ERR:-66200,EC_PB_PARSE_FROM_STR_ERR:-66201,EC_DATA_FORMAT_ERR:-66210,EC_JSON_FORMAT_ERR:-66211,EC_JSON_PLAY_MODE_FORMAT_ERR:-66212,EC_JSON_PLAY_MODE_PARISE_ERR:-66213,EC_INVALID_PARAMS_RECORE_ID:-66601,EC_HASHID_ERR:-66700,EC_HASHID_ENCODE_ERR:-66701,EC_HASHID_DECODE_ERR:-66702,EC_CONF_ROOM_ID_BUCKET_ERR:-66801,EC_SDK_SEND_FAIL:90001,EC_SDK_UNINIT:90002,EC_SDK_RES_TIMEOUT:90003,EC_SDK_NO_LOGIN:90004,EC_SDK_NO_CHECK_LOGIN:90005,EC_SDK_SOCKET_ERROR:90006,EC_SDK_SOCKET_CLOSE:90007,EC_SDK_NO_ROOM:90008}},LoginReq:{fields:{gameId:{type:"string",id:1},openId:{type:"string",id:2},platform:{type:"uint64",id:3},channel:{type:"uint64",id:4},nonce:{type:"uint64",id:5},timestamp:{type:"uint64",id:6},sign:{type:"string",id:7},deviceId:{type:"string",id:8},mac:{type:"string",id:9},imei:{type:"string",id:10}}},LoginRsp:{fields:{token:{type:"string",id:1},playerId:{type:"string",id:2},expireTime:{type:"uint64",id:3},sdkConfig:{type:"SdkConfig",id:4}}},SdkConfig:{fields:{pingInterval:{type:"uint32",id:1},reportInterval:{type:"uint32",id:2}}},LogoutReq:{fields:{}},LogoutRsp:{fields:{}},StartFrameSyncReq:{fields:{}},StartFrameSyncRsp:{fields:{}},StopFrameSyncReq:{fields:{}},StopFrameSyncRsp:{fields:{}},FrameItem:{fields:{playerId:{type:"string",id:1},data:{type:"string",id:2},timestamp:{type:"uint64",id:3}}},SendFrameReq:{fields:{roomId:{type:"string",id:1},item:{type:"FrameItem",id:2}}},SendFrameRsp:{fields:{}},FrameExtInfo:{fields:{seed:{type:"uint64",id:1}}},Frame:{fields:{id:{type:"uint64",id:1},items:{rule:"repeated",type:"FrameItem",id:2},ext:{type:"FrameExtInfo",id:3}}},RequestFrameReq:{fields:{roomId:{type:"string",id:1},beginFrameId:{type:"uint64",id:2},endFrameId:{type:"uint64",id:3}}},RequestFrameRsp:{fields:{frames:{rule:"repeated",type:"Frame",id:1}}},NetworkState:{values:{COMMON_OFFLINE:0,COMMON_ONLINE:1,RELAY_OFFLINE:2,RELAY_ONLINE:3}},PlayerInfo:{fields:{id:{type:"string",id:1},name:{type:"string",id:2},teamId:{type:"string",id:3},customPlayerStatus:{type:"uint64",id:4},customProfile:{type:"string",id:5},commonNetworkState:{type:"NetworkState",id:6},relayNetworkState:{type:"NetworkState",id:7}}},TeamInfo:{fields:{id:{type:"string",id:1},name:{type:"string",id:2},minPlayers:{type:"uint32",id:3},maxPlayers:{type:"uint32",id:4}}},CreateRoomType:{values:{COMMON_CREATE:0,MATCH_CREATE:1}},FrameSyncState:{values:{STOP:0,START:1}},RoomInfo:{fields:{id:{type:"string",id:1},name:{type:"string",id:2},type:{type:"string",id:3},createType:{type:"CreateRoomType",id:4},maxPlayers:{type:"uint64",id:5},owner:{type:"string",id:6},isPrivate:{type:"bool",id:9},customProperties:{type:"string",id:10},playerList:{rule:"repeated",type:"PlayerInfo",id:11},teamList:{rule:"repeated",type:"TeamInfo",id:13},frameSyncState:{type:"FrameSyncState",id:14},frameRate:{type:"uint32",id:15},routeId:{type:"string",id:16},createTime:{type:"uint64",id:17},startGameTime:{type:"uint64",id:18}}},CreateRoomReq:{fields:{roomName:{type:"string",id:1},roomType:{type:"string",id:2},createType:{type:"CreateRoomType",id:3},maxPlayers:{type:"uint64",id:4},isPrivate:{type:"bool",id:7},customProperties:{type:"string",id:8},playerInfo:{type:"PlayerInfo",id:9},region:{type:"string",id:11},owner:{type:"string",id:12},playerList:{rule:"repeated",type:"PlayerInfo",id:13},teamList:{rule:"repeated",type:"TeamInfo",id:14}}},CreateRoomRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},JoinRoomType:{values:{COMMON_JOIN:0,MATCH_JOIN:1}},JoinRoomReq:{fields:{roomId:{type:"string",id:1},teamId:{type:"string",id:2},joinType:{type:"JoinRoomType",id:3},playerInfo:{type:"PlayerInfo",id:4}}},JoinRoomRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},LeaveRoomReq:{fields:{}},LeaveRoomRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},DismissRoomReq:{fields:{}},DismissRoomRsp:{fields:{}},ChangeRoomReq:{fields:{roomName:{type:"string",id:1},owner:{type:"string",id:2},isPrivate:{type:"bool",id:5},customProperties:{type:"string",id:6}}},ChangeRoomRsp:{fields:{roomInfo:{type:"RoomInfo",id:4}}},RemovePlayerReq:{fields:{removePlayerId:{type:"string",id:3}}},RemovePlayerRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},GetRoomByRoomIdReq:{fields:{roomId:{type:"string",id:1}}},GetRoomByRoomIdRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},SendToClientReq:{fields:{roomId:{type:"string",id:1},recvPlayerList:{rule:"repeated",type:"string",id:2},msg:{type:"string",id:3}}},SendToClientRsp:{fields:{}},ChangeCustomPlayerStatusReq:{fields:{customPlayerStatus:{type:"uint64",id:1}}},ChangeCustomPlayerStatusRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},ChangePlayerNetworkStateReq:{fields:{networkState:{type:"NetworkState",id:1}}},ChangePlayerNetworkStateRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},GetRoomListReq:{fields:{gameId:{type:"string",id:1},pageNo:{type:"uint32",id:2},pageSize:{type:"uint32",id:3}}},GetRoomListRsp:{fields:{gameId:{type:"string",id:1},roomList:{rule:"repeated",type:"RoomInfo",id:2},total:{type:"uint64",id:3}}},MatchRoomSimpleReq:{fields:{roomType:{type:"string",id:1},maxPlayers:{type:"uint64",id:2},playerInfo:{type:"PlayerInfo",id:3}}},MatchRoomSimpleRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},MatchRoomComplexReq:{fields:{}},MatchRoomComplexRsp:{fields:{}},MatchPlayersSimpleReq:{fields:{}},MatchPlayersSimpleRsp:{fields:{}},MatchStatus:{values:{PENDING:0,MATCHING:1,SUCCESS:3,TIMEOUT:4}},MatchAttribute:{fields:{name:{type:"string",id:1},value:{type:"int32",id:2}}},MatchPlayerInfo:{fields:{id:{type:"string",id:1},name:{type:"string",id:2},customPlayerStatus:{type:"uint64",id:3},customProfile:{type:"string",id:4},matchAttributes:{rule:"repeated",type:"MatchAttribute",id:5},matchStatus:{type:"MatchStatus",id:6},teamId:{type:"string",id:7},region:{type:"string",id:8},teamLeader:{type:"string",id:9}}},MatchTeamInfo:{fields:{teamId:{type:"string",id:1},teamName:{type:"string",id:2},teamLeader:{type:"string",id:3},members:{rule:"repeated",type:"string",id:4},matchAttributes:{rule:"repeated",type:"MatchAttribute",id:5}}},MatchPlayersReq:{fields:{matchCode:{type:"string",id:2},playerInfo:{type:"MatchPlayerInfo",id:3}}},MatchPlayersRsp:{fields:{matchCode:{type:"string",id:1}}},MatchType:{values:{ROOM_SIMPLE:1,PLAYER_COMPLEX:2}},CancelPlayerMatchReq:{fields:{matchType:{type:"MatchType",id:3}}},CancelPlayerMatchRsp:{fields:{}},CreateRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},DestroyRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},JoinRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1},joinPlayerId:{type:"string",id:2}}},LeaveRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1},leavePlayerId:{type:"string",id:2}}},RemovePlayerBst:{fields:{roomInfo:{type:"RoomInfo",id:1},removePlayerId:{type:"string",id:2}}},DismissRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},ChangeRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},RecvFromClientBst:{fields:{roomId:{type:"string",id:1},sendPlayerId:{type:"string",id:2},msg:{type:"string",id:3}}},ChangeCustomPlayerStatusBst:{fields:{changePlayerId:{type:"string",id:1},customPlayerStatus:{type:"uint64",id:2},roomInfo:{type:"RoomInfo",id:3}}},ChangePlayerNetworkStateBst:{fields:{changePlayerId:{type:"string",id:1},networkState:{type:"NetworkState",id:2},roomInfo:{type:"RoomInfo",id:3}}},MatchTimeoutBst:{fields:{matchType:{type:"MatchType",id:1},errCode:{type:"int32",id:2}}},MatchPlayersBst:{fields:{matchType:{type:"MatchType",id:1},roomInfo:{type:"RoomInfo",id:2}}},StartFrameSyncBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},StopFrameSyncBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},RecvFrameBst:{fields:{frame:{type:"Frame",id:1}}},GameSvrForwardType:{values:{E_GS_FORWARDTYPE_DEFAULT:0,E_GS_FORWARDTYPE_NOTIFY_CONNECTION:1,E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT:2,E_GS_FORWARDTYPE_NOTIFY_COM_EVENT:3,E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR:4}},GameSvrCommunication:{fields:{type:{type:"GameSvrForwardType",id:1},body:{type:"bytes",id:2}}},NotifyRelayConnectionReq:{fields:{roomId:{type:"string",id:1},ip:{type:"string",id:2},port:{type:"uint32",id:3}}},NotifyRoomEventReq:{fields:{cmd:{type:"ServerSendClientBstWrap2Type",id:1},msg:{type:"bytes",id:2}}},SendToGameSvrReq:{fields:{roomId:{type:"string",id:1},playerId:{type:"string",id:2},data:{type:"string",id:3}}},SendToGameSvrRsp:{fields:{}},RecvFromGameSvrBst:{fields:{roomId:{type:"string",id:1},playerIdList:{rule:"repeated",type:"string",id:2},data:{type:"string",id:3}}},ClientRecvFromGameSvrRsp:{fields:{}}}}}}},function(e,t,_){"use strict";let s=0,n=Math.pow(2,32)-1;const o={init(e){s=e},random(){const e=(1103515245*s+123456789)%n;return s=e,e/n}};t.a=o},function(e,t,_){"use strict";_.r(t),function(e){var s=_(9),n=_(4),o=_(3),r=_(6),E=_(11),i=_(7),a=_(2);class R{}R.Listener=s.a,R.Room=s.b,R.ENUM=n.a,R.ErrCode=o.a,R.RandomUtil=E.a,R.DebuggerLog=r.a,R.Player=i.a,R.StatCallbacks=a.a,(window||e).MGOBE=R,R.types=n.a,t.default=R}.call(this,_(13))},function(e,t){var _;_=function(){return this}();try{_=_||new Function("return this")()}catch(e){"object"==typeof window&&(_=window)}e.exports=_},function(e,t,_){var s,n,o;e.exports=(s=_(5),o=(n=s).lib.WordArray,n.enc.Base64={stringify:function(e){var t=e.words,_=e.sigBytes,s=this._map;e.clamp();for(var n=[],o=0;o<_;o+=3)for(var r=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,E=0;E<4&&o+.75*E<_;E++)n.push(s.charAt(r>>>6*(3-E)&63));var i=s.charAt(64);if(i)for(;n.length%4;)n.push(i);return n.join("")},parse:function(e){var t=e.length,_=this._map,s=this._reverseMap;if(!s){s=this._reverseMap=[];for(var n=0;n<_.length;n++)s[_.charCodeAt(n)]=n}var r=_.charAt(64);if(r){var E=e.indexOf(r);-1!==E&&(t=E)}return function(e,t,_){for(var s=[],n=0,r=0;r<t;r++)if(r%4){var E=_[e.charCodeAt(r-1)]<<r%4*2,i=_[e.charCodeAt(r)]>>>6-r%4*2;s[n>>>2]|=(E|i)<<24-n%4*8,n++}return o.create(s,n)}(e,t,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},s.enc.Base64)},function(e,t,_){var s;e.exports=(s=_(5),_(16),_(17),s.HmacSHA1)},function(e,t,_){var s,n,o,r,E,i,a,R;e.exports=(s=_(5),o=(n=s).lib,r=o.WordArray,E=o.Hasher,i=n.algo,a=[],R=i.SHA1=E.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var _=this._hash.words,s=_[0],n=_[1],o=_[2],r=_[3],E=_[4],i=0;i<80;i++){if(i<16)a[i]=0|e[t+i];else{var R=a[i-3]^a[i-8]^a[i-14]^a[i-16];a[i]=R<<1|R>>>31}var c=(s<<5|s>>>27)+E+a[i];c+=i<20?1518500249+(n&o|~n&r):i<40?1859775393+(n^o^r):i<60?(n&o|n&r|o&r)-1894007588:(n^o^r)-899497514,E=r,r=o,o=n<<30|n>>>2,n=s,s=c}_[0]=_[0]+s|0,_[1]=_[1]+n|0,_[2]=_[2]+o|0,_[3]=_[3]+r|0,_[4]=_[4]+E|0},_doFinalize:function(){var e=this._data,t=e.words,_=8*this._nDataBytes,s=8*e.sigBytes;return t[s>>>5]|=128<<24-s%32,t[14+(s+64>>>9<<4)]=Math.floor(_/4294967296),t[15+(s+64>>>9<<4)]=_,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=E.clone.call(this);return e._hash=this._hash.clone(),e}}),n.SHA1=E._createHelper(R),n.HmacSHA1=E._createHmacHelper(R),s.SHA1)},function(e,t,_){var s,n,o,r,E,i,a;e.exports=(s=_(5),o=(n=s).lib,r=o.Base,E=n.enc,i=E.Utf8,a=n.algo,void(a.HMAC=r.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=i.parse(t));var _=e.blockSize,s=4*_;t.sigBytes>s&&(t=e.finalize(t)),t.clamp();for(var n=this._oKey=t.clone(),o=this._iKey=t.clone(),r=n.words,E=o.words,a=0;a<_;a++)r[a]^=1549556828,E[a]^=909522486;n.sigBytes=o.sigBytes=s,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,_=t.finalize(e);t.reset();var s=t.finalize(this._oKey.clone().concat(_));return s}})))},function(e,t,_){var s,n,o;n=[t],void 0===(o="function"==typeof(s=function(e){"use strict";function t(e,t){for(var _=0;_<t.length;_++){var s=t[_];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var _=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",_=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n,o,r="";this.escapeRegExp=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},this.parseInt=function(e,t){return/^(-|\+)?([0-9]+|Infinity)$/.test(e)?parseInt(e,t):NaN},this.seps="cfhistuCFHISTU",this.minLength=0<parseInt(_,10)?_:0,this.salt="string"==typeof t?t:"","string"==typeof s&&(this.alphabet=s);for(var E=0;E!==this.alphabet.length;E++)-1===r.indexOf(this.alphabet.charAt(E))&&(r+=this.alphabet.charAt(E));if(this.alphabet=r,this.alphabet.length<16)throw"error: alphabet must contain at least X unique characters".replace("X",16);if(-1!==this.alphabet.search(" "))throw"error: alphabet cannot contain spaces";for(var i=0;i!==this.seps.length;i++){var a=this.alphabet.indexOf(this.seps.charAt(i));-1===a?this.seps=this.seps.substr(0,i)+" "+this.seps.substr(i+1):this.alphabet=this.alphabet.substr(0,a)+" "+this.alphabet.substr(a+1)}this.alphabet=this.alphabet.replace(/ /g,""),this.seps=this.seps.replace(/ /g,""),this.seps=this._shuffle(this.seps,this.salt),(!this.seps.length||3.5<this.alphabet.length/this.seps.length)&&(n=Math.ceil(this.alphabet.length/3.5))>this.seps.length&&(o=n-this.seps.length,this.seps+=this.alphabet.substr(0,o),this.alphabet=this.alphabet.substr(o)),this.alphabet=this._shuffle(this.alphabet,this.salt);var R=Math.ceil(this.alphabet.length/12);this.alphabet.length<3?(this.guards=this.seps.substr(0,R),this.seps=this.seps.substr(R)):(this.guards=this.alphabet.substr(0,R),this.alphabet=this.alphabet.substr(R))}var _,s;return _=e,(s=[{key:"encode",value:function(){for(var e=arguments.length,t=new Array(e),_=0;_<e;_++)t[_]=arguments[_];if(!t.length)return"";if(t[0]&&t[0].constructor===Array&&!(t=t[0]).length)return"";for(var s=0;s!==t.length;s++)if(t[s]=this.parseInt(t[s],10),!(0<=t[s]))return"";return this._encode(t)}},{key:"decode",value:function(e){return e&&e.length&&"string"==typeof e?this._decode(e,this.alphabet):[]}},{key:"encodeHex",value:function(e){if(e=e.toString(),!/^[0-9a-fA-F]+$/.test(e))return"";for(var t=e.match(/[\w\W]{1,12}/g),_=0;_!==t.length;_++)t[_]=parseInt("1"+t[_],16);return this.encode.apply(this,t)}},{key:"decodeHex",value:function(e){for(var t=[],_=this.decode(e),s=0;s!==_.length;s++)t+=_[s].toString(16).substr(1);return t}},{key:"_encode",value:function(e){for(var t,_=this.alphabet,s=0,n=0;n!==e.length;n++)s+=e[n]%(n+100);for(var o=t=_.charAt(s%_.length),r=0;r!==e.length;r++){var E=e[r],i=o+this.salt+_;_=this._shuffle(_,i.substr(0,_.length));var a=this._toAlphabet(E,_);if(t+=a,r+1<e.length){var R=(E%=a.charCodeAt(0)+r)%this.seps.length;t+=this.seps.charAt(R)}}if(t.length<this.minLength){var c=(s+t[0].charCodeAt(0))%this.guards.length,C=this.guards[c];(t=C+t).length<this.minLength&&(c=(s+t[2].charCodeAt(0))%this.guards.length,t+=C=this.guards[c])}for(var d=parseInt(_.length/2,10);t.length<this.minLength;){var l=(t=(_=this._shuffle(_,_)).substr(d)+t+_.substr(0,d)).length-this.minLength;0<l&&(t=t.substr(l/2,this.minLength))}return t}},{key:"_decode",value:function(e,t){var _=[],s=0,n=new RegExp("[".concat(this.escapeRegExp(this.guards),"]"),"g"),o=e.replace(n," "),r=o.split(" ");if(3!==r.length&&2!==r.length||(s=1),void 0!==(o=r[s])[0]){var E=o[0];o=o.substr(1),n=new RegExp("[".concat(this.escapeRegExp(this.seps),"]"),"g"),r=(o=o.replace(n," ")).split(" ");for(var i=0;i!==r.length;i++){var a=r[i],R=E+this.salt+t;t=this._shuffle(t,R.substr(0,t.length)),_.push(this._fromAlphabet(a,t))}this.encode(_)!==e&&(_=[])}return _}},{key:"_shuffle",value:function(e,t){var _;if(!t.length)return e;for(var s=(e=e.split("")).length-1,n=0,o=0,r=0;0<s;s--,n++){n%=t.length,o+=_=t.charCodeAt(n);var E=e[r=(_+n+o)%s];e[r]=e[s],e[s]=E}return e=e.join("")}},{key:"_toAlphabet",value:function(e,t){for(var _="";_=t.charAt(e%t.length)+_,e=parseInt(e/t.length,10););return _}},{key:"_fromAlphabet",value:function(e,t){return e.split("").map(function(e){return t.indexOf(e)}).reduce(function(e,_){return e*t.length+_},0)}}])&&t(_.prototype,s),e}();e.default=_})?s.apply(t,n):s)||(e.exports=o)},function(e,t,_){const s={};if("undefined"==typeof wx||wx.setStorageSync||(wx.setStorageSync=((e,t)=>s[e]=t)),"undefined"==typeof wx||wx.getStorageSync||(wx.getStorageSync=(e=>s[e]||"")),"undefined"==typeof wx||wx.getSystemInfoSync||(wx.getSystemInfoSync=(()=>({}))),"undefined"==typeof wx||wx.getNetworkType||(wx.getNetworkType=(({success:e})=>e&&e({}))),void 0===n)var n=()=>[{__route__:""}];function o(){return(new Date).getTime()}function r(e){return(1e6*new Date+Math.floor(1e6*Math.random())).toString(e)||""}function E(){C.conf.getLocation&&wx.getLocation({type:C.conf.locationType||"wgs84",success:function(e){wx.setStorageSync(C.prefix+C.lt,JSON.stringify(e))}})}function i(){C.conf.getUserInfo&&wx.getUserInfo({withCredentials:!1,success:function(e){var t=e.userInfo;t.nickName=encodeURIComponent(t.nickName),wx.setStorageSync(C.prefix+C.ui,JSON.stringify(t)),console.log("userInfo---\x3e"+JSON.stringify(e.userInfo))},fail:function(e){console.log("userInfo fail---\x3e"+e)}})}function a(){null!=C.conf.channelId&&""!=C.conf.channelId||null==C.options||void 0===C.options.query||!C.options.query.hasOwnProperty("bea_channel_id")||(C.conf.channelId=C.options.query.bea_channel_id),C.serverUrl="https://"+(C.conf.isDebug?"jrlts":"report")+".wxlagame.com/analytics/upload?tp=weapp",E(),i(),wx.getNetworkType({success:function(e){wx.setStorageSync(C.prefix+C.nt,e.networkType)}}),C.opid=wx.getStorageSync(C.prefix+C.oik),C.unid=wx.getStorageSync(C.prefix+C.uik)}function R(e,t,_,s){(!t||void 0===t||0>=t)&&(t=(new Date).getTime());var o=n(),r=0,E=[];o&&o.length>0&&(r=0===_?0:t-_,E=[{name:o.pop().__route__,start:t,duration:r,refer:""}]),c(e,t,r,E,s)}function c(e,t,_,s,n,o,E){(!t||void 0===t||0>=t)&&(t=(new Date).getTime());var i=[{type:2,data:{id:r(32),start:t,status:e,duration:_||0,pages:s||[],events:n||[]}}],a=wx.getSystemInfoSync(),R=function(){var e=wx.getStorageSync(C.prefix+C.u);return""==e&&(e=r(36),wx.setStorageSync(C.prefix+C.u,e)),e}();o&&void 0!==o&&""!=o||C.options&&(o=C.options.scene);var c={deviceId:R,appkey:C.conf.appKey,versionCode:C.conf.version,initTime:t,scene:o,channelID:C.conf.channelId,sdkVersion:C.sdkVersion,pixel:a.screenWidth+"*"+a.screenHeight+"*"+a.pixelRatio,language:a.language,model:encodeURIComponent(a.model),wxVersion:a.version,networkType:wx.getStorageSync(C.prefix+C.nt)||"4g",system:encodeURIComponent(a.system),platform:encodeURIComponent(a.platform),windowArea:a.windowWidth+"*"+a.windowHeight+"*"+a.pixelRatio,query:JSON.stringify(C.options),opid:C.opid,unid:C.unid,userInfo:C.conf.getUserInfo&&wx.getStorageSync(C.prefix+C.ui)||"",location:C.conf.getLocation&&wx.getStorageSync(C.prefix+C.lt)||"",msgs:i};wx.request({url:C.serverUrl,data:c,method:"POST",success:()=>E&&E(!0),fail:()=>E&&E(!1)})}var C={options:null,serverUrl:null,opid:null,unid:null,conf:_(20),prefix:"beacon_",sdkVersion:"weapp_v1.0.7",u:"u",ui:"ui",lt:"lt",nt:"nt",oik:"oik",uik:"uik",atl:0,ats:0,ptl:0,pts:0,appLaunch:function(){arguments.length>0&&null!=arguments[0]&&(C.options=arguments[0]),C.conf.beforeLoad(C.options),C.conf.appKey&&void 0!==C.conf.appKey&&C.conf.appKey.length>0&&C.conf.version&&void 0!==C.conf.version&&C.conf.version.length>0?(a(),this.atl=o(),R(1,this.atl,0,[])):console.log("beacon_error:init data invalid")},appShow:function(){arguments.length>0&&null!=arguments[0]&&(C.options=arguments[0]),a(),this.ats=o()},appHide:function(){},pageLoad:function(){var e,t=n().pop();this.ptl=o(),R(5,this.ptl,0,[]),C.conf.onPullDownRefresh&&(e=t.onPullDownRefresh,t.onPullDownRefresh=function(){C.onEvent("beacon_pulldownrefresh"),e.call(this,arguments)}),C.conf.onReachBottom&&function(){var e=t.onReachBottom;t.onReachBottom=function(){C.onEvent("beacon_reachbottom"),e.call(this,arguments)}}()},pageUnload:function(){R(6,0,this.ptl,[])},pageShow:function(){this.pts=o(),R(2,this.pts,0,[])},pageHide:function(){R(4,0,this.pts,[])},onEvent:function(e,t,_){var s=(new Date).getTime();c(4,s,0,[],[{weappPageName:n().pop().__route__,count:1,start:s,name:e,params:t||{}}],null,_)},setAppKey:function(e){C.conf.appKey=e},setChannelId:function(e){C.conf.channelId=e},setOpenid:function(e){e&&e.length>0&&(C.opid=e,wx.setStorageSync(C.prefix+C.oik,e))},setUnionid:function(e){e&&e.length>0&&(C.unid=e,wx.setStorageSync(C.prefix+C.uik,e))},setGetLocation:function(e){C.conf.getLocation=!0===e,!0===e&&E()},setGetUserInfo:function(e){C.conf.getUserInfo=!0===e,!0===e&&i()}};e.exports=C},function(e,t){e.exports={appKey:"MA0NCELB39H5S6",version:"1.0.0",channelId:"",getLocation:!1,getUserInfo:!1,onPullDownRefresh:!1,onReachBottom:!1,isDebug:!1,beforeLoad:()=>{}}}]).default});
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var Answer_1 = require("./script/scene/Answer");
var QueRuntime_1 = require("./script/runtime/QueRuntime");
var QueDialogUpdate_1 = require("./script/ui/QueDialogUpdate");
var GradeRuntime_1 = require("./script/runtime/GradeRuntime");
var GradeUpdate_1 = require("./script/ui/GradeUpdate");
var TimerRuntime_1 = require("./script/runtime/TimerRuntime");
var TimerUpdate_1 = require("./script/ui/TimerUpdate");
var AnsRuntime_1 = require("./script/runtime/AnsRuntime");
var CircleSpriteRuntime_1 = require("./script/runtime/CircleSpriteRuntime");
var AnsUpdate_1 = require("./script/ui/AnsUpdate");
var AnsHeadRuntime_1 = require("./script/runtime/AnsHeadRuntime");
var AnsHeadUpdate_1 = require("./script/ui/AnsHeadUpdate");
var Auth_1 = require("./script/scene/Auth");
var Finish_1 = require("./script/scene/Finish");
var Main_1 = require("./script/scene/Main");
var MatchRoom_1 = require("./script/scene/MatchRoom");
var LabelRuntime_1 = require("./script/runtime/LabelRuntime");
var VSRoom_1 = require("./script/scene/VSRoom");
var DialogRuntime_1 = require("./script/runtime/DialogRuntime");
var DialogUpdate_1 = require("./script/ui/DialogUpdate");
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
        reg("script/scene/Answer.ts", Answer_1.default);
        reg("script/runtime/QueRuntime.ts", QueRuntime_1.default);
        reg("script/ui/QueDialogUpdate.ts", QueDialogUpdate_1.default);
        reg("script/runtime/GradeRuntime.ts", GradeRuntime_1.default);
        reg("script/ui/GradeUpdate.ts", GradeUpdate_1.default);
        reg("script/runtime/TimerRuntime.ts", TimerRuntime_1.default);
        reg("script/ui/TimerUpdate.ts", TimerUpdate_1.default);
        reg("script/runtime/AnsRuntime.ts", AnsRuntime_1.default);
        reg("script/runtime/CircleSpriteRuntime.ts", CircleSpriteRuntime_1.default);
        reg("script/ui/AnsUpdate.ts", AnsUpdate_1.default);
        reg("script/runtime/AnsHeadRuntime.ts", AnsHeadRuntime_1.default);
        reg("script/ui/AnsHeadUpdate.ts", AnsHeadUpdate_1.default);
        reg("script/scene/Auth.ts", Auth_1.default);
        reg("script/scene/Finish.ts", Finish_1.default);
        reg("script/scene/Main.ts", Main_1.default);
        reg("script/scene/MatchRoom.ts", MatchRoom_1.default);
        reg("script/runtime/LabelRuntime.ts", LabelRuntime_1.default);
        reg("script/scene/VSRoom.ts", VSRoom_1.default);
        reg("script/runtime/DialogRuntime.ts", DialogRuntime_1.default);
        reg("script/ui/DialogUpdate.ts", DialogUpdate_1.default);
    };
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "VSRoom.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();

},{"./script/runtime/AnsHeadRuntime":6,"./script/runtime/AnsRuntime":7,"./script/runtime/CircleSpriteRuntime":8,"./script/runtime/DialogRuntime":9,"./script/runtime/GradeRuntime":10,"./script/runtime/LabelRuntime":11,"./script/runtime/QueRuntime":12,"./script/runtime/TimerRuntime":13,"./script/scene/Answer":14,"./script/scene/Auth":15,"./script/scene/Finish":17,"./script/scene/Main":18,"./script/scene/MatchRoom":19,"./script/scene/VSRoom":20,"./script/ui/AnsHeadUpdate":21,"./script/ui/AnsUpdate":22,"./script/ui/DialogUpdate":23,"./script/ui/GradeUpdate":24,"./script/ui/QueDialogUpdate":25,"./script/ui/TimerUpdate":26}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var width = 750;
var height = 1334;
var Main = /** @class */ (function () {
    function Main() {
        //根据IDE设置初始化引擎		
        Laya.init(width, height, Laya.WebGL);
        // Laya["Physics"] && Laya["Physics"].enable();
        // Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = GameConfig_1.default.scaleMode;
        Laya.stage.screenMode = GameConfig_1.default.screenMode;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        // if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
        // if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
        // if (GameConfig.stat) Laya.Stat.show();
        // Laya.alertGlobalError = true;
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    Main.prototype.onVersionLoaded = function () {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        //加载IDE指定的场景
        //GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        Laya.Scene.open("AuthScene.scene");
    };
    return Main;
}());
//激活启动类
new Main();
//设置适配模式
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
;
//设置水平对齐
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
//设置垂直对齐
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
// 游戏界面全部都是一个背景色
Laya.stage.bgColor = "#85caff";
// Laya.Stat.show();
// Laya.stage.frameRate = "slow";

},{"./GameConfig":2}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global = /** @class */ (function () {
    function Global() {
        this.gameState = null;
        // 匹配Code
        this.matchCodes = null;
        // 当前使用的匹配模式
        this.matchMode = 1;
        // 我方成员
        this.myGroup = [];
        // 敌方成员
        this.enemyGroup = [];
        // 全部玩家
        this.playsers = [];
    }
    return Global;
}());
var global = new Global();
exports.default = global;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("./Global");
var GAME_INFO_TAG = "__gameInfo__";
function getGameInfoFromStorage() {
    var res;
    try {
        var value = wx.getStorageSync(GAME_INFO_TAG);
        if (value) {
            res = JSON.parse(value);
        }
    }
    catch (e) {
    }
    return res;
}
exports.getGameInfoFromStorage = getGameInfoFromStorage;
function setGameInfoToStorage(gameInfo) {
    try {
        var str = gameInfo ? JSON.stringify(gameInfo) : "";
        wx.setStorageSync(GAME_INFO_TAG, str);
    }
    catch (e) { }
}
exports.setGameInfoToStorage = setGameInfoToStorage;
function modeViewFilter(items) {
    var matchMode = Global_1.default.matchMode;
    return items.slice(0, matchMode);
}
exports.modeViewFilter = modeViewFilter;
function modeViewXYAdjust(items, opitem, isXYAjust) {
    var matchMode = Global_1.default.matchMode;
    if (matchMode === 1) {
        opitem(items[0]).x = opitem(items[1]).x;
        opitem(items[0]).y = opitem(items[1]).y;
        items.slice(1).forEach(function (item) { return opitem(item).visible = false; });
    }
    else if (matchMode === 2) {
        if (isXYAjust) {
            var defX = Math.round((opitem(items[1]).x - opitem(items[0]).x) / 2);
            var defY = Math.round((opitem(items[1]).y - opitem(items[0]).y) / 2);
            opitem(items[0]).x += defX;
            opitem(items[0]).y += defY;
            opitem(items[1]).x += defX;
            opitem(items[1]).y += defY;
        }
        items.slice(2).forEach(function (item) { return opitem(item).visible = false; });
    }
}
exports.modeViewXYAdjust = modeViewXYAdjust;

},{"./Global":4}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnsHeadRuntime = /** @class */ (function (_super) {
    __extends(AnsHeadRuntime, _super);
    function AnsHeadRuntime() {
        var _this = _super.call(this) || this;
        _this.updater = null;
        _this.isShowResult = false;
        _this.playerId = "";
        _this.headUrl = "";
        _this.score = 0;
        _this.result = false;
        _this.hasPrize = false;
        _this.isCrown = false;
        return _this;
    }
    AnsHeadRuntime.prototype.init = function (updater) {
        this.updater = updater;
        var arrow = this.updater.arrow;
        arrow.visible = !!(this.playerId === MGOBE.Player.id);
        this.updater.crown.visible = false;
    };
    AnsHeadRuntime.prototype.showResult = function (_playerId, _score, _result, _hasPrize) {
        this.isShowResult = true;
        this.playerId = _playerId;
        this.score = _score;
        this.result = _result;
        this.hasPrize = _hasPrize;
        if (!this.updater) {
            return;
        }
        var prize = this.updater.prize;
        var layer = this.updater.layer;
        var result = this.updater.result;
        var score = this.updater.score;
        prize.visible = !!_hasPrize;
        layer.visible = true;
        result.loadImage(this.result ? "image/zhen-que.png" : "image/cuo-wu.png");
        result.visible = true;
        score.text = this.score + "";
        score.pivot(score.width / 2, 0).pos(this.width / 2, score.y);
        score.visible = true;
    };
    AnsHeadRuntime.prototype.hideResult = function () {
        this.isShowResult = false;
        var prize = this.updater.prize;
        var layer = this.updater.layer;
        var result = this.updater.result;
        var score = this.updater.score;
        prize.visible = false;
        layer.visible = false;
        result.visible = false;
        score.visible = false;
    };
    AnsHeadRuntime.prototype.loadHeadImage = function (url) {
        this.headUrl = url;
        if (!this.updater) {
            return;
        }
        this.updater.head.loadImage(this.headUrl);
    };
    AnsHeadRuntime.prototype.showCrown = function () {
        this.isCrown = true;
        if (!this.updater) {
            return;
        }
        this.updater.crown.visible = true;
    };
    AnsHeadRuntime.prototype.hideCrown = function () {
        this.isCrown = false;
        if (!this.updater) {
            return;
        }
        this.updater.crown.visible = false;
    };
    return AnsHeadRuntime;
}(Laya.Box));
exports.default = AnsHeadRuntime;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("../Util");
var IMG_TAG = "__IMG__";
var AnsRuntime = /** @class */ (function (_super) {
    __extends(AnsRuntime, _super);
    function AnsRuntime() {
        var _this = _super.call(this) || this;
        _this.updater = null;
        _this.green = "image/xuan-xiang1.png";
        _this.red = "image/xuan-xiang2.png";
        _this.blue = "image/xuan-xiang3.png";
        _this.white = "image/xuan-xiang4.png";
        _this.a1 = "";
        _this.a2 = "";
        _this.a3 = "";
        _this.a4 = "";
        _this.answers = null;
        _this.aniTime = 0;
        _this._urls = [];
        _this.onSelect = null;
        return _this;
    }
    AnsRuntime.prototype.init = function (updater) {
        this.visible = false;
        this.updater = updater;
    };
    AnsRuntime.prototype.showAnswers = function (a1, a2, a3, a4) {
        var _this = this;
        var a = [
            this.a1 = a1,
            this.a2 = a2,
            this.a3 = a3,
            this.a4 = a4
        ];
        this.visible = true;
        var aLabel = [
            this.updater.a1,
            this.updater.a2,
            this.updater.a3,
            this.updater.a4
        ];
        var aParent = aLabel.map(function (x) { return x.parent; });
        if (!this.updater) {
            return;
        }
        aLabel.forEach(function (aiLabel, idx) { return aiLabel.text = a[idx]; });
        aLabel.forEach(function (aiLabel, idx) { return aiLabel.pivot(aiLabel.width / 2, aiLabel.height / 2).pos(aParent[idx].width / 2, aParent[idx].height / 2); });
        aParent.forEach(function (parent, index) {
            parent[IMG_TAG] = _this.white;
            parent.loadImage(_this.white);
            aLabel[index].color = "#133ce2";
            parent.offAll();
            parent.on(Laya.Event.CLICK, _this, function () {
                _this.onSelect && _this.onSelect(index);
            });
            parent.on(Laya.Event.MOUSE_DOWN, _this, function () {
                parent.loadImage(_this.blue);
                aLabel[index].color = "#ffffff";
            });
            parent.on(Laya.Event.CLICK, _this, function () {
                parent.loadImage(parent[IMG_TAG]);
                if (parent[IMG_TAG] === _this.white) {
                    aLabel[index].color = "#133ce2";
                }
                else {
                    aLabel[index].color = "#ffffff";
                }
            });
        });
    };
    AnsRuntime.prototype.hide = function () {
        this.visible = false;
    };
    AnsRuntime.prototype.setHeadImages = function (urls) {
        this._urls = urls;
        if (!this.updater || !this._heads.length) {
            return;
        }
        this.loagHeadImage();
    };
    AnsRuntime.prototype.loagHeadImage = function () {
        var _this = this;
        if (this._urls.length && this._heads.length) {
            var heads = this._heads.map(function (x) { return Util_1.modeViewFilter(x); });
            [this._urls.slice(0, heads[0].length), this._urls.slice(heads[0].length, heads[0].length + this._heads[1].length)].forEach(function (urls, idx0) {
                urls.forEach(function (url, idx1) {
                    url && _this._heads[idx0][idx1].loadImage(url);
                });
            });
        }
    };
    AnsRuntime.prototype.showPlayersAnswer = function (answers, myAnswer, rightAnswer, isEnd) {
        if (isEnd === void 0) { isEnd = false; }
        this.answers = answers;
        if (!this.updater) {
            return;
        }
        this.hidePlayersAnswer();
        var redAnsCounter = [0, 0, 0, 0];
        var blueAnsCounter = [0, 0, 0, 0];
        var heads = [
            Util_1.modeViewFilter([
                this.updater.h1,
                this.updater.h2,
                this.updater.h3
            ]),
            Util_1.modeViewFilter([
                this.updater.h4,
                this.updater.h5,
                this.updater.h6
            ])
        ];
        var ansBoxs = [
            this.updater.a1,
            this.updater.a2,
            this.updater.a3,
            this.updater.a4,
        ];
        function showHeads(heads, answers, direction) {
            var counter = ansBoxs.map(function (x) { return 0; });
            heads.forEach(function (head, idx) {
                var answer = answers[idx];
                if (answer < 0 || answer >= ansBoxs.length) {
                    head.visible = false;
                    return;
                }
                var num = ++counter[answer];
                var ansBox = ansBoxs[answer].parent;
                var aw2 = ansBox.width / 2;
                var ah2 = ansBox.height / 2;
                var hw2 = head.width / 2;
                var hh2 = head.height / 2;
                var hw3 = head.width / 3;
                var centerX = ansBox.x + aw2;
                var defx = (aw2 + hw2 + hw3 * num) * direction;
                head.x = centerX - hw2 + defx;
                head.y = ansBox.y + ah2 - hh2;
                head.visible = true;
            });
        }
        showHeads(heads[0], answers.slice(0, heads[0].length), -1);
        showHeads(heads[1], answers.slice(heads[0].length, heads[0].length + heads[1].length), 1);
        if (myAnswer >= 0 && ansBoxs[myAnswer]) {
            var sp = ansBoxs[myAnswer].parent;
            if (myAnswer === rightAnswer) {
                sp.loadImage(this.green);
                sp[IMG_TAG] = this.green;
            }
            else {
                sp.loadImage(this.red);
                sp[IMG_TAG] = this.red;
            }
            ansBoxs[myAnswer].color = "#ffffff";
        }
        if (isEnd && rightAnswer >= 0 && ansBoxs[rightAnswer]) {
            var sp = ansBoxs[rightAnswer].parent;
            sp.loadImage(this.green);
            sp[IMG_TAG] = this.green;
            ansBoxs[rightAnswer].color = "#ffffff";
        }
    };
    AnsRuntime.prototype.hidePlayersAnswer = function () {
        this.updater.h1.visible = false;
        this.updater.h2.visible = false;
        this.updater.h3.visible = false;
        this.updater.h4.visible = false;
        this.updater.h5.visible = false;
        this.updater.h6.visible = false;
        this.answers = null;
    };
    AnsRuntime.prototype.aniShow = function (callback) {
        var ansBoxs = [
            this.updater.a1,
            this.updater.a2,
            this.updater.a3,
            this.updater.a4,
        ];
        this.aniTime = Date.now();
        ansBoxs.forEach(function (ans) {
            ans.parent["visible"] = false;
        });
        setTimeout(function () {
            callback();
            ansBoxs.forEach(function (ans, i) { return ans.parent["visible"] = true; });
        }, 1000);
    };
    return AnsRuntime;
}(Laya.Dialog));
exports.default = AnsRuntime;

},{"../Util":5}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CircleSpriteRuntime = /** @class */ (function (_super) {
    __extends(CircleSpriteRuntime, _super);
    function CircleSpriteRuntime() {
        var _this = _super.call(this) || this;
        _this.url = "";
        return _this;
    }
    CircleSpriteRuntime.prototype.loadImage = function (url, complete) {
        if (!this) {
            return;
        }
        var superLoad = _super.prototype.loadImage.bind(this);
        if (!this.__width || !this.__height || !this.__scaleX || !this.__scaleY) {
            this.__width = this.width;
            this.__height = this.height;
            try {
                this.__scaleX = this.scaleX;
                this.__scaleY = this.scaleY;
            }
            catch (e) { }
        }
        return superLoad(url, new Laya.Handler(this, function callback() {
            if (!this) {
                return;
            }
            this.width = this.__width;
            this.height = this.__height;
            try {
                this.scaleX = this.__scaleX;
                this.scaleY = this.__scaleY;
                this.removeChildren();
                this.mask = null;
            }
            catch (e) { }
            var mask = new Laya.Sprite();
            mask.width = this.__width;
            mask.height = this.__height;
            var radius = mask.height > mask.width ? mask.width / 2 : mask.height / 2;
            mask.graphics.drawCircle(mask.width / 2, mask.height / 2, radius, "white");
            this.addChild(mask);
            var sp = new Laya.Sprite();
            url && sp.loadImage(url, new Laya.Handler(this, function callback() {
                sp.width = this.__width;
                sp.height = this.__height;
            }));
            this.addChild(sp);
            try {
                this.mask = mask;
            }
            catch (e) { }
            complete && complete.run();
            this.url = url;
        }));
    };
    return CircleSpriteRuntime;
}(Laya.Sprite));
exports.default = CircleSpriteRuntime;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DialogRuntime = /** @class */ (function (_super) {
    __extends(DialogRuntime, _super);
    function DialogRuntime() {
        var _this = _super.call(this) || this;
        _this.updater = null;
        _this.initContentHeight = 0;
        _this.initHeight = 0;
        _this.confirmCallback = function () { return null; };
        _this.cancelCallback = function () { return null; };
        return _this;
    }
    DialogRuntime.prototype.init = function (updater) {
        var _this = this;
        this.updater = updater;
        this.updater.contentLabel.editable = false;
        this.updater.contentLabel.disabled = true;
        this.initContentHeight = this.updater.labelBox.height;
        this.initHeight = this.height;
        this.updater.confirmBth.offAll();
        this.updater.confirmBth.on(Laya.Event.CLICK, this, function () {
            console.log("confirm");
            _this.close();
        });
        this.updater.cancelBth.offAll();
        this.updater.cancelBth.on(Laya.Event.CLICK, this, function () {
            console.log("cancel");
            _this.close();
        });
    };
    DialogRuntime.prototype.show = function (closeOther, showEffect) {
        _super.prototype.show.call(this, closeOther, showEffect);
        this.resetBtns();
        this.zOrder = 1000000;
        this.visible = true;
    };
    DialogRuntime.prototype.popup = function (closeOther, showEffect) {
        _super.prototype.popup.call(this, closeOther, showEffect);
        this.resetBtns();
    };
    DialogRuntime.prototype.setTitle = function (title) {
        var label = this.updater.titleLabel;
        label.text = title + "";
        label.pivot(label.width / 2, 0).pos(this.width / 2, 10);
    };
    DialogRuntime.prototype.setContent = function (content) {
        var label = this.updater.contentLabel;
        var box = this.updater.labelBox;
        label.text = content + "";
        var input = label._children[0];
        if (input.textHeight > box.height) {
            box.height = input.textHeight + 60;
            label.height = box.height;
        }
        if (input.textHeight < this.initContentHeight) {
            box.height = this.initContentHeight;
            label.height = box.height;
            this.height = this.initHeight;
            this.updater.bgSprite.height = this.height;
        }
        if (box.height - this.initContentHeight > 0) {
            this.height += box.height - this.initContentHeight;
            this.updater.bgSprite.height = this.height;
        }
        this.resetBtns();
    };
    DialogRuntime.prototype.resetBtns = function () {
        var confirmBth = this.updater.confirmBth;
        var cancelBth = this.updater.cancelBth;
        var confirmLabel = this.updater.confirmLabel;
        var cancelLabel = this.updater.cancelLabel;
        confirmBth.x = this.width - confirmBth.width;
        confirmBth.y = this.height - confirmBth.height;
        cancelBth.x = 0;
        cancelBth.y = this.height - cancelBth.height;
        confirmLabel.pivot(confirmLabel.width / 2, confirmLabel.height / 2).pos(confirmBth.x + confirmBth.width / 2, confirmBth.y + confirmBth.height / 2);
        cancelLabel.pivot(cancelLabel.width / 2, cancelLabel.height / 2).pos(cancelBth.x + cancelBth.width / 2, cancelBth.y + cancelBth.height / 2);
    };
    DialogRuntime.prototype.setConfirm = function (text, callback) {
        var _this = this;
        var confirmBth = this.updater.confirmBth;
        var confirmLabel = this.updater.confirmLabel;
        confirmLabel.text = text;
        this.resetBtns();
        confirmBth.offAll();
        confirmBth.on(Laya.Event.CLICK, this, function () {
            console.log("dialog confirm");
            _this.visible && callback && setTimeout(callback);
            _this.visible = false;
        });
    };
    DialogRuntime.prototype.setCancel = function (text, callback) {
        var _this = this;
        var cancelBth = this.updater.cancelBth;
        var cancelLabel = this.updater.cancelLabel;
        cancelLabel.text = text;
        this.resetBtns();
        cancelBth.offAll();
        cancelBth.on(Laya.Event.CLICK, this, function () {
            console.log("dialog cancel");
            _this.visible && callback && setTimeout(callback);
            _this.visible = false;
        });
    };
    DialogRuntime.prototype.showDialog = function (title, content, confirm, cancel) {
        var _this = this;
        this.setTitle(title);
        this.setContent(content);
        var comfirmCallback = confirm ? (confirm.confirmCallback || (function () { return _this.close(); })) : (function () { return _this.close(); });
        var cancelCallback = cancel ? (cancel.cancelCallback || (function () { return _this.close(); })) : (function () { return _this.close(); });
        confirm && this.setConfirm(confirm.confirmText || "确定", comfirmCallback);
        cancel && this.setCancel(cancel.cancelText || "取消", cancelCallback);
        !confirm && this.setConfirm("确定", comfirmCallback);
        !cancel && this.setCancel("取消", cancelCallback);
        this.show();
    };
    return DialogRuntime;
}(Laya.Dialog));
exports.default = DialogRuntime;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GradeRuntime = /** @class */ (function (_super) {
    __extends(GradeRuntime, _super);
    function GradeRuntime() {
        var _this = _super.call(this) || this;
        _this.updater = null;
        _this.red = 0;
        _this.blue = 0;
        return _this;
    }
    GradeRuntime.prototype.init = function (updater) {
        this.updater = updater;
    };
    GradeRuntime.prototype.setGrades = function (red, blue) {
        if (typeof red === "number" && typeof blue === "number") {
            this.red = red;
            this.blue = blue;
        }
        if (!this.updater) {
            return;
        }
        var labelRed = this.updater.labelRed;
        var labelBlue = this.updater.labelBlue;
        var labelRedBox = this.updater.labelRedBox;
        var labelBlueBox = this.updater.labelBlueBox;
        labelRed.text = red + "";
        labelBlue.text = blue + "";
        labelRed.pivot(labelRed.width / 2, labelRed.height / 2).pos(labelRedBox.width / 2, labelRedBox.height / 2);
        labelBlue.pivot(labelBlue.width / 2, labelBlue.height / 2).pos(labelBlueBox.width / 2, labelBlueBox.height / 2);
    };
    return GradeRuntime;
}(Laya.Label));
exports.default = GradeRuntime;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LabelRuntime = /** @class */ (function (_super) {
    __extends(LabelRuntime, _super);
    function LabelRuntime() {
        return _super.call(this) || this;
    }
    return LabelRuntime;
}(Laya.Label));
exports.default = LabelRuntime;

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueRuntime = /** @class */ (function (_super) {
    __extends(QueRuntime, _super);
    function QueRuntime() {
        var _this = _super.call(this) || this;
        _this.updater = null;
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.title = "";
        _this.type = "";
        _this.que = "";
        _this.double = false;
        return _this;
    }
    QueRuntime.prototype.init = function (updater) {
        this.updater = updater;
        this.isPopupCenter = false;
        this.closeEffect = null;
        this.isShowEffect = false;
        this.close();
    };
    QueRuntime.prototype.showQuestion = function (title, type, que, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.x = 161 + this.offsetX;
        this.y = 45 + this.offsetY;
        this.title = title;
        this.type = type;
        this.que = que;
        this.double = false;
        if (!this.updater) {
            return;
        }
        this.show();
        var titleLabel = this.updater.titleLabel;
        var typeLabel = this.updater.typeLabel;
        var queLabel = this.updater.queLabel;
        var doubleSprite = this.updater.doubleSprite;
        doubleSprite.visible = false;
        titleLabel.text = title;
        typeLabel.text = type;
        queLabel.text = que;
        titleLabel.pivot(titleLabel.width / 2, 0).pos(this.width / 2, titleLabel.y);
        typeLabel.pivot(typeLabel.width / 2, 0).pos(this.width / 2, typeLabel.y);
        titleLabel.visible = true;
        typeLabel.visible = true;
        queLabel.visible = false;
        setTimeout(function () {
            titleLabel.visible = false;
            typeLabel.visible = false;
            queLabel.visible = true;
            doubleSprite.visible = false;
        }, 1000);
    };
    QueRuntime.prototype.showDouble = function () {
        this.double = true;
        if (!this.updater) {
            return;
        }
        var doubleSprite = this.updater.doubleSprite;
        doubleSprite.visible = true;
    };
    return QueRuntime;
}(Laya.Dialog));
exports.default = QueRuntime;

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimerRuntime = /** @class */ (function (_super) {
    __extends(TimerRuntime, _super);
    function TimerRuntime() {
        var _this = _super.call(this) || this;
        _this.time = 0;
        _this.start = 0;
        _this.t = null;
        _this.s = null;
        _this.circle = null;
        _this.lastUpdate = 0;
        _this.timeoutCallback = null;
        return _this;
    }
    TimerRuntime.prototype.init = function (t, s, circle) {
        this.t = t;
        this.s = s;
        this.circle = circle;
        this.t.visible = this.s.visible = false;
        this.t.parent.parent.scaleX = 0.7;
        this.t.parent.parent.scaleY = 0.7;
    };
    TimerRuntime.prototype.loadNumberImage = function (sprite, num, cb) {
        num = Math.round(Math.abs(num)) % 10;
        sprite.loadImage("image/" + num + ".png", new Laya.Handler(this, function () {
            cb && cb();
        }));
    };
    TimerRuntime.prototype.getDelta = function () {
        var delta = Date.now() - this.start;
        return delta;
    };
    TimerRuntime.prototype.setText = function (num) {
        var _this = this;
        num = Math.round(num);
        var s = num % 10;
        var t = (num - s) / 10;
        this.loadNumberImage(this.t, t, function () {
            _this.t.pivot(_this.t.width / 2, 0);
            _this.t.x = _this.t.parent.width / 2;
        });
        this.loadNumberImage(this.s, s, function () {
            _this.s.pivot(_this.s.width / 2, 0);
            _this.s.x = _this.s.parent.width / 2;
        });
    };
    TimerRuntime.prototype.clearCircle = function () {
        this.circle.graphics.clear();
    };
    TimerRuntime.prototype.setNumber = function () {
        this.t.visible = this.s.visible = true;
        var delta = Math.round(this.getDelta() / 1000);
        var num = Math.max(this.time - delta, 0);
        this.setText(num);
    };
    TimerRuntime.prototype.setCircle = function () {
        if (this.time === 0) {
            return;
        }
        var now = Date.now();
        var delta = this.getDelta();
        var angle = (delta / (this.time * 1000)) * 360;
        if (this.lastUpdate === 0) {
            this.lastUpdate = this.start;
        }
        this.circle.graphics.clear();
        this.circle.graphics.drawPie(this.circle.width / 2, this.circle.height / 2, this.circle.width / 2, -90, angle - 90, "#ff4747", "", 0);
        this.circle.graphics.drawPie(this.circle.width / 2, this.circle.height / 2, this.circle.width / 2 - 7, -90, angle - 90, "#ffffff", "", 0);
        if (delta > this.time * 1000) {
            this.timeoutCallback && this.timeoutCallback();
            this.clearTimer();
        }
        this.lastUpdate = now;
    };
    TimerRuntime.prototype.setTimer = function (time, callback) {
        this.time = time;
        this.lastUpdate = 0;
        this.start = -1;
        this.t && (this.t.visible = this.s.visible = true);
        this.timeoutCallback = callback;
        this.setText(time);
        this.clearCircle();
    };
    TimerRuntime.prototype.run = function () {
        this.start = Date.now();
    };
    TimerRuntime.prototype.clearTimer = function () {
        this.timeoutCallback = null;
        this.time = 0;
        this.start = -1;
    };
    return TimerRuntime;
}(Laya.Label));
exports.default = TimerRuntime;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var Global_1 = require("../Global");
var Util_1 = require("../Util");
var number = ["一", "二", "三", "四", "五"];
var Answer = /** @class */ (function (_super) {
    __extends(Answer, _super);
    function Answer() {
        var _this = _super.call(this) || this;
        _this.playersAns = [];
        _this.isSubmiting = false;
        return _this;
    }
    Answer.prototype.onAwake = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.onAwake.call(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Answer.prototype.onEnable = function () {
        this.initView();
        this.initListener();
    };
    Answer.prototype.initView = function () {
        this.offsetX = this.bgBox.x + this.scene.x;
        this.offsetY = this.bgBox.y + this.scene.y;
        this.heads = [[this.head1, this.head2, this.head3], [this.head4, this.head5, this.head6]];
        this.heads.forEach(function (items) { return Util_1.modeViewXYAdjust(items, function (item) { return item; }, true); });
        this.initPlayer();
        this.setQue();
    };
    Answer.prototype.initListener = function () {
        var _this = this;
        this.ans.onSelect = function (index) { return _this.submit(index); };
    };
    Answer.prototype.getMyHeads = function () {
        return Util_1.modeViewFilter(this.heads[0]);
    };
    Answer.prototype.getEnemyHeads = function () {
        return Util_1.modeViewFilter(this.heads[1]);
    };
    Answer.prototype.initPlayer = function () {
        if (!Global_1.default.gameState) {
            return;
        }
        var myGroupHeads = this.getMyHeads();
        var enemyGroupHeads = this.getEnemyHeads();
        this.initGroup(Global_1.default.myGroup, myGroupHeads);
        this.initGroup(Global_1.default.enemyGroup, enemyGroupHeads);
        var images = [];
        Global_1.default.myGroup.forEach(function (p) { return images.push(p.customProfile); });
        Global_1.default.enemyGroup.forEach(function (p) { return images.push(p.customProfile); });
        this.ans.setHeadImages(images);
    };
    Answer.prototype.initGroup = function (group, heads) {
        group.forEach(function (player, i) {
            var head = heads[i];
            if (!head) {
                return;
            }
            head.loadHeadImage(player.customProfile);
        });
    };
    Answer.prototype.setQue = function () {
        var _this = this;
        var gameState = Global_1.default.gameState;
        var me = Global_1.default.myGroup.filter(function (player) { return player.playerId === MGOBE.Player.id; })[0];
        var que = gameState.que;
        var heads = this.getMyHeads().concat(this.getEnemyHeads());
        if (!que || gameState.curQueId > 4) {
            return;
        }
        if (this.curQueId !== gameState.curQueId) {
            this.setNewQue(gameState, que);
        }
        var maxMyGroupScore = Math.max.apply(Math, Global_1.default.myGroup.map(function (p) { return p.score; }));
        var mySum = Global_1.default.myGroup.reduce(function (score, player) { return score + player.sumScore; }, 0);
        var enemySum = Global_1.default.enemyGroup.reduce(function (score, player) { return score + player.sumScore; }, 0);
        this.grade.setGrades(mySum, enemySum);
        Global_1.default.playsers.forEach(function (p, i) {
            if (p.ans < 0) {
                return heads[i].hideResult();
            }
            _this.playersAns[i] = p.ans;
            var hasPrize = p.score === maxMyGroupScore && i < 3 && Global_1.default.myGroup.filter(function (player) { return player.ans < 0; }).length <= 0 && p.score > 0;
            gameState.time <= 0 && heads[i].showResult(p.playerId, p.score, p.ans === que.ans, hasPrize);
        });
        this.ans.showAnswers.apply(this.ans, que.opt);
        this.ans.showPlayersAnswer(this.playersAns, me.ans, que.ans, gameState.time <= 0);
        this.playersAns.filter(function (ans) { return ans < 0; }).length <= 0 && this.timer.clearTimer();
        this.curQueId = gameState.curQueId;
    };
    Answer.prototype.setNewQue = function (gameState, que) {
        var _this = this;
        this.timer.setTimer(Math.min(15, gameState.time / 1000 - 2), null);
        this.playersAns = [-1, -1, -1, -1, -1, -1];
        this.queDialog.showQuestion("\u7B2C" + number[gameState.curQueId] + "\u9898", que.tag, que.que, this.offsetX, this.offsetY);
        gameState.curQueId === 4 && this.queDialog.showDouble();
        // 隐藏答案后再显示
        this.ans.aniShow(function () { return _this.timer.run(); });
    };
    Answer.prototype.submit = function (ans) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isSubmiting) {
                            return [2 /*return*/];
                        }
                        this.isSubmiting = true;
                        return [4 /*yield*/, this.sendToGameSvr({ cmd: Base_1.CMD.SUBMIT, ans: ans })];
                    case 1:
                        _a.sent();
                        this.isSubmiting = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    Answer.prototype.onRecvFromGameSvr = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.onRecvFromGameSvr.call(this, event)];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/];
                        }
                        this.setQue();
                        return [2 /*return*/];
                }
            });
        });
    };
    Answer.prototype.onDisable = function () {
        this.queDialog.close();
    };
    return Answer;
}(Base_1.default));
exports.default = Answer;

},{"../Global":4,"../Util":5,"./Base":16}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var Global_1 = require("../Global");
var Auth = /** @class */ (function (_super) {
    __extends(Auth, _super);
    function Auth() {
        return _super.call(this) || this;
    }
    Auth.prototype.onAwake = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.initScene();
                return [2 /*return*/];
            });
        });
    };
    Auth.prototype.onEnable = function () {
        var _this = this;
        var width = 150;
        var height = 50;
        var style = {
            width: width,
            height: height,
            left: window.innerWidth / 2 - width / 2,
            top: window.innerHeight / 2 + 100,
        };
        var handleUserInfo = function (userInfo) {
            if (!userInfo) {
                return;
            }
            Global_1.default.userInfo = userInfo;
            _this.openScene("Main");
        };
        wx.getUserInfo({
            fail: function () {
                var button = wx.createUserInfoButton({ type: "image", style: style, image: "image/auth_button.png" });
                button.onTap(function (data) {
                    handleUserInfo(data.userInfo);
                    button.destroy();
                });
            },
            success: function (data) {
                handleUserInfo(data.userInfo);
            }
        });
    };
    return Auth;
}(Base_1.default));
exports.default = Auth;

},{"../Global":4,"./Base":16}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("../Global");
require("../../../libs/MGOBE");
var Util_1 = require("../Util");
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base() {
        return _super.call(this) || this;
    }
    Base.prototype.onAwake = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initScene();
                        this.setBroadcast();
                        Base.dialog && Base.dialog.close();
                        return [4 /*yield*/, this.loadProgressBar()];
                    case 1:
                        _a.sent();
                        if (!Global_1.default.userInfo) {
                            this.openScene("AuthScene");
                            return [2 /*return*/];
                        }
                        if (!!Global_1.default.openId) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.login()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // 初始化场景设置
    Base.prototype.initScene = function () {
        // 使场景居中
        this.scene.x = (Laya.stage.width - this.scene.width) / 2;
        this.scene.y = (Laya.stage.height - this.scene.height) / 2;
        // 自动清理
        this.scene.autoDestroyAtClosed = true;
    };
    // 加载进度条条
    Base.prototype.loadProgressBar = function () {
        var _this = this;
        if (Base.ProgressBar) {
            this.showProgressBar(false);
            return Promise.resolve(true);
        }
        ;
        var loadingPath = "ani/load.json";
        return new Promise(function (resolve) {
            Laya.loader.load(loadingPath, Laya.Handler.create(_this, function () {
                Base.ProgressBar = new Laya.Animation();
                Base.ProgressBar.loadAtlas(loadingPath);
                Base.ProgressBar.interval = 100;
                Base.ProgressBar.index = 1;
                Base.ProgressBar.loop = true;
                Base.ProgressBar.play();
                var bounds = Base.ProgressBar.getGraphicBounds();
                Base.ProgressBar.pivot(bounds.width / 2, bounds.height / 2);
                Base.ProgressBar.pos(_this.scene.width / 2, _this.scene.height - 20);
                Base.ProgressBar.x = _this.scene.x + _this.scene.width / 2;
                Laya.stage.addChild(Base.ProgressBar);
                _this.showProgressBar(false);
                return resolve(true);
            }), null, Laya.Loader.ATLAS);
        });
    };
    // 关闭/显示 进度条
    Base.prototype.showProgressBar = function (show) {
        Base.ProgressBar && (Base.ProgressBar.visible = show);
    };
    // 判断进度条正在显示中
    Base.prototype.isInProgress = function () {
        return !!Base.ProgressBar && Base.ProgressBar.visible === true;
    };
    // 打开场景
    Base.prototype.openScene = function (sceneName) {
        sceneName = sceneName.replace(".json", "") + ".json";
        laya.display.Scene.open(sceneName);
    };
    // 微信登录态
    Base.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gameInfo, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 已登录
                        if (Global_1.default.openId && MGOBE.Player.id)
                            return [2 /*return*/, Promise.resolve(true)];
                        this.showProgressBar(true);
                        gameInfo = Util_1.getGameInfoFromStorage();
                        if (!gameInfo) {
                            gameInfo = {
                                gameId: "",
                                openId: Date.now() + "_" + Math.random(),
                                secretKey: "",
                                server: "",
                                matchCodes: {
                                    1: "",
                                    2: "",
                                    3: "",
                                }
                            };
                            Util_1.setGameInfoToStorage(gameInfo);
                        }
                        return [4 /*yield*/, initSDK(gameInfo)];
                    case 1:
                        res = _a.sent();
                        this.showProgressBar(false);
                        if (res) {
                            this.setBroadcast();
                        }
                        else {
                            Base.dialog.showDialog("提示", "初始化失败");
                        }
                        return [2 /*return*/, Promise.resolve(res)];
                }
            });
        });
    };
    // 获取玩家的房间信息
    Base.prototype.getUserRoom = function () {
        return new Promise(function (resolve) {
            MGOBE.Room.getRoomByRoomId({ roomId: undefined }, function (event) {
                if (event.data && event.data.roomInfo) {
                    Global_1.default.room.initRoom(event.data.roomInfo);
                    return resolve(event.data.roomInfo);
                }
                resolve(null);
            });
        });
    };
    // 退出房间
    Base.prototype.leaveRoom = function () {
        return new Promise(function (resolve) {
            Global_1.default.room.leaveRoom({}, function (event) {
                return resolve(event.code);
            });
        });
    };
    // 发起匹配
    Base.prototype.match = function () {
        return new Promise(function (resolve) {
            Global_1.default.room.matchPlayers({
                matchCode: Global_1.default.matchCodes[Global_1.default.matchMode],
                playerInfo: {
                    name: Global_1.default.userInfo.nickName,
                    customPlayerStatus: 1,
                    customProfile: Global_1.default.userInfo.avatarUrl,
                    matchAttributes: []
                }
            }, function (event) {
                return resolve(event.code);
            });
        });
    };
    // 取消匹配
    Base.prototype.cancelMatch = function () {
        return new Promise(function (resolve) {
            Global_1.default.room.cancelPlayerMatch({ matchType: MGOBE.ENUM.MatchType.PLAYER_COMPLEX }, function (event) {
                return resolve(event.code);
            });
        });
    };
    // 发送消息
    Base.prototype.sendToGameSvr = function (data) {
        return new Promise(function (resolve) {
            Global_1.default.room.sendToGameSvr({ data: data }, function (event) {
                return resolve(event.code);
            });
        });
    };
    // 获得自己的队伍
    Base.prototype.getMyGroup = function () {
        if (!Global_1.default.gameState) {
            return;
        }
        return Global_1.default.gameState.playerGroup.filter(function (group) { return group.filter(function (player) { return player.playerId === MGOBE.Player.id; }).length > 0; })[0];
    };
    // 获得敌人的队伍
    Base.prototype.getEnemyGroup = function () {
        if (!Global_1.default.gameState) {
            return;
        }
        return Global_1.default.gameState.playerGroup.filter(function (group) { return group.filter(function (player) { return player.playerId === MGOBE.Player.id; }).length === 0; })[0];
    };
    Base.prototype.setGameState = function (gameState) {
        Global_1.default.gameState = gameState;
        Global_1.default.myGroup = this.getMyGroup();
        Global_1.default.enemyGroup = this.getEnemyGroup();
        Global_1.default.playsers = Global_1.default.myGroup.concat(Global_1.default.enemyGroup);
        Global_1.default.matchMode = Global_1.default.myGroup.length || 1;
    };
    // 设置广播处理
    Base.prototype.setBroadcast = function () {
        if (!Global_1.default.room) {
            return;
        }
        Global_1.default.room.onJoinRoom = this.onJoinRoom.bind(this);
        Global_1.default.room.onLeaveRoom = this.onLeaveRoom.bind(this);
        Global_1.default.room.onDismissRoom = this.onDismissRoom.bind(this);
        Global_1.default.room.onStartFrameSync = this.onStartFrameSync.bind(this);
        Global_1.default.room.onStopFrameSync = this.onStopFrameSync.bind(this);
        Global_1.default.room.onChangeCustomPlayerStatus = this.onChangeCustomPlayerStatus.bind(this);
        Global_1.default.room.onAutoRequestFrameError = this.onAutoRequestFrameError.bind(this);
        Global_1.default.room.onRecvFromGameSvr = this.onRecvFromGameSvr.bind(this);
    };
    Base.prototype.handleErrToLeaveRoom = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var success, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.leaveRoom()];
                    case 1:
                        success = _a.sent();
                        return [4 /*yield*/, callback(success)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Base.prototype.onJoinRoom = function (event) {
        console.log("onJoinRoom", "base");
    };
    Base.prototype.onLeaveRoom = function (event) {
        console.log("onLeaveRoom", "base");
    };
    Base.prototype.onDismissRoom = function (event) {
        console.log("onDismissRoom", "base");
    };
    Base.prototype.onStartFrameSync = function (event) {
        console.log("onStartFrameSync", "base");
    };
    Base.prototype.onStopFrameSync = function (event) {
        console.log("onStopFrameSync", "base");
    };
    Base.prototype.onChangeCustomPlayerStatus = function (event) {
        console.log("onChangeCustomPlayerStatus", "base");
    };
    Base.prototype.onAutoRequestFrameError = function (event) {
        console.error("onAutoRequestFrameError", "base");
    };
    ;
    Base.prototype.onRecvFromGameSvr = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err;
            var _this = this;
            return __generator(this, function (_a) {
                console.log("onRecvFromGameSvr", event);
                data = event.data.data;
                err = false;
                if (!data) {
                    return [2 /*return*/];
                }
                if (data.cmd === SER_PUSH_CMD.ERR) {
                    err = true;
                    Base.dialog.showDialog("提示", "Error", {
                        confirmCallback: function () { return _this.handleErrToLeaveRoom(function () { return _this.openScene("Main"); }); }
                    }, {
                        cancelCallback: function () { return _this.handleErrToLeaveRoom(function () { return _this.openScene("Main"); }); }
                    });
                }
                if (data.gameState && data.gameState.playerGroup) {
                    Global_1.default.matchMode = data.gameState.playerGroup[0].length;
                }
                if (data.cmd === SER_PUSH_CMD.CURRENT) {
                    this.setGameState(data.gameState);
                }
                if (data.cmd === SER_PUSH_CMD.GAME_STEP) {
                    this.setGameState(data.gameState);
                    if (Global_1.default.gameState.finish) {
                        this.openScene("Finish");
                    }
                }
                return [2 /*return*/, err];
            });
        });
    };
    Base.ProgressBar = null;
    Base.dialog = null;
    return Base;
}(Laya.Script));
exports.default = Base;
;
function initSDK(initGameInfo) {
    var Room = MGOBE.Room, Listener = MGOBE.Listener, ErrCode = MGOBE.ErrCode, ENUM = MGOBE.ENUM, DebuggerLog = MGOBE.DebuggerLog;
    Global_1.default.gameId = initGameInfo.gameId;
    Global_1.default.openId = initGameInfo.openId;
    Global_1.default.secretKey = initGameInfo.secretKey;
    Global_1.default.server = initGameInfo.server;
    Global_1.default.matchCodes = initGameInfo.matchCodes;
    var gameInfo = {
        gameId: Global_1.default.gameId,
        openId: Global_1.default.openId,
        secretKey: Global_1.default.secretKey,
    };
    var config = {
        url: Global_1.default.server,
        reconnectMaxTimes: 5,
        reconnectInterval: 4000,
        resendInterval: 2000,
        resendTimeout: 20000,
        isAutoRequestFrame: true,
    };
    return new Promise(function (resolve) {
        MGOBE.Listener.init(gameInfo, config, function (event) {
            if (event.code === MGOBE.ErrCode.EC_OK) {
                Global_1.default.room = new Room();
                MGOBE.Listener.add(Global_1.default.room);
                return resolve(true);
            }
            return resolve(false);
        });
    });
}
var SER_PUSH_CMD;
(function (SER_PUSH_CMD) {
    SER_PUSH_CMD[SER_PUSH_CMD["CURRENT"] = 1] = "CURRENT";
    SER_PUSH_CMD[SER_PUSH_CMD["GAME_STEP"] = 2] = "GAME_STEP";
    SER_PUSH_CMD[SER_PUSH_CMD["ERR"] = 3] = "ERR";
})(SER_PUSH_CMD = exports.SER_PUSH_CMD || (exports.SER_PUSH_CMD = {}));
exports.CMD = {
    READY: "READY",
    SUBMIT: "SUBMIT",
    CURRENT: "CURRENT",
};

},{"../../../libs/MGOBE":1,"../Global":4,"../Util":5}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var Global_1 = require("../Global");
var Util_1 = require("../Util");
var Finish = /** @class */ (function (_super) {
    __extends(Finish, _super);
    function Finish() {
        return _super.call(this) || this;
    }
    Finish.prototype.onAwake = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.onAwake.call(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Finish.prototype.onEnable = function () {
        this.initView();
        this.initListener();
        this.leaveRoom();
    };
    Finish.prototype.initView = function () {
        this.resDialog.isPopupCenter = false;
        this.resDialog.closeEffect = null;
        this.resDialog.close();
        this.resDialog.x = this.scene.x + 153;
        this.resDialog.y = this.scene.y + 24;
        this.heads = [[this.head1, this.head2, this.head3], [this.head4, this.head5, this.head6]];
        this.names = [[this.name1, this.name2, this.name3], [this.name4, this.name5, this.name6]];
        this.scores = [[this.score1, this.score2, this.score3], [this.score4, this.score5, this.score6]];
        this.heads.forEach(function (items) { return Util_1.modeViewXYAdjust(items, function (item) { return item.parent; }, true); });
        this.showResult();
    };
    Finish.prototype.initListener = function () {
        var _this = this;
        this.againBth.offAll();
        this.backBth.offAll();
        this.againBth.on(Laya.Event.CLICK, this, function () { return !_this.isInProgress() && _this.OnAgain(); });
        this.backBth.on(Laya.Event.CLICK, this, function () { return !_this.isInProgress() && _this.OnBack(); });
    };
    Finish.prototype.OnAgain = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showProgressBar(true);
                        return [4 /*yield*/, this.leaveRoom()];
                    case 1:
                        res = _a.sent();
                        this.showProgressBar(false);
                        if (!res) {
                            Base_1.default.dialog.showDialog("提示", "操作失败");
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, this.openScene("MatchRoom")];
                }
            });
        });
    };
    Finish.prototype.OnBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showProgressBar(true);
                        return [4 /*yield*/, this.leaveRoom()];
                    case 1:
                        res = _a.sent();
                        this.showProgressBar(false);
                        if (!res) {
                            Base_1.default.dialog.showDialog("提示", "操作失败");
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, this.openScene("Main")];
                }
            });
        });
    };
    Finish.prototype.showResult = function () {
        var _this = this;
        var u = Global_1.default.userInfo.avatarUrl;
        var heads = Util_1.modeViewFilter(this.heads[0]).concat(Util_1.modeViewFilter(this.heads[1]));
        var names = Util_1.modeViewFilter(this.names[0]).concat(Util_1.modeViewFilter(this.names[1]));
        var scores = Util_1.modeViewFilter(this.scores[0]).concat(Util_1.modeViewFilter(this.scores[1]));
        var players = Global_1.default.myGroup.concat(Global_1.default.enemyGroup);
        var me = null;
        var maxSumScore = -100;
        players.forEach(function (player, i) {
            heads[i].loadHeadImage(player.customProfile);
            _this.setName(names[i], player.name);
            _this.setScore(scores[i], player.sumScore);
            player.playerId === MGOBE.Player.id && (me = player);
            player.sumScore > maxSumScore && (maxSumScore = player.sumScore);
        });
        if (!me) {
            return;
        }
        var redScore = Global_1.default.myGroup.reduce(function (s, p) { return s + p.sumScore; }, 0);
        var blueScore = Global_1.default.enemyGroup.reduce(function (s, p) { return s + p.sumScore; }, 0);
        this.setRedScore(redScore);
        this.setBlueScore(blueScore);
        var result;
        if (redScore > blueScore) {
            result = Result.win;
        }
        else if (redScore < blueScore) {
            result = Result.fail;
        }
        else {
            result = Result.draw;
        }
        var isMVP = me.sumScore === maxSumScore && maxSumScore > 0;
        var mvpScore = isMVP ? MVP_COINS : 0;
        this.setMvpScore(mvpScore);
        this.setResultScore(result, ResultCoins[result]);
        this.setSumScore(ResultCoins[result] + mvpScore);
        this.showResDialog(result);
        players.forEach(function (player, i) {
            player.sumScore === maxSumScore && maxSumScore > 0 && heads[i].showCrown();
        });
        return ResultCoins[result] + mvpScore;
    };
    Finish.prototype.setName = function (label, name) {
        var parent = label.parent;
        label.text = this.nameToStr(name);
        label.pivot(label.width / 2, 0).pos(parent.width / 2, label.y);
        label.bold = true;
    };
    Finish.prototype.setScore = function (label, score) {
        var parent = label.parent._children[0];
        label.text = score + "";
        label.pivot(label.width / 2, label.height / 2).pos(parent.width / 2, parent.height / 2 + parent.y);
        label.bold = true;
    };
    Finish.prototype.setRedScore = function (score) {
        var parent = this.redScore.parent;
        this.redScore.text = score + "";
        this.redScore.pivot(this.redScore.width / 2, this.redScore.height / 2).pos(parent.width / 2, parent.height / 2);
        this.redScore.bold = true;
    };
    Finish.prototype.setBlueScore = function (score) {
        var parent = this.blueScore.parent;
        this.blueScore.text = score + "";
        this.blueScore.pivot(this.blueScore.width / 2, this.blueScore.height / 2).pos(parent.width / 2, parent.height / 2);
        this.blueScore.bold = true;
    };
    Finish.prototype.setSumScore = function (score) {
        this.sumScore.text = this.socreToStr(score) + "";
        this.sumScore.bold = true;
    };
    Finish.prototype.setMvpScore = function (score) {
        this.mvpScore.text = this.socreToStr(score) + "";
        this.mvpScore.bold = true;
        if (score === 0) {
            this.mvpScore.text = "-";
        }
    };
    Finish.prototype.setResultScore = function (result, score) {
        var info = ResultInfo[result];
        this.resLabel.text = info.text;
        this.resScore.text = this.socreToStr(score) + "";
        this.resLabel.color = this.resScore.color = info.color;
        this.resLabel.bold = true;
        this.resScore.bold = true;
    };
    Finish.prototype.showResDialog = function (result) {
        var _this = this;
        var info = ResultInfo[result];
        this.resDialog.loadImage(info.path, new Laya.Handler(this, function () {
            _this.resDialog.show();
        }));
    };
    Finish.prototype.socreToStr = function (score) {
        if (score > 0)
            return "+" + score;
        if (score < 0)
            return "-" + score;
        return score + "";
    };
    Finish.prototype.nameToStr = function (name) {
        if (name.length > 4)
            return name.slice(0, 4) + "...";
        return name + "";
    };
    Finish.prototype.onDisable = function () {
        this.resDialog.close();
    };
    return Finish;
}(Base_1.default));
exports.default = Finish;
var Result;
(function (Result) {
    Result[Result["win"] = 1] = "win";
    Result[Result["fail"] = 2] = "fail";
    Result[Result["draw"] = 3] = "draw";
})(Result || (Result = {}));
var ResultCoins = {
    1: 150,
    2: 0,
    3: 100
};
var MVP_COINS = 100;
var ResultInfo = {
    1: {
        text: "成功",
        color: "#ff2f2f",
        path: "image/shen-li1.png",
    },
    2: {
        text: "失败",
        color: "#616161",
        path: "image/shi-bai.png",
    },
    3: {
        text: "平局",
        color: "#0c50ed",
        path: "image/ping-ju.png",
    },
};

},{"../Global":4,"../Util":5,"./Base":16}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var Global_1 = require("../Global");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super.call(this) || this;
    }
    Main.prototype.onAwake = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.onAwake.call(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.onEnable = function () {
        this.initView();
        this.initListener();
    };
    Main.prototype.initView = function () {
        if (!Base_1.default.dialog && this.dialogPrefab) {
            Base_1.default.dialog = this.dialogPrefab.create();
            Base_1.default.dialog.show();
            Base_1.default.dialog.zOrder = 1000000;
            Base_1.default.dialog.close();
        }
        Global_1.default.userInfo && Global_1.default.userInfo.avatarUrl && this.head.loadImage(Global_1.default.userInfo.avatarUrl);
    };
    Main.prototype.initListener = function () {
        var _this = this;
        this.btn1.on(Laya.Event.CLICK, this, function () {
            Global_1.default.matchMode = 1;
            !_this.isInProgress() && _this.openMatch();
        });
        this.btn2.on(Laya.Event.CLICK, this, function () {
            Global_1.default.matchMode = 2;
            // todo
        });
        this.btn3.on(Laya.Event.CLICK, this, function () {
            Global_1.default.matchMode = 3;
            // todo
        });
    };
    Main.prototype.leaveMyRoom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showProgressBar(true);
                        return [4 /*yield*/, this.leaveRoom()];
                    case 1:
                        res = _a.sent();
                        if (res !== MGOBE.ErrCode.EC_OK) {
                            Base_1.default.dialog.showDialog("提示", "退出房间失败，请重试", { confirmCallback: function () { return _this.leaveMyRoom(); } });
                        }
                        this.showProgressBar(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.handleInRoom = function () {
        var _this = this;
        Base_1.default.dialog.showDialog("提示", "玩家已在房间内，是否进入", { confirmCallback: function () { return _this.openScene("VSRoom"); } }, { cancelCallback: function () { return _this.leaveMyRoom(); } });
    };
    // 点击进入游戏后调用
    Main.prototype.openMatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showProgressBar(true);
                        if (!!MGOBE.Player.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.login()];
                    case 1:
                        res = _a.sent();
                        if (!res) {
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.getUserRoom()];
                    case 3:
                        res = _a.sent();
                        this.showProgressBar(false);
                        if (res) {
                            // 玩家已经在房间内
                            Global_1.default.room.initRoom(res);
                            this.handleInRoom();
                            return [2 /*return*/];
                        }
                        // 开始匹配
                        this.openScene("MatchRoom");
                        return [2 /*return*/];
                }
            });
        });
    };
    return Main;
}(Base_1.default));
exports.default = Main;

},{"../Global":4,"./Base":16}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var Global_1 = require("../Global");
var Util_1 = require("../Util");
var MatchRoom = /** @class */ (function (_super) {
    __extends(MatchRoom, _super);
    function MatchRoom() {
        var _this = _super.call(this) || this;
        _this.timer = 0;
        _this.isDisable = false;
        return _this;
    }
    MatchRoom.prototype.onAwake = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.onAwake.call(this)];
                    case 1:
                        _a.sent();
                        this.isDisable = false;
                        Global_1.default.room.onUpdate = function () {
                            if (Global_1.default.room.isInRoom()) {
                                // 已经在房间内
                                _this.openVSScene();
                            }
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    MatchRoom.prototype.onEnable = function () {
        this.initView();
        this.initListener();
        this.showProgressBar(false);
        this.callMatch();
    };
    MatchRoom.prototype.initView = function () {
        this.head1.loadImage(Global_1.default.userInfo.avatarUrl || "");
        var heads = [[this.head1, this.head2, this.head3], [this.head4, this.head5, this.head6]];
        heads.forEach(function (items) { return Util_1.modeViewXYAdjust(items, function (item) { return item; }, false); });
    };
    MatchRoom.prototype.initListener = function () {
        var _this = this;
        this.btn.offAll();
        this.btn.on(Laya.Event.CLICK, this, function () {
            _this.callCancelMatch();
        });
    };
    MatchRoom.prototype.callMatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setTimer();
                        return [4 /*yield*/, this.match()];
                    case 1:
                        res = _a.sent();
                        if (this.isDisable) {
                            return [2 /*return*/];
                        }
                        // 已经在匹配中
                        if (res === MGOBE.ErrCode.EC_MATCH_PLAYER_IS_IN_MATCH) {
                            Base_1.default.dialog.showDialog("提示", "已经在匹配中，请等待");
                            return [2 /*return*/];
                        }
                        this.clearTimer();
                        // 已经在房间内
                        if (res === MGOBE.ErrCode.EC_ROOM_PLAYER_ALREADY_IN_ROOM) {
                            this.openVSScene();
                            return [2 /*return*/];
                        }
                        // 匹配成功
                        if (res === MGOBE.ErrCode.EC_OK) {
                            this.openVSScene();
                            return [2 /*return*/];
                        }
                        Base_1.default.dialog.showDialog("提示", "超时未匹配到对手，请您重新匹配", { confirmCallback: function () { return _this.callMatch(); } }, { cancelCallback: function () { return _this.openScene("Main"); } });
                        return [2 /*return*/];
                }
            });
        });
    };
    MatchRoom.prototype.handleMatchTimeout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (Global_1.default.room.isInRoom()) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.cancelMatch()];
                    case 1:
                        res = _a.sent();
                        if (this.isDisable) {
                            return [2 /*return*/];
                        }
                        // 取消成功
                        if (res === MGOBE.ErrCode.EC_OK) {
                            Base_1.default.dialog.showDialog("提示", "超时未匹配到对手，请您重新匹配", { confirmCallback: function () { return _this.callMatch(); } }, { cancelCallback: function () { return _this.openScene("Main"); } });
                            return [2 /*return*/];
                        }
                        // 已经在房间内
                        if (res === MGOBE.ErrCode.EC_ROOM_PLAYER_ALREADY_IN_ROOM) {
                            this.openVSScene();
                            return [2 /*return*/];
                        }
                        Base_1.default.dialog.showDialog("提示", "超时未匹配到对手，请您重新匹配", { confirmCallback: function () { return _this.callMatch(); } }, { cancelCallback: function () { return _this.openScene("Main"); } });
                        return [2 /*return*/];
                }
            });
        });
    };
    MatchRoom.prototype.callCancelMatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cancelMatch()];
                    case 1:
                        res = _a.sent();
                        if (this.isDisable) {
                            return [2 /*return*/];
                        }
                        // 取消成功
                        if (res === MGOBE.ErrCode.EC_OK) {
                            this.openScene("Main");
                            return [2 /*return*/];
                        }
                        // 已经在房间内
                        if (res === MGOBE.ErrCode.EC_ROOM_PLAYER_ALREADY_IN_ROOM) {
                            this.openVSScene();
                            return [2 /*return*/];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MatchRoom.prototype.openVSScene = function () {
        !this.isDisable && this.openScene("VSRoom");
    };
    MatchRoom.prototype.setTimer = function () {
        var _this = this;
        var time = 90000;
        this.clearTimer();
        this.timerCmp.setTimer(time / 1000, function () { return _this.handleMatchTimeout(); });
        this.timerCmp.run();
        this.timer = setTimeout(function () { return _this.handleTimeout(); }, time);
    };
    MatchRoom.prototype.clearTimer = function () {
        clearTimeout(this.timer);
        this.timer = 0;
        this.timerCmp.clearTimer();
    };
    MatchRoom.prototype.handleTimeout = function () {
        this.clearTimer();
    };
    MatchRoom.prototype.onDisable = function () {
        this.clearTimer();
        this.callMatch = function () { return null; };
        this.handleMatchTimeout = function () { return null; };
        Global_1.default.room.onUpdate = function () { return null; };
        this.isDisable = true;
        Base_1.default.dialog.close();
    };
    return MatchRoom;
}(Base_1.default));
exports.default = MatchRoom;

},{"../Global":4,"../Util":5,"./Base":16}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var Global_1 = require("../Global");
var Util_1 = require("../Util");
var MatchRoom = /** @class */ (function (_super) {
    __extends(MatchRoom, _super);
    function MatchRoom() {
        return _super.call(this) || this;
    }
    MatchRoom.prototype.onAwake = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.onAwake.call(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MatchRoom.prototype.onEnable = function () {
        this.initView();
        this.ready();
    };
    MatchRoom.prototype.initView = function () {
        this.vsDialog.isPopupCenter = false;
        this.vsDialog.closeEffect = null;
        this.vsDialog.close();
        this.vsDialog.x += this.scene.x;
        this.vsDialog.y += this.scene.y;
        this.vsDialog.show();
        this.heads = [[this.head1, this.head2, this.head3], [this.head4, this.head5, this.head6]];
        this.heads.forEach(function (items) { return Util_1.modeViewXYAdjust(items, function (item) { return item.parent; }, true); });
        this.initPlayer();
    };
    MatchRoom.prototype.getMyHeads = function () {
        return Util_1.modeViewFilter(this.heads[0]);
    };
    MatchRoom.prototype.getEnemyHeads = function () {
        return Util_1.modeViewFilter(this.heads[1]);
    };
    MatchRoom.prototype.initPlayer = function () {
        if (!Global_1.default.room) {
            return;
        }
        var myGroupHeads = this.getMyHeads();
        var enemyGroupHeads = this.getEnemyHeads();
        var teamId = Global_1.default.room.roomInfo.playerList[0].teamId;
        var group1 = Global_1.default.room.roomInfo.playerList.filter(function (u) { return u.teamId === teamId; });
        var group2 = Global_1.default.room.roomInfo.playerList.filter(function (u) { return u.teamId !== teamId; });
        var myGroup, enemyGroup;
        if (group1.filter(function (u) { return u.id === MGOBE.Player.id; })[0]) {
            myGroup = group1;
            enemyGroup = group2;
        }
        else {
            myGroup = group2;
            enemyGroup = group1;
        }
        this.initGroup(myGroup, myGroupHeads);
        this.initGroup(enemyGroup, enemyGroupHeads);
        Global_1.default.matchMode = Math.max(myGroup.length, enemyGroup.length);
    };
    MatchRoom.prototype.initGroup = function (group, heads) {
        group.forEach(function (player, i) {
            var head = heads[i];
            setTimeout(function () {
                head && head.loadImage(player.customProfile);
            }, i * 250);
        });
    };
    MatchRoom.prototype.ready = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roomRes, res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showProgressBar(true);
                        return [4 /*yield*/, this.getUserRoom()];
                    case 1:
                        roomRes = _a.sent();
                        if (!roomRes) {
                            return [2 /*return*/, this.readyFail()];
                        }
                        Global_1.default.room.initRoom(roomRes);
                        return [4 /*yield*/, this.sendToGameSvr({ cmd: Base_1.CMD.READY })];
                    case 2:
                        res = _a.sent();
                        if (res !== MGOBE.ErrCode.EC_OK) {
                            return [2 /*return*/, this.readyFail()];
                        }
                        // 超时弹框重试
                        this.timer = setTimeout(function () { return _this.readyFail(); }, 15000);
                        return [2 /*return*/];
                }
            });
        });
    };
    MatchRoom.prototype.readyFail = function () {
        var _this = this;
        Base_1.default.dialog.showDialog("提示", "\u51C6\u5907\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", {
            confirmCallback: function () { return _this.ready(); }
        }, {
            cancelCallback: function () { return _this.handleErrToLeaveRoom(function () { return _this.openScene("Main"); }); }
        });
    };
    MatchRoom.prototype.onRecvFromGameSvr = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.onRecvFromGameSvr.call(this, event)];
                    case 1:
                        err = _a.sent();
                        if (err) {
                            return [2 /*return*/];
                        }
                        clearTimeout(this.timer);
                        this.showProgressBar(false);
                        // 跳转
                        if (Global_1.default.gameState.finish) {
                            return [2 /*return*/, this.openScene("Finish")];
                        }
                        ;
                        if (Global_1.default.gameState.curQueId >= 0) {
                            return [2 /*return*/, this.openScene("Answer")];
                        }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    MatchRoom.prototype.onDisable = function () {
        this.vsDialog.close();
        this.readyFail = function () { };
        clearTimeout(this.timer);
    };
    return MatchRoom;
}(Base_1.default));
exports.default = MatchRoom;

},{"../Global":4,"../Util":5,"./Base":16}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnsHeadUpdate = /** @class */ (function (_super) {
    __extends(AnsHeadUpdate, _super);
    function AnsHeadUpdate() {
        var _this = _super.call(this) || this;
        _this.init = false;
        return _this;
    }
    AnsHeadUpdate.prototype.onAwake = function () {
        if (!this.ansHead)
            return;
        this.ansHead.init(this);
    };
    AnsHeadUpdate.prototype.onUpdate = function () {
        if (!this.ansHead || !this.ansHead.updater) {
            return;
        }
        if (!this.init) {
            this.init = true;
            if (this.ansHead.playerId.length > 0 && this.ansHead.isShowResult) {
                this.ansHead.showResult(this.ansHead.playerId, this.ansHead.score, this.ansHead.result, this.ansHead.hasPrize);
            }
            if (!this.ansHead.isShowResult) {
                this.ansHead.hideResult();
            }
            if (this.ansHead.headUrl) {
                this.ansHead.loadHeadImage(this.ansHead.headUrl);
            }
            console.log("crown", this.ansHead.isCrown);
            if (this.ansHead.isCrown) {
                this.ansHead.showCrown();
            }
        }
    };
    return AnsHeadUpdate;
}(Laya.Script));
exports.default = AnsHeadUpdate;

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnsUpdate = /** @class */ (function (_super) {
    __extends(AnsUpdate, _super);
    function AnsUpdate() {
        var _this = _super.call(this) || this;
        _this.init = false;
        return _this;
    }
    AnsUpdate.prototype.onAwake = function () {
        this.ans._heads = [[this.h1._children[1], this.h2._children[1], this.h3._children[1]], [this.h4._children[1], this.h5._children[1], this.h6._children[1]]];
        this.ans.init(this);
    };
    AnsUpdate.prototype.onUpdate = function () {
        if (!this.ans.updater) {
            return;
        }
        if (!this.init) {
            this.init = true;
            if (this.ans.a1.length > 0) {
                this.ans.showAnswers(this.ans.a1, this.ans.a2, this.ans.a3, this.ans.a4);
            }
            if (this.ans.answers) {
                this.ans.showPlayersAnswer(this.ans.answers, -1, -1);
            }
            this.ans.loagHeadImage();
        }
    };
    return AnsUpdate;
}(Laya.Script));
exports.default = AnsUpdate;

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DialogUpdate = /** @class */ (function (_super) {
    __extends(DialogUpdate, _super);
    function DialogUpdate() {
        return _super.call(this) || this;
    }
    DialogUpdate.prototype.onAwake = function () {
        this.dialog.init(this);
    };
    DialogUpdate.prototype.onUpdate = function () {
    };
    return DialogUpdate;
}(Laya.Script));
exports.default = DialogUpdate;

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DialogUpdate = /** @class */ (function (_super) {
    __extends(DialogUpdate, _super);
    function DialogUpdate() {
        var _this = _super.call(this) || this;
        _this.init = false;
        return _this;
    }
    DialogUpdate.prototype.onAwake = function () {
        this.grade.init(this);
    };
    DialogUpdate.prototype.onEnable = function () {
    };
    DialogUpdate.prototype.onUpdate = function () {
        if (!this.grade.updater) {
            return;
        }
        if (!this.init) {
            this.init = true;
            if (typeof this.grade.red === "number" && typeof this.grade.blue === "number") {
                this.grade.setGrades(this.grade.red, this.grade.blue);
            }
        }
    };
    return DialogUpdate;
}(Laya.Script));
exports.default = DialogUpdate;

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueDialogUpdate = /** @class */ (function (_super) {
    __extends(QueDialogUpdate, _super);
    function QueDialogUpdate() {
        var _this = _super.call(this) || this;
        _this.init = false;
        return _this;
    }
    QueDialogUpdate.prototype.onAwake = function () {
        this.dialog.init(this);
    };
    QueDialogUpdate.prototype.onUpdate = function () {
        if (!this.dialog.updater) {
            return;
        }
        if (!this.init) {
            this.init = true;
            if (this.dialog.title.length > 0) {
                var double = this.dialog.double;
                this.dialog.showQuestion(this.dialog.title, this.dialog.type, this.dialog.que, this.dialog.offsetX, this.dialog.offsetY);
                double && this.dialog.showDouble();
            }
        }
    };
    return QueDialogUpdate;
}(Laya.Script));
exports.default = QueDialogUpdate;

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimerUpdate = /** @class */ (function (_super) {
    __extends(TimerUpdate, _super);
    function TimerUpdate() {
        return _super.call(this) || this;
    }
    TimerUpdate.prototype.onAwake = function () {
        this.timer.init(this.t, this.s, this.circle);
    };
    TimerUpdate.prototype.onEnable = function () {
    };
    TimerUpdate.prototype.onUpdate = function () {
        if (this.timer.time <= 0) {
            return;
        }
        if (this.timer.start <= 0) {
            return;
        }
        this.timer.setNumber();
        this.timer.setCircle();
    };
    return TimerUpdate;
}(Laya.Script));
exports.default = TimerUpdate;

},{}]},{},[3]);
