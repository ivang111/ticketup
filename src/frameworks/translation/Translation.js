import { useTranslation, Trans } from "react-i18next";

const { i18n } = useTranslation;

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

export { changeLanguage, i18n, useTranslation, Trans };
