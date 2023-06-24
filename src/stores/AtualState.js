import { defineStore } from "pinia";

export const useAtualState = defineStore(
  'atualState', {
  state: () => ({
    selectedState: 'Amazonas',
    selectedBackground: '/backgroundStates/Amazonas.jpg',
  }),
  getters: {
  },
  actions: {
  },
})