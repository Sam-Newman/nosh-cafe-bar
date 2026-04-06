'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-up').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#C4A77D] text-[#1a1a1a]">
      {/* Hero Section with Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/hero.jpg" 
            alt="Nosh Cafe Bar interior" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#C4A77D]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <Image 
            src="/logo.webp" 
            alt="Nosh Cafe Bar" 
            width={180} 
            height={180}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto mb-8 shadow-2xl animate-fade-in"
            priority
          />
          
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 animate-fade-in-delay-1">
            Nosh Cafe Bar
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-delay-2">
            Independent café in Four Marks, Hampshire
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <Link 
              href="/menu"
              className="bg-[#2D4A3E] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#1d3a2e] transition-all hover:scale-105"
            >
              View Our Menu
            </Link>
            <Link 
              href="/book"
              className="bg-white/90 text-[#2D4A3E] px-8 py-4 rounded-full text-lg font-medium hover:bg-white transition-all hover:scale-105"
            >
              Book a Table
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-20 px-6 text-center">
        <p className="fade-up text-2xl md:text-4xl italic text-[#2D4A3E] max-w-2xl mx-auto leading-relaxed">
          &ldquo;Great coffee, fresh food, and a warm welcome.&rdquo;
        </p>
      </section>

      {/* About Matt Section */}
      <section className="py-16 px-6 bg-white/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="fade-up text-3xl font-serif mb-8">A Quick Hello</h2>
          <div className="fade-up text-lg text-[#3d3d3d] space-y-4 leading-relaxed">
            <p>
              I&apos;m Matt. I&apos;ve loved living in Medstead, and now having the chance to serve you lot is absolutely brilliant.
            </p>
            <p>
              Still finding my feet with all this café-owning stuff — it&apos;s been a steep learning curve. But my goal is simple: build a place I&apos;d actually want to visit. Decent food, good drinks, and everyone feels welcome.
            </p>
            <p className="italic text-[#2D4A3E]">
              My South African roots mean I&apos;ll be cooking outside on a braai sooner or later, beer in hand.
            </p>
            <p>
              Looking forward to welcoming you (and your dogs) to Nosh.
            </p>
            <p className="font-semibold mt-6">— Matt</p>
          </div>
        </div>
      </section>

      {/* What's On Offer */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="fade-up text-3xl font-serif mb-12">What We&apos;re Serving</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="fade-up bg-white/40 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/60 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">Coffee</h3>
              <p className="text-[#3d3d3d]">Freshly roasted, properly made</p>
            </div>
            <div className="fade-up bg-white/40 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/60 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">Food</h3>
              <p className="text-[#3d3d3d]">Homemade, honest grub — with some South African favourites</p>
            </div>
            <div className="fade-up bg-white/40 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/60 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">Cakes</h3>
              <p className="text-[#3d3d3d]">Baked fresh, gone by lunchtime</p>
            </div>
          </div>
          
          <Link 
            href="/menu"
            className="fade-up inline-block mt-12 text-[#2D4A3E] font-medium text-lg hover:underline"
          >
            See Full Menu →
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-[#2D4A3E] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Opening Hours */}
            <div className="fade-up">
              <h3 className="text-2xl font-serif mb-6">Opening Hours</h3>
              <div className="space-y-3 text-[#C4A77D]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:30am - 4:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00am - 4:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:00am - 3:00pm</span>
                </div>
              </div>
              <p className="mt-6 text-[#8a9f95]">
                Dogs welcome
              </p>
            </div>

            {/* Location */}
            <div className="fade-up">
              <h3 className="text-2xl font-serif mb-6">Find Us</h3>
              <address className="text-[#C4A77D] not-italic space-y-1">
                <p>24 Lymington Bottom Road</p>
                <p>Medstead, Alton</p>
                <p>Hampshire GU34 5EW</p>
              </address>
              <a 
                href="https://maps.google.com/?q=24+Lymington+Bottom+Rd,+Medstead,+Alton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-white hover:text-[#C4A77D] transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-6 text-center">
        <h3 className="fade-up text-xl font-serif mb-6">Follow Along</h3>
        <div className="fade-up flex justify-center gap-6">
          <a 
            href="https://facebook.com/noshcafebar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#2D4A3E] flex items-center justify-center text-white hover:bg-[#1d3a2e] transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a 
            href="https://instagram.com/nosh_cafe_bar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#2D4A3E] flex items-center justify-center text-white hover:bg-[#1d3a2e] transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
          </a>
          <a 
            href="https://tripadvisor.com/noshcafebar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#2D4A3E] flex items-center justify-center text-white hover:bg-[#1d3a2e] transition-all hover:scale-110"
            aria-label="TripAdvisor"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="6.5" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="6.5" cy="12" r="1" fill="currentColor"/>
              <circle cx="17.5" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="17.5" cy="12" r="1" fill="currentColor"/>
              <path d="M12 6c-4 0-8 2-10 6 2-2 5-3 10-3s8 1 10 3c-2-4-6-6-10-6z" fill="currentColor"/>
            </svg>
          </a>
        </div>
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
