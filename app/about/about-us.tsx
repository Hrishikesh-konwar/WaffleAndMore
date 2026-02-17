'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function AboutUs() {
  const brandElements = [
    {
      title: '',
      description:
        'Every waffle we serve is a small conversation, a moment of pause, a gesture of warmth from our hands to yours. It is our heart-to-heart promise.',
      icon: '',
    },
    {
      title: '',
      description:
        'This symbol represents our journey of building something global in thought, yet deeply local in soul. The flask stands for creation. Experimentation. Evolution.',
      icon: '',
    },
    {
      title: '',
      description:
        'Its grid holds endless possibilities, just like the flavours we craft. The waffle is not just what we serve. It is what brings everything together.',
      icon: '',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative">
      
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/60 z-[1]"></div>
      
      {/* Content */}
      <div className="relative z-10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-transparent text-white py-20 px-4 border-b border-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Brand Language Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 text-balance uppercase tracking-wide">
              Our Brand Language
            </h2>
            <p className="text-lg text-gray-300">
              At Waffles & More, every symbol we use carries meaning.
            </p>
            <p className="text-lg text-white font-semibold">
              Our identity is not decorative — it is intentional.
            </p>
          </div>

          {/* Brand Elements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandElements.map((element, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-700 hover:border-primary/50"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors"></div>

                <div className="relative z-10">
                  <div className="text-6xl mb-4 filter">{element.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {element.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {element.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Timeline */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-primary mb-2 uppercase tracking-wide">
                  Our Story Travels
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-emerald-500 rounded-full"></div>
              </div>

              {/* Timeline Items */}
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Belgian Inspiration', desc: 'Inspired by Belgian craftsmanship and waffle traditions' },
                  { step: '02', title: 'Local Roots', desc: 'Rooted deep in Bharuch\'s heart and community' },
                  { step: '03', title: 'Thoughtful Creation', desc: 'Thoughtfully made with intention and care' },
                  { step: '04', title: 'Freshly Served', desc: 'Freshly served with every order' },
                  { step: '05', title: 'Deeply Felt', desc: 'Deeply felt in every bite and interaction' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Mission Statement */}
            <div className="relative h-full">
              <div className="sticky top-8 bg-gradient-to-br from-primary to-emerald-700 rounded-3xl p-10 text-white shadow-2xl border border-primary">
                <div className="absolute top-0 right-0 text-8xl opacity-10 font-black">✕</div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-6">Why We Exist</h3>
                  <p className="text-emerald-50 leading-relaxed text-lg mb-6">
                    We believe that food is more than sustenance—it's a conversation between hands and hearts.
                  </p>
                  <p className="text-emerald-50 leading-relaxed text-lg mb-6">
                    Every waffle we craft is an experiment in joy, a moment of pause in a busy world, and a gesture of warmth from our kitchen to your table.
                  </p>
                  <p className="text-emerald-100 italic">
                    We don't just serve waffles. We create memories, one bite at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 rounded-3xl bg-gray-800/50 px-8 md:px-12 border border-gray-700">
          <h2 className="text-4xl font-black text-primary mb-12 text-center uppercase tracking-wide">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Quality', desc: 'Belgian-inspired craftsmanship in every bite' },
              { title: 'Authenticity', desc: 'Local flavors with global appeal' },
              { title: 'Innovation', desc: 'Experimenting with new flavors and experiences' },
              { title: 'Connection', desc: 'Building warmth through every interaction' },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-black text-primary mb-6 uppercase tracking-wide">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit us today and taste why Waffles & More is more than just a cafe—it's a destination.
          </p>
          <Link href="/contact">
            <button className="bg-primary hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg uppercase tracking-wide">
              Visit Us Today
            </button>
          </Link>
        </section>
      </div>

      <Footer />
      </div>
    </div>
  );
}
