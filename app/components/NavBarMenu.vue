<script setup lang="ts">
// Navigation items for Innotec
const items = computed(() => [
  {
    label: 'Inicio',
    to: '/#inicio',
    exactHash: true
  },
  {
    label: 'Acerca de',
    to: '/#acerca',
    exactHash: true
  },
  {
    label: 'Actividades',
    to: '/#actividades',
    exactHash: true
  },
  {
    label: 'Programa',
    to: '/schedule',
    exactHash: true
  },
  {
    label: 'Inscripción',
    to: '/regitration-innotec',
    exactHash: true
  },
  {
    label: 'Galería',
    to: '/gallery',
    exactHash: true
  },
  {
    label: 'FAQ',
    to: '/faq',
    exactHash: true
  },
  {
    label: 'Hackathon',
    to: '/hackathon',
    exactHash: true,
    mobileClass: 'mobile-nav-item--hackathon'
  }
])

const desktopItems = computed(() => items.value.filter(item => item.label !== 'Hackathon'))
</script>

<template>
  <AppNavBar
    theme="innotec"
    :items="items"
    :desktop-items="desktopItems"
  >
    <template #logo>
      <NuxtLink
        to="/"
        class="navbar-logo-link"
        aria-label="Innotec 2026 - Inicio"
      >
        <NuxtImg
          src="/logo-innotec-blanco.svg"
          alt="INNOTEC 2026"
          class="navbar-logo"
        />
        <div class="navbar-logo-badge">2026</div>
      </NuxtLink>
    </template>

    <template #action>
      <NuxtLink
        to="/hackathon"
        class="navbar-hackathon-link"
        aria-label="Hackathon"
      >
        <NuxtImg
          src="/logo-hackathon-navbar.svg"
          alt="Hackathon"
          class="navbar-hackathon-logo"
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
  object-fit: contain;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
}

@media (max-width: 640px) {
  .navbar-logo {
    height: 20px;
  }
}

.navbar-logo-link:hover .navbar-logo {
  filter: drop-shadow(0 0 8px rgba(25, 68, 240, 0.8));
  transform: scale(1.03);
}

.navbar-logo-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 900;
  color: #1944F0;
  background: rgba(25, 68, 240, 0.15);
  border: 1px solid rgba(25, 68, 240, 0.4);
  border-radius: 4px;
  padding: 1px 5px;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

@media (max-width: 640px) {
  .navbar-logo-badge {
    font-size: 0.55rem;
    padding: 1px 3px;
  }
}

.navbar-logo-link:hover .navbar-logo-badge {
  background: rgba(25, 68, 240, 0.25);
  border-color: rgba(25, 68, 240, 0.7);
  box-shadow: 0 0 10px rgba(25, 68, 240, 0.4);
}

.navbar-hackathon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 0.75rem;
  border: none;
  border-radius: 100px;
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.18), transparent 28%),
    linear-gradient(135deg, #6649f6 0%, #4b2fb8 38%, #301b59 68%, #191521 100%);
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(102, 73, 246, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.22s ease;
}

.navbar-hackathon-logo {
  width: 118px;
  height: auto;
  display: block;
  opacity: 1;
  filter: brightness(1.06);
  transition: opacity 0.22s ease, transform 0.22s ease;
}

@media (max-width: 640px) {
  .navbar-hackathon-link {
    height: 30px;
    padding: 0 0.5rem;
  }
  .navbar-hackathon-logo {
    width: 80px;
  }
}

.navbar-hackathon-link:hover,
.navbar-hackathon-link.active {
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.24), transparent 30%),
    linear-gradient(135deg, #7a5ff8 0%, #5a3ec8 38%, #3d2470 68%, #211a2e 100%);
  box-shadow: 0 4px 20px rgba(102, 73, 246, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.14);
  transform: translateY(-1px);
}

.navbar-hackathon-link:hover .navbar-hackathon-logo,
.navbar-hackathon-link.active .navbar-hackathon-logo {
  opacity: 1;
  transform: translateY(-1px);
}
</style>
