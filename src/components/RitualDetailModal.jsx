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
      padding: '0.75rem',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-pure-white)',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '840px',
        width: '95vw',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--accent-gold-border)',
        position: 'relative'
      }}>
        {/* Header Hero Image */}
        <div style={{
          minHeight: '180px',
          maxHeight: '240px',
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
            background: 'linear-gradient(to top, rgba(74, 14, 23, 0.92), rgba(0,0,0,0.2))'
          }} />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--secondary-maroon)',
              boxShadow: 'var(--shadow-md)',
              zIndex: 10
            }}
          >
            <X size={22} />
          </button>

          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1.25rem',
            right: '1.25rem',
            color: '#FFF'
          }}>
            <span className="badge-tag badge-tag-saffron" style={{ marginBottom: '0.4rem', fontSize: '0.75rem' }}>
              {ritual.category.toUpperCase()} RITUAL
            </span>
            <h2 style={{ color: '#FFF', fontSize: 'clamp(1.2rem, 3.5vw, 2rem)', marginTop: '0.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)', lineHeight: 1.25 }}>
              {getMultilingualText(ritual.title)}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.5rem 1.25rem' }}>
          {/* Duration & Location row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: 'var(--bg-warm-cream)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flex: '1 1 200px' }}>
              <Clock size={20} style={{ color: 'var(--primary-saffron)', flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted-gray)' }}>Estimated Duration</strong>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--secondary-maroon)' }}>{ritual.duration}</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flex: '1 1 200px' }}>
              <MapPin size={20} style={{ color: 'var(--primary-saffron)', flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted-gray)' }}>Available Locations</strong>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--secondary-maroon)' }}>
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

          {/* Officiating Pujari Snippet */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.25rem',
            backgroundColor: 'var(--bg-warm-cream)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--accent-gold-border)',
            marginBottom: '2rem'
          }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent-gold)', flexShrink: 0, boxShadow: 'var(--shadow-sm)' }}>
              <img 
                src="/images/shastrijii's image.jpeg" 
                alt="Shastri Rajeshbhai Joshi" 
                className="img-fade-in"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div>
              <div style={{ color: 'var(--secondary-maroon)', fontWeight: 800, fontSize: '0.98rem' }}>
                Officiated by Shastri Rajeshbhai Joshi
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--primary-saffron)', fontWeight: 600 }}>
                Head Vedic Pujari • 35+ Years Sacred Lineage at Pindarak Kshetra
              </div>
            </div>
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
