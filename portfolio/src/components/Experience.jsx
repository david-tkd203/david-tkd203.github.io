import { useState } from 'react';
import { Cpu, Briefcase } from 'react-bootstrap-icons';

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1"/>
    <path d="M2 6H14" stroke="currentColor" strokeWidth="1"/>
    <line x1="5" y1="1" x2="5" y2="4" stroke="currentColor" strokeWidth="1"/>
    <line x1="11" y1="1" x2="11" y2="4" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const LocationPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2C5.24 2 3 4.24 3 7C3 10.36 8 14 8 14C8 14 13 10.36 13 7C13 4.24 10.76 2 8 2Z" stroke="currentColor" strokeWidth="1"/>
    <circle cx="8" cy="7" r="1.5" fill="currentColor"/>
  </svg>
);

const BulletIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2" fill="currentColor"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const experiences = [
  {
    id: 1,
    title: 'Desarrollador RPA',
    company: 'Kabeli',
    project: 'Automatización Hotelera Integral',
    logo: '/jobs/logo_kabeli.png',
    period: 'Abril 2024 - Dic 2024',
    location: 'Santiago, Región Metropolitana',
    tasks: [
      'Apoyé desarrollo de soluciones para línea hotelera en Perú capturando datos de Outlook, Expedia y SynXis',
      'Diseñé flujos RPA con Rocketbot y Web Scraping usando XPath dinámicos y Desktop Recorder para precisión a pixel',
      'Implementé Power Automate Cloud Flows para captura, filtrado y descarga de adjuntos de reservas desde Outlook',
      'Optimicé tiempos de procesamiento logrando 50 registros en solo 30 minutos desde plataformas externas',
      'Ejecuté proyecto autónomo de licencias médicas extrayendo datos de portales Imed y Medipass a plataforma BUK',
      'Automaticé registro de inasistencias y comprobantes operando a través de 4 dominios distintos',
      'Realicé mantenimiento de bots para cartolas y cuadraturas financieras de clientes en México',
      'Participé en planificación de entregables con sprints semanales y estimación de tiempos aprobados por cliente',
      'Formé parte de procesos QA y control de versiones con Git'
    ],
    tech: [
      { name: 'Rocketbot', logo: '/images/logo_rocketbot.png' },
      { name: 'Power Automate', logo: '/images/logo_power_automate.png' },
      { name: 'Python', logo: '/images/logo_python.png' },
      { name: 'Git', logo: '/images/logo_git.png' }
    ]
  },
  {
    id: 2,
    title: 'Desarrollador RPA Semi Senior (Reemplazo)',
    company: 'Seidor (Subcontrato CCU)',
    project: 'Automatización Bancaria y Financiera',
    logo: '/jobs/logo_ccu.png',
    period: 'Enero 2025 - Marzo 2025',
    location: 'Santiago, Región Metropolitana',
    tasks: [
      'Fui responsable de mantenimiento evolutivo y correctivo de bots críticos para automatización bancaria',
      'Gestioné circulación de cajas en Odoo y procesos del área financiera',
      'Desarrollé integraciones para consumo de APIs REST con Python (Requests) y procesamiento JSON',
      'Implementé pipelines de integración continua en Jenkins con plantillas dinámicas en Jinja2',
      'Gestioné ejecución de bots e integridad en entornos Linux (Ubuntu) y Windows',
      'Utilicé Docker y Docker Compose para contenerización de procesos con automatización de Chromedriver',
      'Diseñé soluciones alternativas para consumo de APIs bancarias evitando incompatibilidades con librerías',
      'Gestioné requerimientos mediante plataforma Odoo asegurando cumplimiento de flujos PMO',
      'Apliqué prácticas avanzadas en Python con modularización PEP 8, .env y control de versiones Git'
    ],
    tech: [
      { name: 'Python', logo: '/images/logo_python.png' },
      { name: 'Docker', logo: '/images/logo_docker.png' },
      { name: 'Jenkins', logo: '/images/logo_jenkins.png' },
      { name: 'Jinja2', logo: '/images/logo_jinja2.png' }
    ]
  },
  {
    id: 3,
    title: 'Ingeniero de Software',
    company: 'Instituto de Seguridad del Trabajo (IST)',
    project: 'Plataforma de Investigación de Accidentes',
    logo: '/jobs/logo_ist.png',
    period: 'Julio 2025 - Dic 2025',
    location: 'Santiago, Región Metropolitana',
    tasks: [
      'Ejecuté desarrollo y mantenimiento con Django utilizando Class-Based Views (CBV), Django ORM y transacciones atómicas',
      'Implementé versionado lógico mediante Signals para garantizar consistencia de datos críticos',
      'Diseñé interfaces dinámicas con Django Templates y HTMX para actualizaciones parciales sin recargas de página',
      'Integré Graphviz (DOT/SVG) para generación y edición dinámica de diagramas causales sincronizados en BD',
      'Gestioné ciclo de despliegue en Docker y Docker Compose con Nginx como reverse proxy',
      'Desarrollé algoritmos de migración en Python para normalización entre bases de datos SQL y modelos Django',
      'Investigué arquitectura Multi-tenant para transición MySQL a PostgreSQL con aislamiento por esquemas',
      'Elaboré informes técnicos para ISO 27001 y Ley 21.719 de privacidad',
      'Implementé Google Apps Script para flujo automatizado procesando 60+ usuarios en tiempo real en Test Kholman'
    ],
    tech: [
      { name: 'Django', logo: '/images/logo_django.png' },
      { name: 'Docker', logo: '/images/logo_docker.png' },
      { name: 'PostgreSQL', logo: '/images/logo_postgres.png' },
      { name: 'Python', logo: '/images/logo_python.png' }
    ]
  },
  {
    id: 4,
    title: 'Desarrollador RPA e Ingeniero de Datos',
    company: 'Automatiza Tech',
    project: 'Clínica de Fracturas de Colombia',
    logo: '/jobs/logo_automatizatech.png',
    period: 'Julio 2025 - Dic 2025',
    location: 'Santiago, Región Metropolitana',
    tasks: [
      'Diseñé y desarrollé flujos automatizados con Rocketbot para navegación e interacción con portales de salud (EPS, ARL y SOAT)',
      'Implementé técnicas avanzadas de Web Scraping con selectores XPath dinámicos para extracción de facturación y expedientes clínicos',
      'Desarrollé scripts Python con pdfplumber y Expresiones Regulares para extracción de 3,200+ procedimientos quirúrgicos',
      'Diseñé algoritmos de clasificación con pandas para evaluación de miles de insumos y dispositivos médicos',
      'Automaticé validación de normativas de facturación generando rangos numéricos para cruces relacionales (Primary/Foreign Key)',
      'Implementé conexiones a ERP hospitalario (SQL Server) mediante pyodbc con consultas complejas y JSON nativo',
      'Estandaricé catálogos médicos mediante mapeo de 40+ especialidades y rutinas de sanitización de datos'
    ],
    tech: [
      { name: 'Python', logo: '/images/logo_python.png' },
      { name: 'Rocketbot', logo: '/images/logo_rocketbot.png' },
      { name: 'Pandas', logo: '/images/logo_pandas.png' },
      { name: 'SQL Server', logo: '/images/logo_sqlserver.png' },
      { name: 'Selenium', logo: '/images/logo_selenium.svg' }
    ]
  }
];

export default function Experience() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const timelineIndicatorStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '3rem',
    position: 'relative'
  };

  const timelineItemStyle = (index) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s'
  });

  const progressBarContainerStyle = {
    position: 'absolute',
    top: '20px',
    left: '0',
    right: '0',
    height: '4px',
    backgroundColor: 'rgba(184, 0, 255, 0.1)',
    borderRadius: '2px',
    zIndex: 0,
    overflow: 'hidden'
  };

  const progressBarFillStyle = {
    height: '100%',
    backgroundColor: '#b800ff',
    borderRadius: '2px',
    transition: 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    width: `${((currentSlide + 1) / experiences.length) * 100}%`,
    boxShadow: '0 0 15px rgba(184, 0, 255, 0.8)'
  };

  const timelineNodeStyle = (index) => ({
    width: index === currentSlide ? '20px' : '14px',
    height: index === currentSlide ? '20px' : '14px',
    borderRadius: '50%',
    backgroundColor: index <= currentSlide ? '#b800ff' : 'rgba(184, 0, 255, 0.3)',
    border: index === currentSlide ? '3px solid #ffffff' : 'none',
    boxShadow: index === currentSlide ? '0 0 20px rgba(184, 0, 255, 0.8)' : 'none',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    position: 'relative',
    zIndex: 2,
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.2)'
    }
  });

  const timelineLabelStyle = (index) => ({
    marginTop: '1.5rem',
    textAlign: 'center',
    color: index === currentSlide ? '#b800ff' : '#aaaaaa',
    fontSize: index === currentSlide ? '0.95rem' : '0.85rem',
    fontWeight: index === currentSlide ? '700' : '600',
    transition: 'all 0.3s',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  });

  const slideContainerStyle = {
    position: 'relative',
    minHeight: '800px',
    overflow: 'hidden',
    borderRadius: '20px',
    border: '2px solid #b800ff',
    background: 'rgba(26, 26, 46, 0.6)',
    boxShadow: '0 20px 60px rgba(184, 0, 255, 0.2), inset 0 0 20px rgba(184, 0, 255, 0.05)'
  };

  const slideStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    opacity: currentSlide === experiences.indexOf(experiences[currentSlide]) ? 1 : 0,
    transform: `translateX(${(currentSlide - experiences.indexOf(experiences[currentSlide])) * 100}%)`,
    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    pointerEvents: currentSlide === experiences.indexOf(experiences[currentSlide]) ? 'auto' : 'none',
    overflow: 'hidden'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    marginBottom: '0.8rem',
    paddingBottom: '0.8rem',
    borderBottom: '2px solid rgba(184, 0, 255, 0.2)'
  };

  const companyLogoStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    border: '2.5px solid rgba(184, 0, 255, 0.3)',
    background: 'linear-gradient(135deg, rgba(184, 0, 255, 0.1) 0%, rgba(255, 0, 255, 0.05) 100%)',
    boxShadow: '0 10px 30px rgba(184, 0, 255, 0.15), inset 0 0 20px rgba(184, 0, 255, 0.05)',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    position: 'relative'
  };

  const headerTextStyle = {
    flex: 1
  };

  const titleStyle = {
    color: '#b800ff',
    fontSize: '1.8rem',
    fontWeight: '800',
    margin: '0 0 0.2rem 0',
    textShadow: '0 0 20px rgba(184, 0, 255, 0.3)'
  };

  const companyStyle = {
    color: '#ffffff',
    fontSize: '1.1rem',
    fontWeight: '600',
    margin: '0 0 0.3rem 0'
  };

  const periodStyle = {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    marginBottom: '0',
    marginTop: '0.3rem'
  };

  const periodItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    color: '#00d4ff',
    fontSize: '0.9rem',
    fontWeight: '600'
  };

  const taskStyle = {
    marginBottom: '1rem'
  };

  const taskListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '0.6rem',
    marginBottom: '0.5rem',
    paddingRight: '0'
  };

  const taskItemStyle = {
    color: '#cccccc',
    fontSize: '0.85rem',
    lineHeight: '1.6',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.8rem',
    padding: '0',
    backgroundColor: 'transparent',
    borderRadius: '0',
    border: 'none',
    transition: 'all 0.3s',
    marginBottom: '0.3rem'
  };

  const techStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem'
  };

  const tagStyle = {
    backgroundColor: 'rgba(184, 0, 255, 0.2)',
    color: '#b800ff',
    padding: '0.6rem 1.2rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    border: '1.5px solid rgba(184, 0, 255, 0.4)',
    fontWeight: '600',
    transition: 'all 0.3s',
    cursor: 'default'
  };

  const navButtonStyle = (direction) => ({
    position: 'absolute',
    top: '50%',
    [direction]: '-60px',
    transform: 'translateY(-50%)',
    backgroundColor: '#b800ff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    fontSize: '1.5rem',
    boxShadow: '0 4px 15px rgba(184, 0, 255, 0.3)',
    ':hover': {
      backgroundColor: '#ff00ff',
      boxShadow: '0 8px 25px rgba(255, 0, 255, 0.5)'
    }
  });

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  return (
    <section id="experience" style={sectionStyle}>
      <style>{``}</style>
      <div style={containerStyle}>
        <h2 style={h2Style}><Briefcase size={32} style={{marginRight: '0.5rem', verticalAlign: 'middle'}} />Experiencia Profesional</h2>
        <p style={subtitleStyle}>Cronología de mi trayectoria laboral</p>
        
        {/* Cronograma/Timeline */}
        <div style={timelineIndicatorStyle}>
          <div style={progressBarContainerStyle}>
            <div style={progressBarFillStyle}></div>
          </div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={timelineItemStyle(index)}
              onClick={() => setCurrentSlide(index)}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector('[data-node]').style.transform = 'scale(1.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector('[data-node]').style.transform = 'scale(1)';
              }}
            >
              <div
                data-node
                style={timelineNodeStyle(index)}
              >
                <span style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '0.7rem',
                  color: '#ffffff',
                  fontWeight: '800'
                }}>
                  {index + 1}
                </span>
              </div>
              <div style={timelineLabelStyle(index)}>
                {exp.company}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: '#666666',
                marginTop: '0.3rem'
              }}>
                {exp.period.split(' - ')[0]}
              </div>
            </div>
          ))}
        </div>

        {/* Slide Container */}
        <div style={slideContainerStyle}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              style={{
                ...slideStyle,
                opacity: currentSlide === index ? 1 : 0,
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              {/* Header con Logo Empresa */}
              <div style={headerStyle}>
                <div 
                  style={companyLogoStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    e.currentTarget.style.borderColor = '#b800ff';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(184, 0, 255, 0.3), inset 0 0 30px rgba(184, 0, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(184, 0, 255, 0.3)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(184, 0, 255, 0.15), inset 0 0 20px rgba(184, 0, 255, 0.05)';
                  }}
                >
                  <img 
                    src={exp.logo} 
                    alt={exp.company}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div style={headerTextStyle}>
                  <h3 style={titleStyle}>{exp.title}</h3>
                  <p style={companyStyle}>{exp.company}</p>
                  {exp.project && (
                    <p style={{
                      color: '#00d4ff',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      margin: '0.2rem 0 0.3rem 0',
                      fontStyle: 'italic',
                      letterSpacing: '0.5px'
                    }}>
                      Proyecto: {exp.project}
                    </p>
                  )}
                  <div style={periodStyle}>
                    <div style={periodItemStyle}>
                      <CalendarIcon />
                      <span>{exp.period}</span>
                    </div>
                    <div style={periodItemStyle}>
                      <LocationPinIcon />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div style={taskListStyle}>
                  {exp.tasks.map((task, idx) => (
                    <div key={idx} style={taskItemStyle}>
                      <span style={{ color: '#b800ff', marginTop: '2px' }}>▸</span>
                      <span>{task}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Grid */}
                <div style={{ marginTop: '0.3rem' }}>
                  <p style={{ color: '#b800ff', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.6rem', marginTop: '0', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Cpu size={16} style={{ color: '#b800ff' }} />
                    Tecnologías
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
                    gap: '0.9rem'
                  }}>
                    {exp.tech.map((tech, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '1.4rem',
                          backgroundColor: 'rgba(184, 0, 255, 0.08)',
                          borderRadius: '12px',
                          border: '2px solid rgba(184, 0, 255, 0.25)',
                          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          cursor: 'default',
                          minHeight: '135px',
                          background: 'linear-gradient(135deg, rgba(184, 0, 255, 0.1) 0%, rgba(26, 26, 46, 0.8) 100%)',
                          boxShadow: '0 6px 15px rgba(184, 0, 255, 0.1)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(184, 0, 255, 0.15)';
                          e.currentTarget.style.borderColor = '#b800ff';
                          e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(184, 0, 255, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(184, 0, 255, 0.08)';
                          e.currentTarget.style.borderColor = 'rgba(184, 0, 255, 0.25)';
                          e.currentTarget.style.transform = 'translateY(0) scale(1)';
                          e.currentTarget.style.boxShadow = '0 6px 15px rgba(184, 0, 255, 0.1)';
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          top: '-40%',
                          right: '-40%',
                          width: '150px',
                          height: '150px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(184, 0, 255, 0.03)',
                          pointerEvents: 'none'
                        }}></div>
                        {tech.logo ? (
                          <>
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              style={{
                                width: '55px',
                                height: '55px',
                                objectFit: 'contain',
                                marginBottom: '0.8rem',
                                position: 'relative',
                                zIndex: 1
                              }}
                            />
                            <span style={{ color: '#b800ff', fontSize: '0.75rem', fontWeight: '700', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                              {tech.name}
                            </span>
                          </>
                        ) : (
                          <span style={{ color: '#aaaaaa', fontSize: '0.8rem', fontWeight: '600', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                            {tech.name}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slide Counter */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                color: '#b800ff',
                fontSize: '0.9rem',
                fontWeight: '600',
                backgroundColor: 'rgba(184, 0, 255, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                border: '1px solid rgba(184, 0, 255, 0.3)'
              }}>
                {currentSlide + 1} / {experiences.length}
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            style={navButtonStyle('left')}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ff00ff';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 0, 255, 0.5)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#b800ff';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(184, 0, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            style={navButtonStyle('right')}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ff00ff';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 0, 255, 0.5)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#b800ff';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(184, 0, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
