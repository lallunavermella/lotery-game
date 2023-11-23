import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoteryNumbersStore = defineStore('loteryNumber', () => {
  const loteryNumbers = ref([])
  let intervalId = null

  function createNumbers() {
    intervalId = setInterval(() => {
      if (loteryNumbers.value.length < 5) {
        const newNumber = Math.floor(Math.random() * 99)
        if (!loteryNumbers.value.includes(newNumber)) {
          loteryNumbers.value.push(newNumber)
        }
      } else {
        clearInterval(intervalId)
      }
    }, 1000)
  }

  return { loteryNumbers, createNumbers }
})
