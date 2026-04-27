/* ============================================================
   Education — Two cards side by side
   ============================================================ */
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen } from 'react-icons/fi';
import './Education.css';

const education = [
  {
    institution: 'PES Modern Institute of Business Studies, Pune',
    degree: 'Master of Computer Applications (MCA)',
    period: 'Sep 2024 – Jul 2026',
    accent: 'indigo',
  },
  {
    institution: 'Santaji Mahavidyalaya, Nagpur',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: 'Sep 2021 – Jun 2024',
    accent: 'teal',
  },
];

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={`education fade-section ${inView ? 'visible' : ''}`} id="education" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <h2>Education</h2>
          <div className="section-line" />
          <p>Academic background and qualifications</p>
        </div>

        <div className="education-grid">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`education-card glass-card edu-${edu.accent}`}
            >
              <div className="edu-icon">
                <FiBookOpen />
              </div>
              <h3 className="edu-institution">{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>
              <span className="edu-period">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
