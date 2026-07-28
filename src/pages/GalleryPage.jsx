import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { galleryCategories, galleryPhotos, ceremonyVideos } from '../data/galleryData';
import { Play, ZoomIn, Image as ImageIcon, Video } from 'lucide-react';

export const GalleryPage = ({ onSelectLightbox }) => {
  const { t, getMultilingualText } = useLanguage();
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredPhotos = galleryPhotos.filter(p => selectedCat === 'all' || p.category === selectedCat);

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-pure-white)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">{t('nav_gallery')}</span>
          <h2>Authentic Ceremony Photography & Video Library</h2>
          <p className="section-subtitle">
            View real photographs and video recordings of rituals, havan kunds, and temple moments at Pindarak Kshetra.
          </p>
        </div>

        {/* Single Centered Video Showcase Section with Real Video Clip */}
        <div style={{ maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--secondary-maroon)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
            <Video size={24} style={{ color: 'var(--primary-saffron)' }} />
            Sacred Ceremony Video Highlights
          </h3>

          {ceremonyVideos.slice(0, 1).map(vid => (
            <div 
              key={vid.id}
              onClick={() => onSelectLightbox(vid)}
              className="card card-hover"
              style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', borderRadius: 'var(--radius-xl)' }}
            >
              <div style={{ height: '400px', position: 'relative', backgroundColor: '#000' }}>
                {/* Real Ceremony Video Clip Preview */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={vid.thumbnail}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  <source src={vid.videoUrl} type="video/mp4" />
                  <source src="/videos/moksh_tithi.mp4" type="video/mp4" />
                </video>

                {/* Play Overlay Badge */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 200ms ease'
                }}>
                  <div style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-saffron)',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 26px rgba(216, 67, 21, 0.7)'
                  }}>
                    <Play size={34} style={{ marginLeft: '4px' }} />
                  </div>
                </div>

                <span style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  color: '#FFF',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  Click for Fullscreen Player
                </span>
              </div>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--secondary-maroon)', margin: 0, lineHeight: '1.7' }}>
                  {vid.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--secondary-maroon)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ImageIcon size={24} style={{ color: 'var(--primary-saffron)' }} />
            Sacred Photo Gallery
          </h3>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {galleryCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: selectedCat === cat.id ? 'var(--primary-saffron)' : 'var(--border-light)',
                  backgroundColor: selectedCat === cat.id ? 'var(--primary-saffron)' : 'var(--bg-pure-white)',
                  color: selectedCat === cat.id ? '#FFF' : 'var(--text-charcoal)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {getMultilingualText(cat.label)}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredPhotos.map(photo => (
            <div
              key={photo.id}
              onClick={() => onSelectLightbox(photo)}
              className="card card-hover"
              style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
            >
              <div style={{ height: '240px', position: 'relative', backgroundColor: '#F8FAFC' }}>
                <img 
                  src={photo.image} 
                  alt={photo.title} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div className="hover-overlay" style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: 'rgba(74, 14, 23, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 200ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: 'var(--secondary-maroon)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>
              <div style={{ padding: '1rem' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--secondary-maroon)', margin: 0 }}>{photo.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
