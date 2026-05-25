<script setup lang="ts">
import { ref, computed } from 'vue'

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
const scrollInViewOptions = { once: true, amount: 0.1, margin: '0px 0px -5% 0px' as const }

function scrollMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 28, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    inViewOptions: scrollInViewOptions,
    transition: { duration: 0.72, delay, ease: smoothEase }
  }
}

function staggerMotion(index: number = 0) {
  return {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: scrollInViewOptions,
    transition: { duration: 0.4, delay: index * 0.07, ease: smoothEase }
  }
}

const schedule = [
  {
    day: 'Día 1',
    events: [
      { time: '8:00',  label: 'Acreditación',               highlight: true  },
      { time: '8:30',  label: 'Proceso de Design Thinking',  highlight: false },
      { time: '12:30', label: 'Almuerzo',                    highlight: true  },
      { time: '14:00', label: 'Acreditación',                highlight: true  },
      { time: '14:15', label: 'Figma',                       highlight: false },
      { time: '15:00', label: 'Trabajo en Grupos',           highlight: false },
      { time: '20:00', label: 'Cierre Día 1',                highlight: true  }
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

const activeTab = ref(0)

// Each non-highlight event alternates side: first → right (time left, card right), second → left (card left, time right)
const activeDayEvents = computed(() => {
  const events = schedule[activeTab.value]?.events ?? []
  let nonHighlightCount = 0
  return events.map((event) => {
    let side = 'center'
    if (!event.highlight) {
      side = nonHighlightCount % 2 === 0 ? 'right' : 'left'
      nonHighlightCount++
    }
    return { ...event, side }
  })
})
</script>

<template>
  <section id="cronograma" class="schedule-section">
    <!-- BG Effects -->
    <div class="bg-grid" />
    <div class="bg-glow bg-glow--l" />
    <div class="bg-glow bg-glow--r" />

    <div class="s-container">
      <!-- Header -->
      <Motion v-bind="scrollMotion()" class="s-header">
        <h2 class="s-title">Cronograma</h2>
        <p class="s-subtitle">
          Dos días de innovación, trabajo en equipo y aprendizaje intensivo.
        </p>
      </Motion>

      <!-- Tabs -->
      <Motion v-bind="scrollMotion(0.1)" class="tabs-row">
        <div class="tabs">
          <button
            v-for="(day, i) in schedule"
            :key="i"
            class="tab"
            :class="{ 'tab--active': activeTab === i }"
            @click="activeTab = i"
          >
            <span class="tab__title">{{ day.day }}</span>
            <span class="tab__sub">CRONOGRAMA {{ day.day.toUpperCase() }}</span>
          </button>
        </div>
      </Motion>

      <!-- Timeline -->
      <div class="tl">
        <!-- Continuous vertical line behind everything -->
        <div class="tl__line" />

        <!-- Header pill with dot below -->
        <div class="tl__top">
          <div class="tl__pill">CRONOGRAMA DÍA {{ activeTab + 1 }}</div>
          <div class="tl__top-dot" />
        </div>

        <!-- Events -->
        <div class="tl__events">
          <Motion
            v-for="(event, i) in activeDayEvents"
            :key="`${activeTab}-${event.time}-${i}`"
            v-bind="staggerMotion(i)"
            class="tl-event"
            :class="`tl-event--${event.side}`"
          >
            <!-- ===== HIGHLIGHT (CENTER) ===== -->
            <template v-if="event.side === 'center'">
              <!-- dot sits above the pill on the center line -->
              <div class="tl-event__pre-dot" />
              <!-- full-width pill -->
              <div class="hl-pill">
                <span class="hl-pill__time">{{ event.time }}</span>
                <span class="hl-pill__sep" />
                <span class="hl-pill__label">{{ event.label.toUpperCase() }}</span>
              </div>
            </template>

            <!-- ===== SIDE RIGHT: time LEFT · dot · card RIGHT ===== -->
            <template v-else-if="event.side === 'right'">
              <div class="tl-event__time tl-event__time--r">{{ event.time }}</div>
              <div class="tl-event__dot" />
              <div class="tl-event__card tl-event__card--r">{{ event.label }}</div>
            </template>

            <!-- ===== SIDE LEFT: card LEFT · dot · time RIGHT ===== -->
            <template v-else>
              <div class="tl-event__card tl-event__card--l">{{ event.label }}</div>
              <div class="tl-event__dot" />
              <div class="tl-event__time tl-event__time--l">{{ event.time }}</div>
            </template>
          </Motion>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ===== SECTION ===== */
.schedule-section {
  position: relative;
  min-height: 100vh;
  background: #0c0918;
  overflow: hidden;
  padding-top: clamp(5rem, 10vw, 7rem);
  padding-bottom: clamp(4rem, 8vw, 6rem);
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}

/* BG Grid */
.bg-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(163, 114, 248, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(163, 114, 248, 0.055) 1px, transparent 1px);
  background-size: 72px 72px;
  pointer-events: none;
}

/* BG Glows */
.bg-glow {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(120px);
}
.bg-glow--l {
  top: 15%;
  left: -8%;
  width: 480px;
  height: 480px;
  background: rgba(100, 50, 220, 0.12);
}
.bg-glow--r {
  bottom: 5%;
  right: -8%;
  width: 380px;
  height: 380px;
  background: rgba(80, 30, 180, 0.1);
}

/* Container */
.s-container {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin: 0 auto;
}

/* ===== HEADER ===== */
.s-header {
  text-align: center;
  margin-bottom: 2rem;
}

.s-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: #F3F6FE;
  margin: 0 0 0.65rem;
  letter-spacing: -0.02em;
}

.s-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  /* Gradient text matching the reference image */
  background: linear-gradient(90deg, #7B9CF8 0%, #a372f8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 420px;
  margin: 0 auto;
}

/* ===== TABS ===== */
.tabs-row {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.tabs {
  display: inline-flex;
  background: rgba(18, 10, 38, 0.95);
  border: 1px solid rgba(163, 114, 248, 0.2);
  border-radius: 8px;
  padding: 4px;
  gap: 4px;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 2.5rem;
  border-radius: 6px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  transition: all 0.25s ease;
  min-width: 155px;
}

.tab--active {
  background: rgba(80, 35, 160, 0.35);
  border-color: rgba(163, 114, 248, 0.5);
}

.tab__title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-weight: 900;
  font-size: 1rem;
  color: #F3F6FE;
  display: block;
  margin-bottom: 0.2rem;
}

.tab__sub {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: rgba(203, 209, 251, 0.45);
  display: block;
  text-transform: uppercase;
}

.tab--active .tab__sub {
  color: rgba(203, 209, 251, 0.85);
}

/* ===== TIMELINE WRAPPER ===== */
.tl {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Center vertical line runs full height */
.tl__line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    rgba(163, 114, 248, 0.9) 0%,
    rgba(163, 114, 248, 0.4) 60%,
    rgba(163, 114, 248, 0.08) 100%
  );
  z-index: 0;
}

/* Top: white pill + dot */
.tl__top {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tl__pill {
  background: #F3F6FE;
  color: #0c0918;
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-weight: 900;
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  padding: 0.65rem 1.75rem;
  border-radius: 100px;
}

.tl__top-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #a372f8;
  box-shadow: 0 0 10px rgba(163, 114, 248, 0.9);
  z-index: 5;
}

/* ===== EVENTS LIST ===== */
.tl__events {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  position: relative;
  z-index: 1;
}

/* ===== BASE EVENT ===== */
.tl-event {
  width: 100%;
  position: relative;
}

/* ===== CENTER / HIGHLIGHT EVENT ===== */
.tl-event--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
}

/* Dot above the highlight pill */
.tl-event__pre-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #b89bf8;
  box-shadow: 0 0 10px rgba(163, 114, 248, 0.85);
  z-index: 5;
  flex-shrink: 0;
}

/* The full-width highlight pill */
.hl-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #130a2e 0%, #1f0d50 35%, #1f0d50 65%, #130a2e 100%);
  border: 1px solid rgba(163, 114, 248, 0.4);
  box-shadow: 0 0 24px rgba(100, 40, 200, 0.2);
  border-radius: 100px;
  overflow: visible;
  min-height: 52px;
  position: relative;
  z-index: 2;
  padding: 0;
  width: auto;
  min-width: 520px;
  text-align: center;
}

/* Time portion of highlight pill */
.hl-pill__time {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-weight: 900;
  font-size: 1rem;
  color: #F3F6FE;
  padding: 0.85rem 0.75rem 0.85rem 1.75rem;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Vertical separator line inside pill */
.hl-pill__sep {
  display: block;
  width: 1px;
  height: 26px;
  background: rgba(163, 114, 248, 0.35);
  flex-shrink: 0;
  margin: 0 1rem;
}

/* Label portion of highlight pill */
.hl-pill__label {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-weight: 900;
  font-size: 1rem;
  color: #F3F6FE;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.75rem 0.85rem 0.75rem;
  white-space: nowrap;
  flex: 1;
}

/* ===== SIDE RIGHT EVENT: time LEFT · dot · card RIGHT ===== */
.tl-event--right {
  display: flex;
  align-items: center;
}

/* ===== SIDE LEFT EVENT: card LEFT · dot · time RIGHT ===== */
.tl-event--left {
  display: flex;
  align-items: center;
}

/* Large time (both sides) */
.tl-event__time {
  flex: 1;
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-weight: 900;
  font-size: clamp(1.6rem, 3vw, 2rem);
  color: #F3F6FE;
}

.tl-event__time--r {
  text-align: right;
  padding-right: 1.5rem;
}

.tl-event__time--l {
  text-align: left;
  padding-left: 1.5rem;
}

/* Center dot (flex child, stays at center via equal flex cols) */
.tl-event__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #9B73F8;
  box-shadow: 0 0 12px rgba(163, 114, 248, 0.9);
  flex-shrink: 0;
  z-index: 5;
}

/* Card (both sides) */
.tl-event__card {
  flex: 1;
  background: rgba(10, 6, 26, 0.75);
  border: 1px solid rgba(163, 114, 248, 0.22);
  border-radius: 6px;
  padding: 1rem 1.5rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-weight: 900;
  font-size: 1rem;
  color: #F3F6FE;
}

.tl-event__card--r {
  text-align: left;
  margin-left: 1.5rem;
}

.tl-event__card--l {
  text-align: left;
  margin-right: 1.5rem;
}

/* ===== MOBILE (≤ 640px) ===== */
@media (max-width: 640px) {
  /* Shift the center line to the left */
  .tl__line {
    left: 1.25rem;
    transform: none;
  }

  .tl__top-dot {
    /* keep aligned with the line */
  }

  /* Highlight events: left-anchored */
  .tl-event--center {
    align-items: flex-start;
    padding-left: 2.5rem;
  }

  .tl-event__pre-dot {
    position: absolute;
    left: 1.25rem;
    top: 0;
    transform: translateX(-50%);
  }

  .hl-pill {
    border-radius: 8px;
    display: flex;
    min-width: 420px;
    text-align: center;
  }

  .hl-pill__time {
    padding: 0.85rem 0.6rem 0.85rem 1.25rem;
    font-size: 0.9rem;
  }

  .hl-pill__sep {
    margin: 0 0.75rem;
  }

  .hl-pill__label {
    font-size: 0.9rem;
    padding: 0.85rem 1.25rem 0.85rem 0.6rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Side events: all flow right */
  .tl-event--right,
  .tl-event--left {
    padding-left: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .tl-event__dot {
    position: absolute;
    left: 1.25rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .tl-event__time--r,
  .tl-event__time--l {
    text-align: left;
    padding: 0;
    font-size: 1.3rem;
    color: rgba(163, 114, 248, 0.9);
  }

  .tl-event__card--r,
  .tl-event__card--l {
    margin: 0;
    width: 100%;
  }
}
</style>
