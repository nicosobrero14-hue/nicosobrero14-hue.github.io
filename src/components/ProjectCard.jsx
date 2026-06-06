import { useReveal } from '../hooks/useReveal.js'

export default function ProjectCard({ project, onOpenGallery }) {
  const ref = useReveal()
  return (
    <article className="project reveal" ref={ref}>
      <button
        type="button"
        className="project__cover"
        onClick={onOpenGallery}
        aria-label={`Ver galería de ${project.title}`}
      >
        <img src={project.cover} alt={project.title} loading="lazy" />
        <span className="project__cover-overlay">
          <i className="bi bi-images" /> Ver galería
        </span>
      </button>
      <div className="project__body">
        <h3 className="project__title">{project.title}</h3>
        <p className="project__desc">{project.description}</p>
        <div className="project__tech-groups">
          {Object.entries(project.tech).map(([label, items]) => (
            <div key={label} className="tech-group">
              <span className="tech-group__label">{label}</span>
              <div className="tech-group__items">
                {items.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {project.features?.length > 0 && (
          <ul className="project__features">
            {project.features.map((f) => (
              <li key={f}><i className="bi bi-check2-circle" /> {f}</li>
            ))}
          </ul>
        )}
        {(project.links?.demo || project.links?.repo) && (
          <div className="project__links">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="link-btn">
                <i className="bi bi-play-circle" /> Demo
              </a>
            )}
            {project.links.repo && (
              <a href={project.links.repo} target="_blank" rel="noreferrer" className="link-btn">
                <i className="bi bi-github" /> Repositorio
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
