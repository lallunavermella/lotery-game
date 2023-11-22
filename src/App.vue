<script setup>
import TitleApp from './components/TitleApp.vue'
import VisorNumbers from './components/VisorNumbers.vue'
</script>

<template>
  <header>
    <TitleApp title="Lotery Game" />
  </header>
  <main>
    <h2>Aqui anira un component de la loteria</h2>
    <VisorNumbers />
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
