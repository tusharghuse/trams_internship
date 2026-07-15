import useScrollReveal from '../hooks/useScrollReveal';
import './TomorrowSection.css';

export default function TomorrowSection() {
  const containerRef = useScrollReveal();

  return (
    <section id="studio" className="tomorrow-section" ref={containerRef}>
      {/* Wavy line connector SVG */}
      <div className="wavy-separator top-wave" aria-hidden="true">
        <svg width="100%" height="80" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-10 10 C 300 120, 600 -40, 1000 60 C 1200 110, 1350 40, 1450 10" stroke="var(--color-accent-red)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container tomorrow-container">
        {/* Left Side: Copy */}
        <div className="tomorrow-content reveal">
          <h2 className="section-title">
            <span className="highlight-underline">Tomorrow</span> should<br />
            be better than <span className="highlight-pill">today</span>
          </h2>
          <p className="section-text">
            We are a team of strategists, designers, communicators, and researchers. Together, we believe that progress only happens when you refuse to play things safe.
          </p>
          <a href="#read-more-tomorrow" className="read-more-link">
            Read more <span className="arrow-line"></span>
          </a>
        </div>

        {/* Right Side: Circular Graphic */}
        <div className="tomorrow-graphic-container reveal-scale">
          {/* Blurred Red Glow */}
          <div className="graphic-glow" aria-hidden="true"></div>
          
          {/* Tilted Solid Red Square */}
          <div className="tilted-square" aria-hidden="true"></div>

          {/* Main Circular Image */}
          <div className="graphic-circle">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&h=500&q=80" 
              alt="Team collaborating in a modern office meeting room" 
              className="graphic-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
