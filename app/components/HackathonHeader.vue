<script setup lang="ts">
// Navigation items for Hackathon
const items = computed(() => [
  {
    label: 'Inicio',
    to: '/hackathon',
    exactHash: true
  },
  {
    label: 'Acerca de',
    to: '/hackathon/about',
    exactHash: true
  },
  {
    label: 'Ponencias y Tracks',
    to: '/hackathon/ponencias-tracks',
    exactHash: true
  },
  {
    label: 'Cronograma',
    to: '/hackathon/schedule',
    exactHash: true
  },
  {
    label: 'Inscripción',
    to: '/registration-hackathon',
    exactHash: true
  },
  {
    label: 'Galería',
    to: '/hackathon/gallery',
    exactHash: true
  },
  {
    label: 'FAQ',
    to: '/hackathon/faq',
    exactHash: true
  },
  {
    label: 'Innotec',
    to: '/',
    exactHash: false,
    isAction: true,
    mobileClass: 'mobile-nav-item--innotec'
  }
])

const desktopItems = computed(() => items.value.filter(item => !item.isAction))
</script>

<template>
  <AppNavBar
    theme="hackathon"
    :items="items"
    :desktop-items="desktopItems"
    large-breakpoint
  >
    <template #logo>
      <NuxtLink
        to="/hackathon"
        class="navbar-logo-link"
        aria-label="Hackathon - Inicio"
      >
        <NuxtImg
          src="/logo-hackathon-navbar.svg"
          alt="HACKATHON"
          class="navbar-logo"
        />
      </NuxtLink>
    </template>

    <template #action>
      <NuxtLink
        to="/"
        class="navbar-innotec-link"
        aria-label="Ir a Innotec"
      >
        <NuxtImg
          src="/logo-innotec-blanco.svg"
          alt="Innotec"
          class="navbar-innotec-logo"
        />
      </NuxtLink>
    </template>
  </AppNavBar>
</template>

<style scoped>
/* ===== LOGO ===== */
.navbar-logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  flex-shrink: 0;
}

.navbar-logo {
  height: 26px;
  width: auto;
  max-width: min(50vw, 390px);
  object-fit: contain;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
}

@media (max-width: 767px) {
  .navbar-logo {
    height: 21px;
    max-width: 58vw;
  }
}

@media (max-width: 420px) {
  .navbar-logo {
    height: 18px;
    max-width: 62vw;
  }
}

.navbar-logo-link:hover .navbar-logo {
  filter: drop-shadow(0 0 8px rgba(163, 114, 248, 0.8));
  transform: scale(1.03);
}

/* ===== INNOTEC BUTTON ===== */
.navbar-innotec-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 1.25rem;
  border-radius: 100px;
  border: 1px solid rgba(30, 80, 255, 0.4);
  background: linear-gradient(90deg, #184df5 0%, rgba(10, 15, 40, 0.6) 100%);
  box-shadow: -4px 0 16px rgba(24, 77, 245, 0.4);
  text-decoration: none;
  transition: all 0.3s ease;
}

.navbar-innotec-logo {
  height: 14px;
  width: auto;
  display: block;
  opacity: 1;
  transition: all 0.25s ease;
}

@media (max-width: 640px) {
  .navbar-innotec-link {
    height: 32px;
    padding: 0 1rem;
  }
  .navbar-innotec-logo {
    height: 12px;
  }
}

.navbar-innotec-link:hover {
  background: linear-gradient(90deg, #2558fb 0%, rgba(15, 25, 55, 0.8) 100%);
  border-color: rgba(60, 110, 255, 0.6);
  box-shadow: -4px 0 24px rgba(37, 88, 251, 0.6);
  transform: translateY(-1px);
}

.navbar-innotec-link:hover .navbar-innotec-logo {
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.4));
}
</style>
