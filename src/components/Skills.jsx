import './Skills.css'
import { useState } from 'react'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'C#', 'C', 'SQL', 'JavaScript', 'PHP', 'HTML/CSS'],
  },
  {
    title: 'Framework & Libraries',
    items: ['React.js', 'JavaFX', 'JFrame', 'Numpy', 'matplotlib', 'Node-RED'],
  },
  {
    title: 'Networking',
    items: ['CCNA Topics', 'Switching & Routing', 'Configuration', 'Subnetting'],
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
]

function Skills() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-label">03</span>
        <span className="section-title">$ cat skills.json</span>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div className="skill-group" key={group.title}>

            <div
              className="skill-group-title clickable"
              onClick={() => toggle(index)}
            >
              {group.title}
              <span className="arrow">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>

            <div className={`skill-items ${openIndex === index ? 'open' : ''}`}>
              {group.items.map((item) => (
                <div className="skill-item" key={item}>
                  <div className="skill-dot" />
                  {item}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills