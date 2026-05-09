<script setup lang="ts">
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
    headline: '20 de agosto, 2026 - Asuncion, Paraguay',
    links: [
      {
        label: 'Inscribete ahora',
        color: 'primary',
        size: 'xl',
        to: '#inscripcion'
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
    title: '¿Listo para ser parte?',
    description: 'Unete al congreso de tecnologia e innovacion mas importante del Paraguay estudiantil. Inscripcion abierta para estudiantes y profesionales.',
    command: '20 de agosto - Asuncion, Paraguay',
    links: [
      {
        label: 'Inscribete al INNOTEC 2026',
        color: 'primary',
        to: '#inscripcion'
      }
    ]
  }
} as const

const { data: page } = await useAsyncData('index', async () => {
  return await queryCollection('content').first() ?? fallbackPage
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
    src: '/activity-charlas.jpg',
    alt: 'Charla de INNOTEC en auditorio'
  },
  {
    src: '/activity-talleres.jpg',
    alt: 'Taller interactivo de INNOTEC'
  },
  {
    src: '/activity-visita-tecnica.jpg',
    alt: 'Visita tecnica de INNOTEC'
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
          <img
            src="/logo-innotec-blanco.png"
            alt="INNOTEC"
            class="hero-logo"
          >
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

    <!-- ¿Qué es Innotec? -->
    <section
      id="acerca"
      class="innotec-section intro-section"
    >
      <div class="section-container">
        <Motion
          v-bind="scrollMotion()"
          class="intro-content"
        >
          <div class="intro-heading-panel">
            <div
              class="intro-bulb"
              aria-hidden="true"
            >
              <img
                src="/foquito.png"
                alt=""
                class="intro-bulb-image"
                loading="lazy"
                decoding="async"
              >
            </div>
            <h2 class="section-title">
              ¿Qué es Innotec?
            </h2>
            <div
              class="intro-concepts"
              aria-label="Conceptos clave de Innotec"
            >
              <div class="intro-concept">
                <span
                  class="intro-concept-key"
                  aria-hidden="true"
                >
                  I
                </span>
                <span>Innovación</span>
              </div>
              <div class="intro-concept">
                <span
                  class="intro-concept-key"
                  aria-hidden="true"
                >
                  C
                </span>
                <span>Colaboración</span>
              </div>
              <div class="intro-concept">
                <span
                  class="intro-concept-key"
                  aria-hidden="true"
                >
                  A
                </span>
                <span>Liderazgo</span>
              </div>
            </div>
          </div>
          <div class="intro-text">
            <p>
              INNOTEC es el congreso anual organizado por estudiantes de la Facultad de Ciencias y Tecnología de la Universidad Católica "Nuestra Señora de la Asunción" de Paraguay.
            </p>
            <p>
              Es un espacio que fomenta la innovación, la colaboración y el desarrollo de nuevas ideas y soluciones tecnológicas entre estudiantes y profesionales expertos en las áreas de Tecnología, Ingeniería, Arquitectura y Diseño. Ampliando sus horizontes y preparándolos para liderar el cambio en sus respectivas áreas.
            </p>
            <p>
              Cada edición se enfoca en temáticas relevantes basados en la innovación y la tecnología, brindando una plataforma de aprendizaje, colaboración y desarrollo de soluciones innovadoras. El INNOTEC conecta a los estudiantes con expertos nacionales e internacionales.
            </p>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Section divider -->
    <div class="section-divider" />

    <!-- ¿Cuáles son sus objetivos y actividades? -->
    <section
      id="acerca-objetivos"
      class="innotec-section objectives-section"
    >
      <div class="section-container objectives-content">
        <Motion
          v-bind="scrollMotion()"
          class="section-header"
        >
          <h2 class="section-title">
            ¿Cuáles son sus<br>objetivos y actividades?
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
            <li>
              <span class="obj-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
              </span>
              Fomentar la innovación, la creatividad y el crecimiento personal y profesional en las áreas de ingeniería, arquitectura y diseño.
            </li>
            <li>
              <span class="obj-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
              </span>
              Brindar una plataforma de intercambio de conocimientos y experiencias en el ámbito científico y tecnológico.
            </li>
            <li>
              <span class="obj-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
              </span>
              Inspirar a los jóvenes estudiantes a explorar nuevas posibilidades en sus respectivas carreras, fuera del aula.
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
            <div class="feature-card">
              <figure
                class="feature-card-media"
                :class="`feature-card-media--${index}`"
              >
                <img
                  :src="getActivityImage(index).src"
                  :alt="getActivityImage(index).alt"
                  class="feature-card-image"
                  loading="lazy"
                  decoding="async"
                >
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
    <div class="section-divider" />

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

/* ===== HERO SECTION ===== */
.hero-section {
  position: relative;
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
    radial-gradient(ellipse 82% 66% at 44% 54%, rgba(31, 82, 255, 0.17), rgba(25, 68, 240, 0.1) 42%, rgba(25, 68, 240, 0.045) 68%, transparent 92%),
    radial-gradient(ellipse 58% 58% at 68% 56%, rgba(25, 68, 240, 0.1), rgba(25, 68, 240, 0.04) 56%, transparent 88%);
  filter: blur(38px);
  pointer-events: none;
}

/* Background grid */
.hero-bg-grid {
  position: absolute;
  inset: 0 0 -18rem;
  background-image:
    linear-gradient(rgba(25, 68, 240, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(25, 68, 240, 0.03) 1px, transparent 1px);
  background-size: 72px 72px;
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
  background: rgba(25, 68, 240, 0.15);
  animation: glow-breathe 6s ease-in-out infinite;
}

.hero-bg-glow--left {
  bottom: 20%;
  left: -100px;
  width: 300px;
  height: 300px;
  background: rgba(123, 138, 247, 0.08);
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
  background: #7B8AF7;
  box-shadow: 0 0 8px 2px rgba(123, 138, 247, 0.8), 0 0 20px 4px rgba(25, 68, 240, 0.4);
  top: 18%;
  left: 15%;
  animation: particle-float-1 8s ease-in-out infinite;
}

.neon-particle--2 {
  width: 3px;
  height: 3px;
  background: #1944F0;
  box-shadow: 0 0 6px 2px rgba(25, 68, 240, 0.9), 0 0 16px 4px rgba(25, 68, 240, 0.4);
  top: 30%;
  right: 20%;
  animation: particle-float-2 10s ease-in-out infinite;
}

.neon-particle--3 {
  width: 3px;
  height: 3px;
  background: #CBD1FB;
  box-shadow: 0 0 6px 2px rgba(203, 209, 251, 0.6), 0 0 14px 3px rgba(123, 138, 247, 0.3);
  bottom: 25%;
  right: 12%;
  animation: particle-float-3 12s ease-in-out infinite;
}

.neon-particle--4 {
  width: 5px;
  height: 5px;
  background: #9FACF9;
  box-shadow: 0 0 10px 3px rgba(159, 172, 249, 0.85), 0 0 24px 7px rgba(25, 68, 240, 0.35);
  top: 10%;
  left: 7%;
  animation: particle-float-2 11s ease-in-out infinite;
}

.neon-particle--5 {
  width: 4px;
  height: 4px;
  background: #2B45F3;
  box-shadow: 0 0 9px 3px rgba(43, 69, 243, 0.9), 0 0 22px 6px rgba(25, 68, 240, 0.36);
  top: 34%;
  right: 30%;
  animation: particle-float-1 9s ease-in-out infinite;
}

.neon-particle--6 {
  width: 4px;
  height: 4px;
  background: #F3F6FE;
  box-shadow: 0 0 8px 3px rgba(243, 246, 254, 0.72), 0 0 20px 6px rgba(123, 138, 247, 0.32);
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

/* ===== NEON SECTION DIVIDER ===== */
.neon-divider {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.neon-divider-line {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(25, 68, 240, 0.6), rgba(123, 138, 247, 0.8), rgba(25, 68, 240, 0.6), transparent);
  box-shadow: 0 0 8px rgba(25, 68, 240, 0.5), 0 0 20px rgba(25, 68, 240, 0.3);
  animation: neon-line-pulse 3s ease-in-out infinite;
}

.neon-divider-line::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #7B8AF7, transparent);
  transform: translateY(-50%);
  border-radius: 2px;
  animation: neon-scan 4s ease-in-out infinite;
}

@keyframes neon-line-pulse {
  0%, 100% { opacity: 0.6; box-shadow: 0 0 8px rgba(25, 68, 240, 0.5), 0 0 20px rgba(25, 68, 240, 0.3); }
  50% { opacity: 1; box-shadow: 0 0 12px rgba(25, 68, 240, 0.8), 0 0 30px rgba(25, 68, 240, 0.5), 0 0 50px rgba(25, 68, 240, 0.2); }
}

@keyframes neon-scan {
  0% { left: -60px; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { left: calc(100% + 60px); opacity: 0; }
}

/* ===== NEON ACCENT LINES ===== */
.neon-accent {
  position: absolute;
  width: 200px;
  height: 1px;
  pointer-events: none;
  z-index: 0;
}

.neon-accent--left {
  top: 15%;
  left: 0;
  background: linear-gradient(90deg, transparent, rgba(25, 68, 240, 0.5), transparent);
  box-shadow: 0 0 10px rgba(25, 68, 240, 0.3);
  animation: accent-left 6s ease-in-out infinite;
}

.neon-accent--right {
  bottom: 20%;
  right: 0;
  background: linear-gradient(90deg, transparent, rgba(123, 138, 247, 0.4), transparent);
  box-shadow: 0 0 8px rgba(123, 138, 247, 0.25);
  animation: accent-right 8s ease-in-out infinite;
}

@keyframes accent-left {
  0%, 100% { width: 150px; opacity: 0.4; }
  50% { width: 300px; opacity: 0.8; }
}

@keyframes accent-right {
  0%, 100% { width: 120px; opacity: 0.3; }
  50% { width: 250px; opacity: 0.7; }
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
  filter: drop-shadow(0 0 20px rgba(25, 68, 240, 0.5));
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
  background: linear-gradient(135deg, #CBD1FB 0%, #7B8AF7 42%, #1944F0 100%);
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
  color: rgba(203, 209, 251, 0.7);
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
  background: linear-gradient(135deg, #1235C8 0%, #1944F0 46%, #37E6F1 100%);
  border: 1px solid rgba(55, 230, 241, 0.46);
  box-shadow: 0 0 25px rgba(25, 68, 240, 0.45), 0 0 0 rgba(55, 230, 241, 0);
}

.hero-btn--primary:hover {
  background: linear-gradient(135deg, #1944F0 0%, #2B45F3 48%, #37E6F1 100%);
  box-shadow: 0 0 18px rgba(55, 230, 241, 0.72), 0 0 44px rgba(25, 68, 240, 0.7), 0 0 72px rgba(55, 230, 241, 0.2);
  transform: translateY(-3px) scale(1.035);
  border-color: rgba(55, 230, 241, 0.82);
}

.hero-btn--secondary {
  color: rgba(203, 209, 251, 0.85);
  background: rgba(25, 68, 240, 0.1);
  border: 1px solid rgba(25, 68, 240, 0.3);
}

.hero-btn--secondary:hover {
  color: #F3F6FE;
  background: rgba(25, 68, 240, 0.18);
  border-color: rgba(25, 68, 240, 0.55);
  transform: translateY(-2px);
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

/* ===== FEATURES GRID ===== */
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

.feature-card {
  position: relative;
  min-height: 430px;
  height: 100%;
  padding: 0 1.2rem 1.35rem;
  background:
    linear-gradient(180deg, rgba(13, 20, 40, 0.86), rgba(9, 14, 28, 0.76));
  border: 1px solid rgba(123, 138, 247, 0.18);
  border-radius: 8px;
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.04);
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(123, 138, 247, 0.55), transparent);
  opacity: 0.72;
}

.feature-card:hover {
  background:
    linear-gradient(180deg, rgba(15, 23, 46, 0.9), rgba(10, 16, 32, 0.82));
  border-color: rgba(55, 230, 241, 0.72);
  transform: translateY(-5px);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28), 0 0 26px rgba(55, 230, 241, 0.22), inset 0 1px 0 rgba(243, 246, 254, 0.06);
}

.feature-card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background:
    radial-gradient(ellipse at 12% 0%, rgba(55, 230, 241, 0.16) 0%, transparent 58%),
    radial-gradient(ellipse at 84% 8%, rgba(217, 70, 239, 0.12) 0%, transparent 42%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.feature-card:hover .feature-card-glow {
  opacity: 1;
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
  border-bottom: 1px solid rgba(123, 138, 247, 0.2);
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

.intro-section::before {
  content: '';
  position: absolute;
  left: -6vw;
  right: -6vw;
  top: clamp(-16rem, -18vw, -8rem);
  z-index: 0;
  height: calc(100% + clamp(30rem, 42vw, 44rem));
  background:
    radial-gradient(ellipse 86% 42% at 50% 32%, rgba(25, 68, 240, 0.18), rgba(25, 68, 240, 0.1) 42%, rgba(25, 68, 240, 0.04) 66%, transparent 90%),
    radial-gradient(ellipse 72% 48% at 50% 38%, rgba(31, 82, 255, 0.12), rgba(25, 68, 240, 0.06) 42%, transparent 78%),
    radial-gradient(ellipse 48% 58% at 24% 48%, rgba(31, 82, 255, 0.22), rgba(18, 51, 162, 0.1) 34%, transparent 72%),
    radial-gradient(ellipse 68% 52% at 50% 44%, rgba(25, 68, 240, 0.1), rgba(25, 68, 240, 0.04) 42%, transparent 80%),
    radial-gradient(ellipse 52% 58% at 62% 76%, rgba(25, 68, 240, 0.08), transparent 74%);
  filter: blur(42px);
  opacity: 0.86;
  pointer-events: none;
}

.intro-section::after {
  content: '';
  position: absolute;
  left: -6vw;
  right: -6vw;
  bottom: clamp(-22rem, -24vw, -12rem);
  z-index: 0;
  height: clamp(28rem, 44vw, 42rem);
  background:
    radial-gradient(ellipse 48% 58% at 22% 36%, rgba(31, 82, 255, 0.1), transparent 70%),
    radial-gradient(ellipse 64% 58% at 54% 46%, rgba(25, 68, 240, 0.09), rgba(8, 17, 45, 0.03) 48%, transparent 78%);
  filter: blur(32px);
  pointer-events: none;
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

.intro-content::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 50%;
  left: -18rem;
  width: 52rem;
  height: 52rem;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(25, 68, 240, 0.34) 0%, rgba(25, 68, 240, 0.18) 34%, rgba(25, 68, 240, 0.07) 58%, transparent 76%);
  filter: blur(34px);
  transform: translateY(-50%);
  pointer-events: none;
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

.intro-bulb::before,
.intro-bulb::after {
  content: '';
  position: absolute;
  pointer-events: none;
}

.intro-bulb::before {
  inset: 2% -1% 7%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 49% 45%, rgba(49, 107, 255, 0.3), rgba(49, 107, 255, 0.13) 36%, transparent 72%);
  filter: blur(54px);
  opacity: 0.62;
  mix-blend-mode: screen;
}

.intro-bulb::after {
  inset: auto 4% 2%;
  height: 42%;
  background:
    linear-gradient(180deg, rgba(8, 12, 22, 0), rgba(8, 12, 22, 0.26) 58%, rgba(8, 12, 22, 0.78));
  filter: blur(18px);
  opacity: 0.9;
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
  filter:
    blur(3px)
    brightness(1.28)
    saturate(1.28)
    drop-shadow(0 0 38px rgba(49, 107, 255, 0.36))
    drop-shadow(0 0 96px rgba(49, 107, 255, 0.22));
  mix-blend-mode: screen;
  -webkit-mask-image: radial-gradient(ellipse at 50% 52%, black 0%, black 52%, rgba(0, 0, 0, 0.55) 68%, transparent 86%);
  mask-image: radial-gradient(ellipse at 50% 52%, black 0%, black 52%, rgba(0, 0, 0, 0.55) 68%, transparent 86%);
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
  color: #67A4FF;
  border: 1px solid rgba(38, 117, 255, 0.78);
  border-radius: 8px;
  background: rgba(23, 79, 191, 0.2);
  box-shadow: 0 0 18px rgba(38, 117, 255, 0.22), inset 0 1px 0 rgba(243, 246, 254, 0.06);
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
  border-left: 2px solid rgba(83, 113, 246, 0.62);
}

.intro-text p:first-child {
  font-size: 1.12rem;
  line-height: 1.72;
  color: rgba(243, 246, 254, 0.94);
  border-left-color: rgba(55, 230, 241, 0.7);
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

  .intro-content::before {
    top: 50%;
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
  margin: 0 0 1.5rem;
}

.objectives-kicker {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(203, 209, 251, 0.78);
  margin: 0 0 1.1rem;
}

.objectives-ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid rgba(25, 68, 240, 0.24);
}

.objectives-ul li {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(25, 68, 240, 0.24);
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.96rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(203, 209, 251, 0.8);
}

.obj-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: 0;
  border-radius: 0;
  color: #34D399;
  margin-top: 0.1rem;
  filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.28));
}

.obj-icon svg {
  width: 1rem;
  height: 1rem;
}

.activities-intro {
  text-align: center;
  margin-bottom: 1.4rem;
}

.activities-label {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1.0625rem;
  font-weight: 400;
  color: rgba(203, 209, 251, 0.85);
  margin: 0;
}

@media (min-width: 900px) {
  .objectives-content {
    grid-template-columns: minmax(360px, 1fr) minmax(0, 1.1fr);
    gap: 4rem;
    align-items: start;
  }

  .objectives-content .section-header {
    text-align: left;
    margin-bottom: 0;
  }

  .objectives-content .section-title {
    max-width: 9ch;
    font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
    font-size: 4.35rem;
    font-weight: 900;
    line-height: 0.95;
    margin-bottom: 1.25rem;
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
  background: #050811;
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
  background-image: url('/vista_tierra.png');
  background-size: cover;
  background-position: center bottom;
  filter: saturate(1.08) contrast(1.05);
  transform: scale(1.01);
}

.cta-section::after {
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(8, 12, 22, 0.98) 0%, rgba(8, 12, 22, 0.76) 8%, rgba(8, 12, 22, 0.28) 28%, rgba(5, 8, 17, 0.18) 56%, rgba(5, 8, 17, 0.76) 100%),
    radial-gradient(ellipse at 50% 38%, rgba(47, 180, 255, 0.24), transparent 36%),
    radial-gradient(ellipse at 50% 68%, rgba(3, 7, 18, 0), rgba(3, 7, 18, 0.48) 78%);
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
  padding-top: clamp(4.5rem, 8vw, 7rem);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-shadow: 0 0 22px rgba(2, 7, 18, 0.72);
}

.cta-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 2.25rem;
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
    font-size: 3rem;
  }
}

.cta-description {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(238, 244, 255, 0.82);
  max-width: 420px;
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
  background: linear-gradient(180deg, rgba(55, 230, 241, 0.12), rgba(55, 230, 241, 0.76), rgba(25, 68, 240, 0.18));
  box-shadow: 0 0 18px rgba(55, 230, 241, 0.22);
}

.intro-content .section-title,
.objectives-content .section-title {
  max-width: 9.5ch;
  margin: 0;
  font-size: clamp(2.75rem, 8.5vw, 4.8rem);
  line-height: 0.95;
  text-align: left;
}

.intro-concepts {
  width: min(100%, 22rem);
  margin: 0;
}

.intro-content::before {
  left: clamp(-12rem, -14vw, -4rem);
  width: clamp(28rem, 60vw, 48rem);
  height: clamp(28rem, 60vw, 48rem);
  opacity: 0.58;
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

@media (min-width: 640px) and (max-width: 1023px) {
  .objectives-content .features-grid > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
    justify-self: center;
    width: min(100%, calc((100% - 1rem) / 2));
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
  .intro-bulb {
    top: 32%;
    left: -20rem;
    width: 42rem;
    height: 47rem;
    opacity: 0.4;
  }

  .intro-concept {
    min-height: 58px;
    font-size: 1rem;
  }

  .intro-concept-key {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1.05rem;
  }

  .objectives-content .section-header::before {
    top: auto;
    bottom: -0.6rem;
    width: min(8rem, 44vw);
    height: 2px;
  }
}
</style>
