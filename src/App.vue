<script setup>
import LoteryNumbers from './components/LoteryNumbers.vue'
import TitleApp from './components/TitleApp.vue'
import VisorNumbers from './components/VisorNumbers.vue'
import ResultsComponent from './components/ResultsComponent.vue'
import { numbersStore, loteryNumbersStore, visibleResultStore } from './main'

const resetNumbers = () => {
  loteryNumbersStore.resetLoteryNumbers()
  numbersStore.resetNumbers()
  visibleResultStore.toggleIsVisble()
}
</script>

<template>
  <header>
    <TitleApp title="Lotery Game" />
  </header>
  <main>
    <VisorNumbers />
    <LoteryNumbers />
    <ResultsComponent />
    <div v-if="visibleResultStore.isVisble">
      <button @click="resetNumbers" class="button">RESET GAME</button>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    align-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
