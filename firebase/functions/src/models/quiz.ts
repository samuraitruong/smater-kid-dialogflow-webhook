import { Operators } from "./enums";
export interface IQuizResult {
    left: number;
    right: number;
    operator: Operators;
    result: number;
    level: number;
}
