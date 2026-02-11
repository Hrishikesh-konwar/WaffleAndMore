'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Waffle & More Logo" 
              width={200} 
              height={80}
              className="h-16 w-auto mix-blend-screen"
              style={{ filter: 'brightness(1.2)' }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center">
            <Link href="/" className="text-white hover:text-primary transition font-semibold text-sm uppercase tracking-wide">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-primary transition font-semibold text-sm uppercase tracking-wide">
              Menu
            </Link>
            <Link href="/contact" className="text-white hover:text-primary transition font-semibold text-sm uppercase tracking-wide">
              Visit Us
            </Link>
            <Link href="/franchise" className="text-white hover:text-primary transition font-semibold text-sm uppercase tracking-wide">
              Franchise
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 bg-black/80 backdrop-blur-sm rounded-lg p-4 mt-2">
            <Link
              href="/"
              className="block text-white hover:text-primary transition px-2 py-2 uppercase text-sm"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block text-white hover:text-primary transition px-2 py-2 uppercase text-sm"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-primary transition px-2 py-2 uppercase text-sm"
              onClick={() => setIsOpen(false)}
            >
              Visit Us
            </Link>
            <Link
              href="/franchise"
              className="block text-white hover:text-primary transition px-2 py-2 uppercase text-sm"
              onClick={() => setIsOpen(false)}
            >
              Franchise
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
