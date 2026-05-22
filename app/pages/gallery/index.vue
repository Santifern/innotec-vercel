<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]
const scrollInViewOptions = { once: true, amount: 0.28, margin: '0px 0px -12% 0px' as const }
const staggerInViewOptions = { once: true, amount: 0.35, margin: '0px 0px -10% 0px' as const }

const activeFilter = ref('all')
const selectedMediaIndex = ref<number | null>(null)

// Galería de elementos - reemplaza con tus fotos/videos reales
const galleryItems = [
  {
    id: 1,
    title: 'Conferencia Principal',
    type: 'photo',
    thumbnail: '/placeholder-1.webp',
    alt: 'Charla principal del evento'
  },
  {
    id: 2,
    title: 'Taller Interactivo',
    type: 'photo',
    thumbnail: '/placeholder-2.webp',
    alt: 'Participantes en taller'
  },
  {
    id: 3,
    title: 'Visita Técnica',
    type: 'video',
    thumbnail: '/placeholder-3.webp',
    alt: 'Visita a instalaciones'
  },
  {
    id: 4,
    title: 'Networking',
    type: 'photo',
    thumbnail: '/placeholder-4.webp',
    alt: 'Sesión de networking'
  },
  {
    id: 5,
    title: 'Panel de Expertos',
    type: 'video',
    thumbnail: '/placeholder-5.webp',
    alt: 'Panel de discusión'
  },
  {
    id: 6,
    title: 'Ceremonia de Clausura',
    type: 'photo',
    thumbnail: '/placeholder-6.webp',
    alt: 'Cierre del evento'
  }
]

const filteredItems = computed(() => {
  return activeFilter.value === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.type === activeFilter.value)
})

function enterMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  }
}

function scrollMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 34, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    inViewOptions: scrollInViewOptions,
    transition: { duration: 0.82, delay, ease: smoothEase }
  }
}

function staggerMotion(index: number = 0) {
  return {
    initial: { opacity: 0, y: 28, scale: 0.98, filter: 'blur(6px)' },
    whileInView: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    inViewOptions: staggerInViewOptions,
    transition: { duration: 0.72, delay: index * 0.1, ease: smoothEase }
  }
}

useSeoMeta({
  title: 'Galería | INNOTEC 2026',
  ogTitle: 'Galería | INNOTEC 2026',
  description: 'Galería de fotos y videos del congreso INNOTEC 2026',
  ogDescription: 'Galería de fotos y videos del congreso INNOTEC 2026'
})
</script>

<template>
  <div class="innotec-page gallery-page">
    <!-- Hero -->
    <section id="gallery-inicio" class="hero-section">
      <!-- Background effects -->
      <div class="hero-bg-grid" />
      <div class="hero-bg-glow hero-bg-glow--center" />
      <div class="hero-bg-glow hero-bg-glow--left" />
      <WaveBackground class="hero-wave-background" />

      <!-- Neon floating particles -->
      <div class="neon-particle neon-particle--1" />
      <div class="neon-particle neon-particle--2" />
      <div class="neon-particle neon-particle--3" />
      <div class="neon-particle neon-particle--4" />
      <div class="neon-particle neon-particle--5" />
      <div class="neon-particle neon-particle--6" />

      <div class="hero-container">
        <!-- Logo -->
        <Motion v-bind="enterMotion(0.1)" class="hero-logo-wrapper">
          <NuxtImg src="/logo-innotec-blanco.svg" alt="INNOTEC" class="hero-logo"/>
        </Motion>

        <!-- Title -->
        <Motion v-bind="enterMotion(0.25)" class="hero-title-wrapper">
          <h1 class="hero-title">
            Galería
            <br>
            <span class="hero-title-gradient">INNOTEC 2026</span>
            <br/>
          </h1>
        </Motion>

        <!-- Description -->
        <Motion v-bind="enterMotion(0.4)" class="hero-desc-wrapper">
          <p class="hero-description">
            Revive los mejores momentos del congreso. Fotos y videos de charlas, talleres, visitas técnicas y más.
          </p>
        </Motion>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="innotec-section gallery-section">
      <div class="section-container">
        <!-- Section Header -->
        <Motion v-bind="scrollMotion()" class="section-header">
          <span class="section-label">Momentos Memorables</span>
          <h2 class="section-title">Revive la Experiencia</h2>
          <p class="section-description">
            Explora nuestra galería de fotos y videos del evento más importante de tecnología e innovación del Paraguay.
          </p>
        </Motion>

        <!-- Filters -->
        <Motion v-bind="scrollMotion(0.1)" class="gallery-filters">
          <button
            v-for="filter in ['all', 'photo', 'video']"
            :key="filter"
            :class="['filter-btn', { active: activeFilter === filter }]"
            @click="activeFilter = filter"
          >
            <span v-if="filter === 'all'">Todos</span>
            <span v-else-if="filter === 'photo'">Fotos</span>
            <span v-else>Videos</span>
          </button>
        </Motion>

        <!-- Gallery Grid -->
        <div class="gallery-grid">
          <Motion
            v-for="(item, index) in filteredItems"
            :key="item.id"
            v-bind="staggerMotion(index)"
            class="gallery-item-wrapper"
          >
            <div
              class="gallery-item"
              :class="[`gallery-item--${item.type}`]"
              @click="selectedMediaIndex = index"
            >
              <figure class="gallery-media">
                <NuxtImg
                  :src="item.thumbnail"
                  :alt="item.alt"
                  class="gallery-image"
                  loading="lazy"
                  decoding="async"
                />
                <!-- Video Icon Overlay -->
                <div v-if="item.type === 'video'" class="video-icon-overlay">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="video-icon">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </figure>
              <div class="gallery-item-content">
                <h3 class="gallery-item-title">{{ item.title }}</h3>
              </div>
              <div class="gallery-item-glow" />
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="section-divider" />

    <!-- CTA Section -->
    <section id="gallery-cta" class="innotec-section gallery-cta-section">
      <div class="section-container gallery-cta-container">
        <Motion v-bind="scrollMotion()" class="cta-content">
          <span class="section-label">Comparte tu Experiencia</span>
          <h2 class="cta-title">¿Tienes fotos o videos del evento?</h2>
          <p class="cta-description">
            Nos encantaría que compartas tus momentos favoritos del INNOTEC 2026. Contáctanos para colaborar.
          </p>
          <div class="cta-actions">
            <a href="mailto:contacto@innotec.com" class="hero-btn hero-btn--primary cta-btn">
              Envía tu contenido
            </a>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ===== PAGE BASE ===== */
.gallery-page {
  position: relative;
  background: #080C16;
  min-height: 100vh;
  overflow: hidden;
}

.gallery-page::before,
.gallery-page::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.gallery-page::before {
  z-index: 0;
  background-image:
    linear-gradient(rgba(25, 68, 240, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(25, 68, 240, 0.055) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0.86) 42%, rgba(0, 0, 0, 0.72) 100%);
}

.gallery-page::after {
  z-index: 1;
  background:
    radial-gradient(circle at 14% 18%, rgba(123, 138, 247, 0.85) 0 2px, rgba(123, 138, 247, 0.22) 3px, transparent 10px),
    radial-gradient(circle at 78% 24%, rgba(25, 68, 240, 0.9) 0 2px, rgba(25, 68, 240, 0.22) 3px, transparent 11px),
    radial-gradient(circle at 88% 56%, rgba(243, 246, 254, 0.8) 0 2px, rgba(243, 246, 254, 0.18) 3px, transparent 10px),
    radial-gradient(circle at 22% 74%, rgba(25, 68, 240, 0.72) 0 1px, rgba(25, 68, 240, 0.2) 3px, transparent 9px),
    radial-gradient(ellipse at 50% 16%, rgba(25, 68, 240, 0.12), transparent 40%);
}

.hero-section,
.section-divider,
.innotec-section {
  position: relative;
  z-index: 2;
}

/* ===== HERO SECTION ===== */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 7rem 1.5rem 2.75rem;
  isolation: isolate;
}

.hero-section::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: clamp(-22rem, -23vw, -14rem);
  z-index: 1;
  height: clamp(26rem, 42vw, 38rem);
  background:
    radial-gradient(ellipse 82% 66% at 44% 54%, rgba(31, 82, 255, 0.17), rgba(25, 68, 240, 0.1) 42%, rgba(25, 68, 240, 0.045) 68%, transparent 92%),
    radial-gradient(ellipse 58% 58% at 68% 56%, rgba(25, 68, 240, 0.1), rgba(25, 68, 240, 0.04) 56%, transparent 88%);
  filter: blur(38px);
  pointer-events: none;
}

/* Background grid */
.hero-bg-grid {
  position: absolute;
  top: 0;
  bottom: -18rem;
  left: 50%;
  width: 100vw;
  min-width: 100%;
  transform: translateX(-50%);
  background-image:
    linear-gradient(rgba(25, 68, 240, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(25, 68, 240, 0.03) 1px, transparent 1px);
  background-size: 72px 72px;
  background-position: center top;
  mask-image:
    linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0.86) 58%, rgba(0, 0, 0, 0.46) 82%, transparent 100%),
    radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
}

/* Background glow blobs */
.hero-bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.hero-bg-glow--center {
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: rgba(25, 68, 240, 0.15);
  animation: glow-breathe 6s ease-in-out infinite;
}

.hero-bg-glow--left {
  bottom: 20%;
  left: -100px;
  width: 300px;
  height: 300px;
  background: rgba(123, 138, 247, 0.08);
}

.hero-wave-background {
  z-index: 1;
  opacity: 0.92;
  mix-blend-mode: screen;
}

@keyframes glow-breathe {
  0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
  50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
}

/* ===== NEON FLOATING PARTICLES ===== */
.neon-particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 2;
}

.neon-particle--1 {
  width: 4px;
  height: 4px;
  background: #7B8AF7;
  box-shadow: 0 0 8px 2px rgba(123, 138, 247, 0.8), 0 0 20px 4px rgba(25, 68, 240, 0.4);
  top: 18%;
  left: 15%;
  animation: particle-float-1 8s ease-in-out infinite;
}

.neon-particle--2 {
  width: 3px;
  height: 3px;
  background: #1944F0;
  box-shadow: 0 0 6px 2px rgba(25, 68, 240, 0.9), 0 0 16px 4px rgba(25, 68, 240, 0.4);
  top: 30%;
  right: 20%;
  animation: particle-float-2 10s ease-in-out infinite;
}

.neon-particle--3 {
  width: 3px;
  height: 3px;
  background: #CBD1FB;
  box-shadow: 0 0 6px 2px rgba(203, 209, 251, 0.6), 0 0 14px 3px rgba(123, 138, 247, 0.3);
  bottom: 25%;
  right: 12%;
  animation: particle-float-3 12s ease-in-out infinite;
}

.neon-particle--4 {
  width: 5px;
  height: 5px;
  background: #9FACF9;
  box-shadow: 0 0 10px 3px rgba(159, 172, 249, 0.85), 0 0 24px 7px rgba(25, 68, 240, 0.35);
  top: 10%;
  left: 7%;
  animation: particle-float-2 11s ease-in-out infinite;
}

.neon-particle--5 {
  width: 4px;
  height: 4px;
  background: #2B45F3;
  box-shadow: 0 0 9px 3px rgba(43, 69, 243, 0.9), 0 0 22px 6px rgba(25, 68, 240, 0.36);
  top: 34%;
  right: 30%;
  animation: particle-float-1 9s ease-in-out infinite;
}

.neon-particle--6 {
  width: 4px;
  height: 4px;
  background: #F3F6FE;
  box-shadow: 0 0 8px 3px rgba(243, 246, 254, 0.72), 0 0 20px 6px rgba(123, 138, 247, 0.32);
  bottom: 12%;
  right: 10%;
  animation: particle-float-3 13s ease-in-out infinite;
}

@keyframes particle-float-1 {
  0%, 100% { transform: translate(0, 0); opacity: 0.7; }
  25% { transform: translate(20px, -30px); opacity: 1; }
  50% { transform: translate(-10px, -50px); opacity: 0.5; }
  75% { transform: translate(15px, -20px); opacity: 0.9; }
}

@keyframes particle-float-2 {
  0%, 100% { transform: translate(0, 0); opacity: 0.5; }
  33% { transform: translate(-25px, 20px); opacity: 1; }
  66% { transform: translate(15px, -15px); opacity: 0.6; }
}

@keyframes particle-float-3 {
  0%, 100% { transform: translate(0, 0); opacity: 0.6; }
  50% { transform: translate(-20px, -40px); opacity: 1; }
}

/* Hero container */
.hero-container {
  position: relative;
  z-index: 10;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.hero-logo-wrapper {
  display: flex;
  justify-content: center;
}

.hero-logo {
  height: 64px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(25, 68, 240, 0.5));
}

@media (min-width: 768px) {
  .hero-logo {
    height: 80px;
  }
}

.hero-title-wrapper {
  display: flex;
  justify-content: center;
}

.hero-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  max-width: 13ch;
  font-size: 1.95rem;
  font-weight: 900;
  color: #F3F6FE;
  letter-spacing: 0;
  line-height: 1.12;
  margin: 0;
}

@media (min-width: 640px) {
  .hero-title {
    max-width: 18ch;
    font-size: 2.65rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    max-width: 22ch;
    font-size: 3.45rem;
  }
}

.hero-title-gradient {
  background: linear-gradient(135deg, #CBD1FB 0%, #7B8AF7 42%, #1944F0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc-wrapper {
  display: flex;
  justify-content: center;
}

.hero-description {
  max-width: 640px;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.7);
  margin: 0;
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 1.0625rem;
  }
}

/* ===== SECTIONS ===== */
.innotec-section {
  padding: 4.5rem 1.25rem;
}

@media (min-width: 768px) {
  .innotec-section {
    padding: 5.5rem 2rem;
  }
}

.section-container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 2.25rem;
}

.section-label {
  display: inline-block;
  font-size: 0.75rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 900;
  color: #D946EF;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 0.75rem;
  text-shadow: 0 0 18px rgba(217, 70, 239, 0.3);
}

.section-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 2rem;
  font-weight: 900;
  color: #F3F6FE;
  letter-spacing: 0;
  margin: 0 0 0.75rem;
  line-height: 1.1;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
}

.section-description {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.65);
  max-width: 560px;
  margin: 0 auto;
}

/* Section divider */
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(25, 68, 240, 0.4), transparent);
  margin: 0 2rem;
}

/* ===== GALLERY SECTION ===== */
.gallery-section {
  position: relative;
}

.gallery-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  padding: 0.65rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 400;
  border-radius: 8px;
  background: rgba(25, 68, 240, 0.1);
  border: 1px solid rgba(25, 68, 240, 0.3);
  color: rgba(203, 209, 251, 0.85);
  cursor: pointer;
  transition: all 0.28s ease;
}

.filter-btn:hover {
  background: rgba(25, 68, 240, 0.18);
  border-color: rgba(25, 68, 240, 0.55);
  color: #F3F6FE;
}

.filter-btn.active {
  background: linear-gradient(135deg, #1235C8 0%, #1944F0 46%, #37E6F1 100%);
  border-color: rgba(55, 230, 241, 0.46);
  color: #F3F6FE;
  box-shadow: 0 0 25px rgba(25, 68, 240, 0.45);
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: stretch;
}

@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gallery-item-wrapper {
  height: 100%;
}

.gallery-item {
  position: relative;
  height: 100%;
  min-height: 320px;
  background:
    linear-gradient(180deg, rgba(13, 20, 40, 0.86), rgba(9, 14, 28, 0.76));
  border: 1px solid rgba(123, 138, 247, 0.18);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.25s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.gallery-item:hover {
  background:
    linear-gradient(180deg, rgba(15, 23, 46, 0.9), rgba(10, 16, 32, 0.82));
  border-color: rgba(55, 230, 241, 0.72);
  transform: translateY(-5px);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28), 0 0 26px rgba(55, 230, 241, 0.22);
}

.gallery-media {
  position: relative;
  width: 100%;
  height: 240px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: rgba(8, 12, 22, 0.72);
  border: 0;
  border-bottom: 1px solid rgba(123, 138, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.4s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.08);
  filter: saturate(1.08) brightness(1.04);
}

.video-icon-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  background: rgba(43, 69, 243, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 24px rgba(43, 69, 243, 0.6);
  transition: all 0.3s ease;
}

.gallery-item:hover .video-icon-overlay {
  background: rgba(55, 230, 241, 0.9);
  box-shadow: 0 0 32px rgba(55, 230, 241, 0.7);
}

.video-icon {
  width: 28px;
  height: 28px;
  color: #F3F6FE;
  margin-left: 2px;
}

.gallery-item-content {
  flex: 1;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gallery-item-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 900;
  color: #F3F6FE;
  margin: 0;
  letter-spacing: 0;
  line-height: 1.3;
}

.gallery-item-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background:
    radial-gradient(ellipse at 12% 0%, rgba(55, 230, 241, 0.16) 0%, transparent 58%),
    radial-gradient(ellipse at 84% 8%, rgba(217, 70, 239, 0.12) 0%, transparent 42%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.gallery-item:hover .gallery-item-glow {
  opacity: 1;
}

/* ===== CTA SECTION ===== */
.gallery-cta-section {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  min-height: clamp(20rem, 50vh, 32rem);
  display: flex;
  align-items: center;
  background: transparent;
}

.gallery-cta-section::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(8, 12, 22, 0) 0%, rgba(8, 12, 22, 0.12) 20%, rgba(8, 12, 22, 0.42) 42%, rgba(8, 12, 22, 0.64) 58%),
    radial-gradient(ellipse 90% 38% at 50% 34%, rgba(8, 12, 22, 0.36), rgba(8, 12, 22, 0.14) 48%, transparent 80%);
  pointer-events: none;
}

.gallery-cta-container {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
}

.cta-content {
  text-align: center;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.cta-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 2.75rem;
  font-weight: 900;
  color: #F3F6FE;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0;
}

@media (min-width: 768px) {
  .cta-title {
    font-size: 3.2rem;
  }
}

.cta-description {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1.08rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(238, 244, 255, 0.82);
  max-width: 520px;
  margin: 0;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.cta-btn {
  font-size: 1rem;
  padding: 0.875rem 2rem;
}

.hero-btn {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  font-size: 0.9375rem;
  font-weight: 400;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  transform-origin: center;
  transition: transform 0.28s ease, background 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease, color 0.28s ease;
  letter-spacing: 0.01em;
  border: none;
}

.hero-btn--primary {
  color: #F3F6FE;
  background: linear-gradient(135deg, #1235C8 0%, #1944F0 46%, #37E6F1 100%);
  border: 1px solid rgba(55, 230, 241, 0.46);
  box-shadow: 0 0 25px rgba(25, 68, 240, 0.45);
}

.hero-btn--primary:hover {
  background: linear-gradient(135deg, #1944F0 0%, #2B45F3 48%, #37E6F1 100%);
  box-shadow: 0 0 18px rgba(55, 230, 241, 0.72), 0 0 44px rgba(25, 68, 240, 0.7);
  transform: translateY(-3px) scale(1.035);
  border-color: rgba(55, 230, 241, 0.82);
}
</style>
