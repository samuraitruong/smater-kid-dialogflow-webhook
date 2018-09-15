import { Confirmation, DialogflowConversation, GoogleCloudDialogflowV2WebhookRequest } from "actions-on-google";
import { WebhookClient } from "dialogflow-fulfillment";
import { IIntentHandler } from "../interfaces/intent-handler";
import { Intents } from "../models/enums";

export class BaseIntentHandler implements IIntentHandler {
    constructor(public intentName: Intents) {

    }
    public handle(agent: WebhookClient) {
        throw new Error("handle function not be implemented: " + this.intentName);
    }
}
