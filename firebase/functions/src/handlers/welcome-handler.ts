import { Confirmation, DialogflowConversation } from "actions-on-google";
import { WebhookClient } from "dialogflow-fulfillment";
import { IIntentHandler } from "../interfaces/intent-handler";

export class WelcomeHandler implements IIntentHandler {
    constructor(public intentName: string) {

    }
    public handle(agent: WebhookClient) {
        // agent.add("Hello, Welcome to Smart Kid quiz, Are you ready to start?");

        const conv: DialogflowConversation = agent.conv(); // Get Actions on Google library conv instance
        conv.ask("Hello, Welcome to Smart Kid quiz, Are you ready to start?"); // Use Actions on Google library
        conv.ask(new Confirmation("Hello, Welcome to Smart Kid quiz, Are you ready to start?111"));
        agent.add(conv); // Add Actions on Google library responses to your agent's response

    }
}
