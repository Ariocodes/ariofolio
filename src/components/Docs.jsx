import './Docs.css'
import {
  SiPython, SiReact, SiVite, SiGithubpages, SiMongodb,
  SiUnity, SiJavascript, SiTypescript, SiPhp, SiMysql,
  SiPostgresql, SiGit, SiGithub, SiLinux, SiWordpress,
  SiPytorch, SiTensorflow, SiNodedotjs, SiExpress,
  SiInstagram, SiDocker, SiTailwindcss, SiFirebase, 
  SiJupyter, SiScikitlearn,
} from 'react-icons/si'
import {
  TbBrandCSharp, TbBrandUnity, TbBrandPython,
  TbBrandJavascript, TbBrandVite, TbBrandReact,
  TbBrandNodejs, TbBrandPhp, TbBrandMongodb,
  TbBrandGithub, TbBrandGit, TbBrandDocker,
  TbBrandWordpress, TbBrandInstagram, TbBrandCpp,
} from 'react-icons/tb'
import { FaRobot, FaJava, FaDatabase } from 'react-icons/fa'

const tagIcons = {
  'Java': <FaJava />,
  'JFrame':  <FaJava />,
  'JavaFX': <FaJava />,
  'Python': <SiPython />,
  'C++': <TbBrandCpp />,
  'JavaScript': <SiJavascript />,
  'TypeScript': <SiTypescript />,
  'PHP': <SiPhp />,
  'SQL': <FaDatabase />,

  'React': <SiReact />,
  'Vite': <SiVite />,
  'Node.js': <SiNodedotjs />,
  'Express': <SiExpress />,
  'MongoDB': <SiMongodb />,
  'PyTorch': <SiPytorch />,
  'Unity': <TbBrandUnity />,
  'Jupyter': <SiJupyter />,
  'Machine Learning': <SiScikitlearn />,
  'GitHub Pages': <SiGithubpages />,
  'Git / GitHub': <SiGithub />,
  'Docker': <SiDocker />,
  'WordPress': <SiWordpress />,
  'Firebase': <SiFirebase />,
  'Tailwind': <SiTailwindcss />,
  'Linux': <SiLinux />,
  'Bot': <FaRobot />,
  'Automation': <FaRobot />,
  'Web Dev': <SiJavascript />,
}
const docs = [
    {
        name: 'Learning Unity (ongoing)',
        icon: <SiUnity />,
        desc: 'A collection of notes and documents covering Unity game development concepts — physics, scripting, scene management, etc.',
        tags: [
            { label: 'Documentation', cls: 'tag-dim' },
            { label: 'Fundamentals', cls: 'tag-dim' },
            { label: 'Unity', cls: 'tag-white' },
            { label: 'C#', cls: 'tag-purple' },
            { label: 'Game Dev', cls: 'tag-blue' },
        ],
        link: 'https://github.com/Ariocodes/Learning-Unity',
    },
    {
        name: 'Learning MERN Stack (ongoing)',
        icon: <SiMongodb />,
        desc: 'A documented journey learning the MERN stack — includes a note-taking application built as a hands-on project covering MongoDB, Express, React, and Node.js.',
        tags: [
            { label: 'MongoDB', cls: 'tag-green' },
            { label: 'Express', cls: 'tag-dim' },
            { label: 'React', cls: 'tag-blue' },
            { label: 'Node.js', cls: 'tag-green' },
            { label: 'Full-Stack', cls: 'tag-white' },
        ],
        link: 'https://github.com/Ariocodes/Learning-MERN-Stack',
    },
    {
        name: 'Learning PyTorch (ongoing)',
        icon: <SiPytorch />,
        desc: 'A documented journey learning PyTorch — covers fundamentals, workflow basics, and includes a cheatsheet notebook and extra exercises.',
        tags: [
            { label: 'Documentation', cls: 'tag-dim' },
            { label: 'Fundamentals', cls: 'tag-dim' },
            { label: 'Python', cls: 'tag-blue' },
            { label: 'PyTorch', cls: 'tag-orange' },
            { label: 'Machine Learning', cls: 'tag-green' },
            { label: 'Jupyter', cls: 'tag-yellow' },
        ],
        link: 'https://github.com/Ariocodes/PyTorch',
    },
    {
        name: 'Learning JavaScript (ongoing)',
        icon: <SiJavascript />,
        desc: 'A structured JavaScript learning repo covering many topics and still growing.',
        tags: [
            { label: 'Documentation', cls: 'tag-dim' },
            { label: 'Fundamentals', cls: 'tag-dim' },
            { label: 'JavaScript', cls: 'tag-yellow' },
            { label: 'Web Dev', cls: 'tag-white' },
        ],
        link: 'https://github.com/Ariocodes/learning-javascript',
    },
]

function Docs() {
    return (
        <section id="docs">
            <div className="section-header">
                <span className="section-label">04</span>
                <span className="section-title">$ cat ./documentations</span>
                <div className="section-line" />
            </div>
            <div className="docs-grid">
                {docs.map((d, index) => (
                    <a href={d.link} className="doc-card" key={index} target="_blank" rel="noreferrer">
                        <div className="doc-num-wrap">
                            <div className="doc-num">
                                {String(index).padStart(2, "0")}
                            </div>
                            <div className="doc-icon">{d.icon}</div>
                        </div>
                        <div className="doc-content">
                            <div className="doc-name">{d.name}</div>
                            <div className="doc-desc">{d.desc}</div>

                            <div className="doc-tags">
                                {d.tags.map((t) => (
                                    <span className={`tag ${t.cls}`} key={t.label}>
                                        {tagIcons[t.label] && (
                                            <span className="tag-icon">{tagIcons[t.label]}</span>
                                        )}
                                        {t.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="doc-arrow">↗</div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Docs