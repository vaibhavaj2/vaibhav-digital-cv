import React from 'react';
import { personalInfo } from '../data/personalInfo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>{personalInfo.name}</h3>
              <p className="footer-tagline">{personalInfo.title}</p>
            </div>
            <p className="footer-description">
              Building digital experiences with passion and precision.
              Always learning, always growing.
            </p>
            <div className="footer-social">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="social-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 11.39l9.455-7.569h.909c.904 0 1.636.732 1.636 1.636Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-nav">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
              <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 11.39l9.455-7.569h.909c.904 0 1.636.732 1.636 1.636Z"/>
                </svg>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>{personalInfo.location}</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Latest</h4>
            <div className="footer-updates">
              <div className="update-item">
                <span className="update-badge">New</span>
                <span>Portfolio v2.0 launched</span>
              </div>
              <div className="update-item">
                <span className="update-badge">Open</span>
                <span>Available for projects</span>
              </div>
            </div>
            <button className="back-to-top" onClick={handleScrollToTop} aria-label="Back to top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
              </svg>
              Back to Top
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          </div>
          <div className="footer-tech">
            <span>Built with React & ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;