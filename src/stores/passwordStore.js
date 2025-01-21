import { defineStore } from "pinia";

export const usePasswordStore = defineStore("passwordStore", {
  state: () => ({
    passwordVisible: false,
  }),
  actions: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
});
