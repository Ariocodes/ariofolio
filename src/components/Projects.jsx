import './Projects.css'

const projects = [
  {
    num: '00',
    name: 'Arad\'s Adventure',
    desc: 'A 2D open-world game developed in Java with custom assets, multi-scene structure with',
    tags: [
      { label: 'Java', cls: 'tag-yellow' },
      { label: 'JFrame', cls: 'tag-yellow' },
      { label: 'Game Dev', cls: 'tag-blue' },
    ],
    link: 'https://github.com/Ariocodes/UnderArad',
  },
  {
    num: '01',
    name: 'Integrated Assignment Evaluator',
    desc: 'University team project for assignment case testing. Java-based collaborative application developed with Github version control.',
    tags: [
      { label: 'Java',      cls: 'tag-yellow' },
      { label: 'Algorithms', cls: 'tag-blue' },
      { label: 'JavaFX', cls: 'tag-orange' },
      { label: 'Team work',      cls: 'tag-pink' },
      { label: 'Uni Project', cls: 'tag-red' },
    ],
    link: 'https://github.com/aysenazgelen/CE316-Project',
  },
  {
    num: '02',
    name: 'Artifacts Manager',
    desc: 'University project for holding the data of artifacts. developed collaboratively in Java as part of the CE216 course curriculum.',
    tags: [
      { label: 'Java',      cls: 'tag-yellow' },
      { label: 'Algorithms', cls: 'tag-blue' },
      { label: 'JavaFX', cls: 'tag-orange' },
      { label: 'Team work',       cls: 'tag-pink' },
      { label: 'Uni Project', cls: 'tag-red' },
    ],
    link: 'https://github.com/Evren-Alp/Ce-216-Project',
  },
  {
    num: '03',
    name: 'Exam Scheduler',
    desc: 'Java team project from the first year of university — multi-contributor repo with structured class design and shared development.',
    tags: [
      { label: 'Java',      cls: 'tag-yellow' },
      { label: 'Algorithms', cls: 'tag-blue' },
      { label: 'JavaFX', cls: 'tag-orange' },
      { label: 'Team work',       cls: 'tag-pink' },
      { label: 'Uni Project', cls: 'tag-red' },
    ],
    link: 'https://github.com/simgeg143/Project-Section1Team2',
  },
  {
    num: '04',
    name: 'Ariofolio',
    desc: 'THIS WEBSITE. A personal portfolio website built with Vite + React, deployed on GitHub Pages with a custom domain.',
    tags: [
      { label: 'React',        cls: 'tag-blue' },
      { label: 'Vite',         cls: 'tag-green' },
      { label: 'Web Dev',         cls: 'tag-white' },
      { label: 'Domains and DNS configuration', cls: 'tag-purple' },
      { label: 'GitHub Pages', cls: 'tag-dim' },
    ],
    link: 'https://github.com/Ariocodes/ariofolio',
  },
]

function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-label">02</span>
        <span className="section-title">$ ls ./projects</span>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.num}>
            <div className="project-num">{p.num}</div>
            <div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className={`tag ${t.cls}`} key={t.label}>{t.label}</span>
                ))}
              </div>
            </div>
            <a href={p.link} className="project-link" target="_blank" rel="noreferrer">↗</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
