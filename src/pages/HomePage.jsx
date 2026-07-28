import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TrustBar } from '../components/TrustBar';
import { RitualCard } from '../components/RitualCard';
import { ritualsData } from '../data/ritualsData';
import { pujariProfile } from '../data/pujariData';
import { ceremonyVideos } from '../data/galleryData';
import { faqData } from '../data/faqData';
import { 
  Calendar, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, 
  MessageSquare, Star, HelpCircle, Phone, MapPin, CheckCircle, Quote, Play, Video 
} from 'lucide-react';

export const HomePage = ({ setActivePage, onSelectDetail, onOpenBooking, onSelectLightbox }) => {
  const { t, getMultilingualText } = useLanguage();

  return (
    <div>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '84vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(74, 14, 23, 0.93), rgba(28, 34, 38, 0.88)), url("/images/narayan_nagbali.jpg?v=2") center/cover no-repeat',
        color: '#FFF',
        padding: '6rem 0 5rem 0',
        borderBottom: '4px solid var(--accent-gold)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="badge-tag floating-pill" style={{ backgroundColor: 'var(--primary-saffron)', color: '#FFF', borderColor: 'transparent' }}>
              <Sparkles size={14} /> {t('hero_badge')}
            </span>

            <h1 style={{ color: '#FFF', marginBottom: '1.4rem', textShadow: '0 4px 14px rgba(0,0,0,0.5)', fontWeight: 800 }}>
              {t('hero_title')}
            </h1>

            <p style={{ color: '#F7FAFC', fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '2.8rem', opacity: 0.96, maxWidth: '760px' }}>
              {t('hero_subtitle')}
            </p>

            <div style={{ display: 'flex', gap: '1.4rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <button 
                className="btn btn-primary btn-lg"
                onClick={onOpenBooking}
              >
                <Calendar size={22} />
                <span>{t('hero_cta_book')}</span>
              </button>

              <button 
                className="btn btn-secondary btn-lg"
                onClick={() => setActivePage('services')}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: 'none' }}
              >
                <span>{t('hero_cta_services')}</span>
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Hero Trust Badges */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              fontSize: '0.95rem',
              color: 'var(--accent-gold)',
              paddingTop: '1.8rem',
              borderTop: '1px solid rgba(255,255,255,0.18)'
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                <CheckCircle size={18} /> {t('hero_badge_experience')}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                <CheckCircle size={18} /> {t('hero_badge_multilingual')}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                <CheckCircle size={18} /> {t('hero_badge_authentic')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* ABOUT PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-warm-cream)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge-tag">{t('nav_about')}</span>
              <h2 style={{ marginBottom: '1.4rem', fontSize: '2.5rem' }}>
                Preserving Ancient Vedic Sanctity at Pindarak Kshetra
              </h2>
              <p style={{ fontSize: '1.12rem', marginBottom: '1.4rem', lineHeight: '1.8' }}>
                Pindarak Kshetra has been revered for centuries as a sacred ocean coast pilgrimage for Pitru Tarpan, Narayan Nagbali, and Sarpa Shanti rituals.
              </p>
              <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
                We guide families across USA and globally with deep scriptural authority, personal care, and transparent online booking—ensuring ancient Vedic traditions are fulfilled with complete trust.
              </p>

              <button onClick={() => setActivePage('about')} className="btn btn-secondary btn-lg">
                <span>Read Full Heritage & Mission</span>
                <ArrowRight size={20} />
              </button>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-arch)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '6px solid #FFF'
              }}>
                <img src="/images/narayan_nagbali.jpg?v=2" alt="Pindarak Temple Ceremony" style={{ width: '100%', height: '420px', objectFit: 'cover' }} />
              </div>

              <div className="floating-pill" style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '-1rem',
                backgroundColor: 'var(--secondary-maroon)',
                color: '#FFF',
                padding: '1.4rem 2rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                border: '2px solid var(--accent-gold)'
              }}>
                <ShieldCheck size={36} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.15rem' }}>100% Shastras Tradition</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--accent-gold)', fontWeight: 600 }}>Hereditary Gujarati Brahmin Lineage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-pure-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">{t('services_tag')}</span>
            <h2>{t('services_title')}</h2>
            <p className="section-subtitle">{t('services_subtitle')}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2.2rem',
            marginBottom: '3.5rem'
          }}>
            {ritualsData.slice(0, 3).map(ritual => (
              <RitualCard
                key={ritual.id}
                ritual={ritual}
                onSelectDetail={onSelectDetail}
                onSelectBook={onOpenBooking}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => setActivePage('services')} 
              className="btn btn-secondary btn-lg"
            >
              <span>{t('view_all_services')}</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CEREMONY VIDEO HIGHLIGHTS - REAL LIVE VIDEO CLIP SHOWCASE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-warm-cream)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Watch Ceremony</span>
            <h2>Sacred Ceremony Video Highlights</h2>
          </div>

          <div style={{ maxWidth: '760px', margin: '0 auto 3rem auto' }}>
            {ceremonyVideos.slice(0, 1).map(vid => (
              <div 
                key={vid.id}
                onClick={() => onSelectLightbox && onSelectLightbox(vid)}
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

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setActivePage('gallery')} className="btn btn-secondary btn-lg">
              <Video size={20} />
              <span>Explore Photo & Video Gallery</span>
            </button>
          </div>
        </div>
      </section>

      {/* MEET PUJARI */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, #FFF 0%, var(--bg-warm-cream) 50%, var(--bg-light-sand) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="editorial-hero-card">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '4rem',
              alignItems: 'center'
            }}>
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <div className="gold-glow-halo">
                  <div className="arch-frame" style={{ maxWidth: '380px', margin: '0 auto' }}>
                    <img 
                      src={pujariProfile.image} 
                      alt={getMultilingualText(pujariProfile.name)} 
                      style={{ width: '100%', height: '480px', objectFit: 'cover' }} 
                    />
                  </div>
                </div>

                <div className="floating-pill" style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '10%',
                  backgroundColor: 'var(--primary-saffron)',
                  color: '#FFF',
                  padding: '0.8rem 1.6rem',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: 'var(--shadow-hover)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Star size={16} fill="currentColor" /> 35+ Years Sacred Lineage
                </div>
              </div>

              <div>
                <span className="badge-tag">{t('pujari_title')}</span>
                <h2 style={{ fontSize: '2.6rem', marginBottom: '0.4rem', color: 'var(--secondary-maroon)' }}>
                  {getMultilingualText(pujariProfile.name)}
                </h2>
                <p style={{ color: 'var(--primary-saffron)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.8rem' }}>
                  {getMultilingualText(pujariProfile.title)}
                </p>

                <div className="editorial-quote">
                  <Quote size={24} style={{ color: 'var(--accent-gold)', marginBottom: '0.4rem', display: 'block' }} />
                  {getMultilingualText(pujariProfile.philosophy)}
                </div>

                <p style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-medium-gray)', marginBottom: '2.2rem' }}>
                  {getMultilingualText(pujariProfile.biography)}
                </p>

                <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                  <button onClick={() => setActivePage('pujari')} className="btn btn-primary btn-lg">
                    <span>{t('read_full_bio')}</span>
                    <ArrowRight size={20} />
                  </button>

                  <button onClick={onOpenBooking} className="btn btn-secondary btn-lg">
                    <span>Schedule Consultation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-pure-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Answers & Help</span>
            <h2>{t('faq_title')}</h2>
            <p className="section-subtitle">{t('faq_subtitle')}</p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {faqData.map((faq, idx) => (
              <details 
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-warm-cream)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem 2.2rem',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'all 200ms ease'
                }}
              >
                <summary style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--secondary-maroon)' }}>
                  {getMultilingualText(faq.question)}
                </summary>
                <p style={{ marginTop: '1rem', fontSize: '1.02rem', lineHeight: '1.75', color: 'var(--text-medium-gray)' }}>
                  {getMultilingualText(faq.answer)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA BANNER */}
      <section style={{
        backgroundColor: 'var(--secondary-maroon)',
        color: '#FFF',
        padding: '6rem 0',
        textAlign: 'center',
        borderTop: '4px solid var(--accent-gold)',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: '#FFF', fontSize: '2.7rem', marginBottom: '1.2rem' }}>
            Ready to Schedule Your Sacred Ritual?
          </h2>
          <p style={{ color: '#E2E8F0', fontSize: '1.2rem', marginBottom: '2.8rem', lineHeight: '1.8' }}>
            Connect directly with Shastri Shri Rajeshbhai Joshi and secure your preferred ceremony date with peace of mind.
          </p>
          <div style={{ display: 'flex', gap: '1.4rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-primary btn-lg">
              <Calendar size={22} />
              <span>{t('hero_cta_book')}</span>
            </button>
            <a 
              href="https://wa.me/919879500000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-lg"
              style={{ backgroundColor: '#25D366', color: '#FFF', borderColor: 'transparent' }}
            >
              <MessageSquare size={22} />
              <span>WhatsApp Direct Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
