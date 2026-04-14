import React, { useEffect, useRef } from 'react';

/**
 * NeuralSkills Component
 * SVG-based skill network with physics simulation
 * Nodes attract to each other AND follow mouse
 */
const NeuralSkills = ({
  skills = [
    'Python', 'Django', 'React', 'Vite', 'Docker',
    'MySQL', 'APIs REST', 'Git', 'RPA', 'Data Science'
  ]
}) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const nodesRef = useRef([]);
  const dimensionsRef = useRef({ width: 800, height: 500 });
  const mouseRef = useRef({ x: 400, y: 250 });
  const animationRef = useRef(null);

  // Inicializar nodos con posiciones aleatorias
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detectar dimensiones
    const width = container.offsetWidth || 800;
    const height = container.offsetHeight || 500;
    dimensionsRef.current = { width, height };

    // Crear nodos
    const newNodes = skills.map((skill, i) => ({
      id: i,
      label: skill,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      mass: 1,
      radius: 25,
      color: `hsl(${200 + i * 20}, 100%, 50%)`
    }));

    nodesRef.current = newNodes;

    // Track mouse movement
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Physics animation loop
    const animate = () => {
      const nodes = nodesRef.current;
      const { width, height } = dimensionsRef.current;
      const mouse = mouseRef.current;

      // Aplicar fuerzas entre nodos (atracción/repulsión)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const minDistance = 80;
          const maxDistance = 250;

          // Repulsión fuerte a corta distancia
          const repulsion = distance < minDistance ? (minDistance - distance) * 0.3 : 0;
          
          // Atracción media a larga distancia
          const attraction = distance > maxDistance ? 0 : (1 - distance / maxDistance) * 0.08;

          const force = repulsion - attraction;

          const fx = (dx / distance) * force;
          const fy = (dy / distance) * force;

          nodes[i].vx -= fx * 0.1;
          nodes[i].vy -= fy * 0.1;
          nodes[j].vx += fx * 0.1;
          nodes[j].vy += fy * 0.1;
        }

        // Atracción hacia el mouse (gravity point)
        const mouseX = mouse.x || width / 2;
        const mouseY = mouse.y || height / 2;
        const dmx = mouseX - nodes[i].x;
        const dmy = mouseY - nodes[i].y;
        const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy) || 1;
        const mouseForce = (1 - Math.min(mouseDist / 300, 1)) * 0.15;

        nodes[i].vx += (dmx / mouseDist) * mouseForce;
        nodes[i].vy += (dmy / mouseDist) * mouseForce;
      }

      // Actualizar posiciones y aplicar límites
      nodes.forEach(node => {
        // Fricción reducida para movimiento más fluido
        node.vx *= 0.96;
        node.vy *= 0.96;

        // Actualizar posición
        node.x += node.vx;
        node.y += node.vy;

        // Rebotar en bordes con menos energía
        const padding = node.radius + 5;
        if (node.x - padding < 0) {
          node.x = padding;
          node.vx *= -0.6;
        }
        if (node.x + padding > width) {
          node.x = width - padding;
          node.vx *= -0.6;
        }
        if (node.y - padding < 0) {
          node.y = padding;
          node.vy *= -0.6;
        }
        if (node.y + padding > height) {
          node.y = height - padding;
          node.vy *= -0.6;
        }
      });

      renderNetwork();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Resize handler
    const handleResize = () => {
      if (container) {
        const newWidth = container.offsetWidth || 800;
        const newHeight = container.offsetHeight || 500;
        dimensionsRef.current = { width: newWidth, height: newHeight };
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [skills]);

  /**
   * Renderizar red de nodos
   */
  const renderNetwork = () => {
    const svg = svgRef.current;
    if (!svg) return;

    const nodes = nodesRef.current;

    // Limpiar SVG
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    // Dibujar conexiones (líneas)
    const linesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    linesGroup.setAttribute('class', 'neural-connections');

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 250;

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance;
          
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', nodes[i].x);
          line.setAttribute('y1', nodes[i].y);
          line.setAttribute('x2', nodes[j].x);
          line.setAttribute('y2', nodes[j].y);
          line.setAttribute('stroke', `rgba(0, 255, 255, ${opacity * 0.5})`);
          line.setAttribute('stroke-width', '1.5');
          line.setAttribute('class', 'neural-line');

          linesGroup.appendChild(line);
        }
      }
    }

    svg.appendChild(linesGroup);

    // Dibujar nodos (círculos)
    const nodesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    nodesGroup.setAttribute('class', 'neural-nodes');

    nodes.forEach(node => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      // Círculo de brillo
      const glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', node.x);
      glow.setAttribute('cy', node.y);
      glow.setAttribute('r', node.radius + 8);
      glow.setAttribute('fill', 'none');
      glow.setAttribute('stroke', 'rgba(0, 255, 255, 0.3)');
      glow.setAttribute('stroke-width', '2');
      glow.setAttribute('class', 'node-glow');

      g.appendChild(glow);

      // Nodo principal
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', node.x);
      circle.setAttribute('cy', node.y);
      circle.setAttribute('r', node.radius);
      circle.setAttribute('fill', 'rgba(5, 5, 8, 0.85)');
      circle.setAttribute('stroke', 'rgba(0, 255, 255, 0.7)');
      circle.setAttribute('stroke-width', '2.5');
      circle.setAttribute('class', 'neural-node');

      circle.style.cursor = 'pointer';
      circle.addEventListener('mouseenter', () => {
        circle.setAttribute('r', node.radius + 6);
        circle.setAttribute('stroke', 'rgba(184, 0, 255, 1)');
        circle.setAttribute('stroke-width', '3.5');
        circle.setAttribute('filter', 'drop-shadow(0 0 15px rgba(184, 0, 255, 0.7))');
      });
      circle.addEventListener('mouseleave', () => {
        circle.setAttribute('r', node.radius);
        circle.setAttribute('stroke', 'rgba(0, 255, 255, 0.7)');
        circle.setAttribute('stroke-width', '2.5');
        circle.setAttribute('filter', 'none');
      });

      g.appendChild(circle);

      // Texto (label)
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', node.x);
      text.setAttribute('y', node.y);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dominant-baseline', 'middle');
      text.setAttribute('fill', '#00ffff');
      text.setAttribute('font-family', '"Fira Code", monospace');
      text.setAttribute('font-size', '11px');
      text.setAttribute('font-weight', 'bold');
      text.setAttribute('pointer-events', 'none');
      text.setAttribute('class', 'neural-label');
      text.textContent = node.label;

      g.appendChild(text);

      nodesGroup.appendChild(g);
    });

    svg.appendChild(nodesGroup);
  };

  return (
    <div ref={containerRef} className="neural-skills-container">
      <svg
        ref={svgRef}
        className="neural-skills-svg"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
      />
    </div>
  );
};

export default NeuralSkills;
