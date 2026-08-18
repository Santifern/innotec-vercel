<script setup lang="ts">
type DayId = 'day-1' | 'day-2'
type EntrySide = 'left' | 'right'

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

type ScheduleEntryWithSide = ScheduleEntry & {
  side: EntrySide
}

const days: Array<{ id: DayId, label: string, dateLabel: string }> = [
  { id: 'day-1', label: 'Día 1', dateLabel: 'Cronograma Día 1' },
  { id: 'day-2', label: 'Día 2', dateLabel: 'Cronograma Día 2' }
]

const scheduleByDay: Record<DayId, ScheduleEntry[]> = {
  'day-1': [
    { time: '7:30', kind: 'Acreditación', isBreak: true, span: true },
    { time: '8:30', kind: 'Apertura', isBreak: true, span: true },
    {
      time: '9:00',
      kind: 'Charla',
      speaker: 'Ito Canillas',
      room: 'Salón Magistral',
      title: 'De la obra al contenido: cómo las redes sociales se convirtieron en una herramienta de negocio'
    },
    { time: '9:40', kind: 'Receso', isBreak: true, span: true },
    {
      time: '9:50',
      kind: 'Debate',
      speaker: 'Cinthia Facciuto · Ing. José Rivarola · Arq. Ing. Felipe Ramírez · Arq. Guillermo Salazar · Ing. Carlos Wenz',
      room: 'Salón Magistral',
      title: 'Construyendo el Paraguay del futuro'
    },
    { time: '10:55', kind: 'Coffee Break', isBreak: true, span: true },
    {
      time: '11:25',
      kind: 'Charla',
      speaker: 'Sandra Machuca · Italplast',
      room: 'Salón Magistral',
      title: 'Explorando la luz natural'
    },
    {
      time: '12:10',
      kind: 'Charla',
      speaker: 'Aldo Cristaldo',
      room: 'Salón Magistral',
      title: 'Arquitectura con propósito'
    },
    { time: '13:00', kind: 'Almuerzo', isBreak: true, span: true },
    { time: '14:45', kind: 'Reapertura', isBreak: true, span: true },
    {
      time: '15:00',
      kind: 'Talleres simultáneos',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Taller',
          speaker: 'José Duarte',
          title: 'Principios del diseño estructural: consideraciones iniciales a tener en cuenta en un diseño estructural, solicitaciones, esfuerzos internos y criterios de dimensionamiento.'
        },
        {
          room: 'Salón 2',
          kind: 'Taller',
          speaker: 'Gilbert Díaz',
          title: 'Cómo liderar organizaciones que evolucionan'
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
          kind: 'Charla',
          speaker: 'Alejandro Migliore',
          title: 'IA en la construcción'
        },
        {
          room: 'Salón 2',
          kind: 'Charla',
          speaker: 'Jorge Bernal',
          title: 'El desafío de construir un futuro sostenible'
        }
      ]
    },
    {
      time: '17:30',
      kind: 'Charlas simultáneas',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Charla',
          speaker: 'Fernando Arza Martí',
          title: 'Sistema constructivo ICF: bloques ecológicos'
        },
        {
          room: 'Salón 2',
          kind: 'Charla',
          speaker: 'Vanessa Cañete',
          title: 'Tecnología, equipos y el lugar de Paraguay en el mercado global del software'
        }
      ]
    },
    { time: '18:15', kind: 'Receso', isBreak: true, span: true },
    {
      time: '20:00',
      kind: 'Talleres simultáneos',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Taller',
          speaker: 'Andrea González',
          title: 'Tendencias del diseño, colores, materiales y acabado'
        },
        {
          room: 'Salón 2',
          kind: 'Taller',
          speaker: 'Sebastián Fleitas',
          title: 'De la idea al prototipo: robótica aplicada para resolver problemas'
        }
      ]
    },
    { time: '21:45', kind: 'Cierre Día 1', isBreak: true, span: true }
  ],
  'day-2': [
    { time: '8:00', kind: 'Acreditación', isBreak: true, span: true },
    { time: '8:30', kind: 'Apertura', isBreak: true, span: true },
    {
      time: '9:00',
      kind: 'Talleres simultáneos',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Taller',
          speaker: 'Patricia Dos Santos',
          title: 'Inicio de un negocio: de la idea a la realidad.'
        },
        {
          room: 'Salón 2',
          kind: 'Taller',
          speaker: 'Montserrat Mercado',
          title: 'Representación gráfica en Photoshop para láminas arquitectónicas.'
        }
      ]
    },
    { time: '11:00', kind: 'Receso', isBreak: true, span: true },
    {
      time: '11:15',
      kind: 'Charla',
      room: 'Salón 1',
      speaker: 'Soledad Ferreira · Kaizen',
      title: 'Construyendo el futuro energético con Kaizen Energy'
    },
    {
      time: '12:15',
      kind: 'Charla',
      room: 'Salón 1',
      speaker: 'Guillermo Arce',
      title: 'Menos blabla y más ejecución: detrás de escena de Reva'
    },
    { time: '13:00', kind: 'Almuerzo', isBreak: true, span: true },
    { time: '14:45', kind: 'Reapertura', isBreak: true, span: true },
    {
      time: '15:00',
      kind: 'Charla',
      speaker: 'Isaac Gutierrez',
      room: 'Salón Magistral',
      title: 'De una idea a un negocio: qué hace que un proyecto tenga potencial'
    },
    { time: '15:45', kind: 'Receso', isBreak: true, span: true },
    {
      time: '16:00',
      kind: 'Charla',
      speaker: 'Marcelo Bruzonic',
      room: 'Salón Magistral',
      title: 'Experiencias, retos, fracasos y lecciones aprendidas en 34 años trabajando en TIC'
    },
    {
      time: '16:45',
      kind: 'Charla',
      speaker: 'Paula Pekholtz',
      room: 'Salón Magistral',
      title: 'Cómo reinventar una industria con tecnología.'
    },
    { time: '17:45', kind: 'Premiación Hackathon', isBreak: true, span: true },
    { time: '18:00', kind: 'Clausura', isBreak: true, span: true }
  ]
}

const activeDay = ref<DayId>('day-1')
const prefersReducedMotion = usePreferredReducedMotion()
const isMobileSchedule = useMediaQuery('(max-width: 760px)')

const activeDayMeta = computed(() => {
  return days.find(day => day.id === activeDay.value) ?? days[0]!
})

const activeSchedule = computed<ScheduleEntryWithSide[]>(() => {
  let activityIndex = 0

  return scheduleByDay[activeDay.value].map((entry) => {
    const isTimelineMarker = entry.isBreak || entry.span
    const side: EntrySide = isTimelineMarker
      ? 'right'
      : activityIndex++ % 2 === 0 ? 'right' : 'left'

    return {
      ...entry,
      side
    }
  })
})

function setActiveDay(dayId: DayId) {
  activeDay.value = dayId
}

function scheduleMotion(index: number, side: EntrySide = 'right') {
  const direction = isMobileSchedule.value ? 0 : side === 'left' ? -42 : 42
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
    id="programa"
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
        <h1 class="section-title">
          Cronograma de actividades
        </h1>
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
          v-bind="scheduleMotion(index + 2, entry.side)"
          class="program-row"
          :class="[
            `program-row--${entry.side}`,
            { 'program-row--span': entry.span, 'program-row--break': entry.isBreak }
          ]"
        >
          <div class="program-time">
            {{ entry.time }}
          </div>

          <div
            v-if="!entry.span"
            class="program-node"
          />

          <article class="program-card">
            <template v-if="entry.activities?.length">
              <header class="program-card-header">
                <span class="program-card-time">{{ entry.time }}</span>
                <span class="program-kind">{{ entry.kind }}</span>
                <span class="program-room">
                  {{ entry.activities.map(activity => activity.room).filter(Boolean).join(' / ') }}
                </span>
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

<style scoped src="~/assets/css/components/innotec-program-schedule.css"></style>
