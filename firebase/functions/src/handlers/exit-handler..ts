import {Confirmation, DialogflowConversation, GoogleCloudDialogflowV2WebhookRequest} from "actions-on-google";
import {WebhookClient} from "dialogflow-fulfillment";
import {TEMPLATES} from "../i18n/template";
import {IIntentHandler} from "../interfaces/intent-handler";
import {Intents} from "../models/enums";
import {IPersist} from "../models/persist";
import {QuizService} from "../services/quiz-service";
import {BaseIntentHandler} from "./base-intent-handler";

export class ExitIntentHandler extends BaseIntentHandler implements IIntentHandler {
    constructor() {
        super(Intents.EXIT);
    }
    public handle(agent: WebhookClient) {
        this.preHandle(agent);
        this.resposneWithMessage(TEMPLATES.EXIT);
        this.endHandle();
    }
}
