import { useEffect } from 'react'

export default function DigitalRain() {
  useEffect(() => {
    const container = document.querySelector('.digital-rain')
    if (!container) return

    const characters = '01アイウエオカキクケコサシスセソタチツテト'
    const rainChars = []

    // Crear caracteres cayendo
    for (let i = 0; i < 15; i++) {
      const char = document.createElement('div')
      char.className = 'rain-char'
      char.textContent = characters.charAt(Math.floor(Math.random() * characters.length))
      
      const x = Math.random() * 100
      const delay = Math.random() * 2
      const duration = 8 + Math.random() * 5
      
      char.style.left = x + '%'
      char.style.animationDelay = delay + 's'
      char.style.animationDuration = duration + 's'
      
      container.appendChild(char)
      rainChars.push(char)
    }

    // Regenerar caracteres cuando terminan
    const interval = setInterval(() => {
      rainChars.forEach((char) => {
        char.textContent = characters.charAt(Math.floor(Math.random() * characters.length))
        const duration = 8 + Math.random() * 5
        char.style.animationDuration = duration + 's'
        char.style.animationDelay = '0s'
        
        // Reiniciar animación forzando reflow
        char.offsetHeight
        char.style.animation = 'none'
        char.offsetHeight
        char.style.animation = `digital-rain ${duration}s linear forwards`
      })
    }, 13000)

    return () => clearInterval(interval)
  }, [])

  return <div className="digital-rain"></div>
}
