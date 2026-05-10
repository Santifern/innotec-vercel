<script setup lang="ts">
const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]
const scrollInViewOptions = { once: true, amount: 0.3, margin: '0px 0px -12% 0px' as const }

function scrollMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 34, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    inViewOptions: scrollInViewOptions,
    transition: { duration: 0.82, delay, ease: smoothEase }
  }
}

const sponsorLogos = [
  {
    name: 'Itaú',
    src: '/sponsor-logos/itau.svg'
  },
  {
    name: 'Sudameris',
    src: '/sponsor-logos/sudameris.svg'
  },
  {
    name: 'VMA',
    src: '/sponsor-logos/vma.svg'
  },
  {
    name: 'Ferropar',
    src: '/sponsor-logos/ferropar.svg'
  },
  {
    name: 'Tecinci',
    src: '/sponsor-logos/tecinci.svg'
  },
  {
    name: 'L\'Acerie',
    src: '/sponsor-logos/lacerie.svg'
  },
  {
    name: 'SODEP',
    src: '/sponsor-logos/sodep.svg'
  },
  {
    name: 'Fabripar',
    src: '/sponsor-logos/fabripar.svg'
  },
  {
    name: 'Galvamax',
    src: '/sponsor-logos/galvamax.svg'
  }
]
</script>

<template>
  <section
    class="sponsor-marquee py-24 md:py-32"
    aria-labelledby="sponsor-marquee-title"
  >
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8">
      <Motion
        v-bind="scrollMotion()"
        class="mb-16"
      >
        <h2
          id="sponsor-marquee-title"
          class="sponsor-marquee__title text-center text-4xl font-extrabold text-[#F3F6FE] md:text-5xl"
        >
          Empresas que confían en nosotros
        </h2>
      </Motion>

      <Motion
        v-bind="scrollMotion(0.16)"
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
              href="#"
              class="group flex h-16 min-w-36 items-center justify-center"
              :aria-label="logo.name"
            >
              <img
                :src="logo.src"
                :alt="logo.name"
                class="max-h-12 max-w-40 object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 sm:max-h-14 sm:max-w-48"
                loading="lazy"
                decoding="async"
              >
            </a>
          </div>
        </div>
      </Motion>
    </div>
  </section>
</template>

<style scoped>
.sponsor-marquee {
  position: relative;
  z-index: 2;
  background: transparent;
}

.sponsor-marquee__title {
  text-shadow:
    0 0 18px rgba(25, 68, 240, 0.72),
    0 0 38px rgba(25, 68, 240, 0.42),
    0 0 72px rgba(123, 138, 247, 0.22);
  filter: drop-shadow(0 0 18px rgba(25, 68, 240, 0.36));
}

.sponsor-marquee__viewport {
  mask-image: linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%);
}

.sponsor-marquee__track {
  animation: sponsor-marquee-scroll 32s linear infinite;
  will-change: transform;
}

.sponsor-marquee__viewport:hover .sponsor-marquee__track {
  animation-play-state: paused;
}

.sponsor-marquee__fade {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  width: min(7rem, 18vw);
  pointer-events: none;
}

.sponsor-marquee__fade--left {
  left: 0;
  background: linear-gradient(90deg, #080C16 0%, rgba(8, 12, 22, 0.72) 42%, rgba(8, 12, 22, 0) 100%);
}

.sponsor-marquee__fade--right {
  right: 0;
  background: linear-gradient(270deg, #080C16 0%, rgba(8, 12, 22, 0.72) 42%, rgba(8, 12, 22, 0) 100%);
}

@keyframes sponsor-marquee-scroll {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sponsor-marquee__track {
    animation: none;
  }
}
</style>
