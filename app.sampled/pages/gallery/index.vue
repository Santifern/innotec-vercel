<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

useSeoMeta({
  title: 'Galería | INNOTEC 2026',
  ogTitle: 'Galería | INNOTEC 2026',
  description: 'Galería de fotos y videos del congreso INNOTEC 2026',
  ogDescription: 'Galería de fotos y videos del congreso INNOTEC 2026'
})
</script>

<template>
  <div class="gallery-page">
    <div class="coming-soon-wrapper">
      <!-- Background decorative glow -->
      <div class="bg-glow bg-glow--left" />
      <div class="bg-glow bg-glow--right" />

      <!-- Camera icon -->
      <div class="icon-wrapper">
        <UIcon
          name="i-lucide-camera"
          class="camera-icon"
        />
      </div>

      <Motion
        :initial="{ opacity: 0, y: 24, filter: 'blur(8px)' }"
        :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ duration: 0.72, delay: 0.1, ease: [0.22, 1, 0.36, 1] }"
        class="text-center"
      >
        <p class="section-label">
          Galería · INNOTEC 2026
        </p>
        <h1 class="coming-title">
          Próximamente
        </h1>
        <p class="coming-description">
          Aquí encontrarás fotos y videos de todos los momentos<br class="hidden sm:block">
          que hicieron especial el congreso.
        </p>
      </Motion>

      <!-- Decorative line -->
      <Motion
        :initial="{ opacity: 0, scaleX: 0 }"
        :animate="{ opacity: 1, scaleX: 1 }"
        :transition="{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }"
        class="separator"
      />

      <Motion
        :initial="{ opacity: 0, y: 12 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.5 }"
      >
        <NuxtLink
          to="/"
          class="back-link"
        >
          <UIcon
            name="i-lucide-arrow-left"
            class="back-icon"
          />
          Volver al inicio
        </NuxtLink>
      </Motion>
    </div>
  </div>
</template>

<style scoped>
.gallery-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #080C16;
  overflow: hidden;
}

/* Grid pattern */
.gallery-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(25, 68, 240, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(25, 68, 240, 0.05) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
}

.coming-soon-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 3rem);
  text-align: center;
  z-index: 2;
}

/* Background glows */
.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.bg-glow--left {
  width: 520px;
  height: 520px;
  top: -10%;
  left: -18%;
  background: radial-gradient(ellipse, rgba(25, 68, 240, 0.18), transparent 70%);
}

.bg-glow--right {
  width: 480px;
  height: 480px;
  bottom: -14%;
  right: -14%;
  background: radial-gradient(ellipse, rgba(123, 138, 247, 0.13), transparent 70%);
}

/* Camera icon */
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 1.25rem;
  background: linear-gradient(135deg, rgba(25, 68, 240, 0.22), rgba(123, 138, 247, 0.1));
  border: 1px solid rgba(123, 138, 247, 0.28);
  box-shadow: 0 0 40px rgba(25, 68, 240, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  animation: float 4s ease-in-out infinite;
}

.camera-icon {
  width: 2.2rem;
  height: 2.2rem;
  color: rgba(147, 182, 255, 0.9);
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

/* Label */
.section-label {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(123, 138, 247, 0.86);
  margin: 0 0 0.75rem;
}

/* Title */
.coming-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(3.5rem, 10vw, 6.5rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin: 0 0 1.25rem;
  color: transparent;
  background: linear-gradient(135deg, #CBD1FB 0%, #7B8AF7 42%, #1944F0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Description */
.coming-description {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1rem, 2vw, 1.12rem);
  font-weight: 400;
  line-height: 1.75;
  color: rgba(203, 218, 255, 0.72);
  max-width: 46ch;
  margin: 0;
}

/* Separator */
.separator {
  width: 80px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, rgba(123, 138, 247, 0.72), transparent);
  transform-origin: center;
}

/* Back link */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(147, 182, 255, 0.78);
  text-decoration: none;
  padding: 0.55rem 1.25rem;
  border-radius: 8px;
  border: 1px solid rgba(25, 68, 240, 0.28);
  background: rgba(25, 68, 240, 0.08);
  transition: all 0.25s ease;
}

.back-link:hover {
  color: #F3F6FE;
  border-color: rgba(123, 138, 247, 0.58);
  background: rgba(25, 68, 240, 0.16);
  transform: translateX(-2px);
}

.back-icon {
  width: 1rem;
  height: 1rem;
}

.text-center {
  text-align: center;
}

.hidden {
  display: none;
}

@media (min-width: 640px) {
  .hidden.sm\:block {
    display: block;
  }
}
</style>
