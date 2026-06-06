import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useReveal } from '../hooks/useReveal.js'

const EMAILJS_SERVICE = 'service_f97qquq'
const EMAILJS_TEMPLATE = 'template_t74ap6b'
const EMAILJS_PUBLIC_KEY = 'CR5ESzRn86eCWiSzz'

export default function Contact() {
  const formRef = useRef(null)
  const ref = useReveal()
  const [status, setStatus] = useState({ type: null, msg: '' })
  const [sending, setSending] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      setStatus({ type: 'success', msg: 'Mensaje enviado correctamente ✔' })
      formRef.current.reset()
    } catch {
      setStatus({ type: 'error', msg: 'Error al enviar el mensaje ❌' })
    } finally {
      setSending(false)
      setTimeout(() => setStatus({ type: null, msg: '' }), 4000)
    }
  }

  return (
    <section id="contacto" className="section">
      <h2 className="section__title">Contacto</h2>
      <p className="section__subtitle">
        ¿Tenés un proyecto en mente o querés decir hola? Escribime.
      </p>
      <div ref={ref} className="reveal">
        <form ref={formRef} className="contact-form" onSubmit={onSubmit}>
          <div className="contact-form__row">
            <label>
              <span>Nombre</span>
              <input type="text" name="name" placeholder="Tu nombre" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="tu@email.com" required />
            </label>
          </div>
          <label>
            <span>Mensaje</span>
            <textarea name="message" placeholder="Contame en qué te puedo ayudar..." required />
          </label>
          <div className="contact-form__actions">
            <button type="submit" className="btn btn--primary" disabled={sending}>
              {sending ? (
                <><i className="bi bi-arrow-clockwise spin" /> Enviando…</>
              ) : (
                <><i className="bi bi-send" /> Enviar mensaje</>
              )}
            </button>
            {status.type && (
              <p className={`form-status form-status--${status.type}`}>{status.msg}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
