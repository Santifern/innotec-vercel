<script setup lang="ts">

type WindowWithIdleCallback = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout?: number }) => number
}

definePageMeta({
  colorMode: 'dark'
})

const fallbackPage = {
  seo: {
    title: 'INNOTEC 2026 - Congreso de Tecnologia e Innovacion',
    description: 'El congreso anual de innovacion y tecnologia organizado por estudiantes de la Facultad de Ciencias y Tecnologia de la Universidad Catolica del Paraguay. 20 de agosto de 2026.'
  },
  title: 'Innovar para transformar:\ndel conocimiento a la accion',
  description: 'INNOTEC es el congreso anual de tecnologia e innovacion organizado por estudiantes de la Facultad de Ciencias y Tecnologia de la Universidad Catolica del Paraguay. Un espacio para aprender, colaborar y liderar el cambio.',
  hero: {
    headline: '20 y 21 de agosto, 2026 - Asuncion, Paraguay',
    links: [
      {
        label: 'Inscribete ahora',
        color: 'primary',
        size: 'xl',
        to: '/inscripciones'
      },
      {
        label: 'Conoce mas',
        size: 'xl',
        color: 'neutral',
        variant: 'soft',
        to: '#acerca'
      }
    ]
  },
  features: {
    headline: 'Actividades',
    title: 'Tres experiencias, un solo evento.',
    description: 'INNOTEC 2026 te ofrece diferentes formatos para aprender, conectar y crecer en las areas de Tecnologia, Ingenieria, Arquitectura y Diseno.',
    items: [
      {
        icon: 'i-lucide-mic-2',
        title: 'Charlas con Nuevas Propuestas',
        description: 'Expertos nacionales e internacionales comparten sus conocimientos y visiones sobre las ultimas tendencias en tecnologia e innovacion.'
      },
      {
        icon: 'i-lucide-wrench',
        title: 'Talleres Interactivos',
        description: 'Sesiones practicas donde aprenderas herramientas y tecnicas aplicadas directamente en proyectos reales.'
      },
      {
        icon: 'i-lucide-building-2',
        title: 'Visitas Tecnicas',
        description: 'Recorridos a instalaciones y empresas referentes del sector tecnologico para conocer de cerca como se aplica la innovacion.'
      }
    ]
  },
  metrics: {
    headline: 'INNOTEC en cifras',
    title: 'Un congreso disenado para inspirar.',
    description: 'Cada edicion de INNOTEC conecta a estudiantes, profesionales y expertos en un espacio de aprendizaje y colaboracion unico en Paraguay.',
    items: [
      {
        value: '2026',
        label: 'Edicion anual',
        class: 'text-primary'
      },
      {
        value: '3',
        label: 'Actividades principales',
        class: 'text-info'
      },
      {
        value: '100%',
        label: 'Organizado por estudiantes',
        class: 'text-success'
      },
      {
        value: '1 dia',
        label: 'Intenso de aprendizaje',
        class: 'text-warning'
      }
    ]
  },
  cta: {
    title: '¿Listo para \nser parte?',
    description: 'Unete al congreso de tecnologia e innovacion mas importante del Paraguay estudiantil. Inscripcion abierta para estudiantes y profesionales.',
    command: '20 y 21 de agosto - Asuncion, Paraguay',
    links: [
      {
        label: 'Inscribete al INNOTEC 2026',
        color: 'primary',
        to: '/inscripciones'
      }
    ]
  }
} as const

const page = ref(fallbackPage)

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const heroTitle = computed(() => {
  const [primary = '', ...secondaryParts] = (page.value?.title ?? '').split('\n')

  return {
    primary,
    secondary: secondaryParts.join(' ').trim()
  }
})



const showDeferredSections = ref(false)
const scrollMotion = useScrollMotionAdvanced
const staggerMotion = (index: number = 0) => useStaggerMotionAdvanced(index, 0)

const activityImages = [
  {
    src: '/images/innotec/activity-charlas.webp',
    alt: 'Charla de INNOTEC en auditorio'
  },
  {
    src: '/images/innotec/activity-talleres.webp',
    alt: 'Taller interactivo de INNOTEC'
  },
  {
    src: '/images/innotec/activity-visita-tecnica.webp',
    alt: 'Visita tecnica de INNOTEC'
  }
]

function getActivityImage(index: number) {
  return activityImages[index] ?? activityImages[0]!
}

function updateObjectiveHover(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--hover-x', `${event.clientX - rect.left}px`)
  card.style.setProperty('--hover-y', `${event.clientY - rect.top}px`)
}

function resetObjectiveHover(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement
  card.style.removeProperty('--hover-x')
  card.style.removeProperty('--hover-y')
}

onMounted(() => {
  const revealDeferredSections = () => {
    showDeferredSections.value = true
  }
  const browserWindow = window as WindowWithIdleCallback

  if (browserWindow.requestIdleCallback) {
    browserWindow.requestIdleCallback(revealDeferredSections, { timeout: 900 })
    return
  }

  window.setTimeout(revealDeferredSections, 160)
})
</script>

<template>
  <div
    v-if="page"
    class="innotec-page"
  >
    <HeroSection
      id="inicio"
      logo-src="/logo-innotec-blanco.svg"
      logo-alt="INNOTEC"
      :title-primary="heroTitle.primary"
      :title-secondary="heroTitle.secondary"
      :description="page.description"
      target-date="2026-08-20T00:00:00"
    />

    <!-- ¿Qué es Innotec? -->
    <section
      v-if="showDeferredSections"
      id="acerca"
      class="innotec-section intro-section"
    >
      <div class="section-container">
        <div class="intro-split">
          <!-- LEFT: title + text -->
          <Motion
            v-bind="scrollMotion()"
            class="intro-left"
          >
            <h2 class="section-title intro-title">
              ¿Qué es Innotec?
            </h2>
            <div class="intro-text">
              <p>
                INNOTEC es el congreso anual organizado por estudiantes de la Facultad de Ciencias y Tecnología de la Universidad Católica "Nuestra Señora de la Asunción" de Paraguay.
              </p>
              <p>
                Es un espacio que fomenta la innovación, la colaboración y el desarrollo de nuevas ideas y soluciones tecnológicas entre estudiantes y profesionales expertos en las áreas de Tecnología, Ingeniería, Arquitectura y Diseño.
                <br>
                Ampliando sus horizontes y preparándolos para liderar el cambio en sus respectivas áreas.
              </p>
              <p>
                Cada edición se enfoca en temáticas relevantes basados en la innovación y la tecnología, brindando una plataforma de aprendizaje, colaboración y desarrollo de soluciones innovadoras. El INNOTEC conecta a los estudiantes con expertos nacionales e internacionales.
              </p>
            </div>
          </Motion>

          <!-- RIGHT: image -->
          <Motion
            v-bind="scrollMotion(0.18)"
            class="intro-image-col"
          >
            <div class="intro-image-frame">
              <div class="intro-image-glow" />
              <NuxtImg
                src="/images/innotec/innotec-page.jpeg"
                alt="Evento INNOTEC — congreso de tecnología e innovación"
                class="intro-image"
                loading="lazy"
                decoding="async"
              />
              <div class="intro-image-overlay" />
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div
      v-if="showDeferredSections"
      class="section-divider"
    />

    <!-- ¿Cuáls son sus objetivos y actividades? -->
    <section
      v-if="showDeferredSections"
      id="acerca-objetivos"
      class="innotec-section objectives-section"
    >
      <div class="section-container objectives-content">
        <Motion
          v-bind="scrollMotion()"
          class="section-header"
        >
          <h2 class="section-title">
            <span class="objectives-title-line">¿Cuáles son</span>
            <span class="objectives-title-line">sus</span>
            <span class="objectives-title-line">objetivos y</span>
            <span class="objectives-title-line">actividades?</span>
          </h2>
        </Motion>

        <Motion
          v-bind="scrollMotion(0.15)"
          class="objectives-list"
        >
          <p class="objectives-kicker">
            Con el Innotec se busca:
          </p>
          <ul class="objectives-ul">
            <li
              @pointermove="updateObjectiveHover"
              @pointerleave="resetObjectiveHover"
            >
              <span class="objective-card-text">
                Fomentar la innovación, la creatividad y el crecimiento personal y profesional en las áreas de ingeniería, arquitectura y diseño.
              </span>
            </li>
            <li
              @pointermove="updateObjectiveHover"
              @pointerleave="resetObjectiveHover"
            >
              <span class="objective-card-text">
                Brindar una plataforma de intercambio de conocimientos y experiencias en el ámbito científico y tecnológico.
              </span>
            </li>
            <li
              @pointermove="updateObjectiveHover"
              @pointerleave="resetObjectiveHover"
            >
              <span class="objective-card-text">
                Inspirar a los jóvenes estudiantes a explorar nuevas posibilidades en sus respectivas carreras, fuera del aula.
              </span>
            </li>
          </ul>
        </Motion>

        <Motion
          id="actividades"
          v-bind="scrollMotion(0.25)"
          class="activities-intro"
        >
          <p class="activities-label">
            Y este año ofrece tres actividades:
          </p>
        </Motion>

        <div class="features-grid">
          <Motion
            v-for="(feature, index) in page.features.items"
            :key="feature.title"
            v-bind="staggerMotion(index)"
          >
            <div
              class="feature-card"
              @pointermove="updateObjectiveHover"
              @pointerleave="resetObjectiveHover"
            >
              <figure
                class="feature-card-media"
                :class="`feature-card-media--${index}`"
              >
                <NuxtImg
                  :src="getActivityImage(index).src"
                  :alt="getActivityImage(index).alt"
                  class="feature-card-image"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <h3 class="feature-card-title">
                {{ feature.title }}
              </h3>
              <p class="feature-card-desc">
                {{ feature.description }}
              </p>
              <div class="feature-card-glow" />
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div
      v-if="showDeferredSections"
      class="section-divider"
    />

    <LazySharedSponsorMarquee v-if="showDeferredSections" />

    <!-- Inscription CTA section -->
    <section
      v-if="showDeferredSections"
      id="inscripcion"
      class="innotec-section cta-section"
    >
      <!-- Background effects -->
      <div class="cta-bg-glow" />

      <div class="section-container cta-container">
        <Motion
          v-bind="scrollMotion()"
          class="cta-content"
        >
          <span class="section-label">¿Listo para unirte?</span>
          <h2 class="cta-title">
            {{ page.cta.title }}
          </h2>
          <p class="cta-description">
            {{ page.cta.description }}
          </p>

          <div class="cta-date-chip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="chip-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
            {{ page.cta.command }}
          </div>

          <div class="cta-actions">
            <a
              v-for="link in page.cta.links"
              :key="link.label"
              :href="link.to"
              class="hero-btn hero-btn--primary cta-btn"
            >
              {{ link.label }}
            </a>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>


<style scoped>
/* ===== PAGE BASE ===== */
.innotec-page {
  position: relative;
  background: #080C16;
  min-height: 100vh;
  overflow: hidden;
}

.innotec-page::before,
.innotec-page::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.innotec-page::before {
  z-index: 0;
  background-image:
    linear-gradient(rgba(25, 68, 240, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(25, 68, 240, 0.055) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0.86) 42%, rgba(0, 0, 0, 0.72) 100%);
}

.innotec-page::after {
  z-index: 1;
  background:
    radial-gradient(circle at 14% 18%, rgba(123, 138, 247, 0.85) 0 2px, rgba(123, 138, 247, 0.22) 3px, transparent 10px),
    radial-gradient(circle at 78% 24%, rgba(25, 68, 240, 0.9) 0 2px, rgba(25, 68, 240, 0.22) 3px, transparent 11px),
    radial-gradient(circle at 88% 56%, rgba(243, 246, 254, 0.8) 0 2px, rgba(243, 246, 254, 0.18) 3px, transparent 10px),
    radial-gradient(circle at 22% 74%, rgba(25, 68, 240, 0.72) 0 1px, rgba(25, 68, 240, 0.2) 3px, transparent 9px),
    radial-gradient(ellipse at 50% 16%, rgba(25, 68, 240, 0.12), transparent 40%);
}

.hero-section,
.neon-divider,
.section-divider,
.innotec-section {
  position: relative;
  z-index: 2;
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

/* ===== ¿QUÉ ES INNOTEC? — SPLIT LAYOUT ===== */
.intro-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

@media (min-width: 860px) {
  .intro-split {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: stretch;
  }
}

/* Left column */
.intro-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: clamp(1.5rem, 3vw, 2rem);
}

.intro-title {
  align-self: center;
  margin: 0 !important;
  max-width: 9.5ch;
  font-size: clamp(3.25rem, 10vw, 5.55rem);
  line-height: 0.95;
  text-align: center;
}

@media (min-width: 768px) {
  .intro-title {
    font-size: clamp(4.2rem, 6.8vw, 5.55rem);
  }
}

.intro-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.intro-text p {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.9375rem;
  line-height: 1.75;
  color: rgba(203, 209, 251, 0.72);
  margin: 0;
}

/* Right column — image */
.intro-image-col {
  --intro-image-offset: 0rem;
  --intro-image-extra: 0rem;

  width: 100%;
  display: flex;
  align-items: stretch;
  padding-top: var(--intro-image-offset);
}

.intro-image-frame {
  position: relative;
  width: 100%;
  height: calc(100% - var(--intro-image-offset) + var(--intro-image-extra));
  min-height: 360px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(102, 73, 246, 0.28),
    0 4px 40px rgba(0, 0, 0, 0.55),
    0 0 60px rgba(102, 73, 246, 0.14);
  transition: box-shadow 0.35s ease, transform 0.35s ease;
}

.intro-image-frame:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 0 1px rgba(102, 73, 246, 0.48),
    0 8px 52px rgba(0, 0, 0, 0.62),
    0 0 80px rgba(102, 73, 246, 0.22);
}

/* Ambient glow behind the frame */
.intro-image-glow {
  position: absolute;
  inset: -20px;
  z-index: -1;
  border-radius: 24px;
  background: radial-gradient(ellipse at 50% 60%, rgba(102, 73, 246, 0.22), transparent 68%);
  pointer-events: none;
  filter: blur(24px);
}

.intro-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

@media (min-width: 860px) {
  .intro-image-col {
    --intro-image-offset: 0rem;
    --intro-image-extra: 0rem;
  }
}

/* Subtle gradient overlay at bottom edge for depth */
.intro-image-overlay {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background:
    linear-gradient(180deg, transparent 55%, rgba(8, 10, 22, 0.45) 100%),
    radial-gradient(ellipse at 80% 10%, rgba(102, 73, 246, 0.12), transparent 50%);
  pointer-events: none;
}

.features-grid {
  --features-gap: clamp(1rem, 2.5vw, 1.35rem);

  display: grid;
  grid-template-columns: 1fr;
  gap: var(--features-gap);
  align-items: stretch;
}

.features-grid > * {
  min-width: 0;
}

@media (min-width: 700px) {
  .features-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1080px) {
  .features-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.feature-card {
  --feature-card-pad: clamp(0.95rem, 2.4vw, 1.2rem);

  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
  padding: 0 var(--feature-card-pad) clamp(1.15rem, 2.8vw, 1.35rem);
  background:
    linear-gradient(180deg, rgba(13, 20, 40, 0.86), rgba(9, 14, 28, 0.76));
  border: 1px solid rgba(123, 138, 247, 0.18);
  border-radius: 8px;
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.04);
  isolation: isolate;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(123, 138, 247, 0.55), transparent);
  opacity: 0.72;
}

.feature-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    linear-gradient(90deg, transparent, rgba(123, 138, 247, 0.16), transparent),
    radial-gradient(circle at var(--hover-x, 18%) var(--hover-y, 50%), rgba(25, 68, 240, 0.24), transparent 34%);
  opacity: 0;
  pointer-events: none;
  transform: translateX(-18%);
  transition: opacity 0.28s ease, transform 0.42s ease;
}

.feature-card:hover {
  background:
    linear-gradient(180deg, rgba(15, 23, 46, 0.9), rgba(10, 16, 32, 0.82));
  border-color: rgba(123, 138, 247, 0.68);
  transform: translateY(-5px);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28), 0 0 28px rgba(25, 68, 240, 0.22), inset 0 1px 0 rgba(243, 246, 254, 0.06);
}

.feature-card:hover::after {
  opacity: 1;
  transform: translateX(0);
}

.feature-card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background:
    radial-gradient(ellipse at 12% 0%, rgba(123, 138, 247, 0.18) 0%, transparent 58%),
    radial-gradient(ellipse at 84% 8%, rgba(25, 68, 240, 0.12) 0%, transparent 42%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.feature-card:hover .feature-card-glow {
  opacity: 1;
}

.feature-card-media {
  position: relative;
  z-index: 2;
  width: calc(100% + (var(--feature-card-pad) * 2));
  height: clamp(13.25rem, 30vw, 15.625rem);
  margin: 0 calc(var(--feature-card-pad) * -1) clamp(1.05rem, 2.5vw, 1.35rem);
  overflow: hidden;
  background: rgba(8, 12, 22, 0.72);
  border: 0;
  border-bottom: 1px solid rgba(123, 138, 247, 0.2);
  border-radius: 8px 8px 0 0;
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.05);
  isolation: isolate;
}

@media (min-width: 1080px) {
  .feature-card-media {
    height: 250px;
  }
}

.feature-card-media::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(180deg, rgba(4, 6, 13, 0.1), rgba(4, 6, 13, 0.56)),
    linear-gradient(135deg, rgba(8, 12, 22, 0.42), rgba(25, 68, 240, 0.2) 48%, rgba(55, 230, 241, 0.1)),
    radial-gradient(ellipse at 18% 12%, rgba(25, 68, 240, 0.22), transparent 44%),
    radial-gradient(ellipse at 86% 76%, rgba(123, 138, 247, 0.16), transparent 48%);
  mix-blend-mode: screen;
  pointer-events: none;
  opacity: 0.82;
  transition: opacity 0.35s ease;
}

.feature-card:hover .feature-card-media::before {
  opacity: 0.48;
}

.feature-card-media::after {
  content: '';
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 0;
  z-index: 2;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(123, 138, 247, 0.7), transparent);
}

.feature-card-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transform: scale(1.03);
  transition: transform 0.4s ease, filter 0.4s ease;
}

.feature-card:hover .feature-card-image {
  transform: scale(1.07);
  filter: saturate(1.08) brightness(1.04);
}

.feature-card-media--0 .feature-card-image {
  object-position: center 74%;
}

.feature-card-media--1 .feature-card-image {
  object-position: center 84%;
}

.feature-card-media--2 .feature-card-image {
  object-position: center 64%;
}

.feature-card-title {
  position: relative;
  z-index: 2;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.08rem);
  font-weight: 900;
  color: #F3F6FE;
  margin: 0 0 0.7rem;
  letter-spacing: 0;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.feature-card-desc {
  position: relative;
  z-index: 2;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(0.91rem, 1.35vw, 0.97rem);
  font-weight: 400;
  line-height: 1.65;
  color: rgba(203, 209, 251, 0.68);
  margin: 0;
}

/* ===== INTRO SECTION ===== */
.intro-section {
  position: relative;
  overflow: visible;
  min-height: 620px;
  display: flex;
  align-items: center;
  padding-inline: 1.5rem;
  background: transparent;
  isolation: isolate;
}

.intro-content {
  position: relative;
  display: grid;
  gap: 1.75rem;
  text-align: left;
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 0.4rem;
}

.intro-content .section-title {
  text-align: left;
}

.intro-heading-panel {
  position: relative;
  display: grid;
  gap: 1.65rem;
  align-content: center;
  isolation: isolate;
}

.intro-content .section-title {
  position: relative;
  z-index: 2;
  margin-bottom: 0;
  max-width: 10ch;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 3.1rem;
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: 0;
}

.intro-concepts {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 0.85rem;
  width: min(100%, 21.5rem);
}

.intro-concept {
  display: flex;
  align-items: center;
  gap: 1.15rem;
  min-height: 64px;
  padding: 0.82rem 1rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1.08rem;
  font-weight: 900;
  color: #F3F6FE;
  background:
    linear-gradient(90deg, rgba(16, 45, 122, 0.48), rgba(8, 20, 54, 0.54)),
    rgba(7, 12, 28, 0.5);
  border: 1px solid rgba(38, 117, 255, 0.72);
  border-radius: 8px;
  box-shadow: 0 0 24px rgba(25, 68, 240, 0.22), inset 0 1px 0 rgba(243, 246, 254, 0.08);
  backdrop-filter: blur(14px);
  transform: translateY(0);
  transition: transform 0.24s ease, border-color 0.24s ease, background 0.24s ease, box-shadow 0.24s ease;
}

.intro-concept:hover {
  transform: translateY(-4px);
  border-color: rgba(55, 230, 241, 0.78);
  background:
    linear-gradient(90deg, rgba(24, 73, 178, 0.58), rgba(9, 25, 68, 0.68)),
    rgba(7, 12, 28, 0.62);
  box-shadow:
    0 12px 34px rgba(0, 0, 0, 0.28),
    0 0 30px rgba(55, 230, 241, 0.2),
    inset 0 1px 0 rgba(243, 246, 254, 0.12);
}

.intro-concept-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  flex-shrink: 0;
  transition: transform 0.24s ease;
}

.intro-concept:hover .intro-concept-key {
  transform: scale(1.08);
}

.intro-concept-icon {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(55, 230, 241, 0.38));
  transition: filter 0.24s ease, transform 0.24s ease;
}

.intro-concept:hover .intro-concept-icon {
  transform: rotate(-5deg);
  filter: drop-shadow(0 0 12px rgba(55, 230, 241, 0.72));
}

.intro-text {
  display: grid;
  gap: 1.05rem;
  margin-top: 0;
}

.intro-text p {
  position: relative;
  padding: 0 0 0 1.25rem;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.76;
  color: rgba(224, 229, 255, 0.9);
  margin: 0;
  text-align: left;
  border-left: 2px solid rgba(25, 68, 240, 0.84);
}

.intro-text p:first-child {
  font-size: 1.12rem;
  line-height: 1.72;
  color: rgba(243, 246, 254, 0.94);
  border-left-color: rgba(25, 68, 240, 0.84);
  text-shadow: 0 0 18px rgba(25, 68, 240, 0.16);
}

.intro-pillars {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
}

.intro-pillar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 52px;
  padding: 0.75rem 0.9rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.92rem;
  font-weight: 900;
  color: rgba(243, 246, 254, 0.92);
  background:
    linear-gradient(135deg, rgba(16, 185, 129, 0.11), rgba(25, 68, 240, 0.08)),
    rgba(13, 20, 40, 0.48);
  border: 1px solid rgba(16, 185, 129, 0.28);
  border-radius: 8px;
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.04);
  cursor: pointer;
  overflow: hidden;
  outline: none;
  transform: translateX(0);
  transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
}

.intro-pillar::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, transparent 0%, rgba(55, 230, 241, 0.14) 45%, transparent 72%);
  opacity: 0;
  transform: translateX(-60%);
  transition: opacity 0.28s ease, transform 0.55s ease;
  pointer-events: none;
}

.intro-pillar:hover,
.intro-pillar:focus-visible,
.intro-pillar.active {
  transform: translateX(0.45rem);
  border-color: rgba(55, 230, 241, 0.42);
  box-shadow: 0 18px 42px rgba(18, 35, 88, 0.12), 0 0 28px rgba(55, 230, 241, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.intro-pillar:hover::before,
.intro-pillar:focus-visible::before,
.intro-pillar.active::before {
  opacity: 1;
  transform: translateX(45%);
}

.intro-pillar-icon {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  color: #34D399;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(52, 211, 153, 0.34);
  border-radius: 8px;
  box-shadow: 0 0 18px rgba(16, 185, 129, 0.12);
  transition: transform 0.28s ease, color 0.28s ease, border-color 0.28s ease, background 0.28s ease, box-shadow 0.28s ease;
}

.intro-pillar-icon svg {
  width: 1.05rem;
  height: 1.05rem;
}

.intro-pillar span:last-child {
  position: relative;
  z-index: 1;
}

.intro-pillar:hover .intro-pillar-icon,
.intro-pillar:focus-visible .intro-pillar-icon,
.intro-pillar.active .intro-pillar-icon {
  transform: scale(1.08) rotate(-4deg);
}

@media (min-width: 640px) {
  .intro-pillars {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 900px) {
  .intro-content {
    grid-template-columns: minmax(390px, 0.76fr) minmax(560px, 1.24fr);
    align-items: center;
    gap: 2.25rem;
    transform: translateY(-0.25rem);
    padding: 1.5rem 1rem;
  }

  .intro-heading-panel {
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    align-content: center;
    gap: 1.9rem;
    padding-left: 0;
  }

  .intro-content .section-title {
    font-size: clamp(4rem, 5vw, 4.8rem);
    transform: none;
    margin-left: 0;
  }

  .intro-concepts {
    margin-left: 0;
    width: 21.5rem;
  }

  .intro-text {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
    padding-top: 0;
  }

  .intro-text p {
    font-size: 1.03rem;
  }

  .intro-text p:first-child {
    font-size: 1.18rem;
    line-height: 1.7;
  }

  .intro-pillars {
    grid-template-columns: 1fr;
    margin-top: 0;
    max-width: 360px;
  }
}

@media (min-width: 1280px) {
  .intro-content {
    grid-template-columns: minmax(500px, 0.8fr) minmax(660px, 1.2fr);
    gap: 3rem;
    padding-inline: 1.5rem;
  }

  .intro-heading-panel {
    padding-left: 0;
  }

  .intro-concepts {
    width: 22rem;
  }
}

/* ===== OBJECTIVES SECTION ===== */
.objectives-section {
  position: relative;
}

.objectives-content {
  position: relative;
  display: grid;
  gap: 1.75rem;
}

.objectives-content .section-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 900;
}

.objectives-list {
  max-width: 100%;
  margin: 0 0 1.8rem;
}

.objectives-kicker {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1.65rem, 3.5vw, 2rem);
  font-weight: 900;
  line-height: 1.2;
  color: transparent;
  background: linear-gradient(90deg, #CBD1FB 0%, #7B8AF7 48%, #1944F0 100%);
  background-clip: text;
  margin: 0 0 1.1rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.objectives-ul {
  counter-reset: objective-card;
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 0.95rem);
  border-top: 0;
}

.objectives-ul li {
  position: relative;
  counter-increment: objective-card;
  display: grid;
  grid-template-columns: clamp(2.35rem, 7vw, 2.85rem) minmax(0, 1fr);
  align-items: center;
  gap: clamp(0.75rem, 2vw, 1rem);
  min-height: clamp(5.25rem, 13vw, 6.15rem);
  padding: clamp(0.9rem, 2.4vw, 1.05rem) clamp(0.95rem, 2.8vw, 1.2rem);
  overflow: hidden;
  isolation: isolate;
  border: 1px solid rgba(25, 68, 240, 0.24);
  border-radius: 8px;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(0.92rem, 1.6vw, 0.96rem);
  font-weight: 400;
  line-height: 1.62;
  color: rgba(203, 209, 251, 0.82);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.015) 48%, rgba(25, 68, 240, 0.035)),
    rgba(6, 10, 22, 0.58);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition:
    border-color 0.28s ease,
    box-shadow 0.28s ease,
    color 0.28s ease,
    transform 0.28s ease,
    background 0.28s ease;
}

.objectives-ul li::before {
  content: counter(objective-card, decimal-leading-zero);
  position: relative;
  z-index: 1;
  color: #F3F6FE;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1.65rem, 4.8vw, 2rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1;
  transition: color 0.28s ease, text-shadow 0.28s ease, transform 0.28s ease;
}

.objectives-ul li::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    linear-gradient(90deg, transparent, rgba(123, 138, 247, 0.16), transparent),
    radial-gradient(circle at var(--hover-x, 18%) var(--hover-y, 50%), rgba(25, 68, 240, 0.24), transparent 34%);
  opacity: 0;
  transform: translateX(-18%);
  transition: opacity 0.28s ease, transform 0.42s ease;
  pointer-events: none;
}

.objective-card-text {
  position: relative;
  z-index: 1;
  display: block;
}

.objectives-ul li:hover {
  border-color: rgba(123, 138, 247, 0.68);
  color: rgba(238, 243, 255, 0.94);
  background:
    linear-gradient(135deg, rgba(25, 68, 240, 0.13), rgba(255, 255, 255, 0.025) 52%, rgba(123, 138, 247, 0.08)),
    rgba(8, 13, 28, 0.72);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.075),
    0 14px 32px rgba(0, 0, 0, 0.2),
    0 0 28px rgba(25, 68, 240, 0.2);
  transform: translateY(-2px) translateX(0.18rem);
}

.objectives-ul li:hover::before {
  color: #7B8AF7;
  text-shadow: 0 0 22px rgba(25, 68, 240, 0.7);
  transform: translateY(-2px);
}

.objectives-ul li:hover::after {
  opacity: 1;
  transform: translateX(0);
}

.activities-intro {
  text-align: center;
  margin-bottom: 1.4rem;
}

.activities-label {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1.18rem, 1.6vw, 1.32rem);
  font-weight: 400;
  line-height: 1.35;
  color: rgba(203, 209, 251, 0.85);
  max-width: min(100%, 42rem);
  margin: 0 auto;
}

@media (min-width: 900px) {
  .objectives-content {
    grid-template-columns: minmax(360px, 1fr) minmax(0, 1.1fr);
    gap: 4rem;
    align-items: start;
  }

  .objectives-content .section-header {
    text-align: center;
    margin-bottom: 0;
    justify-items: center;
  }

  .objectives-content .section-title {
    max-width: 9ch;
    font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
    font-size: 4.35rem;
    font-weight: 900;
    line-height: 0.95;
    margin-bottom: 1.25rem;
    text-align: center;
  }

  .objectives-content .section-description {
    font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
    font-weight: 400;
    margin: 0;
  }

  .objectives-list {
    margin-top: 0.3rem;
  }

  .activities-intro,
  .features-grid {
    grid-column: 1 / -1;
  }
}

/* ===== CTA SECTION ===== */
.cta-section {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  min-height: clamp(30rem, 66vh, 42rem);
  display: flex;
  align-items: flex-start;
  background: transparent;
}

.cta-section::before,
.cta-section::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-section::before {
  z-index: -2;
  background-image:
    linear-gradient(180deg, rgba(8, 12, 22, 0.94) 0%, rgba(8, 12, 22, 0.46) 34%, rgba(8, 12, 22, 0.18) 58%, rgba(8, 12, 22, 0.82) 100%),
    url('/images/shared/vista_tierra.webp');
  background-size: cover;
  background-position: center bottom;
  filter: saturate(1.06) contrast(1.04) brightness(0.92);
  transform: scale(1.01);
  -webkit-mask-image:
    linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.28) 18%, black 36%, black 78%, rgba(0, 0, 0, 0.72) 90%, transparent 100%),
    radial-gradient(ellipse 86% 74% at 50% 58%, black 18%, rgba(0, 0, 0, 0.84) 54%, transparent 100%);
  mask-image:
    linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.28) 18%, black 36%, black 78%, rgba(0, 0, 0, 0.72) 90%, transparent 100%),
    radial-gradient(ellipse 86% 74% at 50% 58%, black 18%, rgba(0, 0, 0, 0.84) 54%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}

.cta-section::after {
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(8, 12, 22, 0.92) 0%, rgba(8, 12, 22, 0.48) 19%, rgba(8, 12, 22, 0.18) 46%, rgba(8, 12, 22, 0.44) 75%, #080C16 100%),
    radial-gradient(ellipse 78% 46% at 50% 40%, rgba(41, 105, 255, 0.22), rgba(25, 68, 240, 0.08) 45%, transparent 78%),
    radial-gradient(ellipse 58% 40% at 50% 62%, rgba(47, 180, 255, 0.13), rgba(47, 180, 255, 0.04) 48%, transparent 82%),
    radial-gradient(ellipse 92% 62% at 50% 53%, rgba(3, 7, 18, 0), rgba(3, 7, 18, 0.58) 88%);
}

.cta-bg-glow {
  position: absolute;
  z-index: 0;
  bottom: 16%;
  left: 50%;
  transform: translateX(-50%);
  width: min(52rem, 80vw);
  height: min(24rem, 38vw);
  border-radius: 50%;
  background: rgba(31, 183, 255, 0.16);
  filter: blur(90px);
  pointer-events: none;
}

.cta-container {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: clamp(2.25rem, 4.8vw, 4rem);
}

.cta-content {
  text-align: center;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-shadow: 0 0 22px rgba(2, 7, 18, 0.72);
}

.cta-content .section-label {
  font-size: 0.86rem;
  color: #1944f0;
}

.cta-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 2.75rem;
  font-weight: 900;
  color: #F3F6FE;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0;
  white-space: pre-line;
  text-shadow: 0 0 24px rgba(2, 7, 18, 0.84), 0 0 48px rgba(2, 7, 18, 0.6);
}

@media (min-width: 768px) {
  .cta-title {
    font-size: 3.7rem;
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
  text-shadow: 0 0 18px rgba(2, 7, 18, 0.82), 0 0 34px rgba(2, 7, 18, 0.62);
}

.cta-date-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.125rem;
  font-size: 0.875rem;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 700;
  color: #061954;
  background: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 100px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 10px 28px rgba(1, 8, 32, 0.22);
  backdrop-filter: blur(10px) saturate(1.08);
}

.chip-icon {
  width: 14px;
  height: 14px;
  color: #061954;
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

/* ===== COMPACT CONTENT FLOW ===== */
.section-divider {
  height: 0;
  background: transparent;
  margin: 0;
}

.intro-section,
.objectives-section,
.cta-section {
  padding-top: 3rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .intro-section,
  .objectives-section,
  .cta-section {
    padding-top: 3.5rem;
    padding-bottom: 4.75rem;
  }
}

/* ===== RESPONSIVE ABOUT FLOW ALIGNMENT ===== */
.intro-section,
.objectives-section {
  overflow: visible;
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}

.intro-section {
  overflow: visible;
  min-height: auto;
  padding-top: clamp(4rem, 7vw, 6.5rem);
  padding-bottom: clamp(2.75rem, 5vw, 4.5rem);
}

.objectives-section {
  padding-top: clamp(2.75rem, 5vw, 4.5rem);
  padding-bottom: clamp(1.5rem, 3vw, 2.75rem);
}

.objectives-section::before,
.objectives-section::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  z-index: 0;
  pointer-events: none;
}

.objectives-section::before {
  left: -6vw;
  right: -6vw;
  top: clamp(-20rem, -23vw, -11rem);
  height: clamp(26rem, 42vw, 40rem);
  background:
    radial-gradient(ellipse 46% 58% at 23% 18%, rgba(31, 82, 255, 0.1), transparent 72%),
    radial-gradient(ellipse 58% 54% at 58% 16%, rgba(25, 68, 240, 0.08), transparent 76%),
    radial-gradient(ellipse 42% 52% at 74% 34%, rgba(25, 68, 240, 0.04), transparent 74%);
  filter: blur(32px);
  opacity: 0.9;
}

.objectives-section::after {
  left: -6vw;
  right: -6vw;
  bottom: clamp(-10rem, -12vw, -5rem);
  height: clamp(16rem, 28vw, 26rem);
  background:
    radial-gradient(ellipse 58% 56% at 46% 58%, rgba(25, 68, 240, 0.06), transparent 76%),
    radial-gradient(ellipse 42% 54% at 18% 40%, rgba(31, 82, 255, 0.05), transparent 74%);
  filter: blur(28px);
  opacity: 0.86;
}

.intro-section .section-container,
.objectives-section .section-container {
  position: relative;
  z-index: 1;
  width: min(100%, 1100px);
  max-width: 1100px;
  margin-inline: auto;
}

.intro-content,
.objectives-content {
  width: 100%;
  max-width: none;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  padding: 0;
  transform: none;
}

.intro-heading-panel,
.objectives-content .section-header {
  position: relative;
  display: grid;
  align-content: start;
  justify-items: start;
  gap: clamp(1rem, 2vw, 1.65rem);
  min-width: 0;
  padding-left: clamp(1.15rem, 2.2vw, 1.75rem);
  text-align: left;
}

.objectives-content .section-header::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.08em;
  bottom: 0.15rem;
  width: 2px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(123, 138, 247, 0.18), rgba(25, 68, 240, 0.84), rgba(123, 138, 247, 0.22));
  box-shadow: 0 0 18px rgba(25, 68, 240, 0.28);
}

.intro-content .section-title,
.objectives-content .section-title {
  max-width: 9.5ch;
  margin: 0;
  font-size: clamp(2.75rem, 8.5vw, 4.8rem);
  line-height: 0.95;
  text-align: left;
  overflow-wrap: anywhere;
  text-wrap: balance;
}

.objectives-content .section-header {
  justify-items: center;
  text-align: center;
}

.objectives-content .section-title {
  width: fit-content;
  max-width: 100%;
  text-align: center;
  overflow-wrap: normal;
  text-wrap: wrap;
  word-break: normal;
}

.objectives-title-line {
  display: block;
  white-space: nowrap;
}

.intro-concepts {
  width: min(100%, 22rem);
  margin: 0;
}

.intro-text,
.objectives-list {
  width: 100%;
  min-width: 0;
  align-self: center;
  margin: 0;
}

.intro-text p,
.objectives-ul li {
  font-size: clamp(0.95rem, 1.2vw, 1.06rem);
}

.objectives-content .section-header {
  margin-bottom: 0;
}

.objectives-section .section-container.objectives-content {
  width: min(100%, 1100px);
  max-width: 1100px;
  margin-inline: auto;
}

.activities-intro {
  margin-top: clamp(2.5rem, 5vw, 4rem);
}

.objectives-content .features-grid {
  width: 100%;
  max-width: 1100px;
  margin-inline: auto;
  justify-content: center;
}

@media (min-width: 700px) and (max-width: 1079px) {
  .objectives-content .features-grid > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
    justify-self: center;
    width: min(100%, calc((100% - var(--features-gap)) / 2));
  }
}

@media (max-width: 699px) {
  .activities-intro {
    margin-top: clamp(2rem, 10vw, 2.75rem);
    margin-bottom: 1rem;
  }

  .feature-card:hover {
    transform: none;
  }

  .feature-card:hover .feature-card-image {
    transform: scale(1.03);
  }
}

@media (min-width: 760px) {
  .intro-content,
  .objectives-content {
    grid-template-columns: minmax(18rem, 0.86fr) minmax(0, 1.14fr);
    align-items: center;
    column-gap: clamp(2.5rem, 6vw, 4rem);
  }

  .objectives-list {
    --objectives-list-shift: clamp(2rem, 3vw, 3rem);

    width: calc(100% - var(--objectives-list-shift));
    margin-left: var(--objectives-list-shift);
  }

  .intro-content .section-title,
  .objectives-content .section-title {
    font-size: clamp(3.4rem, 5.7vw, 4.8rem);
  }

}

@media (min-width: 900px) {
  .objectives-content .activities-intro,
  .objectives-content .features-grid {
    grid-column: 1 / -1;
  }
}

@media (min-width: 1100px) {
  .intro-content,
  .objectives-content {
    grid-template-columns: minmax(23rem, 0.82fr) minmax(0, 1.18fr);
  }

  .intro-heading-panel,
  .objectives-content .section-header {
    padding-left: 1.85rem;
  }

}

@media (max-width: 759px) {
  .intro-concept {
    min-height: 58px;
    font-size: 1rem;
  }

  .intro-concept-key {
    width: 2rem;
    height: 2rem;
  }

  .objectives-content .section-header::before {
    left: 50%;
    top: auto;
    bottom: -0.6rem;
    width: min(8rem, 44vw);
    height: 2px;
    transform: translateX(-50%);
  }
}

@media (max-width: 899px) {
  .objectives-section {
    padding-top: clamp(2.5rem, 9vw, 4rem);
    padding-bottom: clamp(2.25rem, 9vw, 3.5rem);
  }

  .objectives-content {
    grid-template-columns: 1fr;
    gap: clamp(1.75rem, 7vw, 2.75rem);
    align-items: start;
  }

  .objectives-content .section-header {
    justify-items: center;
    padding-left: 0;
    text-align: center;
  }

  .objectives-content .section-title {
    max-width: 100%;
    font-size: clamp(2.35rem, 10vw, 3.25rem);
    text-align: center;
  }

  .objectives-list {
    width: min(100%, 42rem);
    margin-inline: auto;
    margin-left: auto;
  }

  .objectives-kicker {
    margin-bottom: clamp(0.9rem, 3vw, 1.15rem);
    text-align: center;
  }

  .objectives-ul li {
    min-height: auto;
  }
}

@media (min-width: 900px) and (max-width: 1099px) {
  .objectives-content {
    grid-template-columns: minmax(15rem, 0.82fr) minmax(0, 1.18fr);
    column-gap: clamp(2rem, 4vw, 3rem);
  }

  .objectives-content .section-title {
    max-width: 100%;
    font-size: clamp(3rem, 4.8vw, 3.65rem);
  }

  .objectives-list {
    --objectives-list-shift: clamp(1rem, 2.4vw, 1.75rem);
  }

  .objectives-kicker {
    font-size: clamp(1.65rem, 2.8vw, 1.9rem);
  }
}

@media (max-width: 420px) {
  .objectives-section {
    padding-inline: clamp(1rem, 5vw, 1.25rem);
  }

  .objectives-content .section-title {
    font-size: clamp(2rem, 9.8vw, 2.75rem);
  }

  .objectives-kicker {
    font-size: clamp(1.45rem, 7vw, 1.85rem);
  }

  .objectives-ul li {
    grid-template-columns: clamp(2.1rem, 12vw, 2.45rem) minmax(0, 1fr);
    padding: 0.95rem;
    line-height: 1.55;
  }
}

@media (max-width: 359px) {
  .objectives-ul li {
    grid-template-columns: 1fr;
    gap: 0.55rem;
  }
}

</style>
