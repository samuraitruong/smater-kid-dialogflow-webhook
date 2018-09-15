import { FailbackIntentHandler } from "./fallback-handler";
import { NumberIntentHandler } from "./number-intent-handler";
import { WelcomeHandler } from "./welcome-handler";

export const handlers = [
    new WelcomeHandler("Default Welcome Intent"),
    new FailbackIntentHandler("Default Fallback Intent"),
    new NumberIntentHandler("Number Intent"),
];
