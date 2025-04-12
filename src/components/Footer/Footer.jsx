import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>AK</h3>
          <p>Building the future with code</p>
        </div>

        <div className="footer-social">
          <a href="https://github.com/AmmarK134" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ammar-kashif" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:ammar.kashif@torontomu.ca">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Ammar Kashif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 