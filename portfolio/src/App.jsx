import { useState } from 'react'
import { CommandCenterProvider } from './context/CommandCenterContext'
import BootScreen from './components/BootScreen'
import TerminalBoot from './components/TerminalBoot'
import SectionDeployer from './components/SectionDeployer'
import SectionGuard from './components/SectionGuard'
import MainTerminal from './components/MainTerminal'
import InfoHub from './components/InfoHub'
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
    <CommandCenterProvider>
      {!bootComplete && <BootScreen onComplete={() => setBootComplete(true)} />}
      {bootComplete && isBooting ? (
        <TerminalBoot onComplete={() => setIsBooting(false)} />
      ) : (
        bootComplete && (
          <main className="cyber-portfolio fade-in">
            <Header />
            <Hero />
            <MainTerminal />
            <SectionGuard sectionId="ABOUT">
              <SectionDeployer sectionName="IDENTITY">
                <About />
              </SectionDeployer>
            </SectionGuard>
            <Experience />
            <SectionGuard sectionId="PROJECTS">
              <SectionDeployer sectionName="PROJECTS">
                <Projects />
              </SectionDeployer>
            </SectionGuard>
            <Education />
            <SectionGuard sectionId="SKILLS">
              <SectionDeployer sectionName="SKILLS">
                <Skills />
              </SectionDeployer>
            </SectionGuard>
            <Contact />
            <Footer />
            <InfoHub />
          </main>
        )
      )}
    </CommandCenterProvider>
  )
}

export default App
