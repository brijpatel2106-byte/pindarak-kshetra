import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, Smartphone } from 'lucide-react';

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
    // Submit inquiry
  };

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-pure-white)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">{t('nav_contact')}</span>
          <h2>Connect & Book Your Ceremony</h2>
          <p className="section-subtitle">
            Get in touch directly with Shastri Shri Rajeshbhai Joshi for inquiries, shubh muhurat advice, and ceremony bookings.
          </p>
        </div>

        {/* ONE-TAP DIRECT CALL & EMAIL MOBILE BANNER */}
        <div style={{
          backgroundColor: 'var(--secondary-maroon)',
          color: '#FFF',
          padding: '2rem 2.5rem',
          borderRadius: 'var(--radius-xl)',
          marginBottom: '3.5rem',
          boxShadow: 'var(--shadow-lg)',
          border: '2px solid var(--accent-gold)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--accent-gold)' }}>
            <Smartphone size={28} />
            <h3 style={{ color: '#FFF', fontSize: '1.5rem', margin: 0 }}>Direct Contact & Mobile Booking</h3>
          </div>
          <p style={{ color: '#E2E8F0', fontSize: '1.1rem', maxWidth: '720px', margin: 0, lineHeight: '1.7' }}>
            Tap below to call directly, send an email, or start a WhatsApp chat with Shastri Ji right now.
          </p>

          <div style={{
            display: 'flex',
            gap: '1.2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '100%',
            maxWidth: '750px'
          }}>
            {/* Direct Phone Call Button */}
            <a 
              href="tel:+919879500000" 
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: 'var(--primary-saffron)',
                color: '#FFF',
                flex: '1 1 240px',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(216, 67, 21, 0.6)'
              }}
            >
              <Phone size={22} />
              <span>Call Directly Now (+91 98795 00000)</span>
            </a>

            {/* Direct Email Button */}
            <a 
              href="mailto:info@pindarakkshetra.com?subject=Sacred%20Ritual%20Booking%20Inquiry" 
              className="btn btn-secondary btn-lg"
              style={{
                backgroundColor: '#FFF',
                color: 'var(--secondary-maroon)',
                flex: '1 1 220px',
                justifyContent: 'center',
                textDecoration: 'none',
                fontWeight: 700
              }}
            >
              <Mail size={22} />
              <span>Send Email Directly</span>
            </a>

            {/* Direct WhatsApp Button */}
            <a 
              href="https://wa.me/919879500000?text=Hello%20Shastri%20Ji,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20ritual%20at%20Pindarak%20Kshetra." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              style={{
                backgroundColor: '#25D366',
                color: '#FFF',
                borderColor: 'transparent',
                flex: '1 1 220px',
                justifyContent: 'center',
                textDecoration: 'none',
                fontWeight: 700
              }}
            >
              <MessageSquare size={22} />
              <span>WhatsApp Direct Chat</span>
            </a>
          </div>
        </div>

        {/* CONTACT GRID: FORM & TEMPLE ADDRESS DETAILS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3.5rem'
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
                  Thank you, <strong>{formData.name}</strong>. Shastri Shri Rajeshbhai Joshi will contact you shortly via phone or email.
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
                      placeholder="+1 (555) 000-0000"
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
                    Sacred Ritual Requested
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

          {/* Temple Address & Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card" style={{ padding: '2.2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-maroon)', marginBottom: '1.5rem' }}>
                Temple Location & Contact Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin size={24} style={{ color: 'var(--primary-saffron)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', color: 'var(--secondary-maroon)' }}>Address</h5>
                    <p style={{ margin: 0, color: 'var(--text-medium-gray)', lineHeight: '1.6' }}>
                      Pindarak Kshetra Sacred Shore Temple,<br />
                      Near Kalyanpur, Devbhumi Dwarka District,<br />
                      Gujarat 361315, India
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Phone size={24} style={{ color: 'var(--primary-saffron)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', color: 'var(--secondary-maroon)' }}>Phone / Call</h5>
                    <p style={{ margin: 0, color: 'var(--text-medium-gray)' }}>
                      +91 98795 00000 (Shastri Rajeshbhai Joshi)
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Mail size={24} style={{ color: 'var(--primary-saffron)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', color: 'var(--secondary-maroon)' }}>Email</h5>
                    <p style={{ margin: 0, color: 'var(--text-medium-gray)' }}>
                      info@pindarakkshetra.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Clock size={24} style={{ color: 'var(--primary-saffron)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', color: 'var(--secondary-maroon)' }}>Visiting Hours</h5>
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
      </div>
    </div>
  );
};
