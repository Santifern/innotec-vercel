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
      speaker: 'Maximiliano Corsi',
      room: 'Salón Magistral',
      title: 'Transformando el Futuro Energético del Paraguay: Biocombustibles, Innovación y Eficiencia con Impacto'
    },
    { time: '9:45', kind: 'Receso', isBreak: true, span: true },
    {
      time: '10:00',
      kind: 'Charla',
      speaker: 'Juan Migliore',
      room: 'Salón Magistral',
      title: 'Lo que nadie te cuenta de Construir tan Alto'
    },
    { time: '10:45', kind: 'Coffee Break', isBreak: true, span: true },
    {
      time: '11:45',
      kind: 'Charla',
      speaker: 'Laura Flores',
      room: 'Salón Magistral',
      title: 'Seguridad Industrial en Plantas de Producción'
    },
    { time: '12:30', kind: 'Almuerzo', isBreak: true, span: true },
    { time: '14:00', kind: 'Reapertura', isBreak: true, span: true },
    {
      time: '14:15',
      kind: 'Charlas simultáneas',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Charla',
          speaker: 'Adriana Añazco',
          title: 'Del Plan al Impacto: Innovación, Gestión y Sostenibilidad en la Dirección de Proyectos'
        },
        {
          room: 'Salón 2',
          kind: 'Charla',
          speaker: 'Fabian Dominguez',
          title: 'Finanzas Públicas y Tributos: Lo que todo Profesional del Futuro debe entender del Estado'
        }
      ]
    },
    { time: '15:00', kind: 'Receso', isBreak: true, span: true },
    {
      time: '15:15',
      kind: 'Charlas simultáneas',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Charla',
          speaker: 'Camilo Boggiano',
          title: 'Juventud y Desarrollo: Claves para Construir un Futuro Competitivo desde Paraguay'
        },
        {
          room: 'Salón 2',
          kind: 'Charla',
          speaker: 'Rodrigo Sánchez',
          title: 'El Acero también Innova: cómo la Industria Tradicional se Transforma con Tecnología y Sostenibilidad'
        }
      ]
    },
    { time: '16:00', kind: 'Coffee Break', isBreak: true, span: true },
    {
      time: '16:15',
      kind: 'Charlas simultáneas',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Charla',
          speaker: 'Rodrigo Campos Cervera',
          title: 'De la Idea al Producto: cómo Nacen las Soluciones Digitales en Paraguay'
        },
        {
          room: 'Salón 2',
          kind: 'Charla',
          speaker: 'Héctor Pérez',
          title: 'De Raíces a Resultados: Innovación Sostenible con EDGE'
        }
      ]
    },
    { time: '17:00', kind: 'Break', isBreak: true, span: true },
    {
      time: '19:00',
      kind: 'Charlas simultáneas',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Charla',
          speaker: 'Elian y Michael',
          title: 'Diseñar sin Manual: Lo que No te Cuentan de la Vida en Agencia'
        },
        {
          room: 'Salón 2',
          kind: 'Charla',
          speaker: 'Cesar Ayala',
          title: 'Datos: el Recurso Invisible que Construye el Futuro'
        }
      ]
    },
    { time: '19:45', kind: 'Receso', isBreak: true, span: true },
    {
      time: '20:00',
      kind: 'Talleres simultáneos',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Taller',
          speaker: 'Rocio Rojas',
          title: 'Más Likes, Más Clientes: El Arte de Vender Diseño en el Mundo Digital'
        },
        {
          room: 'Salón 2',
          kind: 'Taller',
          speaker: 'Pedro Coronel',
          title: 'Datos que Valen Oro: Big Data e IA como Motores del Paraguay del Siglo XXI'
        }
      ]
    },
    { time: '21:30', kind: 'Cierre Día 1', isBreak: true, span: true }
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
          speaker: 'Diego y Gian Franco',
          title: 'Coordinación, Estabilidad y Economía: Desafío de la Ingeniería Moderna'
        },
        {
          room: 'Salón 2',
          kind: 'Taller',
          speaker: 'Fernando Espinola',
          title: 'Desafío de un Líder Joven en Medio de la Turbulencia Generacional'
        }
      ]
    },
    { time: '10:30', kind: 'Receso', isBreak: true, span: true },
    {
      time: '10:45',
      kind: 'Talleres simultáneos',
      activities: [
        {
          room: 'Salón 1',
          kind: 'Taller',
          speaker: 'Mercedes Romero',
          title: 'Liderazgo, Influencia y Manejo de Equipos'
        },
        {
          room: 'Salón 2',
          kind: 'Taller',
          speaker: 'José Alvarez',
          title: 'Startup Sprint: del Problema al MVP'
        }
      ]
    },
    { time: '12:15', kind: 'Almuerzo', isBreak: true, span: true },
    { time: '14:00', kind: 'Reapertura', isBreak: true, span: true },
    {
      time: '14:15',
      kind: 'Charla',
      speaker: 'Aldo Cristaldo',
      room: 'Salón Magistral',
      title: 'Análisis Dicotómico en la Construcción'
    },
    { time: '15:00', kind: 'Receso', isBreak: true, span: true },
    {
      time: '15:15',
      kind: 'Charla',
      speaker: 'Ing Rodney Roman y Ing. Andrea Tejera',
      room: 'Salón Magistral',
      title: 'De ASHRAE: qué es, qué hacemos, las Actividades del Student Branch y sus Beneficios.'
    },
    { time: '16:00', kind: 'Receso', isBreak: true, span: true },
    {
      time: '16:15',
      kind: 'Charla',
      speaker: 'Ruben Jacks',
      room: 'Salón Magistral',
      title: 'Liderazgo: El Secreto para Construir Empresas que Trascienden'
    },
    { time: '17:00', kind: 'Receso', isBreak: true, span: true },
    {
      time: '17:15',
      kind: 'Charla',
      speaker: 'Eduardo Viedma',
      room: 'Salón Magistral',
      title: 'Economía energética 360°: innovación, eficiencia y oportunidades para Paraguay'
    },
    { time: '18:00', kind: 'Premiación Hackathon', isBreak: true, span: true },
    { time: '21:30', kind: 'Clausura', isBreak: true, span: true }
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

<style scoped src="~/assets/css/components/innotec-program-schedule.css"></style>
