import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LNG_EN from "@/locale/en/trans.json";
import LNG_VI from "@/locale/vi/trans.json";

const resources = {
  en: {
    trans: LNG_EN,
  },
  vi: {
    trans: LNG_VI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage["language"],
  fallbackLng: "en",
  ns: ["trans"],
  interpolation: {
    escapeValue: false,
  },
});
