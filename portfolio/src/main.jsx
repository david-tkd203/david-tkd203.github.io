import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import './components/Header.css'
import './components/Hero.css'
import './components/About.css'
import './components/Projects.css'
import './components/Contact.css'
import './components/Footer.css'
import './test-theme.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
