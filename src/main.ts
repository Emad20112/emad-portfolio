import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
// استيراد المكتبة والمحرك
import Particles from "@tsparticles/vue3"
import { loadSlim } from "@tsparticles/slim"

const app = createApp(App)

// تسجيل المكتبة عالمياً ليتعرف Vue على وسم <vue-particles>
app.use(Particles, {
  init: async engine => {
    await loadSlim(engine);
  },
});

app.mount('#app')