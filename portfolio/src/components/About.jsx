export default function About() {
  const sectionStyle = {
    backgroundColor: '#0f0f0f',
    padding: '4rem 2rem',
    color: '#ffffff'
  };

  const h2Style = {
    textAlign: 'center',
    color: '#b800ff',
    marginBottom: '3rem',
    fontSize: '2.5rem'
  };

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: '4rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const textStyle = {
    lineHeight: '1.8'
  };

  const pStyle = {
    color: '#cccccc',
    marginBottom: '1.5rem',
    fontSize: '1.1rem'
  };

  const h3Style = {
    color: '#b800ff',
    marginTop: '1.5rem',
    marginBottom: '1rem'
  };

  const skillsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem'
  };

  const skillStyle = {
    backgroundColor: 'linear-gradient(135deg, #b800ff 0%, #ff00ff 100%)',
    color: '#ffffff',
    borderRadius: '5px',
    padding: '0.8rem 1.5rem',
    fontWeight: 500,
    background: 'linear-gradient(135deg, #b800ff 0%, #ff00ff 100%)'
  };

  const statsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  };

  const statStyle = {
    textAlign: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    padding: '2rem',
    border: '2px solid #b800ff'
  };

  const statH3Style = {
    color: '#b800ff',
    margin: 0,
    fontSize: '2.5rem'
  };

  const statPStyle = {
    color: '#aaaaaa',
    margin: '0.5rem 0 0 0'
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={h2Style}>Acerca de mí</h2>
        <div style={contentStyle}>
          <div style={textStyle}>
            <p style={pStyle}>
              Soy un desarrollador apasionado por crear experiencias digitales
              increíbles. Con experiencia en tecnologías modernas como React,
              Node.js y más, me encanta resolver problemas complejos.
            </p>
            <p style={pStyle}>
              Mi objetivo es desarrollar aplicaciones eficientes, escalables y
              user-friendly que hagan una diferencia real.
            </p>
            <h3 style={h3Style}>Habilidades</h3>
            <div style={skillsStyle}>
              <div style={skillStyle}>HTML/CSS</div>
              <div style={skillStyle}>JavaScript</div>
              <div style={skillStyle}>React</div>
              <div style={skillStyle}>Node.js</div>
              <div style={skillStyle}>Git</div>
              <div style={skillStyle}>Responsive Design</div>
            </div>
          </div>
          <div style={statsStyle}>
            <div style={statStyle}>
              <h3 style={statH3Style}>5+</h3>
              <p style={statPStyle}>Proyectos Completados</p>
            </div>
            <div style={statStyle}>
              <h3 style={statH3Style}>2+</h3>
              <p style={statPStyle}>Años Experiencia</p>
            </div>
            <div style={statStyle}>
              <h3 style={statH3Style}>100%</h3>
              <p style={statPStyle}>Dedicación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
