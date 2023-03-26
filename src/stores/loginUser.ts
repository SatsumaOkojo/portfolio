import { defineStore } from "pinia";
// storeを定義する為↑

export const storeLoginUser = defineStore("loginUserUser", {
  // defineStore関数の戻り値をstoreLoginUserに入れてる
  //   storeを識別するためのIDをloginUserとしている
  state: () => ({
    user: 1,
    // state(状態)の共有をしたいuser変数を定義して初期値を入れる。
  }),
});
