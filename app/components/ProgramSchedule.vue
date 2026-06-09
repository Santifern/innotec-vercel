<script setup lang="ts">
type DayId = 'day-1' | 'day-2'

type ScheduleActivity = {
  room?: string
  kind: string
  speaker?: string
  title?: string
}

type ScheduleEntry = {
  time: string
  kind: string
  speaker?: string
  title?: string
  room?: string
  activities?: ScheduleActivity[]
  isBreak?: boolean
  span?: boolean
}

const days: Array<{ id: DayId, label: string, dateLabel: string }> = [
  { id: 'day-1', label: 'Día 1', dateLabel: 'Cronograma Día 1' },
  { id: 'day-2', label: 'Día 2', dateLabel: 'Cronograma Día 2' }
]

const scheduleByDay: Record<DayId, ScheduleEntry[]> = {
  'day-1': [
    { time: '07:30', kind: 'Acreditación', isBreak: true, span: true },
    { time: '08:30', kind: 'Ceremonia de apertura', isBreak: true, span: true },
    {
      time: '09:00',
      kind: 'Charla Magistral 1',
      room: 'Salón Magistral',
      title: 'EJE CIVIL - EXPERIENCIAS EN EL TRABAJO',
      span: true
    },
    { time: '09:45', kind: 'Receso', isBreak: true, span: true },
    {
      time: '10:00',
      kind: 'Debate / Roundtable',
      room: 'Salón Magistral',
      title: 'Mix de carreras con un mismo enfoque',
      span: true
    },
    { time: '10:45', kind: 'Coffee Break', isBreak: true, span: true },
    {
      time: '11:25',
      kind: 'Charla Magistral 2',
      room: 'Salón Magistral',
      title: 'EJE ARQUI / DISEÑO',
      span: true
    },
    {
      time: '12:10',
      kind: 'Charla',
      room: 'Salón Magistral',
      title: 'GESTIÓN DE PROYECTOS',
      span: true
    },
    { time: '13:00', kind: 'Almuerzo', isBreak: true, span: true },
    {
      time: '15:00',
      kind: 'Talleres simultáneos',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Taller 1',
          title: 'Civil / Arqui (Construcción)'
        },
        {
          room: 'Salón 2',
          kind: 'Taller 2',
          title: 'Industrial / Informática'
        }
      ]
    },
    { time: '16:30', kind: 'Receso', isBreak: true, span: true },
    {
      time: '16:45',
      kind: 'Charlas simultáneas',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Charla Técnica',
          title: 'Civil'
        },
        {
          room: 'Salón 2',
          kind: 'Charla Técnica',
          title: 'Industrial'
        }
      ]
    },
    {
      time: '17:30',
      kind: 'Charlas simultáneas',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Charla Técnica',
          title: 'Arquitectura'
        },
        {
          room: 'Salón 2',
          kind: 'Charla Técnica',
          title: 'Informática / Electrónica / Análisis'
        }
      ]
    },
    { time: '18:15', kind: 'Bloque turno noche', isBreak: true, span: true },
    {
      time: '20:00',
      kind: 'Talleres y Charlas',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Taller 3',
          title: 'Diseño + Arquitectura + Charla técnica'
        },
        {
          room: 'Salón 2',
          kind: 'Taller 4',
          title: 'Informática / Electrónica / Análisis + Charla técnica'
        }
      ]
    }
  ],
  'day-2': [
    { time: '08:00', kind: 'Acreditación', isBreak: true, span: true },
    { time: '08:30', kind: 'Apertura', isBreak: true, span: true },
    {
      time: '09:00',
      kind: 'Actividades simultáneas',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Taller',
          title: 'START UP / PITCH (Liderazgo / Inicio de trabajo)'
        },
        {
          room: 'Salón 2',
          kind: 'Visitas Técnicas',
          title: 'RRPP'
        }
      ]
    },
    { time: '13:00', kind: 'Almuerzo', isBreak: true, span: true },
    {
      time: '15:00',
      kind: 'Charla Magistral',
      room: 'Salón Magistral',
      title: 'INDUSTRIAL / CIVIL + EMPRENDEDURISMO',
      span: true
    },
    { time: '15:45', kind: 'Receso', isBreak: true, span: true },
    {
      time: '16:00',
      kind: 'Charla Magistral',
      room: 'Salón Magistral',
      title: 'INFORMATICA / ANALISIS DE SISTEMAS',
      span: true
    },
    {
      time: '16:45',
      kind: 'Charla Magistral',
      room: 'Salón Magistral',
      title: 'CIERRE IMPORTANTE',
      span: true
    },
    { time: '17:45', kind: 'Presentación breve ganador Hackathon', isBreak: true, span: true },
    { time: '18:00', kind: 'Premiación Hackathon', isBreak: true, span: true },
    { time: '19:00', kind: 'Clausura del congreso', isBreak: true, span: true }
  ]
}

const activeDay = ref<DayId>('day-1')
const prefersReducedMotion = usePreferredReducedMotion()

const activeDayMeta = computed(() => {
  return days.find(day => day.id === activeDay.value) ?? days[0]!
})

const activeSchedule = computed(() => scheduleByDay[activeDay.value])

function setActiveDay(dayId: DayId) {
  activeDay.value = dayId
}

function getEntrySide(index: number) {
  return index % 2 === 0 ? 'left' : 'right'
}

function scheduleMotion(index: number) {
  const direction = getEntrySide(index) === 'left' ? -42 : 42
  const shouldReduce = prefersReducedMotion.value === 'reduce'

  return {
    initial: shouldReduce ? { opacity: 0 } : { opacity: 0, x: direction, y: 18, filter: 'blur(6px)' },
    whileInView: shouldReduce ? { opacity: 1 } : { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
    inViewOptions: { once: true, amount: 0.22, margin: '0px 0px -10% 0px' as const },
    transition: {
      duration: shouldReduce ? 0.01 : 0.58,
      delay: shouldReduce ? 0 : index * 0.045,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
}
</script>

<template>
  <section
    id="cronograma"
    class="program-section"
  >
    <div class="program-bg-line program-bg-line--one" />
    <div class="program-bg-line program-bg-line--two" />
    <div class="program-glow program-glow--left" />
    <div class="program-glow program-glow--right" />

    <div class="program-container">
      <Motion
        v-bind="scheduleMotion(0)"
        class="program-header"
      >
        
        <h2 class="section-title">
          Cronograma de actividades
        </h2>
        <p class="section-description">
          Elegí el día y recorré las charlas, talleres y momentos clave de INNOTEC 2026.
        </p>
      </Motion>

      <Motion
        v-bind="scheduleMotion(1)"
        class="program-tabs"
        role="tablist"
        aria-label="Días del cronograma"
      >
        <button
          v-for="day in days"
          :key="day.id"
          type="button"
          class="program-tab"
          :class="{ active: activeDay === day.id }"
          role="tab"
          :aria-selected="activeDay === day.id"
          :aria-controls="`schedule-panel-${day.id}`"
          @click="setActiveDay(day.id)"
        >
          <span>{{ day.label }}</span>
          <small>{{ day.dateLabel }}</small>
        </button>
      </Motion>

      <div
        :id="`schedule-panel-${activeDay}`"
        :key="activeDay"
        class="program-timeline"
        role="tabpanel"
      >
        <div
          class="program-day-chip"
          aria-hidden="true"
        >
          {{ activeDayMeta.dateLabel }}
        </div>

        <Motion
          v-for="(entry, index) in activeSchedule"
          :key="`${activeDay}-${entry.time}-${entry.kind}`"
          v-bind="scheduleMotion(index + 2)"
          class="program-row"
          :class="[
            `program-row--${getEntrySide(index)}`,
            { 'program-row--span': entry.span, 'program-row--break': entry.isBreak }
          ]"
        >
          <div class="program-time">
            {{ entry.time }}
          </div>

          <div class="program-node" />

          <article class="program-card">
            <template v-if="entry.activities?.length">
              <header class="program-card-header">
                <span class="program-card-time">{{ entry.time }}</span>
                <span class="program-kind">{{ entry.kind }}</span>
                <span class="program-room">Salón 1 / Salón 2</span>
              </header>

              <div class="program-activity-grid">
                <div
                  v-for="activity in entry.activities"
                  :key="`${activity.room}-${activity.speaker}`"
                  class="program-activity"
                >
                  <div class="program-activity-meta">
                    <span>{{ activity.room }}</span>
                    <span>{{ activity.kind }}</span>
                  </div>
                  <h3>{{ activity.speaker }}</h3>
                  <p v-if="activity.title">
                    “{{ activity.title }}”
                  </p>
                </div>
              </div>
            </template>

            <template v-else>
              <header class="program-card-header">
                <span class="program-card-time">{{ entry.time }}</span>
                <span class="program-kind">{{ entry.kind }}</span>
                <span
                  v-if="entry.room"
                  class="program-room"
                >
                  {{ entry.room }}
                </span>
              </header>

              <h3
                v-if="entry.speaker"
                class="program-speaker"
              >
                {{ entry.speaker }}
              </h3>
              <p
                v-if="entry.title"
                class="program-title"
              >
                “{{ entry.title }}”
              </p>
            </template>
          </article>
        </Motion>
      </div>
    </div>
  </section>
</template>

<style scoped>
.program-section {
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: clamp(4.5rem, 8vw, 7rem) 1.25rem;
  background:
    radial-gradient(ellipse at 50% 0%, rgba(25, 68, 240, 0.18), transparent 58%),
    linear-gradient(180deg, rgba(8, 12, 22, 0), rgba(9, 15, 32, 0.72) 18%, rgba(8, 12, 22, 0.22) 100%);
  isolation: isolate;
}

.program-section::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -3;
  background-image:
    linear-gradient(rgba(25, 68, 240, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(25, 68, 240, 0.055) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(180deg, transparent 0%, black 18%, black 84%, transparent 100%);
}

.program-glow,
.program-bg-line {
  position: absolute;
  pointer-events: none;
}

.program-glow {
  z-index: -2;
  border-radius: 50%;
  filter: blur(92px);
}

.program-glow--left {
  top: 18%;
  left: -12rem;
  width: 28rem;
  height: 28rem;
  background: rgba(25, 68, 240, 0.22);
}

.program-glow--right {
  right: -14rem;
  bottom: 8%;
  width: 30rem;
  height: 30rem;
  background: rgba(25, 68, 240, 0.12);
}

.program-bg-line {
  z-index: -1;
  width: 54rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(123, 138, 247, 0.54), transparent);
  opacity: 0.58;
}

.program-bg-line--one {
  top: 17%;
  left: -12rem;
  transform: rotate(-28deg);
}

.program-bg-line--two {
  right: -14rem;
  bottom: 18%;
  transform: rotate(-18deg);
}

.program-container {
  width: min(100%, 1120px);
  margin-inline: auto;
}

.program-header {
  max-width: 680px;
  margin: 0 auto 1.6rem;
  text-align: center;
}

.program-header .section-label {
  font-size: clamp(1rem, 1.5vw, 1.24rem);
}

.program-header .section-title {
  font-size: clamp(1.72rem, 3.2vw, 2.45rem);
}

.program-header .section-description {
  font-size: clamp(1.05rem, 1.65vw, 1.28rem);
  line-height: 1.5;
}

.program-tabs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.55rem;
  width: min(100%, 28rem);
  margin: 0 auto clamp(2.6rem, 6vw, 4.2rem);
  padding: 0.35rem;
  border: 1px solid rgba(25, 68, 240, 0.28);
  border-radius: 8px;
  background: rgba(7, 12, 28, 0.58);
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.04), 0 0 34px rgba(25, 68, 240, 0.14);
  backdrop-filter: blur(18px);
}

.program-tab {
  display: grid;
  gap: 0.12rem;
  min-height: 3.35rem;
  padding: 0.72rem 0.8rem;
  color: rgba(203, 209, 251, 0.72);
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.program-tab span {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.96rem;
  font-weight: 900;
}

.program-tab small {
  font-size: 0.68rem;
  color: rgba(123, 138, 247, 0.82);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.program-tab:hover {
  color: #F3F6FE;
  background: rgba(25, 68, 240, 0.1);
}

.program-tab.active {
  color: #F3F6FE;
  border-color: rgba(123, 138, 247, 0.56);
  background:
    linear-gradient(135deg, rgba(25, 68, 240, 0.34), rgba(123, 138, 247, 0.14)),
    rgba(25, 68, 240, 0.16);
  box-shadow: 0 0 22px rgba(25, 68, 240, 0.34), inset 0 1px 0 rgba(243, 246, 254, 0.08);
}

.program-timeline {
  position: relative;
  display: grid;
  gap: 1rem;
  padding-top: 1.5rem;
}

.program-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(123, 138, 247, 0.58), rgba(25, 68, 240, 0.2), transparent);
  box-shadow: 0 0 24px rgba(25, 68, 240, 0.24);
}

.program-day-chip {
  justify-self: center;
  position: relative;
  z-index: 2;
  margin-bottom: 0.4rem;
  padding: 0.58rem 1.2rem;
  color: #061954;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(0.88rem, 1.25vw, 1.05rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: #F3F6FE;
  border: 1px solid rgba(243, 246, 254, 0.9);
  border-radius: 999px;
  box-shadow: 0 10px 28px rgba(1, 8, 32, 0.22);
}

.program-row {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 52px minmax(0, 1fr);
  align-items: center;
  min-height: 5.25rem;
  will-change: transform, opacity;
}

.program-row--left .program-card {
  grid-column: 1;
}

.program-row--right .program-card {
  grid-column: 3;
}

.program-row--left .program-time {
  left: calc(50% + 1.45rem);
}

.program-row--right .program-time {
  right: calc(50% + 1.45rem);
}

.program-row--span .program-card {
  grid-column: 1 / -1;
  width: min(100%, 760px);
  justify-self: center;
}

.program-row--break.program-row--span .program-card {
  width: min(100%, 560px);
}

.program-row--span .program-time {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.program-time {
  position: absolute;
  top: 50%;
  z-index: 2;
  min-width: 5.6rem;
  color: #F3F6FE;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1.35rem, 3vw, 2.25rem);
  font-weight: 900;
  line-height: 1;
  text-shadow: 0 0 18px rgba(25, 68, 240, 0.28);
  transform: translateY(-50%);
}

.program-node {
  grid-column: 2;
  grid-row: 1;
  justify-self: center;
  width: 0.75rem;
  height: 0.75rem;
  border: 1px solid rgba(123, 138, 247, 0.82);
  border-radius: 999px;
  background: #1944F0;
  box-shadow: 0 0 0 6px rgba(25, 68, 240, 0.14), 0 0 22px rgba(25, 68, 240, 0.46);
}

.program-card {
  position: relative;
  z-index: 1;
  overflow: hidden;
  min-width: 0;
  padding: 1rem;
  color: #F3F6FE;
  background:
    linear-gradient(180deg, rgba(13, 20, 40, 0.9), rgba(8, 12, 22, 0.78)),
    rgba(25, 68, 240, 0.08);
  border: 1px solid rgba(123, 138, 247, 0.24);
  border-radius: 8px;
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.05), 0 18px 48px rgba(1, 6, 20, 0.18);
  backdrop-filter: blur(16px);
}

.program-card::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 0% 0%, rgba(25, 68, 240, 0.18), transparent 50%),
    linear-gradient(120deg, rgba(243, 246, 254, 0.045), transparent 42%);
  opacity: 0.9;
}

.program-row--break .program-card {
  padding: 0.85rem 1.2rem;
  color: #F3F6FE;
  text-align: center;
  background:
    radial-gradient(circle at 50% 50%, #1B3CB0 0%, #1939A8 22%, #132357 62%, #141F44 100%);
  border-color: rgba(123, 138, 247, 0.38);
  border-radius: 999px;
  box-shadow: 0 10px 24px rgba(1, 8, 32, 0.18), 0 0 16px rgba(25, 68, 240, 0.14), inset 0 1px 0 rgba(243, 246, 254, 0.06);
}

.program-row--break .program-time {
  display: none;
}

.program-row--break .program-card::before {
  display: none;
}

.program-row--break .program-kind {
  color: #F3F6FE;
  font-size: clamp(1.12rem, 2.25vw, 1.5rem);
  justify-content: center;
  text-transform: uppercase;
}

.program-row--break .program-card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.45rem;
  width: 100%;
  text-align: center;
  position: relative;
  transform: none;
}

.program-card-header,
.program-activity,
.program-speaker,
.program-title {
  position: relative;
  z-index: 1;
}

.program-card-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
}

.program-card-time {
  display: none;
  align-items: center;
  justify-content: center;
  min-width: 3.7rem;
  padding: 0.22rem 0.58rem;
  color: #061954;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.78rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.02em;
  border: 1px solid rgba(243, 246, 254, 0.78);
  border-radius: 999px;
  background: #F3F6FE;
  box-shadow: 0 0 14px rgba(25, 68, 240, 0.18);
}

.program-row--break .program-card-time {
  display: inline-flex;
  justify-content: center;
  position: absolute;
  left: 1.6rem;
  min-width: auto;
  padding: 0;
  color: #F3F6FE;
  font-size: 1.62rem;
  border: 0;
  background: transparent;
  box-shadow: none;
  text-transform: uppercase;
}

.program-kind,
.program-room {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 900;
}

.program-kind {
  color: #F3F6FE;
  font-size: 1rem;
}

.program-room {
  padding: 0.22rem 0.55rem;
  color: #67A4FF;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid rgba(25, 68, 240, 0.36);
  border-radius: 999px;
  background: rgba(25, 68, 240, 0.14);
}

.program-speaker {
  margin: 0.72rem 0 0;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1.25rem, 2.6vw, 1.8rem);
  font-weight: 900;
  line-height: 1.1;
}

.program-title {
  margin: 0.7rem 0 0;
  color: rgba(224, 229, 255, 0.88);
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.55;
}

.program-activity-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 0.85rem;
}

.program-activity {
  display: grid;
  gap: 0.52rem;
  min-width: 0;
  padding: 0.92rem;
  border: 1px solid rgba(123, 138, 247, 0.24);
  border-radius: 8px;
  background: rgba(7, 12, 28, 0.42);
}

.program-activity-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.42rem;
}

.program-activity-meta span {
  display: inline-flex;
  padding: 0.18rem 0.5rem;
  color: rgba(203, 209, 251, 0.86);
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.66rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid rgba(25, 68, 240, 0.34);
  border-radius: 999px;
  background: rgba(25, 68, 240, 0.12);
}

.program-activity h3 {
  margin: 0;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1.05rem, 1.8vw, 1.35rem);
  font-weight: 900;
  line-height: 1.16;
}

.program-activity p {
  margin: 0;
  color: rgba(224, 229, 255, 0.86);
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.94rem;
  line-height: 1.5;
}

/* ===== TABLET BREAKPOINT ===== */
@media (max-width: 960px) {
  .program-row {
    grid-template-columns: minmax(0, 1fr) 42px minmax(0, 1fr);
  }

  .program-time {
    font-size: clamp(1.15rem, 2.4vw, 1.75rem);
    min-width: 4.2rem;
  }

  .program-row--left .program-time {
    left: calc(50% + 1.15rem);
  }

  .program-row--right .program-time {
    right: calc(50% + 1.15rem);
  }

  .program-speaker {
    font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  }
}

/* ===== MOBILE BREAKPOINT ===== */
@media (max-width: 760px) {
  .program-section {
    padding-inline: 1rem;
  }

  .program-timeline {
    gap: 0.85rem;
  }

  .program-timeline::before {
    left: 1.15rem;
  }

  .program-row {
    grid-template-columns: 1.8rem minmax(0, 1fr);
    align-items: start;
    gap: 0.7rem;
    min-height: auto;
  }

  .program-row--left .program-card,
  .program-row--right .program-card,
  .program-row--span .program-card {
    grid-column: 2;
    width: 100%;
  }

  .program-row--left .program-time,
  .program-row--right .program-time,
  .program-row--span .program-time {
    display: none;
  }

  .program-node {
    position: absolute;
    top: 1.1rem;
    left: 0.8rem;
    grid-column: auto;
  }

  .program-card {
    padding: 0.92rem;
  }

  .program-card-header {
    align-items: flex-start;
    gap: 0.5rem;
  }

  .program-card-time {
    display: inline-flex;
    flex: 0 0 auto;
    margin-top: 0.1rem;
    color: #F3F6FE;
    background: rgba(25, 68, 240, 0.24);
    border-color: rgba(123, 138, 247, 0.44);
    box-shadow: 0 0 14px rgba(25, 68, 240, 0.16);
  }

  .program-kind {
    flex: 1 1 min(100%, 12rem);
    line-height: 1.18;
  }

  .program-activity-grid {
    grid-template-columns: 1fr;
  }

  .program-row--break .program-card {
    border-radius: 12px;
    padding: 0.75rem 0.85rem;
  }

  .program-row--break .program-card-header {
    flex-direction: column;
    gap: 0.35rem;
    transform: none;
  }

  .program-row--break .program-card-time {
    position: static;
    min-width: auto;
    padding-inline: 0;
    font-size: 1.28rem;
  }

  .program-row--break .program-kind {
    font-size: clamp(0.88rem, 3.8vw, 1.15rem);
  }

  .program-speaker {
    font-size: clamp(1.05rem, 4.5vw, 1.35rem);
  }

  .program-title {
    font-size: 0.92rem;
  }
}

/* ===== SMALL MOBILE ===== */
@media (max-width: 440px) {
  .program-section {
    padding-inline: 0.75rem;
  }

  .program-tabs {
    width: 100%;
  }

  .program-tab {
    padding-inline: 0.5rem;
  }

  .program-tab small {
    font-size: 0.62rem;
  }

  .program-card {
    padding: 0.78rem;
  }

  .program-activity {
    padding: 0.72rem;
  }

  .program-activity h3 {
    font-size: 0.95rem;
  }

  .program-activity p {
    font-size: 0.86rem;
  }

  .program-kind {
    font-size: 0.92rem;
  }

  .program-day-chip {
    padding: 0.45rem 0.95rem;
    font-size: 0.78rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .program-tab,
  .program-card {
    transition: none;
  }
}
</style>
