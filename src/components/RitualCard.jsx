import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, MapPin, Calendar, ArrowRight, Star } from 'lucide-react';

export const RitualCard = ({ ritual, onSelectDetail, onSelectBook }) => {
  const { t, getMultilingualText } = useLanguage();

  return (
    <div className="card card-hover" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between'
    }}>
      <div>
        {/* Popular Tag Badge */}
        {ritual.popular && (
          <div style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            backgroundColor: 'var(--accent-gold)',
            color: 'var(--secondary-maroon)',
            fontSize: '0.75rem',
            fontWeight: 800,
            padding: '0.3rem 0.8rem',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            textTransform: 'uppercase',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <Star size={12} fill="currentColor" /> Popular Choice
          </div>
        )}

        {/* Card Header Image */}
        <div style={{
          height: '180px',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          marginBottom: '1.25rem',
          backgroundColor: 'var(--bg-light-sand)'
        }}>
          <img 
            src={ritual.image} 
            alt={getMultilingualText(ritual.title)} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Ritual Title */}
        <h3 style={{
          fontSize: '1.3rem',
          color: 'var(--secondary-maroon)',
          marginBottom: '0.75rem',
          lineHeight: 1.3
        }}>
          {getMultilingualText(ritual.title)}
        </h3>

        {/* Short Summary */}
        <p style={{
          fontSize: '0.95rem',
          color: 'var(--text-medium-gray)',
          lineHeight: 1.6,
          marginBottom: '1.2rem'
        }}>
          {getMultilingualText(ritual.shortSummary)}
        </p>

        {/* Meta badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.8rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--text-medium-gray)'
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'var(--bg-warm-cream)',
            padding: '0.3rem 0.7rem',
            borderRadius: '6px',
            border: '1px solid var(--border-subtle)'
          }}>
            <Clock size={14} style={{ color: 'var(--primary-saffron)' }} />
            {ritual.duration}
          </span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'var(--bg-warm-cream)',
            padding: '0.3rem 0.7rem',
            borderRadius: '6px',
            border: '1px solid var(--border-subtle)'
          }}>
            <MapPin size={14} style={{ color: 'var(--primary-saffron)' }} />
            Temple / Online
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.8rem',
        paddingTop: '1rem',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <button
          onClick={() => onSelectDetail(ritual)}
          className="btn btn-secondary btn-sm"
        >
          <span>{t('learn_more')}</span>
        </button>

        <button
          onClick={() => onSelectBook(ritual)}
          className="btn btn-primary btn-sm"
        >
          <Calendar size={14} />
          <span>{t('nav_book_now')}</span>
        </button>
      </div>
    </div>
  );
};
