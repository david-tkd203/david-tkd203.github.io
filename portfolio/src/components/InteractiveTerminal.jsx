import { useState, useRef, useEffect } from 'react'

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [history, setHistory] = useState([
    '> Terminal v1.0 | Type "help" for commands',
  ])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef(null)

  const commands = {
    help: `Available commands:
  cat hmed           - View HMED Project Details
  cat secureot       - View SecureOT Automation
  cat fullstack      - View Full Stack Experience
  run skills         - Show all skills
  run projects       - List projects
  run contact        - Show contact info
  clear              - Clear terminal
  help               - Show this message`,

    'cat hmed': `═══════════════════════════════════════
  PROYECTO: HMED - Sistema de Historial Clínico
═══════════════════════════════════════
  
  Rol: Backend Developer & RPA Architect
  Duración: 18 meses
  Stack: Python | Django | RPA | Selenium
  
  Descripción:
  Sistema de automatización de historiales médicos
  electrónicos conectado a integraciones SURA.
  
  Logros:
  • Automatización de 10.000+ registros/mes
  • Reducción 85% de tiempo manual
  • API REST para 50+ consultorios
  • Sincronización en tiempo real con SURA
  • Manejo seguro de datos HIPAA
  
  Tecnologías Clave:
  • Web Scraping con Selenium
  • Procesamiento async con Celery
  • PostgreSQL con 2M+ registros
  • Docker para deployment
  • Jenkins CI/CD pipeline`,

    'cat secureot': `═══════════════════════════════════════
  PROYECTO: SecureOT - Automatización Industrial
═══════════════════════════════════════
  
  Rol: Rocketbot Developer & Python Specialist
  Duración: 12 meses
  Stack: Rocketbot | Python | Power Automate | SQL
  
  Descripción:
  Automatización de procesos críticos en ambiente
  industrial con protocolos de seguridad OT.
  
  Logros:
  • 45+ bots automatizando procesos
  • Integración con sistemas SCADA
  • Reducción costos operacionales 60%
  • Monitoreo real-time con alertas
  • Zero downtime en switches
  
  Tecnologías Clave:
  • Rocketbot Studio Pro
  • Power Automate Cloud
  • SQL Server (2M+ transacciones/día)
  • Chrome Remote Protocol
  • Webhook integrations`,

    'cat fullstack': `═══════════════════════════════════════
  EXPERIENCIA: Full Stack Development
═══════════════════════════════════════
  
  Frontend:
  • React 19.2.4 con Hooks & Context API
  • CSS Vanilla + Animaciones avanzadas
  • Vite como bundler (built in 1.01s)
  • Responsive design & Accessibility
  
  Backend:
  • Python/Django con DRF
  • Node.js/Express para APIs
  • PostgreSQL & MySQL expertise
  • Authentication & JWT tokens
  • Rate limiting & Security headers
  
  DevOps:
  • Docker containerization
  • GitHub Actions CI/CD
  • Nginx reverse proxy
  • SSL/TLS certificates
  • Linux server management`,

    'run skills': `BACKEND & RPA:
  ✓ Python        ✓ Django        ✓ Rocketbot
  ✓ Power Automate  ✓ Selenium    ✓ Celery

FRONTEND:
  ✓ React 18      ✓ JavaScript    ✓ CSS3/SASS
  ✓ Vite          ✓ HTML5         ✓ Responsive

DATABASES:
  ✓ PostgreSQL    ✓ MySQL         ✓ SQL Server
  ✓ Firebase      ✓ Redis         ✓ MongoDB

DEVOPS & TOOLS:
  ✓ Docker        ✓ Git           ✓ Nginx
  ✓ Jenkins       ✓ Jira          ✓ Postman`,

    'run projects': `PROJECTS:
  1. HMED (18mo)        - Medical Records Automation
  2. SecureOT (12mo)    - Industrial OT Automation
  3. Taekwondo Portal   - React + Django Full Stack
  4. Narcotráfico DB    - Data Analysis & Reporting
  5. Instagram API      - Metadata Scraping
  6. Poke API Consumer  - REST Integration`,

    'run contact': `CONTACT INFORMATION:
  
  Email:    tu_email@example.com
  LinkedIn: linkedin.com/in/david-tkd203
  GitHub:   github.com/david-tkd203
  Portfolio: david-tkd203.github.io
  
  Available for:
  • Full-time positions
  • Contract work
  • Consulting`,
  }

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()

    // Si es clear, limpiar historial
    if (trimmed === 'clear') {
      setHistory(['> Terminal v1.0 | Type "help" for commands'])
      return null
    }

    // Buscar exacta o parcial
    for (const [key, value] of Object.entries(commands)) {
      if (key.toLowerCase() === trimmed) {
        return value
      }
    }

    // Si no encontró nada
    return `Command not found: "${cmd}". Type "help" for available commands.`
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (input.trim()) {
        const output = executeCommand(input)
        const newHistory = [...history, `> ${input}`]
        if (output !== null) {
          newHistory.push(output)
        }
        setHistory(newHistory)
        setCommandHistory([...commandHistory, input])
        setHistoryIndex(-1)
        setInput('')
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="terminal-toggle"
        title="Open Terminal (Easter Egg)"
      >
        ▶ Terminal
      </button>
    )
  }

  return (
    <div className="interactive-terminal">
      <div className="terminal-header-bar">
        <span className="terminal-title-bar">INTERACTIVE_SHELL_v1.0</span>
        <button onClick={() => setIsOpen(false)} className="terminal-close">
          ✕
        </button>
      </div>

      <div className="terminal-display" ref={terminalRef}>
        {history.map((line, index) => (
          <div key={index} className="terminal-line">
            {line}
          </div>
        ))}
      </div>

      <div className="terminal-input-line">
        <span className="terminal-prompt">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="terminal-input-field"
          placeholder="Type command..."
          autoFocus
        />
      </div>
    </div>
  )
}
