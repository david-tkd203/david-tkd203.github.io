export default function Hero() {
  const heroStyle = {
    background: 'linear-gradient(135deg, #1a0033 0%, #0a0a0a 50%, #b800ff 100%)',
    color: 'white',
    padding: '8rem 2rem',
    textAlign: 'center',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const contentStyle = {
    maxWidth: '600px'
  };

  const h1Style = {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    animation: 'fadeInUp 0.8s ease'
  };

  const pStyle = {
    opacity: 0.9,
    marginBottom: '2rem',
    fontSize: '1.3rem',
    animation: 'fadeInUp 0.8s ease 0.2s both'
  };

  const buttonsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    animation: 'fadeInUp 0.8s ease 0.4s both'
  };

  const btnPrimaryStyle = {
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    fontWeight: '700',
    transition: 'all 0.3s',
    backgroundColor: '#b800ff',
    color: '#ffffff',
    boxShadow: '0 0 30px rgba(184, 0, 255, 0.4)'
  };

  const btnSecondaryStyle = {
    cursor: 'pointer',
    border: '2px solid #ffffff',
    borderRadius: '5px',
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    fontWeight: '700',
    transition: 'all 0.3s',
    backgroundColor: 'transparent',
    color: '#ffffff'
  };

  return (
    <section id="home" style={heroStyle}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        button:hover {
          transform: translateY(-2px);
        }
        .btn-primary:hover {
          box-shadow: 0 10px 20px rgba(184, 0, 255, 0.6);
          background-color: #ff00ff;
        }
        .btn-secondary:hover {
          background-color: #b800ff;
          color: #000000;
          border-color: #b800ff;
        }
      `}</style>
      <div style={contentStyle}>
        <h1 style={h1Style}>¡Hola! Soy Desarrollador</h1>
        <p style={pStyle}>Creando soluciones innovadoras con tecnología moderna</p>
        <div style={buttonsStyle}>
          <button className="btn-primary" style={btnPrimaryStyle}>Ver mis proyectos</button>
          <button className="btn-secondary" style={btnSecondaryStyle}>Contactame</button>
        </div>
      </div>
    </section>
  );
}
