<script setup lang="ts">
type ScheduleTheme = 'innotec' | 'hackathon'

withDefaults(defineProps<{
  theme?: ScheduleTheme
  label: string
  backTo: string
  backLabel: string
}>(), {
  theme: 'innotec'
})
</script>

<template>
  <section
    class="schedule-coming-page"
    :class="`schedule-coming-page--${theme}`"
  >
    <div class="schedule-coming-wrapper">
      <div class="bg-glow bg-glow--left" />
      <div class="bg-glow bg-glow--right" />

      <div class="icon-wrapper">
        <UIcon
          name="i-lucide-calendar-clock"
          class="schedule-icon"
        />
      </div>

      <Motion
        :initial="{ opacity: 0, y: 24, filter: 'blur(8px)' }"
        :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ duration: 0.72, delay: 0.1, ease: [0.22, 1, 0.36, 1] }"
        class="text-center"
      >
        <p class="section-label">
          {{ label }}
        </p>
        <h1 class="coming-title">
          Estate atento
        </h1>
        <p class="coming-description">
          El cronograma completo se publicara pronto.<br class="hidden sm:block">
          Estate atento a las proximas novedades.
        </p>
      </Motion>

      <Motion
        :initial="{ opacity: 0, scaleX: 0 }"
        :animate="{ opacity: 1, scaleX: 1 }"
        :transition="{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }"
        class="separator"
      />

      <Motion
        :initial="{ opacity: 0, y: 12 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.5 }"
      >
        <NuxtLink
          :to="backTo"
          class="back-link"
        >
          <UIcon
            name="i-lucide-arrow-left"
            class="back-icon"
          />
          {{ backLabel }}
        </NuxtLink>
      </Motion>
    </div>
  </section>
</template>

<style scoped>
.schedule-coming-page {
  --schedule-bg: #080C16;
  --schedule-grid: rgba(25, 68, 240, 0.05);
  --schedule-glow-left: rgba(25, 68, 240, 0.18);
  --schedule-glow-right: rgba(123, 138, 247, 0.13);
  --schedule-icon-bg: linear-gradient(135deg, rgba(25, 68, 240, 0.22), rgba(123, 138, 247, 0.1));
  --schedule-icon-border: rgba(123, 138, 247, 0.28);
  --schedule-icon-shadow: rgba(25, 68, 240, 0.28);
  --schedule-icon-color: rgba(147, 182, 255, 0.9);
  --schedule-label: rgba(123, 138, 247, 0.86);
  --schedule-title-gradient: linear-gradient(135deg, #CBD1FB 0%, #7B8AF7 42%, #1944F0 100%);
  --schedule-description: rgba(203, 218, 255, 0.72);
  --schedule-separator: rgba(123, 138, 247, 0.72);
  --schedule-link-color: rgba(147, 182, 255, 0.78);
  --schedule-link-border: rgba(25, 68, 240, 0.28);
  --schedule-link-bg: rgba(25, 68, 240, 0.08);
  --schedule-link-border-hover: rgba(123, 138, 247, 0.58);
  --schedule-link-bg-hover: rgba(25, 68, 240, 0.16);
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--schedule-bg);
  overflow: hidden;
}

.schedule-coming-page--hackathon {
  --schedule-bg: #08041A;
  --schedule-grid: rgba(163, 114, 248, 0.05);
  --schedule-glow-left: rgba(123, 74, 246, 0.2);
  --schedule-glow-right: rgba(196, 159, 255, 0.14);
  --schedule-icon-bg: linear-gradient(135deg, rgba(123, 74, 246, 0.22), rgba(196, 159, 255, 0.1));
  --schedule-icon-border: rgba(163, 114, 248, 0.32);
  --schedule-icon-shadow: rgba(123, 74, 246, 0.3);
  --schedule-icon-color: rgba(196, 159, 255, 0.9);
  --schedule-label: rgba(196, 159, 255, 0.82);
  --schedule-title-gradient: linear-gradient(135deg, #e8d8ff 0%, #c49fff 30%, #a372f8 62%, #7b4af6 100%);
  --schedule-description: rgba(225, 210, 255, 0.68);
  --schedule-separator: rgba(163, 114, 248, 0.75);
  --schedule-link-color: rgba(196, 159, 255, 0.78);
  --schedule-link-border: rgba(163, 114, 248, 0.28);
  --schedule-link-bg: rgba(123, 74, 246, 0.08);
  --schedule-link-border-hover: rgba(196, 159, 255, 0.5);
  --schedule-link-bg-hover: rgba(123, 74, 246, 0.16);
}

.schedule-coming-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--schedule-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--schedule-grid) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
}

.schedule-coming-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 3rem);
  text-align: center;
}

.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(86px);
  pointer-events: none;
}

.bg-glow--left {
  width: 520px;
  height: 520px;
  top: -10%;
  left: -18%;
  background: radial-gradient(ellipse, var(--schedule-glow-left), transparent 70%);
}

.bg-glow--right {
  width: 480px;
  height: 480px;
  right: -14%;
  bottom: -14%;
  background: radial-gradient(ellipse, var(--schedule-glow-right), transparent 70%);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border: 1px solid var(--schedule-icon-border);
  border-radius: 1.25rem;
  background: var(--schedule-icon-bg);
  box-shadow: 0 0 40px var(--schedule-icon-shadow), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  animation: float 4s ease-in-out infinite;
}

.schedule-icon {
  width: 2.2rem;
  height: 2.2rem;
  color: var(--schedule-icon-color);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.section-label {
  margin: 0 0 0.75rem;
  color: var(--schedule-label);
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.coming-title {
  margin: 0 0 1.25rem;
  color: transparent;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(3.3rem, 9vw, 6rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: 0;
  background: var(--schedule-title-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.coming-description {
  max-width: 48ch;
  margin: 0;
  color: var(--schedule-description);
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1rem, 2vw, 1.12rem);
  font-weight: 400;
  line-height: 1.75;
}

.separator {
  width: 80px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, var(--schedule-separator), transparent);
  transform-origin: center;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.25rem;
  color: var(--schedule-link-color);
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  text-decoration: none;
  border: 1px solid var(--schedule-link-border);
  border-radius: 8px;
  background: var(--schedule-link-bg);
  transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.back-link:hover {
  color: #F3F6FE;
  border-color: var(--schedule-link-border-hover);
  background: var(--schedule-link-bg-hover);
  transform: translateX(-2px);
}

.back-icon {
  width: 1rem;
  height: 1rem;
}

.text-center {
  text-align: center;
}

.hidden {
  display: none;
}

@media (min-width: 640px) {
  .sm\:block {
    display: block;
  }
}

@media (max-width: 640px) {
  .coming-title {
    font-size: clamp(3rem, 15vw, 4.5rem);
  }
}
</style>
