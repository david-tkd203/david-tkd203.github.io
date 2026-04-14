import React, { createContext, useContext, useState, useCallback } from 'react';
import { audioManager } from '../utils/AudioManager';

/**
 * CommandCenterContext
 * Manage section access control and terminal commands
 * Architecture: State-based access control with regex command parsing
 */
const CommandCenterContext = createContext();

export const CommandCenterProvider = ({ children }) => {
  const [deployedSections, setDeployedSections] = useState({
    ABOUT: false,
    PROJECTS: false,
    SKILLS: false
  });

  const [commandHistory, setCommandHistory] = useState([
    '> SYSTEM INITIALIZED - AWAITING COMMANDS...',
    '> Type "help" for available commands'
  ]);

  /**
   * Execute command with regex pattern matching
   * Supports:
   * - run deploy --section [SECTION_NAME]
   * - run deploy --global
   * - whoami / about / projects / skills / experience / contact
   * - help / clear
   * - hack (easter egg)
   */
  const executeCommand = useCallback((cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response = '';

    // Regex patterns
    const sectionPattern = /^run deploy --section ([A-Z_]+)$/i;
    const globalPattern = /^run deploy --global$/i;

    // Match section deploy
    if (sectionPattern.test(trimmedCmd)) {
      const match = trimmedCmd.match(sectionPattern);
      const sectionName = match[1].toUpperCase();

      if (sectionName in deployedSections) {
        setDeployedSections((prev) => ({
          ...prev,
          [sectionName]: true
        }));
        response = `[OK] DECRYPTING SECTION: ${sectionName}...`;
        audioManager.playScan();
      } else {
        response = `[ERROR] SECTION "${sectionName}" NOT FOUND`;
        audioManager.playGlitch();
      }
    }
    // Match global deploy
    else if (globalPattern.test(trimmedCmd)) {
      setDeployedSections((prev) => ({
        ABOUT: true,
        PROJECTS: true,
        SKILLS: true
      }));
      response = '[WARNING] GLOBAL OVERRIDE INITIATED... All sections unlocked.';
      audioManager.playScan();
      audioManager.playBeep();
    }
    // whoami command
    else if (trimmedCmd === 'whoami') {
      response = `
                                         ~                                                                      
██████╗  █████╗ ██╗   ██╗██╗██████╗  ███╗   ██╗ █████╗ ███╗   ██╗ ██████╗██╗   ██╗██╗     ███████╗ ██████╗ 
██╔══██╗██╔══██╗██║   ██║██║██╔══██╗ ████╗  ██║██╔══██╗████╗  ██║██╔════╝██║   ██║██║     ██╔════╝██╔═══██╗
██║  ██║███████║██║   ██║██║██║  ██║ ██╔██╗ ██║███████║██╔██╗ ██║██║     ██║   ██║██║     █████╗  ██║   ██║
██║  ██║██╔══██║╚██╗ ██╔╝██║██║  ██║ ██║╚██╗██║██╔══██║██║╚██╗██║██║     ██║   ██║██║     ██╔══╝  ██║   ██║
██████╔╝██║  ██║ ╚████╔╝ ██║██████╔╝ ██║ ╚████║██║  ██║██║ ╚████║╚██████╗╚██████╔╝███████╗███████╗╚██████╔╝
╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═════╝  ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝╚══════╝ ╚═════╝ 

════════════════════════════════════════════════════════════════════════════════════════════════════════════
RPA Developer | Full-Stack Dev | Automation Specialist
════════════════════════════════════════════════════════════════════════════════════════════════════════════`;
      audioManager.playBeep();
    }
    // about command
    else if (trimmedCmd === 'about') {
      response = `╔════════════════════════════════════════╗
║                                        ║
║   ███████╗██╗     ███████╗  ██████╗   ║
║   ██╔════╝██║     ██╔════╝ ██╔════╝   ║
║   █████╗  ██║     █████╗   ██║  ███╗  ║
║   ██╔══╝  ██║     ██╔══╝   ██║   ██║  ║
║   ██║     ███████╗███████╗╚██████╔╝  ║
║   ╚═╝     ╚══════╝╚══════╝ ╚═════╝   ║
║                                        ║
║         [CLASSIFIED - ACCESS GRANTED]  ║
║                                        ║
╚════════════════════════════════════════╝

Ingeniero Civil Informático especializado en RPA, Automatización y 
Desarrollo Full Stack. Experiencia en soluciones empresariales con 
Rocketbot, Python y tecnologías modernas.

✓ Desarrollo RPA avanzado (Rocketbot, Power Automate)
✓ Backend con Python (Django, Flask)
✓ Frontend con React + TypeScript + Vite
✓ Contenedorización con Docker
✓ Integración de APIs REST y pipelines CI/CD
✓ Web Scraping y automatización de procesos

Ubicación: Santiago, Chile
Estado: Disponible para proyectos remotos/presenciales
Último rol: Desarrollador RPA Semi Senior (Seidor/CCU)`;
      audioManager.playDataPulse();
    }
    // projects command
    else if (trimmedCmd === 'projects') {
      response = `╔════════════════════════════════════════╗
║        PORTAFOLIO TÉCNICO - v2.5        ║
╚════════════════════════════════════════╝

[1] HMED - Plataforma Médica Integral
    Tech: React + TypeScript + Medical
    GitHub: github.com/david-tkd203/hmed
    Status: Producción ✓

[2] Sistema de Auditoría ISO 27001
    Tech: VBA + Python + Excel
    Features: CRUD dinámico, análisis de riesgos
    Status: Activo ✓

[3] Sistema Evaluación Taekwondo
    Tech: Python + OpenCV + MediaPipe + PyQt5
    Features: Visión por computador, análisis 3D
    Status: Showcase ✓

[4] Análisis Narcotráfico en X
    Tech: Python + Data Analysis + SQL
    Features: Motor de búsqueda, 10k+ registros
    Status: Award-winning ✓

[5] Gestión de Personas Full Stack
    Tech: React + TypeScript + Flask + MySQL
    Features: CRUD, autenticación, reportes
    Status: Producción ✓

[6] Instagram Unfollower Tool
    Tech: Python + Selenium + Automation
    Status: Activo ✓

[7] Poke API Web
    Tech: Django + Python + REST API
    Status: Demostración ✓`;
      audioManager.playScan();
    }
    // skills command
    else if (trimmedCmd === 'skills') {
      response = `╔════════════════════════════════════════╗
║          STACK TECNOLÓGICO - v3.2       ║
╚════════════════════════════════════════╝

RPA & AUTOMATIZACIÓN
  ├─ Rocketbot (Expert)
  ├─ Power Automate Cloud/Desktop
  ├─ Web Scraping (XPath dinámicos)
  ├─ Desktop Recorder (Pixel-perfect)
  └─ UiPath (Conocimiento)

BACKEND DEVELOPMENT
  ├─ Python 3.x (Advanced)
  ├─ Django / Flask
  ├─ Node.js / Express
  ├─ APIs REST (Requests, aiohttp)
  ├─ MySQL / SQL Server
  ├─ Docker & Docker Compose
  └─ Jenkins CI/CD

FRONTEND DEVELOPMENT
  ├─ React 18+ / React 19
  ├─ TypeScript
  ├─ Vite (Module bundling)
  ├─ CSS Vanilla (Zero frameworks)
  ├─ Canvas API & SVG
  ├─ Web Audio API
  └─ Bootstrap-icons

DATA & AUTOMATION
  ├─ Pandas (Data processing)
  ├─ Selenium (Web automation)
  ├─ OpenCV (Computer vision)
  ├─ MediaPipe (AI/ML)
  └─ SQL Server (Advanced queries)

DEVOPS & TOOLS
  ├─ Docker (Containerization)
  ├─ Git & GitHub
  ├─ Linux (Ubuntu management)
  ├─ Jenkins (Pipeline automation)
  ├─ VBA (Excel automation)
  └─ Chromedriver management

CERTIFICACIONES
  ├─ Ingeniería Civil Informática (UFT)
  ├─ Licenciado en Cc. Ingeniería (UFT)
  └─ Fullstack Developer (Coder House - En curso)`;
      audioManager.playClick();
    }
    // experience command
    else if (trimmedCmd === 'experience') {
      response = `╔════════════════════════════════════════╗
║          HISTORIAL LABORAL - 2024/2025  ║
╚════════════════════════════════════════╝

[ACTUAL] DESARROLLADOR RPA SEMI SENIOR
Company: Seidor (Subcontrato CCU)
Period: Enero 2025 - Marzo 2025
Responsibilities:
  • Mantenimiento evolutivo y correctivo de bots críticos
  • Gestión de circulación de cajas en Odoo
  • Integración de APIs REST (Python + Requests)
  • Pipelines CI/CD en Jenkins (Jinja2)
  • Ejecución de bots en Linux (Ubuntu) y Windows
  • Docker & Docker Compose para procesos automatizados
  • Prácticas avanzadas en Python (PEP 8, .env, Git)

[ANTERIOR] DESARROLLADOR RPA
Company: Kabeli
Period: Abril 2024 - Dic 2024
Responsibilities:
  • Soluciones para línea hotelera (Perú)
  • Captura de datos: Outlook, Expedia, SynXis
  • Flujos RPA con Rocketbot + Web Scraping
  • Power Automate Cloud Flows
  • Optimización: 50 registros en 30 minutos
  • Automatización de licencias médicas
  • Planificación con sprints semanales
  • Control de versiones Git

EDUCACIÓN CONTINUA
  ├─ Ingeniería Civil Informática (UFT) - Egresado 2025
  ├─ Fullstack Developer Bootcamp (Coder House) - En progreso
  └─ Aprendizaje autónomo en nuevas tecnologías`;
      audioManager.playBeep();
    }
    // contact command
    else if (trimmedCmd === 'contact') {
      response = `╔════════════════════════════════════════╗
║       INFORMACIÓN DE CONTACTO - v1.1    ║
╚════════════════════════════════════════╝

📧 EMAIL
    david.203.52@gmail.com

📱 TELÉFONO
    +56 9 9505 2746

🌍 UBICACIÓN
    Santiago de Chile
    Disponible para: Remote | Presencial | Híbrido

🐙 GITHUB
    github.com/david-tkd203

💼 LINKEDIN
    linkedin.com/in/davidnanculeo (Actualizar)

🌐 PORTFOLIO WEB
    En desarrollo con esta plataforma cyberpunk

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Disponible para:
  • Proyectos RPA empresariales
  • Desarrollo Full Stack
  • Consultoría en automatización
  • Colaboraciones open-source
  
Respondo en 24-48 horas
Horario: Lunes a Viernes, 9AM - 6PM (CLT)`;
      audioManager.playDataPulse();
    }
    // Help command
    else if (trimmedCmd === 'help') {
      response = `┌─────────────────────────────────────────┐
│      COMANDOS DISPONIBLES - v1.0        │
└─────────────────────────────────────────┘

DESBLOQUEO & CONTROL
[1] run deploy --section ABOUT → Desbloquea ABOUT
[2] run deploy --section PROJECTS → Desbloquea PROJECTS
[3] run deploy --section SKILLS → Desbloquea SKILLS
[4] run deploy --global → Desbloquea TODAS las secciones

INFORMACIÓN & NAVEGACIÓN
[5] whoami → Información de identificación
[6] about → Perfil profesional clasificado
[7] projects → Portafolio técnico
[8] skills → Stack tecnológico
[9] experience → Historial laboral
[10] contact → Información de contacto

UTILIDADES
[11] clear → Limpia el historial
[12] help → Muestra este mensaje

EASTER EGG 🎯
[?] hack → Acceso al sistema... ¿Qué pasará?

┌─────────────────────────────────────────┐
│   💡 Tip: Usa InfoHub (botón flotante)  │
│      para desbloquear sin comandos      │
└─────────────────────────────────────────┘`;
      audioManager.playClick();
    }
    // Clear command
    else if (trimmedCmd === 'clear') {
      audioManager.playClick();
      return null; // Signal to clear without adding to history
    }
    // hack command (Easter Egg)
    else if (trimmedCmd === 'hack') {
      response = `[⚠️  INTRUDER ALERT ⚠️]
[🔓 SISTEMA COMPROMETIDO]
[🌀 INICIANDO DISTORSIÓN VISUAL]
[💀 Enjoy the show... 💀]`;
      audioManager.playGlitch();
      audioManager.playStaticHum();
      // Signal to MainTerminal to apply glitch effect
      return response + '\n__GLITCH__';
    }
    // Unknown command
    else {
      response = `[ERROR] COMANDO NO RECONOCIDO: "${trimmedCmd}"\nEscribe "help" para ver comandos disponibles.`;
      audioManager.playGlitch();
    }

    return response;
  }, [deployedSections]);

  const addCommandToHistory = useCallback((command, response) => {
    setCommandHistory((prev) => [
      ...prev,
      `> ${command}`,
      ...(response ? [response] : [])
    ]);
  }, []);

  const clearHistory = useCallback(() => {
    setCommandHistory(['> TERMINAL CLEARED']);
  }, []);

  return (
    <CommandCenterContext.Provider
      value={{
        deployedSections,
        commandHistory,
        executeCommand,
        addCommandToHistory,
        clearHistory
      }}
    >
      {children}
    </CommandCenterContext.Provider>
  );
};

/**
 * Hook to consume CommandCenterContext
 */
export const useCommandCenter = () => {
  const context = useContext(CommandCenterContext);
  if (!context) {
    throw new Error('useCommandCenter must be used within CommandCenterProvider');
  }
  return context;
};
