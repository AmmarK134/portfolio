import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa';
import './About.css';

const aboutCards = [
  {
    icon: <FaGraduationCap />,
    title: 'Education',
    description: 'Computer Science student at Toronto Metropolitan University, focusing on AI, algorithms, and full-stack web development.'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Development',
    description: 'Passionate about building innovative, user-centric solutions using modern tech stacks and best engineering practices.'
  },
  {
    icon: <FaRocket />,
    title: 'Goals',
    description: 'Committed to continuous learning and building impactful applications that solve real-world problems at scale.'
  }
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p>
            Hello! I'm <strong>Ammar Kashif</strong>, a Computer Science student at Toronto Metropolitan University
            with a passion for creating innovative digital solutions. I specialize in full-stack web development,
            AI integration, and building user-centric applications.
          </p>
          <p>
            My journey in technology is driven by a desire to solve real-world problems through code. I'm particularly
            interested in the intersection of artificial intelligence and web development — always seeking ways to
            create more intelligent, efficient, and impactful solutions.
          </p>
        </motion.div>

        <motion.div
          className="about-cards"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              className="about-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.55, ease: 'easeOut' }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
