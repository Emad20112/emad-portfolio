<template>
  <!-- مكون الجزيئات للخلفية المتحركة -->
  <vue-particles
    id="tsparticles"
    :options="particlesOptions"
  />
  
  <div class="app">
    <BaseNavbar />

    <main class="container">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import BaseNavbar from './components/BaseNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
// إعدادات Antigravity الاحترافية
const particlesOptions = {
  fpsLimit: 120, // لأعلى سلاسة ممكنة على الشاشات الحديثة
  background: {
    color: "transparent" // مهم جداً: شفاف لتظهر خلفيتك المتدرجة الجميلة
  },
  // قسم التفاعل: سر الإحساس بالجاذبية
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse" // جعل الجزيئات تهرب ببطء من الماوس
      },
      resize: true // استجابة لتغيير حجم الشاشة
    },
    modes: {
      repulse: {
        distance: 100, // مسافة تأثير الماوس
        duration: 0.4,
        speed: 1
      }
    }
  },
  // قسم الجزيئات والخطوط
  particles: {
    color: {
      value: "rgba(255, 255, 255, 0.8)" // أبيض مع شفافية بسيطة ليكون ناعماً
    },
    // الإضافة الأهم: الخطوط الرابطة
    links: {
      color: "#ffffff",
      distance: 150, // المسافة التي تظهر عندها الخطوط بين نقطتين
      enable: true, // تفعيل الروابط
      opacity: 0.2, // خطوط خفيفة جداً وغير مزعجة للعين
      width: 1 // سمك الخط
    },
    move: {
      direction: "none", // حركة عشوائية في كل الاتجاهات
      enable: true,
      outModes: {
        default: "out" // الجزيئات تخرج من الشاشة وتعود من الجهة الأخرى
      },
      random: false,
      speed: 0.8, // سرعة بطيئة جداً تعطي شعور الطفو (Floating)
      straight: false,
      vibrate: false
    },
    number: {
      density: {
        enable: true,
        area: 800 // توزيع متوازن للكثافة
      },
      value: 100 // عدد مثالي لعدم ازدحام الشاشة
    },
    opacity: {
      value: 0.7,
      random: false
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 3 }, // أحجام صغيرة ومتفاوتة قليلاً للعمق
      random: true
    }
  },
  detectRetina: true
}
</script>
