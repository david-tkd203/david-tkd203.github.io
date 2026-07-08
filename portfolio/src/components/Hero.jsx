import { useRef, useEffect } from 'react'
import { FaArrowDown, FaFileDownload } from 'react-icons/fa'

const tickerItems = [
  'Python', 'Django', 'React', 'TypeScript', 'Docker', 'RPA',
  'APIs REST', 'PostgreSQL', 'MySQL', 'Pandas', 'Git', 'Linux',
  'Selenium', 'Rocketbot', 'Power Automate', 'Jenkins', 'Flask',
  'HTML/CSS', 'Odoo', 'Nginx', 'Jira', 'Cloud Computing'
]

const Ticker = () => (
  <div className="ticker">
    <div className="ticker-track">
      {[...Array(3)].map((_, i) => (
        <div key={i} style={{ display: 'inline-flex', gap: '3rem' }}>
          {tickerItems.map((item, j) => (
            <span key={`${i}-${j}`} className="ticker-item">
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export default function Hero() {
  const heroRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const glow = glowRef.current
    if (!hero || !glow) return

    const onMove = (e) => {
      const r = hero.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    }
    const onLeave = () => { glow.style.opacity = '0' }
    const onEnter = () => { glow.style.opacity = '1' }

    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    hero.addEventListener('mouseenter', onEnter)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
      hero.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <>
      <div className="section hero" id="home" ref={heroRef} style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-glow" ref={glowRef} style={{ zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-grid">
            <div>
              <p className="display-sm" style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>
                DAVID NANCULEO
              </p>
              <h1 className="hero-name">
                <span className="accent">&lt;</span>
                {' '}CODE{' '}
                <span className="accent">/&gt;</span>
              </h1>
              <p className="hero-sub">
                Ingeniero Civil Informático especializado en Backend, RPA y automatización inteligente.
                Construyo sistemas que funcionan mientras dormís.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  Ver Proyectos <FaArrowDown size={12} />
                </a>
                <a href="mailto:david.203.52@gmail.com" className="btn btn-ghost">
                  Contacto
                </a>
                <a href="/document/cv/David_Nanculeo_cv_es_harvard.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <FaFileDownload size={12} /> CV
                </a>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-num">2+</div>
                <div className="stat-label">Años Exp.</div>
              </div>
              <div className="stat">
                <div className="stat-num">15+</div>
                <div className="stat-label">Proyectos</div>
              </div>
              <div className="stat">
                <div className="stat-num">7+</div>
                <div className="stat-label">Certs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Ticker />

      <style>{`
        .hero {
          min-height: 70vh;
          display: flex;
          align-items: center;
          padding-top: 6rem;
        }
        @media (max-width: 767px) {
          .hero { min-height: 60vh; padding-top: 5rem; }
          .hero-stats { margin-top: 1rem; }
        }
      `}</style>
    </>
  )
}
