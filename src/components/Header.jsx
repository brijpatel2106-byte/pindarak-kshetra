import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Calendar, Menu, X, Flame } from 'lucide-react';

export const Header = ({ activePage, setActivePage, onOpenBooking }) => {
  const { lang, setLang, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी (Hindi)' },
    { code: 'gu', name: 'ગુજરાતી (Gujarati)' }
  ];

  const handleNavClick = (page) => {
    setActivePage(page);
    setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="brand-logo">
          <div className="brand-icon">
            <Flame size={24} />
          </div>
          <div className="brand-text">
            <h1>Pindarak Kshetra</h1>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <button 
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                {t('nav_home')}
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
                onClick={() => handleNavClick('services')}
              >
                {t('nav_services')}
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activePage === 'pujari' ? 'active' : ''}`}
                onClick={() => handleNavClick('pujari')}
              >
                {t('nav_pujari')}
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activePage === 'gallery' ? 'active' : ''}`}
                onClick={() => handleNavClick('gallery')}
              >
                {t('nav_gallery')}
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                {t('nav_contact')}
              </button>
            </li>
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Language Dropdown */}
          <div className="lang-selector">
            <button 
              className="lang-btn"
              onClick={() => setLangOpen(!langOpen)}
            >
              <Globe size={16} />
              <span>{lang.toUpperCase()}</span>
            </button>

            {langOpen && (
              <div className="lang-dropdown">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    className={`lang-option ${lang === l.code ? 'active' : ''}`}
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA - Redirects to Contact */}
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => {
              handleNavClick('contact');
            }}
          >
            <Calendar size={18} />
            <span>{t('nav_book_now')}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="mobile-drawer" style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          padding: '1.5rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          borderBottom: '2px solid var(--accent-gold)',
          zIndex: 110
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {['home', 'services', 'pujari', 'gallery', 'contact'].map(page => (
              <li key={page}>
                <button
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.8rem 1rem',
                    background: activePage === page ? 'var(--primary-saffron-light)' : 'transparent',
                    color: activePage === page ? 'var(--primary-saffron)' : 'var(--text-charcoal)',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}
                  onClick={() => handleNavClick(page)}
                >
                  {t(`nav_${page}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
