import { Confirmation, DialogflowConversation, GoogleCloudDialogflowV2WebhookRequest } from "actions-on-google";
import { WebhookClient } from "dialogflow-fulfillment";
import { IIntentHandler } from "../interfaces/intent-handler";
import { Intents } from "../models/enums";
import { IPersist } from "../models/persist";
import { QuizService } from "../services/quiz-service";
import { BaseIntentHandler } from "./base-intent-handler";

export class ExitIntentHandler extends BaseIntentHandler implements IIntentHandler {
    constructor() {
        super(Intents.WELCOME_YES_FOLLOWUP);
    }
    public handle(agent: WebhookClient) {
        const conv: DialogflowConversation = agent.conv(); // Get Actions on Google library conv instance
        const body: GoogleCloudDialogflowV2WebhookRequest = conv.body as GoogleCloudDialogflowV2WebhookRequest;
        conv.close("Goodbye, Have a nice day");
    }
}
