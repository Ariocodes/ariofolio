import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo"><span>~/</span>ariobashiri</div>
      <ul>
        <li><a href="#about">about</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
