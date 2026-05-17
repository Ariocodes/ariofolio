import './Skills.css'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'C#', 'C', 'SQL', 'JavaScript', 'PHP', 'HTML/CSS'],
  },
  {
    title: 'Frontend',
    items: ['HTML / CSS', 'React', 'JavaScript', 'Vite'],
  },
  {
    title: 'Framework & Libraries',
    items: ['React.js', 'JavaFX', 'JFrame', 'Numpy', 'matplotlib', 'Node-RED'],
  },
  {
    title: 'Networking',
    items: ['CCNA Topics', 'Swithing & Routing', 'Configuration', 'Subnetting'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git / GitHub', 'Arch Linux', 'Postman', 'WordPress', 'Artificial Intelligence'],
  },
  {
    title: 'Soft Skills',
    items: ['Teamwork', 'Time Management', 'Team Leadership', 'Team/Group Management', 'Agile Project Management', 'Effective Communication'],
  },
  {
    title: 'Core Competencies',
    items: ['System Architecture', 'Algorithms', 'OOP', 'CCNA'],
  },
  {
    title: '',
    items: [],
  },
  {
    title: '',
    items: [],
  },
]

function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-label">03</span>
        <span className="section-title">$ cat skills.json</span>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-title">{group.title}</div>
            {group.items.map((item) => (
              <div className="skill-item" key={item}>
                <div className="skill-dot" />
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
