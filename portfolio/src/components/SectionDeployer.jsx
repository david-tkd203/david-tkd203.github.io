import React, { useEffect, useRef, useState } from 'react';
import { audioManager } from '../utils/AudioManager';

/**
 * SectionDeployer Component
 * Intercepts scroll to show code compilation animation
 * before revealing the actual section content
 */
const SectionDeployer = ({ sectionName = 'SECTION', children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [deployLines, setDeployLines] = useState([]);
  const [isDeployed, setIsDeployed] = useState(false);
  const containerRef = useRef(null);

  // IntersectionObserver to detect when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Simulate terminal deployment when section becomes visible
  useEffect(() => {
    if (!isVisible || isDeployed) return;

    const deploymentLines = [
      '> [SYS] INITIATING SEC_BOOT...',
      '> FETCHING DATA_CHUNKS...',
      '> COMPILING ASSETS...',
      `> run deploy --section ${sectionName}`
    ];

    let currentLineIndex = 0;

    const deployLine = () => {
      if (currentLineIndex < deploymentLines.length) {
        audioManager.playClick();
        setDeployLines((prev) => [...prev, deploymentLines[currentLineIndex]]);
        currentLineIndex++;
        setTimeout(deployLine, 150);
      } else {
        // All lines deployed, wait 300ms then mark as deployed
        setTimeout(() => {
          audioManager.playScan();
          setIsDeployed(true);
        }, 300);
      }
    };

    deployLine();
  }, [isVisible, isDeployed, sectionName]);

  // Render terminal output
  if (!isDeployed) {
    return (
      <div ref={containerRef} className="section-deployer-terminal">
        <div className="terminal-content">
          {deployLines.map((line, idx) => (
            <div key={idx} className="terminal-line">
              {line}
            </div>
          ))}
          {!isDeployed && deployLines.length > 0 && (
            <div className="terminal-cursor">_</div>
          )}
        </div>
      </div>
    );
  }

  // Render deployed content with reveal animation
  return (
    <div ref={containerRef} className="section-deployer-content">
      <div className="content-reveal">{children}</div>
    </div>
  );
};

export default SectionDeployer;
