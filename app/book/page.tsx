'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Book() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Send to Formspree (free form backend)
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please call us to book.');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#C4A77D] text-[#1a1a1a]">
      {/* Header */}
      <header className="py-8 px-6 text-center">
        <Link href="/" className="inline-block">
          <Image 
            src="/logo.jpg" 
            alt="Nosh Cafe Bar" 
            width={80} 
            height={80}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
        </Link>
        <h1 className="text-3xl md:text-4xl font-serif">Book a Table</h1>
      </header>

      {/* Booking Form */}
      <section className="max-w-md mx-auto px-6 pb-16">
        {submitted ? (
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Thanks!</h2>
            <p className="text-[#3d3d3d] mb-6">
              We&apos;ve received your booking request. We&apos;ll get back to you shortly to confirm.
            </p>
            <Link 
              href="/"
              className="text-[#2D4A3E] font-medium underline hover:no-underline"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#2D4A3E]/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#2D4A3E]/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#2D4A3E]/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#2D4A3E]/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">Time</label>
                <select
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#2D4A3E]/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]"
                >
                  <option value="">Select</option>
                  <option value="08:30">8:30am</option>
                  <option value="09:00">9:00am</option>
                  <option value="09:30">9:30am</option>
                  <option value="10:00">10:00am</option>
                  <option value="10:30">10:30am</option>
                  <option value="11:00">11:00am</option>
                  <option value="11:30">11:30am</option>
                  <option value="12:00">12:00pm</option>
                  <option value="12:30">12:30pm</option>
                  <option value="13:00">1:00pm</option>
                  <option value="13:30">1:30pm</option>
                  <option value="14:00">2:00pm</option>
                  <option value="14:30">2:30pm</option>
                  <option value="15:00">3:00pm</option>
                  <option value="15:30">3:30pm</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium mb-2">Number of Guests</label>
              <select
                id="guests"
                name="guests"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#2D4A3E]/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]"
              >
                <option value="">Select</option>
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
                <option value="7+">7+ people</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-2">Special Requests (optional)</label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Allergies, high chair needed, etc."
                className="w-full px-4 py-3 rounded-lg border border-[#2D4A3E]/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2D4A3E] text-white py-4 rounded-full font-medium hover:bg-[#1d3a2e] transition-colors disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Request Booking'}
            </button>

            <p className="text-sm text-center text-[#3d3d3d]">
              We&apos;ll confirm your booking by email or phone
            </p>
          </form>
        )}

        {/* Back Link */}
        {!submitted && (
          <div className="text-center mt-8">
            <Link 
              href="/" 
              className="text-[#2D4A3E] hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-[#2D4A3E] text-white py-8 px-6 text-center">
        <p className="text-[#C4A77D]">
          © {new Date().getFullYear()} Nosh Cafe Bar
        </p>
        <p className="text-sm mt-2 text-[#8a9f95]">
          24 Lymington Bottom Road, Medstead, Alton, Hampshire
        </p>
      </footer>
    </main>
  );
}
