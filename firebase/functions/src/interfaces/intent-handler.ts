import { WebhookClient } from "dialogflow-fulfillment";
export interface IIntentHandler {
    intentName: string;
    handle(agent: WebhookClient);
}
