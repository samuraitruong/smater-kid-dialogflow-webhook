import {DialogflowConversation, GoogleCloudDialogflowV2WebhookRequest, Intent, SimpleResponse} from "actions-on-google";
import {WebhookClient} from "dialogflow-fulfillment";
import {getTemplate} from "../i18n/index";
import {IResourceItem} from "../i18n/template";
import {IIntentHandler} from "../interfaces/intent-handler";
import {Intents} from "../models/enums";
import {IPersist} from "../models/persist";
export class BaseIntentHandler implements IIntentHandler {
    public conv: DialogflowConversation;
    public agent: WebhookClient;
    public persistent: IPersist;
    public body: GoogleCloudDialogflowV2WebhookRequest;
    public intentNames: Intents[];
    constructor(...intentName: Intents[]) {
        this.intentNames = intentName;
    }
    public handle(agent: WebhookClient) {
        throw new Error("handle function not be implemented: " + this.intentNames);
    }
    public resposneWithMessage(key: string, props?: any) {
        const message: IResourceItem = getTemplate(key, props);
        message.speech = `<speak> ${message.speech}</speak>`;
        const simpleResponse = new SimpleResponse(message);
        this
            .conv
            .ask(simpleResponse);
        return message;
    }
    public preHandle(currentAgent: WebhookClient) {
        this.conv = currentAgent.conv();
        this.agent = currentAgent;
        this.persistent = this.conv.data as IPersist;
        this.body = this.conv.body as GoogleCloudDialogflowV2WebhookRequest;
    }
    public endHandle() {
        this
            .agent
            .add(this.conv);
    }
    public getSlot < T >(): T {return this.body.queryResult.parameters as T; }
}
