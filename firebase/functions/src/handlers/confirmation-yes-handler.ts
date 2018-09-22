import {WebhookClient} from "dialogflow-fulfillment";
import {TEMPLATES} from "../i18n/template";
import {IIntentHandler} from "../interfaces/intent-handler";
import {Intents} from "../models/enums";
import {QuizService} from "../services/quiz-service";
import {BaseIntentHandler} from "./base-intent-handler";

export class ConfirmationYesHandler extends BaseIntentHandler implements IIntentHandler {
    constructor() {
        super(Intents.WELCOME_YES_FOLLOWUP, Intents.HELP_YES_FOLLOWUP);
    }
    public handle(agent: WebhookClient) {
        this.preHandle(agent);

        const service = new QuizService(1);
        const quiz = service.generateQuiz();
        this.conv.data = {
            ...this.persistent,
            quiz,
            retry: 0,
        };
        this.resposneWithMessage(TEMPLATES.CONFIRMED_START, quiz);
        this.endHandle();

    }
}
