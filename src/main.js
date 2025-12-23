import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
// استيراد المكتبة
import Particles from "@tsparticles/vue3";
import { loadSlim } from "tsparticles-slim"; 

const app = createApp(App)

app.use(Particles, {
  init: async engine => {
    await loadSlim(engine); // تحميل النسخة الخفيفة لتحسين الأداء
  },
});

app.mount('#app')