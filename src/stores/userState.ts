import { createPinia, defineStore } from "pinia";

export type User = {
  id: number;
  name: string;
  mail: string;
  password: string;
  position_id: number;
  facility_id: number;
};

export const userCurrentUserStore = defineStore("currentUser", {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isLoggedIn(): boolean {
      return !!this.user;
    },
  },
  actions: {
    login(user: User) {
      this.user = user;
    },
    logout() {
      this.user = null;
    },
  },

  persist: true,
});

export const pinia = createPinia();

export default pinia;
