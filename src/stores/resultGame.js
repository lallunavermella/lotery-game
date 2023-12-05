import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNumbersStore } from './userNumbers'
import { useLoteryNumbersStore } from './loteryNumbers'

export const useResultGameStore = defineStore('result', () => {
  const result = ref(0)
  const numbersStore = useNumbersStore()
  const loteryNumbersStore = useLoteryNumbersStore()

  const userNumbers = computed(() => numbersStore.numbers)
  const loteryNumbers = computed(() => loteryNumbersStore.loteryNumbers)

  function showResult() {
    let inclusions = 0
    const userNums = userNumbers.value
    const loteryNums = loteryNumbers.value

    for (const ln of loteryNums) {
      if (userNums.includes(ln)) {
        inclusions++
      }
    }

    result.value = inclusions
    return result.value
  }

  return { showResult, result }
})
