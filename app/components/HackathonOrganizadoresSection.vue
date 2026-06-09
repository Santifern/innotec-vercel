<script setup lang="ts">
const scrollInViewOptions = { once: true, amount: 0.28, margin: '0px 0px -12% 0px' as const }
const staggerInViewOptions = { once: true, amount: 0.35, margin: '0px 0px -10% 0px' as const }
const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]

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

const organizadores = [
  {
    name: 'Fabricio Chase',
    role: 'Director de Hackathon',
    label: 'ORGANIZADOR',
    image: '/images/hackathon/org-fabricio.png', // Reemplazar con ruta real
    fallbackColor: '#e0e0e0'
  },
  {
    name: 'Victoria Paredes',
    role: 'Directora de Hackathon',
    label: 'ORGANIZADORA',
    image: '/images/hackathon/org-victoria.png', // Reemplazar con ruta real
    fallbackColor: '#d5d5d5'
  },
  {
    name: 'Juan León',
    role: 'Director de Hackathon',
    label: 'ORGANIZADOR',
    image: '/images/hackathon/org-juan.png', // Reemplazar con ruta real
    fallbackColor: '#ebebeb'
  }
]
</script>

<template>
  <div class="org-section">
    <Motion v-bind="scrollMotion()" class="org-header">
      <div class="org-title-line" />
      <h2 class="org-title">Organizadores</h2>
      <p class="org-subtitle">El equipo detrás del Hackathon INNOTEC 2026</p>
    </Motion>

    <div class="org-grid">
      <Motion
        v-for="(org, index) in organizadores"
        :key="org.name"
        v-bind="staggerMotion(index)"
        class="org-card"
      >
        <div class="org-img-wrapper" :style="{ backgroundColor: org.fallbackColor }">
          <!-- TODO: Update src when images are available -->
          <NuxtImg
            v-if="org.image"
            :src="org.image"
            :alt="org.name"
            class="org-img"
            loading="lazy"
            format="webp"
            onerror="this.style.display='none'"
          />
        </div>
        <div class="org-info">
          <span class="org-label">{{ org.label }}</span>
          <h3 class="org-name">{{ org.name }}</h3>
          <p class="org-role">{{ org.role }}</p>
        </div>
      </Motion>
    </div>
  </div>
</template>

<style scoped>
.org-section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.org-header {
  text-align: center;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.org-title-line {
  width: 2.5rem;
  height: 2px;
  border-radius: 100px;
  background: linear-gradient(90deg, #6649f6, #a372f8);
  margin-bottom: 0.5rem;
  box-shadow: 0 0 10px rgba(163, 114, 248, 0.8);
}

.org-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 900;
  margin: 0;
  color: #F3F6FE;
  line-height: 1.1;
}

.org-subtitle {
  font-size: 0.95rem;
  color: rgba(208, 190, 246, 0.75);
  margin: 0;
}

.org-grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.org-card {
  background: rgba(10, 6, 26, 0.8);
  border: 1px solid rgba(163, 114, 248, 0.2);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.org-img-wrapper {
  width: 100%;
  aspect-ratio: 3/4;
  position: relative;
  overflow: hidden;
  background: #e0e0e0; /* Placeholder color for images with transparent background */
}

.org-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.org-info {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.org-label {
  display: inline-block;
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.65rem;
  font-weight: 900;
  color: #a372f8;
  border: 1px solid rgba(163, 114, 248, 0.3);
  background: rgba(163, 114, 248, 0.08);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.85rem;
}

.org-name {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 900;
  color: #F3F6FE;
  margin: 0 0 0.2rem 0;
}

.org-role {
  font-size: 0.85rem;
  color: #7B9CF8;
  margin: 0;
}
</style>
