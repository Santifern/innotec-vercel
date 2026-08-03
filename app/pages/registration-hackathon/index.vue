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

const tierOneFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeddBObDTw3k1lPRnewW-fi4XjT13WnXZuYT41GW_YELEodAw/viewform'

const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]

const checklist = [
  'Tené a mano tus datos personales y un correo activo.',
  'Definí si participás desde la UCA o desde otra institución.',
  'Si vas en equipo, confirmá los datos de tus integrantes.',
  'Si sos externo, tené preparado el nombre de tu institución.',
  'La inscripción se completa en un formulario externo de Google.'
] as const

const ticketTiers = [
  {
    name: 'Tier',
    number: '1',
    status: 'Disponible ahora',
    note: 'Cupos limitados',
    enabled: true,
    href: tierOneFormUrl,
    actionLabel: 'Ir al formulario Tier 1'
  },
  {
    name: 'Tier',
    number: '2',
    status: 'Próximamente',
    note: 'Cupos limitados',
    enabled: false,
    href: null,
    actionLabel: 'Próximamente'
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
              <a
                href="#entradas"
                class="hack-reg-btn hack-reg-btn--primary"
              >
                <Icon
                  name="i-lucide-ticket"
                  aria-hidden="true"
                />
                Ver entradas
              </a>
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

    <section
      id="entradas"
      class="hack-reg-section hack-reg-section--tickets"
      aria-labelledby="hack-tickets-title"
    >
      <div class="hack-reg-shell">
        <Motion v-bind="enterMotion(0.08)">
          <div class="hack-reg-section-header">
            <p class="hack-reg-kicker">
              Entradas
            </p>
            <h2 id="hack-tickets-title">
              Entradas disponibles
            </h2>
            <p>
              Por ahora solo Tier 1 está habilitado. Tier 2 y Tier 3 se activarán más adelante.
            </p>
          </div>
        </Motion>

        <div class="hack-ticket-grid">
          <Motion
            v-for="(tier, index) in ticketTiers"
            :key="tier.number"
            v-bind="enterMotion(0.16 + index * 0.08)"
          >
            <article
              class="hack-ticket-card"
              :class="tier.enabled ? 'is-enabled' : 'is-locked'"
              @pointermove="updateHover"
              @pointerleave="resetHover"
            >
              <div class="hack-ticket-copy">
                <span
                  class="hack-badge"
                  :class="tier.enabled ? 'hack-badge--required' : 'hack-badge--neutral'"
                >
                  {{ tier.status }}
                </span>
                <h3 class="hack-ticket-title">
                  <span>{{ tier.name }}</span>
                  <span class="hack-ticket-number">
                    {{ tier.number }}
                  </span>
                </h3>
              </div>

              <div class="hack-ticket-note">
                {{ tier.note }}
              </div>

              <a
                v-if="tier.enabled && tier.href"
                :href="tier.href"
                class="hack-form-btn hack-form-btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ tier.actionLabel }}
              </a>
              <span
                v-else
                class="hack-form-btn hack-form-btn--locked"
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

.hack-reg-page--single .hack-reg-section--tickets {
  padding-top: clamp(1.5rem, 4vw, 3rem);
  padding-bottom: clamp(4rem, 8vw, 6rem);
  scroll-margin-top: 5.5rem;
}

.hack-ticket-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 61rem;
  margin-inline: auto;
}

.hack-ticket-grid > * {
  display: grid;
}

.hack-ticket-card {
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
  border: 1px solid rgba(163, 114, 248, 0.22);
  border-radius: 12px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.012) 48%, rgba(123, 74, 246, 0.07)),
    rgba(10, 9, 25, 0.76);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  text-align: center;
  transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease, opacity 0.24s ease;
}

.hack-ticket-card::before {
  position: absolute;
  top: 0;
  right: 1.25rem;
  left: 1.25rem;
  height: 1px;
  content: '';
  background: linear-gradient(90deg, transparent, rgba(187, 153, 248, 0.7), transparent);
  opacity: 0;
  transition: opacity 0.24s ease;
}

.hack-ticket-card::after {
  position: absolute;
  inset: 0;
  z-index: 0;
  content: '';
  pointer-events: none;
  background: radial-gradient(circle at var(--hover-x, 50%) var(--hover-y, 50%), rgba(123, 74, 246, 0.28), transparent 40%);
  opacity: 0;
  transition: opacity 0.28s ease;
}

.hack-ticket-card > * {
  position: relative;
  z-index: 1;
}

.hack-ticket-card:hover {
  border-color: rgba(187, 153, 248, 0.56);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.07),
    0 14px 34px rgba(0, 0, 0, 0.22),
    0 0 28px rgba(123, 74, 246, 0.2);
  transform: translateY(-3px);
}

.hack-ticket-card:hover::before,
.hack-ticket-card:hover::after,
.hack-ticket-card.is-enabled::before {
  opacity: 1;
}

.hack-ticket-card.is-enabled {
  --ticket-title-size: clamp(3.35rem, 4.55vw, 5rem);

  border-color: rgba(187, 153, 248, 0.7);
  background:
    linear-gradient(135deg, rgba(123, 74, 246, 0.2), rgba(163, 114, 248, 0.08) 48%, rgba(187, 153, 248, 0.035)),
    rgba(14, 10, 32, 0.8);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 0 36px rgba(123, 74, 246, 0.24);
}

.hack-ticket-card.is-locked {
  opacity: 0.62;
}

.hack-ticket-card.is-locked:hover {
  opacity: 0.76;
}

.hack-ticket-copy {
  display: grid;
  grid-template-rows: auto 1fr;
  align-content: stretch;
  gap: 1rem;
  min-height: 13.25rem;
}

.hack-ticket-copy > .hack-badge {
  width: fit-content;
  justify-self: start;
}

.hack-ticket-title {
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 0.25rem;
  min-height: 10rem;
  margin: 0;
  color: var(--hack-text);
  font-family: 'Fractul Black', 'Fractul', sans-serif;
  font-size: var(--ticket-title-size);
  font-weight: 900;
  line-height: 0.88;
  text-transform: uppercase;
}

.hack-ticket-number {
  display: block;
  justify-self: center;
  color: currentColor;
  font-size: var(--ticket-number-size);
  line-height: 0.74;
  text-shadow: 0 0 28px rgba(163, 114, 248, 0.28);
}

.hack-ticket-note {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.3rem;
  padding: 0.55rem 0.7rem;
  color: rgba(208, 190, 246, 0.58);
  border: 1px solid rgba(208, 190, 246, 0.12);
  border-radius: 8px;
  background: rgba(5, 5, 13, 0.38);
  font-family: 'Fractul Black', 'Fractul', sans-serif;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  line-height: 1.35;
  text-transform: uppercase;
}

.hack-ticket-card .hack-form-btn {
  width: 100%;
}

.hack-ticket-card .hack-form-btn--locked {
  border-style: dashed;
  background: rgba(208, 190, 246, 0.025);
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

  .hack-reg-page--single .hack-reg-section--tickets {
    padding-top: 2.25rem;
  }

  .hack-ticket-grid {
    grid-template-columns: minmax(0, 1fr);
    max-width: 23rem;
    gap: 0.85rem;
  }

  .hack-ticket-card {
    --ticket-title-size: clamp(3.15rem, 7vw, 4.8rem);
    --ticket-number-size: clamp(6rem, 13vw, 8.5rem);

    min-height: 19rem;
    padding: 1rem;
  }

  .hack-ticket-card.is-enabled {
    --ticket-title-size: clamp(4.2rem, 9vw, 5.55rem);
  }

  .hack-ticket-copy {
    min-height: 11.5rem;
  }

  .hack-ticket-title {
    min-height: 8.75rem;
  }
}

@media (max-width: 560px) {
  .hack-reg-page--single .hack-reg-hero-title {
    font-size: 3.2rem;
  }

  .hack-reg-page--single .hack-reg-hero-title span {
    font-size: 2.05rem;
  }

  .hack-ticket-grid {
    max-width: 20.5rem;
  }

  .hack-ticket-card {
    --ticket-title-size: clamp(2.75rem, 13.5vw, 3.8rem);
    --ticket-number-size: clamp(5.2rem, 24vw, 6.9rem);

    min-height: 17.8rem;
    padding: 0.9rem;
  }

  .hack-ticket-copy {
    min-height: 9.9rem;
  }

  .hack-ticket-title {
    min-height: 7.35rem;
  }

  .hack-ticket-card.is-enabled {
    --ticket-title-size: clamp(3.35rem, 15.5vw, 4.25rem);
  }
}
</style>
