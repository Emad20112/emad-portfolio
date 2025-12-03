<template>
  <section id="skills">
    <div class="section-sub">SKILLS</div>
    <h2 class="section-title">Tech stack & strengths</h2>

    <div class="chips">
      <div class="chip" v-for="skill in skills" :key="skill.name">
        {{ skill.name }}
        <span v-if="skill.level"> · {{ skill.level }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from '../data/skills'
</script>
