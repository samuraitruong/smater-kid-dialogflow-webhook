import {Confirmation, DialogflowConversation} from "actions-on-google";
import {WebhookClient} from "dialogflow-fulfillment";
import {TEMPLATES} from "../i18n/template";
import {IIntentHandler} from "../interfaces/intent-handler";
import {Intents} from "../models/enums";
import {IPersist} from "../models/persist";
import {BaseIntentHandler} from "./base-intent-handler";
export class WelcomeHandler extends BaseIntentHandler implements IIntentHandler {
    constructor() {
        super(Intents.WELCOME);
    }
    public handle(agent: WebhookClient) {
        super.preHandle(agent);
        const storage = this.conv.user.storage as any;
        const bestLevel = storage.bestLevel || 0;
        super.resposneWithMessage(bestLevel > 0
            ? TEMPLATES.RETURN_WELCOME
            : TEMPLATES.FIRST_WELCOME, {bestLevel});
        this.endHandle();
    }
}
