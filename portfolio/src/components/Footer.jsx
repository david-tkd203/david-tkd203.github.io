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
      </div>
    </footer>
  )
}
