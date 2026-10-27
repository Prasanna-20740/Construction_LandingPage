import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Richard Dowson",
      role: "Commercial Developer",
      avatar: team1 || "/images/team1.jpg",
      fallbackAvatar: "/images/team1.jpg",
      quote: "Great Experience!! Michael has made the whole process easy from the planning stage to the final plant going in. Steve & his crew did a great job. I felt like Lavish Gardens really listened to what I wanted, gave me ideas, and helped me decide how to make my backyard a place to relax and enjoy the view."
    },
    {
      id: 2,
      name: "Lisa Jordan",
      role: "Operations Director, SPS Towers",
      avatar: team2 || "/images/team2.jpg",
      fallbackAvatar: "/images/team2.jpg",
      quote: "I just wanted to say thank you to all of you for being so fun to work with and being rock stars with the best attitudes EVER on this 16th floor build for SPS. It means a great deal to me that you all come to the table every week with smiles on your faces and ready to solve whatever issue."
    },
    {
      id: 3,
      name: "Michael Anderson",
      role: "West End Center Office Park",
      avatar: team3 || "/images/team3.jpg",
      fallbackAvatar: "/images/team3.jpg",
      quote: "Greiner has been a critical partner to us on the redevelopment of West End Center Office Park. The team of project managers, supervisors, and their support teams can't be rivaled by any other contractor I have worked with over the past 15 years."
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container testimonials-container">
        {/* Section Heading */}
        <div className="section-title-wrap text-center">
          <span className="watermark-text">TESTIMONIALS</span>
          <p className="section-subtitle">SEE WHAT SAYS OUR HAPPY CLIENTS</p>
          <h2 className="section-title">Our happy customers</h2>
        </div>

        {/* Testimonial Box Card */}
        <div className="testimonial-slider-wrap">
          <div className="testimonial-card">
            {/* Avatar with authentic yellow offset shadow */}
            <div className="testimonial-avatar-wrapper">
              <img
                src={current.avatar}
                alt={current.name}
                className="testimonial-avatar-img"
                onError={(e) => {
                  if (current.fallbackAvatar && e.currentTarget.src !== current.fallbackAvatar) {
                    e.currentTarget.src = current.fallbackAvatar;
                  } else {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80";
                  }
                }}
              />
            </div>

            {/* Testimonial Quote & Details */}
            <div className="testimonial-content">
              <div className="quote-icon-wrap">
                <Quote size={40} className="testimonial-quote-icon" />
              </div>

              <div className="star-rating-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f4c03b" color="#f4c03b" />
                ))}
              </div>

              <p className="testimonial-quote-text">
                "{current.quote}"
              </p>

              <div className="testimonial-author-meta">
                <h3 className="author-name">- {current.name}</h3>
                <span className="author-role">{current.role}</span>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="testimonial-controls">
            <button
              type="button"
              className="testimonial-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="testimonial-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`test-dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="testimonial-arrow-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
