import React, { useRef, useEffect } from 'react';
import { X, Play } from 'lucide-react';

export const LightboxModal = ({ item, onClose }) => {
  if (!item) return null;

  const isVideo = item.duration !== undefined;
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt fullscreen mode if requested
    if (isVideo && videoRef.current && videoRef.current.requestFullscreen) {
      // videoRef.current.requestFullscreen().catch(() => {});
    }
  }, [isVideo]);

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(10, 12, 16, 0.95)',
      backdropFilter: 'blur(16px)',
      zIndex: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.5rem',
      animation: 'fadeIn 250ms ease forwards'
    }}>
      <div style={{
        position: 'relative',
        maxWidth: isVideo ? '1120px' : '900px',
        width: '94vw',
        maxHeight: '94vh',
        backgroundColor: '#000',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
        border: '1px solid rgba(197, 160, 89, 0.3)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Top Header Bar with Close Button */}
        <div style={{
          backgroundColor: 'rgba(20, 24, 30, 0.95)',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          zIndex: 10,
          gap: '0.5rem'
        }}>
          <h3 style={{ color: '#FFF', fontSize: 'clamp(1rem, 3vw, 1.25rem)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {item.title}
          </h3>

          <button
            onClick={onClose}
            style={{
              backgroundColor: 'var(--primary-saffron)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '0.4rem 0.8rem',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.85rem',
              boxShadow: '0 4px 12px rgba(216, 67, 21, 0.4)',
              flexShrink: 0
            }}
          >
            <X size={16} />
            <span>Close</span>
          </button>
        </div>

        {/* Video Player Main View */}
        {isVideo ? (
          <div style={{ flex: 1, backgroundColor: '#000', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '100%', minHeight: '220px', height: 'calc(75vh - 100px)', backgroundColor: '#000' }}>
              {item.videoUrl ? (
                item.videoUrl.includes('youtube.com') || item.videoUrl.includes('youtu.be') ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`${item.videoUrl.replace('watch?v=', 'embed/')}?autoplay=1`} 
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    style={{ width: '100%', height: '100%' }}
                  />
                ) : (
                  <video 
                    ref={videoRef}
                    width="100%" 
                    height="100%" 
                    controls 
                    autoPlay 
                    playsInline
                    src={item.videoUrl}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  >
                    Your browser does not support HTML5 video playback.
                  </video>
                )
              ) : (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
            </div>

            {/* Video Description Banner */}
            <div style={{ padding: '1.2rem 1.8rem', backgroundColor: 'var(--secondary-maroon)', color: '#FFF' }}>
              <p style={{ color: '#E2E8F0', fontSize: '0.98rem', margin: 0, lineHeight: '1.6' }}>
                {item.description}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <img src={item.image} alt={item.title} style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', display: 'block' }} />
            <div style={{ padding: '1.5rem 2rem', backgroundColor: 'var(--bg-pure-white)' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--secondary-maroon)', marginBottom: '0.4rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-medium-gray)', margin: 0, lineHeight: '1.6' }}>{item.caption}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
