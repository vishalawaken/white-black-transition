import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isBlackSection, setIsBlackSection] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    
    if (scrollPosition > windowHeight * 0.5) {
      setIsBlackSection(true)
    } else {
      setIsBlackSection(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 1000)
    return () => clearTimeout(timer)
  }, [isBlackSection])

  return (
    <div className="app-container">
      <div className={`fixed-header ${isBlackSection ? 'dark' : 'light'}`}>
        <h1 className="main-title">Smooth Transition Effect from a white section to black section using HTML, CSS and React</h1>
        <h2 className="author">By Ananya Bajpai</h2>
      </div>
      
      <section className={`section white-section ${isBlackSection ? 'fade-out' : 'fade-in'}`}>
        <div className="content">
          <h1>Welcome to the Light</h1>
          <p>Scroll down to experience the transition</p>
        </div>
      </section>
      
      <section className={`section black-section ${isBlackSection ? 'fade-in' : 'fade-out'}`}>
        <div className="content">
          <h1>Welcome to the Dark</h1>
          <p>You've made the transition</p>
        </div>
      </section>
    </div>
  )
}

export default App 