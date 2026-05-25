<script setup lang="ts">
import { Motion } from 'motion-v'

useHead({
  title: 'Actividades - Innotec 2026',
  meta: [
    { name: 'description', content: 'Sumergite en cada uno de los espacios que INNOTEC 2026 ofrece para aprender, conectar y crecer.' }
  ]
})

// Animation variants
const scrollMotion = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  inViewOptions: { once: true, margin: '-50px' },
  transition: {
    type: 'spring',
    stiffness: 40,
    damping: 15,
    delay,
    mass: 0.8
  }
})

const slideLeftMotion = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  inViewOptions: { once: true, margin: '-50px' },
  transition: {
    type: 'spring',
    stiffness: 40,
    damping: 15,
    delay,
    mass: 0.8
  }
})

const slideRightMotion = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  inViewOptions: { once: true, margin: '-50px' },
  transition: {
    type: 'spring',
    stiffness: 40,
    damping: 15,
    delay,
    mass: 0.8
  }
})
</script>

<template>
  <div class="innotec-page actividades-page">
    <!-- HERO SECTION -->
    <section class="actividades-hero">
      <div class="actividades-hero-container">
        <Motion v-bind="scrollMotion()" class="actividades-hero-header">
          <span class="actividades-label">CONOCÉ A FONDO</span>
          <h1 class="actividades-title">Actividades en<br>INNOTEC 2026</h1>
          <p class="actividades-subtitle">
            Sumergite en cada uno de los espacios que INNOTEC 2026 ofrece para aprender, conectar y crecer en las áreas de Tecnología, Ingeniería, Arquitectura y Diseño.
          </p>
        </Motion>
      </div>
    </section>

    <!-- SECTION 1: Charlas -->
    <section class="feature-section">
      <div class="section-container feature-grid">
        <Motion v-bind="slideLeftMotion()" class="feature-content">
          <h2 class="feature-title">Charlas<br>con Nuevas<br>Propuestas</h2>
          <div class="feature-text-box">
            <p>Expertos nacionales e internacionales comparten sus conocimientos y visiones sobre las últimas tendencias en tecnología e innovación. Cada charla es una oportunidad de aprender directamente de profesionales que están transformando la industria.</p>
          </div>
          <div class="feature-takeaway-box">
            <h3 class="takeaway-title">¿QUÉ ME LLEVO?</h3>
            <ul class="takeaway-list">
              <li>Tendencias actuales en la industria</li>
              <li>Casos de éxito de emprendedores</li>
              <li>Perspectivas sobre el futuro de la tecnología en tu carrera</li>
              <li>Opiniones actuales de expertos en el campo</li>
            </ul>
          </div>
        </Motion>
        <Motion v-bind="slideRightMotion()" class="feature-image-wrapper">
          <NuxtImg
            src="/placeholder-charlas.jpg"
            alt="Charla en Innotec"
            class="feature-image"
            fallback="/logo-innotec.svg"
          />
        </Motion>
      </div>
    </section>

    <!-- SECTION 2: Talleres (Image Left, Content Right) -->
    <section class="feature-section">
      <div class="section-container feature-grid feature-grid--reverse">
        <Motion v-bind="slideLeftMotion()" class="feature-image-wrapper">
          <NuxtImg
            src="/placeholder-talleres.jpg"
            alt="Talleres en Innotec"
            class="feature-image"
            fallback="/logo-innotec.svg"
          />
        </Motion>
        <Motion v-bind="slideRightMotion()" class="feature-content">
          <h2 class="feature-title">Talleres<br>Interactivos</h2>
          <div class="feature-text-box">
            <p>Sesiones prácticas donde aprenderás herramientas y técnicas aplicadas directamente en proyectos reales. Participá activamente en actividades conducidas por profesionales experimentados.</p>
          </div>
          <div class="feature-takeaway-box">
            <h3 class="takeaway-title">¿QUÉ ME LLEVO?</h3>
            <ul class="takeaway-list">
              <li>Herramientas y tecnologías prácticas</li>
              <li>Mejores prácticas de desarrollo</li>
              <li>Resolución de problemas reales</li>
              <li>Colaboración en equipo</li>
              <li>Proyectos innovadores</li>
            </ul>
          </div>
        </Motion>
      </div>
    </section>

    <!-- SECTION 3: Visitas -->
    <section class="feature-section">
      <div class="section-container feature-grid">
        <Motion v-bind="slideLeftMotion()" class="feature-content">
          <h2 class="feature-title">Visitas<br>Técnicas</h2>
          <div class="feature-text-box">
            <p>Recorridos a instalaciones y empresas referentes de diversos sectores para conocer de cerca cómo se aplica la innovación en el mundo real.</p>
          </div>
          <div class="feature-takeaway-box">
            <h3 class="takeaway-title">¿QUÉ ME LLEVO?</h3>
            <ul class="takeaway-list">
              <li>Panorama de un entorno corporativo real</li>
              <li>Procesos y metodologías empresariales</li>
              <li>Tecnologías en uso en empresas líderes</li>
              <li>Networking directo con profesionales</li>
            </ul>
          </div>
        </Motion>
        <Motion v-bind="slideRightMotion()" class="feature-image-wrapper">
          <NuxtImg
            src="/placeholder-visitas.jpg"
            alt="Visitas Técnicas"
            class="feature-image"
            fallback="/logo-innotec.svg"
          />
        </Motion>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="actividades-cta">
      <div class="section-container">
        <Motion v-bind="scrollMotion()" class="cta-content">
          <h2 class="cta-title">¿Listo para participar?</h2>
          <p class="cta-subtitle">No esperes más y registrate en INNOTEC 2026.</p>
          <NuxtLink to="/inscripciones" class="cta-button">
            Inscribite ahora
          </NuxtLink>
        </Motion>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Base Styles matching innotec aesthetics */
.innotec-page {
  position: relative;
  background: #080C16;
  min-height: 100vh;
  overflow: hidden;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  color: #F3F6FE;
}

.innotec-page::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(25, 68, 240, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(25, 68, 240, 0.055) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0.86) 42%, rgba(0, 0, 0, 0.72) 100%);
  pointer-events: none;
}

.section-container {
  position: relative;
  z-index: 1;
  width: min(100%, 1200px);
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}

/* HERO SECTION */
.actividades-hero {
  position: relative;
  z-index: 1;
  padding-top: clamp(10rem, 15vw, 14rem);
  padding-bottom: clamp(4rem, 8vw, 6rem);
  display: flex;
  justify-content: center;
}

.actividades-hero-container {
  width: 100%;
  max-width: 800px;
  text-align: center;
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}

.actividades-hero-header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.actividades-label {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.85rem;
  font-weight: 900;
  color: #7B8AF7; /* Light purple/blue */
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.actividades-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(3rem, 7vw, 4.5rem);
  font-weight: 900;
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #F3F6FE;
}

.actividades-subtitle {
  font-size: clamp(1rem, 2vw, 1.15rem);
  font-weight: 400;
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.85);
  margin: 0;
  max-width: 600px;
}

/* FEATURES SECTION */
.feature-section {
  position: relative;
  z-index: 1;
  padding-block: clamp(4rem, 8vw, 6rem);
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}

@media (min-width: 900px) {
  .feature-grid {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
  
  .feature-grid--reverse .feature-content {
    grid-column: 2;
    grid-row: 1;
  }
  
  .feature-grid--reverse .feature-image-wrapper {
    grid-column: 1;
    grid-row: 1;
  }
}

.feature-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin: 0;
  letter-spacing: -0.01em;
  line-height: 1.1;
  color: #F3F6FE;
}

.feature-text-box {
  background: rgba(14, 21, 46, 0.4);
  border: 1px solid rgba(25, 68, 240, 0.2);
  border-radius: 8px;
  padding: 1.5rem 2rem;
}

.feature-text-box p {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.9);
  margin: 0;
}

.feature-takeaway-box {
  background: rgba(14, 21, 46, 0.6);
  border: 1px solid rgba(123, 138, 247, 0.2);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.takeaway-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 900;
  color: #CBD1FB;
  margin: 0 0 1.25rem;
  letter-spacing: 0.05em;
}

.takeaway-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.takeaway-list li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.95rem;
  color: rgba(203, 209, 251, 0.9);
  line-height: 1.5;
}

.takeaway-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.45rem;
  width: 6px;
  height: 6px;
  background: #37E6F1;
  border-radius: 1px;
}

.feature-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(123, 138, 247, 0.3);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

.feature-image-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(25, 68, 240, 0.1), rgba(14, 21, 46, 0.4));
  pointer-events: none;
}

.feature-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #1e293b;
}

/* CTA SECTION */
.actividades-cta {
  position: relative;
  z-index: 1;
  padding-block: clamp(6rem, 10vw, 8rem);
  text-align: center;
}

.cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.cta-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin: 0;
  color: #F3F6FE;
}

.cta-subtitle {
  font-size: 1.1rem;
  color: rgba(203, 209, 251, 0.8);
  margin: 0 0 1rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: #1944F0;
  color: #FFFFFF;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 900;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid rgba(123, 138, 247, 0.4);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(25, 68, 240, 0.4);
}

.cta-button:hover {
  background: #1235C8;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(25, 68, 240, 0.6);
}
</style>
