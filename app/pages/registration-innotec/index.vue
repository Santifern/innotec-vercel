<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

useSeoMeta({
  title: 'Inscripción INNOTEC 2026',
  description: 'Inscribite al congreso de tecnología e innovación más importante del Paraguay estudiantil.'
})

const registrationFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfcAqeGV_Qt8gDWGpR1FqtvppW85g5nooPfGY5xV6HoMxII5Q/viewform'
const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]

const checklist = [
  'Tené a mano tus datos personales y un correo activo.',
  'Confirmá tu institución, carrera o área profesional.',
  'Revisá las actividades que te interesan para completar el registro con seguridad.',
  'Si venís de otra universidad, tené el nombre de tu institución y ciudad.',
  'Si sos profesional, especificá tu ocupación en el formulario.'
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
  <div class="reg-page reg-page--single">
    <div
      class="reg-bg-grid"
      aria-hidden="true"
    />
    <div
      class="reg-bg-glow reg-bg-glow--blue"
      aria-hidden="true"
    />
    <div
      class="reg-bg-glow reg-bg-glow--right"
      aria-hidden="true"
    />

    <section
      class="reg-hero"
      aria-labelledby="reg-hero-title"
    >
      <div class="reg-shell">
        <div class="reg-hero-inner">
          <Motion v-bind="enterMotion(0.05)">
            <div class="reg-status-badge">
              <span
                class="reg-status-dot"
                aria-hidden="true"
              />
              <span>Inscripción abierta</span>
            </div>
          </Motion>

          <Motion v-bind="enterMotion(0.18)">
            <h1
              id="reg-hero-title"
              class="reg-hero-title"
              aria-label="Inscripción INNOTEC 2026"
            >
              <span class="reg-hero-title-line1">Inscripción</span>
              <span class="reg-hero-title-line2">INNOTEC 2026</span>
            </h1>
          </Motion>

          <Motion v-bind="enterMotion(0.3)">
            <p class="reg-hero-desc">
              Registrate al congreso de tecnología e innovación más importante del Paraguay estudiantil.
              Un único formulario reúne tus datos y deja lista tu participación.
            </p>
          </Motion>

          <Motion v-bind="enterMotion(0.4)">
            <div
              class="reg-hero-chips"
              role="list"
            >
              <div
                class="reg-chip"
                role="listitem"
              >
                <Icon
                  name="i-lucide-calendar"
                  aria-hidden="true"
                />
                20 y 21 de agosto, 2026
              </div>
              <div
                class="reg-chip"
                role="listitem"
              >
                <Icon
                  name="i-lucide-map-pin"
                  aria-hidden="true"
                />
                Asunción, Paraguay
              </div>
            </div>
          </Motion>

          <Motion v-bind="enterMotion(0.5)">
            <div class="reg-hero-actions">
              <a
                :href="registrationFormUrl"
                class="reg-btn reg-btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name="i-lucide-external-link"
                  aria-hidden="true"
                />
                Inscribirme ahora
              </a>
              <NuxtLink
                to="/#inicio"
                class="reg-btn reg-btn--ghost"
              >
                Volver al inicio
              </NuxtLink>
            </div>
          </Motion>
        </div>

        <Motion v-bind="enterMotion(0.35)">
          <aside
            class="reg-checklist-card"
            aria-label="Antes de empezar"
            @pointermove="updateHover"
            @pointerleave="resetHover"
          >
            <div class="reg-checklist-header">
              <Icon
                name="i-lucide-clipboard-list"
                class="reg-checklist-icon"
                aria-hidden="true"
              />
              <h2 class="reg-checklist-title">
                Antes de empezar
              </h2>
            </div>

            <ul class="reg-checklist-list">
              <li
                v-for="item in checklist"
                :key="item"
              >
                <Icon
                  name="i-lucide-check-circle-2"
                  class="reg-check-icon"
                  aria-hidden="true"
                />
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="reg-checklist-footer">
              <Icon
                name="i-lucide-info"
                aria-hidden="true"
              />
              La inscripción tarda aproximadamente 5 minutos.
            </div>
          </aside>
        </Motion>
      </div>
    </section>
  </div>
</template>

<style scoped src="~/assets/css/pages/innotec-inscripciones.css"></style>

<style scoped>
.reg-page--single {
  overflow-x: hidden;
}

.reg-page--single .reg-hero {
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  padding-top: 8.5rem;
  padding-bottom: 5rem;
}

.reg-page--single .reg-hero .reg-shell {
  width: min(100%, 1180px);
  grid-template-columns: minmax(0, 34rem) minmax(24rem, 34rem);
  justify-content: center;
  align-items: center;
  gap: 4rem;
}

.reg-page--single .reg-hero-inner {
  max-width: 34rem;
  min-width: 0;
}

.reg-page--single .reg-hero-title-line1 {
  font-size: 5.1rem;
}

.reg-page--single .reg-hero-title-line2 {
  font-size: 3.45rem;
}

.reg-page--single .reg-hero-desc {
  max-width: 34rem;
}

.reg-page--single .reg-checklist-card {
  width: 100%;
  max-width: 34rem;
  min-height: 0;
  justify-self: stretch;
}

@media (max-width: 1200px) {
  .reg-page--single .reg-hero .reg-shell {
    grid-template-columns: minmax(0, 31rem) minmax(23rem, 31rem);
    gap: 2.75rem;
  }

  .reg-page--single .reg-hero-title-line1 {
    font-size: 4.55rem;
  }

  .reg-page--single .reg-hero-title-line2 {
    font-size: 3.05rem;
  }
}

@media (max-width: 899px) {
  .reg-page--single .reg-hero {
    align-items: flex-start;
    padding-top: 7rem;
  }

  .reg-page--single .reg-hero .reg-shell {
    grid-template-columns: minmax(0, 1fr);
    max-width: 42rem;
    gap: 2rem;
  }

  .reg-page--single .reg-hero-inner,
  .reg-page--single .reg-checklist-card,
  .reg-page--single .reg-hero-desc {
    max-width: none;
  }
}

@media (max-width: 560px) {
  .reg-page--single .reg-hero-title-line1 {
    font-size: 3.25rem;
  }

  .reg-page--single .reg-hero-title-line2 {
    font-size: 2.25rem;
  }
}
</style>
