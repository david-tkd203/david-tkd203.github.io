import { useRef, useEffect } from 'react'
import { FaArrowDown, FaFileDownload, FaShieldAlt, FaServer, FaCogs, FaAward } from 'react-icons/fa'

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
    <div className="section hero" id="home" ref={heroRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="hero-glow" ref={glowRef} style={{ zIndex: 1 }} />
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge-wrapper">
            <span className="hero-status-pill">
              <span className="status-dot-pulse" />
              Ingeniero Civil Informático · Consultor en Arquitectura &amp; Ciberseguridad
            </span>
          </div>

          {/* Main Title & Role */}
          <h1 className="hero-title">
            DAVID <span className="accent">ÑANCULEO</span>
          </h1>

          <h2 className="hero-tagline">
            Arquitectura de Software, Backend de Misión Crítica &amp; Ciberseguridad
          </h2>

          <p className="hero-sub">
            Especialista en diseño de arquitecturas escalables bajo modelo C4, microservicios transaccionales con FastAPI y Django,
            automatización inteligente de procesos corporativos (RPA) y seguridad de la información con cumplimiento normativo
            (ISO 27001, Leyes 21.663, 21.719 y 19.799).
          </p>

          {/* Executive Pillars */}
          <div className="hero-pillars">
            <span className="pillar-item"><FaServer size={12} className="pillar-icon" /> Arquitectura C4 &amp; Microservicios</span>
            <span className="pillar-item"><FaShieldAlt size={12} className="pillar-icon" /> Ciberseguridad &amp; ISO 27001</span>
            <span className="pillar-item"><FaCogs size={12} className="pillar-icon" /> RPA Empresarial &amp; Automatización</span>
            <span className="pillar-item"><FaAward size={12} className="pillar-icon" /> Google Cybersecurity Professional</span>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              Ver Trayectoria <FaArrowDown size={12} />
            </a>
            <a href="/document/cv/David_Nanculeo_cv_es_harvard.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaFileDownload size={13} /> Descargar CV (Formato Harvard)
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contacto Directo
            </a>
          </div>

          {/* Executive Metrics Bar */}
          <div className="hero-metrics-grid">
            <div className="metric-box">
              <div className="metric-num">4+</div>
              <div className="metric-label">Años de Trayectoria</div>
              <div className="metric-detail">Ingeniería &amp; Soluciones Críticas</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">15+</div>
              <div className="metric-label">Sistemas &amp; Flujos RPA</div>
              <div className="metric-detail">En Producción (UC, IST, CCU)</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">25+</div>
              <div className="metric-label">Certificaciones</div>
              <div className="metric-detail">Google, Cisco, Rocketbot N1-N3</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">C4 / ISO</div>
              <div className="metric-label">Estándares &amp; Compliance</div>
              <div className="metric-detail">Seguridad por Diseño</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding-top: clamp(4.5rem, 8vw, 7rem);
          padding-bottom: clamp(3rem, 6vw, 5rem);
        }
        .hero-content {
          max-width: 960px;
        }
        .hero-badge-wrapper {
          margin-bottom: 1.25rem;
        }
        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 0.95rem;
          border-radius: 999px;
          background: rgba(132, 204, 22, 0.08);
          border: 1px solid rgba(132, 204, 22, 0.22);
          color: var(--accent-text);
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .status-dot-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent);
          animation: pulse-ring 2s infinite ease-in-out;
        }
        @keyframes pulse-ring {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 7.5vw, 5.5rem);
          line-height: 1.02;
          letter-spacing: -0.02em;
          color: var(--fg);
          margin-bottom: 0.5rem;
          font-weight: 800;
        }
        .hero-tagline {
          font-size: clamp(1.1rem, 2.3vw, 1.65rem);
          font-weight: 600;
          color: var(--fg-secondary, #cbd5e1);
          line-height: 1.35;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }
        .hero-sub {
          font-size: clamp(0.9rem, 1.25vw, 1.05rem);
          color: var(--fg-muted);
          line-height: 1.75;
          margin-bottom: 1.75rem;
          max-width: 820px;
        }
        .hero-pillars {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2.25rem;
        }
        .pillar-item {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          font-family: var(--font-mono, monospace);
          font-size: 0.73rem;
          color: var(--fg-secondary, #cbd5e1);
        }
        .pillar-icon {
          color: var(--accent);
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 3rem;
          align-items: center;
        }
        .hero-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 190px), 1fr));
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        .metric-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius, 10px);
          padding: 1rem 1.2rem;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .metric-box:hover {
          border-color: var(--accent-dim);
          transform: translateY(-2px);
        }
        .metric-num {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--accent);
        }
        .metric-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--fg);
          margin-top: 0.2rem;
        }
        .metric-detail {
          font-size: 0.68rem;
          color: var(--fg-muted);
          margin-top: 0.15rem;
        }
        @media (max-width: 767px) {
          .hero-metrics-grid {
            grid-template-columns: 1fr 1fr;
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </div>
  )
}
