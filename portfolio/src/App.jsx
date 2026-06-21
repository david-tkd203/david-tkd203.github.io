import { useState, useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import BootScreen from './components/BootScreen'
import ThreeScene from './components/ThreeScene'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [booted, setBooted] = useState(false)
  const mainRef = useRef(null)
  const mouseRef = useRef([0, 0])

  // Global mouse tracking for ThreeScene
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      mouseRef.current = [x, y]
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Scroll-reveal with anime.js
  useEffect(() => {
    if (!booted) return

    const els = mainRef.current?.querySelectorAll('.reveal-el')
    if (!els?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(':scope > *')
            animate(children, {
              translateY: [30, 0],
              opacity: [0, 1],
              easing: 'easeOutQuad',
              duration: 600,
              delay: stagger(80, { from: 'first' })
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [booted])

  return (
    <>
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}
      <ThreeScene mouse={mouseRef} />
      <div ref={mainRef} style={{
        position: 'relative',
        zIndex: 1,
        opacity: booted ? 1 : 0,
        transition: 'opacity 0.5s ease'
      }}>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
