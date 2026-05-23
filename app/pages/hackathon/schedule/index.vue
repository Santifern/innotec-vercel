<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

useSeoMeta({
  title: 'Programa Hackathon - INNOTEC 2026',
  ogTitle: 'Programa Hackathon - INNOTEC 2026',
  description: 'Cronograma detallado de actividades del Hackathon INNOTEC 2026.',
  ogDescription: 'Cronograma detallado de actividades del Hackathon INNOTEC 2026.'
})

const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]
const scrollInViewOptions = { once: true, amount: 0.28, margin: '0px 0px -12% 0px' as const }

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
    initial: { opacity: 0, y: 14, filter: 'blur(3px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    inViewOptions: scrollInViewOptions,
    transition: { duration: 0.52, delay: index * 0.055, ease: smoothEase }
  }
}

interface ScheduleEvent {
  time: string
  label: string
  highlight: boolean // true = evento clave (relleno), false = actividad (outline)
}

interface ScheduleDay {
  day: string
  events: ScheduleEvent[]
}

//? EDITAR LOS DÍAS Y EVENTOS DEL HACKATHON AQUÍ
const schedule: ScheduleDay[] = [
  {
    day: 'Día 1',
    events: [
      { time: '8:00',  label: 'Acreditación',              highlight: true  },
      { time: '8:30',  label: 'Proceso de Design Thinking', highlight: false },
      { time: '12:30', label: 'Almuerzo',                   highlight: true  },
      { time: '14:00', label: 'Acreditación',              highlight: true  },
      { time: '14:15', label: 'Figma',                      highlight: false },
      { time: '15:00', label: 'Trabajo en Grupos',          highlight: false },
      { time: '20:00', label: 'Cierre Día 1',               highlight: true  }
    ]
  },
  {
    day: 'Día 2',
    events: [
      { time: '8:00',  label: 'Acreditación',                   highlight: true  },
      { time: '8:30',  label: 'Trabajo en Grupos',               highlight: false },
      { time: '12:00', label: 'Almuerzo',                        highlight: true  },
      { time: '13:30', label: 'Preparación de Presentaciones',   highlight: false },
      { time: '14:30', label: 'Presentación al Jurado',          highlight: false },
      { time: '18:30', label: 'Premiación',                      highlight: true  }
    ]
  }
]
</script>

<template>
  <section
    id="cronograma"
    class="innotec-section hackathon-schedule-section"
  >
    <div class="schedule-bg-glow schedule-bg-glow--left" />
    <div class="schedule-bg-glow schedule-bg-glow--right" />

    <div class="section-container">
      <!-- Header -->
      <Motion
        v-bind="scrollMotion()"
        class="schedule-header"
      >
        <span class="section-label">Hackathon</span>
        <h2 class="section-title">
          Cronograma
        </h2>
        <p class="section-description">
          Dos días de innovación, trabajo en equipo y aprendizaje intensivo.
        </p>
      </Motion>

      <!-- Days grid -->
      <div class="schedule-days">
        <Motion
          v-for="(dayData, dayIndex) in schedule"
          :key="dayData.day"
          v-bind="scrollMotion(dayIndex * 0.12)"
          class="schedule-day"
        >
          <!-- Day header -->
          <div class="schedule-day-header">
            <div class="schedule-day-meta">
              <h3 class="schedule-day-title">
                Cronograma
                <strong>{{ dayData.day }}</strong>
              </h3>
              <div class="schedule-day-badge">
                HACKATHON
              </div>
            </div>
            <div class="schedule-col-labels">
              <span>Horario</span>
              <span class="schedule-col-divider" aria-hidden="true" />
              <span>Evento</span>
            </div>
          </div>

          <!-- Events -->
          <div class="schedule-events">
            <Motion
              v-for="(event, eventIndex) in dayData.events"
              :key="`${dayData.day}-${event.time}`"
              v-bind="staggerMotion(eventIndex)"
            >
              <div
                class="schedule-event"
                :class="event.highlight ? 'schedule-event--highlight' : 'schedule-event--default'"
              >
                <span class="schedule-event-time">{{ event.time }}</span>
                <span class="schedule-event-label">{{ event.label }}</span>
              </div>
            </Motion>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hackathon-schedule-section {
  position: relative;
  z-index: 2;
  overflow: hidden;
  isolation: isolate;
  padding-top: clamp(3rem, 6vw, 5.5rem);
  padding-bottom: clamp(3rem, 6vw, 5.5rem);
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}

.schedule-bg-glow {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(90px);
}

.schedule-bg-glow--left {
  top: 10%;
  left: -18%;
  width: clamp(24rem, 48vw, 44rem);
  height: clamp(24rem, 48vw, 44rem);
  background: radial-gradient(circle, rgba(25, 68, 240, 0.14) 0%, rgba(25, 68, 240, 0.06) 50%, transparent 72%);
}

.schedule-bg-glow--right {
  bottom: 5%;
  right: -14%;
  width: clamp(20rem, 38vw, 36rem);
  height: clamp(20rem, 38vw, 36rem);
  background: radial-gradient(circle, rgba(55, 230, 241, 0.07) 0%, transparent 65%);
}

.section-container {
  max-width: 1040px;
  margin: 0 auto;
}

/* ===== HEADER ===== */
.schedule-header {
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.section-label {
  display: inline-block;
  font-size: 1.5rem;
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
  font-size: clamp(1.9rem, 4.5vw, 2.75rem);
  font-weight: 900;
  color: #F3F6FE;
  margin: 0 0 0.75rem;
  line-height: 1.1;
  letter-spacing: 0;
}

.section-description {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.65);
  max-width: 440px;
  margin: 0 auto;
}

/* ===== DAYS GRID ===== */
.schedule-days {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 860px) {
  .schedule-days {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* ===== SINGLE DAY ===== */
.schedule-day {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid rgba(123, 138, 247, 0.22);
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(13, 20, 40, 0.72), rgba(9, 14, 28, 0.62));
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.04);
}

/* ===== DAY HEADER ===== */
.schedule-day-header {
  padding: 1.1rem 1.4rem 0;
  background: rgba(25, 68, 240, 0.06);
  border-bottom: 1px solid rgba(123, 138, 247, 0.18);
}

.schedule-day-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.schedule-day-title {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1.05rem;
  font-weight: 400;
  color: rgba(203, 209, 251, 0.8);
  margin: 0;
  letter-spacing: 0;
}

.schedule-day-title strong {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 900;
  color: #F3F6FE;
}

.schedule-day-badge {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: rgba(123, 138, 247, 0.7);
  border: 1px solid rgba(123, 138, 247, 0.28);
  border-radius: 4px;
  padding: 0.2rem 0.6rem;
  background: rgba(25, 68, 240, 0.08);
}

.schedule-col-labels {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 0.6rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.72rem;
  font-weight: 900;
  color: rgba(123, 138, 247, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.schedule-col-divider {
  display: inline-block;
  width: 1px;
  height: 12px;
  background: rgba(123, 138, 247, 0.32);
  flex-shrink: 0;
}

/* ===== EVENTS LIST ===== */
.schedule-events {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 0.75rem 0.75rem;
}

/* ===== SINGLE EVENT ===== */
.schedule-event {
  display: flex;
  align-items: center;
  gap: 0;
  border-radius: 7px;
  overflow: hidden;
  min-height: 2.75rem;
}

.schedule-event-time {
  flex-shrink: 0;
  width: 4.25rem;
  padding: 0.6rem 0.75rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.84rem;
  font-weight: 900;
  text-align: center;
  line-height: 1;
}

.schedule-event-label {
  flex: 1;
  padding: 0.6rem 1rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.88rem;
  font-weight: 900;
  line-height: 1.3;
  text-align: center;
}

/* Highlight event (relleno) */
.schedule-event--highlight {
  background: linear-gradient(90deg, #1235C8 0%, #1944F0 52%, #2B45F3 100%);
  border: 1px solid rgba(55, 230, 241, 0.28);
  box-shadow: 0 0 18px rgba(25, 68, 240, 0.28), inset 0 1px 0 rgba(243, 246, 254, 0.1);
}

.schedule-event--highlight .schedule-event-time {
  color: rgba(203, 209, 251, 0.72);
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}

.schedule-event--highlight .schedule-event-label {
  color: #F3F6FE;
}

/* Default event (outline) */
.schedule-event--default {
  background: rgba(25, 68, 240, 0.06);
  border: 1px solid rgba(123, 138, 247, 0.22);
}

.schedule-event--default .schedule-event-time {
  color: rgba(123, 138, 247, 0.72);
  border-right: 1px solid rgba(123, 138, 247, 0.18);
}

.schedule-event--default .schedule-event-label {
  color: rgba(203, 209, 251, 0.82);
}
</style>
