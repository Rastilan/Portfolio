import { useState } from 'react'
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
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
