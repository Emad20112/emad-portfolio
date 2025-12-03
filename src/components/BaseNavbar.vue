<template>
  <header class="navbar">
    <div class="nav-inner">
      <div class="logo">
        EMAD <span>FAISAL</span>
      </div>
      <nav class="nav-links">
        <a @click.prevent="scrollTo('hero')">Home</a>
        <a @click.prevent="scrollTo('about')">About</a>
        <a @click.prevent="scrollTo('skills')">Skills</a>
        <a @click.prevent="scrollTo('projects')">Projects</a>
        <a @click.prevent="scrollTo('contact')">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const offset = 70
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>
