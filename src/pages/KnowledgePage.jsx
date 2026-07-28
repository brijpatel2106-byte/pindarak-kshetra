import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { KNOWLEDGE_CATEGORIES, knowledgeArticles } from '../data/knowledgeData';
import { BookOpen, Search, Calendar, User, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const KnowledgePage = () => {
  const { t, getMultilingualText } = useLanguage();
  const [selectedCat, setSelectedCat] = useState('all');
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredArticles = knowledgeArticles.filter(art => {
    return selectedCat === 'all' || art.category === selectedCat;
  });

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-warm-cream)', minHeight: '85vh' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">{t('nav_knowledge')}</span>
          <h2>Knowledge Center & Sanskrit Ritual Guides</h2>
          <p className="section-subtitle">
            Scriptural explanations, Sanskrit term breakdowns, and practical guidance for Hindu families worldwide.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3.5rem' }}>
          {KNOWLEDGE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCat(cat.id);
                setActiveArticle(null);
              }}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: selectedCat === cat.id ? 'var(--primary-saffron)' : 'var(--border-light)',
                backgroundColor: selectedCat === cat.id ? 'var(--primary-saffron)' : 'var(--bg-pure-white)',
                color: selectedCat === cat.id ? '#FFF' : 'var(--text-charcoal)',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: selectedCat === cat.id ? '0 4px 14px rgba(216, 67, 21, 0.25)' : 'var(--shadow-sm)',
                transition: 'all 200ms ease'
              }}
            >
              {getMultilingualText(cat.label)}
            </button>
          ))}
        </div>

        {/* Article Reader View */}
        {activeArticle ? (
          <div className="card" style={{ maxWidth: '880px', margin: '0 auto', padding: '3.5rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}>
            <button 
              onClick={() => setActiveArticle(null)}
              className="btn btn-secondary btn-sm"
              style={{ marginBottom: '2.5rem' }}
            >
              ← Back to All Guides
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: 'var(--primary-saffron)',
                textTransform: 'uppercase',
                backgroundColor: 'var(--primary-saffron-light)',
                padding: '0.3rem 0.8rem',
                borderRadius: 'var(--radius-full)'
              }}>
                {activeArticle.category}
              </span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted-gray)', fontWeight: 600 }}>
                {activeArticle.readTime}
              </span>
            </div>

            <h1 style={{ fontSize: '2.4rem', margin: '0.6rem 0 1.5rem 0', color: 'var(--secondary-maroon)', lineHeight: '1.3' }}>
              {getMultilingualText(activeArticle.title)}
            </h1>

            <div style={{ display: 'flex', gap: '1.8rem', color: 'var(--text-muted-gray)', fontSize: '0.95rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.2rem' }}>
              <span>By {activeArticle.author}</span>
              <span>Published {activeArticle.date}</span>
            </div>

            <div 
              style={{ lineHeight: '1.95', fontSize: '1.1rem', color: 'var(--text-charcoal)' }}
              dangerouslySetInnerHTML={{ __html: getMultilingualText(activeArticle.content).replace(/\n/g, '<br/>') }}
            />
          </div>
        ) : (
          /* Magazine Articles Grid */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}>
            {filteredArticles.map(art => (
              <div 
                key={art.id} 
                className="card card-hover" 
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  borderRadius: 'var(--radius-xl)',
                  background: 'linear-gradient(180deg, var(--bg-pure-white) 0%, var(--bg-warm-cream) 100%)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: 'var(--primary-saffron)',
                      textTransform: 'uppercase',
                      backgroundColor: 'var(--primary-saffron-light)',
                      padding: '0.36rem 0.9rem',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      {art.category}
                    </span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-muted-gray)', fontWeight: 600 }}>
                      {art.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.38rem', margin: '0.8rem 0', color: 'var(--secondary-maroon)', lineHeight: '1.4' }}>
                    {getMultilingualText(art.title)}
                  </h3>

                  <p style={{ fontSize: '0.98rem', color: 'var(--text-medium-gray)', lineHeight: '1.75' }}>
                    {getMultilingualText(art.summary)}
                  </p>
                </div>

                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', marginTop: '2rem' }}>
                  <button 
                    onClick={() => setActiveArticle(art)}
                    className="btn btn-secondary btn-sm" 
                    style={{ width: '100%', borderRadius: 'var(--radius-full)' }}
                  >
                    <BookOpen size={18} />
                    <span>Read Full Guide</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
