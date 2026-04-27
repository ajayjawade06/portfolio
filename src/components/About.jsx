/* ============================================================
   About — Bio, skill bars, stat counters
   ============================================================ */
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const skills = [
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'MongoDB', level: 75 },
  { name: 'Express.js', level: 75 },
  { name: 'JavaScript', level: 82 },
  { name: 'REST APIs', level: 80 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'Docker (basics)', level: 45 },
  { name: 'AWS (basics)', level: 40 },
  { name: 'Linux', level: 60 },
];

const stats = [
  { value: '1+', label: 'Years at Cognizant' },
  { value: '2', label: 'Live Deployed Projects' },
  { value: '220', label: 'GitHub Contributions (2026)' },
  { value: '1', label: 'Hackathon Won' },
];

/* Counter animation hook */
const useCounter = (target, inView, duration = 2000) => {
  const [count, setCount] = useState(0);
  const numTarget = parseInt(target);

  useEffect(() => {
    if (!inView || isNaN(numTarget)) {
      setCount(0);
      return;
    }
    let start = 0;
    const step = Math.max(1, Math.ceil(numTarget / (duration / 16)));
    const interval = setInterval(() => {
      start += step;
      if (start >= numTarget) {
        setCount(numTarget);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [inView, numTarget, duration]);

  if (isNaN(numTarget)) return target;
  return count + (target.includes('+') ? '+' : '');
};

const StatCard = ({ stat }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const animatedValue = useCounter(stat.value, inView);

  return (
    <div className="stat-card glass-card" ref={ref}>
      <span className="stat-value">{animatedValue}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
};

const SkillBar = ({ skill, inView }) => (
  <div className="skill-bar-item">
    <div className="skill-bar-header">
      <span className="skill-name">{skill.name}</span>
      <span className="skill-percent">{skill.level}%</span>
    </div>
    <div className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{ width: inView ? `${skill.level}%` : '0%' }}
      />
    </div>
  </div>
);

const About = () => {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={`about fade-section ${sectionInView ? 'visible' : ''}`} id="about" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="section-line" />
          <p>Building full-stack solutions with the MERN stack</p>
        </div>

        <div className="about-grid">
          {/* Left: Glowing orb */}
          <div className="about-visual">
            <div className="glow-orb">
              <div className="orb-ring ring-1" />
              <div className="orb-ring ring-2" />
              <div className="orb-ring ring-3" />
              <div className="orb-core" />
            </div>
          </div>

          {/* Right: Text */}
          <div className="about-text">
            <p>
              I'm an MCA student at PES Modern Institute of Business Studies, Pune,
              currently working as an Analyst Trainee at Cognizant Technology Solutions.
            </p>
            <p>
              I specialize in building full-stack web applications using the MERN stack
              — React.js on the frontend, Node.js + Express.js on the backend, and
              MongoDB for data persistence.
            </p>
            <p>
              I've built and deployed live production apps including an e-commerce
              platform and a civic portal. I'm actively available for freelance projects.
            </p>
          </div>
        </div>

        {/* Skill bars */}
        <div className="skills-section" ref={skillsRef}>
          <h3 className="skills-title">Technical Proficiency</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} inView={skillsInView} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
