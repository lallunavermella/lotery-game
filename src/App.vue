<script setup>
import LoteryNumbers from './components/LoteryNumbers.vue'
import TitleApp from './components/TitleApp.vue'
import VisorNumbers from './components/VisorNumbers.vue'
import { numbersStore, loteryNumbersStore } from './main'

const resetNumbers = () => {
  loteryNumbersStore.resetLoteryNumbers()
  numbersStore.resetNumbers()
}
</script>

<template>
  <header>
    <TitleApp title="Lotery Game" />
  </header>
  <main>
    <VisorNumbers  />
    <LoteryNumbers  />
    <button @click="resetNumbers">RESET GAME</button>
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
