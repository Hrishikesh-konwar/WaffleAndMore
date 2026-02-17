'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function FranchisePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 relative">
      
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/60 z-[1]"></div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 text-balance uppercase tracking-wide">
              Franchise Opportunity
            </h2>
            <p className="text-lg text-gray-300">
              Join us in bringing premium Belgian waffles to more cities.
            </p>
            <p className="text-lg text-white font-semibold">
              Be part of the Waffles & More family.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 uppercase tracking-wider">
            Why Franchise with Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Proven Business Model', desc: 'Established brand with successful locations across Gujarat' },
              { title: 'Comprehensive Support', desc: 'Training, marketing, and operational support from day one' },
              { title: 'Premium Products', desc: 'Access to our exclusive recipes and premium ingredients' },
              { title: 'Growing Market', desc: 'Tap into the rapidly growing dessert & waffle market' },
              { title: 'Strong Brand', desc: 'Recognized brand with loyal customer base' },
              { title: 'Low Investment', desc: 'Affordable franchise investment with good ROI potential' },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-700 bg-gray-800 rounded-lg p-8 hover:border-primary/50 transition">
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary border-t border-gray-800 -mx-4 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-wider">
              Ready to Grow with Us?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get in touch with our franchise team to discuss opportunities in your area.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold uppercase tracking-wide">
                Contact for Franchise Details
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
      </div>
    </div>
  )
}
