import useScrollReveal from '../hooks/useScrollReveal';
import './TestimonialSection.css';

export default function TestimonialSection() {
  const containerRef = useScrollReveal();
  const testimonials = [
    {
      id: 1,
      name: "Emily",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      x: "3%", y: "15%", size: "75px", delay: "reveal-delay-1"
    },
    {
      id: 2,
      name: "Marcus",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
      x: "1%", y: "50%", size: "55px", delay: "reveal-delay-2"
    },
    {
      id: 3,
      name: "Sophia",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      x: "8%", y: "65%", size: "115px", delay: "reveal-delay-3"
    },
    {
      id: 4,
      name: "David",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
      x: "3%", y: "98%", size: "65px", delay: "reveal-delay-4"
    },
    {
      id: 5,
      name: "Alex",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80",
      x: "88%", y: "12%", size: "85px", delay: "reveal-delay-1"
    },
    {
      id: 6,
      name: "Jane",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80",
      x: "92%", y: "45%", size: "60px", delay: "reveal-delay-2"
    },
    {
      id: 7,
      name: "Robert",
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=150&h=150&q=80",
      x: "85%", y: "60%", size: "90px", delay: "reveal-delay-3"
    },
    {
      id: 8,
      name: "Michael",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80",
      x: "88%", y: "92%", size: "125px", delay: "reveal-delay-4"
    }
  ];

  return (
    <section className="testimonial-section" ref={containerRef}>
      <div className="container testimonial-container">
        
        {/* Title */}
        <div className="testimonial-header reveal">
          <h2 className="section-title">
            <span className="highlight-pill">What</span> our customer<br />
            says <span className="highlight-underline">About Us</span>
          </h2>
        </div>

        {/* Content Wrapper containing Center Card and absolute avatars */}
        <div className="testimonial-content-wrapper">
          
          {/* Floating Customer Avatars (Desktop Only absolute, or responsive layout) */}
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className={`client-avatar reveal-scale ${t.delay}`}
              style={{
                left: t.x.startsWith('8') || t.x.startsWith('9') ? 'auto' : t.x,
                right: t.x.startsWith('8') || t.x.startsWith('9') ? `${100 - parseFloat(t.x)}%` : 'auto',
                top: t.y,
                width: t.size,
                height: t.size
              }}
            >
              <img 
                src={t.image} 
                alt={`Portrait of client ${t.name}`} 
                className="client-avatar-img" 
                loading="lazy" 
              />
            </div>
          ))}

          {/* Center Card */}
          <blockquote className="testimonial-card reveal-scale">
            {/* Top-Left Quote Icon */}
            <span className="quote-mark quote-start" aria-hidden="true">“</span>
            
            <p className="testimonial-text">
              Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasnt used, which have also proved to be easy to use and reliable
            </p>
            
            {/* Bottom-Right Quote Icon */}
            <span className="quote-mark quote-end" aria-hidden="true">”</span>
          </blockquote>

        </div>

      </div>
    </section>
  );
}
