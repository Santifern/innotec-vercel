<script setup lang="ts">
function updateFaqHover(event: PointerEvent) {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()

  target.style.setProperty('--faq-hover-x', `${event.clientX - rect.left}px`)
  target.style.setProperty('--faq-hover-y', `${event.clientY - rect.top}px`)
}

function resetFaqHover(event: PointerEvent) {
  const target = event.currentTarget as HTMLElement

  target.style.removeProperty('--faq-hover-x')
  target.style.removeProperty('--faq-hover-y')
}

interface FaqItem {
  question: string
  answer: string
  link?: {
    label: string
    to: string
  }
}

const faqItems: FaqItem[] = [
  {
    question: '¿Es necesario saber programar?',
    answer: 'No. A diferencia de otros hackathones enfocados únicamente en programación, nuestro evento está orientado al desarrollo de propuestas y prototipos funcionales, por lo que cualquier persona puede aportar desde su área: diseño, gestión, comunicación, análisis, investigación, innovación, entre otras.'
  },
  {
    question: '¿Cómo creamos una aplicación sin programación?',
    answer: 'Utilizando herramientas accesibles e intuitivas que permiten crear prototipos de aplicaciones de manera visual y sin necesidad de escribir ningún tipo de código.'
  },
  {
    question: '¿Quiénes pueden participar del Hackathon?',
    answer: 'Pueden participar estudiantes de todas las carreras y perfiles. De hecho, uno de los principales objetivos del hackathon es formar equipos diversos, integrados por personas con diferentes habilidades, conocimientos y formas de pensar, ya que la innovación surge cuando distintas perspectivas trabajan juntas para resolver una problemática en común.'
  },
  {
    question: '¿Puedo inscribirme si no tengo equipo?',
    answer: '¡Sí, por supuesto! La idea principal del evento es que puedas conectar con personas de diferentes carreras. Organizaremos el espacio para que conozcas a otros participantes y formen equipos multidisciplinarios en el momento.'
  },
  {
    question: '¿De cuántas personas deben ser los equipos?',
    answer: 'Los equipos estarán conformados por grupos de 6 a 8 personas aproximadamente. El número exacto se definirá dependiendo principalmente de la cantidad total de inscritos.'
  },
  {
    question: '¿Qué necesito llevar el día del evento?',
    answer: 'Es fundamental que traigas un dispositivo (computadora portátil o tablet) con su respectivo cargador para poder utilizar las herramientas de prototipado. Además, te sugerimos traer alargues o zapatillas (triples) eléctricas para mayor comodidad tuya y de tu equipo.'
  },
  {
    question: '¿Qué beneficios ofrece participar del hackathon?',
    answer: 'La participación al evento ofrece créditos académicos y premios monetarios para el equipo ganador. Además de fomentar la creatividad y el trabajo colaborativo, permite fortalecer habilidades de liderazgo, comunicación y resolución de problemas en entornos de alta exigencia y rápida toma de decisiones.'
  },
  {
    question: '¿Cómo puedo inscribirme?',
    answer: 'Asegurá tu lugar a través del formulario de inscripción.',
    link: {
      label: 'Ir al formulario',
      to: '/registration-hackathon'
    }
  }
]

const openIndex = ref<number | null>(null)
const visibleFaqItems = ref<boolean[]>(faqItems.map(() => false))
const faqRevealElements = ref<HTMLElement[]>([])
let faqRevealObserver: IntersectionObserver | null = null

function revealFaqItem(index: number) {
  visibleFaqItems.value = visibleFaqItems.value.map((visible, itemIndex) => visible || itemIndex === index)
}

onMounted(async () => {
  await nextTick()

  if (!('IntersectionObserver' in window)) {
    visibleFaqItems.value = faqItems.map(() => true)
    return
  }

  faqRevealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue
      }

      const index = Number((entry.target as HTMLElement).dataset.faqIndex)

      if (Number.isInteger(index)) {
        revealFaqItem(index)
        faqRevealObserver?.unobserve(entry.target)
      }
    }
  }, {
    threshold: 0.32,
    rootMargin: '0px 0px -24% 0px'
  })

  faqRevealElements.value.forEach((element, index) => {
    element.dataset.faqIndex = String(index)
    faqRevealObserver?.observe(element)
  })
})

onBeforeUnmount(() => {
  faqRevealObserver?.disconnect()
  faqRevealObserver = null
})

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section
    id="faq"
    class="innotec-section faq-section"
  >
    <div class="faq-bg-glow" />

    <div class="section-container">
      <div class="faq-header">
        <span class="section-label">Hackathon</span>
        <h1 class="section-title">
          Preguntas frecuentes
        </h1>
        <p class="section-description">
          Todo lo que necesitás saber antes de inscribirte.
        </p>
      </div>

      <div class="faq-list">
        <div
          v-for="(item, index) in faqItems"
          :key="item.question"
          ref="faqRevealElements"
          class="faq-motion-item"
          :class="{ 'faq-motion-item--visible': visibleFaqItems[index] }"
          :style="{ '--faq-reveal-delay': `${Math.min(index, 3) * 0.05}s` }"
        >
          <div
            class="faq-item"
            :class="{ 'faq-item--open': openIndex === index }"
            @pointermove="updateFaqHover"
            @pointerleave="resetFaqHover"
          >
            <button
              class="faq-trigger"
              type="button"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-answer-${index}`"
              @click="toggle(index)"
            >
              <span class="faq-question">{{ item.question }}</span>
            </button>

            <div
              :id="`faq-answer-${index}`"
              class="faq-body"
              :class="{ 'faq-body--open': openIndex === index }"
            >
              <div class="faq-body-inner">
                <p class="faq-answer">
                  {{ item.answer }}
                </p>
                <NuxtLink
                  v-if="item.link"
                  :to="item.link.to"
                  class="faq-link"
                >
                  <span>{{ item.link.label }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="~/assets/css/pages/hackathon-hackathon-faq.css"></style>
