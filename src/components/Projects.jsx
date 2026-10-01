import './Projects.css'
import { useRef } from 'react'

// Project screenshots
import noteTakingImg from '../assets/screenshots/note_taking_mern.png'
import rocketBoostImg from '../assets/screenshots/rocket_game.png'
import fpsImg from '../assets/screenshots/fps_game.png'
import obstacleDodgeImg from '../assets/screenshots/obstacle_game.png'
import isbnScraper from '../assets/screenshots/isbn.png'
import iaeImg from '../assets/screenshots/iae.png'
import artifactsManagerImg from '../assets/screenshots/artifacts.png'
import aradsAdventureImg from '../assets/screenshots/arads_adventure.png'
import examSchedulerImg from '../assets/screenshots/exam_scheduler.png'
import ariofolioImg from '../assets/screenshots/ariofolio.png'
import galaxyGuardImg from '../assets/screenshots/galaxyguard.png'
import blueJackImg from '../assets/screenshots/bluejack.png'
import loginSignupImg from '../assets/screenshots/login_javafx.png'
import underAradImg from '../assets/screenshots/underarad.png'
import workflowStationsImg from '../assets/screenshots/workflow.png'
import instagramBotImg from '../assets/screenshots/instagram_bot.png'

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
        name: 'Note Taking web application (MERN-Stack)',
        image: noteTakingImg,
        desc: 'A full-stack note-taking application built with MongoDB, Express, React and Node.js. Users can create, edit and organize notes through a REST API backed by a MongoDB database.',
        tags: [
            { label: 'MongoDB', cls: 'tag-green' },
            { label: 'Express', cls: 'tag-white' },
            { label: 'React', cls: 'tag-blue' },
            { label: 'React', cls: 'tag-green' },
            { label: 'Full-Stack', cls: 'tag-yellow' },
        ],
        link: '',
    },
    {
        name: 'Rocket Boost',
        image: rocketBoostImg,
        desc: 'A 3D rocket physics game built in Unity as part of a course. Player controls thrust and rotation to navigate through obstacle courses across multiple scenes.',
        tags: [
            { label: 'Unity', cls: 'tag-white' },
            { label: 'C#', cls: 'tag-purple' },
            { label: 'Game Dev', cls: 'tag-yellow' },
        ],
        link: 'https://github.com/Ariocodes/Rocket-Boost',
    },
    {
        name: 'FPS Game',
        image: fpsImg,
        desc: 'A first-person shooter game built in Unity as a tutorial project. Explores FPS mechanics, player controllers, and scene management in C#.',
        tags: [
            { label: 'Unity', cls: 'tag-white' },
            { label: 'C#', cls: 'tag-purple' },
            { label: 'Game Dev', cls: 'tag-yellow' },
        ],
        link: 'https://github.com/Ariocodes/FPS-tutorial',
    },
    {
        name: 'Obstacle Dodge',
        image: obstacleDodgeImg,
        desc: 'My first Unity tutorial game project — a dodge-the-obstacles style game built in C# as an introduction to the Unity game engine.',
        tags: [
            { label: 'Unity', cls: 'tag-white' },
            { label: 'C#', cls: 'tag-purple' },
            { label: 'Game Dev', cls: 'tag-yellow' },
        ],
        link: 'https://github.com/Ariocodes/Obstacle-Dodge',
    },
    {
        name: 'ISBN Scraper (Nadirkitap.com)',
        image: isbnScraper,
        desc: 'This single file written fully in python is able to look up ISBN from Nadirkitap.com and can scrape and find the average price per condition and other information such as author, book name, etc. ISBN can be scanned through device\'s camera or entered manually.',
        tags: [
            { label: 'Python', cls: 'tag-blue' },
            { label: 'Beautiful Soup', cls: 'tag-white' },
            { label: 'TKinter', cls: 'tag-orange' },
            { label: 'CV2', cls: 'tag-orange' },
        ],
        link: 'https://github.com/Ariocodes/Nadirkitap.com-ISBN-lookup-project',
    },
    {
        name: 'Integrated Assignment Evaluator',
        image: iaeImg,
        desc: 'University team project for assignment case testing. Java-based collaborative application developed with Github version control.',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'JavaFX', cls: 'tag-orange' },
            { label: 'Algorithms', cls: 'tag-blue' },
            { label: 'Uni Project', cls: 'tag-red' },
            { label: 'Group Project', cls: 'tag-purple' },
        ],
        link: 'https://github.com/aysenazgelen/CE316-Project',
    },
    {
        name: 'Artifacts Manager',
        image: artifactsManagerImg,
        desc: 'University project for holding the data of artifacts. developed collaboratively in Java as part of the CE216 course curriculum.',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'Algorithms', cls: 'tag-blue' },
            { label: 'JavaFX', cls: 'tag-orange' },
            { label: 'Team work', cls: 'tag-pink' },
            { label: 'Uni Project', cls: 'tag-red' },
            { label: 'Group Project', cls: 'tag-purple' },
        ],
        link: 'https://github.com/Evren-Alp/Ce-216-Project',
    },
    {
        name: 'Arad\'s Adventure',
        image: aradsAdventureImg,
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
        image: examSchedulerImg,
        desc: 'A Java group project application used for scheduling exams according to the given constraints (e.g. days, classes, number of exams, etc.)',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'Algorithms', cls: 'tag-blue' },
            { label: 'JavaFX', cls: 'tag-orange' },
            { label: 'Team work', cls: 'tag-pink' },
            { label: 'Uni Project', cls: 'tag-red' },
            { label: 'Group Project', cls: 'tag-purple' },
        ],
        link: 'https://github.com/simgeg143/Project-Section1Team2',
    },
    {
        name: 'Ariofolio',
        image: ariofolioImg,
        desc: 'THIS WEBSITE. A personal portfolio website built with Vite + React, deployed on GitHub Pages with a custom domain.',
        tags: [
            { label: 'React', cls: 'tag-blue' },
            { label: 'Vite', cls: 'tag-green' },
            { label: 'Web Dev', cls: 'tag-white' },
            { label: 'Domain and DNS config', cls: 'tag-purple' },
            { label: 'GitHub Pages', cls: 'tag-dim' },
        ],
        link: 'https://github.com/Ariocodes/ariofolio',
    },
    {
        name: 'Galaxy Guard',
        image: galaxyGuardImg,
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
        image: blueJackImg,
        desc: 'A terminal-based Blackjack-esque game written in Java. Features a player vs. computer structure with OOP design, card logic, and score tracking.',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'OOP', cls: 'tag-blue' },
            { label: 'Algorithms', cls: 'tag-blue' },
            { label: 'Uni Project', cls: 'tag-red' },
        ],
        link: 'https://github.com/Ariocodes/BlueJack',
    },
    {
        name: 'Login / Signup Interface',
        image: loginSignupImg,
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
        image: underAradImg,
        desc: 'A 2D game where I made my own collision system and tested asset using + menus in pygame.',
        tags: [
            { label: 'Python', cls: 'tag-blue' },
            { label: 'Pygame', cls: 'tag-green' },
            { label: 'Game Dev', cls: 'tag-yellow' },
        ],
        link: 'https://github.com/Ariocodes/UnderArad',
    },
    {
        name: 'Workflow Stations',
        image: workflowStationsImg,
        desc: 'A Java app for finding available stations to complete tasks at. Station and task data are loaded dynamically from a text file. Developed collaboratively.',
        tags: [
            { label: 'Java', cls: 'tag-yellow' },
            { label: 'File I/O', cls: 'tag-dim' },
            { label: 'Algorithms', cls: 'tag-blue' },
            { label: 'Uni Project', cls: 'tag-red' },
            { label: 'Group Project', cls: 'tag-purple' },
        ],
        link: 'https://github.com/Ariocodes/Workflow-Stations',
    },
    {
        name: 'Instagram Bot',
        image: instagramBotImg,
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
        link: 'https://github.com/Ariocodes',
    },
]


function ProjectCard({ p, index, total }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -14
    const rotateY = ((x - centerX) / centerX) * 14
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
  }

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`
  }

  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-image">
        {p.image
          ? <img src={p.image} alt={p.name} />
          : <div className="project-card-image-placeholder">
              <span className="project-num">
                {index === total - 1 ? '99' : String(index).padStart(2, '0')}
              </span>
            </div>
        }
      </div>
      <div className="project-card-body">
        <div className="project-name">{p.name}</div>
        <div className="project-desc">{p.desc}</div>
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
    </a>
  )
}



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
          <ProjectCard key={index} p={p} index={index} total={projects.length} />
        ))}
      </div>
    </section>
  )
}

export default Projects

