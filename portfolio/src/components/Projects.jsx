import { useState, useRef, useEffect } from 'react'
import { FaGithub, FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 10,
    title: 'VINCULOsync · Legal-Tech UC',
    description: 'Arquitectura de software para plataforma institucional de gestión y licenciamiento de derechos de autor en producciones UC. Microservicios con FastAPI, React, PostgreSQL, Docker, modelo C4, firma digital (Ley 19.799) y seguridad institucional (Leyes 21.663 y 21.719).',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Modelo C4', 'ISO 27001'],
    link: 'https://github.com/david-tkd203',
    featured: true
  },
  {
    id: 1,
    title: 'Hmed · Historial Clínico Global',
    description: 'Plataforma de interoperabilidad médica y extracción inteligente de datos clínicos desde PDFs e imágenes mediante OCR. Arquitectura de 4 microservicios con Django, React, PostgreSQL y autenticación JWT en contenedores Docker.',
    tags: ['Python', 'Django', 'React', 'Docker', 'OCR', 'JWT'],
    link: 'https://github.com/david-tkd203/hmed',
    image: '/projects/hmed_landing.png',
    featured: true
  },
  {
    id: 2,
    title: 'SGSI · ISO 27001 Ciberseguridad',
    description: 'Sistema de Gestión de Seguridad de la Información estructurado bajo norma ISO 27001. Incorpora matriz automatizada de evaluación de riesgos de activos, panel de control de amenazas y generación documental técnica.',
    tags: ['Python', 'ISO 27001', 'Ciberseguridad', 'Matriz de Riesgo'],
    link: 'https://github.com/david-tkd203/ciberseguridad_auditoria',
    featured: true
  },
  {
    id: 3,
    title: 'Poomsae Kinect 3D · Visión & ML',
    description: 'Tesis de grado para evaluación biomecánica y técnica en Taekwondo WT. Extracción de articulaciones en tiempo real con Kinect v2 + MediaPipe, clasificación mediante Random Forest/SVM y renderizado de mallas 3D (OBJ/GLB).',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning', '3D'],
    link: 'https://github.com/david-tkd203/poomsae_kinect_3D',
    image: '/projects/evaluacion_taekwondo.gif',
    featured: true
  },
  {
    id: 8,
    title: 'Automation Jobs · Agente Autónomo',
    description: 'Motor inteligente para búsqueda y postulación desatendida en LinkedIn e Indeed con Puppeteer. Evaluación semántica de compatibilidad mediante modelos locales de lenguaje (Ollama) y completado automático de formularios.',
    tags: ['Node.js', 'Puppeteer', 'Ollama IA', 'Automatización'],
    link: 'https://github.com/david-tkd203/automation-jobs',
    featured: true
  },
  {
    id: 9,
    title: 'Matriz Causal Lo Miranda · IST',
    description: 'Herramienta de análisis causal desarrollada para el Instituto de Seguridad del Trabajo. Procesamiento dinámico de hojas de cálculo con SheetJS y filtrado en cascada para investigación de accidentes.',
    tags: ['JavaScript', 'SheetJS', 'Bootstrap', 'Análisis Causal'],
    link: 'https://github.com/david-tkd203/matriz-lo-miranda',
    featured: false
  },
  {
    id: 5,
    title: 'Inteligencia de Datos & Redes',
    description: 'Pipeline de recolección y análisis cuantitativo de datos digitales en redes sociales chilenas. Minería de datos con Pandas para identificación de patrones, frecuencias y métricas.',
    tags: ['Python', 'Pandas', 'Data Analysis', 'ETL'],
    link: 'https://github.com/david-tkd203/An-lisis-de-Drogas',
    featured: false
  },
  {
    id: 6,
    title: 'Motor de Automatización Web',
    description: 'Framework modular de automatización orientado a objetos (POO) con Selenium WebDriver, diseñado para ejecución robusta de flujos web en entornos locales y contenedorizados con Docker.',
    tags: ['Python', 'Selenium', 'Docker', 'POO'],
    link: 'https://github.com/david-tkd203/Instagram-Unfollow-Tool',
    featured: false
  },
  {
    id: 7,
    title: 'Microservicio REST Django',
    description: 'Implementación backend con Django para consumo y normalización de endpoints externos. Cuenta con autenticación de usuarios, panel administrativo y orquestación con Docker Compose.',
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
    el.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <section className="section reveal-el" id="projects" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="section-title">Proyectos de Ingeniería</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              Sistemas de misión crítica, arquitecturas backend, ciberseguridad y soluciones de automatización
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

        {/* Scroll container */}
        <div className="h-scroll" ref={scrollRef} style={{ marginTop: '1.75rem', paddingBottom: '1rem' }}>
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <span className="badge" style={{ fontSize: '0.65rem' }}>
                  {p.featured ? '★ Sistema Crítico' : 'Proyecto'}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaGithub size={15} style={{ color: 'var(--fg-muted)' }} />
                  <FaExternalLinkAlt size={10} style={{ color: 'var(--accent)', opacity: 0.8 }} />
                </div>
              </div>

              {p.image && (
                <div style={{
                  width: '100%',
                  height: '140px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '0.85rem',
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
