<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

const fallbackPage = {
  seo: {
    title: 'HACKATHON 2026 - El desafío de la innovación',
    description: 'Un evento intensivo de 48 horas donde equipos de desarrolladores, diseñadores e innovadores trabajan juntos para crear soluciones tecnológicas. 22 de agosto de 2026.'
  },
  title: 'Construye el futuro\nen 48 horas',
  description: 'HACKATHON 2026 es un evento intensivo de innovación donde participan equipos de desarrolladores, diseñadores e innovadores. Una oportunidad única para colaborar, aprender y demostrar tus habilidades en un ambiente de competencia amigable.',
  hero: {
    headline: '22 de agosto, 2026 - Asuncion, Paraguay',
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
        to: '#acerca'
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
    command: '22 de agosto - Asuncion, Paraguay',
    links: [
      {
        label: 'Inscribe tu equipo ahora',
        color: 'primary',
        to: '#inscripcion'
      }
    ]
  }
} as const

const { data: page } = await useAsyncData('hackathon', async () => {
  return await queryCollection('content').path('/hackathon').first() ?? fallbackPage
}, {
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

const activityImages = [
  {
    src: '/activity-charlas.webp',
    alt: 'Competencia de desarrollo en hackathon'
  },
  {
    src: '/activity-talleres.webp',
    alt: 'Competencia de diseño en hackathon'
  },
  {
    src: '/activity-visita-tecnica.webp',
    alt: 'Competencia de innovación en hackathon'
  }
]

function getActivityImage(index: number) {
  return activityImages[index] ?? activityImages[0]!
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
      <WaveBackground class="hero-wave-background" />

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
            src="/logo-innotec-blanco.svg"
            alt="INNOTEC"
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
          <CountdownTimer />
        </Motion>
      </div>
    </section>

    <!-- ¿Qué es? -->
    <section
      id="acerca"
      class="innotec-section intro-section"
    >
      <div class="section-container">
        <Motion
          v-bind="scrollMotion()"
          class="intro-content-centered"
        >
          <h2 class="section-title section-title--centered">
            ¿Qué es?
          </h2>
          <p class="intro-description">
            Hackathon es un espacio dirigido a estudiantes de diferentes carreras para la colaboración interdisciplinaria, donde se fomenta la creatividad y la innovación para resolver problemas reales, mientras se adquieren valiosas habilidades prácticas.
          </p>
          <div class="intro-image-wrapper">
            <NuxtImg
              src="/activity-charlas.webp"
              alt="Estudiantes colaborando en el hackathon"
              class="intro-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Motion>
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
          <h2 class="section-title section-title--centered">
            Metodología
          </h2>
          <ol class="metodologia-list">
            <Motion
              v-bind="staggerMotion(0)"
              tag="li"
              class="metodologia-item"
            >
              <span class="metodologia-number">1</span>
              <div class="metodologia-item-content">
                <strong class="metodologia-item-title">Formación de Equipos:</strong>
                Se forman equipos con estudiantes de diversas disciplinas para aprovechar diferente perspectivas y habilidades. ¡Todos tienen un rol crucial!
              </div>
            </Motion>
            <Motion
              v-bind="staggerMotion(1)"
              tag="li"
              class="metodologia-item"
            >
              <span class="metodologia-number">2</span>
              <div class="metodologia-item-content">
                <strong class="metodologia-item-title">Identificación del Problema:</strong>
                Los equipos tendrán una problemática, un desafío real, sobre el cual trabajar para desarrollar una solución innovadora. (Problemática brindada por el sponsor)
              </div>
            </Motion>
            <Motion
              v-bind="staggerMotion(2)"
              tag="li"
              class="metodologia-item"
            >
              <span class="metodologia-number">3</span>
              <div class="metodologia-item-content">
                <strong class="metodologia-item-title">Creación y Desarrollo:</strong>
                En un ambiente colaborativo y con mentoría personalizada, los equipos diseñan y desarrollan soluciones creativas.
              </div>
            </Motion>
            <Motion
              v-bind="staggerMotion(3)"
              tag="li"
              class="metodologia-item"
            >
              <span class="metodologia-number">4</span>
              <div class="metodologia-item-content">
                <strong class="metodologia-item-title">Presentación Final:</strong>
                Los equipos presentan sus soluciones ante un panel de expertos. Se evalúa la creatividad, viabilidad y el impacto potencial. ¡Los mejores proyectos son premiados!
              </div>
            </Motion>
          </ol>
        </Motion>
      </div>
    </section>

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
/* ===== PAGE BASE ===== */
.hackathon-page {
  position: relative;
  background: #080C16;
  min-height: 100vh;
  overflow: hidden;
}

.hackathon-page::before,
.hackathon-page::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hackathon-page::before {
  z-index: 0;
  background-image:
    linear-gradient(rgba(163, 114, 248, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(163, 114, 248, 0.055) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0.86) 42%, rgba(0, 0, 0, 0.72) 100%);
}

.hackathon-page::after {
  z-index: 1;
  background:
    radial-gradient(circle at 14% 18%, rgba(179, 153, 248, 0.85) 0 2px, rgba(179, 153, 248, 0.22) 3px, transparent 10px),
    radial-gradient(circle at 78% 24%, rgba(163, 114, 248, 0.9) 0 2px, rgba(163, 114, 248, 0.22) 3px, transparent 11px),
    radial-gradient(circle at 88% 56%, rgba(231, 228, 245, 0.8) 0 2px, rgba(231, 228, 245, 0.18) 3px, transparent 10px),
    radial-gradient(circle at 22% 74%, rgba(163, 114, 248, 0.72) 0 1px, rgba(163, 114, 248, 0.2) 3px, transparent 9px),
    radial-gradient(ellipse at 50% 16%, rgba(163, 114, 248, 0.12), transparent 40%);
}

.hero-section,
.neon-divider,
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
    radial-gradient(ellipse 82% 66% at 44% 54%, rgba(163, 114, 248, 0.17), rgba(163, 114, 248, 0.1) 42%, rgba(163, 114, 248, 0.045) 68%, transparent 92%),
    radial-gradient(ellipse 58% 58% at 68% 56%, rgba(163, 114, 248, 0.1), rgba(163, 114, 248, 0.04) 56%, transparent 88%);
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
    linear-gradient(rgba(163, 114, 248, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(163, 114, 248, 0.03) 1px, transparent 1px);
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
  background: rgba(163, 114, 248, 0.15);
  animation: glow-breathe 6s ease-in-out infinite;
}

.hero-bg-glow--left {
  bottom: 20%;
  left: -100px;
  width: 300px;
  height: 300px;
  background: rgba(187, 153, 248, 0.08);
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
  background: #bb99f8;
  box-shadow: 0 0 8px 2px rgba(187, 153, 248, 0.8), 0 0 20px 4px rgba(163, 114, 248, 0.4);
  top: 18%;
  left: 15%;
  animation: particle-float-1 8s ease-in-out infinite;
}

.neon-particle--2 {
  width: 3px;
  height: 3px;
  background: #a372f8;
  box-shadow: 0 0 6px 2px rgba(163, 114, 248, 0.9), 0 0 16px 4px rgba(163, 114, 248, 0.4);
  top: 30%;
  right: 20%;
  animation: particle-float-2 10s ease-in-out infinite;
}

.neon-particle--3 {
  width: 3px;
  height: 3px;
  background: #d0bef6;
  box-shadow: 0 0 6px 2px rgba(208, 190, 246, 0.6), 0 0 14px 3px rgba(187, 153, 248, 0.3);
  bottom: 25%;
  right: 12%;
  animation: particle-float-3 12s ease-in-out infinite;
}

.neon-particle--4 {
  width: 5px;
  height: 5px;
  background: #bb99f8;
  box-shadow: 0 0 10px 3px rgba(187, 153, 248, 0.85), 0 0 24px 7px rgba(163, 114, 248, 0.35);
  top: 10%;
  left: 7%;
  animation: particle-float-2 11s ease-in-out infinite;
}

.neon-particle--5 {
  width: 4px;
  height: 4px;
  background: #8d4cf7;
  box-shadow: 0 0 9px 3px rgba(141, 76, 247, 0.9), 0 0 22px 6px rgba(163, 114, 248, 0.36);
  top: 34%;
  right: 30%;
  animation: particle-float-1 9s ease-in-out infinite;
}

.neon-particle--6 {
  width: 4px;
  height: 4px;
  background: #e7e4f5;
  box-shadow: 0 0 8px 3px rgba(231, 228, 245, 0.72), 0 0 20px 6px rgba(187, 153, 248, 0.32);
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
  filter: drop-shadow(0 0 20px rgba(163, 114, 248, 0.5));
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

.hero-title-gradient-hackathon {
  background: linear-gradient(135deg, #d0bef6 0%, #a372f8 50%, #7b4af6 100%);
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
  color: rgba(208, 190, 246, 0.7);
  margin: 0;
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 1.0625rem;
  }
}

.hero-countdown-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Hero CTA buttons */
.hero-links-wrapper {
  display: flex;
  justify-content: center;
}

.hero-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  justify-content: center;
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
}

.hero-btn--primary {
  color: #F3F6FE;
  background: linear-gradient(135deg, #6649f6 0%, #8d4cf7 46%, #a372f8 100%);
  border: 1px solid rgba(163, 114, 248, 0.46);
  box-shadow: 0 0 25px rgba(163, 114, 248, 0.45), 0 0 0 rgba(163, 114, 248, 0);
}

.hero-btn--primary:hover {
  background: linear-gradient(135deg, #7b4af6 0%, #a372f8 48%, #bb99f8 100%);
  box-shadow: 0 0 18px rgba(163, 114, 248, 0.72), 0 0 44px rgba(163, 114, 248, 0.7), 0 0 72px rgba(163, 114, 248, 0.2);
  transform: translateY(-3px) scale(1.035);
  border-color: rgba(187, 153, 248, 0.82);
}

.hero-btn--secondary {
  color: rgba(208, 190, 246, 0.85);
  background: rgba(163, 114, 248, 0.1);
  border: 1px solid rgba(163, 114, 248, 0.3);
}

.hero-btn--secondary:hover {
  color: #F3F6FE;
  background: rgba(163, 114, 248, 0.18);
  border-color: rgba(163, 114, 248, 0.55);
  transform: translateY(-2px);
}

/* Import resto de estilos compartidos desde INNOTEC */
/* Ya que muchos estilos se repiten, reutilizamos las clases de INNOTEC */
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
  color: #a372f8;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 0.75rem;
  text-shadow: 0 0 18px rgba(163, 114, 248, 0.3);
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
  color: rgba(208, 190, 246, 0.65);
  max-width: 560px;
  margin: 0 auto;
}

.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(163, 114, 248, 0.4), transparent);
  margin: 0 2rem;
}

.feature-card {
  position: relative;
  min-height: 430px;
  height: 100%;
  padding: 0 1.2rem 1.35rem;
  background: linear-gradient(180deg, rgba(13, 20, 40, 0.86), rgba(9, 14, 28, 0.76));
  border: 1px solid rgba(163, 114, 248, 0.18);
  border-radius: 8px;
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.04);
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
}

.feature-card:hover {
  background: linear-gradient(180deg, rgba(15, 23, 46, 0.9), rgba(10, 16, 32, 0.82));
  border-color: rgba(163, 114, 248, 0.72);
  transform: translateY(-5px);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28), 0 0 26px rgba(163, 114, 248, 0.22), inset 0 1px 0 rgba(243, 246, 254, 0.06);
}

.feature-card-title {
  position: relative;
  z-index: 1;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1.02rem;
  font-weight: 900;
  color: #F3F6FE;
  margin: 0 0 0.7rem;
  letter-spacing: 0;
  line-height: 1.3;
}

.feature-card-desc {
  position: relative;
  z-index: 1;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.94rem;
  font-weight: 400;
  line-height: 1.65;
  color: rgba(208, 190, 246, 0.68);
  margin: 0;
}

.intro-text p {
  border-left: 2px solid rgba(163, 114, 248, 0.62);
}

.intro-text p:first-child {
  border-left-color: rgba(163, 114, 248, 0.7);
}

.cta-title {
  text-shadow: 0 0 24px rgba(2, 7, 18, 0.84), 0 0 48px rgba(2, 7, 18, 0.6);
}

.cta-description {
  text-shadow: 0 0 18px rgba(2, 7, 18, 0.82), 0 0 34px rgba(2, 7, 18, 0.62);
}

.cta-btn {
  font-size: 1rem;
  padding: 0.875rem 2rem;
}

/* Resto de clases auxiliares */
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: stretch;
}

@media (min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
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
    radial-gradient(ellipse 82% 66% at 44% 54%, rgba(141, 78, 246, 0.17), rgba(163, 114, 248, 0.1) 42%, rgba(163, 114, 248, 0.045) 68%, transparent 92%),
    radial-gradient(ellipse 58% 58% at 68% 56%, rgba(163, 114, 248, 0.1), rgba(163, 114, 248, 0.04) 56%, transparent 88%);
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
    linear-gradient(rgba(163, 114, 248, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(163, 114, 248, 0.03) 1px, transparent 1px);
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
  background: rgba(163, 114, 248, 0.15);
  animation: glow-breathe 6s ease-in-out infinite;
}

.hero-bg-glow--left {
  bottom: 20%;
  left: -100px;
  width: 300px;
  height: 300px;
  background: rgba(187, 153, 248, 0.08);
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
  background: #a372f8;
  box-shadow: 0 0 8px 2px rgba(187, 153, 248, 0.8), 0 0 20px 4px rgba(163, 114, 248, 0.4);
  top: 18%;
  left: 15%;
  animation: particle-float-1 8s ease-in-out infinite;
}

.neon-particle--2 {
  width: 3px;
  height: 3px;
  background: #7b4af6;
  box-shadow: 0 0 6px 2px rgba(163, 114, 248, 0.9), 0 0 16px 4px rgba(163, 114, 248, 0.4);
  top: 30%;
  right: 20%;
  animation: particle-float-2 10s ease-in-out infinite;
}

.neon-particle--3 {
  width: 3px;
  height: 3px;
  background: #d0bef6;
  box-shadow: 0 0 6px 2px rgba(208, 190, 246, 0.6), 0 0 14px 3px rgba(187, 153, 248, 0.3);
  bottom: 25%;
  right: 12%;
  animation: particle-float-3 12s ease-in-out infinite;
}

.neon-particle--4 {
  width: 5px;
  height: 5px;
  background: #bb99f8;
  box-shadow: 0 0 10px 3px rgba(187, 153, 248, 0.85), 0 0 24px 7px rgba(163, 114, 248, 0.35);
  top: 10%;
  left: 7%;
  animation: particle-float-2 11s ease-in-out infinite;
}

.neon-particle--5 {
  width: 4px;
  height: 4px;
  background: #7e49f5;
  box-shadow: 0 0 9px 3px rgba(126, 73, 245, 0.9), 0 0 22px 6px rgba(163, 114, 248, 0.36);
  top: 34%;
  right: 30%;
  animation: particle-float-1 9s ease-in-out infinite;
}

.neon-particle--6 {
  width: 4px;
  height: 4px;
  background: #F3F6FE;
  box-shadow: 0 0 8px 3px rgba(243, 246, 254, 0.72), 0 0 20px 6px rgba(187, 153, 248, 0.32);
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

/* Hero logo */
.hero-logo-wrapper {
  display: flex;
  justify-content: center;
}

.hero-logo {
  height: 64px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(163, 114, 248, 0.5));
}

@media (min-width: 768px) {
  .hero-logo {
    height: 80px;
  }
}

/* Hero title */
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
  background: linear-gradient(135deg, #d0bef6 0%, #a372f8 42%, #7b4af6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Hero description */
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
  color: rgba(208, 190, 246, 0.7);
  margin: 0;
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 1.0625rem;
  }
}

/* Countdown wrapper */
.hero-countdown-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.intro-section {
  padding-top: 2rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .intro-section {
    padding-top: 2.5rem;
    padding-bottom: 4.75rem;
  }
}

/* ===== CENTERED INTRO ===== */
.section-title--centered {
  text-align: center;
}

.intro-content-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.intro-description {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(208, 190, 246, 0.75);
  max-width: 700px;
  margin: 0 auto 2.5rem;
}

@media (min-width: 768px) {
  .intro-description {
    font-size: 1.0625rem;
  }
}

.intro-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 560px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(163, 114, 248, 0.22);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(163, 114, 248, 0.12);
}

.intro-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
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
  background: linear-gradient(180deg, rgba(13, 20, 40, 0.6), rgba(9, 14, 28, 0.4));
  border: 1px solid rgba(163, 114, 248, 0.2);
  border-radius: 16px;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(243, 246, 254, 0.04);
}

@media (min-width: 768px) {
  .metodologia-card {
    padding: 3rem 2.5rem;
  }
}

.metodologia-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.metodologia-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: rgba(163, 114, 248, 0.04);
  border: 1px solid rgba(163, 114, 248, 0.12);
  border-radius: 10px;
  transition: border-color 0.25s ease, background 0.25s ease;
}

.metodologia-item:hover {
  border-color: rgba(163, 114, 248, 0.35);
  background: rgba(163, 114, 248, 0.08);
}

.metodologia-number {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #a372f8, #7b4af6);
  color: #F3F6FE;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 900;
  box-shadow: 0 0 12px rgba(163, 114, 248, 0.35);
}

.metodologia-item-content {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(208, 190, 246, 0.78);
  flex: 1;
}

.metodologia-item-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 900;
  color: #F3F6FE;
  font-style: italic;
}

.cta-section {
  min-height: clamp(30rem, 66vh, 42rem);
  display: flex;
  align-items: flex-start;
  background: transparent;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.obj-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  color: #a372f8;
  filter: drop-shadow(0 0 8px rgba(163, 114, 248, 0.28));
}

.objectives-ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid rgba(163, 114, 248, 0.24);
}

.objectives-ul li {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(163, 114, 248, 0.24);
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.96rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(208, 190, 246, 0.8);
}

.objectives-kicker {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(208, 190, 246, 0.78);
  margin: 0 0 1.1rem;
}

.activities-intro {
  text-align: center;
  margin-bottom: 1.4rem;
}

.activities-label {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1.18rem, 1.6vw, 1.32rem);
  font-weight: 400;
  color: rgba(208, 190, 246, 0.85);
  margin: 0;
}

.objectives-list {
  max-width: 100%;
  margin: 0 0 1.5rem;
}

.objectives-content {
  position: relative;
  display: grid;
  gap: 1.75rem;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(163, 114, 248, 0.55), transparent);
  opacity: 0.72;
}

.feature-card-media {
  position: relative;
  z-index: 1;
  width: calc(100% + 2.4rem);
  height: 240px;
  margin: 0 -1.2rem 1.35rem;
  overflow: hidden;
  background: rgba(8, 12, 22, 0.72);
  border: 0;
  border-bottom: 1px solid rgba(163, 114, 248, 0.2);
  border-radius: 8px 8px 0 0;
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.05);
  isolation: isolate;
}

@media (min-width: 1024px) {
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
    linear-gradient(135deg, rgba(8, 12, 22, 0.42), rgba(163, 114, 248, 0.2) 48%, rgba(163, 114, 248, 0.1)),
    radial-gradient(ellipse at 18% 12%, rgba(163, 114, 248, 0.22), transparent 44%),
    radial-gradient(ellipse at 86% 76%, rgba(187, 153, 248, 0.16), transparent 48%);
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
  background: linear-gradient(90deg, transparent, rgba(163, 114, 248, 0.7), transparent);
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

.feature-card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background:
    radial-gradient(ellipse at 12% 0%, rgba(163, 114, 248, 0.16) 0%, transparent 58%),
    radial-gradient(ellipse at 84% 8%, rgba(163, 114, 248, 0.12) 0%, transparent 42%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.feature-card:hover .feature-card-glow {
  opacity: 1;
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

.intro-heading-panel {
  position: relative;
  display: grid;
  gap: 1.65rem;
  align-content: center;
  isolation: isolate;
}

.intro-bulb {
  position: absolute;
  z-index: 0;
  top: 50%;
  left: clamp(-32rem, -36vw, -20rem);
  width: clamp(45rem, 70vw, 64rem);
  height: clamp(50rem, 75vw, 69rem);
  transform: translateY(-52%);
  pointer-events: none;
  opacity: 0.8;
  mix-blend-mode: screen;
}

.intro-bulb-image {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 51%;
  transform: scale(1.2) translateY(2%);
  opacity: 0.46;
  filter: blur(3px) brightness(1.28) saturate(1.28) drop-shadow(0 0 38px rgba(163, 114, 248, 0.36)) drop-shadow(0 0 96px rgba(163, 114, 248, 0.22));
  mix-blend-mode: screen;
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
  background: linear-gradient(90deg, rgba(102, 73, 246, 0.48), rgba(102, 73, 246, 0.54)), rgba(7, 12, 28, 0.5);
  border: 1px solid rgba(163, 114, 248, 0.72);
  border-radius: 8px;
  box-shadow: 0 0 24px rgba(163, 114, 248, 0.22), inset 0 1px 0 rgba(243, 246, 254, 0.08);
  backdrop-filter: blur(14px);
}

.intro-concept-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  flex-shrink: 0;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1.18rem;
  font-weight: 900;
  color: #bb99f8;
  border: 1px solid rgba(163, 114, 248, 0.78);
  border-radius: 8px;
  background: rgba(163, 114, 248, 0.2);
  box-shadow: 0 0 18px rgba(163, 114, 248, 0.22), inset 0 1px 0 rgba(243, 246, 254, 0.06);
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
}

.intro-text p:first-child {
  font-size: 1.12rem;
  line-height: 1.72;
  color: rgba(243, 246, 254, 0.94);
  text-shadow: 0 0 18px rgba(163, 114, 248, 0.16);
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
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 10px 28px rgba(1, 8, 32, 0.22);
  backdrop-filter: blur(10px) saturate(1.08);
}

.chip-icon {
  width: 14px;
  height: 14px;
  color: #061954;
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
  background: rgba(163, 114, 248, 0.16);
  filter: blur(90px);
  pointer-events: none;
}

.cta-section::before {
  z-index: -2;
  background-image: url('/vista_tierra.webp');
  background-size: cover;
  background-position: center bottom;
  filter: saturate(1.08) contrast(1.05);
  transform: scale(1.01);
  -webkit-mask-image: linear-gradient(180deg, transparent 0%, transparent 20%, rgba(0, 0, 0, 0.04) 38%, rgba(0, 0, 0, 0.28) 56%, rgba(0, 0, 0, 0.72) 76%, black 92%, black 100%);
  mask-image: linear-gradient(180deg, transparent 0%, transparent 20%, rgba(0, 0, 0, 0.04) 38%, rgba(0, 0, 0, 0.28) 56%, rgba(0, 0, 0, 0.72) 76%, black 92%, black 100%);
}

.cta-section::after {
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(8, 12, 22, 0) 0%, rgba(8, 12, 22, 0.12) 20%, rgba(8, 12, 22, 0.42) 42%, rgba(8, 12, 22, 0.64) 58%, rgba(8, 12, 22, 0.38) 74%, rgba(5, 8, 17, 0.76) 100%),
    radial-gradient(ellipse 90% 38% at 50% 34%, rgba(8, 12, 22, 0.36), rgba(8, 12, 22, 0.14) 48%, transparent 80%),
    radial-gradient(ellipse 82% 34% at 50% 32%, rgba(163, 114, 248, 0.032), transparent 84%),
    radial-gradient(ellipse at 50% 50%, rgba(163, 114, 248, 0.16), transparent 44%),
    radial-gradient(ellipse at 50% 68%, rgba(3, 7, 18, 0), rgba(3, 7, 18, 0.48) 78%);
}

.cta-section::before,
.cta-section::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
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
}
</style>
