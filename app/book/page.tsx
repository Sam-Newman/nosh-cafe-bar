import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function Book() {
  // Replace with Nosh's OpenTable Restaurant ID once they have one
  const OPENTABLE_RID = 'RESTAURANT_ID';
  
  return (
    <main className="min-h-screen bg-[#C4A77D] text-[#1a1a1a]">
      {/* Navigation Header */}
      <header className="bg-[#2D4A3E] py-3">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <Image 
              src="/logo.webp" 
              alt="Nosh Cafe Bar" 
              width={40} 
              height={40}
              className="w-10 h-10 rounded-full"
            />
          </Link>
          <nav className="flex items-center gap-8 text-white">
            <Link href="/menu" className="hover:text-[#C4A77D] transition-colors">Menu</Link>
            <Link href="/book" className="text-[#C4A77D]">Book</Link>
            <a href="/#about" className="hover:text-[#C4A77D] transition-colors hidden sm:block">About</a>
            <a href="/#contact" className="hover:text-[#C4A77D] transition-colors hidden sm:block">Contact</a>
          </nav>
        </div>
      </header>

      {/* Page Title */}
      <div className="py-10 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-serif">Book a Table</h1>
        <p className="text-[#3d3d3d] mt-2">Reserve your spot at Nosh</p>
      </div>

      {/* OpenTable Widget */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          {/* OpenTable Booking Widget */}
          <div 
            id="ot-widget-container"
            className="flex justify-center"
          >
            <div 
              className="ot-widget"
              data-rid={OPENTABLE_RID}
              data-type="standard"
              data-theme="wide"
              data-color="2D4A3E"
              data-dark="false"
              data-iframe="true"
              data-lang="en-GB"
            />
          </div>

          {/* Fallback / Setup Message */}
          {OPENTABLE_RID === 'RESTAURANT_ID' && (
            <div className="text-center py-8">
              <p className="text-[#3d3d3d] mb-4">
                Online booking coming soon!
              </p>
              <p className="text-lg mb-6">
                In the meantime, give us a call:
              </p>
              <a 
                href="tel:+441234567890" 
                className="text-2xl font-semibold text-[#2D4A3E] hover:underline"
              >
                01234 567 890
              </a>
              <p className="text-sm text-[#3d3d3d] mt-6">
                Or pop in — we&apos;ll find you a table
              </p>
            </div>
          )}
        </div>

        {/* Walk-ins welcome note */}
        <p className="text-center mt-6 text-[#3d3d3d]">
          Walk-ins always welcome
        </p>

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

      {/* OpenTable Script */}
      <Script 
        src="https://www.opentable.co.uk/widget/reservation/loader?rid={OPENTABLE_RID}&type=standard&theme=wide&color=2D4A3E&dark=false&iframe=true&lang=en-GB"
        strategy="lazyOnload"
      />
    </main>
  );
}
