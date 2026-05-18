import './About.css'

function About() {
  return (
    <section id="about">
      <div className="section-header">
        <span className="section-label">01</span>
        <span className="section-title">$ cat about.txt</span>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        <div className="about-block">
          <div className="about-block-title">// background</div>
          <p>
            Started coding at 13. Graduated <strong>3rd</strong> in High-School — <strong>medal</strong> from the Mathematics department — 
            despite being an international student. Currently a 3rd-year Computer Engineering 
            student at IUE, focusing on <strong>Full-Stack</strong> development and <strong>hardware</strong> architecture with a self-taught <strong>CCNA</strong> (Networking) background. 4 years of
            coding experience, paired with 4 years of
            <strong> teaching</strong> Codes, Mathematics, and English — which built the 
            communication and teamwork skills. <br/>Discipline comes from sport, speed comes from <strong>AI </strong>.
            <br /><br />
            Running <strong>Arch Linux</strong> + <strong>Windows 11</strong>
          </p>
        </div>

        <div className="about-block">
          <div className="about-block-title">// quick facts</div>
          {[
            ['location',  'İzmir, TR'],
            ['focus',     'Full-Stack · Networking'],
            ['teaching',  'Coding · Mathematics · ESL'],
            ['os',        'Arch Linux / Windows 11'],
            ['status',    'open to opportunities'],
          ].map(([key, val]) => (
            <div className="stat-row" key={key}>
              <span className="stat-key">{key}</span>
              <span className={`stat-val ${key === 'status' ? 'stat-green' : ''}`}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
