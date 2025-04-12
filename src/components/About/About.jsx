import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa';
import './About.css';

const aboutCards = [
  {
    icon: <FaGraduationCap />,
    title: 'Education',
    description: 'Computer Science student at Toronto Metropolitan University, focusing on AI and web development.'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Development',
    description: 'Passionate about creating innovative solutions using modern technologies and best practices.'
  },
  {
    icon: <FaRocket />,
    title: 'Goals',
    description: 'Committed to continuous learning and building impactful applications that solve real-world problems.'
  }
];

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Get to know me better</p>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Hello! I'm Ammar Kashif, a Computer Science student at Toronto Metropolitan University with a passion for creating innovative digital solutions. I specialize in web development, AI integration, and building user-centric applications.
          </p>
          <p>
            My journey in technology is driven by a desire to solve real-world problems through code. I'm particularly interested in the intersection of artificial intelligence and web development, always seeking ways to create more intelligent and efficient solutions.
          </p>
        </motion.div>

        <motion.div
          className="about-cards"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, staggerChildren: 0.2 }}
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
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