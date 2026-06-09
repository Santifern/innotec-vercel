<script setup lang="ts">
definePageMeta({
  colorMode: 'dark',
  layout: 'hackathon',
  section: 'hackathon'
})

const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]
const scrollInViewOptions = { once: true, amount: 0.28, margin: '0px 0px -12% 0px' as const }
const staggerInViewOptions = { once: true, amount: 0.35, margin: '0px 0px -10% 0px' as const }

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
  description: 'Informacion del Hackathon INNOTEC 2026: mision, fecha, publico objetivo, metodologia y propositos del evento.',
  ogDescription: 'Informacion del Hackathon INNOTEC 2026: mision, fecha, publico objetivo, metodologia y propositos del evento.'
})
</script>

<template>
  <div class="hackathon-about-page acerca-page">
    <section
      id="acerca"
      class="hackathon-about-section acerca-section"
    >
      <div class="section-container acerca-container">
        <Motion
          v-bind="scrollMotion()"
          class="acerca-header"
        >
          <div class="acerca-title-line" />
          <h2 class="acerca-title">
            Acerca del Congreso
          </h2>
          <p class="acerca-lema">
            Innovación colaborativa para resolver desafíos reales
          </p>
        </Motion>

        <Motion
          v-bind="scrollMotion(0.1)"
          class="acerca-description-wrapper"
        >
          <p class="acerca-description-label">
            ¿Por qué el Hackathon?
          </p>
          <p class="acerca-description">
            El Hackathon INNOTEC 2026 conecta estudiantes de distintas disciplinas para enfrentar desafíos reales mediante innovación colaborativa, ideación, prototipado y presentación de soluciones en un entorno cercano al mundo profesional.
          </p>
        </Motion>

        <Motion
          v-bind="scrollMotion(0.05)"
          class="acerca-ejes-header"
        >
          <h3 class="acerca-ejes-title">
            Propósitos del Hackathon
          </h3>
        </Motion>

        <div class="acerca-ejes-grid">
          <Motion v-bind="staggerMotion(0)">
            <div
              class="acerca-eje-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <span class="acerca-eje-num">01</span>
              <h4 class="acerca-eje-title">
                Innovar
              </h4>
              <p class="acerca-eje-desc">
                Transformar problemas reales en soluciones con potencial de impacto mediante ideas creativas, pensamiento estratégico y validación práctica.
              </p>
            </div>
          </Motion>

          <Motion v-bind="staggerMotion(1)">
            <div
              class="acerca-eje-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <span class="acerca-eje-num">02</span>
              <h4 class="acerca-eje-title">
                Colaborar
              </h4>
              <p class="acerca-eje-desc">
                Reunir perfiles diversos de tecnología, diseño, ingeniería, comunicación y análisis para construir propuestas más completas.
              </p>
            </div>
          </Motion>

          <Motion v-bind="staggerMotion(2)">
            <div
              class="acerca-eje-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <span class="acerca-eje-num">03</span>
              <h4 class="acerca-eje-title">
                Crecer
              </h4>
              <p class="acerca-eje-desc">
                Desarrollar habilidades prácticas de liderazgo, comunicación, prototipado y trabajo en equipo en un entorno cercano al mundo profesional.
              </p>
            </div>
          </Motion>
        </div>

        <Motion
          v-bind="scrollMotion(0.05)"
          class="acerca-ejes-header"
        >
          <h3 class="acerca-ejes-title">
            Ejes Temáticos
          </h3>
        </Motion>

        <div class="acerca-ejes-grid">
          <Motion v-bind="staggerMotion(0)">
            <div
              class="acerca-eje-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <span class="acerca-eje-num">01</span>
              <h4 class="acerca-eje-title">
                Innovación y Tecnología Aplicada
              </h4>
              <p class="acerca-eje-desc">
                Desarrollo de ideas y prototipos tecnológicos orientados a resolver necesidades reales mediante herramientas digitales, automatización, plataformas, aplicaciones y tecnologías emergentes.
              </p>
            </div>
          </Motion>

          <Motion v-bind="staggerMotion(1)">
            <div
              class="acerca-eje-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <span class="acerca-eje-num">02</span>
              <h4 class="acerca-eje-title">
                Trabajo Interdisciplinario
              </h4>
              <p class="acerca-eje-desc">
                Integración de participantes de distintas carreras, habilidades y perspectivas para construir soluciones más completas, creativas y funcionales.
              </p>
            </div>
          </Motion>

          <Motion v-bind="staggerMotion(2)">
            <div
              class="acerca-eje-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <span class="acerca-eje-num">03</span>
              <h4 class="acerca-eje-title">
                Resolución de Problemáticas Reales
              </h4>
              <p class="acerca-eje-desc">
                Análisis de desafíos actuales del entorno social, empresarial, institucional o cotidiano, buscando propuestas viables y con impacto tangible.
              </p>
            </div>
          </Motion>

          <Motion v-bind="staggerMotion(3)">
            <div
              class="acerca-eje-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <span class="acerca-eje-num">04</span>
              <h4 class="acerca-eje-title">
                Creatividad y Pensamiento Estratégico
              </h4>
              <p class="acerca-eje-desc">
                Impulso de ideas fuera de lo convencional, fomentando el pensamiento crítico, la capacidad de adaptación y la construcción de propuestas innovadoras.
              </p>
            </div>
          </Motion>

          <Motion v-bind="staggerMotion(4)">
            <div
              class="acerca-eje-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <span class="acerca-eje-num">05</span>
              <h4 class="acerca-eje-title">
                Simulación del Entorno Profesional
              </h4>
              <p class="acerca-eje-desc">
                Experiencia práctica que replica dinámicas reales del mundo laboral: trabajo en equipo, liderazgo, comunicación, validación de ideas, networking y presentación de proyectos.
              </p>
            </div>
          </Motion>

          <Motion v-bind="staggerMotion(5)">
            <div
              class="acerca-eje-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <span class="acerca-eje-num">06</span>
              <h4 class="acerca-eje-title">
                Viabilidad e Impacto
              </h4>
              <p class="acerca-eje-desc">
                Construcción de soluciones considerando aspectos técnicos, humanos, legales, sociales y operativos que permitan proyectar su posible implementación en la vida real.
              </p>
            </div>
          </Motion>
        </div>

        <div class="acerca-separator" />

        <div class="acerca-info-grid">
          <Motion
            v-bind="staggerMotion(0)"
            class="acerca-info-item acerca-info-item--dates"
          >
            <div
              class="acerca-info-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <div class="acerca-card-header">
                <div class="acerca-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    />
                    <line
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="6"
                    />
                    <line
                      x1="8"
                      y1="2"
                      x2="8"
                      y2="6"
                    />
                    <line
                      x1="3"
                      y1="10"
                      x2="21"
                      y2="10"
                    />
                  </svg>
                </div>
                <h3 class="acerca-card-title">
                  Fechas y Horarios
                </h3>
              </div>
              <div class="acerca-dates">
                <div class="acerca-date-row">
                  <span class="acerca-date-label">Jornada 1</span>
                  <span class="acerca-date-value">Jueves 20 de agosto, 2026</span>
                  <span class="acerca-date-time">8:00 - 21:30</span>
                </div>
                <div class="acerca-date-row">
                  <span class="acerca-date-label">Jornada 2</span>
                  <span class="acerca-date-value">Viernes 21 de agosto, 2026</span>
                  <span class="acerca-date-time">8:00 - 18:00</span>
                </div>
              </div>
            </div>
          </Motion>

          <Motion
            v-bind="staggerMotion(1)"
            class="acerca-info-item acerca-info-item--venue"
          >
            <div
              class="acerca-info-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <div class="acerca-card-header">
                <div class="acerca-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                    />
                  </svg>
                </div>
                <h3 class="acerca-card-title">
                  Sede
                </h3>
              </div>
              <p class="acerca-card-text">
                Asunción, Paraguay. Un espacio pensado para trabajar en equipo, recibir mentoría y presentar soluciones ante referentes del ecosistema.
              </p>
              <div class="acerca-map-card">
                <iframe
                  title="Mapa de Paseo La Galeria"
                  aria-label="Mapa interactivo de Paseo La Galeria"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3033.594586837846!2d-57.5632898079186!3d-25.284970358490114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da95c9e1ac62d%3A0x80a919912d273b72!2sPaseo%20La%20Galeria%20Centro%20de%20Eventos!5e0!3m2!1ses!2sus!4v1779061008728!5m2!1ses!2sus"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  tabindex="0"
                  allowfullscreen
                />
              </div>
              <a
                href="https://maps.app.goo.gl/6DwDZ3ufGv9iApxLA"
                target="_blank"
                rel="noopener noreferrer"
                class="acerca-maps-btn"
              >
                Ver en Google Maps
              </a>
            </div>
          </Motion>

          <Motion
            v-bind="staggerMotion(2)"
            class="acerca-info-item acerca-info-item--audience"
          >
            <div
              class="acerca-info-card"
              @pointermove="updateCardHover"
              @pointerleave="resetCardHover"
            >
              <div class="acerca-card-header">
                <div class="acerca-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                    />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 class="acerca-card-title">
                  ¿Para quién?
                </h3>
              </div>
              <p class="acerca-card-text">
                Estudiantes de distintas carreras y perfiles interesados en innovación, tecnología, diseño, gestión, análisis e investigación.
              </p>
            </div>
          </Motion>
        </div>

        <HackathonOrganizadoresSection />
      </div>
    </section>
  </div>
</template>

<style scoped src="~/assets/css/pages/hackathon-hackathon-acerca.css"></style>
