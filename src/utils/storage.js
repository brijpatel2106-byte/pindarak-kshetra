// Utility to persist booking requests & admin status in LocalStorage

const BOOKINGS_KEY = 'pk_bookings_data';

const initialDemoBookings = [
  {
    id: "PK-2026-9812",
    dateSubmitted: "2026-07-27",
    ritualName: "Narayan Nagbali & Pitru Moksha Vidhi",
    preferredDate: "2026-08-14",
    timeSlot: "Morning (07:30 AM)",
    clientName: "Rameshbhai Patel",
    phone: "+1 (415) 555-0192",
    email: "ramesh.patel@example.com",
    language: "Gujarati",
    city: "Fremont, CA, USA",
    venue: "Pindarak Kshetra Temple Grounds",
    participants: "4",
    notes: "Kashyapa Gotra. Request Pujari guidance on accommodations.",
    status: "Confirmed"
  },
  {
    id: "PK-2026-9813",
    dateSubmitted: "2026-07-28",
    ritualName: "Kaal Sarp & Sarpa Dosha Shanti Puja",
    preferredDate: "2026-08-18",
    timeSlot: "Morning (09:00 AM)",
    clientName: "Amit Sharma",
    phone: "+1 (646) 555-0144",
    email: "amit.sharma@example.com",
    language: "Hindi",
    city: "Edison, NJ, USA",
    venue: "Online E-Puja (Live Video)",
    participants: "2",
    notes: "Rahu Mahadasha affliction remedy.",
    status: "Pending"
  }
];

export const getBookings = () => {
  const data = localStorage.getItem(BOOKINGS_KEY);
  if (!data) {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(initialDemoBookings));
    return initialDemoBookings;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return initialDemoBookings;
  }
};

export const saveBooking = (bookingData) => {
  const current = getBookings();
  const newBooking = {
    id: `PK-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    dateSubmitted: new Date().toISOString().split('T')[0],
    status: 'Pending',
    ...bookingData
  };
  const updated = [newBooking, ...current];
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
  return newBooking;
};

export const updateBookingStatus = (id, newStatus) => {
  const current = getBookings();
  const updated = current.map(b => b.id === id ? { ...b, status: newStatus } : b);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
  return updated;
};
