<script setup lang="ts">
// Navigation items for Hackathon
const items = computed(() => [
  {
    label: 'Acerca del Congreso',
    to: '#acerca',
    exactHash: true,
    active: false
  },
  {
    label: 'Ponencias y Tracks',
    to: '#actividades',
    exactHash: true,
    active: false
  },
  {
    label: 'Programa',
    to: undefined,
    exactHash: true,
    active: false
  },
  {
    label: 'Inscripción',
    to: '#inscripcion',
    exactHash: true,
    active: false
  },
  {
    label: 'Galería',
    to: undefined,
    exactHash: true,
    active: false
  },
  {
    label: 'FAQ',
    to: undefined,
    exactHash: true,
    active: false
  },
  {
    label: 'Innotec',
    to: '/',
    exactHash: false,
    active: false,
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
  object-fit: contain;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
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
  height: 34px;
  padding: 0 0.55rem;
  border: 1px solid rgba(25, 68, 240, 0.3);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(25, 68, 240, 0.14), rgba(123, 138, 247, 0.08)),
    rgba(25, 68, 240, 0.04);
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}

.navbar-innotec-logo {
  width: 100px;
  height: auto;
  display: block;
  opacity: 0.92;
  filter: drop-shadow(0 0 8px rgba(25, 68, 240, 0.2));
  transition: opacity 0.25s ease, filter 0.25s ease, transform 0.25s ease;
}

@media (max-width: 640px) {
  .navbar-innotec-link {
    height: 30px;
    padding: 0 0.45rem;
  }
  .navbar-innotec-logo {
    width: 75px;
  }
}

.navbar-innotec-link:hover {
  background:
    linear-gradient(135deg, rgba(25, 68, 240, 0.24), rgba(123, 138, 247, 0.16)),
    rgba(25, 68, 240, 0.08);
  border-color: rgba(25, 68, 240, 0.64);
  box-shadow: 0 0 18px rgba(25, 68, 240, 0.26), 0 0 24px rgba(123, 138, 247, 0.18);
  transform: translateY(-1px);
}

.navbar-innotec-link:hover .navbar-innotec-logo {
  opacity: 1;
  filter: drop-shadow(0 0 10px rgba(25, 68, 240, 0.45));
  transform: translateY(-1px);
}
</style>
