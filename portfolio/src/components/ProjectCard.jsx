import React, { useRef, useState } from 'react';
import { audioManager } from '../utils/AudioManager';

/**
 * ProjectCard Component
 * 3D Tilt physics + AR laser effect
 */
const ProjectCard = ({ title, description, tags = [], image, version = 'v1.0' }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  // Detectar si es móvil
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * Calcular rotación 3D basada en posición del ratón
   */
  const handleMouseMove = (e) => {
    if (!cardRef.current || isMobile) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Distancia desde el centro
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    // Máximo ángulo de rotación
    const maxTilt = 15; // grados

    // Calcular ángulos proporcionales
    const rotateY = (distX / (rect.width / 2)) * maxTilt;
    const rotateX = -(distY / (rect.height / 2)) * maxTilt;

    setTilt({ rotateX, rotateY });
  };

  /**
   * Restaurar a posición neutral
   */
  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  /**
   * Reproducir sonido de escaneo
   */
  const handleMouseEnter = () => {
    audioManager.playScan();
  };

  // Transformación 3D (desactivada en móvil)
  const transformStyle = !isMobile
    ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
    : 'perspective(1000px) rotateX(0) rotateY(0)';

  return (
    <div
      ref={cardRef}
      className="project-card cyber-glass"
      style={{
        transform: transformStyle,
        transition: 'transform 0.1s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* AR Laser */}
      <div className="ar-laser"></div>

      {/* Micro-datos esquinas */}
      <span className="micro-data top-left">[{version}]</span>
      <span className="micro-data top-right">[AR]</span>
      <span className="micro-data bottom-left">[SCAN]</span>
      <span className="micro-data bottom-right">[TX]</span>

      {/* Imagen del proyecto */}
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}

      {/* Contenido */}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {/* Tags/Tech */}
        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Glow border effect */}
      <div className="glow-border"></div>
    </div>
  );
};

export default ProjectCard;
