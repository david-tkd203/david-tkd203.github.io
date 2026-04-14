import { useEffect, useRef } from 'react'
import { useTerminal } from '../hooks/useTerminal'

export default function Terminal() {
  const { history, input, setInput, handleKeyDown, glitchActive } =
    useTerminal()
  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    if (glitchActive) {
      document.body.classList.add('system-glitch')
    } else {
      document.body.classList.remove('system-glitch')
    }

    return () => document.body.classList.remove('system-glitch')
  }, [glitchActive])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="terminal-container cyber-glass">
      <div className="terminal-header">
        <div className="terminal-title">
          <span className="terminal-icon">$</span>
          <span>INTERACTIVE_SHELL_v1.0</span>
        </div>
        <div className="terminal-status">
          <span className="status-indicator"></span>
          <span>ONLINE</span>
        </div>
      </div>

      <div className="terminal-display" ref={terminalRef}>
        {history.map((entry, idx) => (
          <div key={idx} className="terminal-entry">
            {entry.command && (
              <div className="terminal-command">
                <span className="terminal-prompt">$ </span>
                <span className="command-text">{entry.command}</span>
              </div>
            )}
            {entry.output && (
              <div className={`terminal-output ${entry.isASCII ? 'ascii' : ''}`}>
                <pre className="ascii-art">{entry.output}</pre>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="terminal-input-wrapper">
        <span className="terminal-prompt">$ </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="terminal-input"
          placeholder="Escribe un comando..."
          spellCheck="false"
        />
        <span className="cursor-blink">█</span>
      </div>
    </div>
  )
}
