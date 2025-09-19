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
    'Frontend': personalInfo.skills.filter(skill =>
      ['JavaScript', 'React', 'HTML', 'CSS', 'Vue', 'Angular'].includes(skill.name)
    ),
    'Backend': personalInfo.skills.filter(skill =>
      ['Node.js', 'Python', 'Java', 'PHP', 'Express'].includes(skill.name)
    ),
    'Database & Tools': personalInfo.skills.filter(skill =>
      ['SQL', 'MongoDB', 'Git', 'Docker', 'AWS'].includes(skill.name)
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
              <h4>Frontend Development</h4>
              <p>Creating responsive, user-friendly interfaces with modern frameworks</p>
            </div>
          </div>

          <div className="summary-item">
            <div className="summary-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <div className="summary-text">
              <h4>Backend Development</h4>
              <p>Building scalable server-side applications and RESTful APIs</p>
            </div>
          </div>

          <div className="summary-item">
            <div className="summary-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4zm8-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
              </svg>
            </div>
            <div className="summary-text">
              <h4>DevOps & Tools</h4>
              <p>Implementing CI/CD pipelines and modern development workflows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;