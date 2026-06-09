<script setup lang="ts">
import CountdownTimer from '~/components/CountdownTimer.vue'
import SponsorMarquee from '~/components/SponsorMarquee.vue'

definePageMeta({
  layout: 'hackathon',
  colorMode: 'dark',
  section: 'hackathon'
})

const fallbackPage = {
  seo: {
    title: 'HACKATHON 2026 - El desafío de la innovación',
    description: 'Un evento intensivo de 48 horas donde equipos de desarrolladores, diseñadores e innovadores trabajan juntos para crear soluciones tecnológicas. 20 y 21 de agosto de 2026.'
  },
  title: 'Construye el futuro\nen 48 horas',
  description: 'HACKATHON 2026 es un evento intensivo de innovación donde participan equipos de desarrolladores, diseñadores e innovadores. Una oportunidad única para colaborar, aprender y demostrar tus habilidades en un ambiente de competencia amigable.',
  hero: {
    headline: '20 y 21 de agosto, 2026 - Asuncion, Paraguay',
    links: [
      {
        label: 'Inscribe tu equipo',
        color: 'primary',
        size: 'xl',
        to: '#inscripcion'
      },
      {
        label: 'Ver detalles',
        size: 'xl',
        color: 'neutral',
        variant: 'soft',
        to: '#que-es'
      }
    ]
  },
  features: {
    headline: 'Tracks de Hackathon',
    title: 'Tres categorías, infinitas posibilidades.',
    description: 'HACKATHON 2026 te desafía a resolver problemas reales en tres categorías diferentes. Elige la que más se alinea con tu pasión y demuestra tu creatividad.',
    items: [
      {
        icon: 'i-lucide-cpu',
        title: 'Track Desarrollo',
        description: 'Crea aplicaciones, servicios y soluciones de software innovadoras que resuelvan problemas del mundo real.'
      },
      {
        icon: 'i-lucide-palette',
        title: 'Track Diseño',
        description: 'Diseña experiencias, interfaces y soluciones visuales que sean no solo hermosas sino también funcionales.'
      },
      {
        icon: 'i-lucide-lightbulb',
        title: 'Track Innovación',
        description: 'Propón ideas disruptivas que combinen tecnología, emprendimiento y creatividad para transformar industrias.'
      }
    ]
  },
  metrics: {
    headline: 'HACKATHON en cifras',
    title: 'Un evento diseñado para innovadores.',
    description: 'HACKATHON 2026 conecta a desarrolladores, diseñadores e innovadores en un espacio intensivo de 48 horas donde la creatividad y la tecnología se encuentran.',
    items: [
      {
        value: '48h',
        label: 'De hackeo intenso',
        class: 'text-primary'
      },
      {
        value: '3',
        label: 'Tracks disponibles',
        class: 'text-info'
      },
      {
        value: '∞',
        label: 'Soluciones posibles',
        class: 'text-success'
      },
      {
        value: 'Tu equipo',
        label: 'Liderando cambio',
        class: 'text-warning'
      }
    ]
  },
  cta: {
    title: '¿Listo para competir?',
    description: 'Únete al hackathon de innovación más importante del Paraguay. Forma o únete a un equipo y demuestra tus habilidades en un ambiente colaborativo y desafiante.',
    command: '20 y 21 de agosto - Asuncion, Paraguay',
    links: [
      {
        label: 'Inscribe tu equipo ahora',
        color: 'primary',
        to: '#inscripcion'
      }
    ]
  }
} as const

const { data: page } = await useAsyncData('hackathon', async () => fallbackPage, {
  default: () => fallbackPage
})

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

const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]
const scrollInViewOptions = { once: true, amount: 0.28, margin: '0px 0px -12% 0px' as const }
const staggerInViewOptions = { once: true, amount: 0.35, margin: '0px 0px -10% 0px' as const }

const _activityImages = [
  {
    src: '/images/hackathon/activity-charlas.webp',
    alt: 'Competencia de desarrollo en hackathon'
  },
  {
    src: '/images/hackathon/activity-talleres.webp',
    alt: 'Competencia de diseño en hackathon'
  },
  {
    src: '/images/hackathon/activity-visita-tecnica.webp',
    alt: 'Competencia de innovación en hackathon'
  }
]

function _getActivityImage(index: number) {
  return _activityImages[index] ?? _activityImages[0]!
}

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

function updateMethodologyHover(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--hover-x', `${event.clientX - rect.left}px`)
  card.style.setProperty('--hover-y', `${event.clientY - rect.top}px`)
}

function resetMethodologyHover(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement
  card.style.removeProperty('--hover-x')
  card.style.removeProperty('--hover-y')
}
</script>

<template>
  <div
    v-if="page"
    class="hackathon-page"
  >

    <HeroSection
      id="inicio"
      logo-src="/logo-hackathon-navbar.svg"
      logo-alt="Hackathon"
      :title-primary="heroTitle.primary"
      :title-secondary="heroTitle.secondary"
      :description="page.description"
      target-date="2026-08-20T00:00:00"
      countdown-theme="hackathon"
    />

    <!-- ¿Qué es? -->
    <section
      id="que-es"
      class="innotec-section intro-section"
    >
      <div class="section-container">
        <div class="hackathon-intro-split">
          <Motion
            v-bind="scrollMotion()"
            class="hackathon-intro-left"
          >
            <h2 class="section-title hackathon-intro-title">
              ¿Qué es<br>Hackathon?
            </h2>
            <div class="hackathon-intro-text">
              <p>
                HACKATHON es un espacio dirigido a estudiantes de diferentes carreras para la colaboración interdisciplinaria, donde se fomenta la creatividad y la innovación para resolver problemas reales.
              </p>
              <p>
                Durante el evento, los participantes trabajan en equipos para diseñar, construir y presentar soluciones en un ambiente de aprendizaje práctico, mentoría y trabajo colaborativo.
              </p>
              <p>
                Es una experiencia intensiva para desarrollar habilidades, conectar con otros talentos y transformar ideas en propuestas con impacto.
              </p>
            </div>
          </Motion>

          <Motion
            v-bind="scrollMotion(0.18)"
            class="hackathon-intro-image-col"
          >
            <div class="hackathon-intro-image-frame">
              <div class="hackathon-intro-image-glow" />
              <NuxtImg
                src="/images/hackathon/foto_hackathon.webp"
                alt="Estudiantes colaborando en el hackathon"
                class="hackathon-intro-image"
                loading="lazy"
                decoding="async"
              />
              <div class="hackathon-intro-image-overlay" />
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="section-divider"/>

    <!-- Metodología -->
    <section
      id="metodologia"
      class="innotec-section metodologia-section"
    >
      <div class="section-container">
        <Motion
          v-bind="scrollMotion()"
          class="metodologia-card"
        >
          <h2 class="section-title section-title--centered metodologia-title">
            ¿En qué consiste el proceso de trabajo de los equipos?
          </h2>
          <div class="metodologia-list-panel">
            <p class="metodologia-kicker">
              Metodología
            </p>
            <ol class="metodologia-list">
              <Motion
                v-bind="staggerMotion(0)"
                tag="li"
                class="metodologia-item"
                @pointermove="updateMethodologyHover"
                @pointerleave="resetMethodologyHover"
              >
                <span class="metodologia-number">01</span>
                <div class="metodologia-item-content">
                  <strong class="metodologia-item-title">Formación de Equipos:</strong>
                  Se forman equipos con estudiantes de diversas disciplinas para aprovechar diferente perspectivas y habilidades. ¡Todos tienen un rol crucial!
                </div>
              </Motion>
              <Motion
                v-bind="staggerMotion(1)"
                tag="li"
                class="metodologia-item"
                @pointermove="updateMethodologyHover"
                @pointerleave="resetMethodologyHover"
              >
                <span class="metodologia-number">02</span>
                <div class="metodologia-item-content">
                  <strong class="metodologia-item-title">Identificación del Problema:</strong>
                  Los equipos tendrán una problemática, un desafío real, sobre el cual trabajar para desarrollar una solución innovadora. (Problemática brindada por el sponsor)
                </div>
              </Motion>
              <Motion
                v-bind="staggerMotion(2)"
                tag="li"
                class="metodologia-item"
                @pointermove="updateMethodologyHover"
                @pointerleave="resetMethodologyHover"
              >
                <span class="metodologia-number">03</span>
                <div class="metodologia-item-content">
                  <strong class="metodologia-item-title">Creación y Desarrollo:</strong>
                  En un ambiente colaborativo y con mentoría personalizada, los equipos diseñan y desarrollan soluciones creativas.
                </div>
              </Motion>
              <Motion
                v-bind="staggerMotion(3)"
                tag="li"
                class="metodologia-item"
                @pointermove="updateMethodologyHover"
                @pointerleave="resetMethodologyHover"
              >
                <span class="metodologia-number">04</span>
                <div class="metodologia-item-content">
                  <strong class="metodologia-item-title">Presentación Final:</strong>
                  Los equipos presentan sus soluciones ante un panel de expertos. Se evalúa la creatividad, viabilidad y el impacto potencial. ¡Los mejores proyectos son premiados!
                </div>
              </Motion>
            </ol>
          </div>
        </Motion>
      </div>
    </section>


    <!-- Section divider -->
    <div class="section-divider" />

    <SponsorMarquee />

    <!-- Inscription CTA section -->
    <section
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
          <span class="section-label">¿Quieres participar?</span>
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
/* ===== HACKATHON INTRO SPLIT ===== */
.hackathon-intro-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

@media (min-width: 860px) {
  .hackathon-intro-split {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: stretch;
  }
}

.hackathon-intro-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(1.5rem, 3vw, 2rem);
}

.hackathon-intro-title {
  margin: 0 !important;
  max-width: 9.5ch;
  font-size: clamp(3.25rem, 10vw, 5.55rem);
  line-height: 0.95;
  text-align: left;
}

@media (min-width: 768px) {
  .hackathon-intro-title {
    font-size: clamp(4.2rem, 6.8vw, 5.55rem);
  }
}

.hackathon-intro-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hackathon-intro-text p {
  position: relative;
  margin: 0;
  padding-left: 1rem;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.97rem;
  line-height: 1.75;
  color: #F3F6FE;
}

.hackathon-intro-text p::before {
  position: absolute;
  left: 0;
  top: 0.15em;
  bottom: 0.18em;
  width: 2px;
  content: '';
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(187, 153, 248, 0.16), rgba(163, 114, 248, 0.78), rgba(123, 74, 246, 0.22));
  box-shadow: 0 0 18px rgba(163, 114, 248, 0.22);
}

.hackathon-intro-text p:first-child {
  color: #F3F6FE;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 400;
}

.hackathon-intro-image-col {
  width: 100%;
  display: flex;
  align-items: stretch;
}

.hackathon-intro-image-frame {
  position: relative;
  width: 100%;
  min-height: 360px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow:
    0 0 0 1px rgba(163, 114, 248, 0.3),
    0 4px 40px rgba(0, 0, 0, 0.55),
    0 0 60px rgba(163, 114, 248, 0.14);
  transition: box-shadow 0.35s ease, transform 0.35s ease;
}

.hackathon-intro-image-frame:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 0 1px rgba(163, 114, 248, 0.5),
    0 8px 52px rgba(0, 0, 0, 0.62),
    0 0 80px rgba(163, 114, 248, 0.22);
}

.hackathon-intro-image-glow {
  position: absolute;
  inset: -20px;
  z-index: -1;
  border-radius: 24px;
  background: radial-gradient(ellipse at 50% 60%, rgba(163, 114, 248, 0.24), transparent 68%);
  filter: blur(24px);
  pointer-events: none;
}

.hackathon-intro-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.hackathon-intro-image-overlay {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background:
    linear-gradient(180deg, transparent 55%, rgba(8, 10, 22, 0.45) 100%),
    radial-gradient(ellipse at 80% 10%, rgba(163, 114, 248, 0.12), transparent 50%);
  pointer-events: none;
}

/* ===== METODOLOGÍA ===== */
.metodologia-section {
  padding-top: 3rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .metodologia-section {
    padding-top: 3.5rem;
    padding-bottom: 4.75rem;
  }
}

.metodologia-card {
  position: relative;
  display: grid;
  gap: 1.75rem;
  width: min(100%, 1100px);
  max-width: 1100px;
  margin-inline: auto;
}

@media (min-width: 768px) {
  .metodologia-card {
    grid-template-columns: minmax(16rem, 0.78fr) minmax(0, 1.22fr);
    align-items: center;
    column-gap: clamp(2.5rem, 6vw, 4rem);
  }
}

.metodologia-title {
  position: relative;
  max-width: 9.8ch;
  margin: 0;
  padding-left: clamp(1.15rem, 2.2vw, 1.85rem);
  text-align: left;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(2.6rem, 7vw, 4.75rem);
  font-weight: 900;
  line-height: 0.95;
  color: #F3F6FE;
}

.metodologia-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.08em;
  bottom: 0.15rem;
  width: 2px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(188, 154, 255, 0.1), rgba(163, 114, 248, 0.78), rgba(123, 74, 246, 0.18));
  box-shadow: 0 0 18px rgba(163, 114, 248, 0.24);
}

.metodologia-list-panel {
  display: grid;
  gap: 1rem;
  min-width: 0;
}

.metodologia-kicker {
  margin: 0 0 0.15rem;
  margin-bottom: 0.6rem;
  text-align: left;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(2rem, 3.6vw, 2.8rem);
  font-weight: 900;
  line-height: 1.1;
  color: transparent;
  background: linear-gradient(135deg, #d0bef6 0%, #a372f8 42%, #7b4af6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.metodologia-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
}

.metodologia-item {
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 3.2rem minmax(0, 1fr);
  gap: 1rem;
  min-height: 6.2rem;
  padding: 1.2rem 1.35rem;
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015) 48%, rgba(163, 114, 248, 0.08)),
    rgba(10, 9, 25, 0.66);
  border: 1px solid rgba(163, 114, 248, 0.28);
  border-radius: 8px;
  font-family: 'Fractul', 'Fractul Regular', 'Inter', system-ui, sans-serif;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.045);
  transition:
    border-color 0.28s ease,
    box-shadow 0.28s ease,
    color 0.28s ease,
    transform 0.28s ease,
    background 0.28s ease;
}

.metodologia-item::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    linear-gradient(90deg, transparent, rgba(196, 159, 255, 0.18), transparent),
    radial-gradient(circle at var(--hover-x, 18%) var(--hover-y, 50%), rgba(163, 114, 248, 0.3), transparent 34%);
  opacity: 0;
  transform: translateX(-18%);
  transition: opacity 0.28s ease, transform 0.42s ease;
  pointer-events: none;
}

.metodologia-number {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: center;
  position: relative;
  z-index: 1;
  width: 3.2rem;
  color: #F3F6FE;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  line-height: 1;
  background: none;
  border-radius: 0;
  height: auto;
  transition: color 0.28s ease, text-shadow 0.28s ease, transform 0.28s ease;
}

.metodologia-item-content {
  position: relative;
  z-index: 1;
  font-family: 'Fractul', 'Fractul Regular', 'Inter', system-ui, sans-serif;
  font-size: clamp(0.95rem, 1.2vw, 1.06rem);
  font-weight: 400;
  line-height: 1.7;
  color: rgba(225, 214, 252, 0.84);
  flex: 1;
}

.metodologia-item-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 900;
  color: #F3F6FE;
  font-style: normal;
}

.metodologia-item:hover {
  border-color: rgba(196, 159, 255, 0.72);
  color: rgba(246, 242, 255, 0.96);
  background:
    linear-gradient(135deg, rgba(163, 114, 248, 0.16), rgba(255, 255, 255, 0.025) 52%, rgba(123, 74, 246, 0.12)),
    rgba(14, 11, 31, 0.76);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.075),
    0 14px 32px rgba(0, 0, 0, 0.22),
    0 0 30px rgba(163, 114, 248, 0.24);
  transform: translateY(-2px) translateX(0.18rem);
}

.metodologia-item:hover .metodologia-number {
  background: none;
  color: #C49FFF;
  text-shadow: 0 0 22px rgba(163, 114, 248, 0.78);
  transform: translateY(-2px);
  box-shadow: none;
}

.metodologia-item:hover::after {
  opacity: 1;
  transform: translateX(0);
}
</style>
