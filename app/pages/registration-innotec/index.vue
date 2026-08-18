<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

useSeoMeta({
  title: 'Inscripción INNOTEC 2026',
  description: 'Inscribite al congreso de tecnología e innovación más importante del Paraguay estudiantil.'
})

const tierTwoFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfgI2c72WGjhubffQwkijOOOoVeirXOyL0v1mgSfywOtcXtMw/viewform?usp=dialog'
const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]

const checklist = [
  'Tené a mano tus datos personales y un correo activo.',
  'Confirmá tu institución, carrera o área profesional.',
  'Revisá las actividades que te interesan para completar el registro con seguridad.',
  'Si venís de otra universidad, tené el nombre de tu institución y ciudad.',
  'Si sos profesional, especificá tu ocupación en el formulario.'
] as const

const ticketTiers = [
  {
    name: 'Early Birds',
    status: 'Sold out',
    note: 'Cupos limitados',
    enabled: false,
    href: null,
    actionLabel: 'Agotado'
  },
  {
    name: 'Tier',
    number: '1',
    status: 'Sold out',
    note: 'Cupos limitados',
    enabled: false,
    href: null,
    actionLabel: 'Agotado'
  },
  {
    name: 'Tier',
    number: '2',
    status: 'Disponible ahora',
    note: 'Cupos limitados',
    enabled: true,
    href: tierTwoFormUrl,
    actionLabel: 'Ir al formulario Tier 2'
  },
  {
    name: 'Tier',
    number: '3',
    status: 'Próximamente',
    note: 'Cupos limitados',
    enabled: false,
    href: null,
    actionLabel: 'Próximamente'
  }
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
                href="#entradas"
                class="reg-btn reg-btn--primary"
              >
                <Icon
                  name="i-lucide-ticket"
                  aria-hidden="true"
                />
                Ver entradas
              </a>
              <NuxtLink
                to="/"
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

    <section
      id="entradas"
      class="reg-section reg-section--tickets"
      aria-labelledby="reg-tickets-title"
    >
      <div class="reg-shell">
        <Motion v-bind="enterMotion(0.08)">
          <div class="reg-section-header">
            <p class="reg-kicker">
              Entradas
            </p>
            <h2
              id="reg-tickets-title"
              class="reg-section-title"
            >
              Entradas disponibles
            </h2>
            <p class="reg-section-desc">
              Early Birds y Tier 1 están agotados. Tier 2 ya está habilitado; Tier 3 se activará más adelante.
            </p>
          </div>
        </Motion>

        <div class="reg-ticket-grid">
          <Motion
            v-for="(tier, index) in ticketTiers"
            :key="`${tier.name}-${'number' in tier ? tier.number : 'early'}`"
            v-bind="enterMotion(0.16 + index * 0.08)"
          >
            <article
              class="reg-ticket-card"
              :class="tier.enabled ? 'is-enabled' : 'is-locked'"
              @pointermove="updateHover"
              @pointerleave="resetHover"
            >
              <div class="reg-ticket-copy">
                <span
                  class="reg-badge"
                  :class="tier.enabled ? 'reg-badge--required' : 'reg-badge--neutral'"
                >
                  {{ tier.status }}
                </span>
                <h3
                  class="reg-ticket-title"
                  :class="{ 'has-number': 'number' in tier }"
                >
                  <span>{{ tier.name }}</span>
                  <span
                    v-if="'number' in tier"
                    class="reg-ticket-number"
                  >
                    {{ tier.number }}
                  </span>
                </h3>
              </div>

              <div class="reg-ticket-note">
                {{ tier.note }}
              </div>

              <a
                v-if="tier.enabled && tier.href"
                :href="tier.href"
                class="reg-form-btn reg-form-btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ tier.actionLabel }}
              </a>
              <span
                v-else
                class="reg-form-btn--locked"
                aria-disabled="true"
              >
                {{ tier.actionLabel }}
              </span>
            </article>
          </Motion>
        </div>
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

.reg-page--single .reg-section--tickets {
  padding-top: clamp(1.5rem, 4vw, 3rem);
  padding-bottom: clamp(4rem, 8vw, 6rem);
  scroll-margin-top: 5.5rem;
}

.reg-ticket-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.reg-ticket-grid > * {
  display: grid;
}

.reg-ticket-card {
  --ticket-title-size: clamp(2.7rem, 3.45vw, 4.25rem);
  --ticket-number-size: clamp(5.2rem, 7.4vw, 7.6rem);

  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: grid;
  grid-template-rows: 1fr auto auto;
  gap: 1.05rem;
  min-height: clamp(20rem, 25vw, 22rem);
  height: 100%;
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid rgba(25, 68, 240, 0.22);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.012) 48%, rgba(25, 68, 240, 0.04)),
    rgba(8, 12, 22, 0.66);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease, opacity 0.24s ease;
}

.reg-ticket-card::before {
  content: '';
  position: absolute;
  left: 1.25rem;
  right: 1.25rem;
  top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(123, 138, 247, 0.62), transparent);
  opacity: 0;
  transition: opacity 0.24s ease;
}

.reg-ticket-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: radial-gradient(circle at var(--hover-x, 50%) var(--hover-y, 50%), rgba(25, 68, 240, 0.22), transparent 40%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.28s ease;
}

.reg-ticket-card > * {
  position: relative;
  z-index: 1;
}

.reg-ticket-card:hover {
  transform: translateY(-3px);
  border-color: rgba(123, 138, 247, 0.52);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.07),
    0 14px 34px rgba(0, 0, 0, 0.2),
    0 0 26px rgba(25, 68, 240, 0.16);
}

.reg-ticket-card:hover::before,
.reg-ticket-card:hover::after {
  opacity: 1;
}

.reg-ticket-card.is-enabled {
  --ticket-title-size: clamp(3.35rem, 4.55vw, 5rem);

  border-color: rgba(82, 100, 244, 0.66);
  background:
    linear-gradient(135deg, rgba(25, 68, 240, 0.2), rgba(123, 138, 247, 0.08) 48%, rgba(55, 230, 241, 0.035)),
    rgba(8, 13, 28, 0.78);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 0 34px rgba(25, 68, 240, 0.22);
}

.reg-ticket-card.is-enabled::before {
  opacity: 1;
}

.reg-ticket-card.is-locked {
  opacity: 0.62;
}

.reg-ticket-card.is-locked:hover {
  opacity: 0.78;
}

.reg-ticket-copy {
  display: grid;
  grid-template-rows: auto 1fr;
  align-content: stretch;
  gap: 1rem;
  min-height: 13.25rem;
}

.reg-ticket-title {
  margin: 0;
  font-family: 'Fractul Black', 'Fractul', sans-serif;
  font-size: var(--ticket-title-size);
  font-weight: 900;
  line-height: 0.88;
  color: var(--reg-text);
  letter-spacing: 0;
  text-transform: uppercase;
  text-wrap: balance;
  display: grid;
  justify-items: center;
  align-content: center;
  text-align: center;
  min-height: 10rem;
}

.reg-ticket-title.has-number {
  justify-items: center;
  align-content: center;
  text-align: center;
  gap: 0.25rem;
}

.reg-ticket-number {
  display: block;
  justify-self: center;
  color: currentColor;
  font-size: var(--ticket-number-size);
  line-height: 0.74;
  text-shadow: inherit;
}

.reg-ticket-note {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.3rem;
  padding: 0.55rem 0.7rem;
  border-radius: 8px;
  border: 1px solid rgba(203, 209, 251, 0.1);
  background: rgba(13, 20, 40, 0.5);
  color: var(--reg-text-dim);
  font-family: 'Fractul Black', 'Fractul', sans-serif;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  line-height: 1.35;
  text-transform: uppercase;
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

  .reg-ticket-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 44rem;
    margin-inline: auto;
  }

  .reg-ticket-card {
    --ticket-title-size: clamp(3.15rem, 7vw, 4.8rem);
    --ticket-number-size: clamp(6rem, 13vw, 8.5rem);

    min-height: 22rem;
  }

  .reg-ticket-card.is-enabled {
    --ticket-title-size: clamp(4.2rem, 9vw, 5.55rem);
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

  .reg-page--single .reg-section--tickets {
    padding-top: 2.25rem;
  }

  .reg-page--single .reg-section--tickets .reg-section-header {
    margin-bottom: 1.5rem;
  }

  .reg-ticket-grid {
    grid-template-columns: minmax(0, 1fr);
    max-width: 23rem;
    gap: 0.85rem;
    margin-inline: auto;
  }

  .reg-ticket-card {
    min-height: 19rem;
    padding: 1rem;
  }

  .reg-ticket-copy {
    justify-items: center;
    min-height: 11.5rem;
  }

  .reg-ticket-title {
    min-height: 8.75rem;
  }
}

@media (max-width: 560px) {
  .reg-page--single .reg-hero-title-line1 {
    font-size: 3.25rem;
  }

  .reg-page--single .reg-hero-title-line2 {
    font-size: 2.25rem;
  }

  .reg-ticket-grid {
    max-width: 20.5rem;
  }

  .reg-ticket-card {
    --ticket-title-size: clamp(2.75rem, 13.5vw, 3.8rem);
    --ticket-number-size: clamp(5.2rem, 24vw, 6.9rem);

    min-height: 17.8rem;
    padding: 0.9rem;
  }

  .reg-ticket-card.is-enabled {
    --ticket-title-size: clamp(3.35rem, 15.5vw, 4.25rem);
  }

  .reg-ticket-copy {
    min-height: 9.9rem;
  }

  .reg-ticket-title {
    min-height: 7.35rem;
  }

  .reg-ticket-title.has-number {
    gap: 0.15rem;
  }

  .reg-ticket-note,
  .reg-form-btn,
  .reg-form-btn--locked {
    min-height: 2.6rem;
  }
}

@media (max-width: 380px) {
  .reg-ticket-grid {
    max-width: 19rem;
  }

  .reg-ticket-card {
    --ticket-title-size: clamp(2.35rem, 12.5vw, 3rem);
    --ticket-number-size: clamp(4.6rem, 22vw, 5.8rem);

    min-height: 16.8rem;
  }

  .reg-ticket-card.is-enabled {
    --ticket-title-size: clamp(2.95rem, 14vw, 3.65rem);
  }

  .reg-ticket-copy {
    min-height: 8.9rem;
  }

  .reg-ticket-title {
    min-height: 6.65rem;
  }
}
</style>
