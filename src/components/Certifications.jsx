/* ============================================================
   Certifications & Achievements
   ============================================================ */
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FiAward } from 'react-icons/fi';
import './Certifications.css';

const certifications = [
  {
    title: 'NPTEL – Python for Data Science (Elite Certificate)',
    issuer: 'IIT Madras',
    period: 'Jan–Feb 2025',
    detail: 'Score: 68%',
  },
  {
    title: 'Full Stack Development Certification',
    issuer: 'MinSkole',
    period: '',
    detail: '',
  },
];

const achievements = [
  { emoji: '🥇', title: 'Winner — Hackathon Hustle', detail: 'IIMS College YashoFest 2025' },
  { emoji: '🥈', title: 'Runner-up — Error Hunt', detail: 'IIMS College YashoFest 2025' },
  { emoji: '🏅', title: 'Elite Certificate — NPTEL Python for Data Science', detail: 'IIT Madras' },
];

const Certifications = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={`certifications fade-section ${inView ? 'visible' : ''}`} id="certifications" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <h2>Certifications & Achievements</h2>
          <div className="section-line" />
        </div>

        <div className="cert-grid">
          {/* Left — Certifications */}
          <div className="cert-column">
            <h3 className="cert-col-title">
              <FiAward /> Certifications
            </h3>
            {certifications.map((cert, i) => (
              <div key={i} className="cert-card glass-card">
                <h4 className="cert-name">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.period && <span className="cert-period">{cert.period}</span>}
                {cert.detail && <span className="cert-detail">{cert.detail}</span>}
              </div>
            ))}
          </div>

          {/* Right — Achievements */}
          <div className="cert-column">
            <h3 className="cert-col-title">🏆 Achievements</h3>
            {achievements.map((ach, i) => (
              <div key={i} className="achievement-card glass-card">
                <span className="achievement-emoji">{ach.emoji}</span>
                <div>
                  <h4 className="achievement-title">{ach.title}</h4>
                  <p className="achievement-detail">{ach.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
