<script setup>
import { resultsGameStore } from '../main';
const results=()=>resultsGameStore.showResult()
</script>
<template>
  <button @click="results">RESULTS</button>
  <div>You have {{ resultsGameStore.result }} match</div>
</template>