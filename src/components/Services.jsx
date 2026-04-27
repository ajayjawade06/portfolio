/* ============================================================
   Services — 3D flip cards (freelance focus)
   ============================================================ */
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiShoppingCart, FiGlobe } from 'react-icons/fi';
import './Services.css';

const services = [
  {
    icon: <FiCode />,
    title: 'Custom Web Applications',
    description:
      'End-to-end MERN stack web apps tailored to your business needs. Auth, dashboards, APIs included.',
    price: '₹15,000',
  },
  {
    icon: <FiShoppingCart />,
    title: 'E-Commerce Stores',
    description:
      'Full online store with product management, cart, admin panel, and payment gateway integration.',
    price: '₹20,000',
  },
  {
    icon: <FiGlobe />,
    title: 'Business Websites',
    description:
      'Fast, mobile-first websites for shops, clinics, and local businesses. Deployed same week.',
    price: '₹8,000',
  },
];

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={`services fade-section ${inView ? 'visible' : ''}`} id="services" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <h2>Services</h2>
          <div className="section-line" />
          <p>What I can build for you</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-flip-card"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="flip-inner">
                {/* Front */}
                <div className="flip-front glass-card">
                  <span className="service-icon">{service.icon}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="flip-hint">Hover to learn more</p>
                </div>
                {/* Back */}
                <div className="flip-back glass-card">
                  <p className="service-desc">{service.description}</p>
                  <div className="service-price-wrap">
                    <span className="service-price-label">Starting at</span>
                    <span className="service-price">{service.price}</span>
                  </div>
                  <a href="#contact" className="btn btn-primary btn-sm">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
