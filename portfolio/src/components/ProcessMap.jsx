import React, { useRef, useState } from 'react';
import { audioManager } from '../utils/AudioManager';

/**
 * ProcessMap Component - RPA Logical Flow Visualization
 * Visualizes: Scraper -> Python Engine -> PostgreSQL
 * with particle light feedback on RUN_BOT button press
 */
const ProcessMap = () => {
  const svgRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [particles, setParticles] = useState([]);

  const handleRunBot = () => {
    if (isRunning) return;

    setIsRunning(true);
    audioManager.playBeep();
    audioManager.playDataPulse(3, 100);

    // Create particles that travel through the circuit
    const particleTrajectory = [
      { x: 100, y: 250, stage: 'scraper' },
      { x: 300, y: 250, stage: 'engine' },
      { x: 500, y: 250, stage: 'database' }
    ];

    let particleIndex = 0;

    const animateParticle = () => {
      if (particleIndex < particleTrajectory.length) {
        setParticles((prev) => [...prev, particleTrajectory[particleIndex]]);
        audioManager.playScan();
        particleIndex++;
        setTimeout(animateParticle, 600);
      } else {
        setTimeout(() => {
          setIsRunning(false);
          setParticles([]);
        }, 1000);
      }
    };

    animateParticle();
  };

  return (
    <div className="process-map-container">
      <div className="process-map-header">
        <h3>RPA PROCESS MAP</h3>
        <p className="process-subtitle">Data Flow Visualization</p>
      </div>

      <svg
        ref={svgRef}
        className="process-map-svg"
        viewBox="0 0 600 500"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Líneas de conexión */}
        <g className="process-connections">
          <line x1="150" y1="250" x2="350" y2="250" className="connection-line" />
          <line x1="450" y1="250" x2="550" y2="250" className="connection-line" />
        </g>

        {/* Nodo 1: Web Scraper */}
        <g className="process-node">
          <circle cx="100" cy="250" r="45" className="node-circle scraper-node" />
          <text x="100" y="240" className="node-label">
            WEB
          </text>
          <text x="100" y="260" className="node-label">
            SCRAPER
          </text>
        </g>

        {/* Nodo 2: Python Engine */}
        <g className="process-node">
          <circle cx="300" cy="250" r="45" className="node-circle engine-node" />
          <text x="300" y="240" className="node-label">
            PYTHON
          </text>
          <text x="300" y="260" className="node-label">
            ENGINE
          </text>
        </g>

        {/* Nodo 3: Database */}
        <g className="process-node">
          <circle cx="500" cy="250" r="45" className="node-circle database-node" />
          <text x="500" y="240" className="node-label">
            DATA
          </text>
          <text x="500" y="260" className="node-label">
            STORE
          </text>
        </g>

        {/* Partículas animadas */}
        {particles.map((particle, idx) => (
          <g key={idx} className="animated-particle">
            <circle
              cx={particle.x}
              cy={particle.y}
              r="8"
              className="particle-glow"
              style={{
                animation: `particleTravel 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`
              }}
            />
          </g>
        ))}
      </svg>

      {/* Control Button */}
      <div className="process-control">
        <button
          className={`run-bot-btn ${isRunning ? 'running' : ''}`}
          onClick={handleRunBot}
          disabled={isRunning}
        >
          {isRunning ? '⚙ RUNNING...' : '▶ RUN_BOT'}
        </button>
      </div>

      {/* Status Display */}
      <div className="process-status">
        <div className="status-line">
          {isRunning ? (
            <>
              <span className="status-indicator running">●</span>
              <span>PROCESSING DATA_STREAM...</span>
            </>
          ) : (
            <>
              <span className="status-indicator idle">●</span>
              <span>IDLE - PRESS RUN TO INITIATE</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessMap;
