import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import s1Img from '../assets/images/s1.png';
import s2Img from '../assets/images/s2.png';
import s3Img from '../assets/images/s3.png';
import safetyIconImg from '../assets/images/safety-icon.png';

const Services = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState({});
  const [scrollActiveCardId, setScrollActiveCardId] = useState(null);
  const [manualActiveCardId, setManualActiveCardId] = useState(null);
  const [bannerVisible, setBannerVisible] = useState(false);

  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const bannerRef = useRef(null);

  const serviceCards = [
    {
      id: 1,
      title: "Building",
      icon: s1Img || "/images/s1.png",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/s1.png",
      description: "A building, or edifice, is a structure with a roof and walls standing permanently in one place, such as a house or factory.",
      link: "#quote"
    },
    {
      id: 2,
      title: "Road Construction",
      icon: s2Img || "/images/s2.png",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/s2.png",
      description: "Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving and pavement recycling machines, and other road repair materials.",
      link: "#quote"
    },
    {
      id: 3,
      title: "Maintenance",
      icon: s3Img || "/images/s3.png",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/s3.png",
      description: "All are assigned responsibilities relate to the maintenance mode, comprehensive lifecycle asset preservation and structural reliability.",
      link: "#quote"
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

            // Header entrance
            if (headerRef.current) {
              const rect = headerRef.current.getBoundingClientRect();
              if (rect.top < windowHeight * 0.88) {
                setHeaderVisible(true);
              }
            }

            const currentVisible = {};
            let closestCardId = null;
            let minDistance = Infinity;

            cardRefs.current.forEach((el, index) => {
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const cardId = serviceCards[index]?.id;

              // Card scrolled into view
              if (rect.top < windowHeight * 0.95 && rect.bottom > 0) {
                currentVisible[`card-${cardId}`] = true;
              }

              // Card nearest to the vertical center of the screen
              const cardCenter = rect.top + rect.height / 2;
              const distance = Math.abs(cardCenter - centerY);

              if (
                distance < minDistance &&
                rect.top < windowHeight * 0.78 &&
                rect.bottom > windowHeight * 0.22
              ) {
                minDistance = distance;
                closestCardId = cardId;
              }
            });

            // Banner entrance
            if (bannerRef.current) {
              const rect = bannerRef.current.getBoundingClientRect();
              if (rect.top < windowHeight * 0.9) {
                setBannerVisible(true);
              }
            }

            setVisibleItems((prev) => ({ ...prev, ...currentVisible }));

            // Smoothly highlight card in center on scroll
            if (closestCardId && minDistance < 260) {
              setScrollActiveCardId(closestCardId);
            } else {
              setScrollActiveCardId(null);
            }
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
      setManualActiveCardId((prev) => (prev === id ? null : id));
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container services-container">
        {/* Section Heading */}
        <div
          ref={headerRef}
          className={`section-title-wrap text-center ${headerVisible ? 'scroll-visible' : ''}`}
        >
          <span className="watermark-text">SERVICES</span>
          <p className="section-subtitle">WHAT WE CAN DO FOR YOU</p>
          <h2 className="section-title">Our construction services</h2>
        </div>

        {/* 3 Service Cards */}
        <div className="services-grid">
          {serviceCards.map((service, index) => {
            const isCardActive =
              manualActiveCardId !== null
                ? manualActiveCardId === service.id
                : scrollActiveCardId === service.id;

            return (
              <div
                key={service.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`service-card ${visibleItems[`card-${service.id}`] ? 'scroll-visible' : ''} ${isCardActive ? 'scroll-active' : ''}`}
                onClick={() => handleCardClick(service.id)}
              >
                <div className="service-icon-box">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="service-icon-img"
                    onError={(e) => {
                      if (service.fallback && e.currentTarget.src !== service.fallback) {
                        e.currentTarget.src = service.fallback;
                      }
                    }}
                  />
                </div>

                <h3 className="service-card-title">
                  {service.title}
                  <span className="title-underline"></span>
                </h3>

                <p className="service-card-text">{service.description}</p>

                <div className="service-btn-wrap">
                  <a href={service.link} className="btn-service-readmore">
                    Read More <ChevronRight size={16} className="readmore-arrow" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner: "Building a dream shouldn't be a nightmare!" */}
        <div
          ref={bannerRef}
          className={`service-callout-banner ${bannerVisible ? 'scroll-visible' : ''}`}
        >
          <div className="callout-content-wrap">
            <div className="callout-icon-col">
              <img
                src={safetyIconImg || "/images/safety-icon.png"}
                alt="Safety Icon"
                className="callout-safety-icon"
                onError={(e) => {
                  e.currentTarget.src = "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/safety-icon.png";
                }}
              />
            </div>
            <div className="callout-text-col">
              <h3 className="callout-heading">Building a dream shouldn’t be a nightmare!</h3>
              <p className="callout-subtext">
                We have transforming the ideas and visions into winning projects.
              </p>
            </div>
            <div className="callout-action-col">
              <a href="#quote" className="btn btn-consultation-banner">
                Free Consultation <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
