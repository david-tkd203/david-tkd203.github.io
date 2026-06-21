import { FaCode, FaRocket, FaAward } from 'react-icons/fa'
import { FaShieldHalved } from 'react-icons/fa6'

const primarySkills = [
  { name: 'Python', logo: '/images/logo_python.png' },
  { name: 'Django', logo: '/images/logo_django.png' },
  { name: 'React', logo: '/images/logo_react.png' },
  { name: 'Vite', logo: '/images/logo_vite.png' },
  { name: 'Rocketbot', logo: '/images/logo_rocketbot.png' },
  { name: 'Pandas', logo: '/images/logo_pandas.png' },
  { name: 'Power Automate', logo: '/images/logo_power_automate.png' },
  { name: 'Docker', logo: '/images/logo_docker.png' },
  { name: 'MySQL', logo: '/images/logo_mysql.png' },
  { name: 'APIs REST', logo: '/images/logo_postman.png' },
  { name: 'Git', logo: '/images/logo_git.png' }
]

export default function About() {
  return (
    <section className="section reveal-el" id="about">
      <div className="container">
        <h2 className="section-title">Acerca de mí</h2>

        <div className="grid-2" style={{ gap: '3rem' }}>
          <div>
            <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Soy Ingeniero Civil Informático especializado en desarrollo Backend con Python, Django y APIs REST.
              Experiencia en diseño, desarrollo e implementación de soluciones críticas utilizando Docker, Git
              y arquitecturas escalables.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Especialista en automatización de procesos (RPA) con Rocketbot, sólida experiencia en ingeniería
              de datos, web scraping y optimización de flujos operativos. También con conocimientos en
              Power Automate.
            </p>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--accent)' }}>
              Habilidades Clave
            </h3>
            <div className="grid-auto">
              {primarySkills.map((sk, i) => (
                <div key={i} className="skill-logo">
                  <img src={sk.logo} alt={sk.name} />
                  <span>{sk.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FaCode size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', lineHeight: 1, color: 'var(--accent)' }}>2+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)' }}>Años de Experiencia</div>
              </div>
            </div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FaRocket size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', lineHeight: 1, color: 'var(--accent)' }}>15+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)' }}>Proyectos RPA & Backend</div>
              </div>
            </div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FaAward size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', lineHeight: 1, color: 'var(--accent)' }}>7+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)' }}>Certificaciones</div>
              </div>
            </div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FaShieldHalved size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', lineHeight: 1, color: 'var(--accent)' }}>ISO 27001</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)' }}>Ciberseguridad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
