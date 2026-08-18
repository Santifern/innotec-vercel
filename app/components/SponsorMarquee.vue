<script setup lang="ts">
const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]
const scrollInViewOptions = { once: true, amount: 0.3, margin: '0px 0px -12% 0px' as const }

function scrollMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: scrollInViewOptions,
    transition: { duration: 0.48, delay, ease: smoothEase }
  }
}

const sponsorLogos = [
  {
    name: '5 Días',
    slug: 'cinco-dias',
    src: '/logos/cinco-dias.svg',
    href: 'https://5dias.com.py/',
    width: 320,
    height: 120
  },
  {
    name: 'Ambiental S.A.',
    slug: 'ambiental',
    src: '/logos/ambiental.svg',
    href: 'https://ambiental.com.py/',
    width: 320,
    height: 120
  },
  {
    name: 'Copipunto',
    slug: 'copipunto',
    src: '/logos/copipunto.svg',
    href: 'https://copipunto.com/',
    width: 320,
    height: 120
  },
  {
    name: 'DOMEC',
    slug: 'domec',
    src: '/logos/domec.svg',
    href: 'https://domec.com.py/',
    width: 320,
    height: 120
  },
  {
    name: 'FLUIT',
    slug: 'fluit',
    src: '/logos/fluit.png',
    href: 'https://fluit.com.py/',
    width: 320,
    height: 120
  },
  {
    name: 'Farmacenter',
    slug: 'farmacenter',
    src: '/logos/farmacenter.svg',
    href: 'https://www.farmacenter.com.py/',
    width: 320,
    height: 120
  },
  {
    name: 'Ferropar',
    slug: 'ferropar',
    src: '/logos/ferropar.svg',
    href: 'https://www.ferropar.com/',
    width: 320,
    height: 120
  },
  {
    name: 'KAIZEN ENERGY',
    slug: 'kaizen-energy',
    src: '/logos/kaizen-energy.svg',
    href: 'https://www.kaizenenergy.com.py/',
    width: 320,
    height: 120
  },
  {
    name: 'PREPAR S.A.',
    slug: 'prepar',
    src: '/logos/prepar.svg',
    href: 'https://www.prepar.com.py/',
    width: 320,
    height: 120
  },
  {
    name: 'COPEL S.A.',
    slug: 'copel',
    src: '/logos/copel-completo.svg',
    href: 'https://www.copel.com.py/',
    width: 466,
    height: 262
  },
  {
    name: 'PARESA S.A.',
    slug: 'paresa',
    src: '/logos/paresa.svg',
    href: 'https://www.miportal.com.py/',
    width: 320,
    height: 120
  },
  {
    name: 'Sudameris',
    slug: 'sudameris',
    src: '/logos/sudameris.svg',
    href: 'https://www.sudameris.com.py/',
    width: 320,
    height: 120
  }
]
</script>

<template>
  <section
    class="sponsor-marquee pb-6 pt-10 md:pb-8 md:pt-14"
    aria-labelledby="sponsor-marquee-title"
  >
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8">
      <Motion
        v-bind="scrollMotion()"
        class="mb-10 md:mb-12"
      >
        <h2
          id="sponsor-marquee-title"
          class="text-center text-4xl font-extrabold text-[#F3F6FE] md:text-5xl"
        >
          Empresas que confían en nosotros
        </h2>
      </Motion>

      <Motion
        v-bind="scrollMotion(0.08)"
        class="sponsor-marquee__viewport relative overflow-hidden"
      >
        <div class="sponsor-marquee__fade sponsor-marquee__fade--left" />
        <div class="sponsor-marquee__fade sponsor-marquee__fade--right" />

        <div class="sponsor-marquee__track flex w-max">
          <div
            v-for="loopIndex in 2"
            :key="loopIndex"
            class="sponsor-marquee__group flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 lg:gap-20 lg:pr-20"
            :aria-hidden="loopIndex === 2"
          >
            <a
              v-for="logo in sponsorLogos"
              :key="`${loopIndex}-${logo.name}`"
              :href="logo.href"
              target="_blank"
              rel="noopener noreferrer"
              :tabindex="loopIndex === 2 ? -1 : undefined"
              class="sponsor-card group"
              :class="`sponsor-card--${logo.slug}`"
              :aria-label="`Visitar sitio oficial de ${logo.name}`"
            >
              <NuxtImg
                :src="logo.src"
                :alt="logo.name"
                :width="logo.width"
                :height="logo.height"
                class="sponsor-logo"
                :class="`sponsor-logo--${logo.slug}`"
                :loading="loopIndex === 1 ? 'eager' : 'lazy'"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </Motion>
    </div>
  </section>
</template>

<style src="~/assets/css/components/shared-sponsor-marquee.css"></style>
