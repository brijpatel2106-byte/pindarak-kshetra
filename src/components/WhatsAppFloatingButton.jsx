import React, { useState } from 'react';
import { MessageSquare, X, PhoneCall } from 'lucide-react';

export const WhatsAppFloatingButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.8rem',
      right: '1.8rem',
      zIndex: 250,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.6rem'
    }}>
      {/* Expanded Popup Menu */}
      {open && (
        <div style={{
          backgroundColor: 'var(--bg-pure-white)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.22)',
          border: '2px solid var(--accent-gold)',
          padding: '1.25rem',
          width: '280px',
          animation: 'slideUpFromBottom 250ms ease-out forwards'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.8rem',
            paddingBottom: '0.6rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <div style={{ fontWeight: 800, color: 'var(--secondary-maroon)', fontSize: '0.95rem' }}>
              WhatsApp Consultation
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-medium-gray)' }}
            >
              <X size={18} />
            </button>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-medium-gray)', margin: '0 0 1rem 0', lineHeight: '1.4' }}>
            Chat with <strong>Jitendrabhai Kantilal Thaker</strong> on WhatsApp:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <a
              href="https://wa.me/919979626659"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{
                backgroundColor: '#25D366',
                color: '#FFF',
                justifyContent: 'center',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.88rem'
              }}
            >
              <MessageSquare size={16} />
              <span>Primary: +91 9979626659</span>
            </a>

            <a
              href="https://wa.me/918980333989"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{
                backgroundColor: '#128C7E',
                color: '#FFF',
                justifyContent: 'center',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.88rem'
              }}
            >
              <MessageSquare size={16} />
              <span>Secondary: +91 8980333989</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button Icon */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="WhatsApp Chat"
        className="floating-pill"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFF',
          border: '3px solid #FFF',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.55)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: 0
        }}
      >
        {open ? <X size={26} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};
