import i18n from "@/i18n";

export default function useLocale() {
  //
  const switchLanguage = () => {
    let str = i18n.language === "en-US" ? "zh-CN" : "en-US";

    i18n.changeLanguage(str);
    window.localStorage.setItem("locale", str);
  };
  //
  return {
    currentLanguage: i18n.language,
    switchLanguage,
  };
}
