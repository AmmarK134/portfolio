import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'Email Me',
    link: 'mailto:ammar.kashif@torontomu.ca'
  },
  {
    icon: <FaGithub />,
    title: 'GitHub',
    value: 'AmmarK134',
    link: 'https://github.com/AmmarK134'
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    value: 'Ammar Kashif',
    link: 'https://linkedin.com/in/ammar-kashif'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    value: 'Toronto, Canada',
    link: 'https://www.google.com/maps/place/Toronto'
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">Let's connect and discuss opportunities</p>

      <motion.div
        className="contact-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            className="contact-card"
            variants={itemVariants}
          >
            {info.link ? (
              <a 
                href={info.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  <span>{info.value}</span>
                </div>
              </a>
            ) : (
              <>
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  <span>{info.value}</span>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="contact-message"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact; 