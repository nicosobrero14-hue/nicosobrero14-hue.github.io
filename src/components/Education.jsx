import { useReveal } from '../hooks/useReveal.js'
import { education } from '../data/education.js'

export default function Education() {
  return (
    <section id="educacion" className="section">
      <h2 className="section__title">Educación</h2>
      <div className="timeline">
        {education.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

function TimelineItem({ item, index }) {
  const ref = useReveal()
  return (
    <div
      className="timeline__item reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="timeline__dot" />
      <div className="timeline__card">
        <span className="badge">{item.date}</span>
        <h3>{item.title}</h3>
        <h4>{item.place}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  )
}
