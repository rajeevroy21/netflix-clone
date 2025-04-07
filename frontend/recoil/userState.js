import { atom } from "recoil";
export const userState = atom({
  key: "userState",
  default: null,
});
export const loadingState = atom({
  key: "loadingState",
  default: false, 
});
