/* ============================================================
   Projects — Glassmorphism cards with tilt effect
   ============================================================ */
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'Pooja Telecom',
    tag: 'E-Commerce',
    tagClass: 'ecommerce',
    description:
      'Full-stack MERN e-commerce platform for a telecom retailer. Features product listings, shopping cart, admin panel for inventory management, and a clean customer-facing storefront.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Vercel'],
    live: 'https://pooja-telecom.vercel.app',
    github: 'https://github.com/ajayjawade06/PoojaTelecom',
  },
  {
    title: 'Lokawani',
    tag: 'Civic Tech',
    tagClass: 'civic',
    description:
      'Full-stack MERN civic portal connecting citizens with local governance. Built for real-world deployment with a focus on accessibility and information delivery.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vercel'],
    live: 'https://lokawani.vercel.app',
    github: 'https://github.com/ajayjawade06',
  },
  {
    title: 'News Portal',
    tag: 'Full Stack',
    tagClass: 'fullstack',
    description:
      'Full-stack MERN news portal with admin panel for publishing and managing articles, category-based filtering, Cloudinary image storage, and a responsive reader-facing interface.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'REST API'],
    github: 'https://github.com/ajayjawade06/News-Portal',
  },
  {
    title: 'Notes Sharing Platform',
    tag: 'Full Stack',
    tagClass: 'fullstack',
    description:
      'A PHP-based notes sharing platform where students can upload, browse, and download academic notes. Features user authentication and organized subject-wise categorization.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/ajayjawade06/Notes-Sharing-PHP-Project',
  },
];

const tiltOptions = {
  max: 15,
  scale: 1.02,
  speed: 400,
  glare: true,
  'max-glare': 0.15,
};

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`project-card-wrapper ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <Tilt options={tiltOptions}>
        <div className="project-card glass-card">
          <div className="project-header">
            <span className={`tag-badge ${project.tagClass}`}>{project.tag}</span>
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
          <div className="project-links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                <FiExternalLink /> Live Demo
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
              <FiGithub /> GitHub
            </a>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={`projects fade-section ${inView ? 'visible' : ''}`} id="projects" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="section-line" />
          <p>Real-world applications I've built and deployed</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
