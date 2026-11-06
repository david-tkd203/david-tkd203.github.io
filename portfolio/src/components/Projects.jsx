import { useState, useRef, useEffect } from 'react'
import { FaGithub, FaGlobe, FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'

const filterCategories = [
  'Todos',
  'En Producción (Live)',
  'Arquitectura & Backend',
  'Ciberseguridad & Datos',
  'Automatización & RPA'
]

const projects = [
  // --- SITIOS EN PRODUCCIÓN (LIVE) ---
  {
    id: 101,
    title: 'SIMSA 3D · Plataforma Biomecánica 3D',
    url: 'https://simsa3d.site',
    image: '/projects/simsa3d_preview.png',
    badge: '● Live en Producción',
    isLive: true,
    categories: ['En Producción (Live)', 'Arquitectura & Backend'],
    description: 'Plataforma web de investigación y reconstrucción tridimensional para la evaluación experimental de exactitud en artes marciales (Taegeuk Pal Jang - Taekwondo WT). Renderiza mallas 3D interactivas, modelos de cinemática y análisis de visión computacional en un entorno de alto rendimiento.',
    tags: ['WebGL 3D', 'React', 'Three.js', 'Visión Computacional', 'Taekwondo WT']
  },
  {
    id: 102,
    title: 'Siyash Perfumería · E-Commerce & Retail',
    url: 'https://siyash.cl',
    image: '/projects/siyash_preview.png',
    badge: '● Live en Producción',
    isLive: true,
    categories: ['En Producción (Live)'],
    description: 'Plataforma web comercial y catálogo mayorista/detalle para importadora directa de perfumería exclusiva en Chile. Arquitectura frontend optimizada con Tailwind CSS, animaciones fluidas (GSAP / Lenis), catálogo dinámico de fragancias y flujo de conversión comercial automatizado.',
    tags: ['E-Commerce', 'Tailwind CSS', 'GSAP / Lenis', 'Catálogo Digital', 'Chile']
  },
  {
    id: 103,
    title: 'SrMartinez · Texturas GTA V & Roleplay',
    url: 'https://srmartinez.site',
    image: '/projects/srmartinez_preview.png',
    badge: '● Live en Producción',
    isLive: true,
    categories: ['En Producción (Live)'],
    description: 'Repositorio comercial y catálogo web interactivo de texturas 3D optimizadas y prendas personalizadas para comunidades de GTA V Roleplay (FiveM). Enfoque en rendimiento gráfico puro, optimización de polígonos y visualización de assets en tiempo real.',
    tags: ['Catálogo 3D', 'FiveM / GTA V', 'Optimización de Assets', 'UI/UX Moderna']
  },
  // --- SISTEMAS DE MISIÓN CRÍTICA & ARQUITECTURA ---
  {
    id: 10,
    title: 'VINCULOsync · Legal-Tech UC',
    url: 'https://github.com/david-tkd203',
    badge: 'Sistema Institucional',
    isLive: false,
    categories: ['Arquitectura & Backend', 'Ciberseguridad & Datos'],
    description: 'Arquitectura de software para plataforma institucional de gestión y licenciamiento de derechos de autor en producciones audiovisuales UC. Microservicios con FastAPI, React, PostgreSQL, Docker, modelo C4, firma digital (Ley 19.799) y seguridad institucional (Leyes 21.663 y 21.719).',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Modelo C4', 'ISO 27001']
  },
  {
    id: 1,
    title: 'Hmed · Historial Clínico Global',
    url: 'https://github.com/david-tkd203/hmed',
    image: '/projects/hmed_landing.png',
    badge: 'Microservicios & OCR',
    isLive: false,
    categories: ['Arquitectura & Backend'],
    description: 'Plataforma de interoperabilidad médica y extracción inteligente de datos clínicos desde PDFs e imágenes mediante OCR. Arquitectura de 4 microservicios con Django, React, PostgreSQL y autenticación JWT en contenedores Docker.',
    tags: ['Python', 'Django', 'React', 'Docker', 'OCR', 'JWT']
  },
  {
    id: 2,
    title: 'SGSI · ISO 27001 Ciberseguridad',
    url: 'https://github.com/david-tkd203/ciberseguridad_auditoria',
    badge: 'Ciberseguridad',
    isLive: false,
    categories: ['Ciberseguridad & Datos'],
    description: 'Sistema de Gestión de Seguridad de la Información estructurado bajo norma ISO 27001. Incorpora matriz automatizada de evaluación de riesgos de activos, panel de control de amenazas y generación documental técnica.',
    tags: ['Python', 'ISO 27001', 'Ciberseguridad', 'Matriz de Riesgo']
  },
  {
    id: 3,
    title: 'Poomsae Kinect 3D · Visión & ML',
    url: 'https://github.com/david-tkd203/poomsae_kinect_3D',
    image: '/projects/evaluacion_taekwondo.gif',
    badge: 'Tesis Licenciatura',
    isLive: false,
    categories: ['Arquitectura & Backend', 'Ciberseguridad & Datos'],
    description: 'Tesis de grado para evaluación biomecánica y técnica en Taekwondo WT. Extracción de articulaciones en tiempo real con Kinect v2 + MediaPipe, clasificación mediante Random Forest/SVM y renderizado de mallas 3D (OBJ/GLB). Base del proyecto web SIMSA 3D.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning', '3D']
  },
  {
    id: 8,
    title: 'Automation Jobs · Agente Autónomo',
    url: 'https://github.com/david-tkd203/automation-jobs',
    badge: 'IA & Automatización',
    isLive: false,
    categories: ['Automatización & RPA'],
    description: 'Motor inteligente para búsqueda y postulación desatendida en LinkedIn e Indeed con Puppeteer. Evaluación semántica de compatibilidad mediante modelos locales de lenguaje (Ollama) y completado automático de formularios.',
    tags: ['Node.js', 'Puppeteer', 'Ollama IA', 'Automatización']
  },
  {
    id: 9,
    title: 'Matriz Causal Lo Miranda · IST',
    url: 'https://github.com/david-tkd203/matriz-lo-miranda',
    badge: 'Herramienta IST',
    isLive: false,
    categories: ['Ciberseguridad & Datos'],
    description: 'Herramienta de análisis causal desarrollada para el Instituto de Seguridad del Trabajo. Procesamiento dinámico de hojas de cálculo con SheetJS y filtrado en cascada para investigación de accidentes laborales.',
    tags: ['JavaScript', 'SheetJS', 'Bootstrap', 'Análisis Causal']
  },
  {
    id: 5,
    title: 'Inteligencia de Datos & Redes',
    url: 'https://github.com/david-tkd203/An-lisis-de-Drogas',
    badge: 'Minería de Datos',
    isLive: false,
    categories: ['Ciberseguridad & Datos'],
    description: 'Pipeline de recolección y análisis cuantitativo de datos digitales en redes sociales chilenas. Minería de datos con Pandas para identificación de patrones, frecuencias y métricas.',
    tags: ['Python', 'Pandas', 'Data Analysis', 'ETL']
  },
  {
    id: 6,
    title: 'Motor de Automatización Web',
    url: 'https://github.com/david-tkd203/Instagram-Unfollow-Tool',
    badge: 'RPA & Scraping',
    isLive: false,
    categories: ['Automatización & RPA'],
    description: 'Framework modular de automatización orientado a objetos (POO) con Selenium WebDriver, diseñado para ejecución robusta de flujos web en entornos locales y contenedorizados con Docker.',
    tags: ['Python', 'Selenium', 'Docker', 'POO']
  }
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const visibleProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter))

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [visibleProjects])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 380, behavior: 'smooth' })
  }

  return (
    <section className="section reveal-el" id="projects" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header with Title and Scroll Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="section-title">Proyectos &amp; Aplicaciones en Producción</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              Sistemas desplegados en vivo, arquitecturas de software de misión crítica y plataformas interactivas
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                color: canScrollLeft ? 'var(--accent)' : 'var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: canScrollLeft ? 'pointer' : 'default',
                transition: 'all 0.2s ease'
              }}
              aria-label="Scroll left"
            >
              <FaArrowLeft size={13} />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                color: canScrollRight ? 'var(--accent)' : 'var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: canScrollRight ? 'pointer' : 'default',
                transition: 'all 0.2s ease'
              }}
              aria-label="Scroll right"
            >
              <FaArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.25rem'
        }}>
          {filterCategories.map((cat) => {
            const count = cat === 'Todos'
              ? projects.length
              : projects.filter((p) => p.categories.includes(cat)).length
            const isActive = activeFilter === cat

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: isActive ? 'var(--accent)' : 'var(--bg-card)',
                  color: isActive ? '#07090e' : 'var(--fg-muted)',
                  border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                  padding: '0.4rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <span>{cat}</span>
                <span style={{
                  fontSize: '0.65rem',
                  opacity: 0.85,
                  background: isActive ? 'rgba(0,0,0,0.25)' : 'var(--bg-elevated)',
                  padding: '0.05rem 0.4rem',
                  borderRadius: '6px'
                }}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Scroll container */}
        <div className="h-scroll" ref={scrollRef} style={{ paddingBottom: '1rem' }}>
          {visibleProjects.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                border: p.isLive ? '1px solid rgba(132, 204, 22, 0.35)' : '1px solid var(--border)'
              }}
            >
              {/* Card Header with Badges and External Indicators */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <span
                  className="badge"
                  style={{
                    fontSize: '0.65rem',
                    background: p.isLive ? 'rgba(132, 204, 22, 0.15)' : undefined,
                    borderColor: p.isLive ? 'rgba(132, 204, 22, 0.4)' : undefined
                  }}
                >
                  {p.badge}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {p.isLive ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.7rem', color: 'var(--accent-text)', fontWeight: 600 }}>
                      <FaGlobe size={13} />
                      <span>Live</span>
                    </span>
                  ) : (
                    <FaGithub size={15} style={{ color: 'var(--fg-muted)' }} />
                  )}
                  <FaExternalLinkAlt size={10} style={{ color: 'var(--accent)', opacity: 0.8 }} />
                </div>
              </div>

              {/* Project Visual Preview */}
              {p.image ? (
                <div style={{
                  width: '100%',
                  height: '155px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '0.85rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  position: 'relative'
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
                    loading="lazy"
                  />
                </div>
              ) : (
                <div style={{
                  width: '100%',
                  height: '110px',
                  borderRadius: '8px',
                  marginBottom: '0.85rem',
                  background: 'linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-hover) 100%)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem',
                  textAlign: 'center'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.05em',
                    fontWeight: 600
                  }}>
                    {p.title.split('·')[0]}
                  </span>
                </div>
              )}

              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--fg)', letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--fg-muted)', lineHeight: '1.6', flex: 1 }}>
                {p.description}
              </p>

              <div className="tags" style={{ marginTop: '1rem' }}>
                {p.tags.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a
            href="https://github.com/david-tkd203"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ fontSize: '0.8rem' }}
          >
            <FaGithub size={14} /> Explorar todos los repositorios en GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
