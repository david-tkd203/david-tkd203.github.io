const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Una aplicación web moderna con React y Vite',
    tags: ['React', 'Vite', 'CSS'],
    link: '#'
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'API REST con Node.js y Express',
    tags: ['Node.js', 'Express', 'MongoDB'],
    link: '#'
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Dashboard interactivo con datos en tiempo real',
    tags: ['React', 'D3.js', 'WebSocket'],
    link: '#'
  }
];

export default function Projects() {
  const sectionStyle = {
    backgroundColor: '#0f0f0f',
    padding: '4rem 2rem'
  };

  const h2Style = {
    textAlign: 'center',
    color: '#b800ff',
    marginBottom: '3rem',
    fontSize: '2.5rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    padding: '2rem',
    transition: 'all 0.3s',
    border: '2px solid #b800ff',
    boxShadow: '0 4px 6px rgba(184, 0, 255, 0.2)'
  };

  const cardH3Style = {
    color: '#b800ff',
    marginBottom: '0.5rem'
  };

  const cardPStyle = {
    color: '#cccccc',
    marginBottom: '1rem',
    lineHeight: '1.6'
  };

  const tagsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem'
  };

  const tagStyle = {
    color: '#b800ff',
    backgroundColor: 'rgba(184, 0, 255, 0.1)',
    borderRadius: '20px',
    padding: '0.3rem 0.8rem',
    fontSize: '0.85rem',
    fontWeight: 500
  };

  const linkStyle = {
    color: '#b800ff',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.3s',
    cursor: 'pointer'
  };

  return (
    <section id="projects" style={sectionStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={h2Style}>Mis Proyectos</h2>
        <div style={gridStyle}>
          {projects.map(project => (
            <div key={project.id} style={cardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={cardH3Style}>{project.title}</h3>
              <p style={cardPStyle}>{project.description}</p>
              <div style={tagsStyle}>
                {project.tags.map(tag => (
                  <span key={tag} style={tagStyle}>{tag}</span>
                ))}
              </div>
              <a href={project.link} style={linkStyle}
                onMouseEnter={(e) => e.target.style.color = '#ff00ff'}
                onMouseLeave={(e) => e.target.style.color = '#b800ff'}
              >Ver más →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
