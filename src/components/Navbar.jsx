import logo from '../assets/Stern Life Navy Serif Wordmark.png'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar__logo">
        <img src={logo} alt="Stern Life" />
      </a>
      <nav className="navbar__links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  )
}

export default Navbar
