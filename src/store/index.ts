import React from "react";
import { observer } from "mobx-react-lite";

import userStore from "./user";
import spuStore from "./spu";
import themeStore from "./theme";

class RootStore {
  //反正ts报错，先声明this身上的属性
  userStore;
  spuStore;
  themeStore;

  constructor() {
    this.userStore = new userStore();
    this.spuStore = new spuStore();
    this.themeStore = new themeStore();
  }
}

const rootStore = new RootStore();

const context = React.createContext(rootStore);
const useStore = () => React.useContext(context);

export { useStore, observer };
