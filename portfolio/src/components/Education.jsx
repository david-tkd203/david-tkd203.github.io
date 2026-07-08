const instLogos = {
  'Universidad Finis Terrae': '/education/logo_ufinisterrae.png',
  'Coder House': '/education/logo_coderhouse.png',
  'Inst. Profesional AIEP': '/education/logo_aiep.png',
  'AIEP': '/education/logo_aiep.png',
  'Universidad Mayor': '/education/logo_umayor.png',
  'RocketBot': '/images/logo_rocketbot.png',
  'Manpower': '/education/logo_manpower.png',
  'Conecta Empleo': '/education/logo_conectaempleo.png'
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
    degree: 'Desarrollador Fullstack',
    institution: 'Coder House',
    year: '',
    status: 'En Progreso'
  },
  {
    id: 4,
    degree: 'Diplomado en Desarrollo Web',
    institution: 'Inst. Profesional AIEP',
    year: '2023',
    status: 'Completado'
  },
  {
    id: 5,
    degree: 'Liderazgo y Emprendimiento',
    institution: 'Universidad Mayor',
    year: '2020',
    status: 'Completado'
  }
]

const certifications = [
  { title: 'Rocketbot Framework N1', institution: 'RocketBot', url: 'https://certificate.rocketbot.co/badges/25e6b377-0555-a869-e4d4-b2c3c6844ad3' },
  { title: 'Rocketbot Framework N2', institution: 'RocketBot', url: 'https://certificate.rocketbot.co/badges/3f02ca03-c200-7422-dd10-09d91bc2ebd6' },
  { title: 'Rocketbot Framework N3', institution: 'RocketBot', url: 'https://certificate.rocketbot.co/badges/0c5eddad-2418-4e7e-6a25-d502e992ce58' },
  { title: 'React JS', institution: 'Coder House', url: '/certificates/certificado_react.png' },
  { title: 'JavaScript', institution: 'Coder House', url: '/certificates/certificado_js.png' },
  { title: 'Desarrollo Web (HTML, CSS, SASS)', institution: 'Coder House', url: '/certificates/certificado_desarrolloweb.png' },
  { title: 'Excel Avanzado', institution: 'Manpower', url: '/certificates/Diploma Alumno David Simón Ñanculeo Bastías_excel_basico_intermedio_avanzado.pdf' },
  { title: 'Gestión Proyectos Agile', institution: 'Conecta Empleo', url: '/certificates/FT Movistar y SENCE - Certificado_gestion_proyectos_metodologias_agiles_enfoquelean.pdf' },
  { title: 'Ciberseguridad', institution: 'Conecta Empleo', url: '/certificates/FT Movistar y SENCE - Certificado_ciberseguridad_entornos_aprendizaje.pdf' },
  { title: 'Diseño Programación Web', institution: 'AIEP', url: '/certificates/Diplomado - Certificado_diseño_programacionweb.pdf' },
  { title: 'Módulo Diseño Web (HTML, CSS)', institution: 'AIEP', url: '/certificates/Diplomado - Diploma módulo_ diseño_web_html_css.pdf' },
  { title: 'Módulo Programación JavaScript', institution: 'AIEP', url: '/certificates/Diplomado - Diploma módulo_programacion_javascript.pdf' },
  { title: 'WordPress', institution: 'AIEP', url: '/certificates/Diplomado - certificado_wordpress.pdf' },
  { title: 'Introduction to Cybersecurity', institution: 'Cisco Networking Academy', url: '/images/introduction-to-cybersecurity.png' }
]

export default function Education() {
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
          {education.map((edu) => (
            <div key={edu.id} className="edu-card" style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* subtle lime accent bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '3px',
                height: '100%',
                background: edu.status === 'Egresado' ? 'var(--accent)' : 'var(--accent-dim)',
                borderRadius: '0 2px 2px 0'
              }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '10px',
                  background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, padding: '6px', overflow: 'hidden'
                }}>
                  {instLogos[edu.institution] && (
                    <img src={instLogos[edu.institution]} alt={edu.institution}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
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
                  <p style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', marginTop: '0.15rem' }}>
                    {edu.institution}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {edu.year && <span style={{ fontSize: '0.7rem', color: 'var(--fg-muted)' }}>{edu.year}</span>}
                <span className="badge" style={{ fontSize: '0.6rem' }}>{edu.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
          marginBottom: '1.5rem',
          color: 'var(--accent)',
          position: 'relative',
          display: 'inline-block'
        }}>
          Certificaciones
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '0.75rem'
        }}>
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
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
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, padding: '4px', overflow: 'hidden'
              }}>
                {instLogos[cert.institution] ? (
                  <img src={instLogos[cert.institution]} alt={cert.institution}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 600 }}>✓</span>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, lineHeight: 1.3 }}>{cert.title}</p>
                <p style={{ fontSize: '0.65rem', color: 'var(--fg-muted)', marginTop: '0.1rem' }}>{cert.institution}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
