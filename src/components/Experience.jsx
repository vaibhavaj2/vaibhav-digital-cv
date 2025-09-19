import React from 'react';
import { personalInfo } from '../data/personalInfo';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {personalInfo.experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-circle"></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-title">{job.position}</h3>
                  <div className="job-company">{job.company}</div>
                  <div className="job-period">{job.period}</div>
                </div>
                <div className="job-description">
                  <ul>
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-card">
            <div className="summary-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>
            </div>
            <div className="summary-content">
              <h4>Professional Journey</h4>
              <p>
                My career has been focused on building scalable web applications and leading
                development teams. I've worked across the full stack, from frontend user
                interfaces to backend APIs and database design.
              </p>
            </div>
          </div>

          <div className="experience-stats">
            <div className="stat-box">
              <div className="stat-number">{personalInfo.experience.length}+</div>
              <div className="stat-label">Companies</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">
                {personalInfo.experience.reduce((total, job) => {
                  const achievements = job.description.length;
                  return total + achievements;
                }, 0)}+
              </div>
              <div className="stat-label">Key Achievements</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;