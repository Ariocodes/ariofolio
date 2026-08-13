import './Navbar.css'
import { FaGithub } from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo"><span>~/</span>ariobashiri</div>
      <ul>
        <li><a href="#about">about</a></li>
        <li><a href="#contact">contact</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#skills">skills</a></li>
      </ul>
      <div className="link"><a href="https://github.com/ariocodes" target="_blank" rel="noreferrer" className="link"><FaGithub/></a></div>
      <div className="link"><a href="https://www.instagram.com/ariobashiri" target="_blank" rel="noreferrer" className="link"><FaInstagram/></a></div>
      <div className="link"><a href="https://www.linkedin.com/in/ario-bashiri/" target="_blank" rel="noreferrer" className="link"><FaLinkedin/></a></div>
    </nav>
  )
}

export default Navbar
