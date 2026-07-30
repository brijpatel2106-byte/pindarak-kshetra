import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Flame, HeartHandshake, Heart, Award, Users, CheckCircle } from 'lucide-react';

export const AboutPage = ({ onOpenBooking }) => {
  const { t } = useLanguage();

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
            Schedule a Ritual with Pujari Ji
          </button>
        </div>
      </div>
    </div>
  );
};
