import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { pujariProfile } from '../data/pujariData';
import { Award, BookOpen, Globe, CheckCircle, Calendar, MessageSquare, Quote, Star } from 'lucide-react';

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
          {/* Left Column: Curved Arch Portrait with Glow Halo */}
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

            <div style={{
              marginTop: '2rem',
              backgroundColor: 'var(--bg-pure-white)',
              padding: '1.8rem',
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
