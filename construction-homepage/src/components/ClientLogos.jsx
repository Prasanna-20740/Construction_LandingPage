import React from 'react';
import logo1 from '../assets/images/logo-1.png';
import logo2 from '../assets/images/logo-2.png';
import logo3 from '../assets/images/logo-3.png';
import logo4 from '../assets/images/logo-4.png';
import logo5 from '../assets/images/logo-5.png';

const ClientLogos = () => {
  const logos = [
    { id: 1, name: "Partner 1", tooltip: "Construction Company", src: logo1 || "/images/logo-1.png", fallback: "/images/logo-1.png" },
    { id: 2, name: "Partner 2", tooltip: "Construction Company", src: logo2 || "/images/logo-2.png", fallback: "/images/logo-2.png" },
    { id: 3, name: "Partner 3", tooltip: "Construction Company", src: logo3 || "/images/logo-3.png", fallback: "/images/logo-3.png" },
    { id: 4, name: "Partner 4", tooltip: "Construction Company", src: logo4 || "/images/logo-4.png", fallback: "/images/logo-4.png" },
    { id: 5, name: "Partner 5", tooltip: "Construction Company", src: logo5 || "/images/logo-5.png", fallback: "/images/logo-5.png" }
  ];

  return (
    <section className="client-logos-section">
      <div className="container client-logos-container">
        <div className="client-logos-wrapper">
          <div className="client-logos-grid">
            {logos.map((logo) => (
              <div key={logo.id} className="client-logo-item" tabIndex={0}>
                <span className="client-logo-tooltip">{logo.tooltip}</span>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="client-logo-img"
                  loading="lazy"
                  onError={(e) => {
                    if (logo.fallback && e.currentTarget.src !== logo.fallback) {
                      e.currentTarget.src = logo.fallback;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

