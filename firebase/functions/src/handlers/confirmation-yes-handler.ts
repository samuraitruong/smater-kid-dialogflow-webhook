import {Confirmation, DialogflowConversation, GoogleCloudDialogflowV2WebhookRequest} from "actions-on-google";
import {WebhookClient} from "dialogflow-fulfillment";
import {IIntentHandler} from "../interfaces/intent-handler";
import {Intents} from "../models/enums";
import {IPersist} from "../models/persist";
import {QuizService} from "../services/quiz-service";
import {BaseIntentHandler} from "./base-intent-handler";

export class ConfirmationYesHandler extends BaseIntentHandler implements IIntentHandler {
    constructor() {
        super(Intents.WELCOME_YES_FOLLOWUP);
    }
    public handle(agent: WebhookClient) {
        agent.add("Hello, This is falback intent. bad luck!");

        // console.log("####################################3"); const conv:
        // DialogflowConversation = agent.conv(); // Get Actions on Google library conv
        // instance const body: GoogleCloudDialogflowV2WebhookRequest = conv.body as
        // GoogleCloudDialogflowV2WebhookRequest; conv.ask("Okay, Lets beat the best
        // level this time!"); const persitData: IPersist = conv.data as IPersist; const
        // service = new QuizService(1); const quiz = service.generateQuiz();
        // conv.ask(`Please tell me what is ${quiz.left} ${quiz.operator} ${quiz.right} =
        // `); conv.data = {     ...persitData,     quiz,     retry: 0, };
        // agent.add(conv);

    }
}
