<script setup>
const onSubmit = () => {
  console.log('click')
}
const userNumbers = [1, 2, 3, 4, 5]

const disabledButton = () => {
  return userNumbers.length > 4
}
</script>
<template>
  <div class="formContainer">
    <form @submit.prevent="onSubmit">
      <label>
        <p>Numbers</p>
        <input
          placeholder="Insert your numbers"
          type="number"
          max="100"
          min="0"
          class="inputField"
        />
        <button type="submit" class="submitButton" :disabled="disabledButton()">Add</button>
      </label>
    </form>
  </div>
  <div class="numberContainer">
    <div v-for="number in userNumbers" :key="number" class="numberItem">
      <div>{{ number }}</div>
    </div>
  </div>
</template>
<style>
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
