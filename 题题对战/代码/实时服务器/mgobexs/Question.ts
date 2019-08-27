import ques from "./ques";

const tags = ques.data as TAG[];

export interface Que {
    tag: string,
    que: string,
    opt: string[],
    ans: number,
}

export interface TAG {
    tag: string,
    ques: Que[],
}

export default tags;