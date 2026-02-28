<template>
  <footer>
    © {{ year }} عماد فيصل · تم بناؤه باستخدام Vue 3 و Vite
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
