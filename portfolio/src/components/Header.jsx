import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerStyle = {
    backgroundColor: '#0a0a0a',
    borderBottom: '2px solid #b800ff',
    boxShadow: '0 2px 20px rgba(184, 0, 255, 0.3)',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backdropFilter: 'blur(20px)'
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const logoStyle = {
    color: '#b800ff',
    fontSize: '1.5rem',
    fontWeight: '800',
    letterSpacing: '1px',
    transition: 'all 0.3s'
  };

  const navLinksStyle = {
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: isMenuOpen ? 'column' : 'row',
    gap: isMenuOpen ? '1.5rem' : '2rem',
    margin: 0,
    padding: isMenuOpen ? '2rem 0' : 0,
    listStyle: 'none',
    position: isMenuOpen ? 'absolute' : 'static',
    top: isMenuOpen ? '100%' : 'auto',
    left: isMenuOpen ? '0' : 'auto',
    right: isMenuOpen ? '0' : 'auto',
    backgroundColor: isMenuOpen ? '#0a0a0a' : 'transparent',
    borderTop: isMenuOpen ? '1px solid #b800ff' : 'none',
    alignItems: isMenuOpen ? 'center' : 'flex-start'
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'all 0.3s',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '0.95rem'
  };

  const menuButtonStyle = {
    display: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#b800ff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    '@media (maxWidth: 768px)': {
      display: 'block'
    }
  };

  return (
    <header style={headerStyle}>
      <nav style={navbarStyle}>
        <div 
          style={logoStyle}
          onMouseEnter={(e) => e.target.style.color = '#ff00ff'}
          onMouseLeave={(e) => e.target.style.color = '#b800ff'}
        >
          ▲ David
        </div>
        <button 
          style={{ ...menuButtonStyle, display: window.innerWidth <= 768 ? 'block' : 'none' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul style={{ ...navLinksStyle, display: window.innerWidth <= 768 ? (isMenuOpen ? 'flex' : 'none') : 'flex' }}>
          <li>
            <a 
              href="#home" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#b800ff'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            >
              Inicio
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#b800ff'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            >
              Acerca de
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#b800ff'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            >
              Experiencia
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#b800ff'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#b800ff'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            >
              Educación
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#b800ff'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
