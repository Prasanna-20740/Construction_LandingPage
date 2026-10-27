import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Wrench, Shield, Compass } from 'lucide-react';
import service1Img from '../assets/images/service-1.jpg';
import service2Img from '../assets/images/service-2.jpg';
import service3Img from '../assets/images/service-3.jpg';
import safetyIconImg from '../assets/images/safety-icon.png';

const FeatureSection = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const [headerVisible, setHeaderVisible] = useState(false);
  const [scrollFlippedCards, setScrollFlippedCards] = useState({});
  const [manualFlipped, setManualFlipped] = useState({});

  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  const features = [
    {
      id: 1,
      title: "Building Engineering",
      image: service1Img || "/images/service-1.jpg",
      icon: <Wrench size={24} />,
      description:
        "A Building Engineer is recognised as being expert in the use of technology for the design, construction, assessment and maintenance of the built environment.",
      link: "#services"
    },
    {
      id: 2,
      title: "Safety First",
      image: service2Img || "/images/service-2.jpg",
      icon: <Shield size={24} />,
      description:
        "Safety First explores the challenges at the heart of needlestick and sharps safety and highlights promising efforts to ensure patient and health care worker safety in hospitals.",
      link: "#about"
    },
    {
      id: 3,
      title: "Road Construction",
      image: service3Img || "/images/service-3.jpg",
      icon: <Compass size={24} />,
      description:
        "The construction of a new road whether from asphalt or concrete requires the production of an bonded pavement structure, beginning with a stable base.",
      link: "#services"
    }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.innerWidth <= 1024) {
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const centerY = windowHeight / 2;

            if (headerRef.current) {
              const rect = headerRef.current.getBoundingClientRect();
              if (rect.top < windowHeight * 0.85) {
                setHeaderVisible(true);
              }
            }

            const currentVisible = {};
            const currentFlipped = {};

            cardRefs.current.forEach((el, index) => {
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const cardId = features[index]?.id;

              // Card is visible on screen
              if (rect.top < windowHeight * 0.95 && rect.bottom > 0) {
                currentVisible[`card-${cardId}`] = true;
              }

              // Active card in focus (near center of screen) flips automatically on scroll!
              const cardCenter = rect.top + rect.height / 2;
              const distanceToCenter = Math.abs(cardCenter - centerY);

              if (distanceToCenter < 240 && rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
                currentFlipped[cardId] = true;
              }
            });

            setVisibleItems((prev) => ({ ...prev, ...currentVisible }));
            setScrollFlippedCards(currentFlipped);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleCardClick = (id) => {
    if (window.innerWidth <= 1024) {
      setManualFlipped((prev) => ({
        ...prev,
        [id]: !prev[id]
      }));
    }
  };

  return (
    <section id="features" className="features-section">
      <div className="features-bg-overlay"></div>
      <div className="container features-container">
        {/* Section Heading */}
        <div
          ref={headerRef}
          data-scroll-id="header"
          className={`section-title-wrap text-center light-heading ${headerVisible ? 'scroll-visible' : ''}`}
        >
          <div className="feature-helmet-wrap">
            <img
              src={safetyIconImg || "/images/safety-icon.png"}
              alt="Safety Helmet Icon"
              className="feature-helmet-icon"
              onError={(e) => {
                e.currentTarget.src = "/images/safety-icon.png";
              }}
            />
          </div>
          <span className="watermark-text">FEATURES</span>
          <p className="section-subtitle">FEATURES AT A GLANCE</p>
          <h2 className="section-title">We know what your needs are</h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="features-grid">
          {features.map((item, index) => {
            const isFlipped = manualFlipped[item.id] || scrollFlippedCards[item.id];
            return (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[index] = el)}
                data-scroll-id={`card-${item.id}`}
                className={`feature-flip-card ${visibleItems[`card-${item.id}`] ? 'scroll-visible' : ''} ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => handleCardClick(item.id)}
              >
                <div className="feature-card-inner">
                  {/* Front Side */}
                  <div
                    className="feature-card-front"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="card-front-overlay"></div>
                    <div className="card-front-content">
                      <span className="card-front-icon">{item.icon}</span>
                      <h3 className="card-front-title">{item.title}</h3>
                    </div>
                  </div>

                  {/* Back Side (Revealed on scroll / touch) */}
                  <div className="feature-card-back">
                    <div className="card-back-content">
                      <div className="card-back-icon-wrap">{item.icon}</div>
                      <h3 className="card-back-title">{item.title}</h3>
                      <p className="card-back-text">{item.description}</p>
                      <a href={item.link} className="card-back-btn">
                        Learn More ... <ArrowRight size={14} className="inline-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
