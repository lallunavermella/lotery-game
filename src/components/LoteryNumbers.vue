<script setup>
import { computed, ref } from 'vue'
import { loteryNumbersStore, numbersStore } from '../main'

const sortedLoteryNumbers = computed(() => {
  return [...loteryNumbersStore.loteryNumbers].sort((a, b) => a - b)
})
let errorMessage = ref(false)
const createNumbers = () => {
  if (numbersStore.numbers.length === 5) {
    loteryNumbersStore.createNumbers()
  } else {
    errorMessage.value = true
  }
}
</script>
<template>
  <div class="container">
    <button v-if="sortedLoteryNumbers.length === 0" @click="createNumbers" class="submitButton">
      PLAY
    </button>
    <div v-if="errorMessage" style="color: red">Agrega tus numeros</div>
    <div class="loteryNumberContainer">
      <div v-for="loterynumber in sortedLoteryNumbers" :key="loterynumber" class="loteryItem">
        <div>{{ loterynumber }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.submitButton {
  width: 80px;
  height: 30px;
  border-radius: 15px;
  border-color: grey;
  background-color: rgb(125, 188, 125);
  color: rgb(1, 83, 1);
}
.loteryNumberContainer {
  margin: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
