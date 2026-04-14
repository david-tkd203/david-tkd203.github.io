import { useState } from 'react'
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
  const [isBooting, setIsBooting] = useState(true)

  return (
    <>
      <CustomCursor />
      {isBooting ? (
        <TerminalBoot onComplete={() => setIsBooting(false)} />
      ) : (
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
      )}
    </>
  )
}

export default App
