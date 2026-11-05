import { useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const instLogos = {
  'Universidad Finis Terrae': '/education/logo_ufinisterrae.png',
  'Coder House': '/education/logo_coderhouse.png',
  'Inst. Profesional AIEP': '/education/logo_aiep.png',
  'AIEP': '/education/logo_aiep.png',
  'Universidad Mayor': '/education/logo_umayor.png',
  'RocketBot': '/images/logo_rocketbot.png',
  'Manpower': '/education/logo_manpower.png',
  'Conecta Empleo': '/education/logo_conectaempleo.png',
  'Cisco Networking Academy': '/images/introduction-to-cybersecurity.png',
  'Google': '/education/logo_google.svg'
}

const education = [
  {
    id: 1,
    degree: 'Ingeniería Civil Informática',
    institution: 'Universidad Finis Terrae',
    year: '2019 – 2025',
    status: 'Egresado'
  },
  {
    id: 2,
    degree: 'Licenciado en Ciencias de la Ingeniería',
    institution: 'Universidad Finis Terrae',
    year: '2019 – 2025',
    status: 'Completado'
  },
  {
    id: 3,
    degree: 'Certificado Profesional Google Cybersecurity',
    institution: 'Google',
    year: '2026',
    status: 'Completado',
    url: '/certificates/certificados_google/Coursera carrera google cybersecurity.pdf'
  },
  {
    id: 4,
    degree: 'Desarrollador Fullstack',
    institution: 'Coder House',
    year: '',
    status: 'En Progreso'
  },
  {
    id: 5,
    degree: 'Diplomado en Desarrollo Web',
    institution: 'Inst. Profesional AIEP',
    year: '2023',
    status: 'Completado'
  },
  {
    id: 6,
    degree: 'Liderazgo y Emprendimiento',
    institution: 'Universidad Mayor',
    year: '2020',
    status: 'Completado'
  }
]

const filterCategories = [
  'Todas',
  'Ciberseguridad',
  'Google',
  'RPA & Automatización',
  'Desarrollo Web',
  'Gestión & Datos'
]

const certifications = [
  // --- PROGRAMA COMPLETO GOOGLE CYBERSECURITY ---
  {
    title: 'Google Cybersecurity Professional Certificate (Carrera 9 Cursos)',
    institution: 'Google',
    url: '/certificates/certificados_google/Coursera carrera google cybersecurity.pdf',
    categories: ['Ciberseguridad', 'Google'],
    date: 'Oct 2026'
  },
  // --- CURSOS DE LA CARRERA GOOGLE CYBERSECURITY ---
  {
    title: 'Foundations of Cybersecurity',
    institution: 'Google',
    url: '/certificates/certificados_google/Coursera foundations of cybersecurity.pdf',
    categories: ['Ciberseguridad', 'Google'],
    date: 'Jul 2026'
  },
  {
    title: 'Play It Safe: Manage Security Risks',
    institution: 'Google',
    url: '/certificates/certificados_google/Coursera play it safe manage security risks.pdf',
    categories: ['Ciberseguridad', 'Google'],
    date: 'Jul 2026'
  },
  {
    title: 'Connect and Protect: Networks and Network Security',
    institution: 'Google',
    url: '/certificates/certificados_google/Coursera connect and protect networks and network security.pdf',
    categories: ['Ciberseguridad', 'Google'],
    date: 'Jul 2026'
  },
  {
    title: 'Tools of the Trade: Linux and SQL',
    institution: 'Google',
    url: '/certificates/certificados_google/Coursera tools of the trade linux and sql.pdf',
    categories: ['Ciberseguridad', 'Google'],
    date: 'Ago 2026'
  },
  {
    title: 'Assets, Threats, and Vulnerabilities',
    institution: 'Google',
    url: '/certificates/certificados_google/Coursera assets, threats, and vulnerabilities.pdf',
    categories: ['Ciberseguridad', 'Google'],
    date: 'Sep 2026'
  },
  {
    title: 'Sound the Alarm: Detection and Response',
    institution: 'Google',
    url: '/certificates/certificados_google/Coursera sound the alarm detection and response.pdf',
    categories: ['Ciberseguridad', 'Google'],
    date: 'Sep 2026'
  },
  {
    title: 'Automate Cybersecurity Tasks with Python',
    institution: 'Google',
    url: '/certificates/certificados_google/Coursera automate cybersecurity task with python.pdf',
    categories: ['Ciberseguridad', 'Google'],
    date: 'Oct 2026'
  },
  {
    title: 'Put It to Work: Prepare for Cybersecurity Jobs',
    institution: 'Google',
    url: '/certificates/certificados_google/Coursera put it to work prepare for cybersecurity jobs.pdf',
    categories: ['Ciberseguridad', 'Google'],
    date: 'Oct 2026'
  },
  {
    title: 'Accelerate Your Job Search with AI',
    institution: 'Google',
    url: '/certificates/certificados_google/Coursera accelerate your job search with AI.pdf',
    categories: ['Google', 'Gestión & Datos'],
    date: 'Oct 2026'
  },
  {
    title: 'Foundations of Project Management',
    institution: 'Google',
    url: '/certificates/certificados_google/Coursera foundations of Project Management.pdf',
    categories: ['Google', 'Gestión & Datos'],
    date: 'Oct 2026'
  },
  // --- OTRAS CERTIFICACIONES DE CIBERSEGURIDAD ---
  {
    title: 'Introduction to Cybersecurity',
    institution: 'Cisco Networking Academy',
    url: '/images/introduction-to-cybersecurity.png',
    categories: ['Ciberseguridad'],
    date: ''
  },
  {
    title: 'Ciberseguridad en Entornos de Aprendizaje',
    institution: 'Conecta Empleo',
    url: '/certificates/FT Movistar y SENCE - Certificado_ciberseguridad_entornos_aprendizaje.pdf',
    categories: ['Ciberseguridad'],
    date: ''
  },
  // --- RPA & AUTOMATIZACIÓN ---
  {
    title: 'Rocketbot Framework N1',
    institution: 'RocketBot',
    url: 'https://certificate.rocketbot.co/badges/25e6b377-0555-a869-e4d4-b2c3c6844ad3',
    categories: ['RPA & Automatización'],
    date: ''
  },
  {
    title: 'Rocketbot Framework N2',
    institution: 'RocketBot',
    url: 'https://certificate.rocketbot.co/badges/3f02ca03-c200-7422-dd10-09d91bc2ebd6',
    categories: ['RPA & Automatización'],
    date: ''
  },
  {
    title: 'Rocketbot Framework N3',
    institution: 'RocketBot',
    url: 'https://certificate.rocketbot.co/badges/0c5eddad-2418-4e7e-6a25-d502e992ce58',
    categories: ['RPA & Automatización'],
    date: ''
  },
  // --- DESARROLLO WEB & FRONTEND ---
  {
    title: 'React JS',
    institution: 'Coder House',
    url: '/certificates/certificado_react.png',
    categories: ['Desarrollo Web'],
    date: ''
  },
  {
    title: 'JavaScript',
    institution: 'Coder House',
    url: '/certificates/certificado_js.png',
    categories: ['Desarrollo Web'],
    date: ''
  },
  {
    title: 'Desarrollo Web (HTML, CSS, SASS)',
    institution: 'Coder House',
    url: '/certificates/certificado_desarrolloweb.png',
    categories: ['Desarrollo Web'],
    date: ''
  },
  {
    title: 'Diseño Programación Web',
    institution: 'AIEP',
    url: '/certificates/Diplomado - Certificado_diseño_programacionweb.pdf',
    categories: ['Desarrollo Web'],
    date: ''
  },
  {
    title: 'Módulo Diseño Web (HTML, CSS)',
    institution: 'AIEP',
    url: '/certificates/Diplomado - Diploma módulo_ diseño_web_html_css.pdf',
    categories: ['Desarrollo Web'],
    date: ''
  },
  {
    title: 'Módulo Programación JavaScript',
    institution: 'AIEP',
    url: '/certificates/Diplomado - Diploma módulo_programacion_javascript.pdf',
    categories: ['Desarrollo Web'],
    date: ''
  },
  {
    title: 'WordPress',
    institution: 'AIEP',
    url: '/certificates/Diplomado - certificado_wordpress.pdf',
    categories: ['Desarrollo Web'],
    date: ''
  },
  // --- GESTIÓN & DATOS ---
  {
    title: 'Gestión Proyectos Agile',
    institution: 'Conecta Empleo',
    url: '/certificates/FT Movistar y SENCE - Certificado_gestion_proyectos_metodologias_agiles_enfoquelean.pdf',
    categories: ['Gestión & Datos'],
    date: ''
  },
  {
    title: 'Excel Avanzado',
    institution: 'Manpower',
    url: '/certificates/Diploma Alumno David Simón Ñanculeo Bastías_excel_basico_intermedio_avanzado.pdf',
    categories: ['Gestión & Datos'],
    date: ''
  }
]

export default function Education() {
  const [activeFilter, setActiveFilter] = useState('Todas')

  const visibleCerts = activeFilter === 'Todas'
    ? certifications
    : certifications.filter((c) => c.categories.includes(activeFilter))

  return (
    <section className="section reveal-el" id="education">
      <div className="container">
        <h2 className="section-title">Educación</h2>
        <p className="section-sub">Formación académica y certificaciones profesionales</p>

        {/* Education cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '1.25rem',
          marginBottom: '4rem'
        }}>
          {education.map((edu) => {
            const isClickable = Boolean(edu.url)
            const CardTag = isClickable ? 'a' : 'div'
            const extraProps = isClickable ? {
              href: edu.url,
              target: '_blank',
              rel: 'noopener noreferrer',
              style: { textDecoration: 'none', color: 'inherit' }
            } : {}

            return (
              <CardTag
                key={edu.id}
                {...extraProps}
                className="edu-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: isClickable ? 'pointer' : 'default',
                  ...(extraProps.style || {})
                }}
              >
                {/* subtle lime accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '3px',
                  height: '100%',
                  background: edu.status === 'Egresado' || edu.status === 'Completado' ? 'var(--accent)' : 'var(--accent-dim)',
                  borderRadius: '0 2px 2px 0'
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '10px',
                    background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, padding: '6px', overflow: 'hidden'
                  }}>
                    {instLogos[edu.institution] ? (
                      <img
                        src={instLogos[edu.institution]}
                        alt={edu.institution}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    ) : (
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 700 }}>★</span>
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
                        lineHeight: 1.1,
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        color: edu.status === 'Egresado' ? 'var(--accent)' : 'var(--fg)'
                      }}>
                        {edu.degree}
                      </h3>
                      {isClickable && (
                        <FaExternalLinkAlt size={11} style={{ color: 'var(--accent)', flexShrink: 0, opacity: 0.8 }} />
                      )}
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', marginTop: '0.15rem' }}>
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  {edu.year && <span style={{ fontSize: '0.7rem', color: 'var(--fg-muted)' }}>{edu.year}</span>}
                  <span className="badge" style={{ fontSize: '0.6rem' }}>
                    {isClickable ? 'Completado ↗' : edu.status}
                  </span>
                </div>
              </CardTag>
            )
          })}
        </div>

        {/* Certifications Header & Filters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            color: 'var(--accent)',
            position: 'relative',
            display: 'inline-block'
          }}>
            Certificaciones ({certifications.length})
            <span style={{
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: 'clamp(2rem, 5vw, 4rem)',
              height: '3px',
              background: 'var(--accent)',
              borderRadius: '2px'
            }} />
          </h3>

          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '0.5rem'
          }}>
            {filterCategories.map((cat) => {
              const count = cat === 'Todas'
                ? certifications.length
                : certifications.filter((c) => c.categories.includes(cat)).length
              const isActive = activeFilter === cat

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    background: isActive ? 'var(--accent)' : 'var(--bg-card)',
                    color: isActive ? '#050508' : 'var(--fg-muted)',
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
        </div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '0.75rem'
        }}>
          {visibleCerts.map((cert, i) => (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                padding: '0.85rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textDecoration: 'none',
                color: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-dim)'
                e.currentTarget.style.background = 'var(--bg-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--bg-card)'
              }}
            >
              <div style={{
                width: '38px', height: '38px', borderRadius: '8px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, padding: '5px', overflow: 'hidden'
              }}>
                {instLogos[cert.institution] ? (
                  <img
                    src={instLogos[cert.institution]}
                    alt={cert.institution}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 600 }}>✓</span>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.4rem' }}>
                  <p style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: cert.categories.includes('Google') && cert.title.includes('Carrera') ? 'var(--accent)' : 'var(--fg)'
                  }}>
                    {cert.title}
                  </p>
                  <FaExternalLinkAlt size={9} style={{ color: 'var(--fg-muted)', flexShrink: 0, marginTop: '2px', opacity: 0.7 }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--fg-muted)' }}>{cert.institution}</span>
                  {cert.date && (
                    <>
                      <span style={{ fontSize: '0.6rem', color: 'var(--border)' }}>•</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--accent-dim)' }}>{cert.date}</span>
                    </>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
