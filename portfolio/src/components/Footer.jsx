import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    color: '#ffffff',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #1a0033 0%, #0a0a0a 50%, #0a0a0a 100%)',
    padding: '3rem 2rem 2rem 2rem',
    borderTop: '2px solid #b800ff',
    boxShadow: '0 -2px 20px rgba(184, 0, 255, 0.2)'
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const linksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  };

  const linkStyle = {
    color: '#b800ff',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.95rem'
  };

  const pStyle = {
    opacity: 0.9,
    margin: 0,
    fontSize: '0.95rem',
    lineHeight: '1.6'
  };

  const heartStyle = {
    color: '#ff00ff',
    animation: 'pulse 1.5s infinite'
  };

  return (
    <footer style={footerStyle}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>
      <div style={contentStyle}>
        <div style={linksStyle}>
          <a href="https://github.com/david-tkd203" target="_blank" rel="noopener noreferrer" title="GitHub" style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ff00ff';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#b800ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/david-nanculeo" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ff00ff';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#b800ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:david.203.52@gmail.com" title="Email" style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ff00ff';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#b800ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FaEnvelope /> Email
          </a>
        </div>
        <p style={pStyle}>
          &copy; {currentYear} David Nanculeo. Hecho con <span style={heartStyle}><FaHeart style={{ display: 'inline' }} /></span> y mucha dedicación.
        </p>
        <p style={{ ...pStyle, marginTop: '0.5rem', fontSize: '0.85rem' }}>
          Ingeniero en Informática | Full Stack Developer | RPA Specialist
        </p>
      </div>
    </footer>
  );
}
