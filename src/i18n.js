import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//spanish
import top_bar_es from "./frameworks/locales/es/top-bar.json";
import login_es from "./frameworks/locales/es/login.json";
import sing_up_es from "./frameworks/locales/es/sing-up.json";
import forgot_password_es from "./frameworks/locales/es/forgot-password.json";
import forgot_password_instructios_es from "./frameworks/locales/es/forgot-password-instructions.json";

//english
import top_bar_en from "./frameworks/locales/en/top-bar.json";
import login_en from "./frameworks/locales/en/login.json";
import sing_up_en from "./frameworks/locales/en/sing-up.json";
import forgot_password_en from "./frameworks/locales/en/forgot-password.json";
import forgot_password_instructios_en from "./frameworks/locales/en/forgot-password-instructions.json";

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
        forgotPassword: forgot_password_es,
        forgotPasswordInstructions: forgot_password_instructios_es,
        topBar: top_bar_es,
      },
      en: {
        login: login_en,
        singUP: sing_up_en,
        forgotPassword: forgot_password_en,
        forgotPasswordInstructions: forgot_password_instructios_en,
        topBar: top_bar_en,
      },
    },
  });

export default i18n;
