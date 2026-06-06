import { useEffect, useState } from 'react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#educacion', label: 'Educación' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = links.map((l) => document.querySelector(l.href))
      const y = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i]
        if (s && s.offsetTop <= y) {
          setActive(s.id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Principal">
        <a href="#inicio" className="navbar__logo" onClick={() => setOpen(false)}>
          Nicolás<span>Sobrero</span>
        </a>
        <button
          className={`navbar__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
        <ul className={`navbar__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={active === l.href.slice(1) ? 'is-active' : ''}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
