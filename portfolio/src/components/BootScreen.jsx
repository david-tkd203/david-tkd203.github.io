import React, { useEffect, useRef, useState } from 'react';
import hackerLogo from '../assets/images/logo_hacker.png';

/**
 * BootScreen Component
 * Displays a glitched boot sequence on page load
 * Shows logo_hacker.png with aggressive glitch effect
 */
const BootScreen = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const originalImageDataRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const img = new Image();
    img.src = hackerLogo;

    img.onload = () => {
      // Escalar canvas para que sea square y contenga la imagen
      const size = Math.min(window.innerWidth * 0.6, window.innerHeight * 0.6, 400);
      canvas.width = size;
      canvas.height = size;

      // Dibujar imagen centrada
      const x = (size - img.width) / 2;
      const y = (size - img.height) / 2;
      ctx.drawImage(img, x, y);

      // Guardar original
      originalImageDataRef.current = ctx.getImageData(0, 0, size, size);
      setImageLoaded(true);
    };

    // Boot sequence: 3.5 segundos total
    let bootTime = 0;
    const bootDuration = 3500;

    const applyGlitch = () => {
      const canvas = canvasRef.current;
      if (!canvas || !originalImageDataRef.current) return;

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      const original = originalImageDataRef.current;
      const imageData = ctx.createImageData(original);
      imageData.data.set(original.data);

      // Aplicar glitch agresivo (escaneo horizontal)
      const lineHeight = imageData.height;
      const random = Math.random();

      if (random > 0.3) {
        // Glitch intenso: múltiples líneas desplazadas
        for (let line = 0; line < 12; line++) {
          const lineY = Math.floor(Math.random() * lineHeight);
          const offset = Math.floor((Math.random() - 0.5) * 80); // ±40px

          for (let x = 0; x < imageData.width; x++) {
            const sourceX = (x - offset + imageData.width) % imageData.width;
            const sourceIdx = (lineY * imageData.width + sourceX) * 4;
            const targetIdx = (lineY * imageData.width + x) * 4;

            // Separación cromática dramática
            const rLine = Math.floor(Math.random() * lineHeight);
            const bLine = Math.floor(Math.random() * lineHeight);

            if (rLine === lineY) {
              // Canal rojo desplazado
              const rIdx = ((rLine + 5) * imageData.width + x) * 4;
              if (rIdx + 3 < imageData.data.length && sourceIdx + 3 < imageData.data.length) {
                imageData.data[rIdx] = original.data[sourceIdx];
              }
            }

            if (bLine === lineY) {
              // Canal azul desplazado
              const bIdx = ((bLine - 5) * imageData.width + x) * 4;
              if (bIdx + 3 < imageData.data.length && sourceIdx + 3 < imageData.data.length) {
                imageData.data[bIdx + 2] = original.data[sourceIdx + 2];
              }
            }

            // Copiar píxeles desplazados
            if (targetIdx + 3 < imageData.data.length && sourceIdx + 3 < imageData.data.length) {
              imageData.data[targetIdx] = original.data[sourceIdx];
              imageData.data[targetIdx + 1] = original.data[sourceIdx + 1];
              imageData.data[targetIdx + 2] = original.data[sourceIdx + 2];
              imageData.data[targetIdx + 3] = original.data[sourceIdx + 3];
            }
          }
        }
      }

      // Agregar scanlines digitales
      for (let y = 0; y < lineHeight; y += 3) {
        for (let x = 0; x < imageData.width; x++) {
          const idx = (y * imageData.width + x) * 4;
          if (idx + 3 < imageData.data.length) {
            imageData.data[idx + 3] = Math.floor(imageData.data[idx + 3] * 0.7);
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      const progress = bootTime / bootDuration;

      if (imageLoaded) {
        applyGlitch();
      }

      bootTime += 30;

      if (bootTime < bootDuration) {
        setTimeout(animate, 30);
      } else {
        // Fade out
        setIsVisible(false);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }
    };

    if (imageLoaded) {
      animate();
    }
  }, [imageLoaded, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="boot-screen">
      <div className="boot-container">
        <canvas ref={canvasRef} className="boot-canvas" />
        <div className="boot-text">
          <p className="boot-status">&gt; INITIALIZING NEURAL NETWORK...</p>
          <div className="boot-scanlines" />
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
