<script setup>
import { ref, defineProps, computed } from 'vue'
import { numbersStore } from '../main'

const { numbers } = defineProps(['numbers'])

const text = ref('')
const errorMessage = ref('')

const addNumber = () => {
  const newNumber = parseInt(text.value)
  if (!numbers.includes(newNumber)) {
    numbersStore.addNumbers(newNumber)
    errorMessage.value = ''
    text.value = ''
  } else {
    errorMessage.value = 'No puedes repetir numeros!'
    text.value = ''
  }
}

const disabledButton = () => {
  return numbers && Array.isArray(numbers) && numbers.length > 4
}

const sortedNumbers = computed(() => {
  return [...numbers].sort((a, b) => a - b)
})
</script>
<template>
  <div class="formContainer">
    <form @submit.prevent="addNumber">
      <label>
        <p>Numbers</p>
        <input
          placeholder="Insert your numbers"
          type="number"
          max="100"
          min="0"
          class="inputField"
          v-model="text"
        />
        <button type="submit" class="submitButton" :disabled="disabledButton()">Add</button>
      </label>
    </form>
  </div>
  <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  <div class="numberContainer">
    <div v-for="number in sortedNumbers" :key="number" class="numberItem">
      <div>{{ number }}</div>
    </div>
  </div>
</template>
<style scoped>
.formContainer {
  display: flex;
  margin: 10px;
}

.inputField {
  width: 300px;
  padding-right: 6px;
  margin-right: 6px;
}

.submitButton {
  width: 70px;
  height: 25px;
  border-radius: 15px;
}

:hover.submitButton {
  background-color: rgb(234, 222, 244);
}

.numberContainer {
  margin: 16px;
  display: flex;
  flex-direction: row;
}

.numberItem {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
}
</style>
