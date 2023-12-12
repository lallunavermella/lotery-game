import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVisibleResultStore = defineStore('showResult', () => {
  const isVisble = ref(false)

  function toggleIsVisble() {
    isVisble.value = false
  }
  return { isVisble, toggleIsVisble }
})
