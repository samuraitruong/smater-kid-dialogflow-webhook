import { Card, Payload, Suggestion, WebhookClient } from "dialogflow-fulfillment";
import * as functions from "firebase-functions";
import { handlers } from "./handlers/index";
import "./i18n";
export const smarterKidFulfilmentWebHook: (request, response) => void =
    functions.https.onRequest((request, response) => {
        const agent: WebhookClient = new WebhookClient({ request, response });
        // console.log("Dialogflow Request headers: " + JSON.stringify(request.headers));
        // console.log("Dialogflow Request body: " + JSON.stringify(request.body));
        const intentMap = new Map();
        // intentMap.set('Default Welcome Intent', welcome);
        handlers.forEach((h) => intentMap.set(h.intentName, h.handle.bind(h)));
        agent.handleRequest(intentMap);
    });
