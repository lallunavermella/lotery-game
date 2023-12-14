import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNumbersStore = defineStore('number', () => {
  const numbers = ref([])

  function addNumbers(value) {
    if (numbers.value.length < 5) numbers.value.push(value)
  }
  function resetNumbers() {
    numbers.value = []
  }
  return { numbers, addNumbers, resetNumbers }
})
