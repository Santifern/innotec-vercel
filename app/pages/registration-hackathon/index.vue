<script setup lang="ts">
definePageMeta({
  colorMode: 'dark',
  layout: 'hackathon',
  section: 'hackathon'
})

useSeoMeta({
  title: 'Inscripción Hackathon 2026',
  ogTitle: 'Inscripción Hackathon 2026',
  description: 'Completá el formulario único para participar del Hackathon 2026.',
  ogDescription: 'Completá el formulario único para participar del Hackathon 2026.'
})

const registrationFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe6DAsB9rITrM8_znORdCOmwdN6T2eWF3tf4DO9rVZydzFn4w/viewform?usp=header'

const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]

const checklist = [
  'Tené a mano tus datos personales y un correo activo.',
  'Definí si participás desde la UCA o desde otra institución.',
  'Si vas en equipo, confirmá los datos de tus integrantes.',
  'Si sos externo, tené preparado el nombre de tu institución.',
  'La inscripción se completa en un formulario externo de Google.'
] as const

function enterMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: smoothEase }
  }
}

function updateHover(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--hover-x', `${event.clientX - rect.left}px`)
  card.style.setProperty('--hover-y', `${event.clientY - rect.top}px`)
}

function resetHover(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement
  card.style.removeProperty('--hover-x')
  card.style.removeProperty('--hover-y')
}
</script>

<template>
  <div class="hack-reg-page hack-reg-page--single">
    <div
      class="hack-reg-bg-grid"
      aria-hidden="true"
    />
    <div
      class="hack-reg-bg-glow hack-reg-bg-glow--left"
      aria-hidden="true"
    />
    <div
      class="hack-reg-bg-glow hack-reg-bg-glow--right"
      aria-hidden="true"
    />

    <section
      class="hack-reg-hero"
      aria-labelledby="hack-reg-hero-title"
    >
      <div class="hack-reg-shell">
        <div class="hack-reg-hero-main">
          <Motion v-bind="enterMotion(0.05)">
            <div class="hack-reg-status">
              <span
                class="hack-reg-status-dot"
                aria-hidden="true"
              />
              Inscripción abierta
            </div>
          </Motion>

          <Motion v-bind="enterMotion(0.18)">
            <h1
              id="hack-reg-hero-title"
              class="hack-reg-hero-title"
            >
              Inscripción
              <span>Hackathon 2026</span>
            </h1>
          </Motion>

          <Motion v-bind="enterMotion(0.3)">
            <p class="hack-reg-hero-desc">
              Registrá tu participación o la de tu equipo con un único formulario.
              Dejamos el proceso directo para que puedas enfocarte en el desafío.
            </p>
          </Motion>

          <Motion v-bind="enterMotion(0.4)">
            <div class="hack-reg-hero-chips">
              <span>
                <span
                  class="hack-reg-chip-icon"
                  aria-hidden="true"
                >
                  <Icon name="i-lucide-calendar" />
                </span>
                20 y 21 de agosto, 2026
              </span>
              <span>
                <span
                  class="hack-reg-chip-icon"
                  aria-hidden="true"
                >
                  <Icon name="i-lucide-map-pin" />
                </span>
                Asunción, Paraguay
              </span>
            </div>
          </Motion>

          <Motion v-bind="enterMotion(0.5)">
            <div class="hack-reg-hero-actions">
              <span class="hack-reg-btn hack-reg-btn--disabled">
                <Icon
                  name="i-lucide-clock"
                  aria-hidden="true"
                />
                Próximamente
              </span>
              <NuxtLink
                to="/hackathon"
                class="hack-reg-btn hack-reg-btn--ghost"
              >
                Volver al inicio
              </NuxtLink>
            </div>
          </Motion>
        </div>

        <Motion v-bind="enterMotion(0.35)">
          <aside
            class="hack-reg-checklist"
            aria-label="Antes de empezar"
            @pointermove="updateHover"
            @pointerleave="resetHover"
          >
            <div class="hack-reg-checklist-header">
              <Icon
                name="i-lucide-clipboard-list"
                aria-hidden="true"
              />
              <h2>Antes de empezar</h2>
            </div>

            <ul>
              <li
                v-for="item in checklist"
                :key="item"
              >
                <Icon
                  name="i-lucide-check-circle-2"
                  aria-hidden="true"
                />
                {{ item }}
              </li>
            </ul>
          </aside>
        </Motion>
      </div>
    </section>
  </div>
</template>

<style scoped src="~/assets/css/pages/hackathon-hackathon-inscripciones.css"></style>

<style scoped>
.hack-reg-page--single {
  overflow-x: hidden;
}

.hack-reg-page--single .hack-reg-hero {
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  padding-top: 8.5rem;
  padding-bottom: 5rem;
}

.hack-reg-page--single .hack-reg-hero .hack-reg-shell {
  width: min(100%, 1180px);
  grid-template-columns: minmax(0, 34rem) minmax(24rem, 34rem);
  justify-content: center;
  align-items: center;
  gap: 4rem;
}

.hack-reg-page--single .hack-reg-hero-main {
  max-width: 34rem;
  min-width: 0;
}

.hack-reg-page--single .hack-reg-hero-title {
  max-width: 9.5ch;
  font-size: 5.15rem;
}

.hack-reg-page--single .hack-reg-hero-title span {
  font-size: 3.35rem;
}

.hack-reg-page--single .hack-reg-hero-desc {
  max-width: 34rem;
}

.hack-reg-page--single .hack-reg-checklist {
  width: 100%;
  max-width: 34rem;
  min-height: 0;
  justify-self: stretch;
}

@media (max-width: 1200px) {
  .hack-reg-page--single .hack-reg-hero .hack-reg-shell {
    grid-template-columns: minmax(0, 31rem) minmax(23rem, 31rem);
    gap: 2.75rem;
  }

  .hack-reg-page--single .hack-reg-hero-title {
    font-size: 4.55rem;
  }

  .hack-reg-page--single .hack-reg-hero-title span {
    font-size: 2.9rem;
  }
}

@media (max-width: 899px) {
  .hack-reg-page--single .hack-reg-hero {
    align-items: flex-start;
    padding-top: 7rem;
  }

  .hack-reg-page--single .hack-reg-hero .hack-reg-shell {
    grid-template-columns: minmax(0, 1fr);
    max-width: 42rem;
    gap: 2rem;
  }

  .hack-reg-page--single .hack-reg-hero-main,
  .hack-reg-page--single .hack-reg-checklist,
  .hack-reg-page--single .hack-reg-hero-desc {
    max-width: none;
  }
}

@media (max-width: 560px) {
  .hack-reg-page--single .hack-reg-hero-title {
    font-size: 3.2rem;
  }

  .hack-reg-page--single .hack-reg-hero-title span {
    font-size: 2.05rem;
  }
}
</style>
