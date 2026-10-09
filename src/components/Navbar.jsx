import { withBase } from '../url'
import logo from '../assets/Stern Life Navy Serif Wordmark.webp'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a href={withBase('/')} className="navbar__logo">
        <img src={logo} alt="Stern Life" />
      </a>
      <nav className="navbar__links">
        <div className="navbar__dropdown">
          <a href={withBase('/#about')}>About</a>
          <div className="navbar__menu">
            <div className="navbar__menu-list">
              <a href={withBase('/our-team')}>Our Team</a>
              <a href={withBase('/faq')}>FAQ</a>
            </div>
          </div>
        </div>
        <a href={withBase('/services')}>Services</a>
        <a href={withBase('/contact')}>Contact Us</a>
      </nav>
    </header>
  )
}

export default Navbar
