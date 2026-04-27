/* ============================================================
   Footer — Social links and copyright
   ============================================================ */
import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="footer-container">
      <p className="footer-title">Ajay Jawade — MERN Stack Developer, Pune</p>

      <div className="footer-socials">
        <a href="https://github.com/ajayjawade06" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/ajayjawade06" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/ajujawade" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FiInstagram />
        </a>
      </div>

      <p className="footer-credit">Designed & built by Ajay Jawade</p>

      <div className="availability-badge">
        <span className="blink-dot" />
        Open to full-time opportunities
      </div>
    </div>
  </footer>
);

export default Footer;
