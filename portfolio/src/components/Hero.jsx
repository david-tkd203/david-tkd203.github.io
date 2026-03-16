import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  const heroStyle = {
    background: 'linear-gradient(135deg, #1a0033 0%, #0a0a0a 50%, #b800ff 100%)',
    color: 'white',
    padding: '8rem 2rem',
    textAlign: 'center',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const contentStyle = {
    maxWidth: '600px',
    position: 'relative',
    zIndex: 10
  };

  const h1Style = {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontWeight: '800',
    letterSpacing: '-1px'
  };

  const pStyle = {
    opacity: 0.9,
    marginBottom: '2rem',
    fontSize: '1.3rem',
    lineHeight: '1.6'
  };

  const buttonsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem'
  };

  const btnPrimaryStyle = {
    cursor: 'pointer',
    border: 'none',
    borderRadius: '8px',
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    fontWeight: '700',
    transition: 'all 0.3s',
    backgroundColor: primaryHover ? '#ff00ff' : '#b800ff',
    color: '#ffffff',
    boxShadow: primaryHover ? '0 10px 20px rgba(184, 0, 255, 0.6)' : '0 0 30px rgba(184, 0, 255, 0.4)',
    transform: primaryHover ? 'translateY(-2px)' : 'translateY(0)'
  };

  const btnSecondaryStyle = {
    cursor: 'pointer',
    border: '2px solid #ffffff',
    borderRadius: '8px',
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    fontWeight: '700',
    transition: 'all 0.3s',
    backgroundColor: secondaryHover ? '#b800ff' : 'transparent',
    color: secondaryHover ? '#000000' : '#ffffff',
    borderColor: secondaryHover ? '#b800ff' : '#ffffff',
    transform: secondaryHover ? 'translateY(-2px)' : 'translateY(0)'
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '3rem'
  };

  const iconLinkStyle = {
    color: '#b800ff',
    fontSize: '2rem',
    transition: 'all 0.3s',
    cursor: 'pointer',
    textDecoration: 'none'
  };

  return (
    <section id="home" style={heroStyle}>
      <div style={contentStyle}>
        <h1 style={h1Style}>Hola, soy David Nanculeo</h1>
        <p style={pStyle}>Ingeniero en Informática | Desarrollador Full Stack | Especialista en Tecnologías Web</p>
        <div style={buttonsStyle}>
          <button
            style={btnPrimaryStyle}
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver mis proyectos
          </button>
          <a
            href="/document/cv/David_Nanculeo_cv_4_completo.pdf"
            download
            style={{...btnSecondaryStyle, display: 'inline-block', textDecoration: 'none', textAlign: 'center'}}
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
          >
            Descargar CV
          </a>
        </div>
        <div style={socialLinksStyle}>
          <a href="https://github.com/david-tkd203" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.2) translateY(-3px)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/david-nanculeo" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.2) translateY(-3px)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <FaLinkedin />
          </a>
          <a href="mailto:david.203.52@gmail.com" style={iconLinkStyle}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.2) translateY(-3px)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
