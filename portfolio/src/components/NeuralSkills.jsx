import React, { useEffect, useRef, useState } from 'react';

const NeuralSkills = ({
  skills = ['Python', 'Django', 'React', 'Vite', 'Docker', 'MySQL', 'APIs REST', 'Git', 'RPA', 'Data Science']
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  
  const dimensionsRef = useRef({ width: 800, height: 500 });
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDimensions = () => {
      dimensionsRef.current = {
        width: container.offsetWidth || 800,
        height: container.offsetHeight || 500
      };
    };
    
    updateDimensions();

    // Reducimos el "radius" de colisión porque ahora solo hay texto
    let physicsNodes = skills.map((skill, i) => ({
      id: i, label: skill,
      x: Math.random() * dimensionsRef.current.width, 
      y: Math.random() * dimensionsRef.current.height,
      vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2,
      radius: 15 // Radio de colisión más pequeño
    }));

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', updateDimensions);

    const animate = () => {
      const mouse = mouseRef.current;
      const { width, height } = dimensionsRef.current; 

      // 1. MOTOR DE COLISIONES (Evita que los textos se superpongan)
      for (let i = 0; i < physicsNodes.length; i++) {
        for (let j = i + 1; j < physicsNodes.length; j++) {
          const n1 = physicsNodes[i];
          const n2 = physicsNodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          
          // Distancia mínima para que los nombres no se crucen
          const minDistance = 60; 

          if (dist < minDistance) {
            const force = (minDistance - dist) / dist;
            const ax = dx * force * 0.05; 
            const ay = dy * force * 0.05; 
            
            n1.vx -= ax;
            n1.vy -= ay;
            n2.vx += ax;
            n2.vy += ay;
          }
        }
      }

      // 2. FUERZAS INDIVIDUALES Y LÍMITES
      physicsNodes.forEach((node) => {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        
        if (dist < 200) {
          node.vx += (dx / dist) * 0.08;
          node.vy += (dy / dist) * 0.08;
        } else {
          node.vx += (Math.random() - 0.5) * 0.15;
          node.vy += (Math.random() - 0.5) * 0.15;
        }

        node.vx *= 0.98;
        node.vy *= 0.98;

        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 1.5) { // Un poco más lentos para que sea fácil leer
          node.vx = (node.vx / speed) * 1.5;
          node.vy = (node.vy / speed) * 1.5;
        }

        node.x += node.vx;
        node.y += node.vy;

        // Margen más pequeño porque no hay círculos grandes
        const padding = 20; 
        if (node.x < padding) { node.x = padding; node.vx *= -1; }
        if (node.x > width - padding) { node.x = width - padding; node.vx *= -1; }
        if (node.y < padding) { node.y = padding; node.vy *= -1; }
        if (node.y > height - padding) { node.y = height - padding; node.vy *= -1; }
      });

      setNodes([...physicsNodes]);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateDimensions);
      cancelAnimationFrame(animationRef.current);
    };
  }, [skills]);

  return (
    <div ref={containerRef} className="neural-skills-container" style={{ width: '100%', minHeight: '450px', height: '50vh', position: 'relative', overflow: 'hidden' }}>
      <svg 
        viewBox={`0 0 ${dimensionsRef.current.width} ${dimensionsRef.current.height}`} 
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
      >
        {/* Renderizar líneas de conexión */}
        {nodes.map((node, i) => 
          nodes.slice(i + 1).map((otherNode, j) => {
            const dist = Math.hypot(otherNode.x - node.x, otherNode.y - node.y);
            if (dist > 160) return null; // Líneas un poco más largas para compensar la falta de círculos
            return (
              <line 
                key={`line-${i}-${j}`} 
                x1={node.x} y1={node.y} 
                x2={otherNode.x} y2={otherNode.y}
                stroke={`rgba(0, 255, 255, ${1 - dist / 160})`} 
                strokeWidth="1" 
                className="neural-line"
              />
            );
          })
        )}
        
        {/* Renderizar Nodos (SOLO TEXTO) */}
        {nodes.map((node) => (
          <g key={node.id} style={{ cursor: 'pointer', transformOrigin: `${node.x}px ${node.y}px` }} className="neural-node-group">
            {/* Pequeño punto central invisible para interacción precisa */}
            <circle 
              cx={node.x} cy={node.y} r={15} 
              fill="transparent" 
            />
            
            {/* Texto Centrado */}
            <text
              x={node.x}
              y={node.y} /* Volvemos a centrarlo en Y */
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#00ffff"
              fontSize="12px" /* Letra ligeramente más grande para compensar */
              fontFamily="monospace"
              fontWeight="bold"
              className="neural-label"
              style={{ 
                textShadow: '0px 2px 4px rgba(0,0,0,0.9), 0px 0px 8px rgba(0,255,255,0.6)',
                transition: 'all 0.3s ease'
              }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default NeuralSkills;