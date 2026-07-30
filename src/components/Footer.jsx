import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Flame, Phone, Mail, MapPin, Globe, Shield, Calendar } from 'lucide-react';

export const Footer = ({ setActivePage, onOpenBooking }) => {
  const { lang, setLang, t } = useLanguage();

  const handleNavClick = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--secondary-maroon)',
      color: 'var(--text-white)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      borderTop: '4px solid var(--accent-gold)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '2rem',
          marginBottom: '2.5rem'
        }}>
          {/* Column 1: Organization Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-saffron)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF'
              }}>
                <Flame size={22} />
              </div>
              <h3 style={{ color: '#FFF', fontSize: '1.4rem' }}>Pindarak Kshetra</h3>
            </div>
            <p style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              {t('footer_about')}
            </p>
            <button 
              className="btn btn-primary btn-sm"
              onClick={onOpenBooking}
            >
              <Calendar size={16} />
              <span>{t('hero_cta_book')}</span>
            </button>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.15rem', marginBottom: '1.2rem' }}>
              {t('quick_links')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['home', 'services', 'pujari', 'gallery', 'contact'].map(page => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#CBD5E0',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      padding: 0,
                      transition: 'color 150ms'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-saffron-light)'}
                    onMouseLeave={(e) => e.target.style.color = '#CBD5E0'}
                  >
                    • {t(`nav_${page}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sacred Ceremonies */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.15rem', marginBottom: '1.2rem' }}>
              {t('services_tag')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#CBD5E0', fontSize: '0.95rem' }}>
              <li>• Narayan Nagbali & Pitru Moksha</li>
              <li>• Kaal Sarp & Sarpa Shanti</li>
              <li>• Vastu Dosha Rectification</li>
              <li>• Navagraha Shanti Mahayajna</li>
              <li>• Shree Satyanarayan Katha</li>
              <li>• Horoscope & Muhurat Consultation</li>
            </ul>
          </div>

          {/* Column 4: Contact & Language */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.15rem', marginBottom: '1.2rem' }}>
              {t('nav_contact')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#E2E8F0', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>{t('contact_address')}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <Phone size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <a href="tel:+919979626659" style={{ color: '#FFF', textDecoration: 'underline' }}>+91 9979626659</a>
                  <a href="tel:+918980333989" style={{ color: '#FFF', textDecoration: 'underline' }}>+91 8980333989</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <Mail size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <a href="mailto:jthaker511@gmail.com" style={{ color: '#FFF', textDecoration: 'underline' }}>jthaker511@gmail.com</a>
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                  <Globe size={14} style={{ display: 'inline', marginRight: '4px' }} /> Change Language:
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {['en', 'hi', 'gu'].map(l => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: '4px',
                        border: '1px solid var(--accent-gold)',
                        background: lang === l ? 'var(--accent-gold)' : 'transparent',
                        color: lang === l ? 'var(--secondary-maroon)' : '#FFF',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          color: '#A0AEC0',
          fontSize: '0.9rem'
        }}>
          <div>
            © {new Date().getFullYear()} Pindarak Kshetra. {t('all_rights')}
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Accessibility Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
