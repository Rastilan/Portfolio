import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      
    </main>
  )
}

export default App
