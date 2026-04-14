export default function CircuitLines() {
  return (
    <svg 
      className="circuit-lines" 
      viewBox="0 0 1200 800" 
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Línea principal horizontal con pulso */}
      <path
        className="circuit-path circuit-pulse-1"
        d="M 50 200 L 300 200 L 300 400 L 600 400"
        stroke="#b800ff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Línea vertical con ramificaciones */}
      <path
        className="circuit-path circuit-pulse-2"
        d="M 600 400 L 600 600 L 900 600"
        stroke="#ff00ff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Línea diagonal superior */}
      <path
        className="circuit-path circuit-pulse-3"
        d="M 300 200 L 500 100 L 700 150"
        stroke="#00ffff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Línea derecha inferior */}
      <path
        className="circuit-path circuit-pulse-4"
        d="M 900 600 L 1100 550 L 1150 700"
        stroke="#b800ff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Línea de retorno inferior */}
      <path
        className="circuit-path circuit-pulse-5"
        d="M 50 200 L 50 700 L 400 700"
        stroke="#ff00ff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Línea de conexión central */}
      <path
        className="circuit-path circuit-pulse-1"
        d="M 400 700 L 700 650 L 900 600"
        stroke="#00ffff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Nodos de conexión - círculos brillantes */}
      <circle cx="50" cy="200" r="6" className="circuit-node" fill="#b800ff" />
      <circle cx="300" cy="200" r="6" className="circuit-node" fill="#ff00ff" />
      <circle cx="300" cy="400" r="6" className="circuit-node" fill="#00ffff" />
      <circle cx="600" cy="400" r="6" className="circuit-node" fill="#b800ff" />
      <circle cx="600" cy="600" r="6" className="circuit-node" fill="#ff00ff" />
      <circle cx="900" cy="600" r="6" className="circuit-node" fill="#00ffff" />
      <circle cx="500" cy="100" r="5" className="circuit-node" fill="#b800ff" />
      <circle cx="700" cy="150" r="5" className="circuit-node" fill="#ff00ff" />
      <circle cx="1100" cy="550" r="6" className="circuit-node" fill="#00ffff" />
      <circle cx="50" cy="700" r="6" className="circuit-node" fill="#b800ff" />
      <circle cx="400" cy="700" r="6" className="circuit-node" fill="#ff00ff" />

      {/* Líneas de datos secundarias (más sutiles) */}
      <path
        className="circuit-path circuit-data-flow"
        d="M 300 200 Q 450 250, 600 400"
        stroke="#b800ff"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />

      <path
        className="circuit-path circuit-data-flow"
        d="M 600 400 Q 750 450, 900 600"
        stroke="#ff00ff"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
