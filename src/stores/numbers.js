import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNumbersStore = defineStore('number', () => {
  const numbers = ref([])

  function addNumbers(value) {
    numbers.value.push(value)
  }

  return { numbers, addNumbers }
})