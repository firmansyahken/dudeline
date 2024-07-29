import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import About from './components/About'
import ParallaxText from './components/ParallaxText'
import Iconic from './components/Iconic'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

const App = () => {
  return (
    <>
      <Preloader/>
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <div className="bg-stone-100 text-7xl sm:text-9xl font-semibold whitespace-nowrap py-4 tracking-tighter">
        <ParallaxText baseVelocity={7}>
          • DUDELINE STUDIO
        </ParallaxText>
      </div>
      <Iconic />
      <div className="bg-stone-100 text-7xl sm:text-9xl font-semibold whitespace-nowrap py-4 tracking-tighter">
        <ParallaxText baseVelocity={-7}>
          • DUDELINE STUDIO
        </ParallaxText>
      </div>
      <Footer />
    </>
  )
}

export default App