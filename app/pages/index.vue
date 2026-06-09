<script setup lang="ts">
import CountdownTimer from '~/components/CountdownTimer.vue'

type WindowWithIdleCallback = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout?: number }) => number
}

definePageMeta({
  colorMode: 'dark'
})

const fallbackPage = {
  seo: {
    title: 'INNOTEC',
    description: 'El congreso anual de innovacion y tecnologia organizado por estudiantes de la Facultad de Ciencias y Tecnologia de la Universidad Catolica del Paraguay. 20 y 21 de agosto de 2026.'
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
        to: '/registration-innotec'
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
        value: '2 dias',
        label: 'Intensos de aprendizaje',
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
        to: '/registration-innotec'
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

const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]
const scrollInViewOptions = { once: true, amount: 0.28, margin: '0px 0px -12% 0px' as const }
const staggerInViewOptions = { once: true, amount: 0.35, margin: '0px 0px -10% 0px' as const }
const showDeferredSections = ref(false)

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
        <Motion
          v-bind="enterMotion(0.05)"
          class="hero-logo-wrapper"
        >
          <NuxtImg
            src="/images/innotec/logo-innotec-blanco.svg"
            alt="INNOTEC"
            class="hero-logo"
            loading="eager"
          />
        </Motion>

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
          <CountdownTimer target-date="2026-08-20T00:00:00" />
        </Motion>
      </div>
    </section>

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

    <LazySponsorMarquee v-if="showDeferredSections" />

    <!-- Inscription CTA section -->
    <section
      v-if="showDeferredSections"
      id="inscripcion"
      class="innotec-section cta-section"
    >
      <!-- Background effects -->
      <div class="cta-bg-glow" />
      <NuxtImg
        src="/images/innotec/foquito.png"
        alt=""
        class="cta-foquito"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

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

<style scoped src="~/assets/css/pages/innotec-index.css"></style>
