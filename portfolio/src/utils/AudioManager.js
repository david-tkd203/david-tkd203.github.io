/**
 * CyberAudio - Web Audio API Manager
 * Singleton para gestionar todos los sonidos de la Bionic Workstation
 * Cyberware sound effects sin librerías externas
 */

class CyberAudio {
  constructor() {
    this.audioCtx = null;
    this.masterGain = null;
    this.isInitialized = false;
    this.volume = 0.15; // Volumen por defecto: 15%
  }

  /**
   * Inicializa AudioContext en primera interacción (autoplay policy)
   */
  init() {
    if (this.isInitialized) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.connect(this.audioCtx.destination);
      this.masterGain.gain.value = this.volume;
      this.isInitialized = true;
    } catch (error) {
      console.warn('AudioContext not available:', error);
    }
  }

  /**
   * playClick() - Sonido de click (UI feedback)
   * Square wave: 150Hz → 40Hz sobre 50ms
   */
  playClick() {
    if (!this.isInitialized) return;

    const now = this.audioCtx.currentTime;
    const duration = 0.05; // 50ms

    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + duration);

    gainNode.gain.setValueAtTime(0.1, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

    osc.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration);
  }

  /**
   * playScan() - Sonido de escaneo AR
   * Sawtooth wave: 800Hz → 1200Hz sobre 200ms
   */
  playScan() {
    if (!this.isInitialized) return;

    const now = this.audioCtx.currentTime;
    const duration = 0.2; // 200ms

    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.linearRampToValueAtTime(1200, now + duration);

    filter.type = 'lowpass';
    filter.frequency.value = 3000;

    gainNode.gain.setValueAtTime(0.08, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration);
  }

  /**
   * playGlitch() - Sonido de glitch/aberración
   * White noise con highpass filter por 150ms
   */
  playGlitch() {
    if (!this.isInitialized) return;

    const now = this.audioCtx.currentTime;
    const duration = 0.15; // 150ms

    // Crear white noise con AudioBuffer
    const bufferSize = this.audioCtx.sampleRate * duration;
    const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      noiseData[i] = Math.random() * 2 - 1; // -1 a 1
    }

    const source = this.audioCtx.createBufferSource();
    const gainNode = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    source.buffer = noiseBuffer;
    filter.type = 'highpass';
    filter.frequency.value = 2000;

    gainNode.gain.setValueAtTime(0.08, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    source.start(now);
    source.stop(now + duration);
  }

  /**
   * playBeep() - Sonido de beep puro
   * Sine wave a 1000Hz por 80ms
   */
  playBeep() {
    if (!this.isInitialized) return;

    const now = this.audioCtx.currentTime;
    const duration = 0.08; // 80ms

    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.value = 1000;

    gainNode.gain.setValueAtTime(0.1, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

    osc.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration);
  }

  /**
   * playDataPulse() - Secuencia de beeps para eventos de datos
   * Toca múltiples beeps con delay entre ellos
   * @param {number} count - Cantidad de beeps (default: 3)
   * @param {number} delay - Delay entre beeps en ms (default: 100)
   */
  playDataPulse(count = 3, delay = 100) {
    if (!this.isInitialized) return;

    const delaySeconds = delay / 1000;
    const now = this.audioCtx.currentTime;

    for (let i = 0; i < count; i++) {
      const startTime = now + i * delaySeconds;
      const duration = 0.06; // 60ms por beep

      const osc = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.value = 1200; // Frecuencia más alta para data pulse
      osc.frequency.setValueAtTime(1200, startTime);
      osc.frequency.exponentialRampToValueAtTime(800, startTime + duration);

      gainNode.gain.setValueAtTime(0.08, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

      osc.connect(gainNode);
      gainNode.connect(this.masterGain);

      osc.start(startTime);
      osc.stop(startTime + duration);
    }
  }

  /**
   * playStaticHum() - Sonido de zumbido estático
   * Ruido blanco modulado para hover prolongado
   * Duración: 500ms
   */
  playStaticHum() {
    if (!this.isInitialized) return;

    const now = this.audioCtx.currentTime;
    const duration = 0.5; // 500ms

    // Crear white noise
    const bufferSize = this.audioCtx.sampleRate * duration;
    const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }

    const source = this.audioCtx.createBufferSource();
    const gainNode = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();
    const lfo = this.audioCtx.createOscillator(); // Modulador LFO
    const lfoGain = this.audioCtx.createGain();

    source.buffer = noiseBuffer;
    filter.type = 'lowpass';
    filter.frequency.value = 2500;

    lfo.type = 'sine';
    lfo.frequency.value = 3; // 3Hz modulation
    lfoGain.gain.value = 500; // Rango de modulación

    gainNode.gain.setValueAtTime(0.06, now);
    gainNode.gain.exponentialRampToValueAtTime(0.02, now + duration);

    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    source.start(now);
    source.stop(now + duration);
    lfo.start(now);
    lfo.stop(now + duration);
  }

  /**
   * Controla el volumen general
   * @param {number} value - Volumen 0 a 1
   */
  setVolume(value) {
    if (value < 0) value = 0;
    if (value > 1) value = 1;
    this.volume = value;
    if (this.masterGain) {
      this.masterGain.gain.value = value;
    }
  }

  /**
   * Silencia el audio
   */
  mute() {
    if (this.masterGain) {
      this.masterGain.gain.value = 0;
    }
  }

  /**
   * Restaura el volumen anterior
   */
  unmute() {
    if (this.masterGain) {
      this.masterGain.gain.value = this.volume;
    }
  }

  /**
   * Obtiene el estado del AudioContext
   */
  getState() {
    return {
      initialized: this.isInitialized,
      state: this.audioCtx ? this.audioCtx.state : 'not-initialized',
      volume: this.volume,
    };
  }
}

// Singleton export
export const audioManager = new CyberAudio();
