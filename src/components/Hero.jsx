import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="prompt fade-in">
        <span className="prompt-path">~/ariobashiri</span>
        <span className="prompt-symbol">$</span>
        <span>whoami</span>
      </div>

      <h1 className="hero-name fade-in">
        Ario Bashiri<span className="cursor" />
      </h1>

      <div className="hero-role fade-in">
        ESL Teacher <span>·</span> Computer Engineer <span>·</span> Builder
      </div>

      <div className="hero-bio fade-in">
        <span className="comment">// Java-focused, spanning backend to networking.</span><br />
        Working on clean architecture, scalable systems,<br />
        and tools that make a real difference.<br />
        <span className="comment">// Teaching by day. Building by night.</span>
      </div>

      <div className="hero-links fade-in">
        <a href="#projects" className="btn btn-primary">→ projects</a>
        <a href="#contact" className="btn">get in touch</a>
        <a href="/cv.pdf" className="btn" target="_blank" rel="noreferrer">CV / resume ↗</a>
      </div>
    </section>
  )
}

export default Hero
