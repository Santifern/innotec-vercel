<script setup lang="ts">
const currentYear = new Date().getFullYear()

const leftNavLinks = [
  { label: 'Inicio', to: '/hackathon#inicio' },
  { label: 'Acerca del Congreso', to: '/acerca' },
  { label: 'Ponencias y Tracks', to: '/hackathon#tracks' },
  { label: 'Programa', to: '/hackathon/schedule' }
]

const rightNavLinks = [
  { label: 'Inscripción', to: '/registrations-hackathon' },
  { label: 'Galería', to: '/gallery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Innotec', to: '/' }
]

const contacts = [
  { name: 'MARÍA VICTORIA PAREDES', phone: '+595 973 838471', href: 'tel:+595973838471' },
  { name: 'JUAN PABLO LEON', phone: '+595 972 992752', href: 'tel:+595972992752' },
  { name: 'FABRICIO CHASE', phone: 'Número pendiente', href: '#' }
]
</script>

<template>
  <footer class="hackathon-footer">
    <div class="footer-separator" />

    <div class="footer-container">
      <div class="footer-main">
        <!-- BRAND COLUMN -->
        <div class="footer-brand">
          <NuxtImg
            src="/logo-hackathon-navbar.svg"
            alt="HACKATHON"
            class="footer-logo"
            fallback="/logo-innotec-blanco.svg"
          />
          <h2 class="footer-tagline">INNOVACIÓN · EQUIPOS · PROTOTIPOS</h2>
          <p class="footer-description">
            Un espacio de colaboración interdisciplinaria para transformar problemas reales en propuestas con impacto.
          </p>

          <div class="footer-contacts">
            <a
              v-for="contact in contacts"
              :key="contact.name"
              :href="contact.href"
              class="contact-item"
            >
              <span class="contact-name">{{ contact.name }}</span>
              <span class="contact-phone">{{ contact.phone }}</span>
            </a>
          </div>
        </div>

        <!-- NAVIGATION COLUMN -->
        <div class="footer-nav-col">
          <h3 class="footer-col-title">NAVEGACIÓN</h3>
          <nav aria-label="Navegación Hackathon" class="nav-grid">
            <ul class="nav-list">
              <li v-for="link in leftNavLinks" :key="link.label">
                <NuxtLink :to="link.to" class="nav-link">
                  <span class="nav-arrow">&rarr;</span>
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
            <ul class="nav-list">
              <li v-for="link in rightNavLinks" :key="link.label">
                <NuxtLink :to="link.to" class="nav-link">
                  <span class="nav-arrow">&rarr;</span>
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- EVENT COLUMN -->
        <div class="footer-event-col">
          <h3 class="footer-col-title">EL EVENTO</h3>
          <div class="event-details">
            <div class="event-item">
              <span class="event-label">FECHA</span>
              <span class="event-value">22 de agosto, 2026</span>
            </div>
            <div class="event-item">
              <span class="event-label">LUGAR</span>
              <span class="event-value">Asunción, Paraguay</span>
            </div>
            <div class="event-item">
              <span class="event-label">FORMATO</span>
              <span class="event-value">Equipos interdisciplinarios · Mentorías · Pitch final</span>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM BAR -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} HACKATHON INNOTEC — Todos los derechos reservados.
        </p>
        <p class="credit">
          Facultad de Ciencias y Tecnología - Universidad Católica del Paraguay
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hackathon-footer {
  position: relative;
  background: #06020E;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  color: #F3F6FE;
  overflow: hidden;
}

.footer-separator {
  height: 1px;
  background: rgba(163, 114, 248, 0.4);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem 2rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

@media (min-width: 1024px) {
  .footer-main {
    grid-template-columns: 1.5fr 2fr 1fr;
    gap: 4rem;
  }
}

/* BRAND COLUMN */
.footer-logo {
  height: 24px;
  width: auto;
  margin-bottom: 1.5rem;
}

.footer-tagline {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 900;
  color: #a372f8; /* Hackathon purple */
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.footer-description {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(203, 209, 251, 0.7);
  margin-bottom: 2rem;
  max-width: 320px;
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: opacity 0.2s;
}

.contact-item:hover {
  opacity: 0.8;
}

.contact-name {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 900;
  color: rgba(203, 209, 251, 0.9);
  margin-bottom: 0.2rem;
  text-transform: uppercase;
}

.contact-phone {
  font-size: 0.85rem;
  color: #a372f8;
}

/* COLUMN TITLES */
.footer-col-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 900;
  color: #F3F6FE;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(163, 114, 248, 0.2);
}

/* NAVIGATION */
.nav-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .nav-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(203, 209, 251, 0.7);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #a372f8;
}

.nav-arrow {
  color: #a372f8;
  font-size: 0.8rem;
}

/* EVENT DETAILS */
.event-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.event-item {
  display: flex;
  flex-direction: column;
}

.event-label {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 900;
  color: #a372f8;
  margin-bottom: 0.2rem;
}

.event-value {
  font-size: 0.85rem;
  color: rgba(203, 209, 251, 0.7);
  line-height: 1.4;
}

/* BOTTOM BAR */
.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(163, 114, 248, 0.15);
  text-align: center;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.copyright {
  font-size: 0.8rem;
  color: rgba(203, 209, 251, 0.5);
  margin: 0;
}

.credit {
  font-family: 'Fractul Thin', 'Fractul', 'Inter', sans-serif;
  font-size: 0.8rem;
  color: rgba(163, 114, 248, 0.5);
  margin: 0;
}
</style>
