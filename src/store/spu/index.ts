import { makeAutoObservable } from "mobx";
import type { UserInfo } from "./type";

class spuStore {
  constructor() {
    makeAutoObservable(this);
  }

  goodsList: UserInfo = {};
  setGoodsList(list: UserInfo) {
    this.goodsList = list;
  }
}
export default spuStore;
