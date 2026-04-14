import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        const x = e.clientX
        const y = e.clientY

        // Update CSS custom properties
        document.documentElement.style.setProperty('--cursor-x', `${x}px`)
        document.documentElement.style.setProperty('--cursor-y', `${y}px`)

        // Update cursor element position
        cursorRef.current.style.left = `${x}px`
        cursorRef.current.style.top = `${y}px`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <div ref={cursorRef} className="custom-cursor"></div>
    </>
  )
}
