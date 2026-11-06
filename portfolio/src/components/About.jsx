import { FaServer, FaShieldAlt, FaRobot, FaBrain, FaFilePdf, FaCheckCircle } from 'react-icons/fa'

const primarySkills = [
  { name: 'Python', logo: '/images/logo_python.png' },
  { name: 'Django', logo: '/images/logo_django.png' },
  { name: 'FastAPI', logo: '/images/logo_apirest.png' },
  { name: 'Docker', logo: '/images/logo_docker.png' },
  { name: 'PostgreSQL', logo: '/images/logo_postgres.png' },
  { name: 'Rocketbot', logo: '/images/logo_rocketbot.png' },
  { name: 'Power Automate', logo: '/images/logo_power_automate.png' },
  { name: 'Pandas', logo: '/images/logo_pandas.png' },
  { name: 'Git', logo: '/images/logo_git.png' },
  { name: 'Linux', logo: '/images/logo_cpanel.png' },
  { name: 'React', logo: '/images/logo_react.png' }
]

const competencies = [
  {
    icon: FaServer,
    title: 'Arquitectura & Backend Crítico',
    desc: 'Diseño bajo modelo C4, microservicios en FastAPI y Django, transacciones atómicas, multi-tenancy y despliegue contenedorizado con Docker.'
  },
  {
    icon: FaShieldAlt,
    title: 'Ciberseguridad & Compliance',
    desc: 'Certificación Profesional Google Cybersecurity, gestión de riesgos ISO 27001, firma digital (Ley 19.799) y marcos regulatorios (Leyes 21.663 y 21.719).'
  },
  {
    icon: FaRobot,
    title: 'Automatización Empresarial (RPA)',
    desc: 'Certificado Rocketbot N1, N2 y N3, Power Automate, web scraping con XPath dinámicos e integración con ERPs (SQL Server, Odoo).'
  },
  {
    icon: FaBrain,
    title: 'Inteligencia de Datos & ML',
    desc: 'Pipelines ETL con Pandas, modelos predictivos y visión computacional (tesis de grado con Kinect v2, MediaPipe y clasificación ML).'
  }
]

export default function About() {
  return (
    <section className="section reveal-el" id="about">
      <div className="container">
        <h2 className="section-title">Perfil Profesional</h2>
        <p className="section-sub">
          Ingeniería de software con foco en robustez arquitectónica, seguridad por diseño y automatización operativa
        </p>

        <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.95rem', color: 'var(--fg-secondary, #cbd5e1)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
              Soy <strong>Ingeniero Civil Informático</strong> y Licenciado en Ciencias de la Ingeniería de la Universidad Finis Terrae.
              Mi trabajo se centra en el diseño de <strong>arquitecturas de software confiables</strong>, el desarrollo de
              servicios backend de alto rendimiento y la implementación de marcos rigurosos de <strong>ciberseguridad y cumplimiento normativo</strong>.
            </p>

            <p style={{ fontSize: '0.92rem', color: 'var(--fg-muted)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
              Actualmente me desempeño como <strong>Consultor Senior de Arquitectura y Ciberseguridad para la Pontificia Universidad Católica de Chile</strong> en
              el proyecto <em>VINCULOsync</em> (plataforma Legal-Tech adjudicada por la DAE con co-evaluación VRID), estructurando microservicios en FastAPI,
              firma digital institucional y gobernanza de datos bajo las Leyes 21.663 y 21.719.
            </p>

            <p style={{ fontSize: '0.92rem', color: 'var(--fg-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
              En mi trayectoria en el <strong>Instituto de Seguridad del Trabajo (IST)</strong> y consultoras como <strong>Seidor y Automatiza Tech</strong>,
              lideré desarrollos con Django transaccional, diagramación causal automatizada y soluciones RPA masivas en banca, salud y hotelería.
            </p>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              color: 'var(--accent)'
            }}>
              Núcleo Tecnológico
            </h3>
            <div className="grid-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 105px), 1fr))', gap: '0.75rem' }}>
              {primarySkills.map((sk, i) => (
                <div key={i} className="skill-logo" style={{ padding: '0.85rem 0.5rem' }}>
                  <img src={sk.logo} alt={sk.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  <span style={{ fontSize: '0.68rem', fontWeight: 500 }}>{sk.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Capability Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {competencies.map((comp, idx) => {
              const Icon = comp.icon
              return (
                <div
                  key={idx}
                  className="card"
                  style={{
                    padding: '1.25rem 1.4rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(132, 204, 22, 0.08)',
                    border: '1px solid rgba(132, 204, 22, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--fg)',
                      marginBottom: '0.3rem',
                      letterSpacing: '-0.01em'
                    }}>
                      {comp.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', lineHeight: '1.6' }}>
                      {comp.desc}
                    </p>
                  </div>
                </div>
              )
            })}

            {/* Quick Credentials Summary Card */}
            <div
              className="card"
              style={{
                marginTop: '0.5rem',
                padding: '1.2rem',
                background: 'linear-gradient(135deg, rgba(18,18,26,0.9) 0%, rgba(26,32,46,0.6) 100%)',
                border: '1px solid rgba(132, 204, 22, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaCheckCircle size={14} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--fg)' }}>
                    Currículum Vitae Normalizado
                  </span>
                </div>
                <p style={{ fontSize: '0.72rem', color: 'var(--fg-muted)', marginTop: '0.2rem' }}>
                  Formato Harvard listo para evaluación técnica y ejecutiva
                </p>
              </div>
              <a
                href="/document/cv/David_Nanculeo_cv_es_harvard.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.78rem', padding: '0.45rem 1rem' }}
              >
                <FaFilePdf size={12} /> Ver CV Harvard
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
