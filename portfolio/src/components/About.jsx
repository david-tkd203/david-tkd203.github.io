import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Acerca de mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Soy un desarrollador apasionado por crear experiencias digitales
              increíbles. Con experiencia en tecnologías modernas como React,
              Node.js y más, me encanta resolver problemas complejos.
            </p>
            <p>
              Mi objetivo es desarrollar aplicaciones eficientes, escalables y
              user-friendly que hagan una diferencia real.
            </p>
            <h3>Habilidades</h3>
            <div className="skills">
              <div className="skill">HTML/CSS</div>
              <div className="skill">JavaScript</div>
              <div className="skill">React</div>
              <div className="skill">Node.js</div>
              <div className="skill">Git</div>
              <div className="skill">Responsive Design</div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Proyectos Completados</p>
            </div>
            <div className="stat">
              <h3>2+</h3>
              <p>Años Experiencia</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Dedicación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
