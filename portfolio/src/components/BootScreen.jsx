import { useState, useEffect } from 'react'

const messages = [
  { text: 'Loading kernel modules...', done: false },
  { text: 'Initializing display server...', done: false },
  { text: 'Mounting filesystems...', done: false },
  { text: 'Starting services...', done: false },
  { text: 'Ready.', done: false },
]

export default function BootScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [currentMsg, setCurrentMsg] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 8 + 2
        if (next >= 100) {
          clearInterval(interval)
          // fade out
          setTimeout(() => {
            setVisible(false)
            setTimeout(onComplete, 400)
          }, 500)
          return 100
        }
        return Math.min(next, 100)
      })
    }, 120)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    if (currentMsg < messages.length - 1 && progress > (currentMsg + 1) * 20) {
      const timer = setTimeout(() => setCurrentMsg((prev) => prev + 1), 100)
      return () => clearTimeout(timer)
    }
  }, [progress, currentMsg])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.4s ease',
      padding: '2rem'
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(4rem, 15vw, 8rem)',
        lineHeight: 1,
        letterSpacing: '0.05em',
        color: 'var(--accent)',
        marginBottom: '3rem',
        textTransform: 'uppercase'
      }}>
        DN
      </div>

      {/* Progress bar */}
      <div style={{
        width: 'min(300px, 80vw)',
        height: '3px',
        background: 'var(--border)',
        borderRadius: '2px',
        overflow: 'hidden',
        marginBottom: '2rem'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'var(--accent)',
          borderRadius: '2px',
          transition: 'width 0.15s ease-out',
          boxShadow: '0 0 12px var(--accent-glow)'
        }} />
      </div>

      {/* Status messages */}
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.75rem',
        color: 'var(--fg-muted)',
        textAlign: 'center',
        lineHeight: 2,
        minHeight: '4rem'
      }}>
        {messages.slice(0, currentMsg + 1).map((msg, i) => (
          <div key={i} style={{
            opacity: i === currentMsg && progress < 100 ? 1 : 0.5,
            transition: 'opacity 0.3s'
          }}>
            {i === currentMsg && progress < 100 ? '▸' : '✓'} {msg.text}
          </div>
        ))}
      </div>

      {/* Bottom hint */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        fontFamily: 'var(--font-body)',
        fontSize: '0.6rem',
        color: 'var(--border)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }}>
        {Math.floor(progress)}%
      </div>
    </div>
  )
}
