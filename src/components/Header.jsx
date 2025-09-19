import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <a href="/" className="logo">Vaibhav Ajmera</a>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="#personal-photos" onClick={(e) => handleNavClick(e, 'personal-photos')}>Photos</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
        </nav>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;