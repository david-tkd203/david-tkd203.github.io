import { useState, useCallback, useRef } from 'react'

export function useTerminal() {
  const [history, setHistory] = useState([
    {
      command: null,
      output: 'Bienvenido a David Ñanculeo Terminal v1.0 | Escribe "help" para ver comandos disponibles',
      isASCII: false,
    },
  ])
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [input, setInput] = useState('')
  const [glitchActive, setGlitchActive] = useState(false)
  const glitchTimeoutRef = useRef(null)

  const commands = {
    help: `
    ╔═══════════════════════════════════════╗
    ║      COMANDOS DISPONIBLES (AYUDA)     ║
    ╚═══════════════════════════════════════╝
    
    📋 INFORMACIÓN PERSONAL:
       whoami                    Identificar usuario del sistema
       about                     Ver información completa del perfil
    
    💼 CARRERA PROFESIONAL:
       experiencia               Ver experiencia laboral detallada
       proyectos                 Listar proyectos destacados
    
    🛠️  HABILIDADES TÉCNICAS:
       habilidades               Mostrar stack técnico completo
    
    📞 CONTACTO:
       contacto                  Información de contacto
    
    ⚙️  UTILIDADES:
       limpiar                   Limpiar pantalla de terminal
       help                      Mostrar este menú de ayuda
    
    🔐 SECRETOS:
       hack                      Easter egg especial
    
    ╚═══════════════════════════════════════╝
    Escribe un comando y presiona ENTER para ejecutar`,

    whoami: {
      isASCII: true,
      output: `
    ██████╗  █████╗ ██╗   ██╗██╗██████╗ 
    ██╔══██╗██╔══██╗██║   ██║██║██╔══██╗
    ██║  ██║███████║██║   ██║██║██║  ██║
    ██║  ██║██╔══██║╚██╗ ██╔╝██║██║  ██║
    ██████╔╝██║  ██║ ╚████╔╝ ██║██████╔╝
    ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═════╝ 
    
         USUARIO: david_nanculeo
         ROL: Ingeniero Full Stack & Arquitecto RPA
         ESPECIALIDAD: Automatización Backend | Python | Rocketbot
         NIVEL: Senior Developer`,
    },

    about: {
      isASCII: true,
      output: `
    ╔═══════════════════════════════════════╗
    ║   ARCHIVO CLASIFICADO - PERFIL SISTEM ║
    ╚═══════════════════════════════════════╝
    
    👤 INFORMACIÓN PERSONAL:
       Nombre:          David Ñanculeo
       Título:          Ingeniero en Informática
       Especialidad:    Full Stack Developer & Arquitecto RPA
    
    💪 EXPERIENCIA:
       Años activo:     14+ años en desarrollo de software
       Nivel:           Senior Engineer
       Ubicación:       Santiago, Chile (UTC-3)
    
    🚀 COMPETENCIAS PRINCIPALES:
       Backend:         Python, Django, FastAPI, Node.js
       Frontend:        React, JavaScript, CSS3 Vanilla
       Automatización:  Rocketbot, Power Automate, Selenium
       Base de datos:   PostgreSQL, MySQL, MongoDB, SQL Server
       DevOps:          Docker, Kubernetes, Jenkins, GitHub Actions
       Especialización: Integración SCADA, IoT Industrial
    
    ✅ ESTADO ACTUAL:
       Disponibilidad:  ACTIVO Y DISPONIBLE
       Modalidades:     Tiempo completo, Contrato, Consultoría
       Respuesta:       24-48 horas
    
    ╚═══════════════════════════════════════╝`,
    },

    proyectos: `
    ╔═══════════════════════════════════════╗
    ║        PROYECTOS DESTACADOS (3)       ║
    ╚═══════════════════════════════════════╝
    
    📌 [1] HMED - Sistema de Historiales Médicos (2022-2023)
       
       Descripción:  Automatización de historiales clínicos electronicos
       Stack:        Python 3.10 | Django | Selenium | PostgreSQL
       Clientes:     50+ consultorios médicos
       
       Logros Clave:
       ✓ Automatización de 10,000+ documentos por mes
       ✓ Reducción del 85% en tiempo de procesamiento manual
       ✓ Integración con sistema SURA (seguro médico)
       ✓ Manejo seguro de datos HIPAA
       ✓ API REST para consultorios partners
       
       ROI:          Ahorro de $150,000 USD anuales
    
    
    📌 [2] SecureOT - Automatización Industrial (2021-2024)
       
       Descripción:  Automatización de procesos en ambiente industrial
       Stack:        Rocketbot Studio Pro | Python | Power Automate | SQL Server
       Empresas:     Automatización en sistema SCADA
       
       Logros Clave:
       ✓ 45+ bots deployed en ambiente de producción
       ✓ Integración con sistemas SCADA industriales
       ✓ Reducción de 60% en costos operacionales
       ✓ Zero downtime en switches críticos
       ✓ Monitoreo real-time con alertas automáticas
       
       ROI:          Ahorro de $300,000 USD anuales
    
    
    📌 [3] Portal Taekwondo - Aplicación Full Stack (2023-2024)
       
       Descripción:  Plataforma de gestión para academia de Taekwondo
       Stack:        React 19 | Django REST | PostgreSQL | Docker
       Estado:       Open-source en GitHub
       
       Características:
       ✓ Gestión de miembros y horarios
       ✓ Sistema de pagos integrado (Stripe)
       ✓ Dashboard de estadísticas en tiempo real
       ✓ Notificaciones automáticas SMS/Email
       ✓ Responsive design mobile-first
       
       Usuarios:     500+ usuarios activos
    
    ╚═══════════════════════════════════════╝`,

    habilidades: `
    ╔═══════════════════════════════════════╗
    ║        STACK TÉCNICO COMPLETO         ║
    ╚═══════════════════════════════════════╝
    
    🔵 BACKEND (PRINCIPAL):
       Lenguajes:       Python 3.10+ | JavaScript Node.js | SQL
       Frameworks:      Django | Django REST Framework | FastAPI
       Async:           Celery | asyncio | bull (Node.js)
       APIs:            RESTful | GraphQL | gRPC
    
    
    🟡 FRONTEND (ESPECIALIZADO):
       Frameworks:      React 18/19 | CSS3 Vanilla
       Herramientas:    Vite | Webpack | npm/yarn
       UI/UX:           Responsive Design | Accesibilidad WCAG
    
    
    🟣 BASES DE DATOS:
       Relacionales:    PostgreSQL (expert) | MySQL | SQL Server
       NoSQL:           MongoDB | Firebase Realtime | Redis (caché)
       ORMs:            SQLAlchemy | Django ORM | Sequelize
    
    
    🟢 AUTOMATIZACIÓN & RPA:
       Herramientas:    Rocketbot Studio Pro | Power Automate Cloud
       Scraping:        Selenium | Scrapy | BeautifulSoup
       Integración:     REST APIs | Webhooks | Google Cloud Functions
    
    
    🔴 DEVOPS & INFRASTRUCTURE:
       Containerización: Docker | Docker Compose | Kubernetes basics
       CI/CD:           Jenkins | GitHub Actions | GitLab CI
       Cloud Providers: AWS (EC2, S3) | Azure (AppService) | GCP
       Servidores:      Nginx | Apache | Linux (Ubuntu/CentOS)
       Certificados:    SSL/TLS | Let's Encrypt
    
    
    ⚫ HERRAMIENTAS DE DESARROLLO:
       Versionado:      Git | GitHub | GitLab | Bitbucket
       Gestión:         Jira | Asana | Notion
       Testing:         Pytest | Jest | Postman | Selenium Grid
       IDE:             VS Code | PyCharm | Visual Studio
    
    
    ⭐ CERTIFICACIONES & SOFT SKILLS:
       ✓ Agile Scrum | Kanban | Lean methodologies
       ✓ Mentoring de desarrolladores junior
       ✓ Arquitectura de sistemas | Design Patterns
       ✓ Seguridad de aplicaciones | OWASP Top 10
    
    ╚═══════════════════════════════════════╝`,

    experiencia: `
    ╔═══════════════════════════════════════╗
    ║        EXPERIENCIA LABORAL (14+ AÑOS) ║
    ╚═══════════════════════════════════════╝
    
    🏢 [2022-2024] INGENIERO SENIOR @ AUTOMATIZATECH
       
       Responsabilidades:
       • Liderazgo en iniciativas RPA a nivel empresa (45+ bots)
       • Arquitectura de soluciones de automatización industrial
       • Integración con sistemas SCADA y IoT
       • Mentoring de 5 desarrolladores junior
       
       Logros Principales:
       ✓ Reducción 85% en procesamiento manual repetitivo
       ✓ Implementación de 45 bots en producción sin incidentes
       ✓ Ahorro de $300,000 USD anuales en costos operacionales
       ✓ Cero downtime en sistemas críticos (SLA 99.9%)
       
       Stack: Rocketbot | Python | Power Automate | SQL Server
       Equipo: 15 automatizadores + 5 developers
    
    
    🏥 [2020-2022] DESARROLLADOR BACKEND @ CCU (HOSPITAL PRIVADO)
       
       Responsabilidades:
       • Desarrollo de APIs REST Django para 50+ consultorios
       • Gestión de base de datos PostgreSQL (2M+ registros)
       • Manejo de datos sensibles HIPAA (compliance crítico)
       • Sincronización tiempo real con sistemas heredados
       
       Logros Principales:
       ✓ APIs con 99.5% uptime en producción
       ✓ Optimización de queries (mejora 300% en rendimiento)
       ✓ Documentación completa con OpenAPI/Swagger
       ✓ Implementación de autenticación JWT token-based
       
       Stack: Django 3.2 | DRF | PostgreSQL | Celery | Redis
       Interfaz: Integración con sistemas HL7/FHIR
    
    
    🖥️  [2018-2020] DESARROLLADOR FULL STACK @ IST
       
       Responsabilidades:
       • Desarrollo de aplicaciones web con React + Django
       • Implementación de CI/CD pipelines con Jenkins
       • Containerización Docker de aplicaciones
       • Formación de junior developers (bootcamp training)
       
       Logros Principales:
       ✓ 4+ aplicaciones en producción
       ✓ Reducción tiempo deployment de 2h a 15min
       ✓ Documentación técnica detallada para el equipo
       ✓ Implementación de automated testing (coverage 80%+)
       
       Stack: React | Django | Docker | Nginx | PostgreSQL
    
    
    📚 [2010-2018] DIVERSOS ROLES (JUNIOR → MID LEVEL)
       
       Roles previos:
       • Desarrollador Web (PHP/MySQL) - Agencias digitales
       • Técnico de Soporte - Hosting provider
       • QA Tester / Automation Tester
       
       Crecimiento: Junior → Mid → Senior (8 años escalada)
       Aprendizajes clave: Full stack mindset, DevOps, liderazgo
    
    
    ╔═══════════════════════════════════════╗
    ║         LÍNEA TEMPORAL VISUAL          ║
    ╚═══════════════════════════════════════╝
    
    2010-2018: Junior/Mid (8 años)       🌱→📈
    2018-2020: Full Stack Developer      🏢 IST
    2020-2022: Backend Senior @ Hospital 🏥 CCU
    2022-2024: Senior RPA Architect      🚀 AutomatizaTech
    2024-2026: Open & Disponible         💼 Buscando nuevo reto
    
    Años totales en industria: 14+ años de experiencia continua
    
    ╚═══════════════════════════════════════╝`,

    contacto: `
    ╔═══════════════════════════════════════╗
    ║        INFORMACIÓN DE CONTACTO        ║
    ╚═══════════════════════════════════════╝
    
    📧 EMAIL (RECOMENDADO):
       david.nanculeo@example.com
       Respuesta: 24-48 horas
    
    🔗 REDES PROFESIONALES:
       LinkedIn:  linkedin.com/in/david-tkd203
       GitHub:    github.com/david-tkd203
       Portfolio: david-tkd203.github.io
    
    💬 TELÉFONO / WHATSAPP:
       +56 9 8765 4321
       Horario:   Lunes-Viernes, 09:00-18:00 (UTC-3)
    
    🌍 UBICACIÓN:
       Ciudad:     Santiago, Chile
       País:       Chile
       Zona:       UTC-3 (Hora de Chile)
    
    📋 DISPONIBILIDAD:
       ✓ Tiempo Completo (Full-time)
       ✓ Proyectos por Contrato (Contract)
       ✓ Consultoría Técnica (Consulting)
       ✓ Freelance (Plataformas: Upwork, Toptal)
    
    ⏰ RESPUESTA TÍPICA:
       Solicitudes:     24-48 horas
       Entrevistas:     1-2 semanas (flexible)
       Disponibilidad:  Inmediata (2 semanas aviso)
    
    💼 LO QUE BUSCO:
       • Proyectos con impacto y escalabilidad
       • Equipos multidisciplinarios y colaborativos
       • Empresa con cultura de aprendizaje continuo
       • Posibilidad de mentoring y crecimiento profesional
    
    ╚═══════════════════════════════════════╝`,

    limpiar: null,
  }

  const executeCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase()

    // Alias mapping for English commands
    const aliasMap = {
      clear: 'limpiar',
      projects: 'proyectos',
      skills: 'habilidades',
      experience: 'experiencia',
      contact: 'contacto',
    }

    const finalCommand = aliasMap[trimmed] || trimmed

    // Handle clear command
    if (finalCommand === 'limpiar') {
      setHistory([
        {
          command: null,
          output: 'Terminal limpiada',
          isASCII: false,
        },
      ])
      return null
    }

    // Handle hack easter egg
    if (trimmed === 'hack') {
      setGlitchActive(true)
      if (glitchTimeoutRef.current) {
        clearTimeout(glitchTimeoutRef.current)
      }
      glitchTimeoutRef.current = setTimeout(() => {
        setGlitchActive(false)
      }, 2000)

      return {
        isASCII: false,
        output: `
    ▓▒░ ALERTA DE VIOLACIÓN DE SEGURIDAD ░▒▓
    Firewall comprometido...
    Credenciales de acceso: OTORGADAS
    Niveles de energía AL MÁXIMO
    ▓▒░ ADVERTENCIA: FALLA INMINENTE ░▒▓
        `,
      }
    }

    // Default: command not found
    if (!commands[finalCommand]) {
      return {
        isASCII: false,
        output: `Comando no encontrado: "${cmd}"\nEscribe "help" para ver comandos disponibles`,
      }
    }

    return commands[finalCommand]
  }, [])

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        if (input.trim()) {
          const output = executeCommand(input)
          const newEntry = {
            command: input,
            output: output?.output || output,
            isASCII: output?.isASCII || false,
          }
          setHistory((prev) => [...prev, newEntry])
          setCommandHistory((prev) => [...prev, input])
          setHistoryIndex(-1)
          setInput('')
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (commandHistory.length > 0) {
          const newIndex = Math.min(
            historyIndex + 1,
            commandHistory.length - 1
          )
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
      } else if (e.key === 'Tab') {
        e.preventDefault()
        const availableCommands = Object.keys(commands)
        const currentInput = input.toLowerCase()
        const matches = availableCommands.filter((cmd) =>
          cmd.startsWith(currentInput)
        )

        if (matches.length === 1) {
          setInput(matches[0])
        } else if (matches.length > 1 && currentInput === '') {
          // Show all commands
          const suggestions = matches.join(', ')
          setHistory((prev) => [
            ...prev,
            {
              command: null,
              output: `Comandos disponibles: ${suggestions}`,
              isASCII: false,
            },
          ])
        }
      }
    },
    [input, historyIndex, commandHistory, executeCommand]
  )

  return {
    history,
    input,
    setInput,
    handleKeyDown,
    glitchActive,
  }
}
