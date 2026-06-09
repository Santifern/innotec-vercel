<script setup lang="ts">
const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]
const scrollInViewOptions = { once: true, amount: 0.28, margin: '0px 0px -12% 0px' as const }
const staggerInViewOptions = { once: true, amount: 0.35, margin: '0px 0px -10% 0px' as const }

const problemCards = [
  {
    kicker: 'Problemática 2025',
    title: 'Trámites Gubernamentales',
    sponsor: 'Sudameris',
    paragraphs: [
      'Los trámites burocráticos en Paraguay, como registro civil, cédula, multas y certificados, suelen ser lentos, confusos y poco accesibles, generando pérdida de tiempo y frustración en los ciudadanos. El desafío consiste en diseñar una herramienta que facilite la gestión de estos procesos mediante información clara y organizada sobre requisitos, pasos y lugares de atención.',
      'El objetivo es reducir la saturación en oficinas públicas, mejorar la accesibilidad a los servicios estatales y optimizar la experiencia ciudadana al interactuar con el sistema gubernamental.'
    ]
  },
  {
    kicker: 'Problemática 2025',
    title: 'Asistente Virtual Bancario',
    sponsor: 'Sudameris',
    paragraphs: [
      'Asistente virtual especializado en créditos y productos bancarios que guía a los clientes en la comprensión, comparación y uso de servicios financieros como préstamos, tarjetas e inversiones. El objetivo es ofrecer un acompañamiento accesible y en lenguaje claro que reduzca la desconfianza, evite malas decisiones y descongestione las sucursales bancarias.',
      'La herramienta permitiría al usuario explorar diferentes opciones de productos adaptados a sus necesidades, con explicaciones simples y comparativas visuales. Además, podría incorporar recomendaciones personalizadas, simuladores de crédito y recordatorios de pagos, mejorando la experiencia del cliente y fomentando una educación financiera más inclusiva.'
    ]
  }
] as const

const stageCards = [
  {
    number: '01',
    icon: 'i-lucide-route',
    title: 'Design Thinking',
    subtitle: 'Diseño estratégico de la solución',
    description: 'Los equipos analizan la problemática y construyen la base conceptual de la propuesta: qué se hará, cómo funcionará, por qué es viable y cómo podría implementarse.',
    result: 'Documento conceptual con la estructura inicial del proyecto.'
  },
  {
    number: '02',
    icon: 'i-simple-icons-figma',
    title: 'Prototipo funcional',
    subtitle: 'Construcción interactiva en Figma',
    description: 'La etapa central del Hackathon. Los equipos representan visual e interactivamente cómo funcionaría su solución en un contexto real, desde el primer día hasta la mañana del segundo.',
    result: 'Prototipo estratégico capaz de demostrar experiencia de uso y aplicación práctica.'
  },
  {
    number: '03',
    icon: 'i-lucide-presentation',
    title: 'Pitch & presentación',
    subtitle: 'Comunicar el valor de la solución',
    description: 'Los participantes presentan su proyecto frente a un jurado que evalúa claridad, impacto, viabilidad, funcionamiento del prototipo y capacidad de transmitir una visión convincente.',
    result: 'Presentación ante profesionales, expertos y potenciales aliados.'
  },
  {
    number: '04',
    icon: 'i-lucide-trophy',
    title: 'Evaluación final',
    subtitle: 'Deliberación y premiación',
    description: 'Se reconocen las soluciones que combinan innovación, creatividad, funcionalidad, análisis estratégico y potencial de aplicación en el mundo real.',
    result: 'Cierre de una experiencia intensiva, colaborativa y cercana al entorno profesional.'
  }
] as const

const evaluationCriteria = [
  'Diseño estratégico inicial',
  'Funcionalidad del prototipo',
  'Creatividad e innovación',
  'Viabilidad de implementación',
  'Comunicación del equipo'
] as const

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

function updateTrackHover(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--hover-x', `${event.clientX - rect.left}px`)
  card.style.setProperty('--hover-y', `${event.clientY - rect.top}px`)
}

function resetTrackHover(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement
  card.style.removeProperty('--hover-x')
  card.style.removeProperty('--hover-y')
}
</script>

<template>
  <section
    id="actividades"
    class="innotec-section tracks-section"
    aria-labelledby="tracks-title"
  >
    <div class="section-container tracks-container">
      <Motion
        v-bind="scrollMotion()"
        class="section-header tracks-header"
      >
        <span class="section-label">Ponencias y Tracks</span>
        <h2
          id="tracks-title"
          class="section-title"
        >
          Problemáticas reales, soluciones con estrategia.
        </h2>
        <p class="section-description">
          El Hackathon trabaja con desafíos concretos y un proceso por etapas que simula la creación, validación y presentación de una solución innovadora.
        </p>
      </Motion>

      <div class="problem-cards-grid">
        <Motion
          v-for="(problem, index) in problemCards"
          :key="problem.title"
          v-bind="staggerMotion(index)"
        >
          <article
            class="problem-card"
            @pointermove="updateTrackHover"
            @pointerleave="resetTrackHover"
          >
            <div class="problem-card-body">
              <p class="problem-card-kicker">
                {{ problem.kicker }} · {{ problem.sponsor }}
              </p>
              <h3 class="problem-card-title">
                {{ problem.title }}
              </h3>
              <div class="problem-card-copy">
                <p class="problem-card-copy-main">
                  {{ problem.paragraphs[0] }}
                </p>
                <p
                  v-if="problem.paragraphs[1]"
                  class="problem-card-copy-outcome"
                >
                  {{ problem.paragraphs[1] }}
                </p>
              </div>
            </div>
          </article>
        </Motion>
      </div>

      <Motion
        v-bind="scrollMotion(0.1)"
        class="stages-panel"
      >
        <div class="stages-heading">
          <span class="section-label">Actividades</span>
          <h3 class="stages-title">Las cuatro fases del Hackathon</h3>
          <p class="stages-description">
            Cada etapa está pensada para llevar una idea desde el análisis inicial hasta una presentación defendible frente a jurado.
          </p>
        </div>

        <div class="stages-grid">
          <Motion
            v-for="(stage, index) in stageCards"
            :key="stage.number"
            v-bind="staggerMotion(index)"
          >
            <article
              class="stage-card"
              @pointermove="updateTrackHover"
              @pointerleave="resetTrackHover"
            >
              <div class="stage-card-top">
                <span class="stage-number">{{ stage.number }}</span>
                <span class="stage-icon">
                  <Icon
                    :name="stage.icon"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <h4 class="stage-title">{{ stage.title }}</h4>
              <p class="stage-subtitle">
                {{ stage.subtitle }}
              </p>
              <p class="stage-description">
                {{ stage.description }}
              </p>
              <p class="stage-result">
                {{ stage.result }}
              </p>
            </article>
          </Motion>
        </div>

        <div class="criteria-card">
          <div class="criteria-header">
            <span class="criteria-label">Durante el pitch se evalúa</span>
            <h4 class="criteria-title">Criterios de presentación</h4>
          </div>
          <ul class="criteria-list">
            <li
              v-for="criterion in evaluationCriteria"
              :key="criterion"
              class="criteria-item"
            >
              <Icon
                name="i-lucide-check"
                aria-hidden="true"
                class="criteria-icon"
              />
              {{ criterion }}
            </li>
          </ul>
        </div>
      </Motion>
    </div>
  </section>

  <div class="section-divider" />
</template>

<style scoped src="~/assets/css/components/hackathon-ponencias-tracks.css"></style>
