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
/*v1.1.1_1*/if(typeof GameGlobal!=="undefined"&&!GameGlobal.window)GameGlobal.window=GameGlobal;!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MGOBE=t():e.MGOBE=t()}(window,function(){return function(e){var t={};function s(_){if(t[_])return t[_].exports;var n=t[_]={i:_,l:!1,exports:{}};return e[_].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,_){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(s.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(_,n,function(t){return e[t]}.bind(null,n));return _},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=12)}([function(e,t,s){"use strict";var _=s(1);var n=s(3),o=s(4);s.d(t,"j",function(){return i}),s.d(t,"l",function(){return E}),s.d(t,"k",function(){return a}),s.d(t,"d",function(){return R}),s.d(t,"h",function(){return c}),s.d(t,"i",function(){return C}),s.d(t,"a",function(){return d}),s.d(t,"e",function(){return l}),s.d(t,"f",function(){return O}),s.d(t,"g",function(){return S}),s.d(t,"c",function(){return n.a}),s.d(t,"b",function(){return o.a});s(10);const r=s(8),i={pingTimeout:5e3,reconnectInterval:500,reconnectMaxTimes:15,resendInterval:1e3,resendTimeout:2e4,url:void 0},E={version:r.version,appName:void 0,cmd:"",seq:void 0,clientIp:void 0,serviceIp:void 0,business:void 0,authKey:void 0,authType:void 0,authIp:void 0,gameId:void 0,uid:void 0,playerId:void 0,body:void 0},a={gameId:void 0,openId:void 0,secretKey:void 0};var R,c,C,d;!function(e){let t={};e.getInfo=(()=>t),e.setInfo=(e=>t=e)}(R||(R={})),function(e){let t;!function(e){e[e.INITED=1]="INITED",e[e.INITING=2]="INITING",e[e.UNINIT=3]="UNINIT"}(t=e.StatusType||(e.StatusType={}));let s=t.UNINIT;e.isInited=(()=>s===t.INITED),e.isIniting=(()=>s===t.INITING),e.isUnInit=(()=>s===t.UNINIT),e.setStatus=(e=>s=e)}(c||(c={})),function(e){let t;!function(e){e[e.LOGIN=1]="LOGIN",e[e.LOGINING=2]="LOGINING",e[e.LOGOUT=3]="LOGOUT",e[e.LOGOUTING=4]="LOGOUTING"}(t=e.StatusType||(e.StatusType={}));let s=t.LOGOUT,_=0,n="";e.isStatus=(e=>s===e),e.setStatus=(e=>{s=e,e===t.LOGIN&&(_=0)}),e.setErrCode=((e,t)=>{_=e,n=t}),e.getErrCode=(()=>_),e.getErrMsg=(()=>n)}(C||(C={})),function(e){let t;!function(e){e[e.CHECKING=1]="CHECKING",e[e.CHECKED=2]="CHECKED",e[e.OFFLINE=3]="OFFLINE"}(t=e.StatusType||(e.StatusType={}));let s=t.CHECKING;e.isChecked=(()=>s===t.CHECKED),e.isOffline=(()=>s===t.OFFLINE),e.setStatus=(e=>s=e)}(d||(d={}));const l=_.a.ClientSendServerReqWrap2Cmd,O=_.a.ServerSendClientBstWrap2Type,S=5443},function(e,t,s){"use strict";var _;s.d(t,"a",function(){return _}),function(e){let t,s,_,n,o,r,i,E,a,R,c;!function(e){e[e.COMMON=0]="COMMON",e[e.RELAY=1]="RELAY"}(t=e.ConnectionType||(e.ConnectionType={})),function(e){e[e.E_PUSH_TYPE_TEST=0]="E_PUSH_TYPE_TEST",e[e.E_PUSH_TYPE_RELAY=1]="E_PUSH_TYPE_RELAY",e[e.E_PUSH_TYPE_GAMESVR=2]="E_PUSH_TYPE_GAMESVR",e[e.E_PUSH_TYPE_JOIN_ROOM=100]="E_PUSH_TYPE_JOIN_ROOM",e[e.E_PUSH_TYPE_LEAVE_ROOM=101]="E_PUSH_TYPE_LEAVE_ROOM",e[e.E_PUSH_TYPE_DISMISS_ROOM=102]="E_PUSH_TYPE_DISMISS_ROOM",e[e.E_PUSH_TYPE_REMOVE_PLAYER=103]="E_PUSH_TYPE_REMOVE_PLAYER",e[e.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY=104]="E_PUSH_TYPE_MODIFY_ROOM_PROPERTY",e[e.E_PUSH_TYPE_NETWORK_STATE=105]="E_PUSH_TYPE_NETWORK_STATE",e[e.E_PUSH_TYPE_ROOM_CHAT=106]="E_PUSH_TYPE_ROOM_CHAT",e[e.E_PUSH_TYPE_PLAYER_STATE=107]="E_PUSH_TYPE_PLAYER_STATE",e[e.E_PUSH_TYPE_START_GAME=108]="E_PUSH_TYPE_START_GAME",e[e.E_PUSH_TYPE_STOP_GAME=109]="E_PUSH_TYPE_STOP_GAME",e[e.E_PUSH_TYPE_CREATE_ROOM=110]="E_PUSH_TYPE_CREATE_ROOM",e[e.E_PUSH_TYPE_DESTROY_ROOM=111]="E_PUSH_TYPE_DESTROY_ROOM",e[e.E_PUSH_TYPE_MATCH_SUCCESS=200]="E_PUSH_TYPE_MATCH_SUCCESS",e[e.E_PUSH_TYPE_MATCH_TIMEOUT=201]="E_PUSH_TYPE_MATCH_TIMEOUT"}(s=e.ServerSendClientBstWrap2Type||(e.ServerSendClientBstWrap2Type={})),function(e){e[e.E_CMD_INVALID=0]="E_CMD_INVALID",e[e.E_CMD_HEART_BEAT_REQ=100]="E_CMD_HEART_BEAT_REQ",e[e.E_CMD_CHECK_LOGIN_REQ=101]="E_CMD_CHECK_LOGIN_REQ",e[e.E_CMD_LOGIN_TO_ROOM_REQ=102]="E_CMD_LOGIN_TO_ROOM_REQ",e[e.E_CMD_FORWARD_TO_RELAY_REQ=103]="E_CMD_FORWARD_TO_RELAY_REQ",e[e.E_CMD_LOGIN_REQ=1e3]="E_CMD_LOGIN_REQ",e[e.E_CMD_LOGOUT_REQ=1001]="E_CMD_LOGOUT_REQ",e[e.E_CMD_AUTH_REQ=1002]="E_CMD_AUTH_REQ",e[e.E_CMD_QUERY_BY_PLAYER_ID_REQ=1003]="E_CMD_QUERY_BY_PLAYER_ID_REQ",e[e.E_CMD_QUERY_BY_GAME_ID_REQ=1004]="E_CMD_QUERY_BY_GAME_ID_REQ",e[e.E_CMD_GET_ROOM_DETAIL_REQ=2001]="E_CMD_GET_ROOM_DETAIL_REQ",e[e.E_CMD_JOIN_ROOM_REQ=2002]="E_CMD_JOIN_ROOM_REQ",e[e.E_CMD_QUIT_ROOM_REQ=2003]="E_CMD_QUIT_ROOM_REQ",e[e.E_CMD_CREATE_ROOM_REQ=2004]="E_CMD_CREATE_ROOM_REQ",e[e.E_CMD_DESTORY_ROOM_REQ=2005]="E_CMD_DESTORY_ROOM_REQ",e[e.E_CMD_REMOVE_MEMBER_REQ=2006]="E_CMD_REMOVE_MEMBER_REQ",e[e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ=2007]="E_CMD_CHANGE_ROOM_PROPERTIS_REQ",e[e.E_CMD_DISSMISS_ROOM_REQ=2008]="E_CMD_DISSMISS_ROOM_REQ",e[e.E_CMD_CHANGE_PLAYER_STATE_REQ=2009]="E_CMD_CHANGE_PLAYER_STATE_REQ",e[e.E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ=2010]="E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ",e[e.E_CMD_ROOM_CHAT_REQ=2011]="E_CMD_ROOM_CHAT_REQ",e[e.E_CMD_START_FRAME_SYNC_REQ=2012]="E_CMD_START_FRAME_SYNC_REQ",e[e.E_CMD_STOP_FRAME_SYNC_REQ=2013]="E_CMD_STOP_FRAME_SYNC_REQ",e[e.E_CMD_GET_ROOM_LIST_REQ=2014]="E_CMD_GET_ROOM_LIST_REQ",e[e.E_CMD_MATCH_ROOM_SIMPLE_REQ=3001]="E_CMD_MATCH_ROOM_SIMPLE_REQ",e[e.E_CMD_MATCH_USER_SIMPLE_REQ=3002]="E_CMD_MATCH_USER_SIMPLE_REQ",e[e.E_CMD_MATCH_CANCEL_MATCH_REQ=3003]="E_CMD_MATCH_CANCEL_MATCH_REQ",e[e.E_CMD_MATCH_ROOM_COMPLEX_REQ=3004]="E_CMD_MATCH_ROOM_COMPLEX_REQ",e[e.E_CMD_MATCH_PLAYER_COMPLEX_REQ=3005]="E_CMD_MATCH_PLAYER_COMPLEX_REQ",e[e.E_CMD_RELAY_SEND_FRAME_REQ=4e3]="E_CMD_RELAY_SEND_FRAME_REQ",e[e.E_CMD_RELAY_REQUEST_FRAME_REQ=4001]="E_CMD_RELAY_REQUEST_FRAME_REQ",e[e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ=4002]="E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ",e[e.E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ=4003]="E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ",e[e.E_CMD_NOTIFY_JOIN_ROOM=5e3]="E_CMD_NOTIFY_JOIN_ROOM",e[e.E_CMD_NOTIFY_QUIT_ROOM=5001]="E_CMD_NOTIFY_QUIT_ROOM",e[e.E_CMD_NOTIFY_DESTORY_ROOM=5002]="E_CMD_NOTIFY_DESTORY_ROOM",e[e.E_CMD_NOTIFY_NET_STATE=5003]="E_CMD_NOTIFY_NET_STATE",e[e.E_CMD_NOTIFY_KICK_MEMBER=5004]="E_CMD_NOTIFY_KICK_MEMBER",e[e.E_CMD_GET_ADDR_BY_ROUTER_ID_REQ=6e3]="E_CMD_GET_ADDR_BY_ROUTER_ID_REQ"}(_=e.ClientSendServerReqWrap2Cmd||(e.ClientSendServerReqWrap2Cmd={})),function(e){e[e.EC_OK=0]="EC_OK",e[e.EC_REQ_BAD_PKG=1]="EC_REQ_BAD_PKG",e[e.EC_CMD_INVALID=2]="EC_CMD_INVALID",e[e.EC_PARAMS_INVALID=3]="EC_PARAMS_INVALID",e[e.EC_INNER_ERROR=4]="EC_INNER_ERROR",e[e.EC_TIME_OUT=5]="EC_TIME_OUT",e[e.EC_SERVER_BUSY=6]="EC_SERVER_BUSY",e[e.EC_NO_RIGHT=7]="EC_NO_RIGHT",e[e.EC_ACCESS_CMD_INVALID_ERR=200]="EC_ACCESS_CMD_INVALID_ERR",e[e.EC_ACCESS_CMD_GET_TOKEN_ERR=201]="EC_ACCESS_CMD_GET_TOKEN_ERR",e[e.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE=202]="EC_ACCESS_CMD_TOKEN_PRE_EXPIRE",e[e.EC_ACCESS_CMD_INVALID_TOKEN=203]="EC_ACCESS_CMD_INVALID_TOKEN",e[e.EC_ACCESS_PUSH_SERIALIZE_ERR=204]="EC_ACCESS_PUSH_SERIALIZE_ERR",e[e.EC_ACCESS_LOGIN_BODY_PARSE_ERR=205]="EC_ACCESS_LOGIN_BODY_PARSE_ERR",e[e.EC_ACCESS_CONN_ERR=206]="EC_ACCESS_CONN_ERR",e[e.EC_ACCESS_GET_RS_IP_ERR=207]="EC_ACCESS_GET_RS_IP_ERR",e[e.EC_ACCESS_ADD_COMM_CONN_ERR=208]="EC_ACCESS_ADD_COMM_CONN_ERR",e[e.EC_ACCESS_ADD_HEART_CONN_ERR=209]="EC_ACCESS_ADD_HEART_CONN_ERR",e[e.EC_ACCESS_ADD_RELAY_CONN_ERR=210]="EC_ACCESS_ADD_RELAY_CONN_ERR",e[e.EC_ACCESS_HEART_BODY_PARSE_ERR=211]="EC_ACCESS_HEART_BODY_PARSE_ERR",e[e.EC_ACCESS_GET_COMM_CONNECT_ERR=212]="EC_ACCESS_GET_COMM_CONNECT_ERR",e[e.EC_ACCESS_GET_RELAY_CONNECT_ERR=213]="EC_ACCESS_GET_RELAY_CONNECT_ERR",e[e.EC_ACCESS_ACCESS_INFO_EMPTY=214]="EC_ACCESS_ACCESS_INFO_EMPTY",e[e.EC_ACCESS_PLAYER_DUPLICATE_LOGIN=215]="EC_ACCESS_PLAYER_DUPLICATE_LOGIN",e[e.EC_PLAYER_GAME_NOT_EXIST=1e4]="EC_PLAYER_GAME_NOT_EXIST",e[e.EC_PLAYER_SECRET_KEY_FAIL=10001]="EC_PLAYER_SECRET_KEY_FAIL",e[e.EC_PLAYER_SIGN_ERR=10002]="EC_PLAYER_SIGN_ERR",e[e.EC_PLAYER_DUPLICATE_REQ=10003]="EC_PLAYER_DUPLICATE_REQ",e[e.EC_PLAYER_TIMESTAMP_INVALID=10004]="EC_PLAYER_TIMESTAMP_INVALID",e[e.EC_PLAYER_QUERY_PLAYER_FAIL=10005]="EC_PLAYER_QUERY_PLAYER_FAIL",e[e.EC_PLAYER_ADD_PLAYER_FAIL=10006]="EC_PLAYER_ADD_PLAYER_FAIL",e[e.EC_PLAYER_QUERY_GAME_FAIL=10007]="EC_PLAYER_QUERY_GAME_FAIL",e[e.EC_PLAYER_RECORD_NUM_ERR=10008]="EC_PLAYER_RECORD_NUM_ERR",e[e.EC_PLAYER_GET_TOKEN_FAIL=10009]="EC_PLAYER_GET_TOKEN_FAIL",e[e.EC_PLAYER_TOKEN_NOT_EXIST=10010]="EC_PLAYER_TOKEN_NOT_EXIST",e[e.EC_PLAYER_TOKEN_INVALID=10011]="EC_PLAYER_TOKEN_INVALID",e[e.EC_PLAYER_CLEAR_TOKEN_FAIL=10012]="EC_PLAYER_CLEAR_TOKEN_FAIL",e[e.EC_PLAYER_LOCK_FAIL=10013]="EC_PLAYER_LOCK_FAIL",e[e.EC_PLAYER_UNLOCK_FAIL=10014]="EC_PLAYER_UNLOCK_FAIL",e[e.EC_PLAYER_SAVE_TOKEN_FAIL=10015]="EC_PLAYER_SAVE_TOKEN_FAIL",e[e.EC_ROOM_CREATE_NO_PERMISSION=2e4]="EC_ROOM_CREATE_NO_PERMISSION",e[e.EC_ROOM_DESTORY_NO_PERMISSION=20001]="EC_ROOM_DESTORY_NO_PERMISSION",e[e.EC_ROOM_JOIN_NO_PERMISSION=20002]="EC_ROOM_JOIN_NO_PERMISSION",e[e.EC_ROOM_REMOVE_PLAYER_NO_PERMISSION=20003]="EC_ROOM_REMOVE_PLAYER_NO_PERMISSION",e[e.EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION=20004]="EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION",e[e.EC_ROOM_DISSMISS_NO_PERMISSION=20005]="EC_ROOM_DISSMISS_NO_PERMISSION",e[e.EC_ROOM_REMOVE_SELF_NO_PERMISSION=20006]="EC_ROOM_REMOVE_SELF_NO_PERMISSION",e[e.EC_ROOM_CHECK_LOGIN_SESSION_ERR=20007]="EC_ROOM_CHECK_LOGIN_SESSION_ERR",e[e.EC_ROOM_PLAYER_ALREADY_IN_ROOM=20010]="EC_ROOM_PLAYER_ALREADY_IN_ROOM",e[e.EC_ROOM_PLAYER_NOT_IN_ROOM=20011]="EC_ROOM_PLAYER_NOT_IN_ROOM",e[e.EC_ROOM_PLAYERS_EXCEED_LIMIT=20012]="EC_ROOM_PLAYERS_EXCEED_LIMIT",e[e.EC_ROOM_JOIN_NOT_ALLOW=20013]="EC_ROOM_JOIN_NOT_ALLOW",e[e.EC_ROOM_MAX_PLAYERS_INVALID=20014]="EC_ROOM_MAX_PLAYERS_INVALID",e[e.EC_ROOM_CREATE_FAIL=20015]="EC_ROOM_CREATE_FAIL",e[e.EC_ROOM_PLAYER_OFFLINE=20016]="EC_ROOM_PLAYER_OFFLINE",e[e.EC_ROOM_PARAM_PAGE_INVALID=20017]="EC_ROOM_PARAM_PAGE_INVALID",e[e.EC_ROOM_GET_PLAYER_INFO_ERR=20050]="EC_ROOM_GET_PLAYER_INFO_ERR",e[e.EC_ROOM_GET_ROOM_INFO_ERR=20051]="EC_ROOM_GET_ROOM_INFO_ERR",e[e.EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR=-20052]="EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR",e[e.EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR=-20053]="EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR",e[e.EC_ROOM_REDIS_UPDATE_ERR=-20054]="EC_ROOM_REDIS_UPDATE_ERR",e[e.EC_ROOM_REDIS_GET_LOCK_ERR=-20055]="EC_ROOM_REDIS_GET_LOCK_ERR",e[e.EC_ROOM_REDIS_CHECK_LOCK_ERR=-20056]="EC_ROOM_REDIS_CHECK_LOCK_ERR",e[e.EC_ROOM_REDIS_DEL_LOCK_ERR=-20057]="EC_ROOM_REDIS_DEL_LOCK_ERR",e[e.EC_ROOM_QUERY_PLAYER_ERR=20060]="EC_ROOM_QUERY_PLAYER_ERR",e[e.EC_ROOM_QUERY_GAME_ERR=20061]="EC_ROOM_QUERY_GAME_ERR",e[e.EC_ROOM_PLAYER_INFO_NOT_EXIST=20062]="EC_ROOM_PLAYER_INFO_NOT_EXIST",e[e.EC_ROOM_GAME_INFO_NOT_EXIST=20063]="EC_ROOM_GAME_INFO_NOT_EXIST",e[e.EC_ROOM_HISTORY_INFO_INSERT_ERR=-20064]="EC_ROOM_HISTORY_INFO_INSERT_ERR",e[e.EC_ROOM_REGION_INFO_NOT_EXIST=20065]="EC_ROOM_REGION_INFO_NOT_EXIST",e[e.EC_ROOM_QUERY_REGION_ERR=20066]="EC_ROOM_QUERY_REGION_ERR",e[e.EC_ROOM_INFO_UNEXIST=20080]="EC_ROOM_INFO_UNEXIST",e[e.EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR=20090]="EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR",e[e.EC_ROOM_INVALID_PARAMS_TEAM_ID=20100]="EC_ROOM_INVALID_PARAMS_TEAM_ID",e[e.EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED=20101]="EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED",e[e.EC_MATCH_NO_ROOM=3e4]="EC_MATCH_NO_ROOM",e[e.EC_MATCH_TIMEOUT=30001]="EC_MATCH_TIMEOUT",e[e.EC_MATCH_LOGIC_ERR=30002]="EC_MATCH_LOGIC_ERR",e[e.EC_MATCH_ERR=30010]="EC_MATCH_ERR",e[e.EC_MATCH_PLAYER_IS_IN_MATCH=30011]="EC_MATCH_PLAYER_IS_IN_MATCH",e[e.EC_MATCH_PLAYER_NOT_IN_MATCH=30012]="EC_MATCH_PLAYER_NOT_IN_MATCH",e[e.EC_MATCH_GET_MATCH_INFO_ERR=30013]="EC_MATCH_GET_MATCH_INFO_ERR",e[e.EC_MATCH_UPDATE_MATCH_INFO_ERR=30014]="EC_MATCH_UPDATE_MATCH_INFO_ERR",e[e.EC_MATCH_CANCEL_FAILED=30015]="EC_MATCH_CANCEL_FAILED",e[e.EC_MATCH_GET_PLAYER_LIST_INFO_ERR=30016]="EC_MATCH_GET_PLAYER_LIST_INFO_ERR",e[e.EC_MATCH_CREATE_ROOM_ERR=30041]="EC_MATCH_CREATE_ROOM_ERR",e[e.EC_MATCH_JOIN_ROOM_ERR=30042]="EC_MATCH_JOIN_ROOM_ERR",e[e.EC_MATCH_QUERY_PLAYER_ERR=30100]="EC_MATCH_QUERY_PLAYER_ERR",e[e.EC_MATCH_PLAYER_INFO_NOT_EXIST=30101]="EC_MATCH_PLAYER_INFO_NOT_EXIST",e[e.EC_MATCH_QUERY_GAME_ERR=30102]="EC_MATCH_QUERY_GAME_ERR",e[e.EC_MATCH_GAME_INFO_NOT_EXIST=30103]="EC_MATCH_GAME_INFO_NOT_EXIST",e[e.EC_MATCH_QUERY_REGION_ERR=30104]="EC_MATCH_QUERY_REGION_ERR",e[e.EC_MATCH_REGION_INFO_NOT_EXIST=30105]="EC_MATCH_REGION_INFO_NOT_EXIST",e[e.EC_MATCH_TEAM_FAIL=30106]="EC_MATCH_TEAM_FAIL",e[e.EC_MATCH_PLAY_RULE_NOT_RUNNING=30107]="EC_MATCH_PLAY_RULE_NOT_RUNNING",e[e.EC_MATCH_PLAY_ATTR_NOT_FOUND=30108]="EC_MATCH_PLAY_ATTR_NOT_FOUND",e[e.EC_MATCH_PLAY_RULE_NOT_FOUND=30109]="EC_MATCH_PLAY_RULE_NOT_FOUND",e[e.EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND=30110]="EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND",e[e.EC_MATCH_PLAY_RULE_FUNC_ERR=30111]="EC_MATCH_PLAY_RULE_FUNC_ERR",e[e.EC_MATCH_GET_PLAYER_ATTR_FAIL=30112]="EC_MATCH_GET_PLAYER_ATTR_FAIL",e[e.EC_MATCH_GET_TEAM_ATTR_FAIL=30113]="EC_MATCH_GET_TEAM_ATTR_FAIL",e[e.EC_MATCH_INNER_LOGIC_ERR=-30150]="EC_MATCH_INNER_LOGIC_ERR",e[e.EC_RELAY_ALREADY_EXISTS=4e4]="EC_RELAY_ALREADY_EXISTS",e[e.EC_RELAY_NOT_EXISTS=40001]="EC_RELAY_NOT_EXISTS",e[e.EC_RELAY_DATA_EXCEED_LIMITED=40002]="EC_RELAY_DATA_EXCEED_LIMITED",e[e.EC_RELAY_MEMBER_ALREADY_EXISTS=40003]="EC_RELAY_MEMBER_ALREADY_EXISTS",e[e.EC_RELAY_MEMBER_NOT_EXISTS=40004]="EC_RELAY_MEMBER_NOT_EXISTS",e[e.EC_RELAY_STATE_INVALID=40005]="EC_RELAY_STATE_INVALID",e[e.EC_RELAY_INVALID_FRAME_RATE=40006]="EC_RELAY_INVALID_FRAME_RATE",e[e.EC_RELAY_SET_FRAME_RATE_FORBIDDEN=40007]="EC_RELAY_SET_FRAME_RATE_FORBIDDEN",e[e.EC_RELAY_NO_MEMBERS=40008]="EC_RELAY_NO_MEMBERS",e[e.EC_RELAY_GAMESVR_SERVICE_NOT_OPEN=40009]="EC_RELAY_GAMESVR_SERVICE_NOT_OPEN",e[e.EC_RELAY_REQ_POD_FAIL=40010]="EC_RELAY_REQ_POD_FAIL",e[e.EC_RELAY_LOGIC_ERROR=40014]="EC_RELAY_LOGIC_ERROR",e[e.EC_RELAY_HKV_CACHE_ERROR=40015]="EC_RELAY_HKV_CACHE_ERROR",e[e.EC_RELAY_REDIS_CACHE_ERROR=40016]="EC_RELAY_REDIS_CACHE_ERROR",e[e.EC_RELAY_CACHE_ERROR=40017]="EC_RELAY_CACHE_ERROR",e[e.EC_RELAY_NOTIFY_RELAYWORKER_FAIL=40018]="EC_RELAY_NOTIFY_RELAYWORKER_FAIL",e[e.EC_RELAY_RESET_RELAY_ROOM_FAIL=40019]="EC_RELAY_RESET_RELAY_ROOM_FAIL",e[e.EC_RELAY_CLEAN_RELAY_ROOM_FAIL=40020]="EC_RELAY_CLEAN_RELAY_ROOM_FAIL",e[e.EC_RELAY_NO_PERMISSION=40100]="EC_RELAY_NO_PERMISSION",e[e.EC_RELAY_NOTIFY_GAMESVR_FAIL=40200]="EC_RELAY_NOTIFY_GAMESVR_FAIL",e[e.EC_RELAY_FORWARD_TO_GAMESVR_FAIL=40201]="EC_RELAY_FORWARD_TO_GAMESVR_FAIL",e[e.EC_RELAY_FORWARD_TO_CLIENT_FAIL=40202]="EC_RELAY_FORWARD_TO_CLIENT_FAIL",e[e.EC_INVALID_PARAMS=6e4]="EC_INVALID_PARAMS",e[e.EC_INVALID_PARAMS_PLAY_MODE_VERSION=60001]="EC_INVALID_PARAMS_PLAY_MODE_VERSION",e[e.EC_INVALID_PARAMS_PLAY_MODE_RULETYPE=60002]="EC_INVALID_PARAMS_PLAY_MODE_RULETYPE",e[e.EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION=60003]="EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION",e[e.EC_INVALID_PARAMS_PLAY_MODE_TEAM=60004]="EC_INVALID_PARAMS_PLAY_MODE_TEAM",e[e.EC_INVALID_PARAMS_MSGQ_ENCODE=60020]="EC_INVALID_PARAMS_MSGQ_ENCODE",e[e.EC_INVALID_PARAMS_MSGQ_DECODE=60021]="EC_INVALID_PARAMS_MSGQ_DECODE",e[e.EC_INVALID_PARAMS_GAME_ID=61e3]="EC_INVALID_PARAMS_GAME_ID",e[e.EC_INVALID_PARAMS_PLAYER_INFO=61001]="EC_INVALID_PARAMS_PLAYER_INFO",e[e.EC_INVALID_PARAMS_MAX_PLAYERS=61002]="EC_INVALID_PARAMS_MAX_PLAYERS",e[e.EC_INVALID_PARAMS_ROOM_TYPE=61003]="EC_INVALID_PARAMS_ROOM_TYPE",e[e.EC_INVALID_PARAMS_PLAYER_ID=61004]="EC_INVALID_PARAMS_PLAYER_ID",e[e.EC_INVALID_PARAMS_MATCH_TYPE=61005]="EC_INVALID_PARAMS_MATCH_TYPE",e[e.EC_INVALID_PARAMS_MATCH_CODE=61006]="EC_INVALID_PARAMS_MATCH_CODE",e[e.EC_INVALID_PARAMS_OPEN_ID=61007]="EC_INVALID_PARAMS_OPEN_ID",e[e.EC_INVALID_PARAMS_PLATFORM=61008]="EC_INVALID_PARAMS_PLATFORM",e[e.EC_INVALID_PARAMS_TIMESTAMP=61009]="EC_INVALID_PARAMS_TIMESTAMP",e[e.EC_INVALID_PARAMS_SIGN=61010]="EC_INVALID_PARAMS_SIGN",e[e.EC_INVALID_PARAMS_NONCE=61011]="EC_INVALID_PARAMS_NONCE",e[e.EC_INVALID_PARAMS_TOKEN=61012]="EC_INVALID_PARAMS_TOKEN",e[e.EC_INVALID_PARAMS_NETWORK_STATE=61013]="EC_INVALID_PARAMS_NETWORK_STATE",e[e.EC_INVALID_PARAMS_ROOM_NAME=61014]="EC_INVALID_PARAMS_ROOM_NAME",e[e.EC_INVALID_PARAMS_CREATE_ROOM_TYPE=61015]="EC_INVALID_PARAMS_CREATE_ROOM_TYPE",e[e.EC_INVALID_PARAMS_DEVICE_ID=61016]="EC_INVALID_PARAMS_DEVICE_ID",e[e.EC_MYSPP_SYSTEM_ERR=-1e3]="EC_MYSPP_SYSTEM_ERR",e[e.EC_REDIS_KEY_NOT_EXIST=-66e3]="EC_REDIS_KEY_NOT_EXIST",e[e.EC_REDIS_SET_OP_ERR=-66001]="EC_REDIS_SET_OP_ERR",e[e.EC_REDIS_GET_OP_ERR=-66002]="EC_REDIS_GET_OP_ERR",e[e.EC_REDIS_DEL_OP_ERR=-66003]="EC_REDIS_DEL_OP_ERR",e[e.EC_REDIS_EXPIRE_OP_ERR=-66004]="EC_REDIS_EXPIRE_OP_ERR",e[e.EC_REDIS_LOCK_OP_ERR=-66005]="EC_REDIS_LOCK_OP_ERR",e[e.EC_REDIS_LOCK_ALREADY_EXIST=-66006]="EC_REDIS_LOCK_ALREADY_EXIST",e[e.EC_REDIS_LIST_OP_ERR=-66020]="EC_REDIS_LIST_OP_ERR",e[e.EC_REDIS_LIST_POP_EMPTY=-66021]="EC_REDIS_LIST_POP_EMPTY",e[e.EC_MYSQL_NO_ROW_FOUND=-66100]="EC_MYSQL_NO_ROW_FOUND",e[e.EC_MYSQL_MULTI_ROW_FOUND=-66101]="EC_MYSQL_MULTI_ROW_FOUND",e[e.EC_MYSQL_INSERT_FAIL=-66102]="EC_MYSQL_INSERT_FAIL",e[e.EC_MYSQL_DELETE_FAIL=-66103]="EC_MYSQL_DELETE_FAIL",e[e.EC_MYSQL_UPDATE_FAIL=-66104]="EC_MYSQL_UPDATE_FAIL",e[e.EC_MYSQL_QUERYS_FAIL=-66105]="EC_MYSQL_QUERYS_FAIL",e[e.EC_PB_SERIALIZE_TO_STR_ERR=-66200]="EC_PB_SERIALIZE_TO_STR_ERR",e[e.EC_PB_PARSE_FROM_STR_ERR=-66201]="EC_PB_PARSE_FROM_STR_ERR",e[e.EC_DATA_FORMAT_ERR=-66210]="EC_DATA_FORMAT_ERR",e[e.EC_JSON_FORMAT_ERR=-66211]="EC_JSON_FORMAT_ERR",e[e.EC_JSON_PLAY_MODE_FORMAT_ERR=-66212]="EC_JSON_PLAY_MODE_FORMAT_ERR",e[e.EC_JSON_PLAY_MODE_PARISE_ERR=-66213]="EC_JSON_PLAY_MODE_PARISE_ERR",e[e.EC_INVALID_PARAMS_RECORE_ID=-66601]="EC_INVALID_PARAMS_RECORE_ID",e[e.EC_HASHID_ERR=-66700]="EC_HASHID_ERR",e[e.EC_HASHID_ENCODE_ERR=-66701]="EC_HASHID_ENCODE_ERR",e[e.EC_HASHID_DECODE_ERR=-66702]="EC_HASHID_DECODE_ERR",e[e.EC_CONF_ROOM_ID_BUCKET_ERR=-66801]="EC_CONF_ROOM_ID_BUCKET_ERR",e[e.EC_SDK_SEND_FAIL=90001]="EC_SDK_SEND_FAIL",e[e.EC_SDK_UNINIT=90002]="EC_SDK_UNINIT",e[e.EC_SDK_RES_TIMEOUT=90003]="EC_SDK_RES_TIMEOUT",e[e.EC_SDK_NO_LOGIN=90004]="EC_SDK_NO_LOGIN",e[e.EC_SDK_NO_CHECK_LOGIN=90005]="EC_SDK_NO_CHECK_LOGIN",e[e.EC_SDK_SOCKET_ERROR=90006]="EC_SDK_SOCKET_ERROR",e[e.EC_SDK_SOCKET_CLOSE=90007]="EC_SDK_SOCKET_CLOSE",e[e.EC_SDK_NO_ROOM=90008]="EC_SDK_NO_ROOM"}(n=e.QAppProtoErrCode||(e.QAppProtoErrCode={})),function(e){e[e.COMMON_OFFLINE=0]="COMMON_OFFLINE",e[e.COMMON_ONLINE=1]="COMMON_ONLINE",e[e.RELAY_OFFLINE=2]="RELAY_OFFLINE",e[e.RELAY_ONLINE=3]="RELAY_ONLINE"}(o=e.NetworkState||(e.NetworkState={})),function(e){e[e.COMMON_CREATE=0]="COMMON_CREATE",e[e.MATCH_CREATE=1]="MATCH_CREATE"}(r=e.CreateRoomType||(e.CreateRoomType={})),function(e){e[e.STOP=0]="STOP",e[e.START=1]="START"}(i=e.FrameSyncState||(e.FrameSyncState={})),function(e){e[e.COMMON_JOIN=0]="COMMON_JOIN",e[e.MATCH_JOIN=1]="MATCH_JOIN"}(E=e.JoinRoomType||(e.JoinRoomType={})),function(e){e[e.PENDING=0]="PENDING",e[e.MATCHING=1]="MATCHING",e[e.SUCCESS=3]="SUCCESS",e[e.TIMEOUT=4]="TIMEOUT"}(a=e.MatchStatus||(e.MatchStatus={})),function(e){e[e.ROOM_SIMPLE=1]="ROOM_SIMPLE",e[e.PLAYER_COMPLEX=2]="PLAYER_COMPLEX"}(R=e.MatchType||(e.MatchType={})),function(e){e[e.E_GS_FORWARDTYPE_DEFAULT=0]="E_GS_FORWARDTYPE_DEFAULT",e[e.E_GS_FORWARDTYPE_NOTIFY_CONNECTION=1]="E_GS_FORWARDTYPE_NOTIFY_CONNECTION",e[e.E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT=2]="E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT",e[e.E_GS_FORWARDTYPE_NOTIFY_COM_EVENT=3]="E_GS_FORWARDTYPE_NOTIFY_COM_EVENT",e[e.E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR=4]="E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR"}(c=e.GameSvrForwardType||(e.GameSvrForwardType={}))}(_||(_={}))},function(e,t,s){"use strict";s.d(t,"a",function(){return _});const _={onPingTime:e=>null,onFitFrameTime:e=>null,onBstFrameRate:e=>null,onRenderFrameRate:e=>null}},function(e,t,s){"use strict";const _=s(1).a.QAppProtoErrCode;var n;!function(e){e.EC_SDK_SEND_FAIL="发送失败",e.EC_SDK_UNINIT="未初始化",e.EC_SDK_RES_TIMEOUT="发送超时",e.EC_SDK_NO_LOGIN="未登录",e.EC_SDK_NO_CHECK_LOGIN="CheckLogin失败",e.EC_SDK_SOCKET_ERROR="Socket错误",e.EC_SDK_SOCKET_CLOSE="Socket断开",e.EC_SDK_NO_ROOM="无房间信息"}(n||(n={}));const o={};o[_.EC_SDK_SEND_FAIL]=n.EC_SDK_SEND_FAIL,o[_.EC_SDK_UNINIT]=n.EC_SDK_UNINIT,o[_.EC_SDK_RES_TIMEOUT]=n.EC_SDK_RES_TIMEOUT,o[_.EC_SDK_NO_LOGIN]=n.EC_SDK_NO_LOGIN,o[_.EC_SDK_NO_CHECK_LOGIN]=n.EC_SDK_NO_CHECK_LOGIN,o[_.EC_SDK_SOCKET_ERROR]=n.EC_SDK_SOCKET_ERROR,o[_.EC_SDK_SOCKET_CLOSE]=n.EC_SDK_SOCKET_CLOSE,o[_.EC_SDK_NO_ROOM]=n.EC_SDK_NO_ROOM,t.a=_},function(e,t,s){"use strict";var _,n=s(1);!function(e){let t,s,_,n,o;!function(e){e[e.ROOM_ALL=1]="ROOM_ALL",e[e.ROOM_OTHERS=2]="ROOM_OTHERS",e[e.ROOM_SOME=3]="ROOM_SOME"}(t=e.RecvType||(e.RecvType={})),function(e){e[e.ROOM_SIMPLE=1]="ROOM_SIMPLE",e[e.PLAYER_COMPLEX=2]="PLAYER_COMPLEX"}(s=e.MatchType||(e.MatchType={})),function(e){e[e.COMMON_CREATE=0]="COMMON_CREATE",e[e.MATCH_CREATE=1]="MATCH_CREATE"}(_=e.CreateRoomType||(e.CreateRoomType={})),function(e){e[e.COMMON_OFFLINE=0]="COMMON_OFFLINE",e[e.COMMON_ONLINE=1]="COMMON_ONLINE",e[e.RELAY_OFFLINE=2]="RELAY_OFFLINE",e[e.RELAY_ONLINE=3]="RELAY_ONLINE"}(n=e.NetworkState||(e.NetworkState={})),function(e){e[e.STOP=0]="STOP",e[e.START=1]="START"}(o=e.FrameSyncState||(e.FrameSyncState={}))}(_||(_={}));const o={get CreateRoomType(){return n.a.CreateRoomType},get MatchType(){return n.a.MatchType},get NetworkState(){return n.a.NetworkState},get FrameSyncState(){return n.a.FrameSyncState},get RecvType(){return _.RecvType}};t.a=o},function(e,t,s){var _;e.exports=(_=_||function(e,t){var s=Object.create||function(){function e(){}return function(t){var s;return e.prototype=t,s=new e,e.prototype=null,s}}(),_={},n=_.lib={},o=n.Base={extend:function(e){var t=s(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},r=n.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||E).stringify(this)},concat:function(e){var t=this.words,s=e.words,_=this.sigBytes,n=e.sigBytes;if(this.clamp(),_%4)for(var o=0;o<n;o++){var r=s[o>>>2]>>>24-o%4*8&255;t[_+o>>>2]|=r<<24-(_+o)%4*8}else for(var o=0;o<n;o+=4)t[_+o>>>2]=s[o>>>2];return this.sigBytes+=n,this},clamp:function(){var t=this.words,s=this.sigBytes;t[s>>>2]&=4294967295<<32-s%4*8,t.length=e.ceil(s/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var s,_=[],n=function(t){var t=t,s=987654321,_=4294967295;return function(){var n=((s=36969*(65535&s)+(s>>16)&_)<<16)+(t=18e3*(65535&t)+(t>>16)&_)&_;return n/=4294967296,(n+=.5)*(e.random()>.5?1:-1)}},o=0;o<t;o+=4){var i=n(4294967296*(s||e.random()));s=987654071*i(),_.push(4294967296*i()|0)}return new r.init(_,t)}}),i=_.enc={},E=i.Hex={stringify:function(e){for(var t=e.words,s=e.sigBytes,_=[],n=0;n<s;n++){var o=t[n>>>2]>>>24-n%4*8&255;_.push((o>>>4).toString(16)),_.push((15&o).toString(16))}return _.join("")},parse:function(e){for(var t=e.length,s=[],_=0;_<t;_+=2)s[_>>>3]|=parseInt(e.substr(_,2),16)<<24-_%8*4;return new r.init(s,t/2)}},a=i.Latin1={stringify:function(e){for(var t=e.words,s=e.sigBytes,_=[],n=0;n<s;n++){var o=t[n>>>2]>>>24-n%4*8&255;_.push(String.fromCharCode(o))}return _.join("")},parse:function(e){for(var t=e.length,s=[],_=0;_<t;_++)s[_>>>2]|=(255&e.charCodeAt(_))<<24-_%4*8;return new r.init(s,t)}},R=i.Utf8={stringify:function(e){try{return decodeURIComponent(escape(a.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return a.parse(unescape(encodeURIComponent(e)))}},c=n.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new r.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=R.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var s=this._data,_=s.words,n=s.sigBytes,o=this.blockSize,i=4*o,E=n/i,a=(E=t?e.ceil(E):e.max((0|E)-this._minBufferSize,0))*o,R=e.min(4*a,n);if(a){for(var c=0;c<a;c+=o)this._doProcessBlock(_,c);var C=_.splice(0,a);s.sigBytes-=R}return new r.init(C,R)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),C=(n.Hasher=c.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){c.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,s){return new e.init(s).finalize(t)}},_createHmacHelper:function(e){return function(t,s){return new C.HMAC.init(e,s).finalize(t)}}}),_.algo={});return _}(Math),_)},function(e,t,s){"use strict";const _=s(8);class n{}n.enable=!1,n.exclude=[],n.callback=(e=>console.log(...e)),n.log=((...e)=>{if(!n.enable)return;if(Array.isArray(n.exclude)&&n.exclude.findIndex(t=>t===e[0])>=0)return;const t=[`DEBUGGER_v${_.version}_${_.sdkType} `+Date.now()].concat(e);"function"==typeof n.callback&&n.callback(t)}),Object.defineProperty(n,"log",{enumerable:!1,configurable:!1,writable:!1,value:n.log}),t.a=n},function(e,t,s){"use strict";var _=s(0);const n={get id(){return _.d.getInfo().id},get openId(){return _.k.openId},get name(){return _.d.getInfo().name},get teamId(){return _.d.getInfo().teamId},get customPlayerStatus(){return _.d.getInfo().customPlayerStatus},get customProfile(){return _.d.getInfo().customProfile},get commonNetworkState(){return _.d.getInfo().commonNetworkState},get relayNetworkState(){return _.d.getInfo().relayNetworkState}};t.a=n},function(e){e.exports={sdkType:1,version:"1.1.1"}},function(e,t,s){"use strict";var _={};s.r(_),s.d(_,"DebuggerLog",function(){return c.a}),s.d(_,"getSequenceStr",function(){return I}),s.d(_,"Base64",function(){return d}),s.d(_,"HmacSHA1",function(){return l}),s.d(_,"errCodeConvert",function(){return p}),s.d(_,"getPlatform",function(){return M}),s.d(_,"getChannel",function(){return h}),s.d(_,"deviceId",function(){return m});var n={};s.r(n),s.d(n,"_string",function(){return q}),s.d(n,"_bytes",function(){return W}),s.d(n,"_bool",function(){return j}),s.d(n,"_uint64",function(){return X}),s.d(n,"_uint32",function(){return J}),s.d(n,"_int32",function(){return z}),s.d(n,"_varint",function(){return $});var o={};s.r(o),s.d(o,"_string",function(){return se}),s.d(o,"_bytes",function(){return _e}),s.d(o,"_bool",function(){return ne}),s.d(o,"_uint64",function(){return oe}),s.d(o,"_uint32",function(){return re}),s.d(o,"_int32",function(){return ie}),s.d(o,"_varint",function(){return Ee});var r=s(0);class i{constructor(e=-1){this.id=e}}const E=(e,t,s)=>{clearTimeout(e.id),e.id=setTimeout(t,s)},a=(...e)=>{e.forEach(e=>e&&clearTimeout(e.id))};var R,c=s(6);function C(){if("undefined"==typeof wx)return!1;if(void 0===wx.onHide)return!1;if(void 0===wx.offHide)return!1;if(void 0===wx.onShow)return!1;if(void 0===wx.offShow)return!1;if(void 0===wx.getSystemInfoSync)return!1;try{if(!wx.getSystemInfoSync())return!1}catch(e){return!1}return!0}!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.ANDROID=1]="ANDROID",e[e.IOS=2]="IOS"}(R||(R={}));const d=s(14),l=s(15),O=s(18).default,S=new O(T(),16),u=new O(T(),32);let A=1;function I(){const e=S.encode(A++);return A>=Number.MAX_SAFE_INTEGER&&(A=1),e}function T(){let e=Date.now().toString(36);for(let s=0;s<6;s++)e+=(t=1e6,Math.ceil((Math.random()+1)*t)).toString(36);var t;return e}const m=u.encode(Date.now()),p=(e,t)=>(e<0&&(t=`服务器内部错误[${e}]`,e=r.c.EC_INNER_ERROR),{errCode:e,errMsg:t});function M(){let e=R.UNKNOWN;return C()&&(e=function(){if(!C())return R.UNKNOWN;const e=wx.getSystemInfoSync(),t=e?e.system+"":"";return t.includes("Android")?R.ANDROID:t.includes("iOS")?R.IOS:R.UNKNOWN}()),e}function h(){let e=0;return C()&&(e=1),e}const f={connect:"connect",connectClose:"connectClose",connectClosing:"connectClosing",connectError:"connectError",connecting:"connecting",message:"message",autoAuth:"autoAuth"},N=Object.keys(f);var L=class{constructor(e,t){this.isMsgBind=!1,this.forceClose=!1,this.init(t),this.id=e}init(e){this.url=e,this.eventCallbacks=[],this.eventOnceCallbacks=new Map,this.socketTask=null;const t=new i;let s=0;const _=()=>{c.a.log("SOCKET_OPEN",this.id,this.isConnect()),s=0,O(),a(t)},n=e=>{c.a.log("SOCKET_CLOSE",e,this.id),l(),E(t,()=>R("close"),r.j.reconnectInterval),this.forceClose&&(s=0,this.forceClose=!1,a(t))},o=e=>{c.a.log("SOCKET_ERROR",e,this.id,this.socketTask&&this.socketTask.readyState),d(f.connectError,{msg:"socket connectError",data:e}),E(t,()=>R("error"),r.j.reconnectInterval)},R=e=>{if(!this.url)throw new Error("socket.url = "+this.url);if(!this.isConnect()&&!this.isClose())return E(t,()=>R("open"),r.j.reconnectInterval);if(!this.isClose())return;if(c.a.log("SOCKET_TRY_OPEN",this.id,e,this.socketTask&&this.socketTask.readyState,s,r.j.reconnectMaxTimes),++s>r.j.reconnectMaxTimes)return s=0,void c.a.log("SOCKET_RECONNECT_TIMEOUT");const i="wss://"+this.url.replace("wss://","").replace("ws://","");a(t),this.forceClose=!1,this.socketTask=wx.connectSocket({url:i,fail:()=>console.error("connectSocket fail")}),this.socketTask.onOpen(_.bind(this)),this.socketTask.onClose(n.bind(this)),this.socketTask.onError(o.bind(this)),this.socketTask.onMessage((e=>{d(f.message,{msg:"socket message",data:e.data})}).bind(this))},C=e=>{c.a.log("SOCKET_CONNECT",this.id,e),!this.isConnect()&&s>0&&s<r.j.reconnectMaxTimes||(s=0,R(e+" connect"))},d=(e,t={})=>{t.tag=e,this.eventCallbacks.forEach(([s,_])=>{s!==e&&"*"!==s||_(t)});const s=this.eventOnceCallbacks.get(e);s&&(s(t),this.eventOnceCallbacks.delete(e))},l=()=>d(f.connectClose,{msg:"socket is closed"}),O=()=>d(f.connect,{msg:"socket is connected"});this.connect=C,this.connectNewSocket=(e=>{c.a.log("SOCKET_CONNECT_NEW",this.id,this.isClose()),this.url=e,s=0;const t=()=>{C("connectNewSocket")};this.close(t,t)}),this.send=((e,{fail:t,success:s})=>{if(!this.isConnect())return t({data:e}),void C("send");this.socketTask.send({data:e.buffer,fail:s=>{c.a.log("SOCKET_SEND_FAIL",this.id,s),t({data:e})},success:()=>{s({data:e})}})}),this.close=((e,t)=>{if(this.forceClose=!0,!this.socketTask)return e&&e(),l();this.socketTask.close({success:t=>{c.a.log("SOCKET_CLOSE_SUCCESS",this.id,t),this.socketTask=null,e&&e()},fail:e=>{c.a.log("SOCKET_CLOSE_ERROR",this.id,e),this.socketTask=null,t&&t()}})}),this.destory=(()=>{a(t),!this.isClose()&&this.close(),this.eventCallbacks=[],this.isMsgBind=!1}),this.isConnect=(()=>this.socketTask&&this.socketTask.readyState===this.socketTask.OPEN),this.isConnecting=(()=>this.socketTask&&this.socketTask.readyState===this.socketTask.CONNECTING),this.isClose=(()=>!this.socketTask||this.socketTask&&this.socketTask.readyState===this.socketTask.CLOSED),this.isClosing=(()=>this.socketTask&&this.socketTask.readyState===this.socketTask.CLOSING),this.on=((e,t)=>{(N.includes(e)||"*"===e)&&"function"==typeof t&&(this.eventCallbacks.push([e,t]),e===f.message&&(this.isMsgBind=!0))}),this.once=((e,t)=>{N.includes(e)&&"function"==typeof t&&this.eventOnceCallbacks.set(e,t)}),this.emit=d}},y=s(1);const g=[r.e.E_CMD_LOGIN_REQ,r.e.E_CMD_LOGOUT_REQ],P=[r.e.E_CMD_RELAY_SEND_FRAME_REQ,r.e.E_CMD_RELAY_REQUEST_FRAME_REQ,r.e.E_CMD_HEART_BEAT_REQ,r.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ],D={FAIL:!1,SUCCESS:!0};var Y;!function(e){e[e.CLIENT_PRE=parseInt("0x2",16)]="CLIENT_PRE",e[e.CLIENT_END=parseInt("0x3",16)]="CLIENT_END",e[e.SERVER_PRE=parseInt("0x28",16)]="SERVER_PRE",e[e.SERVER_END=parseInt("0x29",16)]="SERVER_END"}(Y||(Y={}));class v{constructor(){this.queue=new Set,this.bdHandlers=new Set,this.socket=null}static startQueueLoop(){E(v.timer,()=>{const e=Date.now();return Array.from(v.sendQueue).forEach(([t,s])=>{if(e-s.time>r.j.resendTimeout){let e,t="";r.i.isStatus(r.i.StatusType.LOGIN)?e=r.c.EC_SDK_RES_TIMEOUT:r.i.getErrCode()===r.c.EC_OK?(e=r.c.EC_SDK_NO_LOGIN,t="登录失败"):(e=r.i.getErrCode(),t="登录失败，"+r.i.getErrMsg()),s.sendFail(e,t)}else!s.isSocketSend&&e-s.time>=r.j.resendInterval&&s.resend()}),v.startQueueLoop()},r.j.resendInterval)}static stopQueueLoop(){a(v.timer),Array.from(v.sendQueue).forEach(([e,t])=>{t.remove()}),v.sendQueue.clear()}bindSocket(e,t,s){if(this.socket||!e)return!1;this.socket=e;return!this.socket.isMsgBind&&this.socket.on(f.message,(e=>{if(!e.data)return;const{body:_,pre:n,end:o}=this.unpackBody(new Uint8Array(e.data));n===Y.CLIENT_PRE&&o===Y.CLIENT_END&&t(_),n===Y.SERVER_PRE&&o===Y.SERVER_END&&s(_)}).bind(this)),!0}unbindSocket(){this.socket=null,this.clearQueue(),this.clearBdHandlers()}clearQueue(){Array.from(this.queue).forEach(e=>{this.deleteSeqQueue(e)})}clearBdHandlers(){Array.from(this.bdHandlers).forEach(e=>{v.broadcastHandlers.delete(e),this.bdHandlers.delete(e)})}deleteSeqQueue(e){v.sendQueue.delete(e),this.queue.delete(e)}addSeqQueue(e,t){v.sendQueue.set(e,t),this.queue.add(e)}setBroadcastHandler(e,t){v.broadcastHandlers.set(e,t),this.bdHandlers.add(e)}handleErrCode(e){return!1}send(e,t,s){const _=this.getReadyCode(s);return v.sendQueue.size>10&&c.a.log("SENDQUEUE_size",v.sendQueue.size),0!==_?this.handleSendFail(t,_):this.socket.send(e,{fail:e=>this.handleSendFail(t,e),success:()=>this.handleSendSuccess(t)}),t}buildData(e,t,s){const _=5+t.length+1,n=new Uint8Array(function(e,t){let s=[];for(;e>255;)s.push(255&e),e>>=8;0!==e&&s.push(e);s=s.slice(0,t);for(;s.length<t;)s.push(0);return s.reverse()}(_,4)),o=new Uint8Array(_);return o.set(e),o.set(n,e.length),o.set(t,e.length+n.length),o.set(s,e.length+n.length+t.length),o}unpackBody(e){const t=e.slice(1,5),s=function(e){let t=0;const s=e.length;for(let _=s-1;_>=0;_--)t+=e[_]*Math.pow(2,8*(s-1-_));return t}(Array.from(t))-6;return{body:e.slice(5,5+s),pre:e[0],end:e[e.length-1]}}handleSendFail(e,t){const s=v.sendQueue.get(e);if(s)return Date.now()-s.time>r.j.resendTimeout?s.sendFail(r.i.getErrCode()||t):t===r.c.EC_SDK_UNINIT?s.sendFail(t):t===r.c.EC_SDK_NO_LOGIN?this.socket.emit(f.autoAuth,{}):t===r.c.EC_SDK_NO_CHECK_LOGIN?this.socket.emit(f.autoAuth,{}):void 0}handleSendSuccess(e){if(!v.sendQueue.has(e))return;v.sendQueue.get(e).sendSuccess()}getReadyCode(e){return r.h.isInited()||e===r.e.E_CMD_LOGIN_REQ?this.socket&&this.socket.url?r.i.isStatus(r.i.StatusType.LOGIN)||g.includes(e)?this.socket.id===y.a.ConnectionType.RELAY&&!r.a.isChecked()&&P.includes(e)?r.c.EC_SDK_NO_CHECK_LOGIN:0:r.c.EC_SDK_NO_LOGIN:r.c.EC_SDK_SEND_FAIL:(console.error("MGOBE.Listener 未初始化"),r.d.setInfo({id:""}),r.i.setStatus(r.i.StatusType.LOGOUT),r.c.EC_SDK_UNINIT)}}v.sendQueue=new Map,v.broadcastHandlers=new Map,v.timer=new i;var F=v;function U(e,t){if(G(t>=32,"无符号左移不能大于32位！",{value:e,offset:t}),0===e)return 0;let s=e<<t;return s<=0&&(s=e*Math.pow(2,t)),s}function H(e,t){if(G(t>=32,"无符号右移不能大于32位！",{value:e,offset:t}),e>=B){let s=e>>>0,_=(e-s)/B;return s=H(s,t),(_=U(_,32-t))+s}return e>>>t}function b(e,t=""){throw"object"==typeof t&&(t=JSON.stringify(t)),new Error(e+"\n"+t)}function G(e,t,s=""){e&&b(t,s)}function k(e,t){Array.isArray(t)||(t=[t]);const s=t.length;for(let _=0;_<s;_++)e.push(t[_])}function Q(e,t){if(e)return Array.isArray(e)?e.forEach((s,_)=>t(s,_,e)):w(e)?Object.keys(e).forEach(s=>w(e[s])||Array.isArray(e[s])?t(e[s],s,e)&&Q(e[s],t):t(e[s],s,e)):null}function w(e){return"[object Object]"===Object.prototype.toString.apply(e)}function K(e,t,s){Object.defineProperty(e,t,{enumerable:!1,value:s})}const B=Math.pow(2,32),x=Math.pow(2,53),V=2147483647;function q(e,t,s){let _,n,o,r,i;for(_="",n=t;n<t+s;)switch((o=e[n++])>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:_+=String.fromCharCode(o);break;case 12:case 13:r=e[n++],_+=String.fromCharCode((31&o)<<6|63&r);break;case 14:r=e[n++],i=e[n++],_+=String.fromCharCode((15&o)<<12|(63&r)<<6|(63&i)<<0)}return{cursor:t+=s,value:_}}function W(e,t,s){const _=[].slice.call(e,t,t+s);return{cursor:t+=s,value:_}}function j(e,t){const s=$(e,t);G(s.value.length>1,"bool 溢出");const _=!!s.value[0];return{cursor:s.cursor,value:_}}function X(e,t){const s=$(e,t);let _=s.value;return G(_.length>2,"uint64 溢出"),_.length<2?_=s.value[0]:2===_.length&&(_=_[0]*B+_[1])>=x&&(_=s.value),{cursor:s.cursor,value:_}}function J(e,t){const s=$(e,t);return G(s.value.length>1,"uint32 溢出"),{cursor:s.cursor,value:s.value[0]}}function z(e,t){const s=$(e,t);if(G(s.value.length>2,"int32 溢出"),2===s.value.length){if(0!=~s.value[0])return b("int32 溢出");s.value[0]=s.value[1]}return s.value[0]>V&&(s.value[0]=-(1+~s.value[0])),{cursor:s.cursor,value:s.value[0]}}function $(e,t){const s=function(e,t){let s=1;for(;t<e.length&&e[t]>=128;)s++,t++;return s}(e,t),_=[];let n=0,o=0;if(1===s&&0===e[t])return{value:[0],cursor:t+1};for(let r=t;r<t+s;r++){let t=127&e[r],s=7;for(;s>0;)if(o+s<=32)n+=U(t,o),o+=s,s=0;else{const e=o+s-32,r=s-e;n+=U(t&Math.pow(2,r)-1,o),_.unshift(n),t=H(t,r),s=e,o=0,n=0}}return 0!==n&&_.unshift(n),{value:_,cursor:t+s}}function Z(e,t){let s,_;const n=$(e,t);G(n.value.length>1,"key字段长度不能大于32位！");const o=n.value[0];return t=n.cursor,_=7&o,{id:s=H(o,3),writeType:_,cursor:t}}function ee(e,t,s){return G(!["int32","uint32","uint64","bool"].includes(s),`无法解析 ${s} 类型`),n[`_${s}`](e,t)}function te(e,t,s){const _=$(e,t),n=[];let o=_;if(G(_.value.length>1,"目前只支持长度为小于 32位 的数据 ！"),"string"===s)return q(e,o.cursor,o.value[0]);if("bytes"===s)return W(e,o.cursor,o.value[0]);for(let t=0;t<_.value[0];t++)o=X(e,o.cursor),n.push(o.value);return{value:n,cursor:o.cursor}}function se(e){e+="";let t=new Array;for(let s=0;s<e.length;s++){let _=e.charCodeAt(s);if(_<128)t.push(_);else if(_<2048)t.push(_>>6|192),t.push(63&_|128);else if(_<65536)if(_>=55296&&_<=56319&&s+1<e.length){const n=e.charCodeAt(s+1);n>=56320&&n<=57343&&(_=1024*(_-55296)+n-56320+65536,t.push(_>>18|240),t.push(_>>12&63|128),t.push(_>>6&63|128),t.push(63&_|128),s++)}else t.push(_>>12|224),t.push(_>>6&63|128),t.push(63&_|128)}const s=t.length;return G(s>=Math.pow(2,32),"数组长度过大"),t=Ee(s).concat(t)}function _e(e){e.forEach(e=>e>=256&&b("byte 溢出"));const t=Ee(e.length),s=e.length;for(let _=0;_<s;_++)t.push(e[_]);return t}function ne(e){return Ee(e=e?1:0)}function oe(e){let t,s;return Array.isArray(e)?(s=(Math.round(Math.abs(Number(e[0])))||0)>>>0,t=(Math.round(Math.abs(Number(e[1])))||0)>>>0):s=((e=Math.round(Math.abs(Number(e)))||0)-(t=e>>>0))/B,Ee([s,t])}function re(e){return(e=Math.round(Math.abs(Number(e)))||0)>=B&&(e=B-1),Ee(e)}function ie(e){return Ee(e=Math.round(Number(e))||0)}function Ee(e){Array.isArray(e)||(e=[e]);let t=[];const s=e.length;let _=0,n=0;return e.reverse().forEach((e,o)=>{for(e=Number(e)||0,n=U(e,_)+n,_+=32;_>7;){const e=n-U(H(n,7),7);if(t.push(e),n=H(n,7),_-=7,0===n&&o===s-1)break}}),0!==n&&t.push(n),t=t.map((e,s)=>s===t.length-1?e:e+128)}function ae(e,t){return G(e>Math.pow(2,29)-1,"key字段长度不能大于32位！"),Ee([U(e,3)+t])}function Re(e,t){return o[`_${t}`](e)}const ce=[["int32","int64","uint32","uint64","sint32","sint64","bool","enum"],["fixed64","sfixed64","double"],["string","bytes"],["_deprecated_"],["_deprecated_"],["fixed32","sfixed32","float"]],Ce=["int64","sint32","sint64","enum","fixed64","sfixed64","double","fixed32","sfixed32","float"],de=["int32","int64","uint32","uint64"],le="repeated",Oe="__parent",Se="__typeof",ue="__keyname",Ae="__primitive",Ie="__message",Te="__enum",me=".";const pe=(e,t,s)=>{const _=[],{type:n,id:o,rule:r}=e,i=Ne(n),E=-1!==i,a=r===le,R=function(e){return de.findIndex(t=>t===e)>=0}(n);if(G(Le(n),`类型错误： ${n} 不支持`),G(a&&!Array.isArray(t),"repeated 类型值应该为数组",e),!E&&a)Q(t,e=>{k(_,ae(o,2)),k(_,Re(Me(e,n,s),"bytes"))});else if(E&&a&&R){const e=[];k(_,ae(o,2)),Q(t,t=>k(e,Re(t,n))),k(_,Re(e,"bytes"))}else if(E&&a&&!R)Q(t,e=>{k(_,ae(o,2)),k(_,Re(e,n))});else if(E||a){if(!E||a)return b("字段编码失败",{writeType:i,rule:r});k(_,ae(o,i)),k(_,Re(t,n))}else e[Se]===Te?(k(_,ae(o,0)),k(_,Re(t,"uint32"))):(t=Me(t,n,s),k(_,ae(o,2)),k(_,Re(t,"bytes")));return _},Me=(e,t,s)=>{const _=[],n=ge(s,t).fields;return Q(e,(e,t,o)=>{if(null==e||!n[t])return!1;const r=pe(n[t],e,s);k(_,r)}),_};const he=(e,t,s,_,n)=>{for(;t<e.length;){const o=Z(e,t);let r;t=o.cursor;const i=ye(_,o.id);let E=i.type;const a=0===o.writeType,R=i[Se]===Te,c=i[Se]===Ae,C=2===o.writeType;if(G(Le(E),`类型错误： ${E} 不支持`),C&&c)r=te(e,t,E);else if(C&&!c){const _=(r=ee(e,t,"uint32")).cursor,n=r.cursor+r.value,o=s(E,i);r.value=o.decode(e.slice(_,n)),r.cursor=n}else{if(!a)return b("不支持该类型",{keyInfo:o,field:i});R&&(E="uint32"),r=ee(e,t,E)}t=r.cursor,fe(i,r.value,n)}},fe=(e,t,s)=>{const _=e[ue];e.rule===le&&s[_]?s[_].push(t):e.rule!==le||s[_]?s[_]=t:(s[_]=[],k(s[_],t))};function Ne(e){return ce.findIndex(t=>t.includes(e))}function Le(e){return Ce.includes(e)}function ye(e,t){let s;return Q(e.fields,e=>{e.id===t&&(s=e)}),G(!s,"无法获取到类型",{id:t,fields:e.fields}),s}function ge(e,t){let s=e;const _=t.split(me);let n=null;for(;s!==s[Oe];){if(s.nested&&s.nested.hasOwnProperty(_[0])){n=_.reduce((e,t)=>e.nested[t],s);break}s=s[Oe]}return s!==s[Oe]||n||s.nested&&s.nested.hasOwnProperty(_[0])&&(n=_.reduce((e,t)=>e.nested[t],s)),G(!n,"没有嵌套类型，无法查询！",{message:e,paths:_}),n}var Pe=class{constructor(e,t=""){var s;this.proto=(s=function(e,t){G(!w(e.nested),"没有嵌套类型，无法移除！",{proto:e,packageName:t});const s=t.split(me);return""===t?e:s.reduce((e,t)=>e.nested[t],e)}(e,t),JSON.parse(JSON.stringify(s))),K(this.proto,Oe,this.proto),Q(this.proto,(e,t,s)=>!(t===Oe||!w(e)||(K(e,Oe,s),K(e,ue,t),0))),Q(this.proto,(e,t,s)=>{if(!w(e))return!1;if("fields"===t)return!0;if(!e.hasOwnProperty("type"))return!0;let _=Ae;return function(e){return ce.findIndex(t=>t.includes(e))>=0}(e.type)||(_=Ie,ge(e,e.type).values&&(_=Te)),K(e,Se,_),K(e,ue,t),!1})}getConverter(e,t){const s=ge(t=t||this.proto,e),_=this.getConverter.bind(this);return{decode:e=>(function(e,t,s,_){const n=function(e){const t={},s=Object.keys(e.fields);for(const _ of s){const s=e.fields[_];if(s[Se]===Te){t[_]=0;continue}if(s.rule===le&&s[Se]===Ie){t[_]=[];continue}if(s[Se]!==Ae)continue;const n=Ne(s.type);switch(0===n&&(t[_]=0),s.type){case"string":t[_]="";break;case"bytes":t[_]=[];break;case"bool":t[_]=!1}}return t}(e),o=new Uint8Array(_);return he(o,0,s,e,n),n})(s,0,_,e),encode:t=>(function(e,t,s,_){const n=Me(_,t,e);return new Uint8Array(n)})(s,e,0,t)}}};const{errCodeConvert:De}=_,Ye=new Pe(s(10));function ve(e){return Ye.getConverter.bind(Ye)(e)}const Fe=new Map,Ue=new Map,He=new Map;const be=ve("lagame.ClientSendServerReqWrap1"),Ge=ve("lagame.ClientSendServerReqWrap2"),ke=ve("lagame.ClientSendServerRspWrap1"),Qe=ve("lagame.ClientSendServerRspWrap2"),we=ve("lagame.ServerSendClientBstWrap1"),Ke=ve("lagame.ServerSendClientBstWrap2");Fe.set(r.e.E_CMD_LOGIN_REQ,ve("lagame.LoginReq")),Ue.set(r.e.E_CMD_LOGIN_REQ,ve("lagame.LoginRsp")),Fe.set(r.e.E_CMD_LOGOUT_REQ,ve("lagame.LogoutReq")),Ue.set(r.e.E_CMD_LOGOUT_REQ,ve("lagame.LogoutRsp")),Fe.set(r.e.E_CMD_CHANGE_PLAYER_STATE_REQ,ve("lagame.ChangeCustomPlayerStatusReq")),Ue.set(r.e.E_CMD_CHANGE_PLAYER_STATE_REQ,ve("lagame.ChangeCustomPlayerStatusRsp")),Fe.set(r.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ,ve("lagame.SendToGameSvrReq")),Ue.set(r.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ,ve("lagame.SendToGameSvrRsp")),Fe.set(r.e.E_CMD_RELAY_SEND_FRAME_REQ,ve("lagame.SendFrameReq")),Ue.set(r.e.E_CMD_RELAY_SEND_FRAME_REQ,ve("lagame.SendFrameRsp")),Fe.set(r.e.E_CMD_ROOM_CHAT_REQ,ve("lagame.SendToClientReq")),Ue.set(r.e.E_CMD_ROOM_CHAT_REQ,ve("lagame.SendToClientRsp")),Fe.set(r.e.E_CMD_CHECK_LOGIN_REQ,ve("lagame.CheckLoginReq")),Ue.set(r.e.E_CMD_CHECK_LOGIN_REQ,ve("lagame.CheckLoginRsp")),Fe.set(r.e.E_CMD_RELAY_REQUEST_FRAME_REQ,ve("lagame.RequestFrameReq")),Ue.set(r.e.E_CMD_RELAY_REQUEST_FRAME_REQ,ve("lagame.RequestFrameRsp")),Fe.set(r.e.E_CMD_START_FRAME_SYNC_REQ,ve("lagame.StartFrameSyncReq")),Ue.set(r.e.E_CMD_START_FRAME_SYNC_REQ,ve("lagame.StartFrameSyncRsp")),Fe.set(r.e.E_CMD_STOP_FRAME_SYNC_REQ,ve("lagame.StopFrameSyncReq")),Ue.set(r.e.E_CMD_STOP_FRAME_SYNC_REQ,ve("lagame.StopFrameSyncRsp")),Fe.set(r.e.E_CMD_CREATE_ROOM_REQ,ve("lagame.CreateRoomReq")),Ue.set(r.e.E_CMD_CREATE_ROOM_REQ,ve("lagame.CreateRoomRsp")),Fe.set(r.e.E_CMD_JOIN_ROOM_REQ,ve("lagame.JoinRoomReq")),Ue.set(r.e.E_CMD_JOIN_ROOM_REQ,ve("lagame.JoinRoomRsp")),Fe.set(r.e.E_CMD_QUIT_ROOM_REQ,ve("lagame.LeaveRoomReq")),Ue.set(r.e.E_CMD_QUIT_ROOM_REQ,ve("lagame.LeaveRoomRsp")),Fe.set(r.e.E_CMD_DISSMISS_ROOM_REQ,ve("lagame.DismissRoomReq")),Ue.set(r.e.E_CMD_DISSMISS_ROOM_REQ,ve("lagame.DismissRoomRsp")),Fe.set(r.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ,ve("lagame.ChangeRoomReq")),Ue.set(r.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ,ve("lagame.ChangeRoomRsp")),Fe.set(r.e.E_CMD_REMOVE_MEMBER_REQ,ve("lagame.RemovePlayerReq")),Ue.set(r.e.E_CMD_REMOVE_MEMBER_REQ,ve("lagame.RemovePlayerRsp")),Fe.set(r.e.E_CMD_GET_ROOM_DETAIL_REQ,ve("lagame.GetRoomByRoomIdReq")),Ue.set(r.e.E_CMD_GET_ROOM_DETAIL_REQ,ve("lagame.GetRoomByRoomIdRsp")),Fe.set(r.e.E_CMD_GET_ROOM_LIST_REQ,ve("lagame.GetRoomListReq")),Ue.set(r.e.E_CMD_GET_ROOM_LIST_REQ,ve("lagame.GetRoomListRsp")),Fe.set(r.e.E_CMD_HEART_BEAT_REQ,ve("lagame.HeartBeatReq")),Ue.set(r.e.E_CMD_HEART_BEAT_REQ,ve("lagame.HeartBeatRsp")),Fe.set(r.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ,ve("lagame.MatchPlayersReq")),Ue.set(r.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ,ve("lagame.MatchPlayersRsp")),Fe.set(r.e.E_CMD_MATCH_ROOM_SIMPLE_REQ,ve("lagame.MatchRoomSimpleReq")),Ue.set(r.e.E_CMD_MATCH_ROOM_SIMPLE_REQ,ve("lagame.MatchRoomSimpleRsp")),Fe.set(r.e.E_CMD_MATCH_CANCEL_MATCH_REQ,ve("lagame.CancelPlayerMatchReq")),Ue.set(r.e.E_CMD_MATCH_CANCEL_MATCH_REQ,ve("lagame.CancelPlayerMatchRsp")),He.set(r.f.E_PUSH_TYPE_GAMESVR,ve("lagame.RecvFromGameSvrBst")),He.set(r.f.E_PUSH_TYPE_ROOM_CHAT,ve("lagame.RecvFromClientBst")),He.set(r.f.E_PUSH_TYPE_START_GAME,ve("lagame.StartFrameSyncBst")),He.set(r.f.E_PUSH_TYPE_STOP_GAME,ve("lagame.StopFrameSyncBst")),He.set(r.f.E_PUSH_TYPE_RELAY,ve("lagame.RecvFrameBst")),He.set(r.f.E_PUSH_TYPE_JOIN_ROOM,ve("lagame.JoinRoomBst")),He.set(r.f.E_PUSH_TYPE_LEAVE_ROOM,ve("lagame.LeaveRoomBst")),He.set(r.f.E_PUSH_TYPE_DISMISS_ROOM,ve("lagame.DismissRoomBst")),He.set(r.f.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY,ve("lagame.ChangeRoomBst")),He.set(r.f.E_PUSH_TYPE_REMOVE_PLAYER,ve("lagame.RemovePlayerBst")),He.set(r.f.E_PUSH_TYPE_PLAYER_STATE,ve("lagame.ChangeCustomPlayerStatusBst")),He.set(r.f.E_PUSH_TYPE_NETWORK_STATE,ve("lagame.ChangePlayerNetworkStateBst")),He.set(r.f.E_PUSH_TYPE_MATCH_TIMEOUT,ve("lagame.MatchTimeoutBst")),He.set(r.f.E_PUSH_TYPE_MATCH_SUCCESS,ve("lagame.MatchPlayersBst"));const Be=Math.pow(2,32)-1-1-4-1;function xe(e){let t=!1;return[r.c.EC_ACCESS_CMD_GET_TOKEN_ERR,r.c.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE,r.c.EC_ACCESS_CMD_INVALID_TOKEN,r.c.EC_ACCESS_GET_COMM_CONNECT_ERR].includes(e)&&(t=!0),t}function Ve(e){let t=!1;return[r.c.EC_ACCESS_GET_RELAY_CONNECT_ERR].includes(e)&&(t=!0),t}var qe=class extends F{constructor(e){super(),this.responses=e}sendRequest(e,t,s,_,n,o=""){if(!o){o=I();const r={time:Date.now(),isSocketSend:!1,cmd:t,response:e=>{s(D.SUCCESS,e,_),this.deleteSeqQueue(o)},resend:()=>this.sendRequest(e,t,s,_,n,o),sendSuccess(){this.isSocketSend=!0},sendFail:(e,t="")=>{const n={seq:o,body:null,errCode:e,errMsg:`消息发送失败，${t} [${e}]`};s(D.FAIL,{RspWrap1:n,RspWrap2:null,body:null},_),this.deleteSeqQueue(o)},remove:()=>this.deleteSeqQueue(o)};this.addSeqQueue(o,r)}const i=function(e,t,s){const _=t.cmd,n=Fe.get(_);if(!n||!n.encode)throw new Error("找不到该 cmd 编码方法: "+_);const o=n.encode(s),r=Ge.encode(Object.assign({},t,{body:o}));return be.encode(Object.assign({},e,{body:r}))}(Object.assign({},r.l,{cmd:n,seq:o,body:null}),{cmd:t,body:null},e);if(i.length>Be){const e=F.sendQueue.get(o);return setTimeout(()=>e&&e.sendFail(r.c.EC_SDK_SEND_FAIL,"数据长度超限")),o}const E=this.buildData(i);return this.send(E,o,t)}buildData(e){const t=new Uint8Array(1),s=new Uint8Array(1);return t[0]=Y.CLIENT_PRE,s[0]=Y.CLIENT_END,super.buildData(t,e,s)}handleMessage(e){let t=null;const s=function(e,t){const s=ke.decode(e),_=Qe.decode(s.body),n=t(s.seq);if(!n)return null;let o=null;const r=Ue.get(n);if(!r||!r.decode)throw new Error("找不到该 cmd 解码方法: "+n);_.body&&(o=r.decode(_.body));const{errCode:i,errMsg:E}=De(s.errCode,s.errMsg);return s.errMsg=E,s.errCode=i,s.body=null,_.body=null,{RspWrap1:s,RspWrap2:_,body:o}}(e,e=>{if(t=F.sendQueue.get(e))return t.cmd});if(t&&(t.cmd===r.e.E_CMD_HEART_BEAT_REQ||!this.handleErrCode(s.RspWrap1)))return t.response(s)}handleResponse(e){return this.handleMessage(e)}handleErrCode(e){return xe(e.errCode)?(this.handleTokenErr(),c.a.log("TOKEN_ERROR",e),!0):Ve(e.errCode)&&this.socket.id===y.a.ConnectionType.RELAY?(this.handleRelayConnectErr(),c.a.log("RELAY_CONNECT_ERROR",e),!0):(e.errCode!==r.c.EC_OK&&this.responses.error({code:e.errCode,msg:e.errMsg,seq:e.seq}),!1)}handleSuccess(e,t){e===r.c.EC_OK&&t()}handleTokenErr(){r.i.setStatus(r.i.StatusType.LOGOUT),this.socket.emit(f.autoAuth,{})}handleRelayConnectErr(){r.a.setStatus(r.a.StatusType.OFFLINE),this.socket.emit(f.autoAuth,{})}};var We,je=class extends F{constructor(){super()}buildData(e){const t=new Uint8Array(1),s=new Uint8Array(1);return t[0]=Y.SERVER_PRE,s[0]=Y.SERVER_END,super.buildData(t,e,s)}handleMessage(e){const t=function(e){const t=we.decode(e),s=Ke.decode(t.body);let _=null;const n=He.get(s.type);if(!n||!n.decode)throw new Error("找不到该 cmd 解码方法: "+s.type);return s.msg&&(_=n.decode(s.msg)),t.body=null,s.msg=null,{BstWrap1:t,BstWrap2:s,body:_}}(e),s=F.broadcastHandlers.get(t.BstWrap2.type);s&&s(t.body,t.BstWrap1.seq)}handleBroadcast(e){return this.handleMessage(e)}};!function(e){e.comm="comm_cmd",e.relay="relay_cmd"}(We||(We={}));var Xe=class{static startQueueLoop(){F.startQueueLoop()}static stopQueueLoop(){F.stopQueueLoop()}constructor(e){this.client=new qe(e),this.server=new je,this.responses=e}bindSocket(e){const t=this.client.handleResponse.bind(this.client),s=this.server.handleBroadcast.bind(this.server);this.client.bindSocket(e,t,s),this.server.bindSocket(e,t,s)}unbindSocket(){this.client.unbindSocket(),this.server.unbindSocket()}setBroadcastHandler(e,t){this.server.setBroadcastHandler(e,t)}send(e,t,s,_){let n=We.comm;return this.client.socket.id===y.a.ConnectionType.RELAY&&(n=We.relay),this.client.sendRequest(e,t,s,_,n)}};var Je=class extends Xe{constructor(e){super(e),this.matchTimeoutBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_TIMEOUT,this.matchUsersBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_SUCCESS,this.setBroadcastHandler(this.matchTimeoutBroadcastType,this.matchUsersTimeoutBroadcast.bind(this)),this.setBroadcastHandler(this.matchUsersBroadcastType,this.matchUsersBroadcast.bind(this))}matchUsersComplex(e,t){const s=r.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ,_=this.send(e,s,this.matchUsersComplexResponse.bind(this),t);return c.a.log("MATCHUSERSCOMPLEX_Para",e,_),_}matchRoom(e,t){const s=r.e.E_CMD_MATCH_ROOM_SIMPLE_REQ,_=this.send(e,s,this.matchRoomResponse.bind(this),t);return c.a.log("MATCHROOM_Para",e,_),_}cancelMatch(e,t){const s=r.e.E_CMD_MATCH_CANCEL_MATCH_REQ,_=this.send(e,s,this.cancelMatchResponse.bind(this),t);return c.a.log("CANCELMATCH_Para",e,_),_}matchUsersComplexResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.matchPlayersRsp(n)}matchRoomResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.matchRoomSimpleRsp(n)}cancelMatchResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.cancelPlayerMatchRsp(n)}matchUsersTimeoutBroadcast(e,t){const s={data:e,seq:t};return this.responses.onMatchTimeout(s)}matchUsersBroadcast(e,t){const s={data:e,seq:t};return this.responses.onMatchPlayers(s)}};var ze,$e=class extends Xe{constructor(e){super(e),this.joinRoomBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_JOIN_ROOM,this.leaveRoomBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_LEAVE_ROOM,this.dismissRoomBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_DISMISS_ROOM,this.changeRoomBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY,this.removeUserBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_REMOVE_PLAYER,this.changeUserStateBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_PLAYER_STATE,this.roomUserNetworkBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_NETWORK_STATE,this.testBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_TEST,this.setBroadcastHandler(this.joinRoomBroadcastType,this.onJoinRoom.bind(this)),this.setBroadcastHandler(this.leaveRoomBroadcastType,this.onLeaveRoom.bind(this)),this.setBroadcastHandler(this.dismissRoomBroadcastType,this.onDismissRoom.bind(this)),this.setBroadcastHandler(this.changeRoomBroadcastType,this.onChangeRoom.bind(this)),this.setBroadcastHandler(this.removeUserBroadcastType,this.onRemoveUser.bind(this)),this.setBroadcastHandler(this.changeUserStateBroadcastType,this.onChangeUserState.bind(this)),this.setBroadcastHandler(this.roomUserNetworkBroadcastType,this.onChangePlayerNetworkState.bind(this)),this.setBroadcastHandler(this.testBroadcastType,this.testBroadcast.bind(this))}createRoom(e,t){const s=r.e.E_CMD_CREATE_ROOM_REQ,_=this.send(e,s,this.createRoomResponse.bind(this),t);return c.a.log("CREATEROOM_Para",e,_),_}joinRoom(e,t){const s=r.e.E_CMD_JOIN_ROOM_REQ,_=this.send(e,s,this.joinRoomResponse.bind(this),t);return c.a.log("JOINROOM_Para",e,_),_}leaveRoom(e,t){const s=r.e.E_CMD_QUIT_ROOM_REQ,_=this.send(e,s,this.leaveRoomResponse.bind(this),t);return c.a.log("LEAVEROOM_Para",e,_),_}dismissRoom(e,t){const s=r.e.E_CMD_DISSMISS_ROOM_REQ,_=this.send(e,s,this.dismissRoomResponse.bind(this),t);return c.a.log("DISMISSROOM_Para",e,_),_}changeRoom(e,t){const s=r.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ,_=this.send(e,s,this.changeRoomResponse.bind(this),t);return c.a.log("CHANGEROOM_Para",e,_),_}removeUser(e,t){const s=r.e.E_CMD_REMOVE_MEMBER_REQ,_=this.send(e,s,this.removeUserResponse.bind(this),t);return c.a.log("REMOVEUSER_Para",e,_),_}getRoomByRoomId(e,t){const s=r.e.E_CMD_GET_ROOM_DETAIL_REQ,_=this.send(e,s,this.getRoomByRoomIdRsp().bind(this),t);return c.a.log("GETROOMBYROOMID_Para",e,_),_}getRoomList(e,t){const s=r.e.E_CMD_GET_ROOM_LIST_REQ,_=this.send(e,s,this.getRoomListResponse.bind(this),t);return c.a.log("GETROOMLIST_Para",e,_),_}createRoomResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.createRoomRsp(n)}joinRoomResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.joinRoomRsp(n)}leaveRoomResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.leaveRoomRsp(n)}dismissRoomResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.dismissRoomRsp(n)}changeRoomResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.changeRoomRsp(n)}removeUserResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.removePlayerRsp(n)}getRoomByRoomIdRsp(){return(e,t,s)=>{const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};s&&s(n),this.responses.getRoomByRoomIdRsp(n)}}getRoomListResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.getRoomListRsp(n)}testBroadcast(e,t){const s={data:e,seq:t};c.a.log("test 广播",s)}onJoinRoom(e,t){const s={data:e,seq:t};return this.responses.onJoinRoom(s)}onLeaveRoom(e,t){const s={data:e,seq:t};return this.responses.onLeaveRoom(s)}onDismissRoom(e,t){const s={data:e,seq:t};return this.responses.onDismissRoom(s)}onChangeRoom(e,t){const s={data:e,seq:t};return this.responses.onChangeRoom(s)}onRemoveUser(e,t){const s={data:e,seq:t};return this.responses.onRemovePlayer(s)}onChangeUserState(e,t){const s={data:e,seq:t};return this.responses.onChangeCustomPlayerStatus(s)}onChangePlayerNetworkState(e,t){const s={data:e,seq:t};return this.responses.onChangePlayerNetworkState(s)}};!function(e){e.initSdk="init_sdk",e.request="request",e.ping="ping",e.recFrame="recframeInfo"}(ze||(ze={}));var Ze=s(2),et=s(7);const tt=s(8);let st=null,_t=!1,nt=[];const ot={frameTimes:[],sendRecvTimes:[],sendRecvSum:0,frameSum:0,recFrameSum:0};let rt=1e4;setInterval(()=>{if(_t){if(0!==nt.length){const e=JSON.stringify(nt);nt=[],ct(ze.request,{requests:e})}if(0!==ot.frameTimes.length||0!==ot.sendRecvTimes.length){const e=JSON.stringify(ot.frameTimes),t=JSON.stringify(ot.sendRecvTimes),s=ot.frameTimes.length,_=ot.sendRecvTimes.length,n=ot.sendRecvSum,o=ot.frameSum,r=ot.recFrameSum,i=ot.sendRecvSum/_||0,E=ot.frameSum/s||0,a=ot.recFrameSum/s||0;ct(ze.recFrame,{frameTimes:e,sendRecvTimes:t,frameCount:s,sendRecvCount:_,sendRecvSum:n,frameSum:o,recFrameSum:r,sendRecvAvg:i,frameAvg:E,recFrameAvg:a}),ot.frameTimes=[],ot.sendRecvTimes=[],ot.sendRecvSum=0,ot.frameSum=0,ot.recFrameSum=0}}},rt);let it=0;function Et(e,t,_,n){const o=++it;c.a.log("EventUploader","validate"),function(e,t,_=1e4){rt=_,st||(st=s(19)),st.appLaunch(),st.setOpenid(e||""),_t=!0}(e,0,_),ct(ze.initSdk,{},!0,e=>{o===it&&n&&n(e)})}function at(e){_t&&nt.push(e)}function Rt(e){_t&&(ot.sendRecvTimes.push(e),ot.sendRecvSum+=e)}function ct(e,t,s=!1,_){t.sdkType=tt.sdkType||"",t.sdkVersion=tt.version||"",t.playerId=et.a.id||"",t.gameId=r.k.gameId||"",(s||r.h.isInited())&&st.onEvent(e,t,e=>{_&&_(e)})}const Ct={lastTime:0,frameRate:0,callback:e=>null,run:e=>{Ct.callback&&Ct.callback(e),requestAnimationFrame(Ct.run)}};Ct.callback=(e=>{if(0===Ct.lastTime)return void(Ct.lastTime=e);const t=e,s=t-Ct.lastTime,_=Math.round(1e3/(s+1e-6));Ct.frameRate=_,Ct.lastTime=t,Ze.a.onRenderFrameRate&&Ze.a.onRenderFrameRate(s)}),Ct.run(0);const dt={lastFrameTime:0,deltaTime:0,trigger:()=>{const e=Date.now();0!==dt.lastFrameTime?(dt.deltaTime=e-dt.lastFrameTime,Ze.a.onBstFrameRate&&Ze.a.onBstFrameRate(dt.deltaTime),dt.lastFrameTime=e):dt.lastFrameTime=e},clear:()=>{dt.lastFrameTime=0}};var lt=class{constructor(e){this.netUtil1=null,this.netUtil2=null,this.frameBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_RELAY,this.startGameBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_START_GAME,this.stopGameBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_STOP_GAME,this.sendMessageExtBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_GAMESVR,this.responses=e,this.netUtil1=new Xe(e),this.netUtil2=new Xe(e),this.netUtil1.setBroadcastHandler(this.startGameBroadcastType,this.onStartFrameSync.bind(this)),this.netUtil1.setBroadcastHandler(this.stopGameBroadcastType,this.onStopFrameSync.bind(this)),this.netUtil2.setBroadcastHandler(this.frameBroadcastType,this.onRecvFrame.bind(this)),this.netUtil2.setBroadcastHandler(this.sendMessageExtBroadcastType,this.onRecvFromGameSvr.bind(this))}setFrameRoom(e){c.a.log("SETFRAMEROOM",e);const t=this.getFrameRoom();this.roomInfo=e||{roomId:0,routeId:""};const s=t.routeId,_=this.roomInfo.routeId;return _?s!==_?(r.a.setStatus(r.a.StatusType.OFFLINE),this.autoCheckLogin()):s===_?this.autoCheckLogin():void 0:this.netUtil2.client.socket&&this.netUtil2.client.socket.close()}getFrameRoom(){return this.roomInfo||{id:0,routeId:""}}startFrameSync(e,t){if(!this.roomInfo.id){const e={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.startFrameSyncResponse(!1,e,t)}const s=r.e.E_CMD_START_FRAME_SYNC_REQ,_=this.netUtil1.send(e,s,this.startFrameSyncResponse.bind(this),t);return c.a.log("STARTFRAMESYNC_Para",e,_),_}stopFrameSync(e,t){if(!this.roomInfo.id){const e={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.stopFrameSyncResponse(!1,e,t)}const s=r.e.E_CMD_STOP_FRAME_SYNC_REQ,_=this.netUtil1.send(e,s,this.stopFrameSyncResponse.bind(this),t);return c.a.log("STOPFRAMESYNC_Para",e,_),_}sendFrame(e,t){if(!this.roomInfo.id){const e={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.sendFrameResponse(!1,e,t)}this.autoCheckLogin();const s=r.e.E_CMD_RELAY_SEND_FRAME_REQ,_=this.netUtil2.send(e,s,this.sendFrameResponse.bind(this),t);return c.a.log("SENDFRAME_Para",e,_),_}requestFrame(e,t){if(!this.roomInfo.id){const e={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.requestFrameResponse(!1,e,t)}this.autoCheckLogin();const s=r.e.E_CMD_RELAY_REQUEST_FRAME_REQ,_=this.netUtil2.send(e,s,this.requestFrameResponse.bind(this),t);return c.a.log("REQUESTFRAME_Para",e,_),_}checkLogin(e,t){if(!this.roomInfo.id){const t={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.checkLoginResponse(!1,t,e)}r.a.setStatus(r.a.StatusType.CHECKING);const s=r.e.E_CMD_CHECK_LOGIN_REQ,_={token:r.l.authKey,routeId:this.roomInfo.routeId},n=this.netUtil2.send(_,s,this.checkLoginResponse.bind(this),e);return c.a.log("CHECKLOGIN",n,t),n}sendMessageExt(e,t){if(!this.roomInfo.id){const e={RspWrap1:{seq:null,body:null,errCode:r.c.EC_SDK_NO_ROOM,errMsg:"无房间信息"},RspWrap2:null,body:null};return void this.sendMessageExtResponse(!1,e,t)}this.autoCheckLogin();const s=r.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ,_=this.netUtil2.send(e,s,this.sendMessageExtResponse.bind(this),t);return c.a.log("SENDTOGAMESVR_Para",e,_),_}startFrameSyncResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.startFrameSyncRsp(n)}stopFrameSyncResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.stopFrameSyncRsp(n)}autoCheckLogin(){this.connect(),this.netUtil2.client.socket.isConnect()&&r.a.isOffline()&&this.netUtil2.client.socket.emit(f.autoAuth,{})}connect(){!this.netUtil2.client.socket.isConnect()&&this.roomInfo&&(this.netUtil2.client.socket.url=r.j.url+":"+r.g,this.netUtil2.client.socket.connect("framesender connect"))}sendFrameResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.sendFrameRsp(n)}checkLoginResponse(e,t,s){r.a.setStatus(r.a.StatusType.OFFLINE);const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return n.code===r.c.EC_OK&&r.a.setStatus(r.a.StatusType.CHECKED),c.a.log("RESPONSE_CheckLoginResponse",n),at({r:"checklogin",s:n.seq,e:n.code}),s&&s(n)}requestFrameResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.requestFrameRsp(n)}sendMessageExtResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.sendToGameSvrRsp(n)}onRecvFrame(e,t){const s={data:{frame:Object.assign({},e.frame,{roomId:this.getFrameRoom().id})},seq:t};var _;dt.trigger(),_=dt.deltaTime,_t&&(ot.frameTimes.push([_,Ct.frameRate]),ot.recFrameSum+=_,ot.frameSum+=Ct.frameRate);for(const t of e.frame.items)t.playerId===r.l.playerId&&Rt(Date.now()-t.timestamp);return this.responses.onRecvFrame(s)}onStartFrameSync(e,t){const s={data:Object.assign({},e),seq:t};return dt.clear(),this.responses.onStartFrameSync(s)}onStopFrameSync(e,t){const s={data:Object.assign({},e),seq:t};return this.netUtil2&&this.netUtil2.client.clearQueue(),dt.clear(),this.responses.onStopFrameSync(s)}onRecvFromGameSvr(e,t){let s={};try{s=JSON.parse(e.data)}catch(t){s=e.data}const _={data:Object.assign({},e,{data:s},{roomId:e.roomId}),seq:t};return this.responses.onRecvFromGameSvr(_)}};var Ot=class extends Xe{constructor(e){super(e),this.messageBroadcastType=y.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_ROOM_CHAT,this.setBroadcastHandler(this.messageBroadcastType,this.onRecvFromClient.bind(this))}sendMessage(e,t){const s=r.e.E_CMD_ROOM_CHAT_REQ,_=this.send(e,s,this.sendMessageResponse.bind(this),t);return c.a.log("SENDMESSAGE_Para",e,_),_}sendMessageResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.sendToClientRsp(n)}onRecvFromClient(e,t){const s={data:e,seq:t};return this.responses.onRecvFromClient(s)}};var St=class extends Xe{constructor(e){super(e)}login(e,t,s){const _=r.e.E_CMD_LOGIN_REQ,n=Math.floor(Date.now()/1e3),o=Math.floor(Math.random()*(Math.pow(2,32)-1)),{sign:i}=function(e,t,s,_,n){const o=[["game_id",t],["open_id",s],["nonce",n],["timestamp",_]].sort().map(e=>e.join("=")).join("&"),r=l(o,e||"");return{sign:d.stringify(r),timestamp:_}}(t,e.gameId,e.openId,n,o),E=M(),a=h(),R=m,C=Object.assign({},e,{sign:i,timestamp:n,nonce:o,platform:E,channel:a,deviceId:R,mac:void 0,imei:void 0});r.i.setStatus(r.i.StatusType.LOGINING);const O=this.send(C,_,this.loginResponse.bind(this),s);return c.a.log("LOGIN_Para",C,O),r.i.setErrCode(0,""),O}logout(e,t){const s=r.e.E_CMD_LOGOUT_REQ,_=this.send(e,s,this.logoutResponse.bind(this),t);return c.a.log("LOGOUT_Para",e,_),r.i.setStatus(r.i.StatusType.LOGOUTING),_}changeUserState(e,t){const s=r.e.E_CMD_CHANGE_PLAYER_STATE_REQ,_=this.send(e,s,this.changeUserStateResponse.bind(this),t);return c.a.log("CHANGEUSERSTATE_Para",e,_),_}loginResponse(e,t,s){e||r.i.setStatus(r.i.StatusType.LOGOUT);const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};this.client.handleSuccess(n.code,()=>{r.l.authKey=t.body.token,r.l.playerId=t.body.playerId,r.i.setStatus(r.i.StatusType.LOGIN),r.d.setInfo({id:n.data.playerId})}),r.i.setErrCode(n.code,n.msg),s&&s(n),c.a.log("RESPONSE_LoginResponse",n),at({r:"login",s:n.seq,e:n.code})}logoutResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq};return c.a.log("RESPONSE_LogoutResponse",n),this.client.handleSuccess(n.code,()=>{r.l.authKey=void 0,r.l.playerId=void 0,r.i.setStatus(r.i.StatusType.LOGOUT),r.d.setInfo({id:void 0})}),s&&s(n)}changeUserStateResponse(e,t,s){const _=t.RspWrap1,n={code:_.errCode,msg:_.errMsg,seq:_.seq,data:t.body};return s&&s(n),this.responses.changeCustomPlayerStatusRsp(n)}};var ut=class extends Xe{constructor(e,t,s){super(e),this.pingTimer=new i,this.pongTimer=new i,this.currentSeq="",this.id=t,this.frameSender=s}unbindSocket(){this.stop(),super.unbindSocket()}ping(e){if(a(this.pingTimer),!r.l.authKey)return;const t=Date.now(),s=this.frameSender&&this.frameSender.roomInfo&&this.frameSender.roomInfo.routeId?this.frameSender.roomInfo.routeId:"",_={conType:this.id,routeId:s},n=this.send(_,r.e.E_CMD_HEART_BEAT_REQ,(e,s)=>this.handlePong(e,s,t),e);this.currentSeq=n,c.a.log("PING",this.id,n),E(this.pongTimer,()=>this.handlePongTimeout(n),r.j.pingTimeout)}stop(){a(this.pingTimer,this.pongTimer)}handlePong(e,t,s){if(c.a.log("Pong",this.id,t.RspWrap1,"send",e),at({r:"pong"+this.id,s:t.RspWrap1.seq,e:t.RspWrap1.errCode}),a(this.pongTimer),!e)return this.handlePongTimeout(t.RspWrap1.seq);this.client.clearQueue();const _=t.RspWrap1.errCode;var n;return this.id===y.a.ConnectionType.RELAY&&_===r.c.EC_OK&&(n={type:this.id,time:Date.now()-s},_t&&(Ze.a.onPingTime&&Ze.a.onPingTime(n.time),ct(ze.ping,n))),xe(_)?(r.i.setStatus(r.i.StatusType.LOGOUT),this.client.socket.emit(f.autoAuth,{})):Ve(_)&&this.client.socket.id===y.a.ConnectionType.RELAY?(r.a.setStatus(r.a.StatusType.OFFLINE),this.client.socket.emit(f.autoAuth,{})):void E(this.pingTimer,this.ping.bind(this),r.j.pingTimeout)}handlePongTimeout(e){this.client.deleteSeqQueue(e),e===this.currentSeq&&this.client.socket&&(this.client.socket.connectNewSocket(this.client.socket.url),this.client.clearQueue(),c.a.log("Pong_Timeout",this.id))}};function At(){return C()}const It=(e,t)=>s=>{if("error"!==s&&c.a.log(s,e),!s.startsWith("on")&&s.includes("Rsp")){const t=e;at({r:s.replace("Rsp",""),s:t.seq,e:t.code})}const _=t.values();for(const t of _)t&&t[s]&&t[s].call(t,e)};class Tt{constructor(){this.context=null,Tt.instance=this,this.context=new Set}static bindResponses(e){Tt.instance.context.add(e)}static unbindResponses(e){Tt.instance.context.delete(e)}static clearResponses(){Tt.instance.context.clear()}onNetwork(e){It(e,Tt.instance.context)("onNetwork")}createRoomRsp(e){It(e,Tt.instance.context)("createRoomRsp")}joinRoomRsp(e){It(e,Tt.instance.context)("joinRoomRsp")}onJoinRoom(e){It(e,Tt.instance.context)("onJoinRoom")}leaveRoomRsp(e){It(e,Tt.instance.context)("leaveRoomRsp")}onLeaveRoom(e){It(e,Tt.instance.context)("onLeaveRoom")}dismissRoomRsp(e){It(e,Tt.instance.context)("dismissRoomRsp")}onDismissRoom(e){It(e,Tt.instance.context)("onDismissRoom")}changeRoomRsp(e){It(e,Tt.instance.context)("changeRoomRsp")}onChangeRoom(e){It(e,Tt.instance.context)("onChangeRoom")}removePlayerRsp(e){It(e,Tt.instance.context)("removePlayerRsp")}onRemovePlayer(e){It(e,Tt.instance.context)("onRemovePlayer")}getRoomByRoomIdRsp(e){It(e,Tt.instance.context)("getRoomByRoomIdRsp")}getRoomListRsp(e){It(e,Tt.instance.context)("getRoomListRsp")}matchPlayersSimpleRsp(e){It(e,Tt.instance.context)("matchPlayersSimpleRsp")}matchPlayersRsp(e){It(e,Tt.instance.context)("matchPlayersRsp")}matchRoomSimpleRsp(e){It(e,Tt.instance.context)("matchRoomSimpleRsp")}onMatchTimeout(e){It(e,Tt.instance.context)("onMatchTimeout")}onMatchPlayers(e){It(e,Tt.instance.context)("onMatchPlayers")}cancelPlayerMatchRsp(e){It(e,Tt.instance.context)("cancelPlayerMatchRsp")}startFrameSyncRsp(e){It(e,Tt.instance.context)("startFrameSyncRsp")}stopFrameSyncRsp(e){It(e,Tt.instance.context)("stopFrameSyncRsp")}sendFrameRsp(e){It(e,Tt.instance.context)("sendFrameRsp")}sendToClientRsp(e){It(e,Tt.instance.context)("sendToClientRsp")}onRecvFromClient(e){It(e,Tt.instance.context)("onRecvFromClient")}onRecvFromGameSvr(e){It(e,Tt.instance.context)("onRecvFromGameSvr")}onChangePlayerNetworkState(e){It(e,Tt.instance.context)("onChangePlayerNetworkState")}onRecvFrame(e){It(e,Tt.instance.context)("onRecvFrame")}requestFrameRsp(e){It(e,Tt.instance.context)("requestFrameRsp")}sendToGameSvrRsp(e){It(e,Tt.instance.context)("sendToGameSvrRsp")}changeCustomPlayerStatusRsp(e){It(e,Tt.instance.context)("changeCustomPlayerStatusRsp")}onChangeCustomPlayerStatus(e){It(e,Tt.instance.context)("onChangeCustomPlayerStatus")}onStartFrameSync(e){It(e,Tt.instance.context)("onStartFrameSync")}onStopFrameSync(e){It(e,Tt.instance.context)("onStopFrameSync")}error(e){It(e,Tt.instance.context)("error")}}let mt;Tt.instance=null;let pt,Mt=null,ht=null,ft=null,Nt=null,Lt=null,yt=null,gt=null;function Pt(){var e,t,s;r.h.isUnInit()&&(ft&&Dt(),r.h.setStatus(r.h.StatusType.INITING),ft=new St(Ft.responses),Lt=new Je(Ft.responses),yt=new Ot(Ft.responses),Nt=new $e(Ft.responses),gt=new lt(Ft.responses),mt=new L(y.a.ConnectionType.COMMON),pt=new L(y.a.ConnectionType.RELAY),Mt=new ut(Ft.responses,y.a.ConnectionType.COMMON,null),ht=new ut(Ft.responses,y.a.ConnectionType.RELAY,gt),e=[Mt,ft,Nt,Lt,yt,gt.netUtil1],t=[ht,gt.netUtil2],e.forEach(e=>e.bindSocket(mt)),t.forEach(e=>e.bindSocket(pt)),Xe.stopQueueLoop(),Xe.startQueueLoop(),mt.url=r.j.url,mt.on(f.connect,()=>{r.i.isStatus(r.i.StatusType.LOGINING)||Yt.login(),mt.url&&Ft.responses.onNetwork({code:r.c.EC_OK,data:{type:mt.id}})}),pt.on(f.connect,()=>{gt.checkLogin(null,"connect "+!!pt.isConnect()),pt.url&&Ft.responses.onNetwork({code:r.c.EC_OK,data:{type:pt.id}}),ht.ping()}),mt.on(f.connectClose,()=>{vt(!1,{code:r.c.EC_SDK_SOCKET_CLOSE}),r.h.isInited()&&(r.i.setStatus(r.i.StatusType.LOGOUT),mt.url&&Ft.responses.onNetwork({code:r.c.EC_SDK_SOCKET_CLOSE,msg:"Socket断开",seq:null}))}),pt.on(f.connectClose,()=>{r.h.isInited()&&(r.a.setStatus(r.a.StatusType.OFFLINE),pt.url&&Ft.responses.onNetwork({code:r.c.EC_SDK_SOCKET_CLOSE,msg:"Socket断开",seq:null}),ht.stop())}),mt.on(f.connectError,e=>{r.h.isInited()&&mt.url&&Ft.responses.onNetwork({code:r.c.EC_SDK_SOCKET_ERROR,msg:"Socket错误",seq:null})}),pt.on(f.connectError,e=>{r.h.isInited()&&pt.url&&Ft.responses.onNetwork({code:r.c.EC_SDK_SOCKET_ERROR,msg:"Socket错误",seq:null})}),mt.on(f.autoAuth,()=>{r.h.isInited()&&setTimeout(()=>{const e=r.i.isStatus(r.i.StatusType.LOGOUT);mt.url&&e&&Yt.login()},1e3)}),pt.on(f.autoAuth,()=>{r.h.isInited()&&setTimeout(()=>{pt.url&&r.i.isStatus(r.i.StatusType.LOGOUT)&&Yt.login(),pt.url&&r.a.isOffline()&&gt.checkLogin(e=>{e.code===r.c.EC_OK&&ht.ping()},"autoAuth")},1e3)}),mt.connect("init sdk"),s=Ft.instance.onHide,At()&&wx.onHide(s),function(e){At()&&wx.onShow(e)}(Ft.instance.onShow))}function Dt(){var e;Ft.instance.clearResponses(),mt&&mt.destory(),pt&&pt.destory(),((...e)=>{e.forEach(e=>e&&e.unbindSocket())})(ft,Nt,Lt,yt,gt.netUtil1,gt.netUtil2,Mt,ht),e=Ft.instance.onHide,At()&&wx.offHide(e),function(e){At()&&wx.offShow(e)}(Ft.instance.onShow),r.h.setStatus(r.h.StatusType.UNINIT),r.i.setStatus(r.i.StatusType.LOGOUT)}const Yt={login(e){const t=Object.assign({},r.k);return ft&&ft.login(t,r.k.secretKey,t=>{e&&e(t),Yt.loginRsp(t)})},loginRsp(e){if(r.h.isIniting()){if(e.code!==r.c.EC_OK)return vt(!1,e);let t=5e3,s=1e4;return e.data.sdkConfig&&(e.data.sdkConfig.pingInterval&&(t=e.data.sdkConfig.pingInterval),e.data.sdkConfig.reportInterval&&(s=e.data.sdkConfig.reportInterval)),Et(r.k.openId,r.l.playerId,s),r.j.pingTimeout=t,vt(!0,{code:r.c.EC_OK}),Mt.ping()}e.code===r.c.EC_OK&&Mt.ping()},logout:()=>ft&&ft.logout({},Yt.logoutRsp),logoutRsp(e){e.code===r.c.EC_OK&&Mt.stop()}};function vt(e,t){if(r.h.isIniting()){e&&r.h.setStatus(r.h.StatusType.INITED),!e&&r.h.setStatus(r.h.StatusType.UNINIT);let s=r.h.isInited()?r.c.EC_OK:r.c.EC_SDK_UNINIT,_=r.h.isInited()?"初始化成功":"初始化失败。请确认域名是否正确配置，以及网络是否顺畅。";!e&&t&&t.code!==r.c.EC_OK&&(s=t.code),t.code===r.c.EC_ACCESS_PLAYER_DUPLICATE_LOGIN&&(_="用户已在其他客户端登录"),Ft.instance.initRsp&&Ft.instance.initRsp({code:s,msg:_,seq:null})}}class Ft{constructor(e,t){if(this.ErrCode=Ft.ErrCode,this.ENUM=Ft.ENUM,Ft.instance instanceof Ft)return Ft.instance;Ft.instance=this,!e.openId&&(e.openId=""),e.openId=e.openId+"",Object.assign(r.k,e),Object.assign(r.j,t,{pingTimeout:r.j.pingTimeout}),r.l.gameId=r.k.gameId,c.a.log("CONSTRUCTOR",e,t)}bindResponses(e){Tt.bindResponses(e)}unbindResponses(e){Tt.unbindResponses(e)}clearResponses(){Tt.clearResponses()}onHide(){r.i.setStatus(r.i.StatusType.LOGOUT),r.a.setStatus(r.a.StatusType.OFFLINE),Mt&&Mt.stop(),ht&&ht.stop(),c.a.log("SDK_onHide")}onShow(){Mt&&Mt.stop(),ht&&ht.stop(),Mt&&Mt.client.socket.url&&Mt.ping(),ht&&ht.client.socket.url&&ht.ping(),c.a.log("SDK_onShow",Mt.client.socket.url,ht.client.socket.url)}getSocket(e){return e===y.a.ConnectionType.COMMON?mt:e===y.a.ConnectionType.RELAY?pt:void 0}init(e){this.initRsp=(t=>{e(t)}),Pt()}initRsp(e){return null}uninit(){Yt.logout(),r.i.setStatus(r.i.StatusType.LOGOUT),Xe.stopQueueLoop(),Dt()}isInited(){return r.h.isInited()}changeCustomPlayerStatus(e,t,s){const _=Object.assign({},e);return ft.changeUserState(_,s)}createRoom(e,t){return this.createTeamRoom(Object.assign({},e,{teamNumber:1}),t)}createTeamRoom(e,t){"object"!=typeof e&&(e={});const s=[];let _=(e=JSON.parse(JSON.stringify(e))).maxPlayers||0,n=e.teamNumber||0;if(_%n!=0){const e="";return t&&t({seq:e,code:r.c.EC_PARAMS_INVALID,msg:"参数错误，最大玩家数无法被队伍数量整除",data:null}),e}const o=Object.assign({commonNetworkState:void 0,relayNetworkState:void 0,teamId:void 0,id:r.l.playerId},e.playerInfo);if(delete e.teamNumber,!("number"==typeof _&&"number"==typeof n&&_>=n&&n>=1)){const e="";return t&&t({seq:"",code:r.c.EC_PARAMS_INVALID,msg:"参数错误，请检查最大玩家数量和队伍数量",data:null}),e}{_=Math.floor(_),n=Math.floor(n);const e=Math.floor(_/n);for(let t=0;t<n;t++){const r={id:t+"",maxPlayers:e,minPlayers:1,name:""};!o.teamId&&(o.teamId=r.id),t===n-1&&(r.maxPlayers=_-(n-1)*e),s.push(r)}}const i=Object.assign({region:void 0,owner:void 0,playerList:void 0},e,{teamList:s,createType:r.b.CreateRoomType.COMMON_CREATE,playerInfo:o});return Nt.createRoom(i,t)}joinRoom(e,t,s){const _=Object.assign({},e,{teamId:"0",joinType:y.a.JoinRoomType.COMMON_JOIN,roomId:t,playerInfo:Object.assign({commonNetworkState:void 0,relayNetworkState:void 0,teamId:void 0,id:r.l.playerId},e.playerInfo)});return Nt.joinRoom(_,s)}joinTeamRoom(e,t,s){const _=Object.assign({},e,{joinType:y.a.JoinRoomType.COMMON_JOIN,roomId:t,playerInfo:Object.assign({commonNetworkState:void 0,relayNetworkState:void 0,teamId:void 0,id:r.l.playerId},e.playerInfo)});return Nt.joinRoom(_,s)}leaveRoom(e){return Nt.leaveRoom({},e)}dismissRoom(e,t,s){return Nt.dismissRoom({},s)}changeRoom(e,t){return Nt.changeRoom(e,t)}removePlayer(e,t){const s=Object.assign({},e);return Nt.removeUser(s,t)}getRoomByRoomId(e,t){const s=Object.assign({},e);return Nt.getRoomByRoomId(s,t)}getRoomList(e,t){const s=Object.assign({},e,{gameId:r.k.gameId});return Nt.getRoomList(s,t)}matchPlayers(e,t){const s=Object.assign({},e,{playerInfo:Object.assign({matchStatus:void 0,id:r.l.playerId,teamId:"",region:"",teamLeader:""},e.playerInfo)});return Lt.matchUsersComplex(s,t)}matchRoom(e,t){const s=Object.assign({},e,{playerInfo:Object.assign({commonNetworkState:void 0,relayNetworkState:void 0,teamId:void 0,id:r.l.playerId},e.playerInfo)});return Lt.matchRoom(s,t)}cancelMatch(e,t){const s=Object.assign({},e);return Lt.cancelMatch(s,t)}setFrameRoom(e){return!(!e||!Array.isArray(e.playerList)||e.playerList.findIndex(e=>e.id===r.l.playerId)<0)&&(gt.setFrameRoom(e),!0)}startFrameSync(e){const t=gt.roomInfo;function s(t){e&&e(t),Ft.responses.startFrameSyncRsp(t)}if(!t)return c.a.log("STARTFRAMESYNC","fail at roomInfo === null"),s({code:Ft.ErrCode.EC_SDK_NO_ROOM,msg:"无房间信息",seq:null});c.a.log("STARTFRAMESYNC",gt.roomInfo),c.a.log("STARTFRAMESYNC","socket2 isConnect",pt.isConnect(),pt.socketTask);const _=()=>{gt.checkLogin(_=>{if(_.code===r.c.EC_OK){c.a.log("STARTFRAMESYNC","start");const s={roomId:t.id,gameId:r.k.gameId};return gt.startFrameSync(s,e)}return c.a.log("STARTFRAMESYNC","fail at CheckLogin, seq=",_.seq,", code=",_.code,t),s({code:Ft.ErrCode.EC_SDK_NO_CHECK_LOGIN,msg:"CheckLogin失败, seq="+_.seq,seq:null})},"sdk startFrame")};pt.url=r.j.url+":"+r.g,pt.isConnect()?_():(pt.connect("sdk startFrameSync"),pt.eventOnceCallbacks.clear(),pt.once(f.connect,()=>{pt.eventOnceCallbacks.clear(),_()}),pt.once(f.connectClose,()=>{c.a.log("STARTFRAMESYNC","fail at SocketEventType.connectClose"),pt.eventOnceCallbacks.clear(),s({code:Ft.ErrCode.EC_SDK_SOCKET_ERROR,msg:"Socket错误",seq:null})}),pt.once(f.connectError,()=>{c.a.log("STARTFRAMESYNC","fail at SocketEventType.connectError"),pt.eventOnceCallbacks.clear(),s({code:Ft.ErrCode.EC_SDK_SOCKET_ERROR,msg:"Socket错误",seq:null})}))}stopFrameSync(e){const t={roomId:gt.roomInfo.id,gameId:r.k.gameId};gt.stopFrameSync(t,t=>{t.code===r.c.EC_OK&&e&&e(t)})}sendFrame(e,t){const s={roomId:gt.roomInfo.id,item:{playerId:r.l.playerId,data:JSON.stringify(e.data),timestamp:Date.now()}};return gt.sendFrame(s,t)}requestFrame(e,t){const s=gt.roomInfo,_=Object.assign({},e,{roomId:s.id});return gt.requestFrame(_,t)}sendToClient(e,t,s){const _=Object.assign({},e,{roomId:t});return yt.sendMessage(_,s)}sendToGameSvr(e,t,s){const _=Object.assign({},e,{playerId:r.l.playerId,roomId:t,data:JSON.stringify(e.data)});return gt.sendMessageExt(_,s)}}Ft.instance=null,Ft.responses=new Tt,Ft.ErrCode=r.c,Ft.ENUM=r.b;class Ut{constructor(e,t){this.frameIdFill=0,this.frameIdSent=0,this.autoReqFrameErrTimes=0,this.lastFrameTime=0,this.beginFrameId=-1,this.endFrameId=-1,this.fillCache={},this.timer=new Ht(e),this.callback=t}reset(e=0){this.timer.init(),this.frameIdSent=e,this.frameIdFill=e,this.lastFrameTime=0}push(e,t){const s=e.data.frame.id;1===s&&this.reset(),this.timer.push(s,Date.now());const _=this.frameIdSent,n=this.frameIdFill;return this.frameIdFill=s,r.j.isAutoRequestFrame?s<=_+1?this.send(e):(this.fillCache[s]={endFrameId:s,data:[e.data.frame]},void(s>n+1&&this.fill(n+1,s-1,t))):this.send(e)}retryFill(e){this.beginFrameId===this.endFrameId&&this.beginFrameId<0||(this.autoReqFrameErrTimes=0,this.fill(this.beginFrameId,this.endFrameId,e))}send(e){const t=e.data.frame.id;if(t<=this.frameIdSent)return;e.data.frame.time=this.timer.time(t),this.frameIdSent=t,this.callback(e),!this.lastFrameTime&&(this.lastFrameTime=e.data.frame.time);const s=e.data.frame.time-this.lastFrameTime;0!==s&&Ze.a.onFitFrameTime(s),Math.abs(s)>300&&this.reset(t),this.lastFrameTime=e.data.frame.time}fillSend(e){if(e<=this.frameIdSent+1&&this.fillCache[e]){const t=this.fillCache[e];delete this.fillCache[e],t.data.forEach(e=>this.send({data:{frame:e},seq:""})),this.fillSend(t.endFrameId+1)}}fill(e,t,s){s.requestFrame({beginFrameId:e,endFrameId:t},_=>{if(this.beginFrameId=e,this.endFrameId=t,_.code!==y.a.QAppProtoErrCode.EC_OK){if(this.autoReqFrameErrTimes++,this.autoReqFrameErrTimes<=5)return this.fill(e,t,s);s.onAutoRequestFrameError&&s.onAutoRequestFrameError({data:_,seq:""})}else this.beginFrameId=-1,this.endFrameId=-1,this.autoReqFrameErrTimes=0,this.fillCache[e]={endFrameId:t,data:_.data.frames.map(e=>Object.assign({},e,{roomId:s.roomInfo.id,isReplay:!0}))},this.fillSend(e)})}}class Ht{constructor(e){this._a1=e,this.init()}init(){this.n=0,this.S_xi=0,this.S_yi=0,this.S_xiyi=0,this.S_xixi=0}push(e,t){this.n++,this.S_xi+=e,this.S_yi+=t,this.S_xiyi+=e*t,this.S_xixi+=e*e}a0(e){return void 0===e&&(e=this.a1()),this.S_yi/this.n-this.a1()*this.S_xi/this.n}a1(){return(this.n*this.S_xiyi-this.S_xi*this.S_yi)/(this.n*this.S_xixi-this.S_xi*this.S_xi)}ap(){const e=this.a1();return{a0:this.a0(e),a1:e}}time(e){if(0===this.n)return 0;const t=this.n>=2?this.ap():{a0:this.S_yi-this.S_xi*this._a1,a1:this._a1};return Math.round(t.a0+e*t.a1)}}class bt{constructor(e){this.frameBroadcastFrameId=0,this.room=e,this.frameBroadcast=new Ut(this.room.roomInfo.frameRate?Math.floor(1e3/this.room.roomInfo.frameRate):66,e=>{e&&e.data&&e.data.frame&&e.data.frame.items&&e.data.frame.items.forEach(e=>e.data="object"==typeof e.data?e.data:JSON.parse(e.data)),this.matchFrameBstAndInvoke("onRecvFrame",e)})}onNetwork(e){this.room.onUpdate&&this.room.onUpdate(this.room)}onJoinRoom(e){this.saveAndInvoke("onJoinRoom",e)}onLeaveRoom(e){this.saveAndInvoke("onLeaveRoom",e)}onDismissRoom(e){this.matchRoomInfoAndInvoke("onDismissRoom",e,()=>this.room.roomInfo={})}onChangeRoom(e){this.saveAndInvoke("onChangeRoom",e)}onRemovePlayer(e){this.saveAndInvoke("onRemovePlayer",e)}onRecvFromClient(e){this.matchIDAndInvoke("onRecvFromClient",e)}onRecvFromGameSvr(e){this.matchIDAndInvoke("onRecvFromGameSvr",e,null)}onMatchPlayers(e){let t;this.room.roomUtil.setRoomInfo(e.data.roomInfo),e.data.roomInfo&&e.data.roomInfo.playerList&&e.data.roomInfo.playerList.find(e=>Bt.isMe(e.id))&&this.room.roomUtil.activeFrame(),e.data.matchType===y.a.MatchType.PLAYER_COMPLEX&&(t=Gt.TAG.PLAYER_COMPLEX,kt.once(t,{code:y.a.QAppProtoErrCode.EC_OK,msg:"",seq:"",data:e.data}))}onMatchTimeout(e){let t;if(e.data.matchType!==y.a.MatchType.PLAYER_COMPLEX)return;t=Gt.TAG.PLAYER_COMPLEX;const s=e.data.errCode||y.a.QAppProtoErrCode.EC_MATCH_TIMEOUT,{errCode:_,errMsg:n}=p(s,"");kt.once(t,{code:_,msg:n,seq:"",data:{}})}onChangePlayerNetworkState(e){this.saveAndInvoke("onChangePlayerNetworkState",e)}onChangeCustomPlayerStatus(e){this.saveAndInvoke("onChangeCustomPlayerStatus",e)}onStartFrameSync(e){this.saveAndInvoke("onStartFrameSync",e)}onStopFrameSync(e){this.frameBroadcast.reset(),this.saveAndInvoke("onStopFrameSync",e)}onRecvFrame(e){this.room.roomInfo.frameSyncState!==y.a.FrameSyncState.STOP&&this.frameBroadcast.push(e,this.room)}frameBroadcastFrameIdReset(e=0){return this.frameBroadcast.reset(e)}matchRoomInfo(e){return this.room.roomInfo.id===e.data.roomInfo.id}matchID(e){return this.room.roomInfo.id===e.data.roomId}invoke(e,t){this.room[e]&&this.room[e].call(this.room,t)}saveAndInvoke(e,t){this.matchRoomInfo(t)&&(this.room.roomUtil.setRoomInfo(t.data.roomInfo),this.invoke(e,t))}matchFrameBstAndInvoke(e,t,s){this.matchID({data:t.data.frame,seq:""})&&(s&&s(t),this.invoke(e,t))}matchIDAndInvoke(e,t,s){this.matchID(t)&&(s&&s(t),this.invoke(e,t))}matchRoomInfoAndInvoke(e,t,s){this.matchRoomInfo(t)&&(s&&s(t),this.invoke(e,t))}}class Gt{constructor(){this.callbacks={}}push(e,t){!this.callbacks[e]&&(this.callbacks[e]=[]),this.callbacks[e].push(t)}once(e,t){(this.callbacks[e]||[]).forEach(e=>e&&e(t)),this.removeCallbacksByTag(e)}removeCallbacksByTag(e){e&&this.callbacks[e]&&delete this.callbacks[e]}}Gt.TAG={PLAYER_SIMPLE:"PLAYER_SIMPLE",PLAYER_COMPLEX:"PLAYER_COMPLEX"};const kt=new Gt;class Qt{constructor(e){this.room=e}setRoomInfo(e){!e&&(e={}),this.room.roomInfo=JSON.parse(JSON.stringify(e||{})),this.room.roomInfo.playerList=this.room.roomInfo.playerList||[],this.room.onUpdate&&this.room.onUpdate(this.room),this.room.isInRoom()&&r.d.setInfo(this.room.roomInfo.playerList.find(e=>e.id===r.l.playerId))}saveRoomInfo(e){e.code===y.a.QAppProtoErrCode.EC_OK&&(this.setRoomInfo(e.data.roomInfo),this.room.roomInfo.playerList.find(e=>Bt.isMe(e.id))&&this.activeFrame())}setParam(e){this.room.roomInfo.id&&(e.roomId=this.room.roomInfo.id)}addRoomParam(){return{roomId:this.room.roomInfo.id||""}}initBroadcast(){this.room.roomBroadcast||(this.room.roomBroadcast=new bt(this.room))}activeFrame(){return Ft.instance.setFrameRoom(this.room.roomInfo)}}s.d(t,"b",function(){return Kt}),s.d(t,"a",function(){return Bt});class wt{}class Kt extends wt{constructor(e){super(),this.roomUtil=new Qt(this),this.roomUtil.setRoomInfo(e||null)}static getRoomList(e,t){Ft.instance.getRoomList(e,t)}static getRoomByRoomId(e,t){Ft.instance.getRoomByRoomId(e,t)}isInRoom(){return!!this.roomInfo.playerList.find(e=>e.id===r.l.playerId)}initRoom(e){this.roomUtil.setRoomInfo(e);let t=e;t&&t.id&&t.routeId&&Array.isArray(t.playerList)&&t.playerList.find(e=>e.id&&Bt.isMe(e.id))&&this.roomUtil.activeFrame()}onUpdate(e){}get networkState(){let e=!1,t=!1;const s=Ft.instance.getSocket(y.a.ConnectionType.COMMON),_=Ft.instance.getSocket(y.a.ConnectionType.RELAY);return{COMMON:e=!(!s||!s.isConnect()),RELAY:t=!(!_||!_.isConnect())}}createRoom(e,t){Ft.instance.createRoom(e,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}createTeamRoom(e,t){Ft.instance.createTeamRoom(e,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}joinRoom(e,t){Ft.instance.joinRoom(Object.assign({},e),this.roomInfo.id,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}joinTeamRoom(e,t){Ft.instance.joinTeamRoom(Object.assign({},e),this.roomInfo.id,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}leaveRoom(e,t){this.roomUtil.setParam(e),Ft.instance.leaveRoom(e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}dismissRoom(e,t){Ft.instance.dismissRoom(e,this.roomInfo.id,e=>{e.code===y.a.QAppProtoErrCode.EC_OK&&this.roomUtil.setRoomInfo(null),t&&t(e)})}changeRoom(e,t){const s={roomName:this.roomInfo.name,owner:this.roomInfo.owner,customProperties:this.roomInfo.customProperties,isPrivate:this.roomInfo.isPrivate};Ft.instance.changeRoom(Object.assign({},s,e,this.roomUtil.addRoomParam()),e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}changeCustomPlayerStatus(e,t){Ft.instance.changeCustomPlayerStatus(Object.assign({},e),this.roomInfo.id,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}removePlayer(e,t){Ft.instance.removePlayer(e,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}getRoomDetail(e){Ft.instance.getRoomByRoomId(Object.assign({},this.roomUtil.addRoomParam()),t=>{this.roomUtil.saveRoomInfo(t),e&&e(t)})}matchPlayers(e,t){let s=kt.push(Gt.TAG.PLAYER_COMPLEX,t);const _=Object.assign(e,{flowId:s});Ft.instance.matchPlayers(_,e=>{if(e.code!==y.a.QAppProtoErrCode.EC_OK)return e.data=null,kt.once(Gt.TAG.PLAYER_COMPLEX,e)})}matchRoom(e,t){Ft.instance.matchRoom(e,e=>{this.roomUtil.saveRoomInfo(e),t&&t(e)})}cancelPlayerMatch(e,t){Ft.instance.cancelMatch(e,e=>{e.code===r.c.EC_OK&&(kt.removeCallbacksByTag(Gt.TAG.PLAYER_COMPLEX),kt.removeCallbacksByTag(Gt.TAG.PLAYER_SIMPLE)),t&&t(e)})}startFrameSync(e,t){this.roomUtil.activeFrame(),Ft.instance.startFrameSync(t)}stopFrameSync(e,t){this.roomUtil.activeFrame(),Ft.instance.stopFrameSync(t)}sendFrame(e,t){this.roomUtil.activeFrame(),Ft.instance.sendFrame(e,t)}requestFrame(e,t){this.roomUtil.activeFrame();Ft.instance.requestFrame(e,e=>{e.data.frames.forEach(e=>{e.items.forEach(e=>{e.data="object"==typeof e.data?e.data:JSON.parse(e.data)})}),t&&t(e)})}retryAutoRequestFrame(){this.roomBroadcast.frameBroadcast.retryFill(this)}sendToClient(e,t){let s=e.recvPlayerList;e.recvType===r.b.RecvType.ROOM_ALL?s=this.roomInfo.playerList.map(e=>e.id):e.recvType===r.b.RecvType.ROOM_OTHERS&&(s=this.roomInfo.playerList.filter(e=>e.id!==r.l.playerId).map(e=>e.id));const _={recvType:void 0,recvPlayerList:s,msg:e.msg};Ft.instance.sendToClient(_,this.roomInfo.id,t)}sendToGameSvr(e,t){Ft.instance.sendToGameSvr(e,this.roomInfo.id,t)}}class Bt{static isMe(e){return r.l.playerId===e}static get isInited(){return Ft.instance.isInited()}static init(e,t,s){Ft.instance=new Ft(e,t),Ft.instance.init(s)}static add(e){e.roomUtil.initBroadcast(),Ft.instance.bindResponses(e.roomBroadcast)}static remove(e){Ft.instance.unbindResponses(e.roomBroadcast)}static clear(){Ft.instance.clearResponses()}}},function(e){e.exports={nested:{lagame:{nested:{ClientSendServerReqWrap1:{fields:{version:{type:"string",id:1},appName:{type:"string",id:2},cmd:{type:"string",id:3},seq:{type:"string",id:4},clientIp:{type:"string",id:5},serviceIp:{type:"string",id:6},business:{type:"string",id:7},authKey:{type:"string",id:8},authType:{type:"uint32",id:9},authIp:{type:"string",id:10},gameId:{type:"string",id:11},uid:{type:"uint64",id:12},playerId:{type:"string",id:13},body:{type:"bytes",id:14}}},ServerSendClientBstWrap1:{fields:{version:{type:"string",id:1},appName:{type:"string",id:2},cmd:{type:"string",id:3},seq:{type:"string",id:4},clientIp:{type:"string",id:5},serviceIp:{type:"string",id:6},business:{type:"string",id:7},authKey:{type:"string",id:8},authType:{type:"uint32",id:9},authIp:{type:"string",id:10},gameId:{type:"string",id:11},uid:{type:"uint64",id:12},playerId:{type:"string",id:13},body:{type:"bytes",id:14}}},ClientSendServerRspWrap1:{fields:{seq:{type:"string",id:1},errCode:{type:"int32",id:2},errMsg:{type:"string",id:3},body:{type:"bytes",id:4}}},ClientSendServerReqWrap2:{fields:{cmd:{type:"ClientSendServerReqWrap2Cmd",id:1},body:{type:"bytes",id:2}}},ClientSendServerRspWrap2:{fields:{body:{type:"bytes",id:1}}},ConnectionType:{values:{COMMON:0,RELAY:1}},HeartBeatReq:{fields:{conType:{type:"ConnectionType",id:1},routeId:{type:"string",id:2}}},HeartBeatRsp:{fields:{}},ServerSendClientBstWrap2:{fields:{type:{type:"ServerSendClientBstWrap2Type",id:1},msg:{type:"bytes",id:2}}},NOUSEServerSendClientBstRspWrap2:{fields:{}},CheckLoginReq:{fields:{token:{type:"string",id:1},routeId:{type:"string",id:2}}},CheckLoginRsp:{fields:{}},ServerSendClientBstWrap2Type:{values:{E_PUSH_TYPE_TEST:0,E_PUSH_TYPE_RELAY:1,E_PUSH_TYPE_GAMESVR:2,E_PUSH_TYPE_JOIN_ROOM:100,E_PUSH_TYPE_LEAVE_ROOM:101,E_PUSH_TYPE_DISMISS_ROOM:102,E_PUSH_TYPE_REMOVE_PLAYER:103,E_PUSH_TYPE_MODIFY_ROOM_PROPERTY:104,E_PUSH_TYPE_NETWORK_STATE:105,E_PUSH_TYPE_ROOM_CHAT:106,E_PUSH_TYPE_PLAYER_STATE:107,E_PUSH_TYPE_START_GAME:108,E_PUSH_TYPE_STOP_GAME:109,E_PUSH_TYPE_CREATE_ROOM:110,E_PUSH_TYPE_DESTROY_ROOM:111,E_PUSH_TYPE_MATCH_SUCCESS:200,E_PUSH_TYPE_MATCH_TIMEOUT:201}},PushBodyType:{fields:{pushMsg:{type:"string",id:1}}},ClientSendServerReqWrap2Cmd:{values:{E_CMD_INVALID:0,E_CMD_HEART_BEAT_REQ:100,E_CMD_CHECK_LOGIN_REQ:101,E_CMD_LOGIN_TO_ROOM_REQ:102,E_CMD_FORWARD_TO_RELAY_REQ:103,E_CMD_LOGIN_REQ:1e3,E_CMD_LOGOUT_REQ:1001,E_CMD_AUTH_REQ:1002,E_CMD_QUERY_BY_PLAYER_ID_REQ:1003,E_CMD_QUERY_BY_GAME_ID_REQ:1004,E_CMD_GET_ROOM_DETAIL_REQ:2001,E_CMD_JOIN_ROOM_REQ:2002,E_CMD_QUIT_ROOM_REQ:2003,E_CMD_CREATE_ROOM_REQ:2004,E_CMD_DESTORY_ROOM_REQ:2005,E_CMD_REMOVE_MEMBER_REQ:2006,E_CMD_CHANGE_ROOM_PROPERTIS_REQ:2007,E_CMD_DISSMISS_ROOM_REQ:2008,E_CMD_CHANGE_PLAYER_STATE_REQ:2009,E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ:2010,E_CMD_ROOM_CHAT_REQ:2011,E_CMD_START_FRAME_SYNC_REQ:2012,E_CMD_STOP_FRAME_SYNC_REQ:2013,E_CMD_GET_ROOM_LIST_REQ:2014,E_CMD_MATCH_ROOM_SIMPLE_REQ:3001,E_CMD_MATCH_USER_SIMPLE_REQ:3002,E_CMD_MATCH_CANCEL_MATCH_REQ:3003,E_CMD_MATCH_ROOM_COMPLEX_REQ:3004,E_CMD_MATCH_PLAYER_COMPLEX_REQ:3005,E_CMD_RELAY_SEND_FRAME_REQ:4e3,E_CMD_RELAY_REQUEST_FRAME_REQ:4001,E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ:4002,E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ:4003,E_CMD_NOTIFY_JOIN_ROOM:5e3,E_CMD_NOTIFY_QUIT_ROOM:5001,E_CMD_NOTIFY_DESTORY_ROOM:5002,E_CMD_NOTIFY_NET_STATE:5003,E_CMD_NOTIFY_KICK_MEMBER:5004,E_CMD_GET_ADDR_BY_ROUTER_ID_REQ:6e3}},QAppProtoErrCode:{values:{EC_OK:0,EC_REQ_BAD_PKG:1,EC_CMD_INVALID:2,EC_PARAMS_INVALID:3,EC_INNER_ERROR:4,EC_TIME_OUT:5,EC_SERVER_BUSY:6,EC_NO_RIGHT:7,EC_ACCESS_CMD_INVALID_ERR:200,EC_ACCESS_CMD_GET_TOKEN_ERR:201,EC_ACCESS_CMD_TOKEN_PRE_EXPIRE:202,EC_ACCESS_CMD_INVALID_TOKEN:203,EC_ACCESS_PUSH_SERIALIZE_ERR:204,EC_ACCESS_LOGIN_BODY_PARSE_ERR:205,EC_ACCESS_CONN_ERR:206,EC_ACCESS_GET_RS_IP_ERR:207,EC_ACCESS_ADD_COMM_CONN_ERR:208,EC_ACCESS_ADD_HEART_CONN_ERR:209,EC_ACCESS_ADD_RELAY_CONN_ERR:210,EC_ACCESS_HEART_BODY_PARSE_ERR:211,EC_ACCESS_GET_COMM_CONNECT_ERR:212,EC_ACCESS_GET_RELAY_CONNECT_ERR:213,EC_ACCESS_ACCESS_INFO_EMPTY:214,EC_ACCESS_PLAYER_DUPLICATE_LOGIN:215,EC_PLAYER_GAME_NOT_EXIST:1e4,EC_PLAYER_SECRET_KEY_FAIL:10001,EC_PLAYER_SIGN_ERR:10002,EC_PLAYER_DUPLICATE_REQ:10003,EC_PLAYER_TIMESTAMP_INVALID:10004,EC_PLAYER_QUERY_PLAYER_FAIL:10005,EC_PLAYER_ADD_PLAYER_FAIL:10006,EC_PLAYER_QUERY_GAME_FAIL:10007,EC_PLAYER_RECORD_NUM_ERR:10008,EC_PLAYER_GET_TOKEN_FAIL:10009,EC_PLAYER_TOKEN_NOT_EXIST:10010,EC_PLAYER_TOKEN_INVALID:10011,EC_PLAYER_CLEAR_TOKEN_FAIL:10012,EC_PLAYER_LOCK_FAIL:10013,EC_PLAYER_UNLOCK_FAIL:10014,EC_PLAYER_SAVE_TOKEN_FAIL:10015,EC_ROOM_CREATE_NO_PERMISSION:2e4,EC_ROOM_DESTORY_NO_PERMISSION:20001,EC_ROOM_JOIN_NO_PERMISSION:20002,EC_ROOM_REMOVE_PLAYER_NO_PERMISSION:20003,EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION:20004,EC_ROOM_DISSMISS_NO_PERMISSION:20005,EC_ROOM_REMOVE_SELF_NO_PERMISSION:20006,EC_ROOM_CHECK_LOGIN_SESSION_ERR:20007,EC_ROOM_PLAYER_ALREADY_IN_ROOM:20010,EC_ROOM_PLAYER_NOT_IN_ROOM:20011,EC_ROOM_PLAYERS_EXCEED_LIMIT:20012,EC_ROOM_JOIN_NOT_ALLOW:20013,EC_ROOM_MAX_PLAYERS_INVALID:20014,EC_ROOM_CREATE_FAIL:20015,EC_ROOM_PLAYER_OFFLINE:20016,EC_ROOM_PARAM_PAGE_INVALID:20017,EC_ROOM_GET_PLAYER_INFO_ERR:20050,EC_ROOM_GET_ROOM_INFO_ERR:20051,EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR:-20052,EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR:-20053,EC_ROOM_REDIS_UPDATE_ERR:-20054,EC_ROOM_REDIS_GET_LOCK_ERR:-20055,EC_ROOM_REDIS_CHECK_LOCK_ERR:-20056,EC_ROOM_REDIS_DEL_LOCK_ERR:-20057,EC_ROOM_QUERY_PLAYER_ERR:20060,EC_ROOM_QUERY_GAME_ERR:20061,EC_ROOM_PLAYER_INFO_NOT_EXIST:20062,EC_ROOM_GAME_INFO_NOT_EXIST:20063,EC_ROOM_HISTORY_INFO_INSERT_ERR:-20064,EC_ROOM_REGION_INFO_NOT_EXIST:20065,EC_ROOM_QUERY_REGION_ERR:20066,EC_ROOM_INFO_UNEXIST:20080,EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR:20090,EC_ROOM_INVALID_PARAMS_TEAM_ID:20100,EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED:20101,EC_MATCH_NO_ROOM:3e4,EC_MATCH_TIMEOUT:30001,EC_MATCH_LOGIC_ERR:30002,EC_MATCH_ERR:30010,EC_MATCH_PLAYER_IS_IN_MATCH:30011,EC_MATCH_PLAYER_NOT_IN_MATCH:30012,EC_MATCH_GET_MATCH_INFO_ERR:30013,EC_MATCH_UPDATE_MATCH_INFO_ERR:30014,EC_MATCH_CANCEL_FAILED:30015,EC_MATCH_GET_PLAYER_LIST_INFO_ERR:30016,EC_MATCH_CREATE_ROOM_ERR:30041,EC_MATCH_JOIN_ROOM_ERR:30042,EC_MATCH_QUERY_PLAYER_ERR:30100,EC_MATCH_PLAYER_INFO_NOT_EXIST:30101,EC_MATCH_QUERY_GAME_ERR:30102,EC_MATCH_GAME_INFO_NOT_EXIST:30103,EC_MATCH_QUERY_REGION_ERR:30104,EC_MATCH_REGION_INFO_NOT_EXIST:30105,EC_MATCH_TEAM_FAIL:30106,EC_MATCH_PLAY_RULE_NOT_RUNNING:30107,EC_MATCH_PLAY_ATTR_NOT_FOUND:30108,EC_MATCH_PLAY_RULE_NOT_FOUND:30109,EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND:30110,EC_MATCH_PLAY_RULE_FUNC_ERR:30111,EC_MATCH_GET_PLAYER_ATTR_FAIL:30112,EC_MATCH_GET_TEAM_ATTR_FAIL:30113,EC_MATCH_INNER_LOGIC_ERR:-30150,EC_RELAY_ALREADY_EXISTS:4e4,EC_RELAY_NOT_EXISTS:40001,EC_RELAY_DATA_EXCEED_LIMITED:40002,EC_RELAY_MEMBER_ALREADY_EXISTS:40003,EC_RELAY_MEMBER_NOT_EXISTS:40004,EC_RELAY_STATE_INVALID:40005,EC_RELAY_INVALID_FRAME_RATE:40006,EC_RELAY_SET_FRAME_RATE_FORBIDDEN:40007,EC_RELAY_NO_MEMBERS:40008,EC_RELAY_GAMESVR_SERVICE_NOT_OPEN:40009,EC_RELAY_REQ_POD_FAIL:40010,EC_RELAY_LOGIC_ERROR:40014,EC_RELAY_HKV_CACHE_ERROR:40015,EC_RELAY_REDIS_CACHE_ERROR:40016,EC_RELAY_CACHE_ERROR:40017,EC_RELAY_NOTIFY_RELAYWORKER_FAIL:40018,EC_RELAY_RESET_RELAY_ROOM_FAIL:40019,EC_RELAY_CLEAN_RELAY_ROOM_FAIL:40020,EC_RELAY_NO_PERMISSION:40100,EC_RELAY_NOTIFY_GAMESVR_FAIL:40200,EC_RELAY_FORWARD_TO_GAMESVR_FAIL:40201,EC_RELAY_FORWARD_TO_CLIENT_FAIL:40202,EC_INVALID_PARAMS:6e4,EC_INVALID_PARAMS_PLAY_MODE_VERSION:60001,EC_INVALID_PARAMS_PLAY_MODE_RULETYPE:60002,EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION:60003,EC_INVALID_PARAMS_PLAY_MODE_TEAM:60004,EC_INVALID_PARAMS_MSGQ_ENCODE:60020,EC_INVALID_PARAMS_MSGQ_DECODE:60021,EC_INVALID_PARAMS_GAME_ID:61e3,EC_INVALID_PARAMS_PLAYER_INFO:61001,EC_INVALID_PARAMS_MAX_PLAYERS:61002,EC_INVALID_PARAMS_ROOM_TYPE:61003,EC_INVALID_PARAMS_PLAYER_ID:61004,EC_INVALID_PARAMS_MATCH_TYPE:61005,EC_INVALID_PARAMS_MATCH_CODE:61006,EC_INVALID_PARAMS_OPEN_ID:61007,EC_INVALID_PARAMS_PLATFORM:61008,EC_INVALID_PARAMS_TIMESTAMP:61009,EC_INVALID_PARAMS_SIGN:61010,EC_INVALID_PARAMS_NONCE:61011,EC_INVALID_PARAMS_TOKEN:61012,EC_INVALID_PARAMS_NETWORK_STATE:61013,EC_INVALID_PARAMS_ROOM_NAME:61014,EC_INVALID_PARAMS_CREATE_ROOM_TYPE:61015,EC_INVALID_PARAMS_DEVICE_ID:61016,EC_MYSPP_SYSTEM_ERR:-1e3,EC_REDIS_KEY_NOT_EXIST:-66e3,EC_REDIS_SET_OP_ERR:-66001,EC_REDIS_GET_OP_ERR:-66002,EC_REDIS_DEL_OP_ERR:-66003,EC_REDIS_EXPIRE_OP_ERR:-66004,EC_REDIS_LOCK_OP_ERR:-66005,EC_REDIS_LOCK_ALREADY_EXIST:-66006,EC_REDIS_LIST_OP_ERR:-66020,EC_REDIS_LIST_POP_EMPTY:-66021,EC_MYSQL_NO_ROW_FOUND:-66100,EC_MYSQL_MULTI_ROW_FOUND:-66101,EC_MYSQL_INSERT_FAIL:-66102,EC_MYSQL_DELETE_FAIL:-66103,EC_MYSQL_UPDATE_FAIL:-66104,EC_MYSQL_QUERYS_FAIL:-66105,EC_PB_SERIALIZE_TO_STR_ERR:-66200,EC_PB_PARSE_FROM_STR_ERR:-66201,EC_DATA_FORMAT_ERR:-66210,EC_JSON_FORMAT_ERR:-66211,EC_JSON_PLAY_MODE_FORMAT_ERR:-66212,EC_JSON_PLAY_MODE_PARISE_ERR:-66213,EC_INVALID_PARAMS_RECORE_ID:-66601,EC_HASHID_ERR:-66700,EC_HASHID_ENCODE_ERR:-66701,EC_HASHID_DECODE_ERR:-66702,EC_CONF_ROOM_ID_BUCKET_ERR:-66801,EC_SDK_SEND_FAIL:90001,EC_SDK_UNINIT:90002,EC_SDK_RES_TIMEOUT:90003,EC_SDK_NO_LOGIN:90004,EC_SDK_NO_CHECK_LOGIN:90005,EC_SDK_SOCKET_ERROR:90006,EC_SDK_SOCKET_CLOSE:90007,EC_SDK_NO_ROOM:90008}},LoginReq:{fields:{gameId:{type:"string",id:1},openId:{type:"string",id:2},platform:{type:"uint64",id:3},channel:{type:"uint64",id:4},nonce:{type:"uint64",id:5},timestamp:{type:"uint64",id:6},sign:{type:"string",id:7},deviceId:{type:"string",id:8},mac:{type:"string",id:9},imei:{type:"string",id:10}}},LoginRsp:{fields:{token:{type:"string",id:1},playerId:{type:"string",id:2},expireTime:{type:"uint64",id:3},sdkConfig:{type:"SdkConfig",id:4}}},SdkConfig:{fields:{pingInterval:{type:"uint32",id:1},reportInterval:{type:"uint32",id:2}}},LogoutReq:{fields:{}},LogoutRsp:{fields:{}},StartFrameSyncReq:{fields:{}},StartFrameSyncRsp:{fields:{}},StopFrameSyncReq:{fields:{}},StopFrameSyncRsp:{fields:{}},FrameItem:{fields:{playerId:{type:"string",id:1},data:{type:"string",id:2},timestamp:{type:"uint64",id:3}}},SendFrameReq:{fields:{roomId:{type:"string",id:1},item:{type:"FrameItem",id:2}}},SendFrameRsp:{fields:{}},FrameExtInfo:{fields:{seed:{type:"uint64",id:1}}},Frame:{fields:{id:{type:"uint64",id:1},items:{rule:"repeated",type:"FrameItem",id:2},ext:{type:"FrameExtInfo",id:3}}},RequestFrameReq:{fields:{roomId:{type:"string",id:1},beginFrameId:{type:"uint64",id:2},endFrameId:{type:"uint64",id:3}}},RequestFrameRsp:{fields:{frames:{rule:"repeated",type:"Frame",id:1}}},NetworkState:{values:{COMMON_OFFLINE:0,COMMON_ONLINE:1,RELAY_OFFLINE:2,RELAY_ONLINE:3}},PlayerInfo:{fields:{id:{type:"string",id:1},name:{type:"string",id:2},teamId:{type:"string",id:3},customPlayerStatus:{type:"uint64",id:4},customProfile:{type:"string",id:5},commonNetworkState:{type:"NetworkState",id:6},relayNetworkState:{type:"NetworkState",id:7}}},TeamInfo:{fields:{id:{type:"string",id:1},name:{type:"string",id:2},minPlayers:{type:"uint32",id:3},maxPlayers:{type:"uint32",id:4}}},CreateRoomType:{values:{COMMON_CREATE:0,MATCH_CREATE:1}},FrameSyncState:{values:{STOP:0,START:1}},RoomInfo:{fields:{id:{type:"string",id:1},name:{type:"string",id:2},type:{type:"string",id:3},createType:{type:"CreateRoomType",id:4},maxPlayers:{type:"uint64",id:5},owner:{type:"string",id:6},isPrivate:{type:"bool",id:9},customProperties:{type:"string",id:10},playerList:{rule:"repeated",type:"PlayerInfo",id:11},teamList:{rule:"repeated",type:"TeamInfo",id:13},frameSyncState:{type:"FrameSyncState",id:14},frameRate:{type:"uint32",id:15},routeId:{type:"string",id:16},createTime:{type:"uint64",id:17},startGameTime:{type:"uint64",id:18}}},CreateRoomReq:{fields:{roomName:{type:"string",id:1},roomType:{type:"string",id:2},createType:{type:"CreateRoomType",id:3},maxPlayers:{type:"uint64",id:4},isPrivate:{type:"bool",id:7},customProperties:{type:"string",id:8},playerInfo:{type:"PlayerInfo",id:9},region:{type:"string",id:11},owner:{type:"string",id:12},playerList:{rule:"repeated",type:"PlayerInfo",id:13},teamList:{rule:"repeated",type:"TeamInfo",id:14}}},CreateRoomRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},JoinRoomType:{values:{COMMON_JOIN:0,MATCH_JOIN:1}},JoinRoomReq:{fields:{roomId:{type:"string",id:1},teamId:{type:"string",id:2},joinType:{type:"JoinRoomType",id:3},playerInfo:{type:"PlayerInfo",id:4}}},JoinRoomRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},LeaveRoomReq:{fields:{}},LeaveRoomRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},DismissRoomReq:{fields:{}},DismissRoomRsp:{fields:{}},ChangeRoomReq:{fields:{roomName:{type:"string",id:1},owner:{type:"string",id:2},isPrivate:{type:"bool",id:5},customProperties:{type:"string",id:6}}},ChangeRoomRsp:{fields:{roomInfo:{type:"RoomInfo",id:4}}},RemovePlayerReq:{fields:{removePlayerId:{type:"string",id:3}}},RemovePlayerRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},GetRoomByRoomIdReq:{fields:{roomId:{type:"string",id:1}}},GetRoomByRoomIdRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},SendToClientReq:{fields:{roomId:{type:"string",id:1},recvPlayerList:{rule:"repeated",type:"string",id:2},msg:{type:"string",id:3}}},SendToClientRsp:{fields:{}},ChangeCustomPlayerStatusReq:{fields:{customPlayerStatus:{type:"uint64",id:1}}},ChangeCustomPlayerStatusRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},ChangePlayerNetworkStateReq:{fields:{networkState:{type:"NetworkState",id:1}}},ChangePlayerNetworkStateRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},GetRoomListReq:{fields:{gameId:{type:"string",id:1},pageNo:{type:"uint32",id:2},pageSize:{type:"uint32",id:3}}},GetRoomListRsp:{fields:{gameId:{type:"string",id:1},roomList:{rule:"repeated",type:"RoomInfo",id:2},total:{type:"uint64",id:3}}},MatchRoomSimpleReq:{fields:{roomType:{type:"string",id:1},maxPlayers:{type:"uint64",id:2},playerInfo:{type:"PlayerInfo",id:3}}},MatchRoomSimpleRsp:{fields:{roomInfo:{type:"RoomInfo",id:1}}},MatchRoomComplexReq:{fields:{}},MatchRoomComplexRsp:{fields:{}},MatchPlayersSimpleReq:{fields:{}},MatchPlayersSimpleRsp:{fields:{}},MatchStatus:{values:{PENDING:0,MATCHING:1,SUCCESS:3,TIMEOUT:4}},MatchAttribute:{fields:{name:{type:"string",id:1},value:{type:"int32",id:2}}},MatchPlayerInfo:{fields:{id:{type:"string",id:1},name:{type:"string",id:2},customPlayerStatus:{type:"uint64",id:3},customProfile:{type:"string",id:4},matchAttributes:{rule:"repeated",type:"MatchAttribute",id:5},matchStatus:{type:"MatchStatus",id:6},teamId:{type:"string",id:7},region:{type:"string",id:8},teamLeader:{type:"string",id:9}}},MatchTeamInfo:{fields:{teamId:{type:"string",id:1},teamName:{type:"string",id:2},teamLeader:{type:"string",id:3},members:{rule:"repeated",type:"string",id:4},matchAttributes:{rule:"repeated",type:"MatchAttribute",id:5}}},MatchPlayersReq:{fields:{matchCode:{type:"string",id:2},playerInfo:{type:"MatchPlayerInfo",id:3}}},MatchPlayersRsp:{fields:{matchCode:{type:"string",id:1}}},MatchType:{values:{ROOM_SIMPLE:1,PLAYER_COMPLEX:2}},CancelPlayerMatchReq:{fields:{matchType:{type:"MatchType",id:3}}},CancelPlayerMatchRsp:{fields:{}},CreateRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},DestroyRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},JoinRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1},joinPlayerId:{type:"string",id:2}}},LeaveRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1},leavePlayerId:{type:"string",id:2}}},RemovePlayerBst:{fields:{roomInfo:{type:"RoomInfo",id:1},removePlayerId:{type:"string",id:2}}},DismissRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},ChangeRoomBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},RecvFromClientBst:{fields:{roomId:{type:"string",id:1},sendPlayerId:{type:"string",id:2},msg:{type:"string",id:3}}},ChangeCustomPlayerStatusBst:{fields:{changePlayerId:{type:"string",id:1},customPlayerStatus:{type:"uint64",id:2},roomInfo:{type:"RoomInfo",id:3}}},ChangePlayerNetworkStateBst:{fields:{changePlayerId:{type:"string",id:1},networkState:{type:"NetworkState",id:2},roomInfo:{type:"RoomInfo",id:3}}},MatchTimeoutBst:{fields:{matchType:{type:"MatchType",id:1},errCode:{type:"int32",id:2}}},MatchPlayersBst:{fields:{matchType:{type:"MatchType",id:1},roomInfo:{type:"RoomInfo",id:2}}},StartFrameSyncBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},StopFrameSyncBst:{fields:{roomInfo:{type:"RoomInfo",id:1}}},RecvFrameBst:{fields:{frame:{type:"Frame",id:1}}},GameSvrForwardType:{values:{E_GS_FORWARDTYPE_DEFAULT:0,E_GS_FORWARDTYPE_NOTIFY_CONNECTION:1,E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT:2,E_GS_FORWARDTYPE_NOTIFY_COM_EVENT:3,E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR:4}},GameSvrCommunication:{fields:{type:{type:"GameSvrForwardType",id:1},body:{type:"bytes",id:2}}},NotifyRelayConnectionReq:{fields:{roomId:{type:"string",id:1},ip:{type:"string",id:2},port:{type:"uint32",id:3}}},NotifyRoomEventReq:{fields:{cmd:{type:"ServerSendClientBstWrap2Type",id:1},msg:{type:"bytes",id:2}}},SendToGameSvrReq:{fields:{roomId:{type:"string",id:1},playerId:{type:"string",id:2},data:{type:"string",id:3}}},SendToGameSvrRsp:{fields:{}},RecvFromGameSvrBst:{fields:{roomId:{type:"string",id:1},playerIdList:{rule:"repeated",type:"string",id:2},data:{type:"string",id:3}}},ClientRecvFromGameSvrRsp:{fields:{}}}}}}},function(e,t,s){"use strict";let _=0;const n=Math.pow(2,32)-1,o={init(e){_=e},random(){const e=(1103515245*_+123456789)%n;return _=e,e/n}};t.a=o},function(e,t,s){"use strict";s.r(t),function(e){var _=s(9),n=s(4),o=s(3),r=s(6),i=s(11),E=s(7),a=s(2);class R{}R.Listener=null,R.Room=null,R.ENUM=null,R.ErrCode=null,R.RandomUtil=null,R.DebuggerLog=null,R.Player=null,R.StatCallbacks=null,R.Listener=_.a,R.Room=_.b,R.ENUM=n.a,R.ErrCode=o.a,R.RandomUtil=i.a,R.DebuggerLog=r.a,R.Player=E.a,R.StatCallbacks=a.a,(window||e).MGOBE=R,R.types=n.a,t.default=R}.call(this,s(13))},function(e,t){var s;s=function(){return this}();try{s=s||new Function("return this")()}catch(e){"object"==typeof window&&(s=window)}e.exports=s},function(e,t,s){var _,n,o;e.exports=(_=s(5),o=(n=_).lib.WordArray,n.enc.Base64={stringify:function(e){var t=e.words,s=e.sigBytes,_=this._map;e.clamp();for(var n=[],o=0;o<s;o+=3)for(var r=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,i=0;i<4&&o+.75*i<s;i++)n.push(_.charAt(r>>>6*(3-i)&63));var E=_.charAt(64);if(E)for(;n.length%4;)n.push(E);return n.join("")},parse:function(e){var t=e.length,s=this._map,_=this._reverseMap;if(!_){_=this._reverseMap=[];for(var n=0;n<s.length;n++)_[s.charCodeAt(n)]=n}var r=s.charAt(64);if(r){var i=e.indexOf(r);-1!==i&&(t=i)}return function(e,t,s){for(var _=[],n=0,r=0;r<t;r++)if(r%4){var i=s[e.charCodeAt(r-1)]<<r%4*2,E=s[e.charCodeAt(r)]>>>6-r%4*2;_[n>>>2]|=(i|E)<<24-n%4*8,n++}return o.create(_,n)}(e,t,_)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},_.enc.Base64)},function(e,t,s){var _;e.exports=(_=s(5),s(16),s(17),_.HmacSHA1)},function(e,t,s){var _,n,o,r,i,E,a,R;e.exports=(_=s(5),o=(n=_).lib,r=o.WordArray,i=o.Hasher,E=n.algo,a=[],R=E.SHA1=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var s=this._hash.words,_=s[0],n=s[1],o=s[2],r=s[3],i=s[4],E=0;E<80;E++){if(E<16)a[E]=0|e[t+E];else{var R=a[E-3]^a[E-8]^a[E-14]^a[E-16];a[E]=R<<1|R>>>31}var c=(_<<5|_>>>27)+i+a[E];c+=E<20?1518500249+(n&o|~n&r):E<40?1859775393+(n^o^r):E<60?(n&o|n&r|o&r)-1894007588:(n^o^r)-899497514,i=r,r=o,o=n<<30|n>>>2,n=_,_=c}s[0]=s[0]+_|0,s[1]=s[1]+n|0,s[2]=s[2]+o|0,s[3]=s[3]+r|0,s[4]=s[4]+i|0},_doFinalize:function(){var e=this._data,t=e.words,s=8*this._nDataBytes,_=8*e.sigBytes;return t[_>>>5]|=128<<24-_%32,t[14+(_+64>>>9<<4)]=Math.floor(s/4294967296),t[15+(_+64>>>9<<4)]=s,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}}),n.SHA1=i._createHelper(R),n.HmacSHA1=i._createHmacHelper(R),_.SHA1)},function(e,t,s){var _,n,o,r,i,E,a;e.exports=(_=s(5),o=(n=_).lib,r=o.Base,i=n.enc,E=i.Utf8,a=n.algo,void(a.HMAC=r.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=E.parse(t));var s=e.blockSize,_=4*s;t.sigBytes>_&&(t=e.finalize(t)),t.clamp();for(var n=this._oKey=t.clone(),o=this._iKey=t.clone(),r=n.words,i=o.words,a=0;a<s;a++)r[a]^=1549556828,i[a]^=909522486;n.sigBytes=o.sigBytes=_,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,s=t.finalize(e);t.reset();var _=t.finalize(this._oKey.clone().concat(s));return _}})))},function(e,t,s){var _,n,o;n=[t],void 0===(o="function"==typeof(_=function(e){"use strict";function t(e,t){for(var s=0;s<t.length;s++){var _=t[s];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,_=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n,o,r="";this.escapeRegExp=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},this.parseInt=function(e,t){return/^(-|\+)?([0-9]+|Infinity)$/.test(e)?parseInt(e,t):NaN},this.seps="cfhistuCFHISTU",this.minLength=0<parseInt(s,10)?s:0,this.salt="string"==typeof t?t:"","string"==typeof _&&(this.alphabet=_);for(var i=0;i!==this.alphabet.length;i++)-1===r.indexOf(this.alphabet.charAt(i))&&(r+=this.alphabet.charAt(i));if(this.alphabet=r,this.alphabet.length<16)throw"error: alphabet must contain at least X unique characters".replace("X",16);if(-1!==this.alphabet.search(" "))throw"error: alphabet cannot contain spaces";for(var E=0;E!==this.seps.length;E++){var a=this.alphabet.indexOf(this.seps.charAt(E));-1===a?this.seps=this.seps.substr(0,E)+" "+this.seps.substr(E+1):this.alphabet=this.alphabet.substr(0,a)+" "+this.alphabet.substr(a+1)}this.alphabet=this.alphabet.replace(/ /g,""),this.seps=this.seps.replace(/ /g,""),this.seps=this._shuffle(this.seps,this.salt),(!this.seps.length||3.5<this.alphabet.length/this.seps.length)&&(n=Math.ceil(this.alphabet.length/3.5))>this.seps.length&&(o=n-this.seps.length,this.seps+=this.alphabet.substr(0,o),this.alphabet=this.alphabet.substr(o)),this.alphabet=this._shuffle(this.alphabet,this.salt);var R=Math.ceil(this.alphabet.length/12);this.alphabet.length<3?(this.guards=this.seps.substr(0,R),this.seps=this.seps.substr(R)):(this.guards=this.alphabet.substr(0,R),this.alphabet=this.alphabet.substr(R))}var s,_;return s=e,(_=[{key:"encode",value:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];if(!t.length)return"";if(t[0]&&t[0].constructor===Array&&!(t=t[0]).length)return"";for(var _=0;_!==t.length;_++)if(t[_]=this.parseInt(t[_],10),!(0<=t[_]))return"";return this._encode(t)}},{key:"decode",value:function(e){return e&&e.length&&"string"==typeof e?this._decode(e,this.alphabet):[]}},{key:"encodeHex",value:function(e){if(e=e.toString(),!/^[0-9a-fA-F]+$/.test(e))return"";for(var t=e.match(/[\w\W]{1,12}/g),s=0;s!==t.length;s++)t[s]=parseInt("1"+t[s],16);return this.encode.apply(this,t)}},{key:"decodeHex",value:function(e){for(var t=[],s=this.decode(e),_=0;_!==s.length;_++)t+=s[_].toString(16).substr(1);return t}},{key:"_encode",value:function(e){for(var t,s=this.alphabet,_=0,n=0;n!==e.length;n++)_+=e[n]%(n+100);for(var o=t=s.charAt(_%s.length),r=0;r!==e.length;r++){var i=e[r],E=o+this.salt+s;s=this._shuffle(s,E.substr(0,s.length));var a=this._toAlphabet(i,s);if(t+=a,r+1<e.length){var R=(i%=a.charCodeAt(0)+r)%this.seps.length;t+=this.seps.charAt(R)}}if(t.length<this.minLength){var c=(_+t[0].charCodeAt(0))%this.guards.length,C=this.guards[c];(t=C+t).length<this.minLength&&(c=(_+t[2].charCodeAt(0))%this.guards.length,t+=C=this.guards[c])}for(var d=parseInt(s.length/2,10);t.length<this.minLength;){var l=(t=(s=this._shuffle(s,s)).substr(d)+t+s.substr(0,d)).length-this.minLength;0<l&&(t=t.substr(l/2,this.minLength))}return t}},{key:"_decode",value:function(e,t){var s=[],_=0,n=new RegExp("[".concat(this.escapeRegExp(this.guards),"]"),"g"),o=e.replace(n," "),r=o.split(" ");if(3!==r.length&&2!==r.length||(_=1),void 0!==(o=r[_])[0]){var i=o[0];o=o.substr(1),n=new RegExp("[".concat(this.escapeRegExp(this.seps),"]"),"g"),r=(o=o.replace(n," ")).split(" ");for(var E=0;E!==r.length;E++){var a=r[E],R=i+this.salt+t;t=this._shuffle(t,R.substr(0,t.length)),s.push(this._fromAlphabet(a,t))}this.encode(s)!==e&&(s=[])}return s}},{key:"_shuffle",value:function(e,t){var s;if(!t.length)return e;for(var _=(e=e.split("")).length-1,n=0,o=0,r=0;0<_;_--,n++){n%=t.length,o+=s=t.charCodeAt(n);var i=e[r=(s+n+o)%_];e[r]=e[_],e[_]=i}return e=e.join("")}},{key:"_toAlphabet",value:function(e,t){for(var s="";s=t.charAt(e%t.length)+s,e=parseInt(e/t.length,10););return s}},{key:"_fromAlphabet",value:function(e,t){return e.split("").map(function(e){return t.indexOf(e)}).reduce(function(e,s){return e*t.length+s},0)}}])&&t(s.prototype,_),e}();e.default=s})?_.apply(t,n):_)||(e.exports=o)},function(e,t,s){const _={};if("undefined"==typeof wx||wx.setStorageSync||(wx.setStorageSync=((e,t)=>_[e]=t)),"undefined"==typeof wx||wx.getStorageSync||(wx.getStorageSync=(e=>_[e]||"")),"undefined"==typeof wx||wx.getSystemInfoSync||(wx.getSystemInfoSync=(()=>({}))),"undefined"==typeof wx||wx.getNetworkType||(wx.getNetworkType=(({success:e})=>e&&e({}))),void 0===n)var n=()=>[{__route__:""}];function o(){return(new Date).getTime()}function r(e){return(1e6*new Date+Math.floor(1e6*Math.random())).toString(e)||""}function i(){C.conf.getLocation&&wx.getLocation({type:C.conf.locationType||"wgs84",success:function(e){wx.setStorageSync(C.prefix+C.lt,JSON.stringify(e))}})}function E(){C.conf.getUserInfo&&wx.getUserInfo({withCredentials:!1,success:function(e){var t=e.userInfo;t.nickName=encodeURIComponent(t.nickName),wx.setStorageSync(C.prefix+C.ui,JSON.stringify(t)),console.log("userInfo---\x3e"+JSON.stringify(e.userInfo))},fail:function(e){console.log("userInfo fail---\x3e"+e)}})}function a(){null!=C.conf.channelId&&""!=C.conf.channelId||null==C.options||void 0===C.options.query||!C.options.query.hasOwnProperty("bea_channel_id")||(C.conf.channelId=C.options.query.bea_channel_id),C.serverUrl="https://"+(C.conf.isDebug?"jrlts":"report")+".wxlagame.com/analytics/upload?tp=weapp",i(),E(),wx.getNetworkType({success:function(e){wx.setStorageSync(C.prefix+C.nt,e.networkType)}}),C.opid=wx.getStorageSync(C.prefix+C.oik),C.unid=wx.getStorageSync(C.prefix+C.uik)}function R(e,t,s,_){(!t||void 0===t||0>=t)&&(t=(new Date).getTime());var o=n(),r=0,i=[];o&&o.length>0&&(r=0===s?0:t-s,i=[{name:o.pop().__route__,start:t,duration:r,refer:""}]),c(e,t,r,i,_)}function c(e,t,s,_,n,o,i){(!t||void 0===t||0>=t)&&(t=(new Date).getTime());var E=[{type:2,data:{id:r(32),start:t,status:e,duration:s||0,pages:_||[],events:n||[]}}],a=wx.getSystemInfoSync(),R=function(){var e=wx.getStorageSync(C.prefix+C.u);return""==e&&(e=r(36),wx.setStorageSync(C.prefix+C.u,e)),e}();o&&void 0!==o&&""!=o||C.options&&(o=C.options.scene);var c={deviceId:R,appkey:C.conf.appKey,versionCode:C.conf.version,initTime:t,scene:o,channelID:C.conf.channelId,sdkVersion:C.sdkVersion,pixel:a.screenWidth+"*"+a.screenHeight+"*"+a.pixelRatio,language:a.language,model:encodeURIComponent(a.model),wxVersion:a.version,networkType:wx.getStorageSync(C.prefix+C.nt)||"4g",system:encodeURIComponent(a.system),platform:encodeURIComponent(a.platform),windowArea:a.windowWidth+"*"+a.windowHeight+"*"+a.pixelRatio,query:JSON.stringify(C.options),opid:C.opid,unid:C.unid,userInfo:C.conf.getUserInfo&&wx.getStorageSync(C.prefix+C.ui)||"",location:C.conf.getLocation&&wx.getStorageSync(C.prefix+C.lt)||"",msgs:E};wx.request({url:C.serverUrl,data:c,method:"POST",success:()=>i&&i(!0),fail:()=>i&&i(!1)})}var C={options:null,serverUrl:null,opid:null,unid:null,conf:s(20),prefix:"beacon_",sdkVersion:"weapp_v1.0.7",u:"u",ui:"ui",lt:"lt",nt:"nt",oik:"oik",uik:"uik",atl:0,ats:0,ptl:0,pts:0,appLaunch:function(){arguments.length>0&&null!=arguments[0]&&(C.options=arguments[0]),C.conf.beforeLoad(C.options),C.conf.appKey&&void 0!==C.conf.appKey&&C.conf.appKey.length>0&&C.conf.version&&void 0!==C.conf.version&&C.conf.version.length>0?(a(),this.atl=o(),R(1,this.atl,0,[])):console.log("beacon_error:init data invalid")},appShow:function(){arguments.length>0&&null!=arguments[0]&&(C.options=arguments[0]),a(),this.ats=o()},appHide:function(){},pageLoad:function(){var e,t=n().pop();this.ptl=o(),R(5,this.ptl,0,[]),C.conf.onPullDownRefresh&&(e=t.onPullDownRefresh,t.onPullDownRefresh=function(){C.onEvent("beacon_pulldownrefresh"),e.call(this,arguments)}),C.conf.onReachBottom&&function(){var e=t.onReachBottom;t.onReachBottom=function(){C.onEvent("beacon_reachbottom"),e.call(this,arguments)}}()},pageUnload:function(){R(6,0,this.ptl,[])},pageShow:function(){this.pts=o(),R(2,this.pts,0,[])},pageHide:function(){R(4,0,this.pts,[])},onEvent:function(e,t,s){var _=(new Date).getTime();c(4,_,0,[],[{weappPageName:n().pop().__route__,count:1,start:_,name:e,params:t||{}}],null,s)},setAppKey:function(e){C.conf.appKey=e},setChannelId:function(e){C.conf.channelId=e},setOpenid:function(e){e&&e.length>0&&(C.opid=e,wx.setStorageSync(C.prefix+C.oik,e))},setUnionid:function(e){e&&e.length>0&&(C.unid=e,wx.setStorageSync(C.prefix+C.uik,e))},setGetLocation:function(e){C.conf.getLocation=!0===e,!0===e&&i()},setGetUserInfo:function(e){C.conf.getUserInfo=!0===e,!0===e&&E()}};e.exports=C},function(e,t){e.exports={appKey:"MA0NCELB39H5S6",version:"1.0.0",channelId:"",getLocation:!1,getUserInfo:!1,onPullDownRefresh:!1,onReachBottom:!1,isDebug:!1,beforeLoad:()=>{}}}]).default});
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var Auth_1 = require("./script/scene/Auth");
var BoardRuntime_1 = require("./script/runtime/BoardRuntime");
var CircleSpriteRuntime_1 = require("./script/runtime/CircleSpriteRuntime");
var ScoreRuntime_1 = require("./script/runtime/ScoreRuntime");
var GameBoxRuntime_1 = require("./script/runtime/GameBoxRuntime");
var PlayerRuntime_1 = require("./script/runtime/PlayerRuntime");
var Game_1 = require("./script/scene/Game");
var Main_1 = require("./script/scene/Main");
var Room_1 = require("./script/scene/Room");
var DialogRuntime_1 = require("./script/runtime/DialogRuntime");
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
        reg("script/scene/Auth.ts", Auth_1.default);
        reg("script/runtime/BoardRuntime.ts", BoardRuntime_1.default);
        reg("script/runtime/CircleSpriteRuntime.ts", CircleSpriteRuntime_1.default);
        reg("script/runtime/ScoreRuntime.ts", ScoreRuntime_1.default);
        reg("script/runtime/GameBoxRuntime.ts", GameBoxRuntime_1.default);
        reg("script/runtime/PlayerRuntime.ts", PlayerRuntime_1.default);
        reg("script/scene/Game.ts", Game_1.default);
        reg("script/scene/Main.ts", Main_1.default);
        reg("script/scene/Room.ts", Room_1.default);
        reg("script/runtime/DialogRuntime.ts", DialogRuntime_1.default);
    };
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "Main.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();

},{"./script/runtime/BoardRuntime":7,"./script/runtime/CircleSpriteRuntime":8,"./script/runtime/DialogRuntime":9,"./script/runtime/GameBoxRuntime":10,"./script/runtime/PlayerRuntime":11,"./script/runtime/ScoreRuntime":12,"./script/scene/Auth":13,"./script/scene/Game":15,"./script/scene/Main":16,"./script/scene/Room":17}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var width = 540;
var height = 960;
var Main = /** @class */ (function () {
    function Main() {
        //根据IDE设置初始化引擎		
        Laya.init(width, height, Laya["WebGL"]);
        // Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = GameConfig_1.default.scaleMode;
        Laya.stage.screenMode = GameConfig_1.default.screenMode;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        // if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
        // if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = false;
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    Main.prototype.onVersionLoaded = function () {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        //加载IDE指定的场景
        //Laya.Scene.open("GameScene.json");
        Laya.Scene.open("Auth.json");
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
Laya.stage.bgColor = "#CCCCCC";

},{"./GameConfig":2}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 最大速度
exports.MAX_SPEED = 0.6;
exports.JUMP_SPEED = 0.3;
// 加速度
exports.ACC = 0.0006;
// 活动范围
exports.MAX_Y = 640;
exports.MIN_Y = 51.5;
exports.MAX_X = 434.5;
exports.MIN_X = 54.5;
// 初始分数
exports.INIT_SCORE = 3;
// 子弹参数
exports.BULLET_SPEED = 0.5;
exports.BULLET_GAP = 5;
// 物体盒子的宽高
var PLAYER_WIDTH = 90;
var PLAYER_HEIGHT = 90;
var BULLET_WIDTH = 20;
var BULLET_HEIGHT = 20;
var BOMB_WIDTH = 80;
var BOMB_HEIGHT = 80;
// 需要玩家发起帧消息的操作
var Action;
(function (Action) {
    Action[Action["JUMP"] = 1] = "JUMP";
})(Action = exports.Action || (exports.Action = {}));
function scaleRandom(random, start, end, fixed) {
    var scale = (end - start) * random + start;
    return Math.ceil(scale * Math.pow(10, fixed)) / Math.pow(10, fixed);
}
var Box = /** @class */ (function () {
    function Box(x, y, width, height) {
        // x, y : 中心坐标
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Box.prototype.checkCollide = function (box) {
        var collide = false;
        var offsetX = (box.width + this.width) / 2;
        var offsetY = (box.height + this.height) / 2;
        collide = Math.abs(this.x - box.x) < offsetX && Math.abs(this.y - box.y) < offsetY;
        return collide;
    };
    Box.prototype.update = function (deltaTime) { };
    return Box;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(x, y, width, height) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.speed = 0;
        _this.bullets = [];
        _this.isDie = true;
        _this.score = exports.INIT_SCORE;
        _this.lastBulletFrameId = 0;
        _this.dieFrameId = 0;
        _this.power = 0;
        return _this;
    }
    Player.prototype.cloneTo = function (player) {
        player.x = this.x;
        player.y = this.y;
        player.width = this.width;
        player.height = this.height;
        player.speed = this.speed;
        player.isDie = this.isDie;
        player.score = this.score;
        player.lastBulletFrameId = this.lastBulletFrameId;
        player.dieFrameId = this.dieFrameId;
        player.power = this.power;
        var i = 0;
        var playerBulletLength = player.bullets.length;
        var bulletLength = this.bullets.length;
        var length = Math.min(playerBulletLength, bulletLength);
        for (i = 0; i < length; i++) {
            this.bullets[i].cloneTo(player.bullets[i]);
        }
        player.bullets.splice(i);
        for (; i < bulletLength; i++) {
            player.bullets.push(this.bullets[i].clone());
        }
    };
    Player.prototype.addBullet = function (width, height, speed) {
        var bullet = new Bullet(this.x + Math.abs(speed) / speed * this.width * 0.7, this.y + 30, width, height, speed);
        this.power > 0 && (bullet.upgrade());
        this.bullets.push(bullet);
    };
    Player.prototype.clearBullets = function () {
        this.bullets = [];
    };
    Player.prototype.update = function (deltaTime) {
        // 更新全部子弹
        this.bullets = this.bullets.filter(function (bullet) {
            bullet.update(deltaTime);
            return !bullet.isOut;
        });
        // 更新位置
        if (this.y <= exports.MIN_Y) {
            this.y = exports.MIN_Y;
            this.speed = 0;
        }
        var y = this.y + (this.speed * deltaTime + 0.5 * exports.ACC * deltaTime * deltaTime);
        if (y > exports.MAX_Y)
            y = exports.MAX_Y;
        if (y < exports.MIN_Y)
            y = exports.MIN_Y;
        var speed = this.speed + exports.ACC * deltaTime;
        if (speed > exports.MAX_SPEED)
            speed = exports.MAX_SPEED;
        if (y >= exports.MAX_Y || y <= exports.MIN_Y)
            speed = 0;
        this.y = y;
        this.speed = speed;
        this.power > 0 && this.power--;
    };
    Player.prototype.handleAction = function (action) {
        if (action === Action.JUMP) {
            this.speed = -exports.JUMP_SPEED;
        }
    };
    Player.prototype.init = function (frameId) {
        this.bullets = [];
        this.y = exports.MAX_Y;
        this.power = 0;
        this.lastBulletFrameId = frameId;
    };
    Player.prototype.die = function (frameId) {
        this.isDie = true;
        this.score--;
        this.dieFrameId = frameId;
    };
    Player.prototype.upgrade = function (frameRate) {
        this.power = frameRate * 7;
    };
    return Player;
}(Box));
exports.Player = Player;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(x, y, width, height, speed) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.gap = exports.BULLET_GAP;
        _this.speed = 0;
        _this.isBig = false;
        _this.isOut = false;
        _this.speed = speed;
        _this.isOut = false;
        return _this;
    }
    Bullet.prototype.update = function (deltaTime) {
        this.x = this.x + deltaTime * this.speed;
        this.x > exports.MAX_X + this.gap && (this.isOut = true);
        this.x < exports.MIN_X - this.gap && (this.isOut = true);
    };
    Bullet.prototype.clone = function () {
        var bullet = new Bullet(this.x, this.y, this.width, this.height, this.speed);
        bullet.gap = this.gap;
        bullet.isBig = this.isBig;
        bullet.isOut = this.isOut;
        return bullet;
    };
    Bullet.prototype.cloneTo = function (bullet) {
        bullet.x = this.x;
        bullet.y = this.y;
        bullet.width = this.width;
        bullet.height = this.height;
        bullet.speed = this.speed;
        bullet.gap = this.gap;
        bullet.isBig = this.isBig;
        bullet.isOut = this.isOut;
    };
    Bullet.prototype.upgrade = function () {
        this.isBig = true;
        this.height = 1.6 * BULLET_HEIGHT;
    };
    return Bullet;
}(Box));
var Bomb = /** @class */ (function (_super) {
    __extends(Bomb, _super);
    function Bomb() {
        var _this = _super.call(this, (exports.MAX_X + exports.MIN_X) / 2, 0, BOMB_WIDTH, BOMB_HEIGHT) || this;
        _this.create = 0;
        _this.clear = 0;
        _this.y = 0;
        _this.show = false;
        _this.show = false;
        return _this;
    }
    Bomb.prototype.clearBomb = function (frameId) {
        this.show = false;
        this.clear = frameId;
        this.y = -100000;
    };
    Bomb.prototype.showBomb = function (y, frameId) {
        this.show = true;
        this.create = frameId;
        this.y = y;
        // console.log("bomb", frameId, seed);
    };
    Bomb.prototype.clone = function () {
        var bomb = new Bomb();
        bomb.create = this.create;
        bomb.clear = this.clear;
        bomb.y = this.y;
        bomb.show = this.show;
        return bomb;
    };
    Bomb.prototype.cloneTo = function (bomb) {
        bomb.create = this.create;
        bomb.clear = this.clear;
        bomb.y = this.y;
        bomb.show = this.show;
    };
    return Bomb;
}(Box));
var GameState = /** @class */ (function () {
    function GameState() {
        this.me = null;
        this.enemy = null;
        this.bomb = null;
        this.timestamp = 0;
        this.frameId = 0;
        this.roundTimes = 0;
        this.roundStartFrameId = 0;
        this.isBattle = false;
        this.initState();
    }
    GameState.prototype.initState = function () {
        this.me = new Player(exports.MIN_X, exports.MAX_Y, PLAYER_WIDTH, PLAYER_HEIGHT);
        this.enemy = new Player(exports.MAX_X, exports.MAX_Y, PLAYER_WIDTH, PLAYER_HEIGHT);
        this.timestamp = 0;
        this.frameId = 0;
        this.roundTimes = 0;
        this.roundStartFrameId = 0;
        this.isBattle = false;
        this.bomb = new Bomb();
    };
    GameState.prototype.cloneTo = function (state) {
        if (!state) {
            throw new Error("state is null");
        }
        // 复制玩家
        this.me.cloneTo(state.me);
        this.enemy.cloneTo(state.enemy);
        // 复制炸弹
        this.bomb.cloneTo(state.bomb);
        // 复制其他信息
        state.timestamp = this.timestamp;
        state.frameId = this.frameId;
        state.roundTimes = this.roundTimes;
        state.roundStartFrameId = this.roundStartFrameId;
        state.isBattle = this.isBattle;
    };
    GameState.prototype.checkAllCollide = function (frameRate) {
        var _this = this;
        // 子弹碰撞
        var bullet1 = this.me.bullets.filter(function (bullet) { return _this.enemy.bullets.filter(function (eBullet) { return bullet.checkCollide(eBullet); }).length === 0; });
        var bullet2 = this.enemy.bullets.filter(function (bullet) { return _this.me.bullets.filter(function (mBullet) { return bullet.checkCollide(mBullet); }).length === 0; });
        this.me.bullets = bullet1;
        this.enemy.bullets = bullet2;
        // 子弹-玩家碰撞
        var meDie = this.enemy.bullets.filter(function (bullet) { return bullet.checkCollide(_this.me); }).length > 0;
        var enemyDie = this.me.bullets.filter(function (bullet) { return bullet.checkCollide(_this.enemy); }).length > 0;
        meDie && this.me.die(this.frameId);
        enemyDie && this.enemy.die(this.frameId);
        // 子弹-炸弹碰撞
        // 距离创建时间大于一帧才产生碰撞
        if (this.frameId > this.bomb.create) {
            var index1_1 = -1;
            var index2_1 = -1;
            this.me.bullets.forEach(function (bullet, i) { return bullet.checkCollide(_this.bomb) && (index1_1 = i); });
            this.enemy.bullets.forEach(function (bullet, i) { return bullet.checkCollide(_this.bomb) && (index2_1 = i); });
            index1_1 >= 0 && this.me.upgrade(frameRate);
            index2_1 >= 0 && this.enemy.upgrade(frameRate);
            index1_1 >= 0 && this.me.bullets.splice(index1_1, 1);
            index2_1 >= 0 && this.enemy.bullets.splice(index2_1, 1);
            (index1_1 >= 0 || index2_1 >= 0) && this.bomb.clearBomb(this.frameId);
        }
    };
    GameState.prototype.checkRound = function (frameRate) {
        if (this.shouldEndRound(frameRate)) {
            this.isBattle = false;
            this.roundStartFrameId = this.frameId;
            this.me.clearBullets();
            this.enemy.clearBullets();
            this.bomb.clearBomb(this.frameId);
        }
        if (this.shouldStartRound()) {
            this.isBattle = true;
            this.roundTimes++;
            this.me.init(this.frameId);
            this.enemy.init(this.frameId);
            this.bomb.clearBomb(this.frameId);
        }
    };
    GameState.prototype.shouldEndRound = function (frameRate) {
        return this.isBattle && (this.me.isDie || this.enemy.isDie);
    };
    GameState.prototype.shouldStartRound = function () {
        return !this.me.isDie && !this.enemy.isDie && !this.isBattle;
    };
    GameState.prototype.checkRelivePlayer = function (player, x, frameRate) {
        if (player.isDie && this.frameId - player.dieFrameId > frameRate * 1.5) {
            player.init(this.frameId);
            player.isDie = false;
            player.x = x;
        }
    };
    GameState.prototype.checkEmitBullet = function (player, speed, frameRate) {
        if (player.lastBulletFrameId + frameRate * 1 < this.frameId) {
            player.lastBulletFrameId = this.frameId;
            player.addBullet(BULLET_WIDTH, BULLET_HEIGHT, speed);
        }
    };
    GameState.prototype.checkBombCreate = function (frameRate) {
        if (!this.bomb.show && this.bomb.clear + frameRate * 4 < this.frameId) {
            // 生成
            var random = MGOBE.RandomUtil.random();
            if (random > 0.7) {
                var y = scaleRandom(MGOBE.RandomUtil.random(), exports.MIN_Y, exports.MAX_Y, 0);
                this.bomb.showBomb(y, this.frameId);
            }
        }
    };
    GameState.prototype.checkBombClear = function (frameRate) {
        if (this.bomb.show && this.bomb.create + frameRate * 4 < this.frameId) {
            // 销毁
            this.bomb.clearBomb(this.frameId);
        }
    };
    GameState.prototype.runAutoTask = function (frameRate) {
        if (this.isBattle) {
            // 对战逻辑
            // 是否发射子弹
            this.checkEmitBullet(this.me, exports.BULLET_SPEED, frameRate);
            this.checkEmitBullet(this.enemy, -exports.BULLET_SPEED, frameRate);
            // 生成/销毁炸弹
            this.checkBombCreate(frameRate);
            this.checkBombClear(frameRate);
        }
    };
    GameState.prototype.calcFrame = function (bst, frameRate) {
        var frame = bst.frame;
        // 初始化随机种子
        var seed = frame.ext.seed + frame.id;
        MGOBE.RandomUtil.init(seed);
        // 处理帧item
        for (var i = frame.items.length - 1; i >= 0; i--) {
            var frameItem = frame.items[i];
            var playerFrame = frameItem.data;
            var player = this.enemy;
            if (frameItem.playerId === MGOBE.Player.id) {
                player = this.me;
            }
            player.handleAction(playerFrame.action);
        }
        // 一帧的时间差
        var deltaTime = Math.floor((1000 / frameRate) * 10000) / 10000;
        // 计算状态
        this.me.update(deltaTime);
        this.enemy.update(deltaTime);
        // 更新时间
        this.timestamp = frame.time;
        this.frameId = frame.id;
        // 碰撞处理
        this.checkAllCollide(frameRate);
        // 检查对局信息
        this.checkRound(frameRate);
        // 处理复活
        this.checkRelivePlayer(this.me, exports.MIN_X, frameRate);
        this.checkRelivePlayer(this.enemy, exports.MAX_X, frameRate);
        // 游戏自动逻辑：发射子弹/出现炸弹
        this.runAutoTask(frameRate);
    };
    return GameState;
}());
exports.default = GameState;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global = /** @class */ (function () {
    function Global() {
    }
    return Global;
}());
var global = new Global();
exports.default = global;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoardRuntime = /** @class */ (function (_super) {
    __extends(BoardRuntime, _super);
    function BoardRuntime() {
        return _super.call(this) || this;
    }
    BoardRuntime.prototype.init = function () {
        this.head1 = this._children[0];
        this.head2 = this._children[1];
        this.name1 = this._children[2];
        this.name2 = this._children[3];
        this.scoreBg1 = this._children[4];
        this.scoreBg2 = this._children[5];
        this.score1 = this._children[6];
        this.score2 = this._children[7];
        this.name1.text = "";
        this.name2.text = "";
        this.setScoreBar(3, 3);
    };
    // 设置血量条
    BoardRuntime.prototype.setScoreBar = function (score1, score2) {
        this.score1.set(score1);
        this.score2.set(score2);
        this.score1.pivotX = 0;
        this.score2.pivotX = this.score2.width;
        this.score1.x = this.scoreBg1.x;
        this.score2.x = this.scoreBg2.x + this.scoreBg2.width * this.scoreBg2.scaleX;
    };
    // 设置头像、名字、血量条
    BoardRuntime.prototype.set = function (player1, player2) {
        if (!this.score2) {
            this.init();
        }
        if (this.score1.score === player1.score && this.score2.score === player2.score && !!this.name1.text) {
            return;
        }
        this.head1.loadImage(player1.profile);
        this.head2.loadImage(player2.profile);
        var name1 = player1.name;
        var name2 = player2.name;
        name1.length > 5 && (name1 = name1.slice(0, 5) + "...");
        name2.length > 5 && (name2 = name2.slice(0, 5) + "...");
        this.name1.text = name1;
        this.name2.text = name2;
        this.setScoreBar(player1.score, player2.score);
    };
    return BoardRuntime;
}(Laya.Sprite));
exports.default = BoardRuntime;

},{}],8:[function(require,module,exports){
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
        var superLoad = _super.prototype.loadImage.bind(this);
        if (!this.__width || !this.__height || !this.__scaleX || !this.__scaleY) {
            this.__width = this.width;
            this.__height = this.height;
            this.__scaleX = this.scaleX;
            this.__scaleY = this.scaleY;
        }
        return superLoad(url, new Laya.Handler(this, function callback() {
            this.width = this.__width;
            this.height = this.__height;
            this.scaleX = this.__scaleX;
            this.scaleY = this.__scaleY;
            this.removeChildren();
            this.mask = null;
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
            this.mask = mask;
            this.url = url;
            complete && complete.run();
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
        return _super.call(this) || this;
    }
    DialogRuntime.prototype.showRound = function (num) {
        this._children.forEach(function (node) { return node.visible = false; });
        var round = this._children[0];
        round.visible = true;
        round.pivot(0.5, 0.5);
        var path = "image/di-" + num + "-ju.png";
        round.loadImage(path);
        this.popup(true, true);
    };
    DialogRuntime.prototype.showEnd = function (score1, score2, name1, name2, url1, url2) {
        this._children.forEach(function (node) { return node.visible = true; });
        this._children[0].visible = false;
        var end = this._children[1];
        var myHead = this._children[2];
        var enemyHead = this._children[3];
        var myName = this._children[4];
        var enemyName = this._children[5];
        var myScore = this._children[7];
        var enemyScore = this._children[8];
        var endTitle = this._children[9];
        end.loadImage(score1 >= score2 ? "image/tan-kuang-shen-li.png" : "image/tan-kuang-shi-bai.png");
        myHead.loadImage(url1);
        enemyHead.loadImage(url2);
        name1.length > 5 && (name1 = name1.slice(0, 5) + "...");
        name2.length > 5 && (name2 = name2.slice(0, 5) + "...");
        myName.text = name1;
        enemyName.text = name2;
        myScore.loadImage("image/" + score1 + ".png");
        enemyScore.loadImage("image/" + score2 + ".png");
        score1 > score2 && endTitle.loadImage("image/shen-li.png");
        score1 === score2 && endTitle.loadImage("image/ping-ju.png");
        score1 < score2 && endTitle.loadImage("image/shi-bai.png");
        this.show(true, true);
    };
    return DialogRuntime;
}(Laya.Dialog));
exports.default = DialogRuntime;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameBoxRuntime = /** @class */ (function (_super) {
    __extends(GameBoxRuntime, _super);
    function GameBoxRuntime() {
        return _super.call(this) || this;
    }
    GameBoxRuntime.prototype.onAwake = function () {
        this.me = this._children[0];
        this.enemy = this._children[1];
    };
    return GameBoxRuntime;
}(Laya.Box));
exports.default = GameBoxRuntime;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ANI_TIMER_TAG = "__ani_timer";
var PlayerRuntime = /** @class */ (function (_super) {
    __extends(PlayerRuntime, _super);
    function PlayerRuntime() {
        var _this = _super.call(this) || this;
        _this.jumpTag = false;
        _this.isEnemy = false;
        _this.profile = "";
        _this.name = "";
        _this.bullets = [];
        _this.playerAnimation = null;
        _this.pool = laya.utils.Pool;
        _this.bulletPath = "image/bullet.png";
        _this.bigBulletPath = "image/big_bullet.png";
        return _this;
    }
    PlayerRuntime.prototype.init = function (gameBox, playerId, isEnemy, name, profile) {
        var width = this.width * this.scaleX;
        var height = this.height * this.scaleY;
        this.pivot(this.width / 2, this.height / 2);
        this.x += this.width * this.scaleX / 2;
        this.visible = true;
        this._children[0].visible = false;
        this.isEnemy = isEnemy;
        this.playerId = playerId;
        this.name = name;
        this.profile = profile;
    };
    PlayerRuntime.prototype.updateState = function (playerState) {
        this.updatePlayerLocate(playerState.y);
        var i = 0;
        var oldBulltes = this.bullets;
        this.removeAllBullet();
        for (i = 0; i < playerState.bullets.length; i++) {
            var x = playerState.bullets[i].x;
            var y = playerState.bullets[i].y;
            var isBig = playerState.bullets[i].isBig;
            var bullet = this.addBullet(isBig);
            this.updateBulletLocate(x, y, bullet);
        }
    };
    // 更新坐标
    PlayerRuntime.prototype.updatePlayerLocate = function (y) {
        this.y = y;
        this.playerAnimation && (this.playerAnimation.y = y);
    };
    // 更新子弹
    PlayerRuntime.prototype.updateBulletLocate = function (x, y, bullet) {
        bullet.x = x;
        bullet.y = y;
    };
    PlayerRuntime.prototype.runBlow = function () {
        if (this._children[0].visible === true) {
            return;
        }
        var path = "image/tian-shi-zhu-1.png";
        var offsetX = 60;
        if (this.isEnemy) {
            path = "image/e-mo-zhu1.png";
            offsetX *= -1;
        }
        this.loadImage(path);
        this._children[0].visible = true;
    };
    PlayerRuntime.prototype.runLive = function () {
        this._children[0].visible = false;
        var path = "image/tian-shi-zhu.png";
        if (this.isEnemy) {
            path = "image/e-mo-zhu.png";
        }
        this.loadImage(path);
    };
    PlayerRuntime.prototype.addBullet = function (isBig) {
        if (isBig === void 0) { isBig = false; }
        var tag = isBig ? "big_bullet" : "bullet";
        var bullet = (this.pool.getItem(tag) || new Laya.Sprite());
        bullet["isBig"] = isBig;
        var bulletPath = this.bulletPath;
        if (isBig) {
            bulletPath = this.bigBulletPath;
        }
        bullet.loadImage(bulletPath).pivot(bullet.width / 2, bullet.height / 2).scale(0.5, 0.5).pos(this.x, this.y);
        if (this.isEnemy) {
            bullet.rotation = 180;
        }
        else {
            bullet.rotation = 0;
        }
        this.parent.addChild(bullet);
        var index = this.bullets.indexOf(bullet);
        index < 0 && this.bullets.push(bullet);
        return bullet;
    };
    PlayerRuntime.prototype.removeBullet = function (bullet) {
        bullet.removeSelf();
        var isBig = bullet["isBig"];
        var tag = isBig ? "big_bullet" : "bullet";
        this.pool.recover(tag, bullet);
        var index = this.bullets.indexOf(bullet);
        index >= 0 && this.bullets.splice(index, 1);
    };
    PlayerRuntime.prototype.removeAllBullet = function () {
        var _this = this;
        this.bullets.forEach(function (bullet) {
            _this.removeBullet(bullet);
        });
    };
    return PlayerRuntime;
}(Laya.Sprite));
exports.default = PlayerRuntime;

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScoreRuntime = /** @class */ (function (_super) {
    __extends(ScoreRuntime, _super);
    function ScoreRuntime() {
        return _super.call(this) || this;
    }
    ScoreRuntime.prototype.set = function (score) {
        if (this.score === score) {
            return;
        }
        this.score = score;
        if (score === 0)
            return this.loadImage("image/transparent.png");
        var path = "image/xue-" + score + ".png";
        this.loadImage(path);
    };
    return ScoreRuntime;
}(Laya.Sprite));
exports.default = ScoreRuntime;

},{}],13:[function(require,module,exports){
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
            var width, height, style, handleUserInfo;
            var _this = this;
            return __generator(this, function (_a) {
                this.initScene();
                width = 150;
                height = 35;
                style = {
                    width: width,
                    height: height,
                    left: window.innerWidth / 2 - width / 2,
                    top: window.innerHeight / 2 + 100,
                };
                handleUserInfo = function (userInfo) {
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
                return [2 /*return*/];
            });
        });
    };
    return Auth;
}(Base_1.default));
exports.default = Auth;

},{"../Global":5,"./Base":14}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("../Global");
require("../../../libs/MGOBE");
var GameState_1 = require("../GameState");
var Util_1 = require("../Util");
;
function initSDK(initGameInfo) {
    var Room = MGOBE.Room, Listener = MGOBE.Listener, ErrCode = MGOBE.ErrCode, ENUM = MGOBE.ENUM, DebuggerLog = MGOBE.DebuggerLog;
    Global_1.default.gameId = initGameInfo.gameId;
    Global_1.default.openId = initGameInfo.openId;
    Global_1.default.secretKey = initGameInfo.secretKey;
    Global_1.default.server = initGameInfo.server;
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
                        // 初始化场景
                        this.initScene();
                        this.setBroadcast();
                        return [4 /*yield*/, this.loadProgressBar()];
                    case 1:
                        _a.sent();
                        // 判断是否拿到玩家信息
                        if (!Global_1.default.userInfo) {
                            this.openScene("Auth");
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
        // 记录当前 scene 名称
        Base.sceneName = this.scene.url.split(".")[0] || "";
    };
    // 对话框
    Base.prototype.showDialog = function (content, confirm, cancel) {
        wx.showModal({
            title: "提示", content: content + "", success: function (res) {
                res.confirm && confirm && confirm();
                !res.confirm && cancel && cancel();
            }
        });
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
                            };
                            Util_1.setGameInfoToStorage(gameInfo);
                        }
                        return [4 /*yield*/, initSDK(gameInfo)];
                    case 1:
                        res = _a.sent();
                        this.showProgressBar(false);
                        if (res) {
                            this.setBroadcast();
                            // 游戏状态
                            Global_1.default.state = new GameState_1.default();
                            Global_1.default.state.initState();
                        }
                        else {
                            this.showDialog("初始化失败");
                        }
                        return [2 /*return*/, Promise.resolve(res)];
                }
            });
        });
    };
    // 创建房间
    Base.prototype.createRoom = function () {
        var playerInfo = {
            name: Global_1.default.userInfo.nickName,
            customPlayerStatus: 0,
            customProfile: Global_1.default.userInfo.avatarUrl,
        };
        var createRoomPara = {
            roomName: "猪猪对战",
            maxPlayers: 2,
            roomType: "1V1",
            customProperties: "",
            isPrivate: true,
            playerInfo: playerInfo,
        };
        return new Promise(function (resolve) {
            Global_1.default.room.createRoom(createRoomPara, function (event) {
                return resolve(event.code);
            });
        });
    };
    // 获取自己的room
    Base.prototype.getMyRoom = function () {
        return new Promise(function (resolve) {
            Global_1.default.room.initRoom();
            Global_1.default.room.getRoomDetail(function (event) {
                if (event.code === MGOBE.ErrCode.EC_OK) {
                    return resolve(true);
                }
                else {
                    return resolve(false);
                }
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
    // 房间匹配
    Base.prototype.matchRoom = function () {
        var playerInfo = {
            name: Global_1.default.userInfo.nickName,
            customPlayerStatus: 0,
            customProfile: Global_1.default.userInfo.avatarUrl,
        };
        var matchRoomPara = {
            playerInfo: playerInfo,
            maxPlayers: 2,
            roomType: "1V1",
        };
        return new Promise(function (resolve) {
            Global_1.default.room.matchRoom(matchRoomPara, function (event) {
                return resolve(event.code);
            });
        });
    };
    // 修改玩家状态
    Base.prototype.changeCustomPlayerStatus = function (customPlayerStatus) {
        return new Promise(function (resolve) {
            Global_1.default.room.changeCustomPlayerStatus({ customPlayerStatus: customPlayerStatus }, function (event) {
                return resolve(event.code);
            });
        });
    };
    // 开始帧同步
    Base.prototype.startFrameSync = function () {
        return new Promise(function (resolve) {
            Global_1.default.room.startFrameSync({}, function (event) {
                return resolve(event.code);
            });
        });
    };
    // 更新游戏状态
    Base.prototype.updateGlobalState = function (event) {
        Global_1.default.state.calcFrame(event.data, Global_1.default.room.roomInfo.frameRate);
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
        Global_1.default.room.onRecvFrame = this.onRecvFrame.bind(this);
        Global_1.default.room.onChangeCustomPlayerStatus = this.onChangeCustomPlayerStatus.bind(this);
        Global_1.default.room.onAutoRequestFrameError = this.onAutoRequestFrameError.bind(this);
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
    Base.prototype.onRecvFrame = function (event) {
        this.updateGlobalState(event);
    };
    Base.prototype.onChangeCustomPlayerStatus = function (event) {
        console.log("onChangeUserState", "base");
    };
    Base.prototype.onAutoRequestFrameError = function (event) {
        console.error("frameErrorBroadcast", "base", event);
        this.showDialog("补帧失败，无法继续游戏" + event.data.code);
    };
    ;
    Base.ProgressBar = null;
    return Base;
}(Laya.Script));
exports.default = Base;

},{"../../../libs/MGOBE":1,"../GameState":4,"../Global":5,"../Util":6}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var Global_1 = require("../Global");
var GameState_1 = require("../GameState");
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.isInit = false;
        _this.isEnd = false;
        _this.dialog = null;
        _this.state = null;
        _this.timer = 0;
        return _this;
    }
    Game.prototype.onAwake = function () {
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
    // canvas 更新方法
    Game.prototype.onUpdate = function () {
        if (this.isEnd) {
            return;
        }
        if (!this.isInit) {
            return this.init();
        }
        var now = Date.now();
        var deltaFrameTime = now - this.state.timestamp;
        // 渲染层状态更新
        this.state.me.update(deltaFrameTime);
        this.state.enemy.update(deltaFrameTime);
        // 更新炸弹
        this.bomb.y = this.state.bomb.y;
        // 更新玩家
        this.me.updateState(this.state.me);
        this.enemy.updateState(this.state.enemy);
        // 修改时间
        this.state.timestamp = now;
        // 未开局则清除子弹
        if (!this.state.isBattle) {
            this.me.removeAllBullet();
            this.enemy.removeAllBullet();
        }
    };
    Game.prototype.init = function () {
        var _this = this;
        if (this.isInit) {
            return;
        }
        this.initView();
        this.initListener();
        this.isInit = true;
        this.isEnd = false;
        this.dialog = this.dialogPrefeb.create();
        // 初始化表现层状态
        if (!this.state) {
            this.state = new GameState_1.default();
            Global_1.default.state.cloneTo(this.state);
        }
        // 修改玩家状态
        Global_1.default.room.changeCustomPlayerStatus({ customPlayerStatus: 0 });
        // 检查房间成员与帧广播状态
        Global_1.default.room.onUpdate = function () {
            if (Global_1.default.room.roomInfo.playerList.length !== 2 || Global_1.default.room.roomInfo.frameSyncState === MGOBE.ENUM.FrameSyncState.STOP) {
                Global_1.default.room.roomInfo.frameSyncState === MGOBE.ENUM.FrameSyncState.START && Global_1.default.room.stopFrameSync({});
                Global_1.default.room.onUpdate = null;
                _this.timer = setTimeout(function () { return _this.timer && _this.openScene("Room"); }, 3000);
            }
        };
    };
    Game.prototype.initView = function () {
        this.enemy.visible = false;
        this.me.visible = false;
        var me = Global_1.default.room.roomInfo.playerList.filter(function (u) { return u.id === MGOBE.Player.id; })[0];
        var enemy = Global_1.default.room.roomInfo.playerList.filter(function (u) { return u.id !== MGOBE.Player.id; })[0];
        this.me.init(this.gamebox, MGOBE.Player.id, false, me.name, me.customProfile);
        this.enemy.init(this.gamebox, enemy.id, true, enemy.name, enemy.customProfile);
        this.updateLiveBar();
    };
    Game.prototype.initListener = function () {
        var _this = this;
        this.scene.on(Laya.Event.CLICK, this, this.jump);
        this.leaveBtn.on(Laya.Event.CLICK, this, function () { return _this.showDialog("是否退出游戏？", function () { return _this.leaveMyRoom(); }); });
    };
    // 弹出对话框
    Game.prototype.openRoundDialog = function (num, time) {
        if (time === void 0) { time = 1000; }
        this.dialog.showRound(num);
        setTimeout(function () { return Laya.Dialog.closeAll(); }, time);
    };
    // 发送请求：跳
    Game.prototype.jump = function () {
        if (!this.state.isBattle || this.isEnd) {
            return;
        }
        var data = {
            playerId: MGOBE.Player.id,
            action: GameState_1.Action.JUMP,
        };
        Global_1.default.room.sendFrame({ data: data });
    };
    // 游戏画面方法：计算状态
    Game.prototype.onRecvFrame = function (event) {
        _super.prototype.onRecvFrame.call(this, event);
        var isBattleState = this.state.isBattle;
        // 自动补帧的时候不需要拷贝到表现层
        if (event.data.frame.isReplay) {
            return;
        }
        if (this.isEnd || !this.isInit) {
            return;
        }
        // 拷贝到游戏表现层
        Global_1.default.state.cloneTo(this.state);
        if (!isBattleState && this.state.isBattle) {
            this.openRoundDialog(this.state.roundTimes);
            this.me.runLive();
            this.enemy.runLive();
        }
        this.updateLiveBar();
        this.checkGameState();
    };
    // 检查游戏状态
    Game.prototype.checkGameState = function () {
        if (this.isEnd) {
            return;
        }
        // 对局结束
        if ((this.state.me.isDie || this.state.enemy.isDie) && this.state.roundStartFrameId > 0) {
            this.endRound();
        }
        // 游戏结束
        if (this.state.me.score <= 0 || this.state.enemy.score <= 0) {
            // 游戏结束
            this.isEnd = true;
            this.endGame();
        }
    };
    // 结束当前局，播放击中动画
    Game.prototype.endRound = function () {
        this.state.enemy.isDie && this.enemy.runBlow();
        this.state.me.isDie && this.me.runBlow();
    };
    // 结束当前游戏
    Game.prototype.endGame = function () {
        var _this = this;
        var score1 = GameState_1.INIT_SCORE - Global_1.default.state.enemy.score;
        var score2 = GameState_1.INIT_SCORE - Global_1.default.state.me.score;
        var name1 = this.me.name;
        var name2 = this.enemy.name;
        var url1 = this.me.profile;
        var url2 = this.enemy.profile;
        // 弹框显示结果
        this.dialog.showEnd(score1, score2, name1, name2, url1, url2);
        Global_1.default.state.initState();
        // 停止帧同步
        Global_1.default.room.stopFrameSync({});
        this.leaveBtn.visible = false;
        // 点击画面回到房间
        this.scene.once(Laya.Event.CLICK, this, function () {
            Laya.Dialog.closeAll();
            _this.openScene("Room");
        });
    };
    // 更新血量条
    Game.prototype.updateLiveBar = function () {
        var myScore = Global_1.default.state.me.score;
        var enemyScore = Global_1.default.state.enemy.score;
        var me = {
            name: this.me.name,
            score: myScore,
            profile: this.me.profile,
        };
        var enemy = {
            name: this.enemy.name,
            score: enemyScore,
            profile: this.enemy.profile,
        };
        this.board.set(me, enemy);
    };
    Game.prototype.onDisable = function () {
        Global_1.default.room.onUpdate = null;
        this.onUpdate = function () { return null; };
        clearTimeout(this.timer);
        Laya.Dialog.closeAll();
        this.timer = 0;
    };
    Game.prototype.onAutoRequestFrameError = function (event) {
        this.showDialog("补帧失败，无法继续游戏");
        this.leaveMyRoom();
    };
    Game.prototype.leaveMyRoom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.leaveRoom()];
                    case 1:
                        res = _a.sent();
                        if (!Global_1.default.room.isInRoom()) {
                            this.openScene("Main");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Game;
}(Base_1.default));
exports.default = Game;

},{"../GameState":4,"../Global":5,"./Base":14}],16:[function(require,module,exports){
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
    Main.prototype.initListener = function () {
        var _this = this;
        this.createRoomBtn.on(Laya.Event.CLICK, this, function () { return _this.onCreateRoomClick(); });
        this.matchBtn.on(Laya.Event.CLICK, this, function () { return _this.onMatchClick(); });
    };
    Main.prototype.initView = function () {
        this.myHead.loadImage(Global_1.default.userInfo.avatarUrl);
    };
    Main.prototype.onCreateRoomClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginRes, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // todo: 通过邀请链接加房
                        if (this.isInProgress()) {
                            return [2 /*return*/];
                        }
                        this.showProgressBar(true);
                        return [4 /*yield*/, this.login()];
                    case 1:
                        loginRes = _a.sent();
                        if (!loginRes) {
                            return [2 /*return*/, this.showProgressBar(false)];
                        }
                        return [4 /*yield*/, this.createRoom()];
                    case 2:
                        res = _a.sent();
                        this.showProgressBar(false);
                        if (res === MGOBE.ErrCode.EC_ROOM_PLAYER_ALREADY_IN_ROOM) {
                            return [2 /*return*/, this.handleInRoom()];
                        }
                        if (res === MGOBE.ErrCode.EC_OK) {
                            this.openScene("Room");
                            return [2 /*return*/, this.invite()];
                        }
                        return [2 /*return*/, this.showDialog("创建房间失败")];
                }
            });
        });
    };
    Main.prototype.onMatchClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isInProgress()) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.login()];
                    case 1:
                        loginRes = _a.sent();
                        if (!loginRes) {
                            return [2 /*return*/];
                        }
                        this.openScene("Room");
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.invite = function () {
        wx.shareAppMessage({
            title: "你还在犹豫什么，快来和我对战一场！",
            query: "roomId=" + Global_1.default.room.roomInfo.id,
            imageUrl: "image/share.png",
        });
    };
    Main.prototype.leaveMyRoom = function () {
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
                        if (res === MGOBE.ErrCode.EC_OK || res === MGOBE.ErrCode.EC_ROOM_PLAYER_NOT_IN_ROOM) {
                            return [2 /*return*/, Promise.resolve(true)];
                        }
                        else {
                            this.showDialog("退房失败");
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.handleInRoom = function () {
        var _this = this;
        this.showDialog("用户已在房间内，是否进入房间？", function () {
            // 进入旧房间
            _this.openScene("Room");
        }, function () {
            // 退出旧房间
            _this.leaveMyRoom();
        });
    };
    Main.prototype.onDisable = function () {
        this.onUpdate = function () { return null; };
    };
    return Main;
}(Base_1.default));
exports.default = Main;

},{"../Global":5,"./Base":14}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var Global_1 = require("../Global");
var BUTTON_TAG;
(function (BUTTON_TAG) {
    BUTTON_TAG["READY"] = "READY";
    BUTTON_TAG["CANCEL_READY"] = "CANCEL_READY";
    BUTTON_TAG["CANCEL_MATCH"] = "CANCEL_MATCH";
    BUTTON_TAG["LEAVE"] = "LEAVE";
})(BUTTON_TAG || (BUTTON_TAG = {}));
var BUTTON_URL = {
    READY: "image/ready_button.png",
    CANCEL_READY: "image/cancel_ready_button.png",
    CANCEL_MATCH: "image/cancel_match_button.png",
    LEAVE: "image/leave_button.png",
};
var Room = /** @class */ (function (_super) {
    __extends(Room, _super);
    function Room() {
        var _this = _super.call(this) || this;
        _this.matchTag = BUTTON_TAG.LEAVE;
        _this.buttonTag = BUTTON_TAG.READY;
        _this.isDisable = false;
        return _this;
    }
    Room.prototype.onAwake = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.onAwake.call(this)];
                    case 1:
                        _a.sent();
                        Global_1.default.room.onUpdate = function () { return _this.onRoomUpdate(); };
                        this.isDisable = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    Room.prototype.onEnable = function () {
        this.initView(Global_1.default.room.isInRoom());
        this.initListener();
        // 如果不在房间中就发起匹配
        !Global_1.default.room.isInRoom() && this.callMatchRoom();
    };
    Room.prototype.initView = function (isMyRoom) {
        this.setReadyButtonTag(BUTTON_TAG.READY);
        this.setLeaveButtonTag(BUTTON_TAG.LEAVE);
        this.myHead.loadImage(Global_1.default.userInfo.avatarUrl);
        Global_1.default.state.initState();
        this.myNetWork.text = "";
        this.enemyNetWork.text = "";
        this.readyBtn.visible = true;
        this.setRoom();
    };
    Room.prototype.initListener = function () {
        var _this = this;
        this.leaveBtn.on(Laya.Event.CLICK, this, function () { return _this.leave(); });
        this.readyBtn.on(Laya.Event.CLICK, this, function () { return _this.changeState(); });
    };
    Room.prototype.setReadyButtonTag = function (tag) {
        this.readyBtn.loadImage(BUTTON_URL[tag]);
        this.buttonTag = tag;
    };
    Room.prototype.setLeaveButtonTag = function (tag) {
        this.leaveBtn.loadImage(BUTTON_URL[tag]);
        this.matchTag = tag;
    };
    Room.prototype.onRoomUpdate = function () {
        this.setRoom();
        // 如果满足开始条件，直接进入游戏
        if (Global_1.default.room.roomInfo.frameSyncState === MGOBE.ENUM.FrameSyncState.STOP &&
            Global_1.default.room.roomInfo.playerList.length === 2 &&
            Global_1.default.room.roomInfo.playerList.filter(function (u) { return u.customPlayerStatus !== 1 || u.commonNetworkState !== MGOBE.ENUM.NetworkState.COMMON_ONLINE; }).length === 0) {
            this.start();
        }
    };
    Room.prototype.setRoom = function () {
        var _this = this;
        this.myNetWork.text = "";
        this.enemyNetWork.text = "";
        if (Global_1.default.room.roomInfo.playerList.length === 2) {
            this.setLeaveButtonTag(BUTTON_TAG.LEAVE);
        }
        Global_1.default.room.roomInfo.playerList.forEach(function (user) {
            var label;
            if (user.id === MGOBE.Player.id) {
                label = _this.myNetWork;
                if (user.customPlayerStatus === 1) {
                    // 玩家已准备
                    _this.setReadyButtonTag(BUTTON_TAG.CANCEL_READY);
                }
                else {
                    // 玩家未准备
                    _this.setReadyButtonTag(BUTTON_TAG.READY);
                }
                _this.myHead.loadImage(user.customProfile);
            }
            else {
                label = _this.enemyNetWork;
                if (user.customPlayerStatus === 1) {
                    // 敌人已准备
                    _this.enemyStatus.loadImage("image/ready.png");
                }
                else {
                    // 敌人未准备
                    _this.enemyStatus.loadImage("image/not_ready.png");
                }
                _this.enemyHead.loadImage(user.customProfile);
            }
            if (user.commonNetworkState === MGOBE.ENUM.NetworkState.COMMON_ONLINE) {
                label.text = "在线";
            }
            else {
                label.text = "离线";
            }
        });
        if (Global_1.default.room.roomInfo.playerList.length <= 1) {
            this.enemyHead.loadImage("image/search.png");
            this.enemyStatus.loadImage("image/not_ready.png");
            this.enemyNetWork.text = "";
        }
    };
    Room.prototype.start = function () {
        var _this = this;
        var startFunc = function () { return __awaiter(_this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.changeState(0)];
                    case 1:
                        _a.sent();
                        // 只有房主才能调用开始帧同步
                        if (Global_1.default.room.roomInfo.owner !== MGOBE.Player.id) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.startFrameSync()];
                    case 2:
                        res = _a.sent();
                        if (res !== MGOBE.ErrCode.EC_OK) {
                            return [2 /*return*/, this.showDialog("开始失败" + res, function () { return startFunc(); })];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        startFunc();
    };
    Room.prototype.callMatchRoom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showProgressBar(true);
                        this.setLeaveButtonTag(BUTTON_TAG.CANCEL_MATCH);
                        return [4 /*yield*/, this.matchRoom()];
                    case 1:
                        res = _a.sent();
                        this.showProgressBar(false);
                        if (res === MGOBE.ErrCode.EC_ROOM_PLAYER_ALREADY_IN_ROOM) {
                            return [2 /*return*/];
                        }
                        if (res !== MGOBE.ErrCode.EC_OK) {
                            return [2 /*return*/, this.showDialog("准备失败" + res, function () { return _this.openScene("Main"); }, function () { return _this.openScene("Main"); })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Room.prototype.leave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.leaveRoom()];
                    case 1:
                        res = _a.sent();
                        if (!Global_1.default.room.isInRoom()) {
                            // 直接离开
                            return [2 /*return*/, this.openScene("Main")];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Room.prototype.changeState = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            var customStatus, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showProgressBar(true);
                        customStatus = this.buttonTag === BUTTON_TAG.READY ? 1 : 0;
                        status !== undefined && (customStatus = status);
                        return [4 /*yield*/, this.changeCustomPlayerStatus(customStatus)];
                    case 1:
                        res = _a.sent();
                        this.showProgressBar(false);
                        if (res !== MGOBE.ErrCode.EC_OK) {
                            this.showDialog("修改状态失败");
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        return [2 /*return*/, Promise.resolve(true)];
                }
            });
        });
    };
    Room.prototype.onRecvFrame = function (event) {
        _super.prototype.onRecvFrame.call(this, event);
        if (this.isDisable) {
            return;
        }
        this.isDisable = true;
        this.openScene("GameScene");
    };
    Room.prototype.onDisable = function () {
        this.onUpdate = function () { return null; };
        Global_1.default.room.onUpdate = null;
    };
    return Room;
}(Base_1.default));
exports.default = Room;

},{"../Global":5,"./Base":14}]},{},[3]);
