/* ============================================================
   Hero — Full viewport with Three.js mesh, particles, typewriter
   ============================================================ */
import React, { useState, useEffect, useRef, Suspense, lazy, useMemo } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

/* ---------- Lazy-loaded Three.js canvas ---------- */
const HeroCanvas = lazy(() => import('./HeroCanvas'));

/* ---------- Typewriter hook ---------- */
const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 40, pause = 1800) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
};

/* ---------- Particle Background (CSS fallback for mobile) ---------- */
const ParticleBG = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Simple CSS particles for all screen sizes as a lightweight alternative to tsParticles
  const particles = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
    })),
    []
  );

  return (
    <div className="hero-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

/* ---------- Floating tech icons ---------- */
const techIcons = [
  { name: 'React', color: '#61dafb', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
  { name: 'Node', color: '#68a063', path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  { name: 'MongoDB', color: '#4db33d', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
  { name: 'Express', color: '#ffffff', path: 'M24 18v-6H0v6h24zM24 6v6H0V6h24z' },
];

const FloatingIcons = () => (
  <div className="floating-icons">
    {techIcons.map((icon, i) => (
      <div
        key={icon.name}
        className="floating-icon"
        style={{
          animationDelay: `${i * 1.5}s`,
          '--icon-color': icon.color,
        }}
      >
        <span className="icon-label">{icon.name}</span>
      </div>
    ))}
  </div>
);

/* ---------- Hero Component ---------- */
const Hero = () => {
  const roles = [
    'MERN Stack Developer',
    'Full Stack Engineer',
    'Freelance Web Developer',
    'React + Node.js Expert',
  ];
  const typed = useTypewriter(roles);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Particle background */}
      <ParticleBG />

      {/* 3D background — lazy loaded, hidden on mobile */}
      {!isMobile && (
        <div className="hero-canvas-wrapper">
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </div>
      )}

      {/* Floating icons */}
      <FloatingIcons />

      {/* Hero content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="hero-greeting">Hello, World! 👋</div>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Ajay Jawade</span>
        </h1>
        <div className="hero-typewriter">
          <span className="typed-text">{typed}</span>
          <span className="cursor-blink">|</span>
        </div>
        <p className="hero-subtitle">
          I build scalable web apps for businesses — from e-commerce stores to civic platforms.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Hire Me
          </a>
        </div>

        <div className="hero-availability">
          <div className="availability-badge">
            <span className="blink-dot" />
            Available for freelance
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
