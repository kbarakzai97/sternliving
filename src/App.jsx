import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import heroImg from './assets/heroimage.webp'

function App() {
  return (
    <>
      <Navbar />
      <Hero
        image={heroImg}
        imageAlt="Caregiver walking arm in arm with a senior woman outdoors"
        heading="Trusted Care & Support for Your Loved Ones"
        subtext="Personalized assisted living in a warm, home-like setting, where every resident is known by name."
        ctaLabel="Call Now"
        ctaHref="#contact"
      />
      <About />
      <Services />
    </>
  )
}

export default App
