'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Header Section with Image */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-secondary-foreground mb-4 text-balance">
                  About Waffles and More
                </h1>
                <p className="text-xl text-secondary-foreground/90 leading-relaxed">
                  A passion-driven chocolate waffle cafe celebrating the Belgian art of waffle making with premium ingredients
                </p>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/cafe-interior.jpg"
                  alt="Waffles and More cafe interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-8 text-balance">Our Chocolate Story</h2>
            <div className="space-y-6 text-foreground leading-relaxed text-lg">
              <p>
                Waffles and More was born from a passion for authentic Belgian waffles and the finest chocolate. We set out to create a unique cafe experience that celebrates the art of waffle making and the indulgence of premium chocolate.
              </p>
              <p>
                What started as a dream has flourished into two beloved community gathering places in Bharuch and Ankleshwar. Each day, hundreds of chocolate lovers visit us seeking that perfect waffle moment, knowing they'll find quality, warmth, and exceptional flavors.
              </p>
              <p>
                Our philosophy is simple: use the finest Belgian chocolate and premium ingredients, treat every customer like family, and never compromise on quality. Every waffle that leaves our kitchen carries our promise of excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-balance">Our Mission & Chocolate Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground">
                  <p className="text-lg leading-relaxed">
                    To serve chocolate-inspired, high-quality waffles that bring pure indulgence and joy to every customer, creating unforgettable moments in a warm, welcoming environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">Our Core Values</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground">
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-center gap-3"><span className="text-primary">🍫</span> Premium Belgian Chocolate</li>
                    <li className="flex items-center gap-3"><span className="text-primary">✨</span> Excellence in Every Waffle</li>
                    <li className="flex items-center gap-3"><span className="text-primary">❤️</span> Customer-First Approach</li>
                    <li className="flex items-center gap-3"><span className="text-primary">👨‍🍳</span> Exceptional Craftsmanship</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary text-center mb-16 text-balance">What Makes Us Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6">🇧🇪</div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">Authentic Belgian Recipe</h3>
                  <p className="text-foreground text-lg leading-relaxed">
                    Traditional waffle recipes combined with our chocolate expertise, passed down and perfected through passion.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6">🍫</div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">Premium Chocolate</h3>
                  <p className="text-foreground text-lg leading-relaxed">
                    Every creation features the finest Belgian chocolate, cocoa, and premium toppings for pure indulgence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6">👨‍🍳</div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">Made with Love</h3>
                  <p className="text-foreground text-lg leading-relaxed">
                    Each waffle is handcrafted with care and dedication, made fresh to order for maximum quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-8 text-balance">
              Our Passionate Team
            </h2>
            <p className="text-lg text-secondary-foreground/90 mb-8 leading-relaxed">
              Behind every delicious chocolate waffle is a dedicated team of passionate individuals committed to delivering excellence. From our skilled waffle chefs to our friendly service staff, everyone at Waffles and More shares an unwavering commitment to making your visit special.
            </p>
            <div className="bg-secondary-foreground/10 p-8 rounded-lg border border-secondary-foreground/20">
              <p className="text-lg text-secondary-foreground leading-relaxed">
                Our team is carefully trained to perfection, combining culinary expertise with genuine hospitality. We take pride in knowing our customers by name, remembering their favorite orders, and creating moments of pure chocolate bliss that keep them coming back.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-secondary mb-6">Ready to Experience Our Chocolate Magic?</h3>
            <p className="text-lg text-foreground mb-8">
              Visit us at either of our beautiful locations to taste the difference quality and passion make.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
