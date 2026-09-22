import './Projects.css'
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
const projects = [
    {
        name: 'Rocket Boost (Unity course)',
        desc: 'A 3D rocket physics game built in Unity as part of a course. Player controls thrust and rotation to navigate through obstacle courses across multiple scenes.',
        tags: [
            { label: 'Unity', cls: 'tag-white' },
            { label: 'C#', cls: 'tag-purple' },
            { label: 'Game Dev', cls: 'tag-yellow' },
        ],
        link: 'https://github.com/Ariocodes/Rocket-Boost',
    },
    {
        name: 'FPS Game (Unity tutorial)',
        desc: 'A first-person shooter game built in Unity as a tutorial project. Explores FPS mechanics, player controllers, and scene management in C#.',
        tags: [
            { label: 'Unity', cls: 'tag-white' },
            { label: 'C#', cls: 'tag-purple' },
            { label: 'Game Dev', cls: 'tag-yellow' },
        ],
        link: 'https://github.com/Ariocodes/FPS-tutorial',
    },
    {
        name: 'Obstacle Dodge (Unity tutorial)',
        desc: 'My first Unity tutorial game project — a dodge-the-obstacles style game built in C# as an introduction to the Unity game engine.',
        tags: [
            { label: 'Unity', cls: 'tag-white' },
            { label: 'C#', cls: 'tag-purple' },
            { label: 'Game Dev', cls: 'tag-yellow' },
        ],
        link: 'https://github.com/Ariocodes/Obstacle-Dodge',
    },
    {
        name: 'Integrated Assignment Evaluator',
        desc: 'University team project for assignment case testing. Java-based collaborative application developed with Github version control.',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'Algorithms', cls: 'tag-blue' },
            { label: 'JavaFX', cls: 'tag-orange' },
            { label: 'Team work', cls: 'tag-pink' },
            { label: 'Uni Project', cls: 'tag-red' },
        ],
        link: 'https://github.com/aysenazgelen/CE316-Project',
    },
    {
        name: 'Artifacts Manager',
        desc: 'University project for holding the data of artifacts. developed collaboratively in Java as part of the CE216 course curriculum.',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'Algorithms', cls: 'tag-blue' },
            { label: 'JavaFX', cls: 'tag-orange' },
            { label: 'Team work', cls: 'tag-pink' },
            { label: 'Uni Project', cls: 'tag-red' },
        ],
        link: 'https://github.com/Evren-Alp/Ce-216-Project',
    },
    {
        name: 'Arad\'s Adventure',
        desc: 'A 2D open-world game developed in Java with custom assets, multi-scene structure with',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'JFrame', cls: 'tag-yellow' },
            { label: 'Game Dev', cls: 'tag-yellow' },
        ],
        link: 'https://github.com/Ariocodes/Arad-s-Adventure',
    },
    {
        name: 'Exam Scheduler',
        desc: 'Java team project from the first year of university — multi-contributor repo with structured class design and shared development.',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'Algorithms', cls: 'tag-blue' },
            { label: 'JavaFX', cls: 'tag-orange' },
            { label: 'Team work', cls: 'tag-pink' },
            { label: 'Uni Project', cls: 'tag-red' },
        ],
        link: 'https://github.com/simgeg143/Project-Section1Team2',
    },
    {
        name: 'Ariofolio',
        desc: 'THIS WEBSITE. A personal portfolio website built with Vite + React, deployed on GitHub Pages with a custom domain.',
        tags: [
            { label: 'React', cls: 'tag-blue' },
            { label: 'Vite', cls: 'tag-green' },
            { label: 'Web Dev', cls: 'tag-white' },
            { label: 'Domains and DNS configuration', cls: 'tag-purple' },
            { label: 'GitHub Pages', cls: 'tag-dim' },
        ],
        link: 'https://github.com/Ariocodes/ariofolio',
    },
    {
        name: 'Galaxy Guard',
        desc: 'A 2D space shooter game built with Pygame. Control a spaceship, shoot enemies, and survive with custom sprites and sound effects.',
        tags: [
            { label: 'Python', cls: 'tag-blue' },
            { label: 'Pygame', cls: 'tag-green' },
            { label: 'Game Dev', cls: 'tag-yellow' },
        ],
        link: 'https://github.com/Ariocodes/Galaxy-Guard',
    },
    {
        name: 'BlueJack',
        desc: 'A terminal-based Blackjack game written in Java. Features a player vs. computer structure with OOP design, card logic, and score tracking.',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'OOP', cls: 'tag-blue' },
            { label: 'Algorithms', cls: 'tag-blue' },
        ],
        link: 'https://github.com/Ariocodes/BlueJack',
    },
    {
        name: 'Login / Signup Interface',
        desc: 'A JavaFX-based login and signup UI. Clean interface design with form validation, built as a reusable authentication template.',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'JavaFX', cls: 'tag-orange' },
            { label: 'UI Design', cls: 'tag-blue' },
        ],
        link: 'https://github.com/Ariocodes/login-signup-interface-JAVAFX',
    },
    {
        name: 'UnderArad',
        desc: 'A Pygame remake of Arad\'s Adventure — a world-changing 2D game built in Python with custom image assets.',
        tags: [
            { label: 'Python', cls: 'tag-blue' },
            { label: 'Pygame', cls: 'tag-green' },
            { label: 'Game Dev', cls: 'tag-yellow' },
        ],
        link: 'https://github.com/Ariocodes/UnderArad',
    },
    {
        name: 'Workflow Stations',
        desc: 'A Java app for finding available stations to complete tasks at. Station and task data are loaded dynamically from a text file. Developed collaboratively.',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'File I/O', cls: 'tag-dim' },
            { label: 'Algorithms', cls: 'tag-blue' },
        ],
        link: 'https://github.com/Ariocodes/Workflow-Stations',
    },
    {
        name: 'Instagram Bot',
        desc: 'A Python automation bot for Instagram. Handles scheduled posting with image and config support, including GMT time zone testing.',
        tags: [
            { label: 'Python', cls: 'tag-blue' },
            { label: 'Automation', cls: 'tag-green' },
            { label: 'Bot', cls: 'tag-purple' },
        ],
        link: 'https://github.com/Ariocodes/instagram-bot',
    },
    {
        name: 'And the list goes on...',
        desc: 'Check out my other projects on GitHub. Click the arrow on the right.',
        tags: [],
        link: 'https://github.com/Ariocodes/ariofolio',
    },
]

function Projects() {
    return (
        <section id="projects">
            <div className="section-header">
                <span className="section-label">03</span>
                <span className="section-title">$ ls ./projects</span>
                <div className="section-line" />
            </div>
            <div className="projects-grid">
                {projects.map((p, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-num">
                            {index === projects.length -1 ? "99" : String(index).padStart(2, "0")} {/* the last one must be 99 */}
                        </div>
                        <div>
                            <div className="project-name">{p.name}</div>
                            <div className="project-expandable">
                                <div className="project-desc">{p.desc}</div>
                            </div>
                            <div className="project-tags">
                                {p.tags.map((t) => (
                                    <span className={`tag ${t.cls}`} key={t.label}>
                                        {tagIcons[t.label] && (
                                            <span className="tag-icon">{tagIcons[t.label]}</span>
                                        )}
                                        {t.label}
                                    </span>
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



// function Projects() {
//   return (
//     <section id="projects">
//       <div className="section-header">
//         <span className="section-label">02</span>
//         <span className="section-title">$ ls ./projects</span>
//         <div className="section-line" />
//       </div>

//       <div className="projects-grid">
//         {projects.map((p) => (
//           <div className="project-card" key={p.num}>
//             <div className="project-num">{p.num}</div>
//             <div>
//               <div className="project-name">{p.name}</div>
//               <div className="project-desc hide-mobile">{p.desc}</div>
//               <div className="project-tags">
//                 {p.tags.map((t) => (
//                   <span className={`tag ${t.cls}`} key={t.label}>{t.label}</span>
//                 ))}
//               </div>
//             </div>
//             <a href={p.link} className="project-link" target="_blank" rel="noreferrer">↗</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Projects
