import { Confirmation, DialogflowConversation, GoogleCloudDialogflowV2WebhookRequest } from "actions-on-google";
import { WebhookClient } from "dialogflow-fulfillment";
import { IIntentHandler } from "../interfaces/intent-handler";
import { Intents } from "../models/enums";
import { IPersist } from "../models/persist";
import { BaseIntentHandler } from "./base-intent-handler";

export class RepeatIntentHandler extends BaseIntentHandler implements IIntentHandler {
    constructor() {
        super(Intents.REPEAT);
    }
    public handle(agent: WebhookClient) {
        const conv: DialogflowConversation = agent.conv();
        const body: GoogleCloudDialogflowV2WebhookRequest = conv.body as GoogleCloudDialogflowV2WebhookRequest;
        const { quiz } = conv.data as IPersist;
        conv.ask(`What is ${quiz.left} ${quiz.operator} ${quiz.right} = `);
        agent.add(conv);

    }
}
