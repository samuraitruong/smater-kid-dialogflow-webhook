import { Confirmation, DialogflowConversation } from "actions-on-google";
import { WebhookClient } from "dialogflow-fulfillment";
import { IIntentHandler } from "../interfaces/intent-handler";
import { Intents } from "../models/enums";
import { IPersist } from "../models/persist";
import { BaseIntentHandler } from "./base-intent-handler";

export class WelcomeHandler extends BaseIntentHandler implements IIntentHandler {
    constructor() {
        super(Intents.WELCOME);
    }
    public handle(agent: WebhookClient) {
        const conv: DialogflowConversation = agent.conv();
        const storage = conv.user.storage as any;
        const bestLevel = storage.bestLevel || 0;
        if (bestLevel > 0) {
            conv.ask("Hi Welcome back!, You best result is level :" + bestLevel);
            conv.ask("Do you think you getting smarter?");
        } else {
            conv.ask("Hello, Welcome to Smart Kid quiz, Are you ready to test how smart you are?");
            conv.ask("Hello123123");
        }
        agent.add(conv);

    }
}
