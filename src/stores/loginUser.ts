import { defineStore } from "pinia";

// 渡すもののタイプはUserのid(number)ですよ
export type User = {
  id: number;
};

export const userCurrentUserStore = defineStore("currentUser", {
  //  defindStoreの戻り値をcurrentUserに入れている。
  // state(状態)
  state: () => ({
    // Storeをuserがあるかどうかで識別（？）
    user: null as User | null,
    //初期値…？  ↑どういうこと　｜　は”または”って意味？ ||じゃなく？
  }),
  getters: {
    isLoggedIn(): boolean {
      return !!this.user;
      // userが記録されている
      // trueかfalseか（なにが？）
      // 記録されてないuserが返ってくる（なんで？）
    },
  },
  actions: {
    login(user: User) {
      this.user = user;
      // ログインしたuser(idで判定)がこの場でのuserです
    },
    logout() {
      this.user = null;
      // ログアウトしたらこのuserはnullになるよ
    },
  },
});
