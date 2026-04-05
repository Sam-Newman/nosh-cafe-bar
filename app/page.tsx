import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#C4A77D] text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#2D4A3E] flex items-center justify-center mb-8">
          <div className="text-center text-white">
            <span className="text-3xl md:text-4xl font-serif italic">Nosh</span>
            <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase mt-1">Café & Bar</div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
          Nosh Cafe Bar
        </h1>
        
        <p className="text-lg md:text-xl text-[#3d3d3d] text-center mb-6">
          Independent café in Four Marks, Hampshire
        </p>
        
        <p className="text-xl md:text-2xl italic text-[#2D4A3E] text-center mb-8 max-w-md">
          Great coffee, fresh food, and a warm welcome.
        </p>

        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-lg text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            We&apos;ve been busy - come and see the changes!
          </h2>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          <a 
            href="https://facebook.com/noshcafebar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#2D4A3E] flex items-center justify-center text-white hover:bg-[#1d3a2e] transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a 
            href="https://instagram.com/noshcafebar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#2D4A3E] flex items-center justify-center text-white hover:bg-[#1d3a2e] transition-colors"
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
            className="w-12 h-12 rounded-full bg-[#2D4A3E] flex items-center justify-center text-white hover:bg-[#1d3a2e] transition-colors"
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

      {/* Info Section */}
      <section className="bg-[#2D4A3E] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Opening Hours */}
            <div>
              <h3 className="text-2xl font-serif mb-6">Opening Hours</h3>
              <div className="space-y-2 text-[#C4A77D]">
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
            </div>

            {/* Location */}
            <div>
              <h3 className="text-2xl font-serif mb-6">Find Us</h3>
              <address className="text-[#C4A77D] not-italic">
                <p>24 Lymington Bottom Road</p>
                <p>Medstead, Alton</p>
                <p>Hampshire GU34 5EW</p>
              </address>
              <a 
                href="https://maps.google.com/?q=24+Lymington+Bottom+Rd,+Medstead,+Alton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-white underline hover:text-[#C4A77D] transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-8">What We Offer</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white/30 rounded-xl p-6">
              <span className="text-4xl mb-4 block">☕</span>
              <h3 className="text-xl font-semibold mb-2">Coffee</h3>
              <p className="text-[#3d3d3d]">Freshly roasted beans, expertly crafted</p>
            </div>
            <div className="bg-white/30 rounded-xl p-6">
              <span className="text-4xl mb-4 block">🥪</span>
              <h3 className="text-xl font-semibold mb-2">Fresh Food</h3>
              <p className="text-[#3d3d3d]">Homemade sandwiches, salads & hot dishes</p>
            </div>
            <div className="bg-white/30 rounded-xl p-6">
              <span className="text-4xl mb-4 block">🍰</span>
              <h3 className="text-xl font-semibold mb-2">Cakes & Treats</h3>
              <p className="text-[#3d3d3d]">Delicious homemade cakes daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D4A3E] text-white py-8 px-6 text-center">
        <p className="text-[#C4A77D]">
          © {new Date().getFullYear()} Nosh Cafe Bar. All rights reserved.
        </p>
        <p className="text-sm mt-2 text-[#8a9f95]">
          24 Lymington Bottom Road, Medstead, Alton, Hampshire
        </p>
      </footer>
    </main>
  );
}
