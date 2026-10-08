import React from 'react'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import EngineeringFocus from './sections/EngineeringFocus'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <EngineeringFocus />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
