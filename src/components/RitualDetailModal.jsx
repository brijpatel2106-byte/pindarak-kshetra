import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Clock, MapPin, CheckCircle, Calendar, BookOpen, Scroll, ShieldAlert } from 'lucide-react';

export const RitualDetailModal = ({ ritual, onClose, onBookRitual }) => {
  const { t, getMultilingualText } = useLanguage();

  if (!ritual) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(30, 36, 43, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-pure-white)',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '840px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--accent-gold-border)',
        position: 'relative'
      }}>
        {/* Header Hero Image */}
        <div style={{
          height: '240px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <img 
            src={ritual.image} 
            alt={getMultilingualText(ritual.title)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(74, 14, 23, 0.9), transparent)'
          }} />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.2rem',
              right: '1.2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--secondary-maroon)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <X size={24} />
          </button>

          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '2rem',
            right: '2rem',
            color: '#FFF'
          }}>
            <span className="badge-tag" style={{ backgroundColor: 'var(--primary-saffron)', color: '#FFF', borderColor: 'transparent' }}>
              {ritual.category.toUpperCase()} RITUAL
            </span>
            <h2 style={{ color: '#FFF', fontSize: '2rem', marginTop: '0.4rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              {getMultilingualText(ritual.title)}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '2.5rem' }}>
          {/* Duration & Location row */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            padding: '1rem 1.5rem',
            backgroundColor: 'var(--bg-warm-cream)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Clock size={20} style={{ color: 'var(--primary-saffron)' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted-gray)' }}>Estimated Duration</strong>
                <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--secondary-maroon)' }}>{ritual.duration}</span>
              </div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'var(--border-light)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MapPin size={20} style={{ color: 'var(--primary-saffron)' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted-gray)' }}>Available Locations</strong>
                <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--secondary-maroon)' }}>
                  {ritual.locationOptions.join(' • ')}
                </span>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <BookOpen size={22} style={{ color: 'var(--primary-saffron)' }} />
              Sacred Overview
            </h3>
            <p style={{ lineHeight: '1.8', color: 'var(--text-medium-gray)' }}>
              {getMultilingualText(ritual.overview)}
            </p>
          </div>

          {/* Scriptural Significance */}
          <div style={{
            backgroundColor: 'var(--accent-gold-light)',
            borderLeft: '4px solid var(--accent-gold)',
            padding: '1.5rem',
            borderRadius: '0 var(--radius-md) var(--radius-md) 0',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: 'var(--secondary-maroon)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Scroll size={18} style={{ color: 'var(--accent-gold)' }} />
              Scriptural & Vedic Significance
            </h4>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-charcoal)', fontStyle: 'italic', margin: 0 }}>
              "{getMultilingualText(ritual.scripturalSignificance)}"
            </p>
          </div>

          {/* Who Needs It */}
          {ritual.whoNeedsIt && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldAlert size={20} style={{ color: 'var(--primary-saffron)' }} />
                Who Should Consider This Ritual?
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {ritual.whoNeedsIt.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                    <CheckCircle size={18} style={{ color: 'var(--status-success)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-charcoal)', fontSize: '0.98rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Preparation Guidelines */}
          {ritual.preparationGuidelines && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Preparation Guidelines for Devotees</h3>
              <div style={{
                backgroundColor: 'var(--bg-warm-cream)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}>
                <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                  {ritual.preparationGuidelines.map((p, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem', color: 'var(--text-medium-gray)' }}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.5rem',
            borderTop: '2px solid var(--border-subtle)',
            gap: '1rem'
          }}>
            <button onClick={onClose} className="btn btn-secondary">
              Close Details
            </button>

            <button
              onClick={() => {
                onClose();
                onBookRitual(ritual);
              }}
              className="btn btn-primary btn-lg"
            >
              <Calendar size={20} />
              <span>Schedule This Ritual Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
