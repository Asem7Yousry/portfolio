import React from 'react';
import Navigation from './components/Navigation';
import './App.css';
import Hero from './sections/Hero';
import About from './sections/About';
import EngineeringFocus from './sections/EngineeringFocus';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-layout">
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
    </div>
  );
};

export default App;
