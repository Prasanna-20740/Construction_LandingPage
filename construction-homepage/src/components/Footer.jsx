import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from './Icons.jsx';
import footerLogoImg from '../assets/images/footer-logo-construction.png';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="page-footer">
      {/* Main Footer Center Content */}
      <div className="middle-footer">
        <div className="container middle-footer-container">
          <div className="footer-logo-wrap">
            <a href="#hero" onClick={scrollToTop} className="footer-logo-link">
              <img
                src={footerLogoImg || "/images/footer-logo-construction.png"}
                alt="Construction 2 Footer Logo"
                className="footer-logo-img"
                onError={(e) => {
                  e.currentTarget.src = "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/footer-logo-construction.png";
                }}
              />
            </a>
          </div>

          <p className="footer-about-text">
            A company is any entity that engages in business. <br />
            Companies can be structured in different ways. <br />
            For example, your company can be a sole proprietorship,<br />
            a partnership, or a corporation.
          </p>

          <div className="footer-social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-btn"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="footer-social-btn"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-btn"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="footer-social-btn"
            >
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Sub Footer Bottom Bar */}
      <div className="bottom-footer">
        <div className="container bottom-footer-container">
          <div className="footer-copyright">
            © 2026 XTRA, Powered by WordPress
          </div>

          <div className="footer-legal-links">
            <a href="#quote" className="footer-legal-link">Contact Us</a>
            <span className="legal-divider">|</span>
            <a href="#about" className="footer-legal-link">About</a>
            <span className="legal-divider">|</span>
            <a href="#hero" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: All customer information is kept strictly confidential."); }} className="footer-legal-link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Back to top floating button */}
      {showBackToTop && (
        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
