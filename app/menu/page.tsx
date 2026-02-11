'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function MenuPage() {
  const menuItems = [
    { name: 'Classic Belgian Waffle', desc: 'Crispy on the outside, fluffy inside', price: '₹180' },
    { name: 'Chocolate Bliss', desc: 'Topped with premium Belgian chocolate sauce', price: '₹220' },
    { name: 'Strawberry Delight', desc: 'Fresh strawberries with whipped cream', price: '₹240' },
    { name: 'Nutella Dream', desc: 'Nutella spread with hazelnut toppings', price: '₹250' },
    { name: 'Caramel Paradise', desc: 'Salted caramel drizzle and sea salt', price: '₹230' },
    { name: 'Oreo Crunch', desc: 'Crushed Oreos with cream cheese', price: '₹260' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 uppercase tracking-wider">
            Our Menu
          </h1>
          <p className="text-lg text-foreground">
            Discover our delicious selection of premium waffles and desserts
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-6 hover:border-primary transition">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-foreground/80 mb-4">{item.desc}</p>
                <p className="text-primary font-bold text-lg">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
