import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//spanish
import login_es from "./frameworks/locales/es/login.json";
import sing_up_es from "./frameworks/locales/es/sing-up.json";

//english
import login_en from "./frameworks/locales/en/login.json";
import sing_up_en from "./frameworks/locales/en/sing-up.json";

i18n

  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        login: login_es,
        singUP: sing_up_es,
      },
      en: {
        login: login_en,
        singUP: sing_up_en,
      },
    },
  });

export default i18n;
