import { useCallback, useEffect, useState } from 'react'

export default function GalleryModal({ images, title, onClose }) {
  const [index, setIndex] = useState(0)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  )
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [next, prev, onClose])

  return (
    <div className="gallery" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <button className="gallery__close" onClick={onClose} aria-label="Cerrar">
        <i className="bi bi-x-lg" />
      </button>
      <button
        className="gallery__nav gallery__nav--prev"
        onClick={(e) => { e.stopPropagation(); prev() }}
        aria-label="Anterior"
      >
        <i className="bi bi-chevron-left" />
      </button>
      <figure className="gallery__figure" onClick={(e) => e.stopPropagation()}>
        <img src={images[index]} alt={`${title} — captura ${index + 1}`} />
        <figcaption>{title} · {index + 1} / {images.length}</figcaption>
      </figure>
      <button
        className="gallery__nav gallery__nav--next"
        onClick={(e) => { e.stopPropagation(); next() }}
        aria-label="Siguiente"
      >
        <i className="bi bi-chevron-right" />
      </button>
      <div className="gallery__dots" onClick={(e) => e.stopPropagation()}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`gallery__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
