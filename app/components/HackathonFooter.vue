<script setup lang="ts">
const currentYear = new Date().getFullYear()

const leftNavLinks = [
  { label: 'Inicio', to: '/hackathon#inicio' },
  { label: 'Acerca de', to: '/hackathon/about' },
  { label: 'Ponencias y Tracks', to: '/hackathon#tracks' },
  { label: 'Cronograma', to: '/hackathon/schedule' }
]

const rightNavLinks = [
  { label: 'Inscripción', to: '/registration-hackathon' },
  { label: 'Galería', to: '/hackathon/gallery' },
  { label: 'FAQ', to: '/hackathon/faq' },
  { label: 'Innotec', to: '/' }
]

const contacts = [
  { name: 'VICTORIA PAREDES', phone: '(+595) 973 838471', href: 'tel:+595973838471' },
  { name: 'JUAN PABLO LEÓN', phone: '(+595) 972 992752', href: 'tel:+595972992752' },
  { name: 'FABRICIO CHASE', phone: '(+595) 982 711908', href: 'tel:+595982711908' }
]
</script>

<template>
  <footer class="hackathon-footer">
    <div class="footer-bg-grid" />
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
          <h2 class="footer-tagline">INNOVACIÓN &bull; EQUIPOS &bull; PROTOTIPOS</h2>
          <p class="footer-description">
            Un espacio de colaboración interdisciplinaria para transformar problemas reales en propuestas con impacto.
          </p>
        </div>

        <!-- NAVIGATION COLUMN -->
        <div class="footer-col footer-nav-col">
          <h3 class="footer-col-title">NAVEGACIÓN</h3>
          <nav aria-label="Navegación Hackathon" class="nav-grid">
            <ul class="nav-list">
              <li v-for="link in leftNavLinks" :key="link.label">
                <NuxtLink :to="link.to" class="nav-link">
                  <span class="nav-arrow">&rsaquo;</span>
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
            <ul class="nav-list">
              <li v-for="link in rightNavLinks" :key="link.label">
                <NuxtLink :to="link.to" class="nav-link">
                  <span class="nav-arrow">&rsaquo;</span>
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- CONTACTS COLUMN -->
        <div class="footer-col footer-contact-col">
          <h3 class="footer-col-title">CONTACTOS</h3>
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
          <div class="footer-socials">
            <a href="#" class="social-btn" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="social-btn" aria-label="Medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2.93 5.43h.42a1 1 0 0 1 1 1.05v11a1 1 0 0 1-1 1h-.42V19h4.3v-.53h-.4a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h-.4V5.43h-4.3v.53zm9.64 0l-4.57 12.35h-.54L2.89 5.43v-.53h3.5v.53h-.37a1 1 0 0 0-1 1.06v9.88l3.86-10.4h.4l4.22 11V6.43a1 1 0 0 0-1-1.05h-.41v-.53h3.76v.53h-.42a1 1 0 0 0-1 1.05v11.12a1 1 0 0 0 1 1h.42v.52h-3.76v-.52h.41a1 1 0 0 0 1-1.05V7.7l-4.63 10.7h-.57l-4.54-12.44v-.53h3.63v.53z" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- BOTTOM BAR -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} HACKATHON INNOTEC — Todos los derechos reservados.
        </p>
        <p class="credit">
          Facultad de Ciencias y Tecnología Universidad Católica Nuestra Señora de la Asunción - Sede Santa Librada
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hackathon-footer {
  position: relative;
  background: #090614; /* Darker purple to match image */
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  color: #F3F6FE;
  overflow: hidden;
}

.footer-bg-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(163, 114, 248, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(163, 114, 248, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  pointer-events: none;
}

.footer-separator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(163, 114, 248, 0.2);
  z-index: 1;
}

.footer-container {
  position: relative;
  z-index: 2;
  max-width: 1100px; /* Reduced to match layout proportions */
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
    grid-template-columns: 1.8fr 1.5fr 1fr;
    gap: 4rem;
  }
}

/* BRAND COLUMN */
.footer-logo {
  height: 20px;
  width: auto;
  margin-bottom: 1.25rem;
}

.footer-tagline {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 900;
  color: #a372f8;
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
}

.footer-description {
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(203, 209, 251, 0.75);
  max-width: 380px;
  margin: 0;
}

/* COLUMN TITLES */
.footer-col-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 900;
  color: #F3F6FE;
  margin-bottom: 1.5rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid rgba(163, 114, 248, 0.25);
  letter-spacing: 0.05em;
  text-transform: uppercase;
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
  gap: 1.25rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: rgba(203, 209, 251, 0.75);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #a372f8;
}

.nav-arrow {
  color: rgba(163, 114, 248, 0.6);
  font-size: 1.2rem;
  line-height: 0;
  position: relative;
  top: -1px;
}

/* CONTACTS */
.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: opacity 0.2s;
  gap: 0.1rem;
}

.contact-item:hover {
  opacity: 0.8;
}

.contact-name {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 900;
  color: #a372f8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-phone {
  font-size: 0.8rem;
  color: rgba(203, 209, 251, 0.85);
}

/* SOCIALS */
.footer-socials {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: rgba(14, 8, 36, 0.8);
  border: 1px solid rgba(163, 114, 248, 0.2);
  color: #d0bef6;
  transition: all 0.2s ease;
}

.social-btn:hover {
  background: rgba(163, 114, 248, 0.15);
  border-color: rgba(163, 114, 248, 0.4);
  color: #F3F6FE;
  transform: translateY(-2px);
}

/* BOTTOM BAR */
.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
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
  font-size: 0.75rem;
  color: rgba(203, 209, 251, 0.4);
  margin: 0;
}

.credit {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-size: 0.75rem;
  color: rgba(163, 114, 248, 0.4);
  margin: 0;
}
</style>
