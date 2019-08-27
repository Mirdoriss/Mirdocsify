"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Question_1 = __importDefault(require("./Question"));
const pushHandler_1 = require("./pushHandler");
/**
 * 生成随机数
 * @param from
 * @param to
 * @param count
 */
function random(from, to, count) {
    if (to <= from) {
        throw new Error("random 参数错误");
    }
    let res = [];
    while (res.length < count) {
        let r = Math.ceil((Math.random() * (to - from)) + from);
        if (res.findIndex(v => v === r) >= 0) {
            continue;
        }
        else {
            res.push(r);
        }
    }
    return res;
}
exports.random = random;
/**
 * 随机抽题
 */
function randomQue() {
    let tagIds = random(0, Question_1.default.length - 1, 5);
    //tagIds[0] = tags.length - 1;
    //tagIds[2] = tags.length - 1;
    let res = [];
    for (let i = 0; i < tagIds.length; i++) {
        let tag = Question_1.default[tagIds[i]];
        console.log("tag", tagIds, Question_1.default.length);
        let queId = random(0, tag.ques.length - 1, 1)[0];
        //queId = 0;
        res.push(tag.ques[queId]);
    }
    return res;
}
exports.randomQue = randomQue;
/**
 * 计算分数
 * @param full 满分
 * @param deltaTime 答题耗时
 */
function calcScore(full, deltaTime) {
    let res = 0;
    const timeout = pushHandler_1.ANS_TIME;
    const bufferTime = 3500;
    if (deltaTime <= bufferTime) {
        return full;
    }
    res = Math.ceil(Math.max(full - (deltaTime - bufferTime) / (timeout - bufferTime) * full, 0));
    return res;
}
exports.calcScore = calcScore;
