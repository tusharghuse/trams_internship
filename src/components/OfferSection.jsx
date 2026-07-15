import useScrollReveal from '../hooks/useScrollReveal';
import './OfferSection.css';

export default function OfferSection() {
  const containerRef = useScrollReveal();
  const offers = [
    {
      id: 1,
      tag: "Office of multiple\ninterest content",
      title: "Collaborative & partnership",
      delayClass: "reveal-delay-1"
    },
    {
      id: 2,
      tag: "The hanger US Air force\ndigital experimental",
      title: "We talk about our weight",
      delayClass: "reveal-delay-2"
    },
    {
      id: 3,
      tag: "Delta faucet content,\nsocial, digital",
      title: "Piloting digital confidence",
      delayClass: "reveal-delay-3"
    }
  ];

  return (
    <section id="services" className="offer-section" ref={containerRef}>
      <div className="container offer-container">
        
        {/* Title */}
        <div className="offer-header reveal">
          <h2 className="section-title">
            What we <span className="highlight-pill">can</span><br />
            <span className="highlight-underline">offer</span> you!
          </h2>
        </div>

        {/* Services List */}
        <ul className="services-list">
          {offers.map((offer) => (
            <li key={offer.id} className={`service-row reveal ${offer.delayClass}`}>
              {/* Left Column: Metadata tag */}
              <div className="service-tag">
                {offer.tag.split('\n').map((line, idx) => (
                  <span key={idx}>{line}<br /></span>
                ))}
              </div>

              {/* Center Column: Service title */}
              <div className="service-title-container">
                <h3 className="service-title">
                  {offer.id === 3 ? (
                    <>
                      Piloting digital{' '}
                      <span className="sticker-wrapper">
                        confidence
                        <span className="sticker-badge" aria-hidden="true">
                          <svg viewBox="0 0 100 100" className="sticker-svg">
                            <circle cx="50" cy="50" r="45" fill="#FFCB05" />
                            <path d="M50 15 L50 85 M15 50 L85 50" stroke="#0F0F0F" strokeWidth="3" />
                            <circle cx="50" cy="50" r="25" fill="#FF5B5B" />
                            <circle cx="50" cy="50" r="10" fill="#FFFFFF" />
                          </svg>
                        </span>
                      </span>
                    </>
                  ) : (
                    offer.title
                  )}
                </h3>
              </div>

              {/* Right Column: Arrow Link */}
              <div className="service-action">
                <button className="arrow-btn" aria-label={`Read more about ${offer.title}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
