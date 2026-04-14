import React, { useState } from 'react';
import { useCommandCenter } from '../context/CommandCenterContext';
import { audioManager } from '../utils/AudioManager';

/**
 * InfoHub Component
 * Floating help panel with quick access to commands
 * Module 4: Terminal Access Control System
 */
const InfoHub = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { executeCommand } = useCommandCenter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
    audioManager.playClick();
  };

  const handleDeployAll = () => {
    const response = executeCommand('run deploy --global');
    audioManager.playScan();
    // Panel closes automatically after deployment
    setTimeout(() => setIsOpen(false), 500);
  };

  const handleCommandClick = (command) => {
    const response = executeCommand(command);
    audioManager.playBeep();
  };

  return (
    <div className={`info-hub ${isOpen ? 'open' : ''}`}>
      {/* Floating Button */}
      <button
        className="info-hub-button"
        onClick={handleToggle}
        title="Toggle Help Panel"
        aria-label="Help panel"
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Question mark */}
          <circle cx="50" cy="30" r="6" fill="currentColor" />
          <path
            d="M 35 50 Q 35 40, 45 40 Q 55 40, 55 50 Q 55 58, 50 60 L 50 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="50" y1="78" x2="50" y2="84" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </button>

      {/* Help Panel */}
      <div className="info-hub-panel">
        <div className="panel-header">
          <h3 className="panel-title">COMMAND REFERENCE</h3>
          <button
            className="panel-close-btn"
            onClick={handleToggle}
            title="Close panel"
            aria-label="Close help panel"
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              <line x1="75" y1="25" x2="25" y2="75" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="panel-content">
          <div className="command-group">
            <h4 className="group-title">UNLOCK SECTIONS</h4>
            <div className="command-list">
              <button
                className="command-btn"
                onClick={() => handleCommandClick('run deploy --section ABOUT')}
              >
                <code>run deploy --section ABOUT</code>
              </button>
              <button
                className="command-btn"
                onClick={() => handleCommandClick('run deploy --section PROJECTS')}
              >
                <code>run deploy --section PROJECTS</code>
              </button>
              <button
                className="command-btn"
                onClick={() => handleCommandClick('run deploy --section SKILLS')}
              >
                <code>run deploy --section SKILLS</code>
              </button>
            </div>
          </div>

          <div className="command-group">
            <h4 className="group-title">SYSTEM COMMANDS</h4>
            <div className="command-list">
              <button
                className="command-btn"
                onClick={() => handleCommandClick('help')}
              >
                <code>help</code>
              </button>
              <button
                className="command-btn"
                onClick={() => handleCommandClick('clear')}
              >
                <code>clear</code>
              </button>
            </div>
          </div>

          <div className="command-group critical">
            <h4 className="group-title">EMERGENCY ACCESS</h4>
            <button
              className="command-btn critical-btn"
              onClick={handleDeployAll}
            >
              <svg className="critical-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="50" cy="50" r="8" fill="currentColor" />
              </svg>
              <span>FORZAR DESPLIEGUE</span>
            </button>
            <p className="critical-desc">
              Desbloquea todas las secciones simultáneamente
            </p>
          </div>
        </div>

        <div className="panel-footer">
          <p className="footer-version">v1.0 - CONTROL SYSTEM</p>
        </div>
      </div>

      {/* Backdrop (opens/closes panel) */}
      {isOpen && <div className="info-hub-backdrop" onClick={handleToggle} />}
    </div>
  );
};

export default InfoHub;
