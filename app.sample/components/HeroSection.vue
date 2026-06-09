<script setup lang="ts">
import { useScrollMotion } from '~/composables/useMotion'

interface Props {
  id?: string
  logoSrc: string
  logoAlt?: string
  titlePrimary: string
  titleSecondary?: string
  description?: string
  targetDate?: string
  countdownTheme?: 'innotec' | 'hackathon'
  showParticles?: boolean
  minHeight?: string
}

withDefaults(defineProps<Props>(), {
  id: undefined,
  logoAlt: 'Logo',
  titleSecondary: undefined,
  description: undefined,
  targetDate: undefined,
  countdownTheme: 'innotec',
  showParticles: true,
  minHeight: '88vh'
})

const scrollMotion = useScrollMotion(0.1)
</script>

<template>
  <section
    :id="id"
    class="hero-section"
    :style="{ minHeight }"
  >
    <!-- Background effects -->
    <div class="hero-bg-grid" />
    <div class="hero-bg-glow hero-bg-glow--center" />
    <div class="hero-bg-glow hero-bg-glow--left" />
    <WaveBackground v-if="showParticles" class="hero-wave-background" />

    <!-- Neon floating particles -->
    <div v-if="showParticles" class="neon-particles">
      <div class="neon-particle neon-particle--1" />
      <div class="neon-particle neon-particle--2" />
      <div class="neon-particle neon-particle--3" />
      <div class="neon-particle neon-particle--4" />
      <div class="neon-particle neon-particle--5" />
      <div class="neon-particle neon-particle--6" />
    </div>

    <div class="hero-container">
      <Motion v-bind="scrollMotion" class="hero-content">
        <!-- Logo -->
        <div v-if="logoSrc" class="hero-logo-wrapper">
          <NuxtImg
            :src="logoSrc"
            :alt="logoAlt"
            class="hero-logo"
            width="600"
            height="200"
            preload
          />
        </div>

        <!-- Title -->
        <div class="hero-title-wrapper">
          <h1 class="hero-title">
            <span class="hero-title-gradient">{{ titlePrimary }}</span>
            <template v-if="titleSecondary">
              <br>
              {{ titleSecondary }}
            </template>
          </h1>
        </div>

        <!-- Description -->
        <div v-if="description" class="hero-desc-wrapper">
          <p class="hero-description">
            {{ description }}
          </p>
        </div>

        <!-- Countdown -->
        <div v-if="targetDate" class="hero-countdown-wrapper">
          <CountdownTimer
            :target-date="targetDate"
            :theme="countdownTheme"
          />
        </div>

        <!-- Slot for additional content -->
        <slot />
      </Motion>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 7rem 1.5rem 2.75rem;
  isolation: isolate;
}

.hero-bg-grid,
.hero-bg-glow,
.hero-wave-background {
  position: absolute;
  z-index: 0;
  pointer-events: none;
}

.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 900px;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.hero-eyebrow {
  font-family: 'Fractul Black', 'Fractul', system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7B8AF7;
  text-shadow: 0 0 16px rgba(123, 138, 247, 0.3);
  margin: 0;
}

.hero-title {
  font-family: 'Fractul Black', 'Fractul', system-ui, sans-serif;
  font-size: clamp(2.5rem, 8vw, 5.5rem);
  font-weight: 900;
  line-height: 1;
  color: #F3F6FE;
  margin: 0;
  text-wrap: balance;
  letter-spacing: -0.01em;
}

.hero-description {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.8);
  max-width: 650px;
  margin: 0;
  text-wrap: balance;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.85rem 2rem;
  margin-top: 0.5rem;
  border: 1px solid rgba(123, 138, 247, 0.5);
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(25, 68, 240, 0.2), rgba(123, 138, 247, 0.1));
  color: #F3F6FE;
  font-family: 'Fractul Black', 'Fractul', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 900;
  text-decoration: none;
  transition: all 0.3s ease;
}

.hero-cta:hover {
  border-color: rgba(123, 138, 247, 0.8);
  background: linear-gradient(135deg, rgba(25, 68, 240, 0.35), rgba(123, 138, 247, 0.15));
  box-shadow: 0 0 24px rgba(25, 68, 240, 0.3);
  transform: translateY(-2px);
}

.neon-particles {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 5rem 1.25rem 2rem;
  }

  .hero-container {
    gap: 1rem;
  }
}
</style>
