import React, { useState } from 'react';
import { personalInfo } from '../data/personalInfo';
import './Projects.css';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {personalInfo.projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="100%" height="200" viewBox="0 0 400 200" fill="none">
                    <rect width="400" height="200" fill="#f7fafc"/>
                    <rect x="20" y="20" width="360" height="160" fill="#e2e8f0" rx="8"/>
                    <circle cx="200" cy="100" r="30" fill="#cbd5e0"/>
                    <rect x="150" y="130" width="100" height="8" fill="#cbd5e0" rx="4"/>
                    <rect x="170" y="145" width="60" height="6" fill="#cbd5e0" rx="3"/>
                  </svg>
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h4>Project Preview</h4>
                      <p>Add screenshots or mockups here</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className={`project-hover-effect ${hoveredProject === index ? 'active' : ''}`}>
                <div className="hover-content">
                  <h4>View Project</h4>
                  <p>Click to explore this project</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <p className="projects-note">
            Want to see more? Check out my{' '}
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              GitHub profile
            </a>{' '}
            for additional projects and contributions.
          </p>
          <div className="project-stats">
            <div className="stat-item">
              <span className="stat-number">{personalInfo.projects.length}+</span>
              <span className="stat-label">Featured Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {[...new Set(personalInfo.projects.flatMap(p => p.technologies))].length}+
              </span>
              <span className="stat-label">Technologies Used</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;