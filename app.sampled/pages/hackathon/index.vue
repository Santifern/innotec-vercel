<script setup lang="ts">
import CountdownTimer from '~/components/CountdownTimer.vue'
import SponsorMarquee from '~/components/SponsorMarquee.vue'

definePageMeta({
  colorMode: 'dark',
  layout: 'hackathon',
  section: 'hackathon'
})

const fallbackPage = {
  seo: {
    title: 'INNOTEC',
    description: 'Un evento intensivo de 48 horas donde equipos de desarrolladores, diseñadores e innovadores trabajan juntos para crear soluciones tecnológicas. 20 y 21 de agosto de 2026.'
  },
  title: 'Construye el futuro\nen 48 horas',
  description: 'HACKATHON 2026 es un evento intensivo de innovación donde participan equipos de desarrolladores, diseñadores e innovadores. Una oportunidad única para colaborar, aprender y demostrar tus habilidades en un ambiente de competencia amigable.',
  hero: {
    headline: '20 y 21 de agosto, 2026 - Asuncion, Paraguay',
    links: [
      {
        label: 'Inscribite al Hackathon 2026',
        color: 'primary',
        size: 'xl',
        to: '/registration-hackathon'
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
        label: 'Inscribite al Hackathon 2026',
        color: 'primary',
        to: '/registration-hackathon'
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
    src: '/images/innotec/activity-charlas.webp',
    alt: 'Competencia de desarrollo en hackathon'
  },
  {
    src: '/images/innotec/activity-talleres.webp',
    alt: 'Competencia de diseño en hackathon'
  },
  {
    src: '/images/innotec/activity-visita-tecnica.webp',
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
    <!-- Hero -->
    <section
      id="inicio"
      class="hero-section"
    >
      <!-- Background effects -->
      <div class="hero-bg-grid" />
      <div class="hero-bg-glow hero-bg-glow--center" />
      <div class="hero-bg-glow hero-bg-glow--left" />

      <!-- Neon floating particles -->
      <div class="neon-particle neon-particle--1" />
      <div class="neon-particle neon-particle--2" />
      <div class="neon-particle neon-particle--3" />
      <div class="neon-particle neon-particle--4" />
      <div class="neon-particle neon-particle--5" />
      <div class="neon-particle neon-particle--6" />

      <div class="hero-container">
        <!-- Main logo -->
        <div class="hero-logo-wrapper">
          <NuxtImg
            src="/images/hackathon/logo-hackathon-navbar.svg"
            alt="Hackathon"
            class="hero-logo"
          />
        </div>

        <!-- Title -->
        <Motion
          v-bind="enterMotion(0.25)"
          class="hero-title-wrapper"
        >
          <h1 class="hero-title">
            {{ heroTitle.primary }}
            <br v-if="heroTitle.secondary">
            <span
              v-if="heroTitle.secondary"
              class="hero-title-gradient"
            >
              {{ heroTitle.secondary }}
            </span>
          </h1>
        </Motion>

        <!-- Description -->
        <Motion
          v-bind="enterMotion(0.4)"
          class="hero-desc-wrapper"
        >
          <p class="hero-description">
            {{ page.description }}
          </p>
        </Motion>

        <!-- Countdown Timer -->
        <Motion
          v-bind="enterMotion(0.55)"
          class="hero-countdown-wrapper"
        >
          <CountdownTimer
            target-date="2026-08-20T00:00:00"
            theme="hackathon"
          />
        </Motion>
      </div>
    </section>

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
    <div class="section-divider" />

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
      <NuxtImg
        src="/images/innotec/foquito.png"
        alt=""
        class="cta-foquito cta-foquito--hackathon"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

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

<style scoped src="~/assets/css/pages/hackathon-hackathon-index.css"></style>
