import { WebhookClient } from "dialogflow-fulfillment";
import { Intents } from "../models/enums";
import { BaseIntentHandler } from "./base-intent-handler";
export class FailbackIntentHandler extends BaseIntentHandler {
    constructor() {
        super(Intents.FALLBACK);
    }
    public handle(agent: WebhookClient) {
        agent.add("Hello, This is falback intent. bad luck!");
    }
}
