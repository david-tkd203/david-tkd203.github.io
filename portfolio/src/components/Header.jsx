import { useState } from 'react'
import { FaBars, FaTimes, FaFilePdf } from 'react-icons/fa'

const links = [
  { href: '#about', label: 'Perfil' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#education', label: 'Educación' },
  { href: '#skills', label: 'Competencias' },
  { href: '#contact', label: 'Contacto' }
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner container">
        <a href="#home" className="header-brand">
          <span className="brand-name">DAVID ÑANCULEO</span>
          <span className="brand-role">ING. CIVIL INFORMÁTICO</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--accent)',
            fontSize: '1.25rem',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
          className="menu-btn"
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="header-nav" style={{ display: open ? 'flex' : undefined }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link">
              {l.label}
            </a>
          ))}
          <a
            href="/document/cv/David_Nanculeo_cv_es_harvard.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cv-btn"
            onClick={() => setOpen(false)}
          >
            <FaFilePdf size={12} />
            <span>CV</span>
          </a>
        </nav>
      </div>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(7, 9, 14, 0.9);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }
        .header-brand {
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }
        .brand-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: var(--fg);
          line-height: 1.1;
        }
        .brand-role {
          font-family: var(--font-mono, monospace);
          font-size: 0.6rem;
          color: var(--accent);
          letter-spacing: 0.08em;
          font-weight: 600;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .nav-link {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--fg-muted);
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .nav-link:hover {
          color: var(--accent);
        }
        .nav-cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          background: rgba(132, 204, 22, 0.1);
          border: 1px solid rgba(132, 204, 22, 0.25);
          color: var(--accent-text);
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .nav-cv-btn:hover {
          background: var(--accent);
          color: #050508;
        }
        .menu-btn { display: none !important; }
        @media (max-width: 767px) {
          .menu-btn { display: flex !important; }
          .header-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: rgba(7, 9, 14, 0.98);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
            padding: 1.25rem var(--section-px);
            gap: 1rem;
            align-items: stretch;
          }
          .nav-cv-btn {
            justify-content: center;
            padding: 0.6rem;
          }
        }
      `}</style>
    </header>
  )
}
