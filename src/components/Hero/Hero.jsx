import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AmmarImage from '../../assets/ammar.JPG';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'Full Stack Developer & AI Enthusiast',
    'Natural Born Toronto Man'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % phrases.length;
      const fullText = phrases[currentIndex];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(100); // Faster when deleting
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150); // Normal speed when typing
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Wait 2s before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before starting next word
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Ammar Kashif</h1>
          <h2 className="typewriter">{text}<span className="cursor">|</span></h2>
          <p>
            Building innovative solutions with modern technologies.
            Specializing in web development, AI integration, and creating seamless user experiences.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Get in Touch</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-image">
            <img src={AmmarImage} alt="Ammar Kashif" onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/400x400.png?text=AK';
            }} />
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-scroll">
        <div className="mouse"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero; 