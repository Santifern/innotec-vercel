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

const scrollMotion = useScrollMotionAdvanced
const staggerMotion = (index: number) => useStaggerMotionAdvanced(index, 0)

useSeoMeta({
  title: page.seo.title,
  ogTitle: page.seo.title,
  description: page.seo.description,
  ogDescription: page.seo.description
})

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
                />
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

    <section class="innotec-section activities-cta-section">
      <div class="activities-cta-glow" />
      <div class="section-container">
        <Motion
          v-bind="scrollMotion()"
          class="activities-cta"
        >
          <h2>¿Listo para participar?</h2>
          <p>No esperes más y registrate en INNOTEC 2026.</p>
          <NuxtLink
            to="/inscripciones"
            class="activities-cta-button"
          >
            Inscribite ahora
          </NuxtLink>
        </Motion>
      </div>
    </section>
  </div>
</template>

<style scoped>
.activities-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: #080C16;
}

.activities-page::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 10% 16%, rgba(25, 68, 240, 0.1), transparent 32%),
    radial-gradient(circle at 86% 22%, rgba(123, 138, 247, 0.12), transparent 34%),
    linear-gradient(180deg, rgba(8, 12, 22, 0), rgba(8, 12, 22, 0.88));
}

.innotec-section {
  position: relative;
  z-index: 1;
  padding: clamp(4rem, 8vw, 6.5rem) clamp(1.25rem, 4vw, 3rem);
}

.section-container {
  width: min(100%, 1120px);
  margin: 0 auto;
}

.activities-hero-section {
  padding-top: clamp(8rem, 13vw, 10rem);
  padding-bottom: clamp(3rem, 6vw, 5rem);
  isolation: isolate;
}

.activities-bg-grid {
  position: absolute;
  inset: 0;
  z-index: -2;
  background-image:
    linear-gradient(rgba(25, 68, 240, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(25, 68, 240, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0.82) 64%, transparent 100%);
}

.activities-bg-glow,
.activities-cta-glow {
  position: absolute;
  z-index: -1;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(88px);
}

.activities-bg-glow--left {
  top: 18%;
  left: -12rem;
  width: clamp(22rem, 42vw, 40rem);
  height: clamp(22rem, 42vw, 40rem);
  background: rgba(25, 68, 240, 0.16);
}

.activities-bg-glow--right {
  top: 4rem;
  right: -14rem;
  width: clamp(24rem, 46vw, 44rem);
  height: clamp(24rem, 46vw, 44rem);
  background: rgba(123, 138, 247, 0.13);
}

.activities-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 760px;
  margin-inline: auto;
  text-align: center;
}

.section-label {
  display: inline-block;
  margin: 0 0 0.85rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7B8AF7;
  text-shadow: 0 0 18px rgba(123, 138, 247, 0.34);
}

.activities-title {
  max-width: 12ch;
  margin: 0 0 1rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(2.8rem, 8vw, 5.2rem);
  font-weight: 900;
  line-height: 0.96;
  color: #F3F6FE;
  letter-spacing: 0;
  text-wrap: balance;
}

.activities-description {
  max-width: 620px;
  margin: 0;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1rem, 1.4vw, 1.1rem);
  font-weight: 400;
  line-height: 1.75;
  color: rgba(203, 209, 251, 0.72);
  text-wrap: balance;
}

.activities-section {
  padding-top: clamp(2.75rem, 5vw, 4.5rem);
}

.activities-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(4rem, 8vw, 6rem);
}

.activity-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.9fr);
  gap: clamp(2rem, 4.5vw, 3.5rem);
  align-items: center;
  overflow: visible;
  isolation: isolate;
  min-height: 26rem;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  transition: none;
}

.activity-card::before {
  display: none;
}

.activity-card:hover {
  transform: none;
}

.activity-card:hover::before {
  opacity: 0;
}

.activity-media {
  position: relative;
  grid-column: 2;
  grid-row: 1;
  z-index: 1;
  width: min(100%, 35rem);
  aspect-ratio: 1250 / 1550;
  min-height: 0;
  justify-self: end;
  margin: 0;
  overflow: hidden;
  background: rgba(8, 12, 22, 0.72);
  border: 1px solid rgba(102, 73, 246, 0.28);
  border-radius: 8px;
  box-shadow:
    0 0 0 1px rgba(102, 73, 246, 0.18),
    0 4px 40px rgba(0, 0, 0, 0.5),
    0 0 60px rgba(102, 73, 246, 0.14);
  transition: box-shadow 0.35s ease, transform 0.35s ease;
}

.activity-media::before {
  content: '';
  position: absolute;
  inset: -20px;
  z-index: -1;
  border-radius: 16px;
  background: radial-gradient(ellipse at 50% 60%, rgba(102, 73, 246, 0.22), transparent 68%);
  filter: blur(24px);
  pointer-events: none;
}

.activity-card:hover .activity-media {
  box-shadow:
    0 0 0 1px rgba(102, 73, 246, 0.48),
    0 8px 52px rgba(0, 0, 0, 0.62),
    0 0 80px rgba(102, 73, 246, 0.22);
  transform: translateY(-4px);
}

.activity-image {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: cover;
  border-radius: 8px;
  transform: scale(1.01);
  transition: transform 0.42s ease, filter 0.42s ease;
}

.activity-card:hover .activity-image {
  filter: saturate(1.08) brightness(1.04);
  transform: scale(1.07);
}

.activity-image-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, transparent 55%, rgba(8, 10, 22, 0.45) 100%),
    radial-gradient(circle at 18% 14%, rgba(25, 68, 240, 0.22), transparent 42%);
}

.activity-content {
  position: relative;
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.35rem;
  max-width: 42rem;
  padding: 0;
}

#talleres .activity-media {
  grid-column: 1;
  justify-self: start;
}

#talleres .activity-content {
  grid-column: 2;
}

.activity-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

.activity-title {
  margin: 0;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(2.35rem, 5.4vw, 4.25rem);
  font-weight: 900;
  line-height: 0.98;
  color: #F3F6FE;
  letter-spacing: 0;
  text-align: center;
  text-wrap: balance;
}

.activity-description {
  position: relative;
  margin: 0;
  padding: 1.15rem 1.2rem;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid rgba(25, 68, 240, 0.24);
  border-radius: 8px;
  background:
    linear-gradient(145deg, rgba(14, 21, 46, 0.72), rgba(8, 12, 22, 0.6));
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.045);
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.75);
}

.activity-detail {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: 1.15rem 1.2rem;
  border: 1px solid rgba(25, 68, 240, 0.24);
  border-radius: 8px;
  background:
    linear-gradient(145deg, rgba(14, 21, 46, 0.72), rgba(8, 12, 22, 0.6));
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.045);
}

.activity-description::after,
.activity-detail::after {
  position: absolute;
  inset: 0;
  z-index: 0;
  content: '';
  pointer-events: none;
  background:
    linear-gradient(90deg, transparent, rgba(123, 138, 247, 0.16), transparent),
    radial-gradient(circle at var(--hover-x, 18%) var(--hover-y, 50%), rgba(25, 68, 240, 0.24), transparent 34%);
  opacity: 0;
  transform: translateX(-18%);
  transition: opacity 0.28s ease, transform 0.42s ease;
}

.activity-card:hover .activity-description,
.activity-card:hover .activity-detail {
  border-color: rgba(123, 138, 247, 0.68);
  box-shadow: 0 0 28px rgba(25, 68, 240, 0.2), 0 14px 32px rgba(0, 0, 0, 0.22);
}

.activity-card:hover .activity-description::after,
.activity-card:hover .activity-detail::after {
  opacity: 1;
  transform: translateX(0);
}

.detail-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.98rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  color: #CBD1FB;
  text-transform: uppercase;
}

.detail-list {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.55rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.detail-list li {
  position: relative;
  padding-left: 1.35rem;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.58;
  color: rgba(203, 209, 251, 0.82);
}

.detail-list li::before {
  content: '';
  position: absolute;
  top: 0.62em;
  left: 0;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: #7B8AF7;
  box-shadow: 0 0 12px rgba(123, 138, 247, 0.58);
}

.activities-cta-section {
  padding-top: clamp(2rem, 5vw, 4rem);
  padding-bottom: clamp(5rem, 8vw, 7rem);
}

.activities-cta-glow {
  top: 50%;
  left: 50%;
  width: min(40rem, 78vw);
  height: min(22rem, 42vw);
  background: rgba(25, 68, 240, 0.18);
  transform: translate(-50%, -50%);
}

.activities-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 580px;
  margin: 0 auto;
  text-align: center;
}

.activities-cta h2 {
  margin: 0 0 0.85rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  line-height: 1.08;
  color: #F3F6FE;
  letter-spacing: 0;
}

.activities-cta p {
  margin: 0 0 1.7rem;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(203, 209, 251, 0.72);
}

.activities-cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.78rem 1.35rem;
  border: 1px solid rgba(123, 138, 247, 0.52);
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(25, 68, 240, 0.9), rgba(123, 138, 247, 0.34));
  color: #F3F6FE;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 900;
  line-height: 1.2;
  text-decoration: none;
  transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
}

.activities-cta-button:hover {
  border-color: rgba(203, 209, 251, 0.7);
  box-shadow: 0 0 26px rgba(25, 68, 240, 0.26);
  transform: translateY(-2px);
}

@media (max-width: 860px) {
  .activity-card {
    grid-template-columns: 1fr;
    gap: 1.6rem;
    min-height: auto;
  }

  .activity-content,
  .activity-media {
    grid-column: 1;
    grid-row: auto;
  }

  #talleres .activity-content {
    display: contents;
  }

  #talleres .activity-heading {
    grid-column: 1;
    grid-row: 1;
  }

  .activity-media {
    width: 100%;
    justify-self: stretch;
    aspect-ratio: 1250 / 1550;
    min-height: 0;
  }

  #talleres .activity-media {
    grid-column: 1;
    grid-row: 2;
    justify-self: stretch;
  }

  #talleres .activity-description {
    grid-column: 1;
    grid-row: 3;
  }

  #talleres .activity-detail {
    grid-column: 1;
    grid-row: 4;
  }
}

@media (prefers-reduced-motion: reduce) {
  .activity-card,
  .activity-card::before,
  .activity-image,
  .activities-cta-button {
    transition: none;
  }
}
</style>
