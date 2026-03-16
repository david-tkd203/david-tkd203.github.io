import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const sectionStyle = {
    backgroundColor: '#0f0f0f',
    padding: '4rem 2rem'
  };

  const h2Style = {
    textAlign: 'center',
    color: '#b800ff',
    marginBottom: '0.5rem',
    fontSize: '2.5rem'
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: '#aaaaaa',
    marginBottom: '2rem',
    fontSize: '1.1rem'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '500px',
    margin: '0 auto'
  };

  const groupStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const inputStyle = {
    border: '2px solid #b800ff',
    borderRadius: '5px',
    padding: '1rem',
    fontFamily: 'inherit',
    fontSize: '1rem',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    outline: 'none'
  };

  const buttonStyle = {
    color: '#ffffff',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #b800ff 0%, #ff00ff 100%)',
    border: 'none',
    borderRadius: '5px',
    padding: '1rem',
    fontSize: '1rem',
    fontWeight: '700',
    transition: 'all 0.3s',
    boxShadow: '0 0 20px rgba(184, 0, 255, 0.3)'
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={h2Style}>Contacto</h2>
        <p style={subtitleStyle}>¿Tienes un proyecto en mente? ¡Hablemos!</p>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={groupStyle}>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.boxShadow = '0 0 15px rgba(184, 0, 255, 0.5)'}
              onBlur={(e) => e.target.style.boxShadow = 'none'}
              required
            />
          </div>
          <div style={groupStyle}>
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.boxShadow = '0 0 15px rgba(184, 0, 255, 0.5)'}
              onBlur={(e) => e.target.style.boxShadow = 'none'}
              required
            />
          </div>
          <div style={groupStyle}>
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.boxShadow = '0 0 15px rgba(184, 0, 255, 0.5)'}
              onBlur={(e) => e.target.style.boxShadow = 'none'}
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
