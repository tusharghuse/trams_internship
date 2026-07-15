import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Horizontal separator line */}
        <hr className="footer-divider" />

        {/* Footer grid link columns */}
        <div className="footer-grid">
          
          {/* Column 1: Company */}
          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#studio">Studio</a></li>
              <li><a href="#services">Service</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          {/* Column 2: Terms & Policies */}
          <div className="footer-column">
            <h4 className="footer-title">Terms & Policies</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#accesibility">Accesibility</a></li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="footer-column">
            <h4 className="footer-title">Follow Us</h4>
            <ul className="footer-links">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer">Youtube</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            </ul>
          </div>

          {/* Column 4: Contact (labeled Terms & Policies in design) */}
          <div className="footer-column contact-column">
            <h4 className="footer-title">Terms & Policies</h4>
            <address className="footer-address">
              <p className="address-text">1499w Fluton ste, STE 2D<br />Chicgo, IL 63867.</p>
              <p className="phone-text"><a href="tel:123456789000">(123) 456789000</a></p>
              <p className="email-text"><a href="mailto:info@elementum.com">info@elementum.com</a></p>
            </address>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            ©2023 Elementum. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
