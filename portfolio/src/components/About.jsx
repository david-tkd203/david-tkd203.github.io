import { FaCode, FaRocket, FaLock } from 'react-icons/fa';

export default function About() {
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
  ];

  const sectionStyle = {
    backgroundColor: '#0f0f0f',
    padding: '4rem 2rem',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a0033 100%)'
  };

  const h2Style = {
    textAlign: 'center',
    color: '#b800ff',
    marginBottom: '3rem',
    fontSize: '2.5rem',
    fontWeight: '800',
    textShadow: '0 0 20px rgba(184, 0, 255, 0.3)'
  };

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'start',
    gap: '4rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const textStyle = {
    lineHeight: '1.8'
  };

  const pStyle = {
    color: '#cccccc',
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    lineHeight: '1.8'
  };

  const h3Style = {
    color: '#b800ff',
    marginTop: '1.5rem',
    marginBottom: '1rem',
    fontSize: '1.3rem',
    fontWeight: '700'
  };

  const skillsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.2rem'
  };

  const skillStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(184, 0, 255, 0.15)',
    borderRadius: '16px',
    padding: '1.2rem',
    fontWeight: '600',
    border: '1.5px solid rgba(184, 0, 255, 0.4)',
    fontSize: '0.8rem',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    cursor: 'default',
    width: '110px',
    height: '110px',
    background: 'linear-gradient(135deg, rgba(184, 0, 255, 0.15) 0%, rgba(26, 26, 46, 0.8) 100%)',
    boxShadow: '0 8px 20px rgba(184, 0, 255, 0.1), inset 0 0 15px rgba(184, 0, 255, 0.05)',
    position: 'relative',
    overflow: 'hidden'
  };

  const skillImgStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
    marginBottom: '0.6rem',
    position: 'relative',
    zIndex: 1
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem'
  };

  const statCardStyle = {
    backgroundColor: '#1a1a2e',
    borderRadius: '12px',
    padding: '2rem',
    border: '2px solid #b800ff',
    transition: 'all 0.3s',
    cursor: 'default',
    position: 'relative',
    overflow: 'hidden'
  };

  const statCardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(184, 0, 255, 0.3)'
  };

  const statH3Style = {
    color: '#b800ff',
    margin: 0,
    fontSize: '2rem',
    fontWeight: '800'
  };

  const statPStyle = {
    color: '#aaaaaa',
    margin: '0.5rem 0 0 0',
    fontSize: '0.95rem'
  };

  const statIconStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    opacity: 0.3
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={h2Style}>Acerca de mí</h2>
        <div style={contentStyle}>
          <div style={textStyle}>
            <p style={pStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#b800ff" style={{display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle'}}><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.75l7 3.45v6.5a7 7 0 01-7 7 7 7 0 01-7-7v-6.5l7-3.45z"/><path d="M10 15h4v2h-4zm0-4h4v2h-4z"/></svg>
              Soy Ingeniero Civil Informático especializado en desarrollo Backend con Python, Django y APIs REST. Con experiencia en diseño, desarrollo e implementación de soluciones críticas utilizando Docker, Git y arquitecturas escalables.
            </p>
            <p style={pStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#b800ff" style={{display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle'}}><path d="M12 2c-1.1 0-2 .9-2 2v8H8l4 6 4-6h-2V4c0-1.1-.9-2-2-2z"/><path d="M4 20h16v2H4z"/></svg>
              Especialista en automatización de procesos (RPA) con Rocketbot y Power Automate, ingeniería de datos, web scraping y optimización de flujos operativos. Mi enfoque integra soluciones técnicas robustas que generan eficiencia y valor real en cada proyecto.
            </p>
            <h3 style={h3Style}>Habilidades Principales</h3>
            <div style={skillsStyle}>
              {primarySkills.map((skill, idx) => (
                <div 
                  key={idx} 
                  style={skillStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(184, 0, 255, 0.25), inset 0 0 20px rgba(184, 0, 255, 0.1)';
                    e.currentTarget.style.borderColor = '#b800ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(184, 0, 255, 0.1), inset 0 0 15px rgba(184, 0, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(184, 0, 255, 0.4)';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-30%',
                    right: '-30%',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(184, 0, 255, 0.05)',
                    pointerEvents: 'none'
                  }}></div>
                  <img src={skill.logo} alt={skill.name} style={skillImgStyle} />
                  <span style={{ color: '#b800ff', position: 'relative', zIndex: 1 }}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={statsGridStyle}>
            <div 
              style={statCardStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, statCardHoverStyle)}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={statIconStyle}><FaCode /></div>
              <div style={statH3Style}>2+</div>
              <div style={statPStyle}>Años de Experiencia Laboral</div>
            </div>
            <div 
              style={statCardStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, statCardHoverStyle)}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={statIconStyle}><FaRocket /></div>
              <div style={statH3Style}>15+</div>
              <div style={statPStyle}>Proyectos RPA & Backend</div>
            </div>
            <div 
              style={statCardStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, statCardHoverStyle)}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={statIconStyle}><FaLock /></div>
              <div style={statH3Style}>7+</div>
              <div style={statPStyle}>Certificaciones Profesionales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
