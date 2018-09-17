import { Confirmation, DialogflowConversation, GoogleCloudDialogflowV2WebhookRequest, SimpleResponse } from "actions-on-google";
import { WebhookClient } from "dialogflow-fulfillment";
import { getTemplate } from "../i18n/index";
import { IIntentHandler } from "../interfaces/intent-handler";
import { Intents } from "../models/enums";

export class BaseIntentHandler implements IIntentHandler {
    public conv: DialogflowConversation;
    public agent: WebhookClient;
    constructor(public intentName: Intents) {

    }
    public handle(agent: WebhookClient) {
        throw new Error("handle function not be implemented: " + this.intentName);
    }
    public resposneWithMessage(key: string, props?: any) {
        const message = getTemplate(key, props);
        console.log(key, message);
        const simpleResponse = new SimpleResponse(message);
        this.conv.ask(simpleResponse);
        return message;
    }
    public preHandle(currentAgent: WebhookClient) {
        console.log("this", this)
        this.conv = currentAgent.conv();
        this.agent = currentAgent;
    }
    public endHandle() {
        this.agent.add(this.conv);
    }
}
