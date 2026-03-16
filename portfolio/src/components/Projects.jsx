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
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Mis Proyectos</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">Ver más →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
