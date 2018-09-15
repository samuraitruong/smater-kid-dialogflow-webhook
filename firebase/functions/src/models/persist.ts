import { IQuizResult } from "./quiz";
export interface IPersist {
    quiz: IQuizResult;
    bestLevel: number;
    retry: number;
}
