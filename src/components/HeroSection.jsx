import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const teamMembers = [
    {
      id: 1,
      name: "James",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80",
      x: "2%", y: "140px", size: "180px", zIndex: 1
    },
    {
      id: 2,
      name: "Jordan",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
      x: "11%", y: "50px", size: "190px", zIndex: 2
    },
    {
      id: 3,
      name: "Marcus",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      x: "30%", y: "0px", size: "200px", zIndex: 3
    },
    {
      id: 4,
      name: "David",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
      x: "38%", y: "130px", size: "180px", zIndex: 4
    },
    {
      id: 5,
      name: "Thomas",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
      x: "58%", y: "30px", size: "190px", zIndex: 5
    },
    {
      id: 6,
      name: "Alex",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
      x: "66%", y: "120px", size: "180px", zIndex: 6
    },
    {
      id: 7,
      name: "Kofi",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&h=200&q=80",
      x: "82%", y: "10px", size: "200px", zIndex: 7
    },
    {
      id: 8,
      name: "Sarah",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&h=200&q=80",
      x: "90%", y: "110px", size: "190px", zIndex: 8
    }
  ];


  return (
    <section id="home" className="hero-section">
      {/* Decorative Red Squiggles (Left) */}
      <div className="decor-left" aria-hidden="true">
        <svg width="100" height="200" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20C40 40 -20 100 30 130C70 150 20 180 40 210" stroke="var(--color-accent-red)" strokeWidth="3" strokeLinecap="round" />
          <path d="M25 5C45 25 -5 75 35 105C65 125 35 155 45 175" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Decorative Pink Square Outline (Right) */}
      <div className="decor-right" aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="80" height="80" rx="16" transform="rotate(25 60 60)" stroke="var(--color-accent-red)" strokeWidth="3" />
        </svg>
      </div>

      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <h1 className="hero-heading">
            The <span className="highlight-underline">thinkers</span> and<br />
            doers were changing<br />
            the <span className="highlight-pill">status</span> Quo with
          </h1>
          <p className="hero-subtitle">
            We are a team of strategists, designers, communicators, and researchers. Together, we believe that progress only happens when you refuse to play things safe.
          </p>
        </div>

        {/* Floating Avatars Arc Container */}
        <div className="avatars-container">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="avatar-wrapper"
              style={{
                left: member.x,
                top: member.y,
                width: member.size,
                height: member.size,
                zIndex: member.zIndex
              }}
            >
              <img
                src={member.image}
                alt={`Team Member ${member.name}`}
                className="avatar-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
