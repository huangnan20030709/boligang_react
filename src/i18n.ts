import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import zhCNTrans from "@/locale/zh-CN";
import enUSTrans from "@/locale/en-US";
console.log(window.localStorage.getItem("locale") || "zh-CN");

i18n.use(initReactI18next).init({
  resources: {
    // 后面切换需要使用此处定义的key
    "zh-CN": {
      translation: zhCNTrans,
    },
    "en-US": {
      translation: enUSTrans,
    },
  },
  fallbackLng: window.localStorage.getItem("locale") || "zh-CN",
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
