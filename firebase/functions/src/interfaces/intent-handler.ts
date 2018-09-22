import {WebhookClient} from "dialogflow-fulfillment";
import {Intents} from "../models/enums";
export interface IIntentHandler {
    intentNames: Intents[];
    handle(agent: WebhookClient);
}
