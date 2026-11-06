import { Code, Palette, Database, Gear, BarChart, Link45deg, ShieldCheck } from 'react-bootstrap-icons'

const logoMap = {
  'Python': '/images/logo_python.png',
  'Django': '/images/logo_django.png',
  'FastAPI': '/images/logo_apirest.png',
  'React 19': '/images/logo_react.png',
  'Vite': '/images/logo_vite.png',
  'JavaScript': '/images/logo_js.png',
  'HTML5/CSS3': '/images/logo_html.png',
  'Rocketbot': '/images/logo_rocketbot.png',
  'Power Automate': '/images/logo_power_automate.png',
  'Selenium': '/images/logo_selenium.svg',
  'MySQL': '/images/logo_mysql.png',
  'PostgreSQL': '/images/logo_postgres.png',
  'SQL Server': '/images/logo_sqlserver.png',
  'Firebase': '/images/logo_firebase.png',
  'PhpMyAdmin': '/images/logo_phpmyadmin.png',
  'Docker': '/images/logo_docker.png',
  'Git': '/images/logo_git.png',
  'Nginx': '/images/logo_nginx.png',
  'Jira': '/images/logo_jira.png',
  'CPanel': '/images/logo_cpanel.png',
  'Postman': '/images/logo_postman.png',
  'Pandas': '/images/logo_pandas.png',
  'Excel Avanzado': '/images/logo_excel.png',
  'APIs REST': '/images/logo_postman.png',
  'Jenkins': '/images/logo_jenkins.png',
  'Flask': '/images/logo_flask.png',
  'TypeScript': '/images/logo_typescript.svg',
  'Jinja2': '/images/logo_jinja2.png',
  'Google Cybersecurity': '/education/logo_google.svg',
  'ISO 27001': '/images/introduction-to-cybersecurity.png',
  'Linux & SQL Security': '/education/logo_google.svg',
  'SIEM & Detection': '/education/logo_google.svg'
}

const categories = [
  {
    title: 'Arquitectura, Backend & RPA',
    icon: Gear,
    skills: ['Python', 'Django', 'FastAPI', 'Rocketbot', 'Power Automate', 'Selenium', 'Flask']
  },
  {
    title: 'Ciberseguridad & Gobernanza',
    icon: ShieldCheck,
    skills: ['Google Cybersecurity', 'ISO 27001', 'SIEM & Detection', 'Linux & SQL Security']
  },
  {
    title: 'Bases de Datos & Persistencia',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Firebase', 'PhpMyAdmin']
  },
  {
    title: 'DevOps, CI/CD & Infraestructura',
    icon: Gear,
    skills: ['Docker', 'Git', 'Nginx', 'Jenkins', 'Postman', 'Jira', 'CPanel', 'Jinja2']
  },
  {
    title: 'Ingeniería de Datos & Analítica',
    icon: BarChart,
    skills: ['Pandas', 'Excel Avanzado', 'APIs REST']
  },
  {
    title: 'Frontend & Interfaces',
    icon: Palette,
    skills: ['React 19', 'TypeScript', 'JavaScript', 'Vite', 'HTML5/CSS3']
  }
]

export default function Skills() {
  return (
    <section className="section reveal-el" id="skills">
      <div className="container">
        <h2 className="section-title">Competencias Técnicas</h2>
        <p className="section-sub">
          Tecnologías y estándares aplicados en desarrollo backend, ciberseguridad y automatización empresarial
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <div key={i} className="skill-category-block">
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  color: 'var(--accent)',
                  marginBottom: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}>
                  <Icon size={16} />
                  {cat.title}
                </h3>
                <div className="grid-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 115px), 1fr))', gap: '0.75rem' }}>
                  {cat.skills.map((s, j) => (
                    <div key={j} className="skill-logo" style={{ padding: '0.85rem 0.5rem' }}>
                      {logoMap[s] && <img src={logoMap[s]} alt={s} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />}
                      <span style={{ fontSize: '0.68rem', fontWeight: 500, marginTop: '0.2rem' }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="card" style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '1.75rem',
          background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-elevated) 100%)',
          border: '1px solid rgba(132, 204, 22, 0.2)'
        }}>
          <p style={{ fontSize: '0.88rem', color: 'var(--accent-text)', fontWeight: 600, letterSpacing: '0.01em' }}>
            Práctica técnica basada en Arquitectura Limpia, Seguridad por Diseño y Automatización Robótica de Procesos (RPA)
          </p>
        </div>
      </div>
    </section>
  )
}
