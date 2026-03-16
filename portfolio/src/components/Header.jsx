export default function Header() {
  const headerStyle = {
    backgroundColor: '#0a0a0a',
    borderBottom: '2px solid #b800ff',
    boxShadow: '0 2px 20px rgba(184, 0, 255, 0.3)',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100
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
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: '700'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
    listStyle: 'none'
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'opacity 0.3s',
    cursor: 'pointer'
  };

  return (
    <header style={headerStyle}>
      <nav style={navbarStyle}>
        <div style={logoStyle}>Portfolio</div>
        <ul style={navLinksStyle}>
          <li><a href="#home" style={linkStyle}>Inicio</a></li>
          <li><a href="#about" style={linkStyle}>Acerca de</a></li>
          <li><a href="#projects" style={linkStyle}>Proyectos</a></li>
          <li><a href="#contact" style={linkStyle}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
