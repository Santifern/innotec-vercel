<script setup lang="ts">
definePageMeta({
  layout: 'hackathon',
  colorMode: 'dark',
  section: 'hackathon'
})

useSeoMeta({
  title: 'Galería | HACKATHON 2026',
  ogTitle: 'Galería | HACKATHON 2026',
  description: 'Galería de fotos y videos del Hackathon 2026',
  ogDescription: 'Galería de fotos y videos del Hackathon 2026'
})
</script>

<template>
  <div class="gallery-page">
    <div class="coming-soon-wrapper">
      <!-- Background glow -->
      <div class="bg-glow bg-glow--left" />
      <div class="bg-glow bg-glow--right" />

      <!-- Icon -->
      <div class="icon-wrapper">
        <UIcon name="i-lucide-camera" class="camera-icon" />
      </div>

      <Motion
        :initial="{ opacity: 0, y: 24, filter: 'blur(8px)' }"
        :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ duration: 0.72, delay: 0.1, ease: [0.22, 1, 0.36, 1] }"
        class="text-center"
      >
        <p class="section-label">
          Galería · HACKATHON 2026
        </p>
        <h1 class="coming-title">
          Próximamente
        </h1>
        <p class="coming-description">
          Aquí encontrarás fotos y videos de todos los momentos<br class="hidden sm:block">
          que hicieron especial el hackathon.
        </p>
      </Motion>

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
          to="/hackathon"
          class="back-link"
        >
          <UIcon name="i-lucide-arrow-left" class="back-icon" />
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
  background: #08041A;
  overflow: hidden;
}

/* Grid pattern */
.gallery-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(163, 114, 248, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(163, 114, 248, 0.05) 1px, transparent 1px);
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

.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}

.bg-glow--left {
  width: 520px;
  height: 520px;
  top: -10%;
  left: -18%;
  background: radial-gradient(ellipse, rgba(123, 74, 246, 0.2), transparent 70%);
}

.bg-glow--right {
  width: 480px;
  height: 480px;
  bottom: -14%;
  right: -14%;
  background: radial-gradient(ellipse, rgba(196, 159, 255, 0.14), transparent 70%);
}

/* Camera icon */
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 1.25rem;
  background: linear-gradient(135deg, rgba(123, 74, 246, 0.22), rgba(196, 159, 255, 0.1));
  border: 1px solid rgba(163, 114, 248, 0.32);
  box-shadow: 0 0 40px rgba(123, 74, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  animation: float 4s ease-in-out infinite;
}

.camera-icon {
  width: 2.2rem;
  height: 2.2rem;
  color: rgba(196, 159, 255, 0.9);
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

.section-label {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(196, 159, 255, 0.82);
  margin: 0 0 0.75rem;
}

.coming-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(3.5rem, 10vw, 6.5rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin: 0 0 1.25rem;
  color: transparent;
  background: linear-gradient(135deg, #e8d8ff 0%, #c49fff 30%, #a372f8 62%, #7b4af6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.coming-description {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1rem, 2vw, 1.12rem);
  font-weight: 400;
  line-height: 1.75;
  color: rgba(225, 210, 255, 0.68);
  max-width: 46ch;
  margin: 0;
}

.separator {
  width: 80px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, rgba(163, 114, 248, 0.75), transparent);
  transform-origin: center;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(196, 159, 255, 0.78);
  text-decoration: none;
  padding: 0.55rem 1.25rem;
  border-radius: 8px;
  border: 1px solid rgba(163, 114, 248, 0.28);
  background: rgba(123, 74, 246, 0.08);
  transition: all 0.25s ease;
}

.back-link:hover {
  color: #F3F6FE;
  border-color: rgba(196, 159, 255, 0.5);
  background: rgba(123, 74, 246, 0.16);
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
