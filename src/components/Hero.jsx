import { useReveal } from '../hooks/useReveal.js'

export default function Hero() {
  const ref = useReveal()
  return (
    <section id="inicio" className="hero">
      <div className="hero__inner reveal" ref={ref}>
        <div className="hero__text">
          <span className="hero__eyebrow">
            <span className="hero__dot" /> Disponible para oportunidades
          </span>
          <h1 className="hero__title">
            Hola, soy <span className="grad-text">Nicolás Sobrero</span>
          </h1>
          <h2 className="hero__subtitle">
            Desarrollador de software <span className="muted">en formación</span>
          </h2>
          <p className="hero__desc">
            Estudiante de desarrollo de software con experiencia construyendo
            proyectos propios y académicos. Me interesa crear sistemas bien
            organizados, con arquitectura en capas y buenas prácticas.
          </p>
          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary">
              <i className="bi bi-send" /> Contáctame
            </a>
            <a href="/cv/Nicolas Sobrero_CV.docx" className="btn btn--ghost" download>
              <i className="bi bi-download" /> Descargar CV
            </a>
          </div>
          <div className="hero__socials">
            <a href="https://github.com/nicosobrero14-hue" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="bi bi-github" />
            </a>
            <a href="https://www.linkedin.com/in/nicolassobrero" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__image-glow" />
          <img src="/Yo.jpg" alt="Foto de Nicolás Sobrero" />
        </div>
      </div>
      <a href="#educacion" className="hero__scroll" aria-label="Bajar">
        <i className="bi bi-chevron-down" />
      </a>
    </section>
  )
}
