'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FranchisePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 uppercase tracking-wider">
            Franchise Opportunity
          </h1>
          <p className="text-xl text-foreground max-w-3xl">
            Join us in bringing premium Belgian waffles to more cities. Be part of the Waffle & More family.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
              <div key={idx} className="border border-primary rounded-lg p-8 hover:bg-primary/5 transition">
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6 uppercase tracking-wider">
            Ready to Grow with Us?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get in touch with our franchise team to discuss opportunities in your area.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-semibold uppercase tracking-wide">
              Contact for Franchise Details
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
