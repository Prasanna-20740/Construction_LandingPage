import React from 'react';
import { ArrowRight, Wrench, Shield, Compass } from 'lucide-react';
import service1Img from '../assets/images/service-1.jpg';
import service2Img from '../assets/images/service-2.jpg';
import service3Img from '../assets/images/service-3.jpg';

const FeatureSection = () => {
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

  return (
    <section id="features" className="features-section">
      <div className="features-bg-overlay"></div>
      <div className="container features-container">
        {/* Section Heading */}
        <div className="section-title-wrap text-center light-heading">
          <span className="watermark-text">FEATURES</span>
          <p className="section-subtitle">FEATURES AT A GLANCE</p>
          <h2 className="section-title">We know what your needs are</h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="features-grid">
          {features.map((item) => (
            <div key={item.id} className="feature-flip-card">
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

                {/* Back Side (Revealed on hover / touch) */}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
