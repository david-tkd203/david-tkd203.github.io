import React, { useState, useRef, useEffect } from 'react';
import { useCommandCenter } from '../context/CommandCenterContext';
import { audioManager } from '../utils/AudioManager';

/**
 * MainTerminal Component
 * Interactive command console with history display
 * Module 2: Terminal Access Control System
 */
const MainTerminal = () => {
  const { executeCommand } = useCommandCenter();
  const [history, setHistory] = useState([
    {
      command: 'system init...',
      response: '[OK] BIONIC WORKSTATION INITIALIZED',
      timestamp: new Date(),
    },
    {
      command: 'scan sections...',
      response: '[OK] 3 SECTIONS FOUND: ABOUT | PROJECTS | SKILLS - [LOCKED]',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalContentRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (terminalContentRef.current) {
      setTimeout(() => {
        terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
      }, 50);
    }
  }, [history]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsProcessing(true);
    const trimmedInput = input.trim();
    const response = executeCommand(trimmedInput);

    if (response === null) {
      // Clear command - just update history without adding command
      setHistory([]);
      setInput('');
      setIsProcessing(false);
    } else {
      // Add to history
      setHistory((prev) => [
        ...prev,
        {
          command: trimmedInput,
          response: response,
          timestamp: new Date(),
        },
      ]);

      // Clear input
      setInput('');
      setIsProcessing(false);

      // Play completion sound
      audioManager.playDataPulse();
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    // Play subtle click on each keystroke
    audioManager.playClick();
  };

  const handleQuickDeploy = (sectionId) => {
    const command = `run deploy --section ${sectionId}`;
    const response = executeCommand(command);
    
    setHistory((prev) => [
      ...prev,
      {
        command: command,
        response: response,
        timestamp: new Date(),
      },
    ]);

    audioManager.playDataPulse();
  };

  const handleGlobalDeploy = () => {
    const command = 'run deploy --global';
    const response = executeCommand(command);
    
    setHistory((prev) => [
      ...prev,
      {
        command: command,
        response: response,
        timestamp: new Date(),
      },
    ]);

    audioManager.playScan();
  };

  const handleClear = () => {
    setHistory([]);
    setInput('');
    audioManager.playBeep();
  };

  return (
    <div className="main-terminal">
      <div className="terminal-header">
        <div className="terminal-title">
          <svg className="terminal-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Screen background */}
            <rect x="10" y="15" width="80" height="55" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
            {/* Text lines */}
            <line x1="15" y1="28" x2="70" y2="28" stroke="currentColor" strokeWidth="1.5" />
            <line x1="15" y1="37" x2="60" y2="37" stroke="currentColor" strokeWidth="1.5" />
            <line x1="15" y1="46" x2="65" y2="46" stroke="currentColor" strokeWidth="1.5" />
            <line x1="15" y1="55" x2="50" y2="55" stroke="currentColor" strokeWidth="1.5" />
            {/* Keyboard base */}
            <rect x="25" y="75" width="50" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="30" y1="82" x2="70" y2="82" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span>CONTROL TERMINAL v1.0</span>
        </div>
        <button className="terminal-clear-btn" onClick={handleClear} title="Clear history">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* X icon */}
            <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <line x1="75" y1="25" x2="25" y2="75" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="terminal-content" ref={terminalContentRef}>
        {history.length === 0 ? (
          <div className="terminal-empty">
            <p className="terminal-empty-text">[ESPERANDO COMANDOS...]</p>
          </div>
        ) : (
          history.map((entry, idx) => (
            <div key={idx} className="terminal-entry">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">{entry.command}</span>
              </div>
              <div className="terminal-response">{entry.response}</div>
            </div>
          ))
        )}
        {isProcessing && (
          <div className="terminal-entry processing">
            <div className="terminal-response">
              <span className="terminal-blinking">▮</span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="terminal-input-form">
        <span className="terminal-prompt">$</span>
        <input
          ref={inputRef}
          type="text"
          className="terminal-input"
          placeholder="write command here..."
          value={input}
          onChange={handleInputChange}
          disabled={isProcessing}
          autoComplete="off"
          spellCheck="false"
        />
        <button
          type="submit"
          className="terminal-submit-btn"
          disabled={isProcessing || !input.trim()}
          title="Execute command"
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Play/Enter icon */}
            <path d="M 30 20 L 80 50 L 30 80 Z" fill="currentColor" />
          </svg>
        </button>
      </form>

      <div className="terminal-quick-deploy">
        <div className="quick-deploy-title">DESBLOQUEO RÁPIDO (sin comandos)</div>
        <div className="quick-deploy-buttons">
          <button className="quick-btn" onClick={() => handleQuickDeploy('ABOUT')} title="Unlock ABOUT section">
            <svg className="quick-btn-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M 30 70 L 70 70 Q 70 55, 50 55 Q 30 55, 30 70" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>ABOUT</span>
          </button>
          <button className="quick-btn" onClick={() => handleQuickDeploy('PROJECTS')} title="Unlock PROJECTS section">
            <svg className="quick-btn-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="25" width="30" height="35" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="55" y="25" width="30" height="35" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="20" y="65" width="30" height="20" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>PROJECTS</span>
          </button>
          <button className="quick-btn" onClick={() => handleQuickDeploy('SKILLS')} title="Unlock SKILLS section">
            <svg className="quick-btn-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="45" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="65" cy="45" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="20" y="65" width="60" height="15" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>SKILLS</span>
          </button>
          <button className="quick-btn critical" onClick={handleGlobalDeploy} title="Unlock all sections">
            <svg className="quick-btn-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
            </svg>
            <span>DESBLOQUEAR TODO</span>
          </button>
        </div>
      </div>

      <div className="terminal-hints">
        <div className="hint-item">
          <code>help</code> - Ver comando disponibles
        </div>
        <div className="hint-item">
          <code>clear</code> - Limpiar historial
        </div>
      </div>
    </div>
  );
};

export default MainTerminal;
