import i18next from "i18next";
import { enAU } from "./en-AU/index";
// tslint:disable-next-line:variable-name
let _i18n;
i18next.init({
    debug: true,
    lng: "en-AU",
    resources: {
        "en-AU": enAU,
    },
}, (i) => {
    _i18n = i;
},
);

export const i18n = _i18n;
