import { makeAutoObservable } from "mobx";
import type { themeType } from "./type";

class spuStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentTheme: themeType = "light";

  setcurrentTheme(type: themeType) {
    this.currentTheme = type;
    window.localStorage.setItem("theme", type);
    if (type === "dark") {
      document.body.setAttribute("arco-theme", "dark");
    } else {
      document.body.removeAttribute("arco-theme");
    }
  }

  fetchTheme() {
    this.setcurrentTheme((window.localStorage.getItem("theme") || "light") as themeType);
  }
}
export default spuStore;
