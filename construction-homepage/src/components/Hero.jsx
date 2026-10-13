import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, ShieldCheck, HardHat } from 'lucide-react';
import manModelImg from '../assets/images/man-model.png';
import slide2Img from '../assets/images/slide-2.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const slides = [
    {
      id: 1,
      badge: "Why choose us?",
      titleLine1: "START",
      titleLine2: "NEW",
      titleHighlight: "PROJECTS",
      description: "Don’t get framed by the competition, trust our solid reputation.",
      primaryBtnText: "START NEW PROJECTS",
      secondaryBtnText: "Watch video",
      image: manModelImg || "/images/man-model.png",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/man-model.png",
      type: "model"
    },
    {
      id: 2,
      badge: "Superior Quality",
      titleLine1: "We'll get it done,",
      titleLine2: "like us",
      titleHighlight: "there are none",
      description: "Committed to superior quality, precision engineering and outstanding architectural results.",
      primaryBtnText: "EXPLORE SERVICES",
      secondaryBtnText: "REQUEST A QUOTE",
      image: slide2Img || "/images/slide-2.jpg",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/slide-2.jpg",
      type: "background"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-slider-wrap">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`hero-slide ${slide.type}-slide ${isActive ? 'active' : ''}`}
              style={
                slide.type === 'background'
                  ? { backgroundImage: `linear-gradient(rgba(36, 51, 68, 0.75), rgba(36, 51, 68, 0.85)), url(${slide.image})` }
                  : {}
              }
            >
              {slide.type === 'model' && (
                <div className="hero-geometric-bg">
                  <div className="geo-stripe stripe-1"></div>
                  <div className="geo-stripe stripe-2"></div>
                  <div className="geo-stripe stripe-3"></div>
                </div>
              )}

              <div className="container hero-container">
                <div className="hero-content">
                  <div className="hero-badge-wrap">
                    <span className="hero-badge">
                      <HardHat size={16} className="hero-badge-icon" />
                      {slide.badge}
                    </span>
                  </div>

                  <h1 className="hero-title">
                    {slide.titleLine1} <br />
                    {slide.titleLine2} <br />
                    <span className="text-yellow">{slide.titleHighlight}</span>
                  </h1>

                  <p className="hero-description">{slide.description}</p>

                  <div className="hero-buttons">
                    <a href="#quote" className="btn btn-primary hero-btn-main">
                      {slide.primaryBtnText}
                      <ArrowRight size={18} className="btn-icon" />
                    </a>

                    {slide.type === 'model' ? (
                      <button
                        type="button"
                        className="btn-video-trigger"
                        onClick={() => setIsVideoModalOpen(true)}
                      >
                        <span className="video-icon-circle">
                          <Play size={16} fill="currentColor" />
                        </span>
                        <span className="video-btn-text">Watch video</span>
                      </button>
                    ) : (
                      <a href="#services" className="btn btn-secondary hero-btn-sub">
                        {slide.secondaryBtnText}
                      </a>
                    )}
                  </div>
                </div>

                {slide.type === 'model' && (
                  <div className="hero-model-wrap">
                    <div className="model-backdrop-box"></div>
                    <img
                      src={slide.image}
                      alt="Construction Expert"
                      className="hero-model-img"
                      onError={(e) => {
                        if (slide.fallback && e.currentTarget.src !== slide.fallback) {
                          e.currentTarget.src = slide.fallback;
                        }
                      }}
                    />
                    <div className="floating-stat-box">
                      <ShieldCheck size={32} className="stat-icon" />
                      <div className="stat-text">
                        <strong>25+ Years</strong>
                        <span>Of Excellence</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Slider Controls */}
        <button
          type="button"
          className="slider-arrow slider-arrow-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          type="button"
          className="slider-arrow slider-arrow-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>

        {/* Slider Indicators */}
        <div className="slider-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal-backdrop" onClick={() => setIsVideoModalOpen(false)}>
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setIsVideoModalOpen(false)}
            >
              ✕
            </button>
            <div className="video-frame-wrap">
              <iframe
                title="Company Introduction Video"
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
