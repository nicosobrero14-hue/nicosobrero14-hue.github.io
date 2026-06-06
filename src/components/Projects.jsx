import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects({ onOpenGallery }) {
  return (
    <section id="proyectos" className="section">
      <h2 className="section__title">Proyectos</h2>
      <p className="section__subtitle">
        Una selección de los sistemas que construí. Hacé click en la imagen para ver capturas.
      </p>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onOpenGallery={() => onOpenGallery(p.gallery, p.title)}
          />
        ))}
      </div>
    </section>
  )
}
