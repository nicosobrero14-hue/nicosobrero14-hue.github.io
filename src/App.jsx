import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Technologies from './components/Technologies.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import GalleryModal from './components/GalleryModal.jsx'
import BackgroundFX from './components/BackgroundFX.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  const [gallery, setGallery] = useState({ open: false, images: [], title: '' })

  const openGallery = (images, title) =>
    setGallery({ open: true, images, title })
  const closeGallery = () =>
    setGallery({ open: false, images: [], title: '' })

  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Projects onOpenGallery={openGallery} />
        <Technologies />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      {gallery.open && (
        <GalleryModal
          images={gallery.images}
          title={gallery.title}
          onClose={closeGallery}
        />
      )}
    </>
  )
}
