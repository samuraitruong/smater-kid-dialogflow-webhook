export const TEMPLATES = {
  CONFIRMED_START: "welcomeIntent.welcomeConfirmYes",
  CORRECT_ANWSER: "numberIntent.correct",
  EXIT: "exitIntent.defaultExit",
  FAILED_ANWSER: "numberIntent.failed",
  FIRST_WELCOME: "welcomeIntent.welcome",
  NOT_STARTED: "numberIntent.notStarted",
  REPEAT: "repeatIntent.default",
  RETURN_WELCOME: "welcomeIntent.welcomeBack",
  WRONG_ANWSER: "numberIntent.incorrect",
};
export interface IResourceItem {
  speech: string;
  display: string;
}
