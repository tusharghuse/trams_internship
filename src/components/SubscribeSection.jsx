import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './SubscribeSection.css';

export default function SubscribeSection() {
  const containerRef = useScrollReveal();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="subscribe-section" ref={containerRef}>
      <div className="container subscribe-container reveal">
        
        {/* Double Red Squiggle SVG (Centered above heading) */}
        <div className="subscribe-squiggles" aria-hidden="true">
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 25 C 10 10, 20 10, 25 25 C 30 10, 40 10, 45 25" stroke="var(--color-accent-red)" strokeWidth="3" strokeLinecap="round" />
            <path d="M15 15 C 20 5, 25 5, 30 15 C 35 5, 45 5, 50 15" stroke="var(--color-accent-red)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="subscribe-title">
          Subscribe to<br />our newsletter
        </h2>
        
        {/* Subtitle */}
        <p className="subscribe-subtitle">
          To make your stay special and even more memorable
        </p>

        {/* Subscription Form */}
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="subscribe-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email Address"
            />
            <button type="submit" className="btn-black subscribe-btn">
              {subscribed ? 'Subscribed!' : 'Subscribe Now'}
            </button>
          </div>
        </form>

        {/* Purple Crescent Moon Graphic (Absolute Right) */}
        <div className="purple-crescent" aria-hidden="true">
          <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120 0 C 40 40, 40 160, 120 200 L120 200 Z" fill="var(--color-accent-purple)" />
          </svg>
        </div>

      </div>
    </section>
  );
}
