import { useState, useRef, useEffect } from 'react'
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Hmed',
    description: 'Plataforma web de Historial Clínico Global con extracción inteligente desde PDFs e imágenes mediante OCR. Arquitectura Django + React + PostgreSQL con autenticación JWT y 4 servicios Docker.',
    tags: ['Python', 'Django', 'React', 'Docker', 'OCR'],
    link: 'https://github.com/david-tkd203/hmed',
    image: '/projects/hmed_landing.png',
    featured: true
  },
  {
    id: 2,
    title: 'SGSI Ciberseguridad',
    description: 'Sistema de Gestión de Seguridad de la Información ISO 27001 con matriz de riesgos, dashboard interactivo, scripts Python y generación de documentos Word profesionales.',
    tags: ['Python', 'VBA', 'ISO 27001', 'Excel'],
    link: 'https://github.com/david-tkd203/ciberseguridad_auditoria',
    featured: true
  },
  {
    id: 3,
    title: 'Poomsae Kinect 3D',
    description: 'Sistema de evaluación automatizada de exactitud en Poomsae (Taekwondo WT) usando Kinect v2 + MediaPipe. Clasificación con Random Forest/SVM y exportación 3D (OBJ/GLB). Tesis de Licenciatura.',
    tags: ['Python', 'OpenCV', 'ML', 'Kinect', '3D'],
    link: 'https://github.com/david-tkd203/poomsae_kinect_3D',
    image: '/projects/evaluacion_taekwondo.gif',
    featured: true
  },
  {
    id: 8,
    title: 'Automation Jobs',
    description: 'Bots que buscan empleos en LinkedIn e Indeed, analizan compatibilidad con tu perfil usando IA local (Ollama) y completan formularios Easy Apply automáticamente.',
    tags: ['Node.js', 'Puppeteer', 'Ollama', 'Automation'],
    link: 'https://github.com/david-tkd203/automation-jobs',
    featured: true
  },
  {
    id: 5,
    title: 'Análisis Narcotráfico',
    description: 'Análisis de contenido sobre drogas y narcotráfico en redes sociales chilenas. Procesa datos Excel con Pandas para obtener métricas, hashtags y visualizaciones.',
    tags: ['Python', 'Pandas', 'Data Analysis', 'APIs'],
    link: 'https://github.com/david-tkd203/An-lisis-de-Drogas',
    featured: false
  },
  {
    id: 9,
    title: 'Matriz Lo Miranda · VotME',
    description: 'Herramienta IST con filtros en cascada desde Excel (SheetJS). Dos modos: carga automática del archivo fuente o selección manual. Bootstrap 5.',
    tags: ['JavaScript', 'SheetJS', 'Bootstrap', 'Excel'],
    link: 'https://github.com/david-tkd203/matriz-lo-miranda',
    featured: false
  },
  {
    id: 6,
    title: 'Unfollower Tool',
    description: 'Bot para cancelar solicitudes de seguimiento pendientes en Instagram. Arquitectura limpia con clases POO, modo local y Docker.',
    tags: ['Python', 'Selenium', 'Docker', 'POO'],
    link: 'https://github.com/david-tkd203/Instagram-Unfollow-Tool',
    featured: false
  },
  {
    id: 7,
    title: 'Poke Web API',
    description: 'Evaluación técnica Django que consume la PokéAPI, procesa datos en tabla ordenada por experiencia base. Login, panel admin y Docker Compose.',
    tags: ['Django', 'Python', 'REST API', 'Docker'],
    link: 'https://github.com/david-tkd203/Poke-Web-API',
    featured: false
  }
]

export default function Projects() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState)
    updateScrollState()
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('.project-card')
    const amount = card ? card.offsetWidth + 24 : 400
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="section reveal-el" id="projects">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
      </div>

      <div style={{ position: 'relative', padding: '0 var(--section-px)' }}>
        {/* Gradient fades */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 'clamp(2rem, 5vw, 4rem)',
          background: `linear-gradient(to right, var(--bg), transparent)`,
          zIndex: 2,
          pointerEvents: 'none',
          opacity: canScrollLeft ? 1 : 0,
          transition: 'opacity 0.3s'
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 'clamp(2rem, 5vw, 4rem)',
          background: `linear-gradient(to left, var(--bg), transparent)`,
          zIndex: 2,
          pointerEvents: 'none',
          opacity: canScrollRight ? 1 : 0,
          transition: 'opacity 0.3s'
        }} />

        {/* Scroll buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll(-1)}
            style={{
              position: 'absolute',
              left: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              backdropFilter: 'blur(8px)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-dim)'; e.currentTarget.style.color = 'var(--accent-text)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--accent)' }}
          >
            <FaArrowLeft size={14} />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll(1)}
            style={{
              position: 'absolute',
              right: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              backdropFilter: 'blur(8px)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-dim)'; e.currentTarget.style.color = 'var(--accent-text)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--accent)' }}
          >
            <FaArrowRight size={14} />
          </button>
        )}

        {/* Scroll container */}
        <div className="h-scroll tilt-card" ref={scrollRef}>
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card tilt-card-inner"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - r.left
                const y = e.clientY - r.top
                const cx = r.width / 2
                const cy = r.height / 2
                const rotX = ((y - cy) / cy) * -8
                const rotY = ((x - cx) / cx) * 8
                e.currentTarget.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span className="badge" style={{ fontSize: '0.6rem' }}>
                  {p.featured ? '★ Destacado' : 'Proyecto'}
                </span>
                <FaGithub size={16} style={{ color: 'var(--fg-muted)', flexShrink: 0 }} />
              </div>
              {p.image && (
                <div style={{
                  width: '100%',
                  height: '140px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '0.75rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)'
                }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              )}
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="container" style={{ marginTop: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', fontSize: '0.75rem', color: 'var(--fg-muted)' }}>
          <a href="https://github.com/david-tkd203" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
            Ver todos en GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
