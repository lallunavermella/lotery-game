<script setup>
import LoteryNumbers from './components/LoteryNumbers.vue'
import TitleApp from './components/TitleApp.vue'
import VisorNumbers from './components/VisorNumbers.vue'
import { numbersStore, loteryNumbersStore } from './main'

const numbers = numbersStore.numbers
const loteryNumbers = loteryNumbersStore.loteryNumbers
</script>

<template>
  <header>
    <TitleApp title="Lotery Game" />
  </header>
  <main>
    <h2>Aqui anira un component de la loteria</h2>
    <VisorNumbers :numbers="numbers" />
    <LoteryNumbers :loteryNumbers="loteryNumbers" />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
