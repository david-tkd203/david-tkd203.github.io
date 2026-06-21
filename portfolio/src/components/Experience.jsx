import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const techLogos = {
  'Python': '/images/logo_python.png',
  'Django': '/images/logo_django.png',
  'FastAPI': '',
  'React': '/images/logo_react.png',
  'PostgreSQL': '/images/logo_postgres.png',
  'Docker': '/images/logo_docker.png',
  'Git': '/images/logo_git.png',
  'SQL Server': '/images/logo_sqlserver.png',
  'Rocketbot': '/images/logo_rocketbot.png',
  'Power Automate': '/images/logo_power_automate.png',
  'Selenium': '/images/logo_selenium.svg',
  'Jenkins': '/images/logo_jenkins.png',
  'Jinja2': '/images/logo_jinja2.png',
  'Pandas': '/images/logo_pandas.png'
}

const companyLogos = {
  'Pontificia Universidad Católica de Chile': '/jobs/logo_ucatolica.png',
  'Instituto de Seguridad del Trabajo (IST)': '/jobs/logo_ist.png',
  'Automatiza Tech': '/jobs/logo_automatizatech.png',
  'Seidor (Subcontrato CCU)': '/jobs/logo_ccu.png',
  'Kabeli': '/jobs/logo_kabeli.png'
}

const experiences = [
  {
    id: 5,
    title: 'Consultor Senior de Arquitectura y Ciberseguridad',
    company: 'Pontificia Universidad Católica de Chile',
    project: 'VINCULOsync — Plataforma Legal-Tech',
    period: 'May 2025 - Presente',
    location: 'Santiago, Chile',
    tasks: [
      'Diseño y liderazgo de la arquitectura de VINCULOsync, plataforma Legal-Tech OSS para gestión y licenciamiento de derechos de autor musicales en producciones audiovisuales UC',
      'Proyecto adjudicado por el Fondo de Innovación y Tecnología DAE, con co-evaluación de la Vicerrectoría de Inteligencia Digital (VRID)',
      'Definición de arquitectura de microservicios (FastAPI + React + PostgreSQL + Docker) bajo modelo C4',
      'Diseño del modelo de datos y flujos de firma digital con cumplimiento Ley 19.799',
      'Implementación de políticas de ciberseguridad (Leyes 21.663 y 21.719)',
      'Integración de arquitectura con SSO institucional UC y Legal-by-Design',
      'Elaboración de especificaciones técnicas para presentación ante el Comité de Iniciativas y Proyectos (CIP)',
      'Coordinación técnica con VRID para despliegue en infraestructura institucional'
    ],
    tech: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Python', 'Git']
  },
  {
    id: 3,
    title: 'Ingeniero de Software',
    company: 'Instituto de Seguridad del Trabajo (IST)',
    project: 'Plataforma de Investigación de Accidentes',
    period: 'Jul 2025 - Dic 2025',
    location: 'Santiago, Chile',
    tasks: [
      'Ejecuté desarrollo y mantenimiento con Django: Class-Based Views, ORM y transacciones atómicas',
      'Implementé versionado lógico mediante Signals para consistencia de datos críticos',
      'Diseñé interfaces dinámicas con Django Templates y HTMX para actualizaciones sin recarga',
      'Integré Graphviz (DOT/SVG) para generación dinámica de diagramas causales',
      'Gestioné ciclo de despliegue en Docker + Nginx como reverse proxy',
      'Desarrollé algoritmos de migración en Python para normalización entre bases de datos',
      'Investigué arquitectura Multi-tenant para transición MySQL a PostgreSQL',
      'Elaboré informes técnicos para ISO 27001 y Ley 21.719 de privacidad'
    ],
    tech: ['Django', 'Docker', 'PostgreSQL', 'Python']
  },
  {
    id: 4,
    title: 'Desarrollador RPA e Ingeniero de Datos',
    company: 'Automatiza Tech',
    project: 'Clínica de Fracturas de Colombia',
    period: 'Jul 2025 - Dic 2025',
    location: 'Santiago, Chile',
    tasks: [
      'Diseñé flujos automatizados con Rocketbot para portales de salud (EPS, ARL y SOAT)',
      'Web Scraping con XPath dinámicos para extracción de facturación y expedientes clínicos',
      'Scripts Python con pdfplumber y RegEx para extracción de 3,200+ procedimientos quirúrgicos',
      'Algoritmos de clasificación con pandas para evaluación de miles de insumos médicos',
      'Automaticé validación de normativas de facturación generando rangos numéricos para cruces relacionales',
      'Implementé conexiones a ERP hospitalario (SQL Server) mediante pyodbc con consultas complejas',
      'Estandaricé catálogos médicos mediante mapeo de 40+ especialidades y sanitización de datos'
    ],
    tech: ['Python', 'Rocketbot', 'Pandas', 'SQL Server', 'Selenium']
  },
  {
    id: 2,
    title: 'Desarrollador RPA Semi Senior',
    company: 'Seidor (Subcontrato CCU)',
    project: 'Automatización Bancaria y Financiera',
    period: 'Ene 2025 - Mar 2025',
    location: 'Santiago, Chile',
    tasks: [
      'Responsable de mantenimiento evolutivo y correctivo de bots críticos para automatización bancaria',
      'Gestioné circulación de cajas en Odoo y procesos del área financiera',
      'Desarrollé integraciones para consumo de APIs REST con Python (Requests) y procesamiento JSON',
      'Implementé pipelines de integración continua en Jenkins con plantillas Jinja2',
      'Utilicé Docker y Docker Compose para contenerización de procesos',
      'Diseñé soluciones alternativas para consumo de APIs bancarias evitando incompatibilidades con librerías',
      'Apliqué prácticas avanzadas en Python con modularización PEP 8, .env y control de versiones Git'
    ],
    tech: ['Python', 'Docker', 'Jenkins', 'Jinja2']
  },
  {
    id: 1,
    title: 'Desarrollador RPA',
    company: 'Kabeli',
    project: 'Automatización Hotelera Integral',
    period: 'Abr 2024 - Dic 2024',
    location: 'Santiago, Chile',
    tasks: [
      'Apoyé desarrollo de soluciones para línea hotelera en Perú capturando datos de Outlook, Expedia y SynXis',
      'Diseñé flujos RPA con Rocketbot y Web Scraping usando XPath dinámicos',
      'Implementé Power Automate Cloud Flows para captura y filtrado de reservas desde Outlook',
      'Optimicé tiempos de procesamiento logrando 50 registros en solo 30 minutos desde plataformas externas',
      'Automaticé registro de inasistencias y comprobantes operando a través de 4 dominios distintos',
      'Realicé mantenimiento de bots para cartolas y cuadraturas financieras de clientes en México',
      'Participé en planificación de entregables con sprints semanales y control de versiones con Git'
    ],
    tech: ['Rocketbot', 'Power Automate', 'Python', 'Git']
  }
]

export default function Experience() {
  const [current, setCurrent] = useState(0)
  const exp = experiences[current]

  const prev = () => setCurrent((c) => (c - 1 + experiences.length) % experiences.length)
  const next = () => setCurrent((c) => (c + 1) % experiences.length)

  return (
    <section className="section reveal-el" id="experience">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        <p className="section-sub">Trayectoria profesional en RPA, backend e ingeniería de software</p>

        {/* Timeline tabs */}
        <div style={{
          display: 'flex',
          gap: '0',
          marginBottom: '2rem',
          borderBottom: '1px solid var(--border)',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch'
        }}>
          {experiences.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setCurrent(i)}
              style={{
                flex: '1 0 auto',
                padding: '0.75rem 1.25rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: i === current ? 600 : 400,
                color: i === current ? 'var(--accent)' : 'var(--fg-muted)',
                background: 'none',
                border: 'none',
                borderBottom: i === current ? '2px solid var(--accent)' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => { if (i !== current) e.currentTarget.style.color = 'var(--accent-text)' }}
              onMouseLeave={(e) => { if (i !== current) e.currentTarget.style.color = 'var(--fg-muted)' }}
            >
              {e.company}
            </button>
          ))}
        </div>

        {/* Slide card */}
        <div style={{ position: 'relative' }}>
          <div
            className="card"
            key={exp.id}
            style={{
              padding: '2rem',
              animation: 'fadeSlide 0.35s ease-out',
              maxWidth: '860px',
              margin: '0 auto'
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.25rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border)'
            }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                {companyLogos[exp.company] && (
                  <img
                    src={companyLogos[exp.company]}
                    alt={exp.company}
                    style={{
                      width: '40px',
                      height: '40px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      padding: '4px',
                      border: '1px solid var(--border)',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  />
                )}
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    color: 'var(--accent)',
                    marginBottom: '0.2rem'
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>{exp.company}</p>
                {exp.project && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--accent-text)', marginTop: '0.15rem' }}>
                    {exp.project}
                  </p>
                )}
              </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{
                  fontSize: '0.65rem',
                  color: 'var(--fg-muted)',
                  padding: '0.3rem 0.6rem',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}>
                  {exp.period}
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--fg-muted)' }}>{exp.location}</div>
              </div>
            </div>

            {/* Tasks */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {exp.tasks.map((t, i) => (
                <li key={i} style={{
                  fontSize: '0.78rem',
                  color: 'var(--fg-muted)',
                  padding: '0.35rem 0 0.35rem 1rem',
                  borderLeft: '2px solid var(--border)',
                  marginBottom: '0.4rem',
                  lineHeight: 1.6,
                  transition: 'border-color 0.2s'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-dim)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  {t}
                </li>
              ))}
            </ul>

            {/* Tech logos */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--border)'
            }}>
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.25rem 0.6rem 0.25rem 0.4rem',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    background: 'rgba(132, 204, 22, 0.06)',
                    color: 'var(--fg-muted)',
                    border: '1px solid var(--border)',
                    transition: 'all 0.2s',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-dim)'
                    e.currentTarget.style.background = 'rgba(132, 204, 22, 0.12)'
                    e.currentTarget.style.color = 'var(--accent-text)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.background = 'rgba(132, 204, 22, 0.06)'
                    e.currentTarget.style.color = 'var(--fg-muted)'
                  }}
                >
                  {techLogos[t] && (
                    <img src={techLogos[t]} alt={t} style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                  )}
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            <button onClick={prev} className="btn btn-ghost" style={{ padding: '0.5rem 1rem' }}>
              <FaArrowLeft size={12} />
            </button>

            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {experiences.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? 'var(--accent)' : 'var(--border)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0
                  }}
                />
              ))}
            </div>

            <button onClick={next} className="btn btn-ghost" style={{ padding: '0.5rem 1rem' }}>
              <FaArrowRight size={12} />
            </button>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.65rem', color: 'var(--fg-muted)', marginTop: '0.5rem' }}>
            {current + 1} / {experiences.length}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(15px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
