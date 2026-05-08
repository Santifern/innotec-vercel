<script setup lang="ts">
// Target date: August 20, 2026
const targetDate = new Date('2026-08-20T00:00:00')

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const isExpired = ref(false)

function updateCountdown() {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff <= 0) {
    isExpired.value = true
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    return
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000)
}

function padZero(n: number): string {
  return String(n).padStart(2, '0')
}

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div class="countdown-wrapper">
    <!-- Label -->
    <p class="countdown-label">
      <span class="label-dot" />
      Faltan para el evento
    </p>

    <!-- Countdown grid -->
    <div v-if="!isExpired" class="countdown-grid">
      <!-- Days -->
      <div class="countdown-unit">
        <div class="countdown-card">
          <span class="countdown-number">{{ padZero(days) }}</span>
          <div class="countdown-card-glow" />
        </div>
        <span class="countdown-unit-label">Días</span>
      </div>

      <div class="countdown-separator">:</div>

      <!-- Hours -->
      <div class="countdown-unit">
        <div class="countdown-card">
          <span class="countdown-number">{{ padZero(hours) }}</span>
          <div class="countdown-card-glow" />
        </div>
        <span class="countdown-unit-label">Horas</span>
      </div>

      <div class="countdown-separator">:</div>

      <!-- Minutes -->
      <div class="countdown-unit">
        <div class="countdown-card">
          <span class="countdown-number">{{ padZero(minutes) }}</span>
          <div class="countdown-card-glow" />
        </div>
        <span class="countdown-unit-label">Minutos</span>
      </div>

      <div class="countdown-separator">:</div>

      <!-- Seconds -->
      <div class="countdown-unit">
        <div class="countdown-card">
          <span class="countdown-number seconds-tick">{{ padZero(seconds) }}</span>
          <div class="countdown-card-glow" />
        </div>
        <span class="countdown-unit-label">Segundos</span>
      </div>
    </div>

    <!-- Event started message -->
    <div v-else class="countdown-started">
      <span>🎉 ¡El evento ha comenzado!</span>
    </div>

    <!-- Event date badge -->
    <div class="countdown-date-badge">
      <svg xmlns="http://www.w3.org/2000/svg" class="badge-icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
      </svg>
      20 de agosto, 2026 · Asunción, Paraguay
    </div>
  </div>
</template>

<style scoped>
.countdown-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

/* Label */
.countdown-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: rgba(203, 209, 251, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.label-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #1944F0;
  box-shadow: 0 0 8px rgba(25, 68, 240, 0.8);
  animation: dot-pulse 2s ease-in-out infinite;
}

@keyframes dot-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

/* Grid */
.countdown-grid {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

@media (min-width: 640px) {
  .countdown-grid {
    gap: 1rem;
  }
}

/* Separator */
.countdown-separator {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgba(25, 68, 240, 0.7);
  line-height: 1;
  padding-bottom: 1.5rem;
  animation: separator-blink 2s ease-in-out infinite;
}

@keyframes separator-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* Unit */
.countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

/* Card */
.countdown-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: rgba(13, 20, 40, 0.9);
  border: 1px solid rgba(25, 68, 240, 0.35);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

@media (min-width: 640px) {
  .countdown-card {
    width: 88px;
    height: 88px;
    border-radius: 14px;
  }
}

@media (min-width: 768px) {
  .countdown-card {
    width: 100px;
    height: 100px;
  }
}

.countdown-card:hover {
  border-color: rgba(25, 68, 240, 0.6);
}

.countdown-card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center bottom, rgba(25, 68, 240, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

/* Number */
.countdown-number {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #F3F6FE;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  position: relative;
  z-index: 1;
}

@media (min-width: 640px) {
  .countdown-number {
    font-size: 2.5rem;
  }
}

@media (min-width: 768px) {
  .countdown-number {
    font-size: 2.75rem;
  }
}

.seconds-tick {
  animation: seconds-pop 1s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  transform-origin: center;
}

@keyframes seconds-pop {
  0% {
    opacity: 0.82;
    transform: translateY(0.18rem) scale(0.94);
    text-shadow: 0 0 0 rgba(25, 68, 240, 0);
  }

  18% {
    opacity: 1;
    transform: translateY(0) scale(1.08);
    text-shadow: 0 0 18px rgba(25, 68, 240, 0.5);
  }

  38% {
    transform: translateY(0) scale(1);
    text-shadow: 0 0 10px rgba(25, 68, 240, 0.28);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    text-shadow: 0 0 0 rgba(25, 68, 240, 0);
  }
}

/* Unit label */
.countdown-unit-label {
  font-size: 0.6875rem;
  font-weight: 600;
  color: rgba(25, 68, 240, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Expired */
.countdown-started {
  font-size: 1.25rem;
  font-weight: 700;
  color: #CBD1FB;
}

/* Date badge */
.countdown-date-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4375rem;
  max-width: min(100%, 32rem);
  padding: 0.4375rem 1rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(203, 209, 251, 0.7);
  background: rgba(25, 68, 240, 0.08);
  border: 1px solid rgba(25, 68, 240, 0.2);
  border-radius: 100px;
  line-height: 1.35;
  text-align: center;
}

.badge-icon {
  width: 13px;
  height: 13px;
  color: rgba(25, 68, 240, 0.8);
}
</style>
