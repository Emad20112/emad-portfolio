<template>
  <footer>
    © {{ year }} Emad Faisal · Built with Vue 3 & Vite
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
