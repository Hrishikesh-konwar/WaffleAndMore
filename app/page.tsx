"use client";

import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const totalImages = 30;
  const allSneakPeekItems = Array.from({ length: totalImages }, (_, index) => ({
    id: index + 1,
    src: `/WebsitePhotos/Artboard${index + 1}.jpg`,
    alt: `Waffle creation ${index + 1}`,
  }));

  const sneakPeekItems = allSneakPeekItems.slice(0, 12); // Show first 12 initially

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/60 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar isHomePage={true} />

        {/* Hero Section */}
        <section className="relative flex items-end justify-start overflow-hidden min-h-[60vh] md:min-h-[80vh] lg:h-screen">
          {/* Background Image for Hero Section */}
          <Image
            src="/elements.jpeg"
            alt="Waffle hero background"
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
            priority
          />
        </section>

        {/* Sneak Peek Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
                For All Your Dessert & Coffee Cravings
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 italic">
                The OG Waffle spot in town!
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base uppercase font-semibold tracking-wide"
                >
                  Visit Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-white text-center mb-16 uppercase tracking-wider">
              Sneak Peek!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(showMore ? allSneakPeekItems : sneakPeekItems).map((item) => (
                <div
                  key={item.id}
                  className="relative h-96 rounded-lg overflow-hidden shadow-2xl group"
                >
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
                  className="text-white hover:text-white/80 transition font-semibold text-lg flex items-center justify-center gap-2 mx-auto"
                >
                  <span>+ Show More</span>
                </button>
              </div>
            )}

            {showMore && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowMore(false)}
                  className="text-white hover:text-white/80 transition font-semibold text-lg flex items-center justify-center gap-2 mx-auto"
                >
                  <span>- Show Less</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Order Online Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-4 uppercase tracking-wider">
              Order Online
            </h2>
            <p className="text-lg text-white/90 mb-12">
              Freshly baked Crispy Waffles delivered to your doorstep!
            </p>

            <div className="space-y-4 max-w-2xl mx-auto">
              <Link
                href="https://zomato.onelink.me/xqzv/o77p2umh"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full py-4 px-8 border-2 border-white text-white hover:bg-white/10 transition rounded-full font-semibold uppercase tracking-wider text-lg">
                  Zomato
                </button>
              </Link>
              <Link
                href="https://www.swiggy.com/menu/1296932?source=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full py-4 px-8 border-2 border-white text-white hover:bg-white/10 transition rounded-full font-semibold uppercase tracking-wider text-lg">
                  Swiggy
                </button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
