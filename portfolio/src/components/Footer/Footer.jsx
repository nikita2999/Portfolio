import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-main" id ="contact">
      <div className="footer-name">Nikita Sharma</div>
      
      <div className="footer-contact">
        <span>Contact Me:</span>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/nikita-s-4914b5249/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
          <a href="https://github.com/nikita2999" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
          <a href="mailto:nikitasharma@example.com">
            <FaEnvelope className="footer-icon" />
          </a>
        </div>
      </div>

     <div className="footer-copy">
  Made with <span className="pink-heart">❤️</span> . Nikita Sharma
</div>
    </footer>
  );
};

export default Footer;
