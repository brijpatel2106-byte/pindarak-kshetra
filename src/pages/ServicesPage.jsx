import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RitualCard } from '../components/RitualCard';
import { RITUAL_CATEGORIES, ritualsData } from '../data/ritualsData';
import { Search, Filter, Calendar } from 'lucide-react';

export const ServicesPage = ({ onSelectDetail, onOpenBooking }) => {
  const { t, getMultilingualText } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRituals = ritualsData.filter(r => {
    const matchesCat = selectedCategory === 'all' || r.category === selectedCategory;
    const titleText = getMultilingualText(r.title).toLowerCase();
    const summaryText = getMultilingualText(r.shortSummary).toLowerCase();
    const matchesSearch = titleText.includes(searchQuery.toLowerCase()) || summaryText.includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-warm-cream)', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">{t('nav_services')}</span>
          <h2>Sacred Ceremonies & Ritual Directory</h2>
          <p className="section-subtitle">
            Explore authentic Vedic rituals performed with devotion, scriptural purity, and personalized guidance.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div style={{
          backgroundColor: 'var(--bg-pure-white)',
          padding: '1.5rem 2rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '3rem',
          border: '1px solid var(--border-subtle)'
        }}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.5rem' }}>
            {/* Search Input */}
            <div style={{ flex: 1, minWidth: '280px', position: 'relative' }}>
              <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted-gray)' }} />
              <input 
                type="text"
                placeholder={t('search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem 0.8rem 2.8rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-light)',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {RITUAL_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: selectedCategory === cat.id ? 'var(--primary-saffron)' : 'var(--border-light)',
                  backgroundColor: selectedCategory === cat.id ? 'var(--primary-saffron)' : 'var(--bg-pure-white)',
                  color: selectedCategory === cat.id ? '#FFF' : 'var(--text-charcoal)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'all 150ms ease'
                }}
              >
                {getMultilingualText(cat.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Ritual Cards Grid */}
        {filteredRituals.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-medium-gray)' }}>
            No sacred rituals found matching your criteria. Try adjusting your search query.
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {filteredRituals.map(ritual => (
              <RitualCard
                key={ritual.id}
                ritual={ritual}
                onSelectDetail={onSelectDetail}
                onSelectBook={onOpenBooking}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
