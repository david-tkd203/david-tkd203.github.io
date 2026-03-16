export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    color: '#ffffff',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #1a0033 0%, #0a0a0a 50%, #b800ff 100%)',
    padding: '2rem'
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const linksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '1rem'
  };

  const linkStyle = {
    color: '#ffffff',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.3s',
    cursor: 'pointer'
  };

  const pStyle = {
    opacity: 0.9,
    margin: 0
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div style={linksStyle}>
          <a href="#" title="GitHub" style={linkStyle}
            onMouseEnter={(e) => e.target.style.textShadow = '0 0 10px #b800ff'}
            onMouseLeave={(e) => e.target.style.textShadow = 'none'}
          >GitHub</a>
          <a href="#" title="LinkedIn" style={linkStyle}
            onMouseEnter={(e) => e.target.style.textShadow = '0 0 10px #b800ff'}
            onMouseLeave={(e) => e.target.style.textShadow = 'none'}
          >LinkedIn</a>
          <a href="#" title="Twitter" style={linkStyle}
            onMouseEnter={(e) => e.target.style.textShadow = '0 0 10px #b800ff'}
            onMouseLeave={(e) => e.target.style.textShadow = 'none'}
          >Twitter</a>
        </div>
        <p style={pStyle}>&copy; {currentYear} Mi Portfolio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
