/* ============================================================
   Footer — Social links and copyright
   ============================================================ */
import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="footer-container">
      <p className="footer-title">Ajay Jawade — MERN Stack Developer, Pune</p>

      <div className="footer-socials">
        <a href="https://github.com/ajayjawade06" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FiGithub />
        </a>
        <a href="https://linkedin.com/in/ajujawade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FiLinkedin />
        </a>
        <a href="https://x.com/ajujawade" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
          <FiTwitter />
        </a>
      </div>

      <p className="footer-credit">Designed & built by Ajay Jawade</p>

      <div className="availability-badge">
        <span className="blink-dot" />
        Open to freelance opportunities
      </div>
    </div>
  </footer>
);

export default Footer;
