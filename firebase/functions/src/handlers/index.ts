import {ConfirmationYesHandler} from "./confirmation-yes-handler";
import {ExitIntentHandler} from "./exit-handler.";
import {FallbackIntentHandler} from "./fallback-handler";
import {NumberIntentHandler} from "./number-intent-handler";
import {RepeatIntentHandler} from "./repeat-intent-handler";
import {WelcomeHandler} from "./welcome-handler";

export const handlers = [
    new WelcomeHandler(), new FallbackIntentHandler(), new NumberIntentHandler(),
    new ConfirmationYesHandler(),
    new RepeatIntentHandler(),
    new ExitIntentHandler(),
];
