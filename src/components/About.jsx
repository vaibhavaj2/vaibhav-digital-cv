import React from 'react';
import { personalInfo } from '../data/personalInfo';
import './About.css';
import Vaibhav from '../assets/Vaibhav.png';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              {personalInfo.about}
            </p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Location:</strong> {personalInfo.location}
              </div>
              <div className="detail-item">
                <strong>Email:</strong>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="detail-item">
                <strong>Phone:</strong> {personalInfo.phone}
              </div>
              {personalInfo.website && (
                <div className="detail-item">
                  <strong>Website:</strong>
                  <a href={personalInfo.website} target="_blank" rel="noopener noreferrer">
                    {personalInfo.website}
                  </a>
                </div>
              )}
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{personalInfo.projects.length}+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{personalInfo.skills.length}+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="profile-photo">
                <img
                  src={Vaibhav}
                  alt="Vaibhav Ajmera - Digital Architect"
                  className="profile-image"
                />
              </div>
              <div className="floating-elements">
                <div className="floating-item" style={{top: '10%', left: '10%'}}>
                  <span>💻</span>
                </div>
                <div className="floating-item" style={{top: '20%', right: '10%'}}>
                  <span>🚀</span>
                </div>
                <div className="floating-item" style={{bottom: '20%', left: '5%'}}>
                  <span>⚡</span>
                </div>
                <div className="floating-item" style={{bottom: '10%', right: '15%'}}>
                  <span>🎯</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="personal-life-section">
          <h3 className="personal-life-title">Personal Life</h3>
          <div className="personal-life-content">
            <div className="personal-item">
              <div className="personal-icon">👨‍👩‍👧‍👦</div>
              <div className="personal-text">
                <strong>Family:</strong> {personalInfo.personalLife.family}
              </div>
            </div>

            <div className="personal-item">
              <div className="personal-icon">🏠</div>
              <div className="personal-text">
                <strong>Location:</strong> {personalInfo.personalLife.location}
              </div>
            </div>

            <div className="personal-item">
              <div className="personal-icon">🎯</div>
              <div className="personal-text">
                <strong>Philosophy:</strong> {personalInfo.personalLife.philosophy}
              </div>
            </div>

            <div className="personal-item">
              <div className="personal-icon">🎨</div>
              <div className="personal-text">
                <strong>Hobbies:</strong> {personalInfo.personalLife.hobbies.join(", ")}
              </div>
            </div>

            <div className="personal-item">
              <div className="personal-icon">💡</div>
              <div className="personal-text">
                <strong>Interests:</strong> {personalInfo.personalLife.interests.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;