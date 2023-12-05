<script setup>
import { ref } from 'vue'
import { loteryNumbersStore, numbersStore, resultsGameStore } from '../main'

let visible = ref(false)

const showResults = () => {
  resultsGameStore.showResult()
  visible.value = true
}

const disabledButton = () => {
  return numbersStore.numbers.length < 5 || loteryNumbersStore.loteryNumbers.length < 5
}
</script>
<template>
  <div>
    <button @click="showResults" :disabled="disabledButton()" class="button">RESULTS</button>
    <div v-if="visible">
      <div>You have {{ resultsGameStore.result }} match</div>
      <div v-if="resultsGameStore.result === 5">You won</div>
      <div v-if="resultsGameStore.result !== 5">You lost</div>
    </div>
  </div>
</template>
<style scoped>
.button {
  width: 80px;
  height: 25px;
  border-radius: 15px;
}
:hover.button {
  background-color: rgb(234, 222, 244);
}
:disabled.button {
  visibility: hidden;
}
</style>
