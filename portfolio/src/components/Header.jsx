import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { href: '#about', label: 'Acerca' },
  { href: '#experience', label: 'Exp.' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#education', label: 'Edu' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#home" className="header-logo">
          DN
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
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="header-nav" style={{ display: open ? 'flex' : undefined }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
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
            background: rgba(5,5,8,0.98);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid var(--border);
            padding: 1rem var(--section-px);
            gap: 0.75rem;
          }
        }
      `}</style>
    </header>
  )
}
