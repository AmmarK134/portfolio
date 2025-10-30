import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSpotify, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiOpenai, SiVisualbasic } from 'react-icons/si';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'PlaylistHelper',
    subtitle: 'AI-Powered Spotify Playlist Creator',
    description: 'A complete Spotify companion web application that makes music discovery and control simple, intuitive, and fully personalized. Users can create playlists through the web app based on their mood, preferred artists, or specific genres, with automatic creation and saving to their Spotify account.',
    longDescription: 'PlaylistHelper is a comprehensive Spotify companion web application built to make music discovery and control simple, intuitive, and fully personalized. The project allows users to create playlists directly through the web app based on their current mood, preferred artists, or specific genres. Once generated, these playlists are automatically created and saved inside the user\'s Spotify account, eliminating the need for manual curation. Beyond playlist creation, PlaylistHelper gives users complete control over their listening experience with play/pause, skip/replay, volume control, playlist deletion, and listening activity monitoring.',
    image: 'https://via.placeholder.com/600x400/1DB954/FFFFFF?text=PlaylistHelper+Preview',
    technologies: ['Next.js', 'TypeScript', 'React.js', 'Node.js', 'Tailwind CSS', 'Spotify Web API', 'OpenAI API', 'REST APIs', 'OAuth', 'Full-Stack Development', 'Responsive Web Design', 'UI/UX'],
    icons: [SiNextdotjs, SiTypescript, FaReact, FaNodeJs, SiTailwindcss, FaSpotify, SiOpenai],
    github: 'https://github.com/AmmarK134/playlisthelper',
    live: '#',
    period: 'Oct 2025',
    status: 'Completed',
    features: [
      'AI-powered playlist generation based on mood and preferences',
      'Real-time Spotify playback control',
      'Automatic playlist creation and saving',
      'User authentication with Spotify OAuth',
      'Detailed listening statistics and analytics',
      'Responsive design with modern UI/UX'
    ],
    color: '#1DB954'
  },
  {
    id: 2,
    title: 'Portfolio Assistant',
    subtitle: 'AI-Powered Personal Portfolio',
    description: 'A personal portfolio website featuring an interactive AI assistant powered by OpenAI\'s API. This project enhances user engagement by providing a unique, conversational experience, allowing visitors to ask questions and receive tailored responses about my work and experience.',
    longDescription: 'Currently developing a personal portfolio website featuring an interactive AI assistant powered by OpenAI\'s API. This project aims to enhance user engagement by providing a unique, conversational experience, allowing visitors to ask questions and receive tailored responses. I\'m integrating the assistant seamlessly within the portfolio using React and JavaScript, focusing on clean UI/UX design and smooth API integration.',
    image: 'https://via.placeholder.com/600x400/21247C/FFFFFF?text=Portfolio+AI+Assistant',
    technologies: ['Web Development', 'React.js', 'JavaScript', 'Application Programming Interfaces (API)', 'UI/UX', 'Artificial Intelligence (AI)', 'Front-End Development'],
    icons: [FaReact, FaHtml5, FaCss3Alt, SiOpenai],
    github: 'https://github.com/AmmarK134/portfolio',
    live: '#',
    period: 'Sep 2024 - Jan 2025',
    status: 'In Progress',
    features: [
      'Interactive AI chat assistant',
      'Seamless API integration',
      'Modern React-based architecture',
      'Responsive design',
      'Real-time conversation capabilities',
      'Clean and intuitive UI/UX'
    ],
    color: '#21247C'
  },
  {
    id: 3,
    title: 'AlarmClock',
    subtitle: 'Comprehensive Desktop Application',
    description: 'A comprehensive Alarm Clock application featuring a user-friendly interface with multiple alarm tabs. The project includes a real-time clock panel alongside three independent alarm tabs with customizable settings and sound options.',
    longDescription: 'Developed a comprehensive Alarm Clock application featuring a user-friendly interface with multiple alarm tabs. The project includes a real-time clock panel alongside three independent alarm tabs. Each alarm can be customized with AM/PM settings, specific hours, and sounds. Key features include set and cancel functionality, time validation, alarm activation, AM/PM handling, and dynamic interface adjustment.',
    image: 'https://via.placeholder.com/600x400/4A90E2/FFFFFF?text=AlarmClock+Application',
    technologies: ['Visual Basic', 'Visual Basic for Applications (VBA)', 'Web Applications', 'Visual Basic .NET (VB.NET)', 'Back-End Web Development', 'VBA Programming'],
    icons: [SiVisualbasic],
    github: 'https://github.com/AmmarK134/AlarmClock_V1',
    live: '#',
    period: 'Oct 2024',
    status: 'Completed',
    features: [
      'Multiple alarm tabs with independent settings',
      'Real-time clock synchronization',
      'Custom sound selection (Crickets, Bird, Cow)',
      'Time input validation',
      'Dynamic interface adjustments',
      'AM/PM handling with pre-selection'
    ],
    color: '#4A90E2'
  },
  {
    id: 4,
    title: 'PlanetPal',
    subtitle: 'Sustainable Waste Management WebApp',
    description: 'An innovative web application focused on sustainable waste management, featuring an AI-powered chat assistant. The platform helps users make environmentally conscious decisions about waste disposal and recycling.',
    longDescription: 'PlanetPal is a webapp that tackles the growing issue of waste by creating sustainable solutions to manage it more effectively. We\'re focused on reducing environmental impact and promoting responsible waste practices to protect our planet for future generations.',
    image: 'https://via.placeholder.com/600x400/00C851/FFFFFF?text=PlanetPal+Eco+App',
    technologies: ['React.js', 'Cascading Style Sheets (CSS)', 'HTML', 'GitHub', 'GPT-3', 'Teamwork'],
    icons: [FaReact, FaHtml5, FaCss3Alt, SiOpenai],
    github: '#',
    live: '#',
    period: 'Aug 2024',
    status: 'Completed',
    features: [
      'AI-powered waste management assistant',
      'Interactive chat interface',
      'Modern, eco-themed design',
      'Contact form for user inquiries',
      'Responsive layout',
      'Team collaboration features'
    ],
    color: '#00C851'
  },
  {
    id: 5,
    title: 'Recipe Website',
    subtitle: 'First HTML Project',
    description: 'My first HTML project featuring three dishes, serving as a great introduction to HTML and CSS implementation. This project demonstrates fundamental web development skills and design principles.',
    longDescription: 'I am proud to introduce my first HTML project. Currently featuring three dishes, this was a great way to learn how HTML works and how I can implement CSS into this. This project showcases my journey into web development and understanding of basic HTML structure and CSS styling.',
    image: 'https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Recipe+Website',
    technologies: ['HTML'],
    icons: [FaHtml5],
    github: 'https://github.com/AmmarK134/recipes_html',
    live: 'https://ammark134.github.io/recipes_html/',
    period: 'Feb 2024',
    status: 'Completed',
    features: [
      'Clean HTML structure',
      'CSS styling implementation',
      'Three featured recipes',
      'Responsive design basics',
      'GitHub Pages deployment',
      'Learning project documentation'
    ],
    color: '#FF6B6B'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="project-card"
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ '--project-color': project.color }}
    >
      <div className="project-header">
        <div className="project-image-container">
          <img src={project.image} alt={project.title} />
          <div className="project-overlay">
            <div className="project-status">{project.status}</div>
            <div className="project-period">{project.period}</div>
          </div>
        </div>
        <div className="project-tech-icons">
          {project.icons.slice(0, 4).map((Icon, idx) => (
            <div key={idx} className="tech-icon">
              <Icon size={20} />
            </div>
          ))}
          {project.icons.length > 4 && (
            <div className="tech-icon more">+{project.icons.length - 4}</div>
          )}
        </div>
      </div>

      <div className="project-content">
        <div className="project-title-section">
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-features">
          <h4>Key Features</h4>
          <ul>
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-technologies">
          {project.technologies.slice(0, 6).map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 6 && (
            <span className="tech-tag more">+{project.technologies.length - 6} more</span>
          )}
        </div>

        <div className="project-links">
          <a 
            href={project.github} 
            className="project-link github" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="View Code"
          >
            <FaGithub size={20} />
          </a>
          {project.live !== '#' && (
            <a 
              href={project.live} 
              className="project-link live" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Live Demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>A showcase of my recent work and personal projects</p>
          <div className="section-divider"></div>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 