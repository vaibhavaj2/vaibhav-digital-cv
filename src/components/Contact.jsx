import React, { useState } from 'react';
import { personalInfo } from '../data/personalInfo';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all required fields.');
      return;
    }

    // Create mailto link with form data
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setFormStatus('Opening your email client...');

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus('');
    }, 2000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to connect,
                feel free to reach out!
              </p>
            </div>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 11.39l9.455-7.569h.909c.904 0 1.636.732 1.636 1.636Z"/>
                  </svg>
                </div>
                <div className="method-content">
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="method-content">
                  <h4>LinkedIn</h4>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="method-content">
                  <h4>GitHub</h4>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    View my code
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="method-content">
                  <h4>Location</h4>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="availability">
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Available for new opportunities</span>
              </div>
              <p>
                I'm currently open to full-time positions, freelance projects,
                and consulting opportunities. Let's discuss how we can work together!
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send me a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or just say hi!"
                ></textarea>
              </div>

              {formStatus && (
                <div className={`form-status ${formStatus.includes('Please') ? 'error' : 'success'}`}>
                  {formStatus}
                </div>
              )}

              <button type="submit" className="btn btn-primary">
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;