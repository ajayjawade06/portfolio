/* ============================================================
   Contact — Split layout with form (EmailJS ready)
   ============================================================ */
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiInstagram,
} from 'react-icons/fi';
import './Contact.css';

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'ajayjawade06@gmail.com', href: 'mailto:ajayjawade06@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '8625923389', href: 'tel:+918625923389' },
  { icon: <FiMapPin />, label: 'Location', value: 'Pune, Maharashtra', href: null },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/ajayjawade06', href: 'https://www.linkedin.com/in/ajayjawade06' },
  { icon: <FiGithub />, label: 'GitHub', value: 'github.com/ajayjawade06', href: 'https://github.com/ajayjawade06' },
  { icon: <FiInstagram />, label: 'Instagram', value: 'instagram.com/ajujawade', href: 'https://www.instagram.com/ajujawade' },
];

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({
    name: '', email: '', projectType: '', budget: '', message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    // EmailJS integration — replace IDs with your own
    // import emailjs from '@emailjs/browser';
    // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY');

    // Simulate send for now
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', projectType: '', budget: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className={`contact fade-section ${inView ? 'visible' : ''}`} id="contact" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="section-line" />
          <p>Let's build something great together</p>
        </div>

        <div className="contact-grid">
          {/* Left — Info */}
          <div className="contact-info">
            <div className="contact-info-list">
              {contactInfo.map((item, i) => (
                <div key={i} className="contact-info-item">
                  <span className="contact-info-icon">{item.icon}</span>
                  <div>
                    <span className="contact-info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-badge" style={{ marginTop: '2rem' }}>
              <span className="blink-dot" />
              Available for freelance
            </div>
          </div>

          {/* Right — Form */}
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text" name="name" placeholder="Full Name"
                value={form.name} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                type="email" name="email" placeholder="Email Address"
                value={form.email} onChange={handleChange} required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <select name="projectType" value={form.projectType} onChange={handleChange} required>
                  <option value="" disabled>Project Type</option>
                  <option value="Web App">Web App</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Business Website">Business Website</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <select name="budget" value={form.budget} onChange={handleChange} required>
                  <option value="" disabled>Budget Range</option>
                  <option value="Under ₹10k">Under ₹10k</option>
                  <option value="₹10k–25k">₹10k–25k</option>
                  <option value="₹25k–50k">₹25k–50k</option>
                  <option value="₹50k+">₹50k+</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message" placeholder="Tell me about your project..."
                rows="5" value={form.message} onChange={handleChange} required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-submit" disabled={sending}>
              {sending ? (
                <span className="spinner" />
              ) : sent ? (
                '✓ Message Sent!'
              ) : (
                <><FiSend /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
