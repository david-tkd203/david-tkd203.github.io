import { useState } from 'react';
import { Cpu, Code, PaletteFill, Database, Gear, BarChartFill, Link } from 'react-bootstrap-icons';

const TechLogo = ({ name, color, logoSrc }) => {
  const [hover, setHover] = useState(false);

  const logoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',
    padding: '2rem',
    backgroundColor: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
    borderRadius: '16px',
    border: `2px solid ${color}`,
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    transform: hover ? 'translateY(-12px) scale(1.08)' : 'translateY(0)',
    boxShadow: hover 
      ? `0 20px 50px ${color}50, inset 0 0 20px ${color}15, 0 0 30px ${color}30` 
      : `0 4px 6px rgba(184, 0, 255, 0.1), inset 0 0 10px rgba(184, 0, 255, 0.05)`,
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'backdrop-filter(blur(10px))'
  };

  const glowStyle = {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    right: '-50%',
    bottom: '-50%',
    background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
    opacity: hover ? 1 : 0,
    transition: 'opacity 0.4s',
    pointerEvents: 'none'
  };

  const iconContainerStyle = {
    textAlign: 'center',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    width: '100%'
  };

  const imgStyle = {
    width: '48px',
    height: '48px',
    objectFit: 'contain',
    filter: hover ? `drop-shadow(0 0 8px ${color})` : 'none',
    transition: 'filter 0.4s'
  };

  const nameStyle = {
    color: '#ffffff',
    fontSize: '0.95rem',
    fontWeight: '600',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1
  };

  return (
    <div 
      style={logoStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={glowStyle}></div>
      <div style={iconContainerStyle}>
        <img 
          src={logoSrc}
          alt={name}
          style={imgStyle}
        />
      </div>
      <div style={nameStyle}>{name}</div>
    </div>
  );
};

export default function Skills() {
  const sectionStyle = {
    backgroundColor: '#0a0a0a',
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0033 100%)'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const h2Style = {
    textAlign: 'center',
    color: '#b800ff',
    marginBottom: '1rem',
    fontSize: '3rem',
    fontWeight: '800',
    textShadow: '0 0 20px rgba(184, 0, 255, 0.5)',
    letterSpacing: '2px'
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: '#aaaaaa',
    marginBottom: '4rem',
    fontSize: '1.1rem'
  };

  const categoryStyle = {
    marginBottom: '4rem'
  };

  const categoryTitleStyle = {
    color: '#ff00ff',
    fontSize: '1.8rem',
    marginBottom: '2rem',
    paddingLeft: '1rem',
    borderLeft: '4px solid #ff00ff',
    fontWeight: '700'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem'
  };

  const skillCategories = [
    {
      title: 'Backend & RPA',
      color: '#b800ff',
      icon: Code,
      skills: [
        { name: 'Python', logo: '/images/logo_python.png' },
        { name: 'Django', logo: '/images/logo_django.png' },
        { name: 'Rocketbot', logo: '/images/logo_rocketbot.png' },
        { name: 'Power Automate', logo: '/images/logo_power_automate.png' },
        { name: 'Selenium', logo: '/images/logo_selenium.svg' }
      ]
    },
    {
      title: 'Frontend',
      color: '#00d4ff',
      icon: PaletteFill,
      skills: [
        { name: 'React 18', logo: '/images/logo_react.png' },
        { name: 'Vite', logo: '/images/logo_vite.png' },
        { name: 'JavaScript', logo: '/images/logo_js.png' },
        { name: 'HTML5', logo: '/images/logo_html.png' },
        { name: 'CSS3/SASS', logo: '/images/logo_css.png' }
      ]
    },
    {
      title: 'Bases de Datos',
      color: '#ff6b6b',
      icon: Database,
      skills: [
        { name: 'MySQL', logo: '/images/logo_mysql.png' },
        { name: 'PostgreSQL', logo: '/images/logo_postgres.png' },
        { name: 'SQL Server', logo: '/images/logo_oracle.png' },
        { name: 'Firebase', logo: '/images/logo_firebase.png' },
        { name: 'PhpMyAdmin', logo: '/images/logo_phpmyadmin.png' }
      ]
    },
    {
      title: 'DevOps & Herramientas',
      color: '#ffd700',
      icon: Gear,
      skills: [
        { name: 'Docker', logo: '/images/logo_docker.png' },
        { name: 'Git', logo: '/images/logo_git.png' },
        { name: 'Nginx', logo: '/images/logo_nginx.png' },
        { name: 'Jira', logo: '/images/logo_jira.png' },
        { name: 'CPanel', logo: '/images/logo_cpanel.png' },
        { name: 'Postman', logo: '/images/logo_postman.png' }
      ]
    },
    {
      title: 'Data & Análisis',
      color: '#a78bfa',
      icon: BarChartFill,
      skills: [
        { name: 'Pandas', logo: '/images/logo_pandas.png' },
        { name: 'Excel Avanzado', logo: '/images/logo_excel.png' },
        { name: 'Excel VBA', logo: '/images/logo_excel.png' }
      ]
    },
    {
      title: 'APIs & Integraciones',
      color: '#00BB9E',
      icon: Link,
      skills: [
        { name: 'APIs REST', logo: '/images/logo_postman.png' }
      ]
    }
  ];

  return (
    <section id="skills" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={h2Style}><Cpu size={32} style={{marginRight: '0.5rem', verticalAlign: 'middle'}} />Tecnologías & Herramientas</h2>
        <p style={subtitleStyle}>Stack completo de technologies para desarrollar soluciones modernas</p>

        {skillCategories.map((category, idx) => {
          const IconComponent = category.icon;
          return (
            <div key={idx} style={categoryStyle}>
              <h3 style={categoryTitleStyle}><IconComponent size={24} style={{marginRight: '0.6rem', verticalAlign: 'middle'}} />{category.title}</h3>
            <div style={gridStyle}>
              {category.skills.map((skill, sidx) => (
                <TechLogo 
                  key={sidx}
                  name={skill.name}
                  logoSrc={skill.logo}
                  color={category.color}
                />
              ))}
            </div>
          </div>
          );
        })}

        <div style={{
          marginTop: '6rem',
          padding: '3rem',
          backgroundColor: 'rgba(184, 0, 255, 0.1)',
          borderRadius: '12px',
          border: '2px solid #b800ff',
          textAlign: 'center'
        }}>
          <p style={{ color: '#b800ff', fontWeight: '700', fontSize: '1.1rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#b800ff" style={{display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle'}}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            Especialista en integraciones Backend & RPA con +4 años de experiencia
          </p>
        </div>
      </div>
    </section>
  );
}
