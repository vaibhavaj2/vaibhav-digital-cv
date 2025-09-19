import React from 'react';
import { personalInfo } from '../data/personalInfo';
import './Education.css';
import developer from '../assets/AWS-Developer-associate-logo.png';

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="education-content">
          <div className="education-list">
            {personalInfo.education.map((item, index) => (
              <div key={index} className="education-item">
                <div className="education-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                  </svg>
                </div>
                <div className="education-details">
                  <h3 className="education-degree">{item.degree}</h3>
                  <div className="education-school">{item.school}</div>
                  <div className="education-meta">
                    <span className="education-period">{item.period}</span>
                    {item.gpa && (
                      <span className="education-gpa">GPA: {item.gpa}</span>
                    )}
                  </div>
                  {item.description && (
                    <p className="education-description">{item.description}</p>
                  )}
                  {item.courses && (
                    <div className="education-courses">
                      <strong>Relevant Coursework:</strong>
                      <div className="courses-list">
                        {item.courses.map((course, courseIndex) => (
                          <span key={courseIndex} className="course-tag">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-section">
            <h3 className="certifications-title">Certifications & Learning</h3>
            <div className="certifications-grid">
              <div className="certification-item">
                <div className="cert-icon aws">
                  <svg width="32" height="32" viewBox="0 0 247.48 150" fill="currentColor">
                    <path d="M27.06 70.53c0 12.97 2.29 23.43 6.88 31.38 4.58 7.94 11.49 11.92 20.73 11.92 8.18 0 14.62-3.25 19.32-9.75 4.69-6.5 7.04-14.85 7.04-25.03V40.18h15.7v59.23c0 15.3-4.37 26.97-13.12 35.01-8.75 8.04-19.58 12.06-32.49 12.06-13.86 0-24.76-4.12-32.7-12.36-7.94-8.24-11.91-19.55-11.91-33.94V40.18h15.55v30.35zm77.81 19.32c0-8.69 2.42-15.64 7.26-20.87 4.84-5.23 11.65-7.84 20.43-7.84 8.24 0 14.85 2.61 19.83 7.84 4.98 5.23 7.47 12.18 7.47 20.87s-2.49 15.64-7.47 20.87c-4.98 5.23-11.59 7.84-19.83 7.84-8.78 0-15.59-2.61-20.43-7.84-4.84-5.23-7.26-12.18-7.26-20.87zm40.59 0c0-5.74-1.48-10.39-4.44-13.94-2.96-3.55-7.07-5.33-12.33-5.33-5.32 0-9.45 1.78-12.39 5.33-2.94 3.55-4.41 8.2-4.41 13.94 0 5.68 1.47 10.31 4.41 13.88 2.94 3.57 7.07 5.36 12.39 5.36 5.26 0 9.37-1.79 12.33-5.36 2.96-3.57 4.44-8.2 4.44-13.88zm20.52-27.79h12.42l.96 7.32c3.13-5.8 8.6-8.7 16.41-8.7 7.26 0 12.84 2.75 16.74 8.25 3.9 5.5 5.85 13.18 5.85 23.04s-1.95 17.54-5.85 23.04c-3.9 5.5-9.48 8.25-16.74 8.25-7.57 0-12.96-2.9-16.17-8.7l-.48 7.32h-12.14V62.06zm30.36 27.79c0-6.02-1.34-10.75-4.02-14.19-2.68-3.44-6.41-5.16-11.19-5.16-4.84 0-8.6 1.72-11.28 5.16-2.68 3.44-4.02 8.17-4.02 14.19s1.34 10.75 4.02 14.19c2.68 3.44 6.44 5.16 11.28 5.16 4.78 0 8.51-1.72 11.19-5.16 2.68-3.44 4.02-8.17 4.02-14.19z"/>
                    <path d="M220.48 87.03c-8.48 6.26-20.68 9.39-36.6 9.39-17.3 0-32.87-6.39-46.71-19.17-.97-.88-.1-2.07 1.06-1.39 13.34 7.77 29.84 12.44 46.88 12.44 11.49 0 24.12-2.38 35.73-7.31 1.75-.75 3.22 1.15 1.64 2.04z"/>
                    <path d="M225.73 81.21c-1.08-1.39-7.15-.66-9.87-.33-.82.1-1.94-.62-.21-1.14 4.84-3.4 12.78-2.42 13.71-1.28 0.93 1.14-.24 9.07-4.77 12.85-.69.58-1.34.27-1.03-.5 1.02-2.55 3.31-8.21 2.17-9.6z"/>
                  </svg>
                </div>
                <div className="cert-content">
                  <h4>AWS Certified Solutions Architect</h4>
                  <p>Amazon Web Services - Professional Level</p>
                  <span className="cert-date">2023</span>
                </div>
              </div>

              <div className="certification-item">
                <div className="cert-icon aws-badge">
                  <img
                    src={developer}
                    alt="AWS Certified Developer Associate"
                    className="aws-cert-badge"
                  />
                </div>
                <div className="cert-content">
                  <h4>AWS Certified Developer</h4>
                  <p>Amazon Web Services - Associate Level</p>
                  <span className="cert-date">2022</span>
                </div>
              </div>

              <div className="certification-item">
                <div className="cert-icon aws">
                  <svg width="32" height="32" viewBox="0 0 247.48 150" fill="currentColor">
                    <path d="M27.06 70.53c0 12.97 2.29 23.43 6.88 31.38 4.58 7.94 11.49 11.92 20.73 11.92 8.18 0 14.62-3.25 19.32-9.75 4.69-6.5 7.04-14.85 7.04-25.03V40.18h15.7v59.23c0 15.3-4.37 26.97-13.12 35.01-8.75 8.04-19.58 12.06-32.49 12.06-13.86 0-24.76-4.12-32.7-12.36-7.94-8.24-11.91-19.55-11.91-33.94V40.18h15.55v30.35zm77.81 19.32c0-8.69 2.42-15.64 7.26-20.87 4.84-5.23 11.65-7.84 20.43-7.84 8.24 0 14.85 2.61 19.83 7.84 4.98 5.23 7.47 12.18 7.47 20.87s-2.49 15.64-7.47 20.87c-4.98 5.23-11.59 7.84-19.83 7.84-8.78 0-15.59-2.61-20.43-7.84-4.84-5.23-7.26-12.18-7.26-20.87zm40.59 0c0-5.74-1.48-10.39-4.44-13.94-2.96-3.55-7.07-5.33-12.33-5.33-5.32 0-9.45 1.78-12.39 5.33-2.94 3.55-4.41 8.2-4.41 13.94 0 5.68 1.47 10.31 4.41 13.88 2.94 3.57 7.07 5.36 12.39 5.36 5.26 0 9.37-1.79 12.33-5.36 2.96-3.57 4.44-8.2 4.44-13.88zm20.52-27.79h12.42l.96 7.32c3.13-5.8 8.6-8.7 16.41-8.7 7.26 0 12.84 2.75 16.74 8.25 3.9 5.5 5.85 13.18 5.85 23.04s-1.95 17.54-5.85 23.04c-3.9 5.5-9.48 8.25-16.74 8.25-7.57 0-12.96-2.9-16.17-8.7l-.48 7.32h-12.14V62.06zm30.36 27.79c0-6.02-1.34-10.75-4.02-14.19-2.68-3.44-6.41-5.16-11.19-5.16-4.84 0-8.6 1.72-11.28 5.16-2.68 3.44-4.02 8.17-4.02 14.19s1.34 10.75 4.02 14.19c2.68 3.44 6.44 5.16 11.28 5.16 4.78 0 8.51-1.72 11.19-5.16 2.68-3.44 4.02-8.17 4.02-14.19z"/>
                    <path d="M220.48 87.03c-8.48 6.26-20.68 9.39-36.6 9.39-17.3 0-32.87-6.39-46.71-19.17-.97-.88-.1-2.07 1.06-1.39 13.34 7.77 29.84 12.44 46.88 12.44 11.49 0 24.12-2.38 35.73-7.31 1.75-.75 3.22 1.15 1.64 2.04z"/>
                    <path d="M225.73 81.21c-1.08-1.39-7.15-.66-9.87-.33-.82.1-1.94-.62-.21-1.14 4.84-3.4 12.78-2.42 13.71-1.28 0.93 1.14-.24 9.07-4.77 12.85-.69.58-1.34.27-1.03-.5 1.02-2.55 3.31-8.21 2.17-9.6z"/>
                  </svg>
                </div>
                <div className="cert-content">
                  <h4>AWS Certified Cloud Practitioner</h4>
                  <p>Amazon Web Services - Foundational Level</p>
                  <span className="cert-date">2021</span>
                </div>
              </div>

              <div className="certification-item">
                <div className="cert-icon aws">
                  <svg width="32" height="32" viewBox="0 0 247.48 150" fill="currentColor">
                    <path d="M27.06 70.53c0 12.97 2.29 23.43 6.88 31.38 4.58 7.94 11.49 11.92 20.73 11.92 8.18 0 14.62-3.25 19.32-9.75 4.69-6.5 7.04-14.85 7.04-25.03V40.18h15.7v59.23c0 15.3-4.37 26.97-13.12 35.01-8.75 8.04-19.58 12.06-32.49 12.06-13.86 0-24.76-4.12-32.7-12.36-7.94-8.24-11.91-19.55-11.91-33.94V40.18h15.55v30.35zm77.81 19.32c0-8.69 2.42-15.64 7.26-20.87 4.84-5.23 11.65-7.84 20.43-7.84 8.24 0 14.85 2.61 19.83 7.84 4.98 5.23 7.47 12.18 7.47 20.87s-2.49 15.64-7.47 20.87c-4.98 5.23-11.59 7.84-19.83 7.84-8.78 0-15.59-2.61-20.43-7.84-4.84-5.23-7.26-12.18-7.26-20.87zm40.59 0c0-5.74-1.48-10.39-4.44-13.94-2.96-3.55-7.07-5.33-12.33-5.33-5.32 0-9.45 1.78-12.39 5.33-2.94 3.55-4.41 8.2-4.41 13.94 0 5.68 1.47 10.31 4.41 13.88 2.94 3.57 7.07 5.36 12.39 5.36 5.26 0 9.37-1.79 12.33-5.36 2.96-3.57 4.44-8.2 4.44-13.88zm20.52-27.79h12.42l.96 7.32c3.13-5.8 8.6-8.7 16.41-8.7 7.26 0 12.84 2.75 16.74 8.25 3.9 5.5 5.85 13.18 5.85 23.04s-1.95 17.54-5.85 23.04c-3.9 5.5-9.48 8.25-16.74 8.25-7.57 0-12.96-2.9-16.17-8.7l-.48 7.32h-12.14V62.06zm30.36 27.79c0-6.02-1.34-10.75-4.02-14.19-2.68-3.44-6.41-5.16-11.19-5.16-4.84 0-8.6 1.72-11.28 5.16-2.68 3.44-4.02 8.17-4.02 14.19s1.34 10.75 4.02 14.19c2.68 3.44 6.44 5.16 11.28 5.16 4.78 0 8.51-1.72 11.19-5.16 2.68-3.44 4.02-8.17 4.02-14.19z"/>
                    <path d="M220.48 87.03c-8.48 6.26-20.68 9.39-36.6 9.39-17.3 0-32.87-6.39-46.71-19.17-.97-.88-.1-2.07 1.06-1.39 13.34 7.77 29.84 12.44 46.88 12.44 11.49 0 24.12-2.38 35.73-7.31 1.75-.75 3.22 1.15 1.64 2.04z"/>
                    <path d="M225.73 81.21c-1.08-1.39-7.15-.66-9.87-.33-.82.1-1.94-.62-.21-1.14 4.84-3.4 12.78-2.42 13.71-1.28 0.93 1.14-.24 9.07-4.77 12.85-.69.58-1.34.27-1.03-.5 1.02-2.55 3.31-8.21 2.17-9.6z"/>
                  </svg>
                </div>
                <div className="cert-content">
                  <h4>AWS Certified DevOps Engineer</h4>
                  <p>Amazon Web Services - Professional Level</p>
                  <span className="cert-date">2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="education-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">4</div>
              <div className="stat-label">AWS Certifications</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">{personalInfo.education.length}</div>
              <div className="stat-label">Degrees</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">100+</div>
              <div className="stat-label">Hours Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;