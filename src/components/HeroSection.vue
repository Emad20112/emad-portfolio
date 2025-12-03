<template>
  <section id="hero" class="hero">
    <div>
      <div class="hero-image-container">
        <img src="../assets/my.png" alt="Emad Faisal" class="hero-image" />
      </div>
      <p class="hero-role">Software Engineer (Mobile - Flutter)& Backend (Laravel ,Node.js , Firebase)</p>
      <h1 class="hero-title">
        Hi, I'm <span>Emad Faisal</span><br />
        I build modern mobile apps & APIs.
      </h1>
      <p class="hero-text">
        Mobile developer specialized in Flutter for Android & iOS, with strong backend
        experience using Laravel and Firebase. I focus on performance, clean architecture,
        and scalable APIs.
      </p>

      <div class="hero-badges">
        <span class="badge">Flutter · Provider · Cubit · Bloc</span>
        <span class="badge">Laravel · RESTful APIs</span>
        <span class="badge">Firebase · MySQL · SQL Server</span>
        <span class="badge">Git & GitHub · Clean Code</span>
      </div>

      <div class="btn-row">
        <a
          class="btn"
          href="https://github.com/Emad20112"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
        <a
          class="btn secondary"
          href="https://www.linkedin.com/in/emad-fasil-299409336/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a class="btn outline" href="#" @click.prevent="downloadCV">
          Download CV
        </a>
      </div>
    </div>

    <aside class="hero-card">
      <div class="hero-card-title">Snapshot</div>

      <div class="card-label">Current Focus</div>
      <div class="card-value">
        Flutter apps · Laravel & Node.js APIs · Realtime Firebase integrations
      </div>

      <div class="divider"></div>

      <div class="card-label">Core Stack</div>
      <div class="tech-tags">
        <span class="tech-tag">Flutter</span>
        <span class="tech-tag">Dart</span>
        <span class="tech-tag">Laravel</span>
        <span class="tech-tag">PHP</span>
        <span class="tech-tag">Node.js</span>
        <span class="tech-tag">Firebase</span>
        <span class="tech-tag">MySQL</span>
        <span class="tech-tag">SQL Server</span>
        <span class="tech-tag">Git / GitHub</span>
      </div>

      <div class="divider"></div>

      <div class="card-label">Based in</div>
      <div class="card-value">Yemen · Available for remote work</div>
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
