import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import AmmarImage from '../../assets/ammar.JPG';
import './Hero.css';

const FloatingParticles = () => {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 10 + 12,
  }));

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -28, 0],
            x: [0, Math.random() * 16 - 8, 0],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
    'CS Student @ TMU',
    'Natural Born Toronto Man',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % phrases.length;
      const fullText = phrases[currentIndex];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(80);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(140);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="hero">
      <FloatingParticles />

      {/* Background grid */}
      <div className="hero-grid-bg" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left: Text */}
        <div className="hero-text">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="highlight">Ammar Kashif</span>
          </motion.h1>

          <motion.div
            className="hero-typewriter-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <span className="typewriter-prefix">I am a </span>
            <span className="typewriter">{text}</span>
            <span className="cursor">|</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I craft digital experiences that matter — from full-stack web apps
            to AI-powered solutions, bringing ideas to life with clean code and
            creative design.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <a href="#projects" className="primary-btn">
              <span>View My Work</span>
              <FaArrowRight size={14} />
            </a>
            <a
              href="/Ammar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              <FaDownload size={14} />
              <span>Resume</span>
            </a>
            <a href="#contact" className="secondary-btn">
              Let's Connect
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <a
              href="https://github.com/AmmarK134"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub size={19} />
            </a>
            <a
              href="https://linkedin.com/in/ammar-kashif"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={19} />
            </a>
            <div className="social-divider" />
            <span className="social-label">Toronto, Canada</span>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <div className="profile-image-wrapper">
            <div className="profile-rings">
              <div className="ring ring-1" />
              <div className="ring ring-2" />
            </div>
            <div className="profile-image">
              <motion.img
                src={AmmarImage}
                alt="Ammar Kashif"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x400.png?text=AK';
                }}
              />
            </div>
            <motion.div
              className="profile-glow"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Floating stat cards */}
          <motion.div
            className="stat-card stat-card-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects Built</span>
          </motion.div>

          <motion.div
            className="stat-card stat-card-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Coding</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="scroll-dot" />
        </motion.div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
