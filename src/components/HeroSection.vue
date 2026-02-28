<template>
  <section id="hero" class="hero">
    <div>
      <div class="hero-image-container">
        <img src="/my_image.png" alt="عماد فيصل الجماعي" class="hero-image" />
      </div>
      <p class="hero-role">مهندس برمجيات أول • معماري أنظمة (Flutter / Laravel / Node.js / Next.js)</p>
      <h1 class="hero-title">
        مرحباً، أنا <span>عماد فيصل</span><br />
        أبني أنظمة ويب وموبايل قابلة للتوسع.
      </h1>
      <p class="hero-text">
        مهندس برمجيات بخبرة عملية 5+ سنوات في بناء وتوجيه تطوير أنظمة ويب وموبايل قابلة للتوسع (ERP، أنظمة مدارس، منصات تجارة إلكترونية، تطبيقات مالية). أركز على تحويل متطلبات الأعمال إلى حلول تقنية توفر وقت التشغيل، تقلل الأخطاء، وتحسّن تجربة المستخدم.
      </p>

      <div class="hero-badges">
        <span class="badge">Flutter · Dart · Provider · Bloc</span>
        <span class="badge">Laravel · Node.js · Next.js · Vue.js</span>
        <span class="badge">MySQL · Firebase · SQLite</span>
        <span class="badge">RESTful APIs · Clean Architecture</span>
      </div>

      <div class="btn-row">
        <a
          class="btn"
          href="https://github.com/Emad20112"
          target="_blank"
          rel="noopener noreferrer"
        >
          حسابي على جيت هب
        </a>
        <a
          class="btn secondary"
          href="https://www.linkedin.com/in/emad-fasil-299409336/"
          target="_blank"
          rel="noopener noreferrer"
        >
          لينكد إن
        </a>
        <a class="btn outline" href="#" @click.prevent="downloadCV">
          تحميل السيرة الذاتية
        </a>
      </div>
    </div>

    <aside class="hero-card">
      <div class="hero-card-title">لمحة سريعة</div>

      <div class="card-label">التركيز الحالي</div>
      <div class="card-value">
        أنظمة ERP · تطبيقات Flutter · واجهات Laravel و Node.js · Next.js
      </div>

      <div class="divider"></div>

      <div class="card-label">التقنيات الأساسية</div>
      <div class="tech-tags">
        <span class="tech-tag">Flutter</span>
        <span class="tech-tag">Dart</span>
        <span class="tech-tag">Laravel</span>
        <span class="tech-tag">PHP</span>
        <span class="tech-tag">Node.js</span>
        <span class="tech-tag">Express</span>
        <span class="tech-tag">Next.js</span>
        <span class="tech-tag">Vue.js</span>
        <span class="tech-tag">TypeScript</span>
        <span class="tech-tag">Firebase</span>
        <span class="tech-tag">MySQL</span>
        <span class="tech-tag">Git / GitHub</span>
      </div>

      <div class="divider"></div>

      <div class="card-label">الخبرة</div>
      <div class="card-value">5+ سنوات · 20+ مشروع Production</div>

      <div class="divider"></div>

      <div class="card-label">مقر العمل</div>
      <div class="card-value">اليمن – إب · متاح للعمل عن بُعد</div>
    </aside>
  </section>
</template>

<script setup>
const downloadCV = () => {
  // ضع هنا رابط الـ CV في Google Drive (make public)
  const cvUrl = 'https://drive.google.com/file/d/1jgsh4bdRDIrKf-BTX3r6hvpLAK2RWC_j/view?usp=drive_link'
  window.open(cvUrl, '_blank', 'noopener')
}
</script>
