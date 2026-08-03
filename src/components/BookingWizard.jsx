import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { saveBooking } from '../utils/storage';
import { ritualsData } from '../data/ritualsData';
import { 
  X, Calendar as CalendarIcon, CheckCircle2, ChevronRight, ChevronLeft, 
  User, Phone, Mail, MapPin, Globe, Sparkles, MessageSquare, Printer, ShieldCheck 
} from 'lucide-react';

export const BookingWizard = ({ preselectedRitual, onClose }) => {
  const { lang, t, getMultilingualText } = useLanguage();

  const [step, setStep] = useState(1);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    ritualId: preselectedRitual ? preselectedRitual.id : ritualsData[0].id,
    ritualName: preselectedRitual ? getMultilingualText(preselectedRitual.title) : getMultilingualText(ritualsData[0].title),
    preferredDate: '',
    timeSlot: 'Morning (07:30 AM - 11:30 AM)',
    isFlexibleDate: false,
    clientName: '',
    phone: '',
    email: '',
    language: lang === 'hi' ? 'Hindi' : lang === 'gu' ? 'Gujarati' : 'English',
    city: '',
    country: 'United States',
    venue: 'Pindarak Kshetra Temple Grounds',
    participants: '2 to 4 Persons',
    notes: '',
    accuracyConfirmed: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleRitualSelect = (rId) => {
    const selected = ritualsData.find(r => r.id === rId);
    if (selected) {
      setFormData(prev => ({
        ...prev,
        ritualId: selected.id,
        ritualName: getMultilingualText(selected.title)
      }));
    }
  };

  // Step Validation
  const validateStep = () => {
    const errs = {};
    if (step === 2) {
      if (!formData.isFlexibleDate && !formData.preferredDate) {
        errs.preferredDate = 'Please select a date or check "Dates are flexible"';
      }
    }
    if (step === 3) {
      if (!formData.clientName.trim()) errs.clientName = 'Full Name is required';
      if (!formData.phone.trim()) errs.phone = 'Phone number is required';
      if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid Email is required';
    }
    if (step === 5) {
      if (!formData.accuracyConfirmed) errs.accuracyConfirmed = 'Please confirm that your details are accurate';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => Math.min(prev + 1, 6));
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      const saved = saveBooking(formData);
      setConfirmedBooking(saved);
      setStep(6);
    }
  };

  const printSummary = () => {
    window.print();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(30, 36, 43, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-pure-white)',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '860px',
        width: '95vw',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--accent-gold-border)',
        position: 'relative'
      }}>
        {/* Top Header */}
        <div style={{
          backgroundColor: 'var(--secondary-maroon)',
          color: '#FFF',
          padding: '1.25rem 1.25rem',
          borderTopLeftRadius: 'var(--radius-xl)',
          borderTopRightRadius: 'var(--radius-xl)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
              OFFICIAL SACRED BOOKING WIZARD
            </span>
            <h2 style={{ color: '#FFF', fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)', marginTop: '0.2rem' }}>
              {t('booking_title')}
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Indicator Bar */}
        <div style={{
          backgroundColor: 'var(--bg-warm-cream)',
          padding: '0.8rem 1rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '0.75rem',
          overflowX: 'auto',
          scrollbarWidth: 'none'
        }}>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <div 
              key={num}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                opacity: step >= num ? 1 : 0.4,
                color: step === num ? 'var(--primary-saffron)' : 'var(--text-charcoal)',
                fontWeight: step === num ? 700 : 500,
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: step >= num ? 'var(--primary-saffron)' : 'var(--border-light)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>
                {num}
              </div>
              <span>
                {num === 1 && "Ritual"}
                {num === 2 && "Date"}
                {num === 3 && "Contact"}
                {num === 4 && "Details"}
                {num === 5 && "Review"}
                {num === 6 && "Confirmed"}
              </span>
            </div>
          ))}
        </div>

        {/* Wizard Content Body */}
        <div style={{ padding: '1.5rem 1.25rem' }}>

          {/* Officiating Priest Info Banner */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.85rem 1.25rem',
            backgroundColor: 'var(--accent-gold-light)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--accent-gold-border)',
            marginBottom: '1.5rem'
          }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent-gold)', flexShrink: 0, boxShadow: 'var(--shadow-sm)' }}>
              <img 
                src="/images/shastrijii's image.jpeg" 
                alt="Shastri Rajeshbhai Joshi" 
                className="img-fade-in"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div>
              <div style={{ color: 'var(--secondary-maroon)', fontWeight: 800, fontSize: '0.95rem' }}>
                Officiated by Head Pujari Shastri Rajeshbhai Joshi
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-medium-gray)' }}>
                35+ Years Lineage • Pindarak Kshetra Sacred Ceremonies
              </div>
            </div>
          </div>

          {/* STEP 1: SELECT RITUAL */}
          {step === 1 && (
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Step 1: Choose Sacred Ritual or Consultation</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1rem' }}>
                {ritualsData.map(r => (
                  <div
                    key={r.id}
                    onClick={() => handleRitualSelect(r.id)}
                    style={{
                      border: formData.ritualId === r.id ? '2px solid var(--primary-saffron)' : '1px solid var(--border-light)',
                      backgroundColor: formData.ritualId === r.id ? 'var(--primary-saffron-light)' : 'var(--bg-pure-white)',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      transition: 'all 200ms ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary-maroon)', marginBottom: '0.4rem' }}>
                        {getMultilingualText(r.title)}
                      </h4>
                      {formData.ritualId === r.id && <CheckCircle2 size={20} style={{ color: 'var(--primary-saffron)' }} />}
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-medium-gray)', margin: 0 }}>
                      {getMultilingualText(r.shortSummary)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Step 2: Select Ceremony Date & Time Slot</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Preferred Date
                  </label>
                  <input 
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    disabled={formData.isFlexibleDate}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-md)',
                      border: errors.preferredDate ? '2px solid red' : '1px solid var(--border-light)',
                      fontSize: '1rem'
                    }}
                  />
                  {errors.preferredDate && (
                    <span style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.3rem', display: 'block' }}>
                      {errors.preferredDate}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => handleInputChange('timeSlot', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="Morning (07:30 AM - 11:30 AM)">Morning (07:30 AM - 11:30 AM)</option>
                    <option value="Afternoon (12:00 PM - 03:30 PM)">Afternoon (12:00 PM - 03:30 PM)</option>
                    <option value="Evening (04:30 PM - 07:00 PM)">Evening (04:30 PM - 07:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Flexible Checkbox */}
              <div style={{
                backgroundColor: 'var(--accent-gold-light)',
                padding: '1.2rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--accent-gold-border)'
              }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontWeight: 600, color: 'var(--secondary-maroon)' }}>
                  <input 
                    type="checkbox"
                    checked={formData.isFlexibleDate}
                    onChange={(e) => handleInputChange('isFlexibleDate', e.target.checked)}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span>My dates are flexible / I would like Pujari Ji's advice on the Shubh Muhurat.</span>
                </label>
              </div>
            </div>
          )}

          {/* STEP 3: PERSONAL INFORMATION */}
          {step === 3 && (
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Step 3: Personal & Contact Information</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>Full Name *</label>
                  <input 
                    type="text"
                    placeholder="e.g. Rameshbhai Patel"
                    value={formData.clientName}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: 'var(--radius-md)',
                      border: errors.clientName ? '2px solid red' : '1px solid var(--border-light)'
                    }}
                  />
                  {errors.clientName && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.clientName}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>Phone / WhatsApp Number *</label>
                  <input 
                    type="tel"
                    placeholder="e.g. +1 (415) 555-0192"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: 'var(--radius-md)',
                      border: errors.phone ? '2px solid red' : '1px solid var(--border-light)'
                    }}
                  />
                  {errors.phone && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.phone}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>Email Address *</label>
                  <input 
                    type="email"
                    placeholder="e.g. family@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: 'var(--radius-md)',
                      border: errors.email ? '2px solid red' : '1px solid var(--border-light)'
                    }}
                  />
                  {errors.email && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.email}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>Preferred Language for Communication</label>
                  <select
                    value={formData.language}
                    onChange={(e) => handleInputChange('language', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi (हिन्दी)</option>
                    <option value="Gujarati">Gujarati (ગુજરાતી)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>City & State</label>
                  <input 
                    type="text"
                    placeholder="e.g. Fremont, CA"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>Country</label>
                  <input 
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)'
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CEREMONY DETAILS */}
          {step === 4 && (
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Step 4: Location & Ceremony Logistics</h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Preferred Venue / Location</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
                  {[
                    'Pindarak Kshetra Temple Grounds',
                    'At My Residence (Home Puja)',
                    'Online E-Puja (Live Video Stream)'
                  ].map(v => (
                    <div
                      key={v}
                      onClick={() => handleInputChange('venue', v)}
                      style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        border: formData.venue === v ? '2px solid var(--primary-saffron)' : '1px solid var(--border-light)',
                        backgroundColor: formData.venue === v ? 'var(--primary-saffron-light)' : 'var(--bg-pure-white)',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.92rem'
                      }}
                    >
                      {v}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Estimated Number of Attendees</label>
                <select
                  value={formData.participants}
                  onChange={(e) => handleInputChange('participants', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <option value="1 Person (Solo / E-Puja)">1 Person (Solo / E-Puja)</option>
                  <option value="2 to 4 Persons (Immediate Family)">2 to 4 Persons (Immediate Family)</option>
                  <option value="5 to 10 Persons">5 to 10 Persons</option>
                  <option value="10+ Persons (Large Family Gathering)">10+ Persons (Large Family Gathering)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Gotra & Special Notes for Pujari Ji</label>
                <textarea 
                  rows={3}
                  placeholder="Mention Family Gotra, ancestor names, or any specific requests..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
            </div>
          )}

          {/* STEP 5: REVIEW SUMMARY */}
          {step === 5 && (
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Step 5: Review Booking Summary</h3>

              <div style={{
                backgroundColor: 'var(--bg-warm-cream)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.8rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <strong style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>SELECTED RITUAL</strong>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary-maroon)' }}>{formData.ritualName}</div>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>DATE & TIME</strong>
                    <div style={{ fontSize: '1rem', fontWeight: 600 }}>
                      {formData.isFlexibleDate ? 'Flexible / Pujari Muhurat Advice Requested' : `${formData.preferredDate} (${formData.timeSlot})`}
                    </div>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>DEVOTEE NAME</strong>
                    <div style={{ fontSize: '1rem', fontWeight: 600 }}>{formData.clientName}</div>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>PHONE & EMAIL</strong>
                    <div style={{ fontSize: '0.95rem' }}>{formData.phone} • {formData.email}</div>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>LOCATION & PARTICIPANTS</strong>
                    <div style={{ fontSize: '0.95rem' }}>{formData.venue} ({formData.participants})</div>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>COMMUNICATION LANGUAGE</strong>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{formData.language}</div>
                  </div>
                </div>

                {formData.notes && (
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                    <strong style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>SPECIAL NOTES / GOTRA</strong>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-medium-gray)' }}>{formData.notes}</p>
                  </div>
                )}
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontWeight: 600 }}>
                  <input 
                    type="checkbox"
                    checked={formData.accuracyConfirmed}
                    onChange={(e) => handleInputChange('accuracyConfirmed', e.target.checked)}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span>I confirm that the details provided are accurate.</span>
                </label>
                {errors.accuracyConfirmed && (
                  <span style={{ color: 'red', fontSize: '0.85rem', display: 'block', marginTop: '0.4rem' }}>
                    {errors.accuracyConfirmed}
                  </span>
                )}
              </div>

              {/* Important Notice Box */}
              <div style={{
                backgroundColor: '#FFF8E1',
                borderLeft: '5px solid var(--primary-saffron)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.25rem',
                border: '1px solid var(--accent-gold-border)'
              }}>
                <h4 style={{ color: 'var(--secondary-maroon)', fontSize: '1.05rem', margin: '0 0 0.2rem 0', fontWeight: 800 }}>
                  Important Notice
                </h4>
                <p style={{ color: 'var(--text-charcoal)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                  For all inquiries, bookings, and consultations, kindly communicate in <strong>Hindi</strong> or <strong>Gujarati</strong> for smooth and accurate assistance.
                </p>
              </div>
            </div>
          )}

          {/* STEP 6: CONFIRMATION SCREEN */}
          {step === 6 && confirmedBooking && (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{
                width: '72px',
                height: '72px',
                backgroundColor: 'var(--status-success-bg)',
                color: 'var(--status-success)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <CheckCircle2 size={44} />
              </div>

              <h2 style={{ color: 'var(--secondary-maroon)', fontSize: '2rem', marginBottom: '0.5rem' }}>
                {t('booking_confirmed_title')}
              </h2>

              <p style={{ fontSize: '1.1rem', color: 'var(--text-medium-gray)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                {t('booking_confirmed_msg')}
              </p>

              <div style={{
                backgroundColor: 'var(--accent-gold-light)',
                border: '2px dashed var(--accent-gold)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '460px',
                margin: '0 auto 2rem auto'
              }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--secondary-maroon)', fontWeight: 700, letterSpacing: '0.05em' }}>
                  YOUR OFFICIAL BOOKING ID
                </span>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-saffron)', fontFamily: 'monospace', marginTop: '0.3rem' }}>
                  {confirmedBooking.id}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <a
                  href={`https://wa.me/919979626659?text=Hari%20Om.%20My%20Booking%20Reference%20ID%20is%20${confirmedBooking.id}%20for%20${encodeURIComponent(confirmedBooking.ritualName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Primary (+91 9979626659)</span>
                </a>

                <a
                  href={`https://wa.me/918980333989?text=Hari%20Om.%20My%20Booking%20Reference%20ID%20is%20${confirmedBooking.id}%20for%20${encodeURIComponent(confirmedBooking.ritualName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Secondary (+91 8980333989)</span>
                </a>

                <button onClick={printSummary} className="btn btn-secondary">
                  <Printer size={18} />
                  <span>{t('btn_download_pdf')}</span>
                </button>

                <button onClick={onClose} className="btn btn-outline-gold">
                  Return to Website
                </button>
              </div>

              {/* Important Notice Box in Confirmation Screen */}
              <div style={{
                backgroundColor: '#FFF8E1',
                borderLeft: '5px solid var(--primary-saffron)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.25rem',
                textAlign: 'left',
                border: '1px solid var(--accent-gold-border)',
                maxWidth: '640px',
                margin: '0 auto'
              }}>
                <h4 style={{ color: 'var(--secondary-maroon)', fontSize: '1.1rem', margin: '0 0 0.3rem 0', fontWeight: 800 }}>
                  Important Notice
                </h4>
                <p style={{ color: 'var(--text-charcoal)', fontSize: '0.92rem', margin: 0, lineHeight: '1.5' }}>
                  For all inquiries, bookings, and consultations, kindly communicate in <strong>Hindi</strong> or <strong>Gujarati</strong> for smooth and accurate assistance.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Controls (Steps 1 to 5) */}
          {step < 6 && (
            <div style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              {step > 1 ? (
                <button onClick={prevStep} className="btn btn-secondary">
                  <ChevronLeft size={18} /> {t('btn_prev')}
                </button>
              ) : <div />}

              {step < 5 ? (
                <button onClick={nextStep} className="btn btn-primary">
                  {t('btn_next')} <ChevronRight size={18} />
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn btn-primary btn-lg">
                  <ShieldCheck size={20} /> {t('btn_submit')}
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
