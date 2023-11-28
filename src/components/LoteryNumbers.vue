<script setup>
import { computed } from 'vue'
import { loteryNumbersStore } from '../main'

//const { loteryNumbers } = defineProps(['loteryNumbers'])

const sortedLoteryNumbers = computed(() => {
  return [...loteryNumbersStore.loteryNumbers].sort((a, b) => a - b)
})
</script>
<template>
  <button v-if="sortedLoteryNumbers.length === 0" @click="loteryNumbersStore.createNumbers()">
    PLAY
  </button>
  <div class="loteryNumberContainer">
    <div v-for="loterynumber in sortedLoteryNumbers" :key="loterynumber" class="loteryItem">
      <div>{{ loterynumber }}</div>
    </div>
  </div>
</template>
<style scoped>
.loteryNumberContainer {
  margin: 16px;
  display: flex;
  flex-direction: row;
}
.loteryItem {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  margin: 12px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 50px;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
}
</style>
