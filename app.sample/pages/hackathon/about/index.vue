<script setup lang="ts">
definePageMeta({
  layout: 'hackathon',
  colorMode: 'dark'
})

const scrollMotion = useScrollMotionAdvanced
const staggerMotion = (index: number = 0) => useStaggerMotionAdvanced(index, 0)

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

useSeoMeta({
  title: 'Acerca del Congreso | HACKATHON 2026',
  ogTitle: 'Acerca del Congreso | HACKATHON 2026',
  description: 'Información del Hackathon INNOTEC 2026: misión, fecha, público objetivo, metodología y propósitos del evento.',
  ogDescription: 'Información del Hackathon INNOTEC 2026: misión, fecha, público objetivo, metodología y propósitos del evento.'
})

const propositos = [
  {
    num: '01',
    title: 'Innovar',
    desc: 'Transformar problemas reales en soluciones con potencial de impacto mediante ideas creativas, pensamiento estratégico y validación práctica.'
  },
  {
    num: '02',
    title: 'Colaborar',
    desc: 'Reunir perfiles diversos de tecnología, diseño, ingeniería, comunicación y análisis para construir propuestas más completas.'
  },
  {
    num: '03',
    title: 'Crecer',
    desc: 'Desarrollar habilidades prácticas de liderazgo, comunicación, prototipado y trabajo en equipo en un entorno cercano al mundo profesional.'
  }
]

const ejes = [
  {
    num: '01',
    title: 'Innovación y Tecnología Aplicada',
    desc: 'Desarrollo de ideas y prototipos tecnológicos orientados a resolver necesidades reales mediante herramientas digitales, automatización, plataformas, aplicaciones y tecnologías emergentes.'
  },
  {
    num: '02',
    title: 'Trabajo Interdisciplinario',
    desc: 'Integración de participantes de distintas carreras, habilidades y perspectivas para construir soluciones más completas, creativas y funcionales.'
  },
  {
    num: '03',
    title: 'Resolución de Problemáticas Reales',
    desc: 'Análisis de desafíos actuales del entorno social, empresarial, institucional o cotidiano, buscando propuestas viables y con impacto tangible.'
  },
  {
    num: '04',
    title: 'Creatividad y Pensamiento Estratégico',
    desc: 'Impulso de ideas fuera de lo convencional, fomentando el pensamiento crítico, la capacidad de adaptación y la construcción de propuestas innovadoras.'
  },
  {
    num: '05',
    title: 'Simulación del Entorno Profesional',
    desc: 'Experiencia práctica que replica dinámicas reales del mundo laboral: trabajo en equipo, liderazgo, comunicación, validación de ideas, networking y presentación de proyectos.'
  },
  {
    num: '06',
    title: 'Viabilidad e Impacto',
    desc: 'Construcción de soluciones considerando aspectos técnicos, humanos, legales, sociales y operativos que permitan proyectar su posible implementación en la vida real.'
  }
]
</script>

<template>
  <div class="hk-about-page hackathon-page">
    <!-- Decorative background glow -->
    <div class="hk-bg-glow hk-bg-glow--top" aria-hidden="true" />
    <div class="hk-bg-glow hk-bg-glow--mid" aria-hidden="true" />

    <section id="acerca" class="hk-section">
      <div class="hk-container">

        <!-- ===== PAGE HEADER ===== -->
        <Motion v-bind="scrollMotion()" class="hk-page-header">
          <h1 class="hk-page-title">Acerca del Congreso</h1>
          <p class="hk-page-subtitle">Innovación colaborativa para resolver desafíos reales</p>
        </Motion>

        <!-- ===== WHY HACKATHON ===== -->
        <Motion v-bind="scrollMotion(0.1)" class="hk-why-block">
          <p class="hk-why-label">¿Por qué el Hackathon?</p>
          <p class="hk-why-text">
            El Hackathon INNOTEC 2026 conecta estudiantes de distintas disciplinas para enfrentar
            desafíos reales mediante innovación colaborativa, ideación, prototipado y presentación de
            soluciones en un entorno cercano al mundo profesional.
          </p>
        </Motion>

        <!-- ===== PROPOSITOS ===== -->
        <div class="hk-block">
          <Motion v-bind="scrollMotion(0.05)" class="hk-block-header">
            <h2 class="hk-section-title">Propósitos del Hackathon</h2>
          </Motion>

          <div class="hk-cards-grid hk-cards-grid--3">
            <Motion
              v-for="(item, i) in propositos"
              :key="item.num"
              v-bind="staggerMotion(i)"
            >
              <div
                class="hk-card"
                @pointermove="updateCardHover"
                @pointerleave="resetCardHover"
              >
                <span class="hk-card-num">{{ item.num }}</span>
                <h3 class="hk-card-title">{{ item.title }}</h3>
                <p class="hk-card-desc">{{ item.desc }}</p>
              </div>
            </Motion>
          </div>
        </div>

        <!-- ===== EJES TEMATICOS ===== -->
        <div class="hk-block">
          <Motion v-bind="scrollMotion(0.05)" class="hk-block-header">
            <h2 class="hk-section-title">Ejes Temáticos</h2>
          </Motion>

          <div class="hk-cards-grid hk-cards-grid--3">
            <Motion
              v-for="(eje, i) in ejes"
              :key="eje.num"
              v-bind="staggerMotion(i)"
            >
              <div
                class="hk-card"
                @pointermove="updateCardHover"
                @pointerleave="resetCardHover"
              >
                <span class="hk-card-num">{{ eje.num }}</span>
                <h3 class="hk-card-title">{{ eje.title }}</h3>
                <p class="hk-card-desc">{{ eje.desc }}</p>
              </div>
            </Motion>
          </div>
        </div>

        <!-- ===== SEPARATOR ===== -->
        <div class="hk-divider" aria-hidden="true" />

        <!-- ===== INFO GRID ===== -->
        <div class="hk-info-grid">
          <!-- Left: Fechas & Público -->
          <div class="hk-info-col">
            <!-- Fechas -->
            <Motion v-bind="staggerMotion(0)">
              <div class="hk-info-card" @pointermove="updateCardHover" @pointerleave="resetCardHover">
                <div class="hk-info-card-header">
                  <div class="hk-info-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <h3 class="hk-info-card-title">Fechas y Horarios</h3>
                </div>
                <div class="hk-dates">
                  <div class="hk-date-row">
                    <span class="hk-date-label">JORNADA 1</span>
                    <span class="hk-date-value">Jueves 20 de agosto, 2026</span>
                    <span class="hk-date-time">8:00 - 21:30</span>
                  </div>
                  <div class="hk-date-row">
                    <span class="hk-date-label">JORNADA 2</span>
                    <span class="hk-date-value">Viernes 21 de agosto, 2026</span>
                    <span class="hk-date-time">8:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </Motion>

            <!-- Público -->
            <Motion v-bind="staggerMotion(2)">
              <div class="hk-info-card" @pointermove="updateCardHover" @pointerleave="resetCardHover">
                <div class="hk-info-card-header">
                  <div class="hk-info-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 class="hk-info-card-title">¿Para quién?</h3>
                </div>
                <p class="hk-info-card-text">
                  Estudiantes de distintas carreras y perfiles interesados en innovación, tecnología, diseño, gestión, análisis e investigación.
                </p>
              </div>
            </Motion>
          </div>

          <!-- Right: Sede -->
          <div class="hk-info-col hk-info-col--wide">
            <Motion v-bind="staggerMotion(1)">
              <div class="hk-info-card" @pointermove="updateCardHover" @pointerleave="resetCardHover">
                <div class="hk-info-card-header">
                  <div class="hk-info-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 class="hk-info-card-title">Sede</h3>
                </div>
                <p class="hk-info-card-text">
                  Asunción, Paraguay. Un espacio pensado para trabajar en equipo, recibir mentoría y presentar soluciones ante referentes del ecosistema.
                </p>
                <div class="hk-map">
                  <iframe
                    title="Mapa de Asunción, Paraguay"
                    aria-label="Mapa interactivo de Asunción, Paraguay"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48461.73289886077!2d-57.678724624042934!3d-25.296829304998945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8fef62b9f09%3A0x9b849021043f89c!2sAsunci%C3%B3n!5e0!3m2!1ses!2sus!4v1779061008728!5m2!1ses!2sus"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    tabindex="0"
                    allowfullscreen
                  />
                </div>
                <a
                  href="https://maps.app.goo.gl/9cZz5GxK9P2isRmx5"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hk-maps-btn"
                >
                  Ver en Google Maps
                </a>
              </div>
            </Motion>
          </div>
        </div>

        <!-- ===== ORGANIZADORES ===== -->
        <Motion v-bind="scrollMotion(0.1)">
          <LazyHackathonOrganizadoresSection />
        </Motion>

      </div>
    </section>
  </div>
</template>

<style scoped>
/* ===== PAGE WRAPPER ===== */
.hk-about-page {
  position: relative;
  min-height: 100vh;
  background: #08041A;
  overflow: hidden;
}

/* Background glow blobs */
.hk-bg-glow {
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
  filter: blur(120px);
  z-index: 0;
}

.hk-bg-glow--top {
  top: -8rem;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(123, 74, 246, 0.18) 0%, rgba(163, 114, 248, 0.08) 50%, transparent 80%);
}

.hk-bg-glow--mid {
  top: 40%;
  right: -10rem;
  width: 500px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(84, 52, 212, 0.1) 0%, transparent 70%);
}

/* ===== SECTION ===== */
.hk-section {
  position: relative;
  z-index: 2;
  padding: clamp(6rem, 10vw, 9rem) 0 clamp(4rem, 7vw, 7rem);
}

/* ===== CONTAINER ===== */
.hk-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(3.5rem, 6vw, 5rem);
}

/* ===== PAGE HEADER ===== */
.hk-page-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.hk-page-title {
  font-family: 'Fractul Black', 'Fractul', system-ui, sans-serif;
  font-size: clamp(2.4rem, 5.5vw, 3.75rem);
  font-weight: 900;
  color: #f3f6fe;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin: 0;
}

.hk-page-subtitle {
  font-family: 'Fractul Regular', 'Fractul', system-ui, sans-serif;
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(203, 190, 246, 0.75);
  margin: 0;
  line-height: 1.6;
}

/* ===== WHY BLOCK ===== */
.hk-why-block {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  max-width: 680px;
  margin: 0 auto;
}

.hk-why-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #a372f8;
  margin: 0;
}

.hk-why-text {
  font-family: 'Fractul Regular', 'Fractul', system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(220, 210, 246, 0.82);
  margin: 0;
  text-align: center;
}

/* ===== BLOCK (section group) ===== */
.hk-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hk-block-header {
  text-align: center;
}

.hk-section-title {
  font-family: 'Fractul Black', 'Fractul', system-ui, sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.75rem);
  font-weight: 900;
  color: #f3f6fe;
  letter-spacing: -0.025em;
  margin: 0;
  line-height: 1.1;
}

/* ===== CARDS GRID ===== */
.hk-cards-grid {
  display: grid;
  gap: 1.25rem;
}

.hk-cards-grid--3 {
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .hk-cards-grid--3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .hk-cards-grid--3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ===== CARD ===== */
.hk-card {
  position: relative;
  background: linear-gradient(140deg, rgba(20, 14, 50, 0.92) 0%, rgba(14, 10, 38, 0.88) 100%);
  border: 1px solid rgba(163, 114, 248, 0.2);
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  cursor: default;
  height: 100%;
}

.hk-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at var(--hover-x, 50%) var(--hover-y, 50%),
    rgba(163, 114, 248, 0.1) 0%,
    transparent 65%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.hk-card:hover {
  border-color: rgba(163, 114, 248, 0.45);
  box-shadow: 0 4px 32px rgba(123, 74, 246, 0.15), 0 0 0 1px rgba(163, 114, 248, 0.08) inset;
  transform: translateY(-2px);
}

.hk-card:hover::before {
  opacity: 1;
}

.hk-card-num {
  font-family: 'Fractul Black', 'Fractul', system-ui, sans-serif;
  font-size: 2.25rem;
  font-weight: 900;
  color: rgba(163, 114, 248, 0.5);
  display: block;
  line-height: 1;
}

.hk-card-title {
  font-family: 'Fractul Black', 'Fractul', system-ui, sans-serif;
  font-size: 1.05rem;
  font-weight: 900;
  color: #f3f6fe;
  margin: 0;
  line-height: 1.3;
}

.hk-card-desc {
  font-family: 'Fractul Regular', 'Fractul', system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1.75;
  color: rgba(203, 190, 234, 0.75);
  margin: 0;
}

/* ===== DIVIDER ===== */
.hk-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(163, 114, 248, 0.35), transparent);
}

/* ===== INFO GRID ===== */
.hk-info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 900px) {
  .hk-info-grid {
    grid-template-columns: 1fr 1.65fr;
    align-items: start;
  }
}

.hk-info-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* ===== INFO CARD ===== */
.hk-info-card {
  position: relative;
  background: linear-gradient(140deg, rgba(20, 14, 50, 0.92) 0%, rgba(14, 10, 38, 0.88) 100%);
  border: 1px solid rgba(163, 114, 248, 0.2);
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.hk-info-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at var(--hover-x, 50%) var(--hover-y, 50%),
    rgba(163, 114, 248, 0.08) 0%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.hk-info-card:hover {
  border-color: rgba(163, 114, 248, 0.4);
  box-shadow: 0 4px 28px rgba(123, 74, 246, 0.12);
}

.hk-info-card:hover::before {
  opacity: 1;
}

.hk-info-card-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.hk-info-card-icon {
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #a372f8;
}

.hk-info-card-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

.hk-info-card-title {
  font-family: 'Fractul Black', 'Fractul', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 900;
  color: #f3f6fe;
  margin: 0;
}

.hk-info-card-text {
  font-family: 'Fractul Regular', 'Fractul', system-ui, sans-serif;
  font-size: 0.9rem;
  line-height: 1.75;
  color: rgba(203, 190, 234, 0.8);
  margin: 0;
}

/* ===== DATES ===== */
.hk-dates {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.hk-date-row {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.85rem 1rem;
  background: rgba(163, 114, 248, 0.06);
  border: 1px solid rgba(163, 114, 248, 0.15);
  border-radius: 8px;
}

.hk-date-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(163, 114, 248, 0.8);
}

.hk-date-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f3f6fe;
}

.hk-date-time {
  font-size: 0.85rem;
  color: rgba(203, 190, 234, 0.7);
}

/* ===== MAP ===== */
.hk-map {
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(163, 114, 248, 0.2);
}

.hk-map iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
  filter: invert(92%) hue-rotate(188deg) saturate(0.7) brightness(0.85);
}

/* ===== MAP BUTTON ===== */
.hk-maps-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #a372f8;
  background: rgba(163, 114, 248, 0.08);
  border: 1px solid rgba(163, 114, 248, 0.28);
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  align-self: flex-start;
}

.hk-maps-btn:hover {
  background: rgba(163, 114, 248, 0.16);
  border-color: rgba(163, 114, 248, 0.52);
  color: #c9a4ff;
}
</style>
