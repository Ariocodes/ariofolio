import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Docs from './components/Docs'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Quote from './components/Quote'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact />
        <Projects />
        <Docs/>
        <Skills />
        <Quote/>
        <Footer />
      </main>
    </div>
  )
}

export default App
