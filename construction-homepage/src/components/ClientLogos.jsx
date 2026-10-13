import React from 'react';
import logo1 from '../assets/images/logo-1.png';
import logo2 from '../assets/images/logo-2.png';
import logo3 from '../assets/images/logo-3.png';
import logo4 from '../assets/images/logo-4.png';
import logo5 from '../assets/images/logo-5.png';

const ClientLogos = () => {
  const logos = [
    { id: 1, name: "Partner 1", src: logo1 || "/images/logo-1.png", fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-1.png" },
    { id: 2, name: "Partner 2", src: logo2 || "/images/logo-2.png", fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-2.png" },
    { id: 3, name: "Partner 3", src: logo3 || "/images/logo-3.png", fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-3.png" },
    { id: 4, name: "Partner 4", src: logo4 || "/images/logo-4.png", fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-4.png" },
    { id: 5, name: "Partner 5", src: logo5 || "/images/logo-5.png", fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-5.png" }
  ];

  return (
    <section className="client-logos-section">
      <div className="container client-logos-container">
        <div className="client-logos-wrapper">
          <div className="client-logos-grid">
            {logos.map((logo) => (
              <div key={logo.id} className="client-logo-item">
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

