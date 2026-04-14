import React from 'react';
import { useCommandCenter } from '../context/CommandCenterContext';

/**
 * SectionGuard Component
 * Access control wrapper for sections
 * Renders locked state if section not yet deployed
 */
const SectionGuard = ({ sectionId, children }) => {
  const { deployedSections } = useCommandCenter();
  const isDeployed = deployedSections[sectionId] || false;

  if (!isDeployed) {
    return (
      <div className="locked-section">
        <div className="locked-overlay">
          <div className="locked-content">
            <svg className="locked-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Lock body */}
              <rect x="30" y="45" width="40" height="45" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
              {/* Lock shackle */}
              <path d="M 35 45 Q 35 20, 50 20 Q 65 20, 65 45" fill="none" stroke="currentColor" strokeWidth="3" />
              {/* Keyhole */}
              <circle cx="50" cy="65" r="4" fill="currentColor" />
            </svg>
            <h3 className="locked-title">[DATOS ENCRIPTADOS]</h3>
            <p className="locked-message">
              Esta sección requiere desbloqueo manual
            </p>
            <p className="locked-hint">
              Utiliza la <span className="highlight">Terminal de Control</span> para ejecutar:
            </p>
            <code className="locked-command">
              run deploy --section {sectionId}
            </code>
            <p className="locked-or">O desbloquea todo con:</p>
            <code className="locked-command">
              run deploy --global
            </code>
          </div>
        </div>
      </div>
    );
  }

  return <div className="section-deployed">{children}</div>;
};

export default SectionGuard;
