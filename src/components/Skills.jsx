import './Skills.css'
import { useState } from 'react'
import {
    SiPython, SiJavascript, SiTypescript, SiPhp, SiReact,
    SiVite, SiNodedotjs, SiExpress, SiMongodb, SiPytorch,
    SiNumpy, SiPandas, SiUnity, SiGithub, SiGithubpages,
    SiCloudflare, SiWordpress, SiJupyter, SiPostman,
    SiArchlinux, SiScikitlearn,
} from 'react-icons/si'
import {
    TbBrandCSharp, TbBrandCpp, TbBrandUnity, TbBrandVscode,
    TbBrandWindows,
} from 'react-icons/tb'
import { FaJava, FaDatabase, FaRobot, FaNetworkWired } from 'react-icons/fa'
import { SiGnubash } from 'react-icons/si'

const skillIcons = {
    // Languages
    'Java': <FaJava />,
    'Python': <SiPython />,
    'C#': <TbBrandCSharp />,
    'C++': <TbBrandCpp />,
    'JavaScript': <SiJavascript />,
    'TypeScript': <SiTypescript />,
    'PHP': <SiPhp />,
    'SQL': <FaDatabase />,
    'Bash / Shell': <SiGnubash />,

    // Frameworks & Libraries
    'React.js': <SiReact />,
    'Vite': <SiVite />,
    'Node.js': <SiNodedotjs />,
    'Express': <SiExpress />,
    'MongoDB': <SiMongodb />,
    'PyTorch': <SiPytorch />,
    'Numpy': <SiNumpy />,
    'Pandas': <SiPandas />,
    'Unity': <TbBrandUnity />,
    'Pygame': <SiPython />,
    'pygame': <SiPython />,

    // Tools & Platforms
    'Git / GitHub': <SiGithub />,
    'GitHub Pages': <SiGithubpages />,
    'Cloudflare': <SiCloudflare />,
    'WordPress': <SiWordpress />,
    'VS Code': <TbBrandVscode />,
    'Jupyter Notebook': <SiJupyter />,
    'Jupyter Notebooks': <SiJupyter />,
    'Postman': <SiPostman />,
    'Arch Linux': <SiArchlinux />,
    'Windows': <TbBrandWindows />,

    // AI & ML
    'Neural Networks': <SiScikitlearn />,
    'AI Tools & Prompting': <FaRobot />,

    // Networking
    'Switching & Routing': <FaNetworkWired />,
    'VLANs & Trunking': <FaNetworkWired />,
    'Subnetting & CIDR': <FaNetworkWired />,
    'IP Addressing (IPv4 & IPv6)': <FaNetworkWired />,
    'OSPF': <FaNetworkWired />,
    'STP (Spanning Tree Protocol)': <FaNetworkWired />,
    'NAT & PAT': <FaNetworkWired />,
    'DHCP & DNS': <FaNetworkWired />,
    'ACLs (Access Control Lists)': <FaNetworkWired />,
    'EtherChannel': <FaNetworkWired />,
    'Inter-VLAN Routing': <FaNetworkWired />,
    'WAN Technologies': <FaNetworkWired />,
    'Network Troubleshooting': <FaNetworkWired />,
    'Cisco IOS Configuration': <FaNetworkWired />,
    'Network Security Fundamentals': <FaNetworkWired />,
}

const skillGroups = [
    {
        title: 'Languages',
        items: ['Java', 'Python', 'C#', 'C++', 'C', 'JavaScript', 'TypeScript', 'SQL', 'PHP', 'HTML/CSS', 'Bash / Shell'],
    },
    {
        title: 'Framework & Libraries',
        items: ['React.js', 'Vite', 'Node.js', 'Express', 'MongoDB', 'PyTorch', 'JavaFX', 'JFrame', 'Numpy', 'matplotlib', 'Pandas', 'pygame', 'tkinter', 'Node-RED'],
    },
    {
        title: 'Game Development',
        items: ['Unity', 'C# Scripting', 'Scene Management', 'Physics & Collision', 'Asset Pipeline', 'Pygame'],
    },
    {
        title: 'Networking',
        items: ['Switching & Routing', 'VLANs & Trunking', 'Subnetting & CIDR', 'IP Addressing (IPv4 & IPv6)', 'OSPF', 'STP (Spanning Tree Protocol)', 'NAT & PAT', 'DHCP & DNS', 'ACLs (Access Control Lists)', 'EtherChannel', 'Inter-VLAN Routing', 'WAN Technologies', 'Network Troubleshooting', 'Cisco IOS Configuration', 'Network Security Fundamentals'],
    },
    {
        title: 'Tools & Platforms',
        items: ['Git / GitHub', 'GitHub Pages', 'Cloudflare', 'DNS Configuration', 'Postman', 'Arch Linux', 'Windows', 'WordPress', 'VS Code', 'Jupyter Notebook'],
    },
    {
        title: 'AI & Machine Learning',
        items: ['PyTorch', 'Neural Networks', 'Jupyter Notebooks', 'AI Tools & Prompting', 'Data Manipulation'],
    },
    {
        title: 'Core Competencies',
        items: ['System Architecture', 'Algorithms', 'OOP', 'Data Structures', 'Full-Stack Development', 'REST APIs', 'Responsive Design'],
    },
    {
        title: 'Soft Skills',
        items: ['Teamwork', 'Time Management', 'Team Leadership', 'Agile Project Management', 'Effective Communication', 'Teaching & Mentoring'],
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
                <span className="section-label">05</span>
                <span className="section-title">$ cat skills.json</span>
                <div className="section-line" />
            </div>
            <div className="skills-grid">
                {skillGroups.map((group, index) => (
                    <div className="skill-group" key={group.title}>
                        <div className="skill-group-title clickable" onClick={() => toggle(index)}>
                            {group.title}
                            <span className="arrow">
                                {openIndex === index ? '−' : '+'}
                            </span>
                        </div>
                        <div className={`skill-items ${openIndex === index ? 'open' : ''}`}>
                            {group.items.map((item) => (
                                <div className="skill-item" key={item}>
                                    {skillIcons[item] ? <span className="skill-icon">{skillIcons[item]}</span> : <div className="skill-dot" />}
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