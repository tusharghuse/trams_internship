import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header animate-fade-in">
      <div className="header-container">
        <a href="/" className="logo">
          Elementum
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#studio" className="nav-link">Studio</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
            <li><a href="#faqs" className="nav-link">FAQs</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li><a href="#home" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</a></li>
              <li><a href="#studio" className="mobile-nav-link" onClick={toggleMobileMenu}>Studio</a></li>
              <li><a href="#services" className="mobile-nav-link" onClick={toggleMobileMenu}>Services</a></li>
              <li><a href="#contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</a></li>
              <li><a href="#faqs" className="mobile-nav-link" onClick={toggleMobileMenu}>FAQs</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
