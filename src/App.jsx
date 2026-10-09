import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import OurPromise from './components/OurPromise'
import Footer from './components/Footer'
import OurTeam from './pages/OurTeam'
import heroImg from './assets/heroimage.webp'

function HomePage() {
  return (
    <>
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
      <WhyChooseUs />
      <Gallery />
      <OurPromise />
    </>
  )
}

function App() {
  const isTeamPage = window.location.pathname.replace(/\/$/, '') === '/our-team'

  // Sections render after the browser's initial jump, so scroll to "/#about"-style links once mounted.
  useEffect(() => {
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>{isTeamPage ? <OurTeam /> : <HomePage />}</main>
      <Footer />
    </>
  )
}

export default App
