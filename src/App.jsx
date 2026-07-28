import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RitualDetailModal } from './components/RitualDetailModal';
import { LightboxModal } from './components/LightboxModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { PujariPage } from './pages/PujariPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [detailRitual, setDetailRitual] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);

  const handleOpenBooking = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageSwitch = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        activePage={activePage}
        setActivePage={handlePageSwitch}
        onOpenBooking={handleOpenBooking}
      />

      <main style={{ flex: 1, overflow: 'hidden' }}>
        {/* Animated Page Transition Key Container */}
        <div key={activePage} className="page-view-container">
          {activePage === 'home' && (
            <HomePage
              setActivePage={handlePageSwitch}
              onSelectDetail={(r) => setDetailRitual(r)}
              onOpenBooking={handleOpenBooking}
              onSelectLightbox={(item) => setLightboxItem(item)}
            />
          )}

          {activePage === 'services' && (
            <ServicesPage
              onSelectDetail={(r) => setDetailRitual(r)}
              onOpenBooking={handleOpenBooking}
            />
          )}

          {activePage === 'about' && (
            <AboutPage onOpenBooking={handleOpenBooking} />
          )}

          {activePage === 'pujari' && (
            <PujariPage onOpenBooking={handleOpenBooking} />
          )}

          {activePage === 'gallery' && (
            <GalleryPage onSelectLightbox={(item) => setLightboxItem(item)} />
          )}

          {activePage === 'contact' && (
            <ContactPage />
          )}
        </div>
      </main>

      <Footer
        setActivePage={handlePageSwitch}
        onOpenBooking={handleOpenBooking}
      />

      {/* Ritual Detail Overlay */}
      {detailRitual && (
        <div className="modal-slide-up">
          <RitualDetailModal
            ritual={detailRitual}
            onClose={() => setDetailRitual(null)}
            onBookRitual={handleOpenBooking}
          />
        </div>
      )}

      {/* Fullscreen Video / Lightbox Overlay */}
      {lightboxItem && (
        <LightboxModal
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
