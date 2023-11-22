<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
  </div>
</template>
