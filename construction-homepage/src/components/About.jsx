import React from 'react';
import { Check, ArrowRight, Award } from 'lucide-react';
import aboutCompanyImg from '../assets/images/about-company.jpg';

const About = () => {
  const points = [
    "Excellent engineering",
    "Modern & up to date",
    "Grade #1 materials",
    "Structures with long life"
  ];

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        {/* Left: Image with golden accent backdrop */}
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <div className="about-yellow-backdrop"></div>
            <img
              src={aboutCompanyImg || "/images/about-company.jpg"}
              alt="About Apex Build & Construction"
              className="about-main-image"
              onError={(e) => {
                e.currentTarget.src = "/images/about-company.jpg";
              }}
            />
            <div className="about-experience-badge">
              <Award size={36} className="badge-icon" />
              <div className="badge-details">
                <span className="badge-number">28</span>
                <span className="badge-label">Years of Working Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="about-content-column">
          <div className="section-title-wrap">
            <span className="watermark-text">ABOUT</span>
            <p className="section-subtitle">ABOUT OUR COMPANY</p>
            <h2 className="section-title">Always dedicated and devoted</h2>
          </div>

          <p className="about-paragraph">
            Slogan creation for your construction company is crucial for the overall branding. And branding in today’s world can’t be ignored, We hope that the above Construction Slogans. Don’t forget to share it on social media and related building communities.
          </p>

          <p className="about-subparagraph">
            We operate with the utmost integrity and high standards of workmanship, delivering sustainable and cost-effective commercial and residential building services.
          </p>

          {/* 4 Points in 2 columns */}
          <ul className="about-checklist">
            {points.map((point, index) => (
              <li key={index} className="checklist-item">
                <span className="checklist-icon-wrap">
                  <Check size={18} strokeWidth={3.5} />
                </span>
                <span className="checklist-text">{point}</span>
              </li>
            ))}
          </ul>

          <div className="about-cta-wrap">
            <a href="#services" className="btn btn-primary about-btn">
              SERVICES <ArrowRight size={16} className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
