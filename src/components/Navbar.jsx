import './Navbar.css'
import { FaGithub } from 'react-icons/fa'

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
      <div className="github-link"><a href="https://github.com/ariocodes" target="_blank" rel="noreferrer" className="github-link"><FaGithub/></a></div>
    </nav>
  )
}

export default Navbar
