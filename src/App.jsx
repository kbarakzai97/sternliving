import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import OurPromise from './components/OurPromise'
import Testimonials from './components/Testimonials'
import Recognition from './components/Recognition'
import VisitUs from './components/VisitUs'
import JoinCommunity from './components/JoinCommunity'
import Footer from './components/Footer'
import pages from './routes'
import { withBase } from './url'

function HomePage() {
  return (
    <>
      <Hero
        image={withBase('/hero-1920.webp')}
        imageSrcSet={`${withBase('/hero-768.webp')} 768w, ${withBase('/hero-1280.webp')} 1280w, ${withBase('/hero-1920.webp')} 1920w`}
        imageAlt="Caregiver walking arm in arm with a senior woman outdoors"
        heading="Trusted Care & Support for Your Loved Ones"
        subtext="Personalized assisted living in a warm, home-like setting, where every resident is known by name."
        ctaLabel="Call Now"
        ctaHref="tel:+12406103769"
      />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <OurPromise />
      <Testimonials />
      <Recognition />
      <VisitUs />
      <JoinCommunity />
    </>
  )
}

// `path` is passed in when prerendering; in the browser it comes from the URL, minus the deploy base.
function App({ path = window.location.pathname.slice(import.meta.env.BASE_URL.length - 1) }) {
  const Page = pages[path.replace(/\/$/, '')] ?? HomePage

  // Sections render after the browser's initial jump, so scroll to "/#about"-style links once mounted.
  useEffect(() => {
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  )
}

export default App
