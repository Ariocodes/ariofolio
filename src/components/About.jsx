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
            I started coding at 13. Graduated <strong>3rd</strong> in High-School — <strong>medal</strong> from the Mathematics department — 
            despite being an international student. I am currently a senior-year Computer Engineering 
            student at Izmir University of Economics, focusing on <strong>Full-Stack development</strong>, <strong>Machine Learning</strong> and <strong>hardware architecture</strong> with a self-taught <strong>CCNA</strong> (Networking) background. More than 6 years of
            coding experience, paired with 4 years of
            <strong> teaching</strong> Codes, Mathematics, and ESL.
          </p>
        </div>

        <div className="about-block">
          <div className="about-block-title">// quick facts</div>
          {[
            ['location',  'İzmir, TR'],
            ['focus',     'Full-Stack · Game Dev · Networking'],
            ['teaching',  'Coding · Mathematics · ESL'],
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
