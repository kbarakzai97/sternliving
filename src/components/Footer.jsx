import logo from '../assets/Stern Life Navy Serif Wordmark.png'
import './Footer.css'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Services', href: '/#services' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Our Promise', href: '/#promise' },
]

const services = [
  '24/7 Supervision',
  'Medication Management',
  'Assistance with Daily Living',
  'Dementia-Friendly Care',
  'Nutritional Support',
  'Emotional & Cognitive Engagement',
]

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__grid">
        <div className="footer__brand">
          <img src={logo} className="footer__logo" alt="Stern Life" />
          <p>
            Compassionate, personalized assisted living in a warm, home-like
            setting.
          </p>
        </div>

        <nav className="footer__col">
          <h3 className="footer__title">Quick Links</h3>
          <ul>
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footer__title">Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service}>
                <a href="/#services">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Contact Us</h3>
          <ul>
            {/* TODO: replace with real contact details */}
            <li>
              <a href="tel:+10000000000">(000) 000-0000</a>
            </li>
            <li>
              <a href="mailto:info@example.com">info@example.com</a>
            </li>
            <li>123 Street Name, City, State</li>
          </ul>
        </div>
      </div>

      <p className="footer__bottom">
        © {new Date().getFullYear()} Stern Life Assisted Living. All rights
        reserved.
      </p>
    </footer>
  )
}

export default Footer
