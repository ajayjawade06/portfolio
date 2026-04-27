/* ============================================================
   Skills — 3D floating tech logo grid
   ============================================================ */
import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPython,
  FaDocker, FaGitAlt, FaLinux, FaAws, FaDatabase,
} from 'react-icons/fa';
import {
  SiJavascript, SiExpress, SiMongodb, SiMysql, SiGithubactions,
} from 'react-icons/si';
import './Skills.css';

const row1 = [
  { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
  { name: 'React.js', icon: <FaReact />, color: '#61dafb' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
  { name: 'Java', icon: <FaJava />, color: '#ed8b00' },
  { name: 'Python', icon: <FaPython />, color: '#3776ab' },
];

const row2 = [
  { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063' },
  { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4db33d' },
  { name: 'MySQL', icon: <SiMysql />, color: '#00758f' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
  { name: 'Linux', icon: <FaLinux />, color: '#fcc624' },
  { name: 'AWS', icon: <FaAws />, color: '#ff9900' },
  { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088ff' },
];

const SkillIcon = ({ skill, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`skill-icon-card ${inView ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 0.08}s`,
        '--skill-color': skill.color,
      }}
    >
      <div className="skill-icon-inner">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-icon-name">{skill.name}</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={`skills fade-section ${inView ? 'visible' : ''}`} id="skills" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <h2>Tech Stack</h2>
          <div className="section-line" />
          <p>Languages, frameworks, and tools I work with</p>
        </div>

        <div className="skills-row-label">Languages & Frontend</div>
        <div className="skills-icon-grid">
          {row1.map((s, i) => (
            <SkillIcon key={s.name} skill={s} index={i} />
          ))}
        </div>

        <div className="skills-row-label">Backend, Database & DevOps</div>
        <div className="skills-icon-grid">
          {row2.map((s, i) => (
            <SkillIcon key={s.name} skill={s} index={i + row1.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
