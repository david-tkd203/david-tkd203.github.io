import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="section reveal-el" id="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-sub">Hablemos — estoy abierto a proyectos y oportunidades</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1rem', maxWidth: '800px' }}>
          <a href="mailto:david.203.52@gmail.com" className="contact-link">
            <FaEnvelope size={20} />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
              <div style={{ fontSize: '0.85rem' }}>david.203.52@gmail.com</div>
            </div>
          </a>

          <a href="tel:+56995052746" className="contact-link">
            <FaPhone size={20} />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Teléfono</div>
              <div style={{ fontSize: '0.85rem' }}>+569 9505 2746</div>
            </div>
          </a>

          <div className="contact-link" style={{ cursor: 'default' }}>
            <FaMapMarkerAlt size={20} />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ubicación</div>
              <div style={{ fontSize: '0.85rem' }}>Santiago de Chile</div>
            </div>
          </div>

          <a href="https://github.com/david-tkd203" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub size={20} />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>GitHub</div>
              <div style={{ fontSize: '0.85rem' }}>@david-tkd203</div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/david-nanculeo" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin size={20} />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>LinkedIn</div>
              <div style={{ fontSize: '0.85rem' }}>David Nanculeo</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
