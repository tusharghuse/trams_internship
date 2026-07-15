import useScrollReveal from '../hooks/useScrollReveal';
import './ProgressSection.css';

export default function ProgressSection() {
  const containerRef = useScrollReveal();

  return (
    <section className="progress-section" ref={containerRef}>
      <div className="container progress-container">
        
        {/* Left Side: Circular Graphic with Triangle */}
        <div className="progress-graphic-container reveal-scale">
          {/* Solid Red Triangle */}
          <div className="tilted-triangle" aria-hidden="true">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 130 L130 130 L70 20 Z" fill="var(--color-accent-red)" />
            </svg>
          </div>

          {/* Main Circular Image */}
          <div className="progress-circle">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&h=500&q=80" 
              alt="Two designers collaborating over laptop and mockups at a table" 
              className="progress-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Side: Copy */}
        <div className="progress-content reveal">
          <h2 className="section-title">
            <span className="highlight-pill">See</span> how we can<br />
            help you <span className="highlight-underline">progress</span>
          </h2>
          <p className="section-text">
            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
          </p>
          <a href="#read-more-progress" className="read-more-link">
            Read more <span className="arrow-line"></span>
          </a>
        </div>

      </div>
    </section>
  );
}
