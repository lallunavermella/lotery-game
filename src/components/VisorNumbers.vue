<script setup>
import { ref, computed } from 'vue'
import { numbersStore } from '../main'

const text = ref('')
const errorMessage = ref('')

const addNumber = () => {
  if (text.value !== '') {
    const newNumber = parseInt(text.value)
    if (!numbersStore.numbers.includes(newNumber)) {
      numbersStore.addNumbers(newNumber)
      errorMessage.value = ''
      text.value = ''
    } else {
      errorMessage.value = 'No puedes repetir numeros!'
      text.value = ''
    }
  }
}

const disabledButton = () => {
  return (
    numbersStore.numbers && Array.isArray(numbersStore.numbers) && numbersStore.numbers.length > 4
  )
}
const reset = () => {
  numbersStore.resetNumbers()
  text.value = ''
}
const getColor = (number) => {
  const range = Math.floor((number - 1) / 10)
  const categories = [
    'minorTeen',
    'teens',
    'twenties',
    'thirties',
    'forties',
    'fifties',
    'sixties',
    'seventies',
    'eighties',
    'nineties'
  ]
  return categories[range]
}

const sortedNumbers = computed(() => {
  return [...numbersStore.numbers].sort((a, b) => a - b)
})
</script>
<template>
  <div class="bodyVisor">
    <div class="formContainer">
      <form @submit.prevent="addNumber">
        <label>
          <p>Numbers</p>
          <input
            placeholder="Insert your numbers"
            type="number"
            max="99"
            min="1"
            class="inputField"
            v-model="text"
          />
          <button
            v-if="!disabledButton()"
            type="submit"
            class="submitButton"
            :disabled="disabledButton()"
          >
            Add
          </button>
          <button type="button" @click="reset" class="submitButton">Reset</button>
        </label>
      </form>
    </div>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
    <div class="numberContainer">
      <div
        v-for="number in sortedNumbers"
        :key="number"
        class="numberItem"
        :class="`${getColor(number)}`"
      >
        <div>{{ number }}</div>
      </div>
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

.bodyVisor {
  display: flex;
  align-items: center;
  flex-direction: column;
}

:hover.submitButton {
  background-color: rgb(234, 222, 244);
}

.submitButton {
  width: 70px;
  height: 25px;
  border-radius: 15px;
}

/* :disabled.submitButton {
  visibility: hidden;
} */
.numberContainer {
  margin: 16px;
  display: flex;
  flex-direction: row;
}

.numberItem {
  animation: loader 1.25s;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
}

@keyframes loader {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
</style>
