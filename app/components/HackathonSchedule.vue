<script setup lang="ts">
type DayId = 'day-1' | 'day-2'
type EntrySide = 'left' | 'right'

type ScheduleEntry = {
  time: string
  kind: string
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
    { time: '8:00', kind: 'Acreditación', isBreak: true, span: true },
    { time: '8:30', kind: 'Proceso de Design Thinking' },
    { time: '10:00', kind: 'Figma' },
    { time: '12:30', kind: 'Almuerzo', isBreak: true, span: true },
    { time: '13:45', kind: 'Acreditación', isBreak: true, span: true },
    { time: '14:00', kind: 'Trabajo en Grupos' },
    { time: '20:00', kind: 'Cierre Día 1', isBreak: true, span: true }
  ],
  'day-2': [
    { time: '8:00', kind: 'Acreditación', isBreak: true, span: true },
    { time: '8:30', kind: 'Trabajo en Grupos' },
    { time: '12:00', kind: 'Almuerzo', isBreak: true, span: true },
    { time: '13:30', kind: 'Preparación de Presentaciones' },
    { time: '14:30', kind: 'Presentación al Jurado' },
    { time: '18:30', kind: 'Premiación', isBreak: true, span: true }
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
    id="cronograma"
    class="hackathon-program-section"
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
          Cronograma
        </h1>
        <p class="section-description">
          Dos días de innovación, trabajo en equipo y aprendizaje intensivo.
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
            <header class="program-card-header">
              <span class="program-card-time">{{ entry.time }}</span>
              <span class="program-kind">{{ entry.kind }}</span>
            </header>
          </article>
        </Motion>
      </div>
    </div>
  </section>
</template>

<style scoped src="~/assets/css/components/hackathon-hackathon-schedule.css"></style>
