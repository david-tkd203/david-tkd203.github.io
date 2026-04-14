import { useState } from 'react'
import BootScreen from './components/BootScreen'
import TerminalBoot from './components/TerminalBoot'
import CustomCursor from './components/CustomCursor'
import Terminal from './components/Terminal'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [bootComplete, setBootComplete] = useState(false)
  const [isBooting, setIsBooting] = useState(true)

  return (
    <>
      <CustomCursor />
      {!bootComplete && <BootScreen onComplete={() => setBootComplete(true)} />}
      {bootComplete && isBooting ? (
        <TerminalBoot onComplete={() => setIsBooting(false)} />
      ) : (
        bootComplete && (
          <main className="cyber-portfolio fade-in">
            <Header />
            <Hero />
            <Terminal />
            <About />
            <Experience />
            <Projects />
            <Education />
            <Skills />
            <Contact />
            <Footer />
          </main>
        )
      )}
    </>
  )
}

export default App
