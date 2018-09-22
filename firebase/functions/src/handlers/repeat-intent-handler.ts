import { WebhookClient } from "dialogflow-fulfillment";
import { TEMPLATES } from "../i18n/template";
import { IIntentHandler } from "../interfaces/intent-handler";
import { Intents } from "../models/enums";
import { BaseIntentHandler } from "./base-intent-handler";

export class RepeatIntentHandler extends BaseIntentHandler implements IIntentHandler {
    constructor() {
        super(Intents.REPEAT);
    }
    public handle(agent: WebhookClient) {
        this.preHandle(agent);
        const { quiz } = this.persistent;
        this.resposneWithMessage(TEMPLATES.REPEAT, quiz);
        this.endHandle();

    }
}
