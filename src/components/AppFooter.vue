<template>
  <footer>
    © {{ year }}     تطويري
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
