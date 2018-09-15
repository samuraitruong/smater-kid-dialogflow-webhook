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
        const conv: DialogflowConversation = agent.conv(); // Get Actions on Google library conv instance
        const persistedData: IPersist = conv.data as IPersist;
        if (persistedData && persistedData.bestLevel) {
            conv.ask("Hi Welcome back!, You best result is level :" + persistedData.bestLevel);
            conv.ask("Do you think you getting smarter?");
        } else {
            conv.ask("Hello, Welcome to Smart Kid quiz, Are you ready to test how smart you are?");
        }
        agent.add(conv);

    }
}
