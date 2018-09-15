import { Confirmation, DialogflowConversation, GoogleCloudDialogflowV2WebhookRequest } from "actions-on-google";
import { WebhookClient } from "dialogflow-fulfillment";
import { IIntentHandler } from "../interfaces/intent-handler";

export class NumberIntentHandler implements IIntentHandler {
    constructor(public intentName: string) {

    }
    public handle(agent: WebhookClient) {
        // agent.add("Hello, Welcome to Smart Kid quiz, Are you ready to start?");

        const conv: DialogflowConversation = agent.conv(); // Get Actions on Google library conv instance
        const body: GoogleCloudDialogflowV2WebhookRequest = conv.body as GoogleCloudDialogflowV2WebhookRequest;

        conv.ask("You just say the number: ", body.queryResult.parameters.number); // Use Actions on Google library
        agent.add(conv); // Add Actions on Google library responses to your agent's response

    }
}
