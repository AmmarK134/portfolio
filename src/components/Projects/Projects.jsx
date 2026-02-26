import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaExternalLinkAlt, FaSpotify, FaReact,
  FaNodeJs, FaHtml5, FaCss3Alt, FaCode, FaLock, FaRobot
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiOpenai,
  SiVisualbasic, SiPython, SiJavascript, SiFlask
} from 'react-icons/si';
import './Projects.css';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Bumby',
    subtitle: 'AI Image Generation & Content Workflow',
    description: 'A proof-of-concept AI workflow (built for Riipen/Akito) that converts product photos into branded lifestyle or seasonal visuals. Includes a structured image intake process, batch handling, and quick-start documentation for non-technical stakeholders.',
    colorFrom: '#a855f7',
    colorTo: '#7c3aed',
    technologies: ['Python', 'OpenAI API', 'AI Image Tools', 'Workflow Automation', 'Documentation'],
    icons: [SiPython, SiOpenai, FaRobot],
    github: null,
    live: null,
    period: 'Dec 2025',
    status: 'Completed',
    features: [
      'AI-driven product photo → branded lifestyle image pipeline',
      'Structured image intake with naming conventions & batch handling',
      'Evaluated multiple AI tools for consistency and turnaround efficiency',
      'Written setup docs & quick-start guides for non-technical users',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'PlaylistHelper',
    subtitle: 'AI-Powered Spotify Playlist Generator',
    description: 'A full-stack Spotify companion that lets users generate personalized playlists from natural-language prompts using OpenAI. Playlists are created and saved directly to the user\'s Spotify account, with real-time playback controls and listening analytics.',
    colorFrom: '#1DB954',
    colorTo: '#17a349',
    technologies: ['Next.js', 'TypeScript', 'React.js', 'Node.js', 'Tailwind CSS', 'Spotify API', 'OpenAI API', 'OAuth 2.0 (PKCE)'],
    icons: [SiNextdotjs, SiTypescript, FaReact, FaNodeJs, SiTailwindcss, FaSpotify, SiOpenai],
    github: 'https://github.com/AmmarK134/playlisthelper',
    live: null,
    period: 'Oct 2025',
    status: 'Completed',
    features: [
      'Natural-language playlist generation via OpenAI API',
      'OAuth 2.0 with PKCE (NextAuth) for secure Spotify sign-in',
      'Real-time Spotify playback control (play, skip, volume)',
      'Automatic playlist creation & saving to user\'s Spotify account',
      'Structured error handling, input validation & deployment docs',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'COSA',
    subtitle: 'Co-op Support Application',
    description: 'A multi-role Flask web application supporting students, coordinators, employers, and admins through the co-op process. Features role-based access control, optional two-factor authentication, and 40+ manually verified QA test cases.',
    colorFrom: '#0ea5e9',
    colorTo: '#0284c7',
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'PyOTP', '2FA', 'QA Testing', 'Session Auth'],
    icons: [SiPython, SiFlask, FaLock, FaCode],
    github: null,
    live: null,
    period: 'May 2025',
    status: 'Completed',
    features: [
      'Multi-role architecture: students, coordinators, employers, admins',
      'SQLAlchemy data models with authentication & session handling',
      'Optional 2FA via PyOTP with QR-based setup flow',
      '40+ manual QA test cases executed across all key workflows',
      'Requirements gathered from end users & project mentors',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Medical Passport',
    subtitle: 'Secure Health Data Sharing Platform',
    description: 'As CTO & Co-Founder of MedPass (Signalyze), led development of a web platform for secure health data sharing and interoperability. Secured $5,000 in grant funding. Built secure Python/React prototypes exploring privacy-first access control and multi-system synchronization.',
    colorFrom: '#f43f5e',
    colorTo: '#e11d48',
    technologies: ['Python', 'React.js', 'REST APIs', 'Secure Auth', 'System Design', 'Startup'],
    icons: [SiPython, FaReact, FaLock],
    github: null,
    live: null,
    period: 'Oct 2024 – Sep 2025',
    status: 'Completed',
    features: [
      'Secure data-sharing prototypes with privacy-first access control',
      'Scalable synchronization & permission models for multi-system interop',
      'User research → prioritized user flows & iterative prototypes',
      'Secured $5,000 in grant funding; supported early-stage fundraising',
      'Architecture docs & integration patterns for knowledge transfer',
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Portfolio AI Assistant',
    subtitle: 'Interactive Portfolio with Built-In AI Chat',
    description: 'This portfolio — a React + Node.js site with an embedded OpenAI-powered AI assistant. Visitors can have real conversations about my work, skills, and experience, creating a uniquely engaging developer showcase.',
    colorFrom: '#6366f1',
    colorTo: '#8b5cf6',
    technologies: ['React.js', 'JavaScript', 'OpenAI API', 'Node.js', 'Express.js', 'Framer Motion'],
    icons: [FaReact, SiJavascript, SiOpenai, FaNodeJs],
    github: 'https://github.com/AmmarK134/portfolio',
    live: null,
    period: 'Sep 2024 – Present',
    status: 'In Progress',
    features: [
      'Interactive AI chat assistant powered by OpenAI\'s API',
      'Thread-based conversation with real-time message streaming',
      'Smooth scroll animations with Framer Motion',
      'Fully responsive across all devices',
      'Premium dark UI with indigo/violet design system',
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'PlanetPal',
    subtitle: 'AI-Powered Waste Management WebApp',
    description: 'A team-built eco-focused web application tackling global waste with an AI-powered assistant (GPT-3) that guides users on sustainable disposal and recycling practices.',
    colorFrom: '#10b981',
    colorTo: '#059669',
    technologies: ['React.js', 'CSS', 'HTML', 'GPT-3', 'Teamwork'],
    icons: [FaReact, FaHtml5, FaCss3Alt, SiOpenai],
    github: null,
    live: null,
    period: 'Aug 2024',
    status: 'Completed',
    features: [
      'AI-powered waste management guidance via GPT-3',
      'Interactive eco-friendly chat interface',
      'Modern, sustainable-themed responsive UI',
      'Collaborative team project',
    ],
  },
  {
    id: 7,
    number: '07',
    title: 'AlarmClock',
    subtitle: 'Multi-Alarm Desktop Application',
    description: 'A feature-complete desktop Alarm Clock built in Visual Basic .NET. Supports three independent alarms with custom sounds, AM/PM handling, and full time validation.',
    colorFrom: '#f59e0b',
    colorTo: '#d97706',
    technologies: ['Visual Basic .NET', 'VBA', 'Windows Forms', 'Desktop Development'],
    icons: [SiVisualbasic, FaCode],
    github: 'https://github.com/AmmarK134/AlarmClock_V1',
    live: null,
    period: 'Oct 2024',
    status: 'Completed',
    features: [
      'Three independent alarm tabs with custom settings',
      'Real-time system clock synchronization',
      'Custom alarm sounds (Crickets, Bird, Cow)',
      'Time input validation and AM/PM handling',
    ],
  },
  {
    id: 8,
    number: '08',
    title: 'Recipe Website',
    subtitle: 'First HTML & CSS Project',
    description: 'Where the journey started — a clean recipe showcase site built with pure HTML and CSS. Deployed live on GitHub Pages.',
    colorFrom: '#ef4444',
    colorTo: '#dc2626',
    technologies: ['HTML5', 'CSS3', 'GitHub Pages'],
    icons: [FaHtml5, FaCss3Alt],
    github: 'https://github.com/AmmarK134/recipes_html',
    live: 'https://ammark134.github.io/recipes_html/',
    period: 'Feb 2024',
    status: 'Completed',
    features: [
      'Semantic HTML5 structure',
      'CSS styling and responsive layout basics',
      'Three beautifully presented recipes',
      'Deployed live on GitHub Pages',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectCard = ({ project }) => (
  <motion.div
    className="project-card"
    variants={cardVariants}
    whileHover={{ y: -6 }}
    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    style={{
      '--color-from': project.colorFrom,
      '--color-to': project.colorTo,
    }}
  >
    <div className="card-accent-bar" />

    <div className="card-header">
      <div className="card-number">{project.number}</div>
      <div className="card-status-badge" data-status={project.status}>
        {project.status}
      </div>
    </div>

    <div className="card-title-block">
      <h3 className="card-title">{project.title}</h3>
      <p className="card-subtitle">{project.subtitle}</p>
    </div>

    <p className="card-description">{project.description}</p>

    <div className="card-features">
      <ul>
        {project.features.map((f, i) => (
          <li key={i}>
            <span className="feat-dot" />
            {f}
          </li>
        ))}
      </ul>
    </div>

    <div className="card-tech-row">
      {project.icons.slice(0, 6).map((Icon, i) => (
        <div key={i} className="tech-icon-chip">
          <Icon size={16} />
        </div>
      ))}
      {project.icons.length > 6 && (
        <div className="tech-icon-chip more">+{project.icons.length - 6}</div>
      )}
    </div>

    <div className="card-tags">
      {project.technologies.slice(0, 5).map((t, i) => (
        <span key={i} className="tech-tag">{t}</span>
      ))}
      {project.technologies.length > 5 && (
        <span className="tech-tag more">+{project.technologies.length - 5}</span>
      )}
    </div>

    <div className="card-footer">
      <span className="card-period">{project.period}</span>
      <div className="card-links">
        {project.github && (
          <a
            href={project.github}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
            title="View Code"
          >
            <FaGithub size={14} />
            <span>Code</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            className="card-link primary"
            target="_blank"
            rel="noopener noreferrer"
            title="Live Demo"
          >
            <FaExternalLinkAlt size={12} />
            <span>Live</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section className="projects" id="projects">
    <div className="projects-inner">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="projects-eyebrow">Selected Work</p>
        <h2>My Projects</h2>
        <p className="projects-subhead">
          A curated showcase of what I've built — full-stack apps, AI integrations, startup ventures, and creative experiments.
        </p>
        <div className="section-divider" />
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
