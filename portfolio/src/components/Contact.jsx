import { useState } from 'react';

const EmailIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="32" rx="2" stroke="#b800ff" strokeWidth="2"/>
    <path d="M4 10L24 22L44 10" stroke="#b800ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8H10C8.89543 8 8 8.89543 8 10V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V10C40 8.89543 39.1046 8 38 8H36" stroke="#b800ff" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="32" r="2" fill="#b800ff"/>
    <path d="M24 28V20" stroke="#b800ff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8C16.268 8 10 14.268 10 22C10 32 24 42 24 42C24 42 38 32 38 22C38 14.268 31.732 8 24 8Z" stroke="#b800ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="22" r="4" fill="#b800ff"/>
  </svg>
);

const EgressIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 10L16 24L10 18" stroke="#b800ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InProgressIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="16" stroke="#ff6b6b" strokeWidth="2"/>
    <circle cx="20" cy="20" r="8" stroke="#ff6b6b" strokeWidth="2" fill="rgba(255, 107, 107, 0.2)"/>
  </svg>
);

const CompletedIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 20L16 28L32 12" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [hoveredDetail, setHoveredDetail] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:david.203.52@gmail.com?subject=Contacto desde Portfolio - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const contactDetails = [
    { icon: EmailIcon, label: 'Email', value: 'david.203.52@gmail.com', link: 'mailto:david.203.52@gmail.com' },
    { icon: PhoneIcon, label: 'Teléfono', value: '+569 9505 2746', link: 'tel:+56995052746' },
    { icon: LocationIcon, label: 'Ubicación', value: 'Santiago de Chile' }
  ];

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
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {contactDetails.map((detail, idx) => {
            const IconComponent = detail.icon;
            return (
              <div 
                key={idx} 
                style={{
                  backgroundColor: '#1a1a1a',
                  padding: '2.5rem 1.5rem',
                  borderRadius: '12px',
                  border: '2px solid #b800ff',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: hoveredDetail === idx ? 'pointer' : 'default',
                  transform: hoveredDetail === idx ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredDetail === idx ? '0 15px 40px rgba(184, 0, 255, 0.4), inset 0 0 20px rgba(184, 0, 255, 0.1)' : '0 4px 6px rgba(184, 0, 255, 0.1)'
                }}
                onMouseEnter={() => setHoveredDetail(idx)}
                onMouseLeave={() => setHoveredDetail(null)}
              >
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <IconComponent />
                </div>
                <div style={{ color: '#b800ff', fontWeight: '600', marginBottom: '0.8rem' }}>{detail.label}</div>
                {detail.link ? (
                  <a href={detail.link} style={{
                    color: '#cccccc',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all 0.3s',
                    fontWeight: '500',
                    borderBottom: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#b800ff';
                    e.target.style.borderBottomColor = '#b800ff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#cccccc';
                    e.target.style.borderBottomColor = 'transparent';
                  }}
                  >
                    {detail.value}
                  </a>
                ) : (
                  <div style={{ color: '#cccccc', fontWeight: '500' }}>{detail.value}</div>
                )}
              </div>
            );
          })}
        </div>

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
