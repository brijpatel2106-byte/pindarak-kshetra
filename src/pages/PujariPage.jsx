import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { pujariProfile } from '../data/pujariData';
import { Award, BookOpen, Globe, CheckCircle, Calendar, MessageSquare, Quote, Star, Phone, Mail } from 'lucide-react';

export const PujariPage = ({ onOpenBooking }) => {
  const { getMultilingualText } = useLanguage();

  return (
    <div className="section-padding" style={{ background: 'linear-gradient(180deg, var(--bg-warm-cream) 0%, #FFF 100%)', minHeight: '85vh' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '2.5rem',
          alignItems: 'flex-start',
          marginBottom: '3rem'
        }}>
          {/* Left Column: Curved Arch Portrait with Glow Halo & Direct Contact Card */}
          <div>
            <div className="gold-glow-halo">
              <div className="arch-frame" style={{ maxWidth: '420px', margin: '0 auto' }}>
                <img 
                  src={pujariProfile.image} 
                  alt={getMultilingualText(pujariProfile.name)} 
                  style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }} 
                />
              </div>
            </div>

            {/* Direct Contact Details Card */}
            <div style={{
              marginTop: '1.8rem',
              backgroundColor: 'var(--secondary-maroon)',
              color: '#FFF',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              border: '2px solid var(--accent-gold)'
            }}>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} /> Direct Contact & Consultation
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Primary Phone / WhatsApp</div>
                  <a href={`tel:${pujariProfile.contact.phonePrimary.replace(/\s+/g, '')}`} style={{ color: '#FFF', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    {pujariProfile.contact.phonePrimary}
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Secondary Phone</div>
                  <a href={`tel:${pujariProfile.contact.phoneSecondary.replace(/\s+/g, '')}`} style={{ color: '#FFF', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    {pujariProfile.contact.phoneSecondary}
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Address</div>
                  <a href={`mailto:${pujariProfile.contact.email}`} style={{ color: 'var(--accent-gold)', fontWeight: 600, textDecoration: 'underline' }}>
                    {pujariProfile.contact.email}
                  </a>
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <a 
                    href={`https://wa.me/${pujariProfile.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    style={{ backgroundColor: '#25D366', color: '#FFF', width: '100%', justifyContent: 'center', fontWeight: 700, border: 'none' }}
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp Direct Chat</span>
                  </a>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '1.5rem',
              backgroundColor: 'var(--bg-pure-white)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-subtle)'
            }}>
              <h4 style={{ color: 'var(--secondary-maroon)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={18} style={{ color: 'var(--primary-saffron)' }} />
                Languages Spoken & Guided
              </h4>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {pujariProfile.languagesSpoken.map(lang => (
                  <span key={lang} style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--accent-gold-light)',
                    border: '1px solid var(--accent-gold-border)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--secondary-maroon)'
                  }}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Authority Details */}
          <div>
            <span className="badge-tag">Hereditary Vedic Priest & Astrologer</span>
            <h1 style={{ fontSize: '2.8rem', marginBottom: '0.4rem', color: 'var(--secondary-maroon)' }}>
              {getMultilingualText(pujariProfile.name)}
            </h1>
            <p style={{ color: 'var(--primary-saffron)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.8rem' }}>
              {getMultilingualText(pujariProfile.title)}
            </p>

            {/* Editorial Quote Box */}
            <div className="editorial-quote">
              <Quote size={24} style={{ color: 'var(--accent-gold)', marginBottom: '0.4rem', display: 'block' }} />
              {getMultilingualText(pujariProfile.philosophy)}
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--secondary-maroon)' }}>Biography & Lineage</h3>
            <p style={{ lineHeight: '1.85', fontSize: '1.05rem', color: 'var(--text-medium-gray)', marginBottom: '2.2rem' }}>
              {getMultilingualText(pujariProfile.biography)}
            </p>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', color: 'var(--secondary-maroon)' }}>Specialized Vedic Ceremonies</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '2.8rem' }}>
              {pujariProfile.specializations.map((spec, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.4rem',
                  backgroundColor: 'var(--bg-pure-white)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <CheckCircle size={22} style={{ color: 'var(--primary-saffron)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: 'var(--text-charcoal)', fontSize: '1rem' }}>{spec}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn btn-primary btn-lg">
                <Calendar size={22} />
                <span>Book Consultation with Shastri Ji</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
