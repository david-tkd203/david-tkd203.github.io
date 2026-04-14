import { useEffect, useState } from 'react'

export default function TerminalBoot({ onComplete }) {
  const [displayedLogs, setDisplayedLogs] = useState([])
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  const bootSequence = [
    '> Initiating Portfolio System...',
    '> Loading Core Components...',
    '> Connecting to Neural Network...',
    '> Initializing React 19.2.4',
    '> Mounting Vite dev server on :5174',
    '> CSS Vanilla Engine Ready',
    '> [████████████████████] 100%',
    '> System Boot Complete',
    '> Launching Portfolio Interface...',
  ]

  useEffect(() => {
    let timers = []
    
    bootSequence.forEach((log, index) => {
      const timer = setTimeout(() => {
        setDisplayedLogs((prev) => [...prev, log])
      }, index * 300)
      timers.push(timer)
    })

    const completionTimer = setTimeout(() => {
      setIsComplete(true)
      onComplete()
    }, bootSequence.length * 300 + 1000)
    timers.push(completionTimer)

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [onComplete])

  // Parpadeo del cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="terminal-boot-container">
      <div className="terminal-boot-content">
        <div className="terminal-header">
          <span className="terminal-title">PORTFOLIO_BOOT_SEQUENCE_v1.0</span>
        </div>
        <div className="terminal-body">
          {displayedLogs.map((log, index) => (
            <div key={index} className="terminal-log">
              {log}
            </div>
          ))}
          <div className="terminal-input">
            <span className="terminal-cursor">{showCursor ? '_' : ' '}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
