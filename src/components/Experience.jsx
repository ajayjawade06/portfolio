/* ============================================================
   Experience — Vertical timeline
   ============================================================ */
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const experiences = [
  {
    period: 'May 2025 – Present',
    company: 'Cognizant Technology Solutions',
    role: 'Analyst Trainee',
    location: 'Pune',
    points: [
      'Monitored application logs and backend services for system stability and uptime',
      'Assisted in deployment validation and post-release verification across environments',
      'Participated in root cause analysis (RCA) for production incidents',
      'Supported configuration management and environment-specific issue resolution',
    ],
  },
];

const TimelineItem = ({ exp, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      className={`timeline-item ${inView ? 'visible' : ''}`}
      ref={ref}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="timeline-dot" />
      <div className="timeline-content glass-card">
        <span className="timeline-period">{exp.period}</span>
        <h3 className="timeline-company">{exp.company}</h3>
        <span className="timeline-role">{exp.role} · {exp.location}</span>
        <ul className="timeline-points">
          {exp.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={`experience fade-section ${inView ? 'visible' : ''}`} id="experience" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <h2>Experience</h2>
          <div className="section-line" />
          <p>My professional journey so far</p>
        </div>

        <div className="timeline">
          <div className="timeline-line" />
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
