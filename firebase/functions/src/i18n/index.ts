import * as i18next from "i18next";
import {enAU} from "./en-AU/index";
console.log("resource", JSON.stringify(enAU, null, 3));
// tslint:disable-next-line:variable-name
let _i18n;
i18next.init({
  debug: false,
  lng: "en-AU",
  resources: {
    "en-AU": enAU,
  },
}, (err, i) => {
  if (err) {
    console.log(err);
  }
  _i18n = i;

  // console.log("test", i("messages.welcomeIntent.welcome", {returnObjects:
  // true}));
});

export const i18n = _i18n;

export function getTemplate < T = undefined >(templateKey: string, customProps?: any): T {
  const obj = _i18n(templateKey, {
    returnObjects: true,
    ...customProps,
  });
  return obj;
}
