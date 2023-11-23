import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoteryNumbersStore = defineStore('loteryNumber', () => {
  const loteryNumbers = ref([])

  function createNumbers() {
    while (loteryNumbers.value.length < 5) {
      const newNumber = Math.floor(Math.random() * 99) + 1
      if (!loteryNumbers.value.includes(newNumber)) {
        loteryNumbers.value.push(newNumber)
      }
    }
  }

  return { loteryNumbers, createNumbers }
})
