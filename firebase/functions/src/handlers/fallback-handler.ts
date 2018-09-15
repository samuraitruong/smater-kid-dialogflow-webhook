import { WebhookClient } from "dialogflow-fulfillment";
import { IIntentHandler } from "../interfaces/intent-handler";
export class FailbackIntentHandler implements IIntentHandler {
    constructor(public intentName: string) {

    }
    public handle(agent: WebhookClient) {
        agent.add("Hello, This is falback intent. bad luck!");
    }
}
