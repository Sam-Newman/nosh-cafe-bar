import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
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
            <Link href="/menu" className="text-[#C4A77D]">Menu</Link>
            <Link href="/book" className="hover:text-[#C4A77D] transition-colors">Book</Link>
            <a href="/#about" className="hover:text-[#C4A77D] transition-colors hidden sm:block">About</a>
            <a href="/#contact" className="hover:text-[#C4A77D] transition-colors hidden sm:block">Contact</a>
          </nav>
        </div>
      </header>

      {/* Page Title */}
      <div className="py-10 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-serif">All Day Menu</h1>
      </div>

      {/* Menu Content */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-10">
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Left Column */}
            <div className="space-y-6">
              <MenuItem 
                name="Street Bakeshop Sourdough Toast" 
                price="4.5"
                description="Preserves / Marmite"
              />
              <MenuItem 
                name="Porridge" 
                price="7.5"
                description="Seasonal Fruit, Freeze Dried Raspberries, Coconut, Granola"
              />
              <MenuItem 
                name="French Toast" 
                price="10"
                description="Bacon & Maple Syrup / Greek Yoghurt & Compote"
              />
              <MenuItem 
                name="Blaady Blar Bacon Roll" 
                price="8"
                description="Chilli Jam"
              />
              <MenuItem 
                name="Eggs on Sourdough" 
                price="9"
              />
              <MenuItem 
                name="Smashed Avocado on Sourdough" 
                price="13"
                description="Sumac Onions, Harissa, Hazelnut Dukkah"
              />
              <MenuItem 
                name="ChalkStream Trout" 
                price="12"
                description="Scrambled Eggs, Watercress, Sourdough"
              />
              <MenuItem 
                name="Eggs Benedict" 
                price="14"
                description="English Muffin, Poached Eggs, Ham, Hollandaise"
              />
              <MenuItem 
                name="Garlic Mushrooms" 
                price="14"
                description="Feta, Tarragon, Sourdough"
              />
              <MenuItem 
                name="The Veggie" 
                price="11/18"
                description="Halloumi, Eggs, Avocado, Mushrooms, Beans, Hash Brown, Tomato, Sourdough"
              />
              <MenuItem 
                name="Farmhuis Brekvis" 
                price="16"
                description="Boerewors Sausage, Fried Eggs, Curry Beans, Hash Brown, Sourdough"
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <MenuItem 
                name="The Full English" 
                price="11/18"
                description="Bacon, Eggs, Sausages, Black Pudding, Tomatoes, Mushrooms, Beans, Hash Brown, Sourdough"
              />
              <MenuItem 
                name="Croque Monsieur" 
                price="11"
                description="Ham, Cheddar, Bechamel Sauce, House Slaw"
              />
              <MenuItem 
                name="Braai Broodjie Toastie" 
                price="11"
                description="Cheddar, Tomato, Onion, Mrs Balls Chutney, House Slaw"
              />
              <MenuItem 
                name="The Reuben" 
                price="13"
                description="Pastrami, Emmental, Sauerkraut, Russian Dressing, Pickle"
              />
              <MenuItem 
                name="The Blaady Blar Fish Finger Roll" 
                price="13"
                description="Tartare Sauce, Gem Lettuce, Fries"
              />
              <MenuItem 
                name="Spinach Falafels" 
                price="15"
                description="Hummus, Sumac Onions, Pickled Carrot, Cucumber, Tahini Sauce, Rose Harissa, Flatbread"
              />
              <MenuItem 
                name="Wors Roll" 
                price="15"
                description="Boerewors Sausage, Mrs Balls Chutney, Grilled Onion, Fries"
              />
              <MenuItem 
                name="Double Cheeseburger" 
                price="18"
                description="Grilled Onion, Little Gem, Burger Sauce, Fries"
              />

              {/* Extras */}
              <div className="pt-6 border-t border-[#2D4A3E]/20">
                <h3 className="font-semibold text-lg mb-3">Extras</h3>
                <p className="text-sm text-[#3d3d3d] leading-relaxed">
                  Egg 1.5 · Bacon 2.5 · Sausage 2 · Mushrooms 2.5 · Boerewors 4 · Hash Brown 3 · ChalkStream Trout 4 · Halloumi 2.5 · Half Avocado 1.5 · Black Pudding 2.5 · Fries 4
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-10 pt-6 border-t border-[#2D4A3E]/20 text-center text-sm text-[#3d3d3d]">
            <p>Please speak to our team about any allergies</p>
            <p className="mt-2">WiFi Password: cafebar2025</p>
          </div>
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

function MenuItem({ name, price, description }: { name: string; price: string; description?: string }) {
  return (
    <div>
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="font-semibold">{name}</h3>
        <span className="text-[#2D4A3E] font-medium whitespace-nowrap">£{price}</span>
      </div>
      {description && (
        <p className="text-sm text-[#3d3d3d] mt-1">{description}</p>
      )}
    </div>
  );
}
