<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="modal-overlay" @click="$emit('close')">
        <div class="modal-container" @click.stop>
          <button class="modal-close" @click="$emit('close')" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div class="modal-content">
            <!-- Header -->
            <div class="modal-header">
              <h2 class="modal-title">{{ project.title }}</h2>
              <p class="modal-subtitle">{{ project.description }}</p>
              <div class="pill-row">
                <span class="pill" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>

            <!-- Content -->
            <div class="modal-body">
              <!-- Overview -->
              <section class="detail-section">
                <h3 class="section-header">
                  <span class="icon">📋</span>
                  نظرة عامة
                </h3>
                <p class="detail-text">{{ project.details.overview }}</p>
              </section>

              <!-- Key Features -->
              <section class="detail-section">
                <h3 class="section-header">
                  <span class="icon">✨</span>
                  أهم الميزات
                </h3>
                <ul class="feature-list">
                  <li v-for="(feature, index) in project.details.features" :key="index">
                    <span class="bullet">→</span>
                    {{ feature }}
                  </li>
                </ul>
              </section>

              <!-- Admin Features (if exists) -->
              <section v-if="project.details.adminFeatures" class="detail-section">
                <h3 class="section-header">
                  <span class="icon">⚙️</span>
                  ميزات لوحة التحكم
                </h3>
                <ul class="feature-list">
                  <li v-for="(feature, index) in project.details.adminFeatures" :key="index">
                    <span class="bullet">→</span>
                    {{ feature }}
                  </li>
                </ul>
              </section>

              <!-- Technologies -->
              <section class="detail-section">
                <h3 class="section-header">
                  <span class="icon">🛠️</span>
                  التقنيات المستخدمة
                </h3>
                <ul class="tech-list">
                  <li v-for="(tech, index) in project.details.technologies" :key="index">
                    <span class="tech-bullet">▪</span>
                    {{ tech }}
                  </li>
                </ul>
              </section>

              <!-- UI & Experience -->
              <section class="detail-section">
                <h3 class="section-header">
                  <span class="icon">🎨</span>
                  واجهة وتجربة المستخدم
                </h3>
                <div class="highlights-grid">
                  <div v-for="(highlight, index) in project.details.highlights" :key="index" class="highlight-card">
                    <span class="highlight-check">✓</span>
                    {{ highlight }}
                  </div>
                </div>
              </section>
            </div>

            <!-- Footer Actions -->
            <div class="modal-footer">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="action-btn primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                عرض الكود المصدري
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="action-btn secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                مشاهدة العرض الحي
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  show: Boolean,
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])
</script>

<style scoped>
/* Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  overflow-y: auto;
}

[data-theme='light'] .modal-overlay {
  background: rgba(255, 255, 255, 0.3);
}

/* Container - iOS-style Glassmorphism */
.modal-container {
  background: var(--card);
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border-radius: 1.5rem;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border);
  position: relative;
  animation: slideUp 0.4s ease-out;
}

[data-theme='light'] .modal-container {
  box-shadow: 
    0 25px 80px rgba(99, 102, 241, 0.15),
    0 0 0 1px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05);
}

.modal-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 100%
  );
  z-index: 1;
}

[data-theme='light'] .modal-container::before {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 50%,
    transparent 100%
  );
}

.modal-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(
      ellipse at top left,
      rgba(99, 102, 241, 0.15) 0%,
      transparent 40%
    ),
    radial-gradient(
      ellipse at bottom right,
      rgba(34, 197, 94, 0.08) 0%,
      transparent 40%
    );
  pointer-events: none;
  border-radius: 1.5rem;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Close Button */
.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--bg-light);
  border: 1px solid var(--border);
  color: var(--text-main);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.modal-close:hover {
  background: var(--border);
  transform: rotate(90deg);
}

/* Content */
.modal-content {
  padding: 2.5rem;
}

/* Header */
.modal-header {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--border);
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
}

.modal-subtitle {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pill {
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: var(--primary);
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Body */
.modal-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.detail-section {
  animation: fadeInUp 0.5s ease-out backwards;
}

.detail-section:nth-child(1) { animation-delay: 0.1s; }
.detail-section:nth-child(2) { animation-delay: 0.2s; }
.detail-section:nth-child(3) { animation-delay: 0.3s; }
.detail-section:nth-child(4) { animation-delay: 0.4s; }
.detail-section:nth-child(5) { animation-delay: 0.5s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-main);
}

.icon {
  font-size: 1.5rem;
}

.detail-text {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.8;
  padding-left: 2.25rem;
  padding-right: 2.25rem; /* For RTL */
}

/* Feature List */
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  padding-right: 2.25rem; /* For RTL */
}

.feature-list li {
  color: var(--text-muted);
  padding: 0.5rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
}

.bullet {
  color: var(--primary);
  font-weight: bold;
  flex-shrink: 0;
}

/* Tech List */
.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
  padding-right: 2.25rem; /* For RTL */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.75rem;
}

.tech-list li {
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
}

.tech-bullet {
  color: #764ba2;
  font-size: 1.2rem;
}

/* Highlights Grid */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding-right: 2.25rem; /* For RTL */
}

.highlight-card {
  background: var(--bg-light);
  border: 1px solid var(--border);
  padding: 1rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  color: var(--text-main);
}

.highlight-card:hover {
  background: var(--bg);
  border-color: var(--primary-soft);
  transform: translateY(-2px);
}

.highlight-check {
  color: var(--accent);
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

/* Footer */
.modal-footer {
  display: flex;
  gap: 1rem;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 2px solid var(--border);
  flex-wrap: wrap;
}

.action-btn {
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.action-btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.action-btn.secondary {
  background: var(--bg-light);
  border-color: var(--border);
  color: var(--text-main);
}

.action-btn.secondary:hover {
  background: var(--border);
  transform: translateY(-3px);
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Scrollbar */
.modal-container::-webkit-scrollbar {
  width: 8px;
}

.modal-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.modal-container::-webkit-scrollbar-thumb {
  background: rgba(102, 126, 234, 0.5);
  border-radius: 10px;
}

.modal-container::-webkit-scrollbar-thumb:hover {
  background: rgba(102, 126, 234, 0.7);
}

/* Responsive */
@media (max-width: 768px) {
  .modal-content {
    padding: 2rem 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-subtitle {
    font-size: 1rem;
  }

  .detail-text,
  .feature-list li,
  .tech-list li {
    font-size: 0.95rem;
  }

  .modal-footer {
    flex-direction: column;
  }

  .action-btn {
    min-width: 100%;
  }

  .tech-list {
    grid-template-columns: 1fr;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .modal-overlay {
    padding: 0.5rem;
  }

  .modal-container {
    border-radius: 1rem;
    max-height: 95vh;
  }

  .modal-close {
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
  }

  .modal-content {
    padding: 1.5rem 1rem;
  }

  .modal-header {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
  }

  .modal-title {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }

  .modal-subtitle {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .pill {
    font-size: 0.75rem;
    padding: 0.3rem 0.75rem;
  }

  .modal-body {
    gap: 1.5rem;
  }

  .section-header {
    font-size: 1.1rem;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .icon {
    font-size: 1.2rem;
  }

  .detail-text {
    font-size: 0.9rem;
    padding-left: 1.5rem;
    line-height: 1.6;
  }

  .feature-list,
  .tech-list {
    padding-left: 1.5rem;
  }

  .feature-list li {
    font-size: 0.85rem;
    padding: 0.4rem 0;
    gap: 0.5rem;
  }

  .tech-list li {
    font-size: 0.85rem;
  }

  .highlights-grid {
    padding-left: 1.5rem;
    gap: 0.75rem;
  }

  .highlight-card {
    padding: 0.75rem;
    font-size: 0.85rem;
    gap: 0.5rem;
  }

  .modal-footer {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
    gap: 0.75rem;
  }

  .action-btn {
    padding: 0.85rem 1.5rem;
    font-size: 0.9rem;
    gap: 0.5rem;
  }
}

@media (max-width: 360px) {
  .modal-content {
    padding: 1.25rem 0.85rem;
  }

  .modal-title {
    font-size: 1.15rem;
  }

  .modal-subtitle {
    font-size: 0.85rem;
  }

  .pill {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
  }

  .section-header {
    font-size: 1rem;
  }

  .icon {
    font-size: 1.1rem;
  }

  .detail-text,
  .feature-list li,
  .tech-list li {
    font-size: 0.8rem;
  }

  .highlight-card {
    font-size: 0.8rem;
    padding: 0.6rem;
  }

  .action-btn {
    padding: 0.75rem 1.25rem;
    font-size: 0.85rem;
  }
}

</style>

