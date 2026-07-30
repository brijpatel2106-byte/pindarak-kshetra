import React, { useState, useEffect } from 'react';
import { getBookings, updateBookingStatus } from '../utils/storage';
import { ShieldCheck, Search, Filter, Phone, Mail, Calendar, MapPin, CheckCircle, Clock, X } from 'lucide-react';

export const AdminDashboard = ({ onClose }) => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  const handleStatusChange = (id, newStatus) => {
    const updated = updateBookingStatus(id, newStatus);
    setBookings(updated);
  };

  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.ritualName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(30, 36, 43, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 350,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-pure-white)',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '1080px',
        width: '95vw',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--accent-gold-border)'
      }}>
        {/* Top Bar */}
        <div style={{
          backgroundColor: 'var(--secondary-maroon)',
          color: '#FFF',
          padding: '1.25rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <ShieldCheck size={26} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
            <div>
              <h2 style={{ color: '#FFF', fontSize: 'clamp(1.1rem, 3.5vw, 1.6rem)', margin: 0 }}>Pujari & Staff Admin Dashboard</h2>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>Pindarak Kshetra Sacred Request Manager</span>
            </div>
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

        {/* Search & Filters */}
        <div style={{
          padding: '1.25rem 1.25rem',
          backgroundColor: 'var(--bg-warm-cream)',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1 1 200px', minWidth: 0, position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted-gray)' }} />
            <input 
              type="text"
              placeholder="Search by client name, ID, or ritual..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.7rem 1rem 0.7rem 2.8rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-light)',
                fontSize: '0.95rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <Filter size={16} style={{ color: 'var(--text-medium-gray)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Filter:</span>
            {['All', 'Pending', 'Confirmed', 'Completed'].map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-light)',
                  backgroundColor: statusFilter === st ? 'var(--secondary-maroon)' : '#FFF',
                  color: statusFilter === st ? '#FFF' : 'var(--text-charcoal)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Requests List */}
        <div style={{ padding: '1.25rem' }}>
          {filteredBookings.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted-gray)' }}>
              No booking requests found matching your query.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {filteredBookings.map(b => (
                <div 
                  key={b.id}
                  style={{
                    backgroundColor: 'var(--bg-pure-white)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                    gap: '1.2rem',
                    alignItems: 'start'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                      <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', fontWeight: 800, color: 'var(--primary-saffron)', backgroundColor: 'var(--primary-saffron-light)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                        {b.id}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted-gray)' }}>Submitted: {b.dateSubmitted}</span>
                    </div>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--secondary-maroon)', marginBottom: '0.2rem' }}>
                      {b.ritualName}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-medium-gray)' }}>
                      Devotee: <strong>{b.clientName}</strong> ({b.language})
                    </p>
                  </div>

                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted-gray)' }}>SCHEDULED DATE</strong>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                      {b.isFlexibleDate ? 'Flexible Muhurat' : `${b.preferredDate}`}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-medium-gray)' }}>{b.timeSlot}</span>
                  </div>

                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted-gray)' }}>CONTACT & VENUE</strong>
                    <span style={{ fontSize: '0.95rem', display: 'block' }}>{b.phone}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted-gray)' }}>{b.venue}</span>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted-gray)', marginBottom: '0.4rem' }}>UPDATE STATUS</strong>
                    <select
                      value={b.status}
                      onChange={(e) => handleStatusChange(b.id, e.target.value)}
                      style={{
                        padding: '0.5rem 0.8rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        backgroundColor: b.status === 'Confirmed' ? 'var(--status-success-bg)' : b.status === 'Pending' ? 'var(--status-warning-bg)' : '#FFF',
                        color: b.status === 'Confirmed' ? 'var(--status-success)' : b.status === 'Pending' ? 'var(--status-warning)' : 'var(--text-charcoal)',
                        fontWeight: 700,
                        fontSize: '0.9rem'
                      }}
                    >
                      <option value="Pending">Pending Review</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
