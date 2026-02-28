<template>
  <section id="projects">
    <div class="section-sub">المشاريع</div>
    <h2 class="section-title">أعمال مختارة</h2>

    <div class="grid">
      <article v-for="project in projects" :key="project.title" class="card">
        <div class="card-header">
          <h3>{{ project.title }}</h3>
          <button 
            v-if="project.details" 
            @click="openModal(project)" 
            class="details-btn"
            aria-label="View project details"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span class="tooltip">عرض التفاصيل</span>
          </button>
        </div>
        <p>{{ project.description }}</p>
        <div class="pill-row">
          <span class="pill" v-for="tag in project.tags" :key="tag">
            {{ tag }}
          </span>
        </div>
        <div class="project-links">
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>جيت هب</span>
          </a>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>عرض حي</span>
          </a>
        </div>
      </article>
    </div>

    <!-- Modal -->
    <ProjectModal 
      v-if="selectedProject"
      :show="showModal" 
      :project="selectedProject" 
      @close="closeModal" 
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal.vue'

const showModal = ref(false)
const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = ''
  setTimeout(() => {
    selectedProject.value = null
  }, 300)
}
</script>

<style scoped>
.card {
  position: relative;
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.card-header h3 {
  flex: 1;
  margin: 0;
}

.details-btn {
  position: relative;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: var(--primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.details-btn:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.4), rgba(118, 75, 162, 0.4));
  border-color: rgba(102, 126, 234, 0.6);
  transform: scale(1.1) rotate(15deg);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
}

.details-btn:active {
  transform: scale(0.95);
}

.tooltip {
  position: absolute;
  top: -35px;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.details-btn:hover .tooltip {
  opacity: 1;
}

.tooltip::after {
  content: '';
  position: absolute;
  bottom: -5px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(0, 0, 0, 0.9);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  color: var(--text-main);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateY(-2px);
}

.project-link svg {
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .card-header {
    gap: 0.75rem;
  }

  .details-btn {
    width: 36px;
    height: 36px;
  }

  .tooltip {
    font-size: 0.75rem;
    padding: 0.4rem 0.6rem;
  }

  .project-links {
    flex-direction: column;
    gap: 0.75rem;
  }

  .project-link {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .card-header {
    gap: 0.5rem;
  }

  .details-btn {
    width: 32px;
    height: 32px;
  }

  .details-btn svg {
    width: 18px;
    height: 18px;
  }

  .tooltip {
    font-size: 0.7rem;
    padding: 0.35rem 0.5rem;
    top: -30px;
  }

  .project-link {
    padding: 0.4rem 0.85rem;
    font-size: 0.85rem;
  }

  .project-link svg {
    width: 18px;
    height: 18px;
  }
}

</style>
