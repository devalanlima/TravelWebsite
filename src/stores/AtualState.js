import { defineStore } from "pinia";

export const useAtualState = defineStore(
  'atualState', {
  state: () => ({
    selectedState: 'RioDeJaneiro'
  }),
  getters: {
  },
  actions: {
  },
})