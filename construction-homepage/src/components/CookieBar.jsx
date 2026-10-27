import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie_consent_accepted');
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('cookie_consent_accepted', 'true');
    } catch {
      // ignore in incognito or restricted storage
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-bar-fixed" role="dialog" aria-label="Cookie notice">
      <div className="cookie-bar-inner">
        <div className="cookie-bar-message">
          <Cookie size={20} className="cookie-icon" />
          <span>This website uses cookies to improve user experience.</span>
        </div>
        <button
          type="button"
          className="cookie-accept-btn"
          onClick={handleAccept}
          aria-label="Accept and close cookie notice"
        >
          Accept and close
        </button>
      </div>
    </div>
  );
};

export default CookieBar;
