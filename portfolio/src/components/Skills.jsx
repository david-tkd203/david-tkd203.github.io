import { Code, Palette, Database, Gear, BarChart, Link45deg } from 'react-bootstrap-icons'

const logoMap = {
  'Python': '/images/logo_python.png',
  'Django': '/images/logo_django.png',
  'React 18': '/images/logo_react.png',
  'React': '/images/logo_react.png',
  'Vite': '/images/logo_vite.png',
  'JavaScript': '/images/logo_js.png',
  'HTML5': '/images/logo_html.png',
  'CSS3/SASS': '/images/logo_css.png',
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
  'Excel VBA': '/images/logo_excel.png',
  'APIs REST': '/images/logo_postman.png',
  'Jenkins': '/images/logo_jenkins.png',
  'Flask': '/images/logo_flask.png',
  'TypeScript': '/images/logo_typescript.png',
  'Jinja2': '/images/logo_jinja2.png'
}

const categories = [
  {
    title: 'Backend & RPA',
    icon: Gear,
    skills: ['Python', 'Django', 'Rocketbot', 'Power Automate', 'Selenium', 'Flask']
  },
  {
    title: 'Frontend',
    icon: Palette,
    skills: ['React 18', 'React', 'Vite', 'JavaScript', 'HTML5', 'CSS3/SASS', 'TypeScript']
  },
  {
    title: 'Bases de Datos',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Firebase', 'PhpMyAdmin']
  },
  {
    title: 'DevOps & Herramientas',
    icon: Gear,
    skills: ['Docker', 'Git', 'Nginx', 'Jira', 'CPanel', 'Postman', 'Jenkins', 'Jinja2']
  },
  {
    title: 'Data & Análisis',
    icon: BarChart,
    skills: ['Pandas', 'Excel Avanzado', 'Excel VBA']
  },
  {
    title: 'APIs & Cloud',
    icon: Link45deg,
    skills: ['APIs REST', 'Postman']
  }
]

export default function Skills() {
  return (
    <section className="section reveal-el" id="skills">
      <div className="container">
        <h2 className="section-title">Tecnologías</h2>
        <p className="section-sub">Stack completo para construir soluciones modernas</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <div key={i}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  color: 'var(--accent)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}>
                  <Icon size={16} />
                  {cat.title}
                </h3>
                <div className="grid-auto">
                  {cat.skills.map((s, j) => (
                    <div key={j} className="skill-logo">
                      {logoMap[s] && <img src={logoMap[s]} alt={s} />}
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="card" style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--accent-text)', fontWeight: 600 }}>
            Especialista en integraciones Backend & RPA con +4 años de experiencia
          </p>
        </div>
      </div>
    </section>
  )
}
