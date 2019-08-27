import tags, { Que } from "./Question";
import { ANS_TIME } from "./pushHandler";

/**
 * 生成随机数
 * @param from 
 * @param to 
 * @param count 
 */
export function random(from: number, to: number, count: number): number[] {

    if (to <= from) {
        throw new Error("random 参数错误");
    }

    let res: number[] = [];

    while (res.length < count) {
        let r = Math.ceil((Math.random() * (to - from)) + from);

        if (res.findIndex(v => v === r) >= 0) {
            continue;
        } else {
            res.push(r);
        }
    }

    return res;
}

/**
 * 随机抽题
 */
export function randomQue(): Que[] {
    let tagIds = random(0, tags.length - 1, 5);

    //tagIds[0] = tags.length - 1;
    //tagIds[2] = tags.length - 1;

    let res = [];

    for (let i = 0; i < tagIds.length; i++) {
        let tag = tags[tagIds[i]];
        console.log("tag", tagIds, tags.length)
        let queId = random(0, tag.ques.length - 1, 1)[0];
        //queId = 0;
        res.push(tag.ques[queId]);
    }

    return res;
}

/**
 * 计算分数
 * @param full 满分
 * @param deltaTime 答题耗时 
 */
export function calcScore(full: number, deltaTime: number): number {
    let res = 0;
    const timeout = ANS_TIME;
    const bufferTime = 3500;

    if (deltaTime <= bufferTime) {
        return full;
    }

    res = Math.ceil(Math.max(full - (deltaTime - bufferTime) / (timeout - bufferTime) * full, 0));

    return res;
}
