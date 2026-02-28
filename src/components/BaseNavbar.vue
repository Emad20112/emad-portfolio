<template>
  <header class="navbar">
    <div class="nav-inner">
      <div class="logo">
        عماد <span>فيصل</span>
      </div>

      <!-- أزرار الجوال: تبديل المظهر + قائمة الهمبرغر -->
      <div class="mobile-actions">
        <button @click="toggleTheme" class="theme-toggle" :aria-label="theme === 'dark' ? 'الوضع الفاتح' : 'الوضع الداكن'">
          <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
        <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="القائمة">
          <!-- أیقونة الهمبرغر / الإغلاق -->
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a @click.prevent="navTo('hero')">الرئيسية</a>
        <a @click.prevent="navTo('about')">نبذة عني</a>
        <a @click.prevent="navTo('skills')">المهارات</a>
        <a @click.prevent="navTo('projects')">المشاريع</a>
        <a @click.prevent="navTo('contact')">تواصل معي</a>

        <!-- زر تبديل المظهر في الديسكتوب فقط (داخل الروابط) -->
        <button @click="toggleTheme" class="theme-toggle desktop-only" :aria-label="theme === 'dark' ? 'الوضع الفاتح' : 'الوضع الداكن'">
          <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from './useTheme'
const { theme, toggleTheme } = useTheme()
const menuOpen = ref(false)

const navTo = (id) => {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (!el) return
  const offset = 70
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>

<style scoped>
.theme-toggle {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-main);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: rgba(128, 128, 128, 0.1);
  color: var(--primary);
  border-color: var(--primary);
  transform: rotate(15deg);
}

/* أزرار الجوال - تظهر فقط على الشاشات الصغيرة */
.mobile-actions {
  display: none;
  align-items: center;
  gap: 8px;
}

/* زر المظهر داخل الروابط يظهر فقط على الديسكتوب */
.desktop-only {
  display: flex;
}

@media (max-width: 768px) {
  .mobile-actions {
    display: flex;
  }

  .desktop-only {
    display: none !important;
  }
}
</style>

