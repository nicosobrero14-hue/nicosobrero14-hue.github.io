import { useReveal } from '../hooks/useReveal.js'
import { technologies } from '../data/technologies.js'
import TechIcon from './TechIcon.jsx'

export default function Technologies() {
  return (
    <section id="tecnologias" className="section">
      <h2 className="section__title">Tecnologías</h2>
      <p className="section__subtitle">Stack con el que vengo trabajando.</p>
      <div className="tech-grid">
        {technologies.map((t, i) => (
          <TechItem key={t.key} tech={t} index={i} />
        ))}
      </div>
    </section>
  )
}

function TechItem({ tech, index }) {
  const ref = useReveal()
  return (
    <div
      className="tech-item reveal"
      ref={ref}
      style={{ '--accent': tech.color, transitionDelay: `${index * 40}ms` }}
    >
      <div className="tech-item__icon">
        <TechIcon name={tech.key} />
      </div>
      <span>{tech.name}</span>
    </div>
  )
}
