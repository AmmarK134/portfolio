import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'AlarmClock',
    description: 'A comprehensive Alarm Clock application with a modern interface featuring multiple alarm tabs. Key features include real-time clock display, AM/PM settings, customizable alarm sounds (Crickets, Bird, Cow), and a user-friendly numeric keypad for time input. The application includes validation to ensure accurate time settings and maintains state across tabs.',
    image: '/alarm-preview.jpg',
    fallbackImage: 'https://via.placeholder.com/800x400.png?text=AlarmClock+Preview',
    technologies: ['Visual Basic', 'VBA', 'UI/UX', 'Time Management', 'Windows Forms'],
    github: 'https://github.com/AmmarK134/AlarmClock_V1',
    live: '#',
    period: 'Oct 2024',
    features: [
      'Multiple alarm tabs with independent settings',
      'Real-time clock synchronization',
      'Custom sound selection',
      'Dynamic interface adjustments',
      'Time input validation'
    ]
  },
  {
    title: 'PlanetPal',
    description: 'An innovative web application focused on sustainable waste management, featuring an AI-powered chat assistant. The platform helps users make environmentally conscious decisions about waste disposal and recycling. The modern UI includes an interactive chat interface and a comprehensive contact system for user inquiries.',
    image: '/planetpal-preview.jpg',
    fallbackImage: 'https://via.placeholder.com/800x400.png?text=PlanetPal+Preview',
    technologies: ['React.js', 'CSS', 'HTML', 'GPT-3', 'UI/UX Design'],
    github: '#',
    live: '#',
    period: 'Aug 2024',
    features: [
      'AI-powered waste management assistant',
      'Interactive chat interface',
      'Modern, eco-themed design',
      'Contact form for user inquiries',
      'Responsive layout'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Some of my recent work</p>
        </div>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/assets/alarmclock.png" alt="AlarmClock Project" />
            </div>
            <div className="project-content">
              <h3>AlarmClock</h3>
              <p>A modern alarm clock application with smart features and intuitive interface.</p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">MongoDB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/yourusername/alarmclock" className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> View Code
                </a>
                <a href="https://alarmclock-demo.com" className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/assets/planetpal.png" alt="PlanetPal Project" />
            </div>
            <div className="project-content">
              <h3>PlanetPal</h3>
              <p>An eco-friendly app helping users track and reduce their carbon footprint.</p>
              <div className="project-tags">
                <span className="project-tag">Next.js</span>
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">TailwindCSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/yourusername/planetpal" className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> View Code
                </a>
                <a href="https://planetpal-demo.com" className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 