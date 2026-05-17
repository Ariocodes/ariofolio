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
        <span className="hero-name-text">
          Ario Bashiri<span className="cursor" />
        </span>

        <img
          src="/icon.png"
          alt="profile"
          className="hero-img"
        />
      </h1>

      <div className="hero-role fade-in">
        Computer Engineer <span>·</span> Developer <span>·</span> Teacher
      </div>

      <div className="hero-bio fade-in">
        <span className="comment">// Full-Stack, IT Infrastructure.</span><br />
        Started exploring IT at the age of 13. Never stopped. <br/>
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
