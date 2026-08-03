import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Flame, HeartHandshake, Heart, Award, Users, CheckCircle, Sparkles, Star } from 'lucide-react';
import { pujariProfile } from '../data/pujariData';

export const AboutPage = ({ onOpenBooking }) => {
  const { t, getMultilingualText } = useLanguage();

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-warm-cream)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <div className="section-header">
          <span className="badge-tag">{t('nav_about')}</span>
          <h2>Sacred Heritage & Spiritual Mission of Pindarak Kshetra</h2>
          <p className="section-subtitle">
            Dedicated to providing authentic Vedic ceremonies, ancestral peace, and compassionate spiritual guidance.
          </p>
        </div>

        {/* PITRU MOKSHA SACRED PILGRIMAGE SECTION */}
        <div className="card" style={{ 
          padding: '2.5rem', 
          marginBottom: '3rem',
          backgroundColor: 'var(--secondary-maroon)',
          color: '#FFF',
          border: '2px solid var(--accent-gold)',
          borderRadius: 'var(--radius-xl)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span className="badge-tag badge-tag-saffron" style={{ marginBottom: '0.8rem', display: 'inline-flex' }}>
                Pindarak Kshetra – Pindara
              </span>
              <h3 style={{ color: '#FFF', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '1rem', lineHeight: '1.3' }}>
                The Sacred Pilgrimage for Pitru Moksha & Pitru Shanti
              </h3>
              <p style={{ color: '#E2E8F0', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                Pindarak Kshetra is a revered Hindu pilgrimage dedicated to sacred Vedic rituals for Pitru Moksha (liberation of departed souls) and Pitru Shanti (ancestral peace). Devotees from across India visit this holy place to perform authentic Vedic ceremonies according to ancient Vedic traditions.
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '3px solid var(--accent-gold)', boxShadow: 'var(--shadow-lg)' }}>
                <img 
                  src="/images/pitra moksh.jpeg" 
                  alt="The Sacred Pilgrimage for Pitru Moksha & Pitru Shanti"
                  className="img-fade-in"
                  loading="lazy"
                  style={{ width: '100%', maxHeight: '320px', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Story Banner */}
        <div className="card" style={{ padding: '3rem', marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--secondary-maroon)', marginBottom: '1.2rem' }}>
            The Spiritual Sanctity of Pindarak Kshetra
          </h3>
          <p style={{ lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            Pindarak Kshetra is an ancient holy coast site described in Hindu Puranas as a deeply auspicious site for performing Pitru Tarpan, Narayan Nagbali, and Sarpa Shanti rituals. Situated by the serene waters, the natural vibrations of this kshetra amplify prayers for departed ancestors and spiritual peace.
          </p>
          <p style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
            Our platform bridges ancient traditions with modern NRI and global Hindu families, offering transparent online booking, pre-ceremony guidance, and direct access to hereditary Pujaris.
          </p>
        </div>

        {/* HEAD PUJARI PROFILE CARD */}
        <div className="card" style={{ padding: '2.5rem', marginBottom: '3rem', border: '1px solid var(--accent-gold-border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="gold-glow-halo">
                <div className="arch-frame" style={{ maxWidth: '280px', margin: '0 auto' }}>
                  <img 
                    src={pujariProfile.image} 
                    alt={getMultilingualText(pujariProfile.name)} 
                    className="img-fade-in"
                    loading="lazy"
                    style={{ width: '100%', maxHeight: '340px', objectFit: 'cover' }} 
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="badge-tag">OFFICIATING VEDIC PUJARI</span>
              <h3 style={{ fontSize: '2rem', color: 'var(--secondary-maroon)', marginBottom: '0.3rem' }}>
                {getMultilingualText(pujariProfile.name)}
              </h3>
              <p style={{ color: 'var(--primary-saffron)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem' }}>
                {getMultilingualText(pujariProfile.title)}
              </p>
              <p style={{ lineHeight: '1.75', fontSize: '1rem', color: 'var(--text-medium-gray)', marginBottom: '1.5rem' }}>
                {getMultilingualText(pujariProfile.biography)}
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-maroon)', fontWeight: 700, backgroundColor: 'var(--accent-gold-light)', padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--accent-gold-border)' }}>
                <Star size={16} fill="currentColor" style={{ color: 'var(--accent-gold)' }} />
                7th Generation Hereditary Lineage
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <h3 style={{ textAlign: 'center', fontSize: '1.8rem', color: 'var(--secondary-maroon)', marginBottom: '2rem' }}>
          Our Sacred Pillars & Values
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {[
            { title: "Strict Vedic Purity", desc: "Every mantra, havan, and pind daan follows exact shastric vidhi without shortcuts." },
            { title: "Multilingual Clarity", desc: "Rituals are explained step-by-step in English, Hindi, or Gujarati for family unity." },
            { title: "Compassionate Guidance", desc: "We listen with deep respect to every family's spiritual concerns and Gotra traditions." },
            { title: "Transparent Booking", desc: "No hidden costs or confusing procedures—just clear, trusted online scheduling." }
          ].map((val, idx) => (
            <div key={idx} className="card" style={{ backgroundColor: '#FFF' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-saffron-light)',
                color: 'var(--primary-saffron)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <CheckCircle size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--secondary-maroon)' }}>{val.title}</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-medium-gray)', margin: 0 }}>{val.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onOpenBooking} className="btn btn-primary btn-lg">
            Schedule a Ritual with Shastri Rajeshbhai Joshi
          </button>
        </div>
      </div>
    </div>
  );
};
