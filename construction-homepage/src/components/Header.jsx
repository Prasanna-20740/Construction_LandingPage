import React, { useState, useEffect } from 'react';
import {
  Phone,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home
} from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './Icons.jsx';
import logoConstructionImg from '../assets/images/logo-construction.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      {/* 1. Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-label">Have any questions? call us</span>
            <a href="tel:+18182345678" className="top-bar-phone">
              <Phone size={14} className="top-bar-phone-icon" />
              <span>+1 (818) 23 45 678</span>
            </a>
          </div>

          <div className="top-bar-right">
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                <FacebookIcon size={15} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                <TwitterIcon size={15} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <InstagramIcon size={15} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <LinkedinIcon size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className={`main-nav-bar ${isScrolled ? 'sticky-active' : ''}`}>
        <div className="container main-nav-container">
          <div className="nav-logo-wrap">
            <a href="#hero" onClick={() => scrollToSection('hero')} className="logo-link">
              <img
                src={logoConstructionImg || "/images/logo-construction.png"}
                alt="Construction 2 - Building and Maintenance"
                className="site-logo"
                onError={(e) => {
                  e.currentTarget.src = "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/logo-construction.png";
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#hero" onClick={() => scrollToSection('hero')} className="nav-link active" title="Home">
                  <Home size={18} />
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" onClick={() => scrollToSection('services')} className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#process" onClick={() => scrollToSection('process')} className="nav-link">
                  Process
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">
                  Projects
                </a>
              </li>
              <li
                className="nav-item has-dropdown"
                onMouseEnter={() => setPagesDropdownOpen(true)}
                onMouseLeave={() => setPagesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle"
                  onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                  aria-expanded={pagesDropdownOpen}
                >
                  Pages
                  <ChevronDown size={14} className="dropdown-arrow" />
                </button>

                {pagesDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="#projects" onClick={() => scrollToSection('projects')}>Shop</a></li>
                    <li><a href="#quote" onClick={() => scrollToSection('quote')}>Cart</a></li>
                    <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Wishlist</a></li>
                    <li><a href="#quote" onClick={() => scrollToSection('quote')}>My account</a></li>
                    <li><a href="#services" onClick={() => scrollToSection('services')}>Submenu example</a></li>
                    <li
                      className="nested-dropdown-item"
                      onMouseEnter={() => setNestedDropdownOpen(true)}
                      onMouseLeave={() => setNestedDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        className="nested-toggle"
                        onClick={() => setNestedDropdownOpen(!nestedDropdownOpen)}
                      >
                        Dropdown menu
                        <ChevronRight size={14} />
                      </button>
                      {nestedDropdownOpen && (
                        <ul className="sub-nested-menu">
                          <li><a href="#services" onClick={() => scrollToSection('services')}>Submenu 1</a></li>
                          <li><a href="#process" onClick={() => scrollToSection('process')}>Submenu 2</a></li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a href="#quote" onClick={() => scrollToSection('quote')} className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Header Actions */}
          <div className="header-actions">
            {/* Search Trigger */}
            <div className="search-wrap">
              <button
                type="button"
                className="search-toggle-btn"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Open search box"
              >
                <Search size={18} />
              </button>

              {isSearchOpen && (
                <div className="search-dropdown-box">
                  <form onSubmit={handleSearchSubmit} className="search-form">
                    <input
                      type="text"
                      placeholder="Type keyword to search ..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="search-input"
                    />
                    <button type="submit" className="search-submit-btn" aria-label="Submit search">
                      <Search size={16} />
                    </button>
                  </form>
                  <div className="search-trending">
                    <span>🔥 Trending searches:</span>
                    <div className="trending-tags">
                      <button type="button" onClick={() => setSearchQuery('Renovation')}>Renovation</button>
                      <button type="button" onClick={() => setSearchQuery('Building')}>Building</button>
                      <button type="button" onClick={() => setSearchQuery('Engineering')}>Engineering</button>
                      <button type="button" onClick={() => setSearchQuery('Architecture')}>Architecture</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Consultation Button */}
            <a href="#quote" onClick={() => scrollToSection('quote')} className="btn-consultation">
              Free Consultation
            </a>

            {/* Mobile Header Quick Actions */}
            <div className="mobile-header-triggers">
              <a href="tel:+18182345678" className="mobile-phone-btn" aria-label="Call company phone">
                <Phone size={18} />
              </a>
              <button
                type="button"
                className="mobile-hamburger-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Offcanvas Drawer */}
      <div className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
        <aside
          className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()}
          aria-label="Mobile Navigation Drawer"
        >
          <div className="drawer-header">
            <img
              src={logoConstructionImg || "/images/logo-construction.png"}
              alt="Logo"
              className="drawer-logo"
              onError={(e) => {
                e.currentTarget.src = "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/logo-construction.png";
              }}
            />
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="drawer-search">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="drawer-search-input"
              />
              <button type="submit" className="drawer-search-btn" aria-label="Search">
                <Search size={16} />
              </button>
            </form>
          </div>

          <ul className="drawer-nav-list">
            <li>
              <a href="#hero" onClick={() => scrollToSection('hero')}>
                <Home size={18} className="drawer-nav-icon" /> Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li>
              <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
            </li>
            <li>
              <a href="#process" onClick={() => scrollToSection('process')}>Process</a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
            <li>
              <div className="drawer-dropdown-item">
                <button
                  type="button"
                  className="drawer-dropdown-toggle"
                  onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                >
                  Pages
                  <ChevronDown size={16} className={pagesDropdownOpen ? 'rotate-180' : ''} />
                </button>
                {pagesDropdownOpen && (
                  <ul className="drawer-sub-menu">
                    <li><a href="#projects" onClick={() => scrollToSection('projects')}>Shop</a></li>
                    <li><a href="#quote" onClick={() => scrollToSection('quote')}>Cart</a></li>
                    <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Wishlist</a></li>
                    <li><a href="#quote" onClick={() => scrollToSection('quote')}>My account</a></li>
                    <li><a href="#services" onClick={() => scrollToSection('services')}>Submenu example</a></li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <a href="#quote" onClick={() => scrollToSection('quote')}>Contact</a>
            </li>
          </ul>

          <div className="drawer-footer">
            <a href="#quote" onClick={() => scrollToSection('quote')} className="drawer-consult-btn">
              Free Consultation
            </a>
            <div className="drawer-socials">
              <a href="https://facebook.com" aria-label="Facebook"><FacebookIcon size={16} /></a>
              <a href="https://twitter.com" aria-label="Twitter"><TwitterIcon size={16} /></a>
              <a href="https://instagram.com" aria-label="Instagram"><InstagramIcon size={16} /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><LinkedinIcon size={16} /></a>
            </div>
            <div className="drawer-copyright">
              © Copyright 2026 XTRA Construction
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
