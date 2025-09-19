import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/personalInfo';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-progress ${isVisible ? 'animate' : ''}`}
          style={{
            '--skill-level': `${skill.level}%`,
            animationDelay: `${index * 0.1}s`
          }}
        ></div>
      </div>
    </div>
  );

  const skillCategories = {
    'Cloud & Architecture': personalInfo.skills.filter(skill =>
      ['AWS', 'Digital Architecture', 'Solution Design', 'Cloud Solutions'].includes(skill.name)
    ),
    'Programming & Frameworks': personalInfo.skills.filter(skill =>
      ['Java', 'JavaScript', 'Spring Framework', 'HTML/CSS'].includes(skill.name)
    ),
    'Enterprise & E-commerce': personalInfo.skills.filter(skill =>
      ['SAP Hybris', 'Adobe AEM', 'E-commerce', 'WebLogic'].includes(skill.name)
    ),
    'Domain Expertise': personalInfo.skills.filter(skill =>
      ['Telecommunications'].includes(skill.name)
    )
  };

  // If no categories match, show all skills in one category
  const hasCategories = Object.values(skillCategories).some(category => category.length > 0);
  if (!hasCategories) {
    skillCategories['Technical Skills'] = personalInfo.skills;
  }

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-content">
          {Object.entries(skillCategories).map(([category, skills]) => {
            if (skills.length === 0) return null;

            return (
              <div key={category} className="skill-category">
                <h3 className="category-title">{category}</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <div className="summary-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <div className="summary-text">
              <h4>Digital Architecture</h4>
              <p>Designing scalable digital solutions and enterprise-grade architectures</p>
            </div>
          </div>

          <div className="summary-item">
            <div className="summary-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
              </svg>
            </div>
            <div className="summary-text">
              <h4>Cloud Solutions</h4>
              <p>AWS certified expert in cloud infrastructure and migration strategies</p>
            </div>
          </div>

          <div className="summary-item">
            <div className="summary-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <div className="summary-text">
              <h4>Enterprise Solutions</h4>
              <p>E-commerce platforms, telecommunications, and digital transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;