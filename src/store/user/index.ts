import { makeAutoObservable } from "mobx";
import type { UserInfo } from "./type";
class userStore {
  constructor() {
    makeAutoObservable(this);
  }

  userInfo: UserInfo = {};
  setUserInfo(infoObj: UserInfo) {
    this.userInfo = infoObj;
  }
}
export default userStore;
