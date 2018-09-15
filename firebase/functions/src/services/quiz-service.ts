import { Operators } from "../models/enums";
import { IQuizResult } from "../models/quiz";

export class QuizService {
    private limit: number;
    constructor(public level: number) {
        this.limit = 3 + level;
    }
    public random(): number {
        const crypto = require("crypto");
        const max = Math.pow(2, 32);

        const buf = crypto
            .randomBytes(4)
            .toString("hex");

        return (Math.ceil((parseInt(buf, 16) / max) * 100)) % this.limit;
    }
    public generateQuiz(): IQuizResult {
        const newQuiz = {
            left: this.random(),
            level: this.level,
            operator: Operators.ADD,
            result: 4,
            right: this.random(),
        };
        newQuiz.result = newQuiz.left + newQuiz.right;
        return newQuiz;
    }
}
