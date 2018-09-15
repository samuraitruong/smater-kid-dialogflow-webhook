import { Card, Payload, Suggestion, WebhookClient } from "dialogflow-fulfillment";
import * as functions from "firebase-functions";
import { handlers } from "./handlers/index";

export const dialogflowFirebaseFulfillment: (request, response) => void =
    functions.https.onRequest((request, response) => {
        const agent: WebhookClient = new WebhookClient({ request, response });
        console.log("Dialogflow Request headers: " + JSON.stringify(request.headers));
        console.log("Dialogflow Request body: " + JSON.stringify(request.body));
        console.log(handlers);
        const intentMap = new Map();
        // intentMap.set('Default Welcome Intent', welcome);
        handlers.forEach(({ intentName, handle }) => intentMap.set(intentName, handle));
        console.log("map", intentMap);
        agent.handleRequest(intentMap);
    });
