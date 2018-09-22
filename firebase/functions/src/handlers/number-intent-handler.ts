import {Confirmation, DialogflowConversation, GoogleCloudDialogflowV2WebhookRequest} from "actions-on-google";
import {WebhookClient} from "dialogflow-fulfillment";
import {TEMPLATES} from "../i18n/template";
import {IIntentHandler} from "../interfaces/intent-handler";
import {Intents} from "../models/enums";
import {IPersist} from "../models/persist";
import {IQuizResult} from "../models/quiz";
import {QuizService} from "../services/quiz-service";
import {BaseIntentHandler} from "./base-intent-handler";

export class NumberIntentHandler extends BaseIntentHandler implements IIntentHandler {
    constructor() {
        super(Intents.NUMBER);
    }
    public handle(agent: WebhookClient) {
        this.preHandle(agent);
        const {quiz, retry} = this.persistent;
        const providedNumber = this.body.queryResult.parameters.number;
        if (!quiz || !quiz.result || !providedNumber) {
            this.resposneWithMessage(TEMPLATES.NOT_STARTED);
            return this.endHandle();
        }
        if (quiz.result.toString() !== providedNumber.toString()) {

            if (retry >= 3) {
                this.conv.data = {
                    quiz,
                };
                this.resposneWithMessage(TEMPLATES.FAILED_ANWSER, {
                    ...quiz,
                    providedNumber,
                });
            } else {
                this.conv.data = {
                    quiz,
                    retry: retry + 1,
                };
                this.resposneWithMessage(TEMPLATES.WRONG_ANWSER, {
                    ...quiz,
                    providedNumber,
                });
            }
        } else {
            const service = new QuizService(quiz.level + 1);
            const nextQuizi = service.generateQuiz();
            const storage = this.conv.user.storage as any;
            const bestLevel = storage.bestLevel || 0;

            this.conv.data = {
                quiz: nextQuizi,
                retry: 0,
            };
            this.conv.user.storage = {
                bestLevel: Math.max(quiz.level, bestLevel),
            };
            this.resposneWithMessage(TEMPLATES.CORRECT_ANWSER, nextQuizi);
        }
        this.endHandle();
    }
}
