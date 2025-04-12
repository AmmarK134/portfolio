import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaPalette, FaRobot, FaCogs, FaUsers } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <FaCode />,
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'UI/UX Design'],
  },
  {
    title: 'Backend Development',
    icon: <FaServer />,
    skills: ['Java', 'Python', 'C', 'API Development'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaCloud />,
    skills: ['Azure DevOps', 'Microsoft Azure', 'Git', 'GitHub'],
  },
  {
    title: 'Design & Creative',
    icon: <FaPalette />,
    skills: ['Graphic Design', 'Adobe Photoshop', 'Adobe Premiere Pro', '2D Animation'],
  },
  {
    title: 'AI & Automation',
    icon: <FaRobot />,
    skills: ['GPT-3', 'DALL-E', 'AI Integration'],
  },
  {
    title: 'Technical Skills',
    icon: <FaCogs />,
    skills: ['Visual Basic', 'Arduino', 'Electronics', 'Robotics', 'Game Development'],
  },
  {
    title: 'Soft Skills',
    icon: <FaUsers />,
    skills: ['Team Leadership', 'Communication', 'Problem Solving', 'Time Management'],
  },
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle">A comprehensive overview of my technical capabilities</p>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            variants={itemVariants}
          >
            <div className="category-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills; 