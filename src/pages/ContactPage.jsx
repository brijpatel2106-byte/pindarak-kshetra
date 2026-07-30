import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, Smartphone, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';

export const ContactPage = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    ritual: 'Narayan Nagbali & Pitru Moksha Vidhi',
    preferredDate: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-pure-white)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">{t('nav_contact')}</span>
          <h2>Connect & Book Your Ceremony</h2>
          <p className="section-subtitle">
            Get in touch directly with Jitendrabhai Kantilal Thaker for inquiries, shubh muhurat advice, and ceremony bookings.
          </p>
        </div>

        {/* ONE-TAP DIRECT CALL, WHATSAPP & EMAIL MOBILE/DESKTOP BANNER */}
        <div style={{
          backgroundColor: 'var(--secondary-maroon)',
          color: '#FFF',
          padding: '2rem 1.5rem',
          borderRadius: 'var(--radius-xl)',
          marginBottom: '2.5rem',
          boxShadow: 'var(--shadow-lg)',
          border: '2px solid var(--accent-gold)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1.2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--accent-gold)' }}>
            <Smartphone size={28} />
            <h3 style={{ color: '#FFF', fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)', margin: 0 }}>Direct Contact & Mobile Booking</h3>
          </div>
          <p style={{ color: '#E2E8F0', fontSize: '1.05rem', maxWidth: '750px', margin: 0, lineHeight: '1.6' }}>
            Tap below to call directly, send an email, or start a WhatsApp chat with <strong>Jitendrabhai Kantilal Thaker</strong> right now.
          </p>

          {/* Quick Action Buttons Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '1rem',
            width: '100%',
            maxWidth: '900px',
            marginTop: '0.5rem'
          }}>
            {/* Phone 1 */}
            <a 
              href="tel:+919979626659" 
              className="btn btn-primary"
              style={{
                backgroundColor: 'var(--primary-saffron)',
                color: '#FFF',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(216, 67, 21, 0.6)',
                padding: '0.85rem 1rem',
                fontSize: '0.95rem'
              }}
            >
              <Phone size={18} />
              <span>Call: +91 9979626659</span>
            </a>

            {/* Phone 2 */}
            <a 
              href="tel:+918980333989" 
              className="btn btn-primary"
              style={{
                backgroundColor: 'var(--primary-saffron)',
                color: '#FFF',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(216, 67, 21, 0.6)',
                padding: '0.85rem 1rem',
                fontSize: '0.95rem'
              }}
            >
              <Phone size={18} />
              <span>Call: +91 8980333989</span>
            </a>

            {/* Primary WhatsApp */}
            <a 
              href="https://wa.me/919979626659" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                backgroundColor: '#25D366',
                color: '#FFF',
                justifyContent: 'center',
                textDecoration: 'none',
                fontWeight: 700,
                padding: '0.85rem 1rem',
                fontSize: '0.95rem'
              }}
            >
              <MessageSquare size={18} />
              <span>WhatsApp: +91 9979626659</span>
            </a>

            {/* Secondary WhatsApp */}
            <a 
              href="https://wa.me/918980333989" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                backgroundColor: '#25D366',
                color: '#FFF',
                justifyContent: 'center',
                textDecoration: 'none',
                fontWeight: 700,
                padding: '0.85rem 1rem',
                fontSize: '0.95rem'
              }}
            >
              <MessageSquare size={18} />
              <span>WhatsApp: +91 8980333989</span>
            </a>

            {/* Direct Email */}
            <a 
              href="mailto:jthaker511@gmail.com" 
              className="btn btn-secondary"
              style={{
                backgroundColor: '#FFF',
                color: 'var(--secondary-maroon)',
                justifyContent: 'center',
                textDecoration: 'none',
                fontWeight: 700,
                gridColumn: '1 / -1',
                padding: '0.85rem 1rem',
                fontSize: '0.95rem'
              }}
            >
              <Mail size={18} />
              <span>Email: jthaker511@gmail.com</span>
            </a>
          </div>
        </div>

        {/* CONTACT GRID: FORM & TEMPLE ADDRESS DETAILS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Inquiry Form */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--secondary-maroon)', marginBottom: '1.5rem' }}>
              Send an Online Inquiry
            </h3>

            {submitted ? (
              <div style={{
                backgroundColor: 'var(--bg-warm-cream)',
                padding: '2.5rem',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                border: '2px solid var(--accent-gold)'
              }}>
                <CheckCircle size={48} style={{ color: 'var(--primary-saffron)', marginBottom: '1rem' }} />
                <h4 style={{ color: 'var(--secondary-maroon)', fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                  Inquiry Received Successfully!
                </h4>
                <p style={{ color: 'var(--text-medium-gray)', lineHeight: '1.7' }}>
                  Thank you, <strong>{formData.name}</strong>. Jitendrabhai Kantilal Thaker will contact you shortly via phone or email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-charcoal)' }}>
                    Your Full Name *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.2rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-charcoal)' }}>
                      Phone Number *
                    </label>
                    <input 
                      type="tel"
                      required
                      placeholder="+91 9979626659"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.2rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '1rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-charcoal)' }}>
                      Email Address
                    </label>
                    <input 
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.2rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-charcoal)' }}>
                    Sacred Service Requested
                  </label>
                  <select 
                    value={formData.ritual}
                    onChange={(e) => setFormData({ ...formData, ritual: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.2rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '1rem',
                      backgroundColor: '#FFF'
                    }}
                  >
                    <option value="Narayan Nagbali & Pitru Moksha Vidhi">Narayan Nagbali & Pitru Moksha Vidhi</option>
                    <option value="Kaal Sarp & Sarpa Dosha Shanti Puja">Kaal Sarp & Sarpa Dosha Shanti Puja</option>
                    <option value="Vastu Dosha Rectification">Vastu Dosha Rectification</option>
                    <option value="Navagraha Shanti Mahayajna">Navagraha Shanti Mahayajna</option>
                    <option value="Shree Satyanarayan Katha & Vrat Vidhi">Shree Satyanarayan Katha & Vrat Vidhi</option>
                    <option value="Horoscope & Muhurat Consultation">Horoscope & Muhurat Consultation</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-charcoal)' }}>
                    Message / Special Requests
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Provide Gotra details, preferred dates, or specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.2rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '0.5rem' }}>
                  <Send size={20} />
                  <span>Submit Inquiry Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Official Address & Contact Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card" style={{ padding: '2.2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-maroon)', marginBottom: '1.5rem' }}>
                Official Contact & Address
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Official Address Display */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin size={24} style={{ color: 'var(--primary-saffron)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '1.1rem', margin: '0 0 0.4rem 0', color: 'var(--secondary-maroon)' }}>Official Address</h5>
                    <div style={{
                      backgroundColor: 'var(--bg-warm-cream)',
                      padding: '1.2rem 1.4rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--accent-gold-border)',
                      fontSize: '1rem',
                      lineHeight: '1.8',
                      color: 'var(--text-charcoal)',
                      fontWeight: 500
                    }}>
                      <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--secondary-maroon)', marginBottom: '0.4rem' }}>
                        Jitendrabhai Kantilal Thaker
                      </div>
                      <div><strong>At & Post:</strong> Pindara</div>
                      <div><strong>Via:</strong> Bhatia</div>
                      <div><strong>Taluka:</strong> Jam Kalyanpur</div>
                      <div><strong>District:</strong> Dev Bhoomi Dwarka</div>
                      <div><strong>State:</strong> Gujarat – 361315</div>
                      <div><strong>Country:</strong> India</div>
                    </div>
                  </div>
                </div>

                {/* Clickable Phone Numbers */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Phone size={24} style={{ color: 'var(--primary-saffron)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', color: 'var(--secondary-maroon)' }}>Phone / Direct Call</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <a href="tel:+919979626659" style={{ color: 'var(--primary-saffron)', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}>
                        +91 9979626659
                      </a>
                      <a href="tel:+918980333989" style={{ color: 'var(--primary-saffron)', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}>
                        +91 8980333989
                      </a>
                    </div>
                  </div>
                </div>

                {/* Clickable Email */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Mail size={24} style={{ color: 'var(--primary-saffron)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', color: 'var(--secondary-maroon)' }}>Email Application</h5>
                    <a href="mailto:jthaker511@gmail.com" style={{ color: 'var(--primary-saffron)', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}>
                      jthaker511@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat Links */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MessageSquare size={24} style={{ color: '#25D366', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', color: 'var(--secondary-maroon)' }}>WhatsApp Chat</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <a href="https://wa.me/919979626659" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
                        Primary WhatsApp: +91 9979626659
                      </a>
                      <a href="https://wa.me/918980333989" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
                        Secondary WhatsApp: +91 8980333989
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Clock size={24} style={{ color: 'var(--primary-saffron)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', color: 'var(--secondary-maroon)' }}>Visiting & Consultation Hours</h5>
                    <p style={{ margin: 0, color: 'var(--text-medium-gray)' }}>
                      Daily: 6:00 AM – 8:00 PM IST<br />
                      (Ritual consultations available 7 days a week)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADDITIONAL SERVICE FEATURE: VASTU DOSHA RECTIFICATION */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="card" style={{
            padding: '2.5rem',
            backgroundColor: 'var(--bg-warm-cream)',
            border: '2px solid var(--accent-gold)',
            borderRadius: 'var(--radius-xl)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <Sparkles size={28} style={{ color: 'var(--primary-saffron)' }} />
              <span className="badge-tag" style={{ margin: 0 }}>Additional Spiritual Service</span>
            </div>

            <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-maroon)', marginBottom: '1rem' }}>
              Vastu Dosha Rectification
            </h3>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-charcoal)', marginBottom: '1.5rem', maxWidth: '900px' }}>
              If any Vastu Dosha (architectural or directional imbalance) remains unresolved in your home, property, office, or other premises, appropriate Vedic remedies and corrective rituals can also be performed through Pindarak Kshetra.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <a 
                href="https://wa.me/919979626659?text=Hari%20Om.%20I%20would%20like%20to%20inquire%20about%20Vastu%20Dosha%20Rectification%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <MessageSquare size={20} />
                <span>Inquire for Vastu Rectification</span>
              </a>

              <a 
                href="tel:+919979626659"
                className="btn btn-secondary btn-lg"
              >
                <Phone size={20} />
                <span>Call Pujari Ji (+91 9979626659)</span>
              </a>
            </div>
          </div>
        </div>

        {/* IMPORTANT NOTICE ELEGANT INFORMATION BOX */}
        <div style={{
          backgroundColor: '#FFF8E1',
          borderLeft: '6px solid var(--primary-saffron)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.8rem 2.2rem',
          boxShadow: 'var(--shadow-md)',
          borderTop: '1px solid var(--accent-gold-border)',
          borderRight: '1px solid var(--accent-gold-border)',
          borderBottom: '1px solid var(--accent-gold-border)',
          display: 'flex',
          gap: '1.4rem',
          alignItems: 'flex-start'
        }}>
          <AlertCircle size={32} style={{ color: 'var(--primary-saffron)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ color: 'var(--secondary-maroon)', fontSize: '1.35rem', marginBottom: '0.5rem', fontWeight: 800 }}>
              Important Notice
            </h4>
            <p style={{ color: 'var(--text-charcoal)', fontSize: '1.08rem', lineHeight: '1.7', margin: 0, fontWeight: 500 }}>
              For all inquiries, bookings, and consultations, kindly communicate in <strong>Hindi</strong> or <strong>Gujarati</strong> for smooth and accurate assistance.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
