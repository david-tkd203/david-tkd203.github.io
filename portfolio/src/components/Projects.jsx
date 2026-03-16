import { useState } from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { Folder } from 'react-bootstrap-icons';

const projects = [
  {
    id: 1,
    title: 'Hmed',
    description: 'Plataforma médica más reciente. Herramienta integral de gestión de datos sanitarios con análisis avanzado.',
    tags: ['React', 'TypeScript', 'Medical', 'Full Stack'],
    link: 'https://github.com/david-tkd203/hmed',
    featured: true
  },
  {
    id: 2,
    title: 'Sistema de Auditoría ISO 27001',
    description: 'Herramienta de gestión de ciberseguridad con macros VBA y Python. CRUD dinámico, cálculo automatizado de riesgos y reportabilidad PDF/CSV.',
    tags: ['VBA', 'Python', 'ISO 27001', 'Excel'],
    link: 'https://github.com/david-tkd203/ciberseguridad_auditoria',
    featured: true
  },
  {
    id: 3,
    title: 'Sistema Evaluación Taekwondo',
    description: 'Evaluación objetiva de técnicas Poomsae con visión por computador (OpenCV, MediaPipe) e interfaz PyQt5 con visualización 3D.',
    tags: ['Python', 'OpenCV', 'Machine Learning', 'PyQt5'],
    link: 'https://github.com/david-tkd203/poomsae_accuracy',
    featured: true
  },
  {
    id: 4,
    title: 'Análisis Narcotráfico en X',
    description: 'Motor de búsqueda y análisis de datos galardonado. Procesamiento de 10,000+ registros con análisis de tendencias delictivas.',
    tags: ['Python', 'Data Analysis', 'APIs', 'SQL'],
    link: 'https://github.com/david-tkd203/An-lisis-de-Drogas',
    featured: false
  },
  {
    id: 5,
    title: 'Gestión de Personas Full Stack',
    description: 'App Full Stack con React 18 + TypeScript (Vite) en frontend y Python Flask en backend. Integración MySQL completa.',
    tags: ['React', 'TypeScript', 'Flask', 'MySQL'],
    link: 'https://github.com/david-tkd203/ENTREGA-WEB-MOBILE',
    featured: true
  },
  {
    id: 6,
    title: 'Instagram Unfollower Tool',
    description: 'Automatización con Python y Selenium para gestión de solicitudes de seguimiento con procesamiento JSON.',
    tags: ['Python', 'Selenium', 'Automation'],
    link: 'https://github.com/david-tkd203/Instagram-Unfollow-Tool',
    featured: false
  },
  {
    id: 7,
    title: 'Poke API Web',
    description: 'Aplicación web desarrollada con Django siguiendo buenas prácticas de arquitectura y consumo de APIs externas.',
    tags: ['Django', 'Python', 'REST API'],
    link: 'https://github.com/?q=poke',
    featured: false
  }
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  const sectionStyle = {
    backgroundColor: '#0a0a0a',
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0033 100%)'
  };

  const h2Style = {
    textAlign: 'center',
    color: '#b800ff',
    marginBottom: '1rem',
    fontSize: '3rem',
    fontWeight: '800',
    textShadow: '0 0 20px rgba(184, 0, 255, 0.5)',
    letterSpacing: '2px'
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: '#aaaaaa',
    marginBottom: '4rem',
    fontSize: '1.1rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = (isHovered, isFeatured) => ({
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    padding: '2rem',
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    border: isFeatured ? `2px solid #b800ff` : `2px solid #333333`,
    boxShadow: isHovered 
      ? `0 20px 40px rgba(184, 0, 255, 0.4), inset 0 0 20px rgba(184, 0, 255, 0.1)` 
      : `0 4px 6px rgba(184, 0, 255, 0.1)`,
    transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0)',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  });

  const badgeStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#b800ff',
    color: '#ffffff',
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const cardH3Style = {
    color: '#b800ff',
    marginBottom: '0.8rem',
    fontSize: '1.3rem',
    fontWeight: '700',
    marginTop: '0.5rem'
  };

  const cardPStyle = {
    color: '#cccccc',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
    fontSize: '0.95rem'
  };

  const tagsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    marginBottom: '1.5rem'
  };

  const tagStyle = {
    color: '#b800ff',
    backgroundColor: 'rgba(184, 0, 255, 0.1)',
    borderRadius: '20px',
    padding: '0.4rem 0.9rem',
    fontSize: '0.8rem',
    fontWeight: '600',
    border: '1px solid rgba(184, 0, 255, 0.3)',
    transition: 'all 0.3s'
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  };

  const linkStyle = {
    color: '#b800ff',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.3s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  return (
    <section id="projects" style={sectionStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={h2Style}><Folder size={32} style={{marginRight: '0.5rem', verticalAlign: 'middle'}} />Mis Proyectos</h2>
        <p style={subtitleStyle}>Trabajos destacados que demuestran mis habilidades técnicas</p>
        <div style={gridStyle}>
          {projects.map(project => (
            <div 
              key={project.id} 
              style={cardStyle(hoveredId === project.id, project.featured)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {project.featured && <div style={badgeStyle}>Destacado</div>}
              <h3 style={cardH3Style}>{project.title}</h3>
              <p style={cardPStyle}>{project.description}</p>
              <div style={tagsStyle}>
                {project.tags.map(tag => (
                  <span key={tag} style={tagStyle}>{tag}</span>
                ))}
              </div>
              <div style={linkContainerStyle}>
                <a href={project.link} style={linkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ff00ff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#b800ff';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  Ver más <FaArrowRight />
                </a>
                <a href={project.link} style={{ ...linkStyle, color: 'transparent' }} title="GitHub">
                  <FaGithub style={{ color: '#b800ff' }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
