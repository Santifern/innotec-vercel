<script setup lang="ts">
definePageMeta({
  colorMode: 'dark',
  alias: ['/activities']
})

interface ActivityItem {
  id: string
  icon: string
  title: string
  image: string
  description: string
  learningPoints: string[]
}

const page = {
  seo: {
    title: 'Actividades - INNOTEC 2026',
    description: 'Conoce en detalle las charlas magistrales, talleres interactivos y visitas técnicas de INNOTEC 2026.'
  },
  headline: 'Conocé a fondo',
  title: 'Actividades en INNOTEC 2026',
  description: 'Sumergite en cada uno de los espacios que INNOTEC 2026 ofrece para aprender, conectar y crecer en las áreas de Tecnología, Ingeniería, Arquitectura y Diseño.',
  items: [
    {
      id: 'charlas',
      icon: 'i-lucide-mic-2',
      title: 'Charlas con Nuevas Propuestas',
      image: '/images/innotec/actividades/Charla.jpg',
      description: 'Expertos nacionales e internacionales comparten sus conocimientos y visiones sobre las últimas tendencias en tecnología e innovación. Cada charla es una oportunidad de aprender directamente de profesionales que están transformando la industria.',
      learningPoints: [
        'Tendencias actuales en la industria',
        'Casos de éxito de emprendedores',
        'Perspectivas sobre el futuro de la tecnología en tu carrera',
        'Opiniones actuales de expertos en el campo'
      ]
    },
    {
      id: 'talleres',
      icon: 'i-lucide-wrench',
      title: 'Talleres Interactivos',
      image: '/images/innotec/actividades/Taller.jpg',
      description: 'Sesiones prácticas donde aprenderás herramientas y técnicas aplicadas directamente en proyectos reales. Participá activamente en actividades conducidas por profesionales experimentados.',
      learningPoints: [
        'Herramientas y tecnologías prácticas',
        'Mejores prácticas de desarrollo',
        'Resolución de problemas reales',
        'Colaboración en equipo',
        'Proyectos innovadores'
      ]
    },
    {
      id: 'visitas-tecnicas',
      icon: 'i-lucide-building-2',
      title: 'Visitas Técnicas',
      image: '/images/innotec/actividades/Visita-Tecnica.jpg',
      description: 'Recorridos a instalaciones y empresas referentes de diversos sectores para conocer de cerca cómo se aplica la innovación en el mundo real.',
      learningPoints: [
        'Panorama de un entorno corporativo real',
        'Procesos y metodologías empresariales',
        'Tecnologías en uso en empresas líderes',
        'Networking directo con profesionales'
      ]
    }
  ] satisfies ActivityItem[]
} as const

const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]
const scrollInViewOptions = { once: true, amount: 0.28, margin: '0px 0px -12% 0px' as const }

useSeoMeta({
  title: page.seo.title,
  ogTitle: page.seo.title,
  description: page.seo.description,
  ogDescription: page.seo.description
})

function scrollMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 34, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    inViewOptions: scrollInViewOptions,
    transition: { duration: 0.82, delay, ease: smoothEase }
  }
}

function staggerMotion(index: number) {
  return {
    initial: { opacity: 0, y: 34, scale: 0.98, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    inViewOptions: scrollInViewOptions,
    transition: { duration: 0.82, delay: index * 0.12, ease: smoothEase }
  }
}

function updateCardHover(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()

  card.style.setProperty('--hover-x', `${event.clientX - rect.left}px`)
  card.style.setProperty('--hover-y', `${event.clientY - rect.top}px`)
}

function resetCardHover(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement

  card.style.removeProperty('--hover-x')
  card.style.removeProperty('--hover-y')
}
</script>

<template>
  <div class="activities-page">
    <section
      class="innotec-section activities-hero-section"
      aria-labelledby="activities-title"
    >
      <div class="activities-bg-grid" />
      <div class="activities-bg-glow activities-bg-glow--left" />
      <div class="activities-bg-glow activities-bg-glow--right" />

      <div class="section-container">
        <Motion
          v-bind="scrollMotion()"
          class="activities-hero"
        >
          <p class="section-label">
            {{ page.headline }}
          </p>
          <h1
            id="activities-title"
            class="activities-title"
          >
            {{ page.title }}
          </h1>
          <p class="activities-description">
            {{ page.description }}
          </p>
        </Motion>
      </div>
    </section>

    <section class="innotec-section activities-section">
      <div class="section-container">
        <div class="activities-grid">
          <Motion
            v-for="(activity, index) in page.items"
            :id="activity.id"
            :key="activity.id"
            v-bind="staggerMotion(index)"
            class="activity-card-wrapper"
          >
            <article
              class="activity-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <figure class="activity-media">
                <img
                  :src="activity.image"
                  :alt="activity.title"
                  class="activity-image"
                  width="1250"
                  height="1550"
                  loading="eager"
                  decoding="async"
                >
                <div class="activity-image-overlay" />
              </figure>

              <div class="activity-content">
                <div class="activity-heading">
                  <h2 class="activity-title">
                    {{ activity.title }}
                  </h2>
                </div>

                <p class="activity-description">
                  {{ activity.description }}
                </p>

                <div class="activity-detail">
                  <div class="detail-header">
                    <span>¿Qué me llevo?</span>
                  </div>
                  <ul class="detail-list">
                    <li
                      v-for="point in activity.learningPoints"
                      :key="point"
                    >
                      {{ point }}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </Motion>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="~/assets/css/pages/innotec-actividades.css"></style>
