import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Calendar, Menu, X, Flame, Phone, MessageSquare } from 'lucide-react';

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
    <>
      {/* Top Contact Strip displaying Phone & WhatsApp numbers */}
      <div style={{
        backgroundColor: 'var(--secondary-maroon)',
        color: '#FFF',
        padding: '0.45rem 0',
        fontSize: '0.85rem',
        borderBottom: '1px solid var(--accent-gold)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.6rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <a 
              href="tel:+919979626659" 
              style={{ color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none', fontWeight: 700 }}
            >
              <Phone size={14} /> +91 9979626659
            </a>
            <a 
              href="tel:+918980333989" 
              style={{ color: '#E2E8F0', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none', fontWeight: 600 }}
            >
              <Phone size={14} /> +91 8980333989
            </a>
            <a 
              href="https://wa.me/919979626659" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#25D366', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none', fontWeight: 700 }}
            >
              <MessageSquare size={14} /> WhatsApp Us
            </a>
          </div>

          <div style={{ color: 'var(--accent-gold)', fontSize: '0.82rem', fontWeight: 500 }}>
            Shastri Jitendrabhai Kantilal Thaker | Pindarak Kshetra
          </div>
        </div>
      </div>

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
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Language Dropdown */}
          <div className="lang-selector">
            <button 
              className="lang-btn"
              onClick={() => setLangOpen(!langOpen)}
              style={{ padding: '0.45rem 0.75rem', fontSize: '0.85rem' }}
            >
              <Globe size={15} />
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
            className="btn btn-primary btn-sm header-book-btn"
            onClick={() => {
              handleNavClick('contact');
            }}
            style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
          >
            <Calendar size={16} />
            <span>{t('nav_book_now')}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            style={{ padding: '0.3rem' }}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="mobile-drawer" style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          width: '100%',
          backgroundColor: '#FFFFFF',
          padding: '1.25rem 1rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          borderBottom: '2px solid var(--accent-gold)',
          zIndex: 110,
          maxHeight: 'calc(100vh - 72px)',
          overflowY: 'auto'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {['home', 'services', 'pujari', 'gallery', 'contact'].map(page => (
              <li key={page}>
                <button
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    background: activePage === page ? 'var(--primary-saffron-light)' : 'transparent',
                    color: activePage === page ? 'var(--primary-saffron)' : 'var(--text-charcoal)',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
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
  </>
);
};
