import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
    </main>
  )
}

export default App
