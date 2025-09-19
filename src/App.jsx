import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import PersonalPhotos from './components/PersonalPhotos'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <PersonalPhotos />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
