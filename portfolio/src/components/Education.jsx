import { useState } from 'react';
import { BookHalf, AwardFill } from 'react-bootstrap-icons';

const EgressIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 5L9 12L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CompleteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InProgressIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="10" cy="10" r="4" fill="currentColor" opacity="0.5"/>
  </svg>
);

const education = [
  {
    id: 1,
    degree: 'Ingeniería Civil Informática',
    institution: 'Universidad Finis Terrae',
    logo: '/education/logo_ufinisterrae.png',
    year: '2019 – 2025',
    status: 'Egresado'
  },
  {
    id: 2,
    degree: 'Licenciado en Ciencias de la Ingeniería',
    institution: 'Universidad Finis Terrae',
    logo: '/education/logo_ufinisterrae.png',
    year: '2019 – 2025',
    status: 'Completado'
  },
  {
    id: 3,
    degree: 'Carrera Desarrollador Fullstack',
    institution: 'Coder House',
    logo: '/education/logo_coderhouse.png',
    year: '',
    status: 'En Progreso'
  },
  {
    id: 4,
    degree: 'Diplomado en Desarrollo Web',
    institution: 'Inst. Profesional AIEP',
    logo: '/education/logo_aiep.png',
    year: '2023',
    status: 'Completado'
  },
  {
    id: 5,
    degree: 'Liderazgo y Emprendimiento',
    institution: 'Universidad Mayor',
    logo: '/education/logo_umayor.png',
    year: '2020',
    status: 'Completado'
  }
];

const certifications = [
  { title: 'Rocketbot Framework - Certificación N1, N2, N3', institution: 'RocketBot', logo: '/images/logo_rocketbot.png' },
  { title: 'React JS - Certificación', institution: 'Coder House', logo: '/education/logo_coderhouse.png' },
  { title: 'JavaScript - Certificación', institution: 'Coder House', logo: '/education/logo_coderhouse.png' },
  { title: 'Desarrollo Web (HTML, CSS, SASS, Bootstrap)', institution: 'Coder House', logo: '/education/logo_coderhouse.png' },
  { title: 'Excel Avanzado - Certificación', institution: 'Manpower', logo: '/education/logo_manpower.png' },
  { title: 'Gestión de Proyectos Agile - Metodologías (Cascada, Lean, Scrum, Kanban)', institution: 'Conecta Empleo', logo: '/education/logo_conectaempleo.png' },
  { title: 'Gestión del Desempeño', institution: 'Sence', logo: '/education/logo_sence.png' }
];

export default function Education() {
  const sectionStyle = {
    backgroundColor: '#0f0f0f',
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a0033 100%)'
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

  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem',
    marginBottom: '4rem'
  };

  const cardStyle = {
    backgroundColor: '#1a1a2e',
    borderRadius: '20px',
    padding: '2.8rem',
    border: '2.5px solid #b800ff',
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    boxShadow: '0 12px 40px rgba(184, 0, 255, 0.25), inset 0 0 20px rgba(184, 0, 255, 0.08)',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(184, 0, 255, 0.08) 100%)'
  };

  const degreeStyle = {
    color: '#ff00ff',
    fontSize: '1.35rem',
    fontWeight: '900',
    margin: '0 0 0.8rem 0',
    textShadow: '0 0 20px rgba(255, 0, 255, 0.4)',
    letterSpacing: '0.5px'
  };

  const institutionStyle = {
    color: '#00d4ff',
    fontSize: '1.1rem',
    fontWeight: '750',
    margin: '0',
    letterSpacing: '0.5px',
    textShadow: '0 0 10px rgba(0, 212, 255, 0.3)'
  };

  const yearStyle = {
    color: '#ffffff',
    fontSize: '0.95rem',
    margin: '1.2rem 0 0 0',
    fontWeight: '700',
    display: 'inline-block',
    backgroundColor: 'linear-gradient(135deg, rgba(184, 0, 255, 0.2), rgba(0, 212, 255, 0.15))',
    padding: '0.6rem 1.2rem',
    borderRadius: '15px',
    border: '1.5px solid rgba(0, 212, 255, 0.6)',
    boxShadow: '0 4px 15px rgba(0, 212, 255, 0.2)',
    background: 'linear-gradient(135deg, rgba(184, 0, 255, 0.2), rgba(0, 212, 255, 0.15))'
  };

  const descriptionStyle = {
    color: '#dddddd',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    margin: '1rem 0 0 0',
    fontWeight: '500'
  };

  const statusStyle = (status) => {
    let bgColor, textColor, borderColor, iconColor, shadowColor;
    let Icon;
    
    if (status === 'Egresado') {
      bgColor = 'rgba(0, 255, 136, 0.2)';
      textColor = '#00ff88';
      borderColor = '#00ff88';
      iconColor = '#00ff88';
      shadowColor = '#00ff8850';
      Icon = EgressIcon;
    } else if (status === 'Completado') {
      bgColor = 'rgba(0, 212, 255, 0.2)';
      textColor = '#00d4ff';
      borderColor = '#00d4ff';
      iconColor = '#00d4ff';
      shadowColor = '#00d4ff50';
      Icon = CompleteIcon;
    } else {
      bgColor = 'rgba(0, 255, 200, 0.2)';
      textColor = '#00ffc8';
      borderColor = '#00ffc8';
      iconColor = '#00ffc8';
      shadowColor = '#00ffc850';
      Icon = InProgressIcon;
    }

    return {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.9rem',
      backgroundColor: bgColor,
      color: textColor,
      padding: '0.85rem 1.5rem',
      borderRadius: '30px',
      fontSize: '0.9rem',
      marginTop: '1.5rem',
      border: `2.5px solid ${borderColor}`,
      fontWeight: '800',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      boxShadow: `0 6px 20px ${shadowColor}, inset 0 0 10px ${borderColor}20`,
      Icon,
      iconColor,
      textShadow: `0 0 10px ${borderColor}60`
    };
  };

  return (
    <section id="education" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={h2Style}><BookHalf size={32} style={{marginRight: '0.5rem', verticalAlign: 'middle'}} />Educación y Certificaciones</h2>
        <p style={subtitleStyle}>Formación académica y certificaciones profesionales</p>
        <div style={gridStyle}>
          {education.map(edu => (
            <div 
              key={edu.id} 
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-14px) scale(1.06)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(255, 0, 255, 0.4), inset 0 0 30px rgba(255, 0, 255, 0.15)';
                e.currentTarget.style.borderColor = '#00ffff';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(184, 0, 255, 0.25), inset 0 0 20px rgba(184, 0, 255, 0.08)';
                e.currentTarget.style.borderColor = '#b800ff';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(184, 0, 255, 0.08) 100%)';
              }}
            >
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                gap: '1.5rem', 
                marginBottom: '2rem',
                paddingBottom: '2rem',
                borderBottom: '2.5px solid rgba(184, 0, 255, 0.3)',
                position: 'relative'
              }}>
                <div style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '22px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid',
                  borderColor: '#b800ff',
                  background: 'linear-gradient(135deg, rgba(184, 0, 255, 0.15) 0%, rgba(26, 26, 46, 0.85) 100%)',
                  boxShadow: '0 15px 45px rgba(184, 0, 255, 0.25), inset 0 0 25px rgba(184, 0, 255, 0.1)',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={edu.logo} 
                    alt={edu.institution} 
                    style={{ width: '100px', height: '100px', objectFit: 'contain', position: 'relative', zIndex: 1 }} 
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={degreeStyle}>{edu.degree}</h3>
                  <p style={institutionStyle}>{edu.institution}</p>
                </div>
              </div>
              {edu.year && <p style={yearStyle}>{edu.year}</p>}
              {(() => {
                const statusConfig = statusStyle(edu.status);
                const Icon = statusConfig.Icon;
                return (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: statusConfig.gap,
                    backgroundColor: statusConfig.backgroundColor,
                    color: statusConfig.color,
                    padding: statusConfig.padding,
                    borderRadius: statusConfig.borderRadius,
                    fontSize: statusConfig.fontSize,
                    marginTop: statusConfig.marginTop,
                    border: statusConfig.border,
                    fontWeight: statusConfig.fontWeight,
                    transition: statusConfig.transition
                  }}>
                    <Icon />
                    {edu.status}
                  </div>
                );
              })()}
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '3px solid #b800ff' }}>
          <h3 style={{ ...h2Style, marginBottom: '3rem', textAlign: 'left', fontSize: '2.2rem', color: '#00d4ff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <AwardFill size={32} style={{ color: '#00d4ff' }} />
            Certificaciones Profesionales
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                style={{ 
                  ...cardStyle, 
                  borderColor: '#00d4ff',
                  borderWidth: '2.5px',
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(26, 26, 46, 0.95) 100%)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.2rem',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.06)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 212, 255, 0.35), inset 0 0 30px rgba(0, 212, 255, 0.1)';
                  e.currentTarget.style.borderColor = '#00ffff';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(0, 212, 255, 0.05) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(184, 0, 255, 0.25), inset 0 0 20px rgba(184, 0, 255, 0.08)';
                  e.currentTarget.style.borderColor = '#00d4ff';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(26, 26, 46, 0.95) 100%)';
                }}
              >
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(0, 212, 255, 0.5)',
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(26, 26, 46, 0.85) 100%)',
                  boxShadow: '0 8px 25px rgba(0, 212, 255, 0.15)',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                  <img 
                    src={cert.logo} 
                    alt={cert.institution} 
                    style={{ width: '80px', height: '80px', objectFit: 'contain' }} 
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ ...descriptionStyle, margin: 0, color: '#00d4ff', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.5rem' }}>✓ {cert.title}</p>
                  <p style={{ color: '#aaaaaa', fontSize: '0.85rem', margin: 0, fontWeight: '600' }}>{cert.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
