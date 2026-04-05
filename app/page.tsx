import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#C4A77D] text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <Image 
          src="/logo.webp" 
          alt="Nosh Cafe Bar" 
          width={160} 
          height={160}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-8"
          priority
        />
        
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
          Nosh Cafe Bar
        </h1>
        
        <p className="text-lg md:text-xl text-[#3d3d3d] text-center mb-6">
          Independent café in Four Marks, Hampshire
        </p>
        
        <p className="text-xl md:text-2xl italic text-[#2D4A3E] text-center mb-8 max-w-md">
          Decent food, good coffee, everyone welcome.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link 
            href="/menu"
            className="bg-[#2D4A3E] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#1d3a2e] transition-colors text-center"
          >
            View Our Menu
          </Link>
          <Link 
            href="/book"
            className="bg-white/80 text-[#2D4A3E] px-8 py-4 rounded-full text-lg font-medium hover:bg-white transition-colors text-center"
          >
            Book a Table
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
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

      {/* About Matt Section */}
      <section className="py-16 px-6 bg-white/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">A Quick Hello</h2>
          <div className="text-lg text-[#3d3d3d] space-y-4 leading-relaxed">
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
              <p className="mt-6 text-sm text-[#8a9f95]">
                Dogs welcome
              </p>
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
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's On Offer */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-8">What We&apos;re Serving</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Coffee</h3>
              <p className="text-[#3d3d3d]">Freshly roasted, properly made</p>
            </div>
            <div className="bg-white/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Food</h3>
              <p className="text-[#3d3d3d]">Homemade, honest grub — with some South African favourites</p>
            </div>
            <div className="bg-white/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Cakes</h3>
              <p className="text-[#3d3d3d]">Baked fresh, gone by lunchtime</p>
            </div>
          </div>
          
          <Link 
            href="/menu"
            className="inline-block mt-8 text-[#2D4A3E] font-medium underline hover:no-underline"
          >
            See Full Menu
          </Link>
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
