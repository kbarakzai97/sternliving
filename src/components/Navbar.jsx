import logo from '../assets/Stern Life Navy Serif Wordmark.png'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar__logo">
        <img src={logo} alt="Stern Life" />
      </a>
      <nav className="navbar__links">
        <div className="navbar__dropdown">
          <a href="/#about">About</a>
          <div className="navbar__menu">
            <a href="/our-team">Our Team</a>
          </div>
        </div>
        <a href="/#services">Services</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  )
}

export default Navbar
