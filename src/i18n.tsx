import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_en from "./translations/en/global.json";

const resources = {
  en: {
    global: global_en,
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
