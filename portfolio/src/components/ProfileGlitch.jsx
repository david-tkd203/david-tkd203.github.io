import React, { useEffect, useRef } from 'react';
import { audioManager } from '../utils/AudioManager';
import hackerLogo from '../assets/images/logo_hacker.png';

/**
 * ProfileGlitch Component
 * Canvas-based profile image with chromatic aberration glitch effect
 * Hover to trigger red/blue color separation with audio feedback
 */
const ProfileGlitch = ({ imageUrl = hackerLogo }) => {
  const canvasRef = useRef(null);
  const originalImageDataRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      // Guardar referencia a la imagen
      imageRef.current = img;

      // Canvas fijo: 250x250px
      const canvasSize = 250;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      // Dibujar imagen escalada al canvas
      ctx.drawImage(img, 0, 0, canvasSize, canvasSize);

      // Guardar copia del ImageData original
      const original = ctx.getImageData(0, 0, canvasSize, canvasSize);
      // Crear COPIA del buffer de datos
      originalImageDataRef.current = ctx.createImageData(original);
      originalImageDataRef.current.data.set(original.data);
    };

    img.onerror = () => {
      console.warn(`Failed to load image: ${imageUrl}`);
    };

    // Cargar imagen
    img.src = imageUrl;
  }, [imageUrl]);

  /**
   * Aplica efecto hacker glitch - scanlines aleatorias con desplazamiento de color
   * Similar al efecto de distorsión de terminal
   */
  const applyGlitch = () => {
    const canvas = canvasRef.current;
    if (!canvas || !originalImageDataRef.current) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Obtener datos originales
    const original = originalImageDataRef.current;
    const originalData = original.data;

    // Crear nuevo ImageData para el glitch
    const glitched = ctx.createImageData(width, height);
    const glitchData = glitched.data;

    // Copiar datos originales como base
    glitchData.set(originalData);

    // Crear glitch por líneas aleatorias (scanline glitch)
    const glitchStrength = Math.random() > 0.5 ? 8 : 12; // Variación aleatoria
    const glitchLines = Math.floor(Math.random() * 8) + 4; // 4-11 líneas glitch

    // Generar líneas aleatorias que sufren glitch
    for (let lineNum = 0; lineNum < glitchLines; lineNum++) {
      const glitchY = Math.floor(Math.random() * height);
      const offsetAmount = (Math.random() - 0.5) * glitchStrength; // -glitchStrength/2 a +glitchStrength/2

      // Desplazar píxeles en esa línea
      for (let x = 0; x < width; x++) {
        const idx = (glitchY * width + x) * 4;
        const sourceX = Math.max(0, Math.min(width - 1, x + Math.round(offsetAmount)));
        const sourceIdx = (glitchY * width + sourceX) * 4;

        // Copiar píxeles desplazados
        glitchData[idx] = originalData[sourceIdx];
        glitchData[idx + 1] = originalData[sourceIdx + 1];
        glitchData[idx + 2] = originalData[sourceIdx + 2];
        glitchData[idx + 3] = originalData[sourceIdx + 3];
      }
    }

    // Agregar distorsión cromática adicional en líneas aleatorias
    for (let lineNum = 0; lineNum < 3; lineNum++) {
      const chromaY = Math.floor(Math.random() * height);
      const rOffset = Math.floor(Math.random() * 6) - 3; // -3 a +3
      const bOffset = Math.floor(Math.random() * 6) - 3;

      for (let x = rOffset; x < width; x++) {
        const idx = (chromaY * width + x) * 4;
        const sourceIdxR = (chromaY * width + (x - rOffset)) * 4;
        const sourceIdxB = (chromaY * width + (x + bOffset)) * 4;

        if (sourceIdxR >= 0 && sourceIdxR < originalData.length) {
          glitchData[idx] = originalData[sourceIdxR]; // R
        }
        if (sourceIdxB >= 0 && sourceIdxB < originalData.length) {
          glitchData[idx + 2] = originalData[sourceIdxB + 2]; // B
        }
      }
    }

    // Mostrar glitch
    ctx.putImageData(glitched, 0, 0);
  };

  /**
   * Restaurar imagen original
   */
  const restoreImage = () => {
    const canvas = canvasRef.current;
    if (!canvas || !originalImageDataRef.current) return;

    const ctx = canvas.getContext('2d');
    // Restaurar con copia del original guardado
    ctx.putImageData(originalImageDataRef.current, 0, 0);
  };

  /**
   * Handler: Mouse Enter
   */
  const handleMouseEnter = () => {
    if (!originalImageDataRef.current) return;

    applyGlitch();
    audioManager.playClick();
  };

  /**
   * Handler: Mouse Leave
   */
  const handleMouseLeave = () => {
    if (!originalImageDataRef.current) return;

    restoreImage();
  };

  return (
    <div className="profile-glitch-wrapper">
      <canvas
        ref={canvasRef}
        className="profile-glitch-canvas"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="img"
        aria-label="Profile image with glitch effect"
      />
    </div>
  );
};

export default ProfileGlitch;
