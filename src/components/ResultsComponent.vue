<script setup>
import { ref } from 'vue'
import { resultsGameStore } from '../main'

let visible = ref(false)
const showResults = () => {
  resultsGameStore.showResult()
  visible.value = true
}
</script>
<template>
  <div>
    <button @click="showResults">RESULTS</button>
    <div v-if="visible">
      <div>You have {{ resultsGameStore.result }} match</div>
      <div v-if="resultsGameStore.result === 5">You won</div>
      <div v-if="resultsGameStore.result !== 5">You lost</div>
    </div>
  </div>
</template>
