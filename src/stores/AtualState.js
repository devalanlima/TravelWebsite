import { defineStore } from "pinia";

export const useAtualState = defineStore(
  'atualState', {
  state: () => ({
    selectedState: 'RioDeJaneiro',
    selectedBackground: '/backgroundStates/Amazonas.jpg',
  }),
  getters: {
  },
  actions: {
  },
})