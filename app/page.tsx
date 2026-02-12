'use client'

import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

export default function Page() {
  const [showMore, setShowMore] = useState(false)

  // Dynamically generate image paths from WebsitePhotos folder
  // Adjust the total count based on how many images you have
  const totalImages = 30 // Update this if you add/remove images
  const allSneakPeekItems = Array.from({ length: totalImages }, (_, index) => ({
    id: index + 1,
    src: `/WebsitePhotos/Artboard${index + 1}.jpg`,
    alt: `Waffle creation ${index + 1}`
  }))

  const sneakPeekItems = allSneakPeekItems.slice(0, 12) // Show first 12 initially

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar isHomePage={true} />

      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-end justify-start bg-background overflow-hidden">
        <Image
          src="/waffle-hero.jpg"
          alt="Waffle and coffee showcase"
          fill
          className="object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              For All Your Dessert & Coffee Cravings
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 italic">
              The OG Waffle spot in town!
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base uppercase font-semibold tracking-wide">
                Visit Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Gallery section removed - content moved to Sneak Peek */}
        </div>
      </section>

      {/* Sneak Peek Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-16 uppercase tracking-wider">
            Sneak Peek!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(showMore ? allSneakPeekItems : sneakPeekItems).map((item) => (
              <div key={item.id} className="relative h-96 rounded-lg overflow-hidden shadow-2xl group">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          {!showMore && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowMore(true)}
                className="text-primary hover:text-primary/80 transition font-semibold text-lg flex items-center justify-center gap-2 mx-auto"
              >
                <span>+ Show More</span>
              </button>
            </div>
          )}
          
          {showMore && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowMore(false)}
                className="text-primary hover:text-primary/80 transition font-semibold text-lg flex items-center justify-center gap-2 mx-auto"
              >
                <span>- Show Less</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Order Online Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-4 uppercase tracking-wider">
            Order Online
          </h2>
          <p className="text-lg text-foreground mb-12">
            Freshly baked Crispy Waffles delivered to your doorstep!
          </p>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <Link href="https://zomato.onelink.me/xqzv/o77p2umh" target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full py-4 px-8 border-2 border-white text-white hover:bg-white/10 transition rounded-full font-semibold uppercase tracking-wider text-lg">
                Zomato
              </button>
            </Link>
            <Link href="https://www.swiggy.com/menu/1296932?source=sharing" target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full py-4 px-8 border-2 border-white text-white hover:bg-white/10 transition rounded-full font-semibold uppercase tracking-wider text-lg">
                Swiggy
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-5xl font-bold text-white mb-8 uppercase tracking-wider">
                About Us
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                OG
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                The OG waffle place. Visit us and experience the magic of authentic Belgian waffles crafted with passion and premium ingredients.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-5xl font-bold text-primary mb-8 italic tracking-wider">
                @waffles&more
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/SidePhotos/Happiness.jpeg"
                    alt="Instagram post 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/SidePhotos/Miniwaffle.jpeg"
                    alt="Instagram post 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/SidePhotos/Happiness.jpeg"
                    alt="Instagram post 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/SidePhotos/Miniwaffle.jpeg"
                    alt="Instagram post 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
