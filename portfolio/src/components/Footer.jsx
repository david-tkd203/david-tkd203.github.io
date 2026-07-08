import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="https://github.com/david-tkd203" target="_blank" rel="noopener noreferrer">
            <FaGithub size={14} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/david-nanculeo" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={14} /> LinkedIn
          </a>
          <a href="mailto:david.203.52@gmail.com">
            <FaEnvelope size={14} /> Email
          </a>
        </div>
        <p>© {year} David Nanculeo</p>
        <p style={{ marginTop: '0.3rem', fontSize: '0.7rem' }}>
          Ingeniero en Informática · Full Stack · RPA Specialist
        </p>
        <a href="/carta-kati.html" target="_blank" className="secret-letter">
          ♡
        </a>
      </div>

      <style>{`
        .secret-letter {
          display: inline-block;
          margin-top: 0.6rem;
          font-size: 0.75rem;
          color: var(--fg-muted, #8888a0);
          opacity: 0.45;
          text-decoration: none;
          transition: opacity 0.4s ease, color 0.3s ease, transform 0.3s ease;
          animation: heartBeat 3s ease-in-out infinite;
          cursor: pointer;
          user-select: none;
        }
        .secret-letter:hover {
          opacity: 1;
          color: var(--accent, #84cc16);
          transform: scale(1.5);
          animation: none;
        }
        @keyframes heartBeat {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.15); }
        }
      `}</style>
    </footer>
  )
}
