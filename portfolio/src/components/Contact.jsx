// Iconos SVG
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
  return (
    <section id="contact" style={{ backgroundColor: '#0f0f0f', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#b800ff', marginBottom: '2rem', fontSize: '2.5rem' }}>
          Contacto
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {/* Email */}
          <div style={{ backgroundColor: '#1a1a1a', padding: '2.5rem 1.5rem', borderRadius: '12px', border: '2px solid #b800ff', textAlign: 'center', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(184, 0, 255, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              <EmailIcon />
            </div>
            <div style={{ color: '#b800ff', fontWeight: '600', marginBottom: '0.8rem' }}>Email</div>
            <a href="mailto:david.203.52@gmail.com" style={{ color: '#cccccc', textDecoration: 'none', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = '#b800ff'} onMouseLeave={(e) => e.target.style.color = '#cccccc'}>
              david.203.52@gmail.com
            </a>
          </div>

          {/* Teléfono */}
          <div style={{ backgroundColor: '#1a1a1a', padding: '2.5rem 1.5rem', borderRadius: '12px', border: '2px solid #b800ff', textAlign: 'center', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(184, 0, 255, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              <PhoneIcon />
            </div>
            <div style={{ color: '#b800ff', fontWeight: '600', marginBottom: '0.8rem' }}>Teléfono</div>
            <a href="tel:+56995052746" style={{ color: '#cccccc', textDecoration: 'none', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = '#b800ff'} onMouseLeave={(e) => e.target.style.color = '#cccccc'}>
              +569 9505 2746
            </a>
          </div>

          {/* Ubicación */}
          <div style={{ backgroundColor: '#1a1a1a', padding: '2.5rem 1.5rem', borderRadius: '12px', border: '2px solid #b800ff', textAlign: 'center', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(184, 0, 255, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              <LocationIcon />
            </div>
            <div style={{ color: '#b800ff', fontWeight: '600', marginBottom: '0.8rem' }}>Ubicación</div>
            <div style={{ color: '#cccccc', fontWeight: '500' }}>Santiago de Chile</div>
          </div>
        </div>
      </div>
    </section>
  );
}
