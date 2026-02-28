<template>
  <section id="skills">
    <div class="section-sub">المهارات</div>
    <h2 class="section-title">التقنيات ونقاط القوة</h2>

    <div class="skills-grid">
      <div class="skill-category" v-for="cat in skillCategories" :key="cat.category">
        <h3 class="category-title">{{ cat.category }}</h3>
        <div class="chips">
          <div class="chip" v-for="skill in cat.skills" :key="skill">
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillCategories } from '../data/skills'
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 850px;
}

.skill-category {
  background: var(--card-bg, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 18px 20px;
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.1);
}

.category-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.chip {
  font-size: 12px;
  padding: 5px 12px;
  border-radius: 20px;
  background: rgba(99, 102, 241, 0.08);
  color: var(--text-muted);
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.chip:hover {
  border-color: var(--primary);
  color: var(--primary);
}
</style>
