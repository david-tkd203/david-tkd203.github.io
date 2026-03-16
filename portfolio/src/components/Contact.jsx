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

export default function Contact() {
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
    marginBottom: '2rem',
    fontSize: '2.5rem'
  };

  const detailsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: '900px',
    margin: '0 auto'
  };

  const detailCardStyle = {
    backgroundColor: '#1a1a1a',
    padding: '2.5rem 1.5rem',
    borderRadius: '12px',
    border: '2px solid #b800ff',
    textAlign: 'center',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    cursor: 'pointer',
    transform: 'translateY(0)'
  };

  const detailCardHoverStyle = {
    ...detailCardStyle,
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 40px rgba(184, 0, 255, 0.4), inset 0 0 20px rgba(184, 0, 255, 0.1)'
  };

  const labelStyle = {
    color: '#b800ff',
    fontWeight: '600',
    marginBottom: '0.8rem'
  };

  const valueStyle = {
    color: '#cccccc',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s',
    fontWeight: '500',
    borderBottom: '2px solid transparent'
  };

  const iconContainerStyle = {
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={h2Style}>Contacto</h2>
        
        <div style={detailsContainerStyle}>
          {contactDetails.map((detail, idx) => {
            const IconComponent = detail.icon;
            return (
              <div 
                key={idx} 
                style={detailCardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(184, 0, 255, 0.4), inset 0 0 20px rgba(184, 0, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(184, 0, 255, 0.1)';
                }}
              >
                <div style={iconContainerStyle}>
                  <IconComponent />
                </div>
                <div style={labelStyle}>{detail.label}</div>
                {detail.link ? (
                  <a href={detail.link} style={valueStyle}
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
      </div>
    </section>
  );
}
