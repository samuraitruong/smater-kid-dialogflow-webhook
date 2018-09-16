import * as i18next from "i18next";
import { enAU } from "./en-AU/index";
// tslint:disable-next-line:variable-name
let _i18n;
i18next.init({
    debug: true,
    lng: "en-AU",
    resources: {
        "en-AU": enAU,
    },
}, (err, i) => {
  if (err) {
    console.log(err);
  }
  _i18n = i;
},
);

export const i18n = _i18n;

export function getTemplate<T = undefined>(templateKey: string, customProps?: any): T {
  const obj = _i18n(templateKey, {returnObject: true, ...customProps});
  return obj;
}
