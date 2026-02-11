'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-bold text-2xl text-primary uppercase tracking-tight">
              Waffle & More
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center">
            <Link href="/" className="text-foreground hover:text-primary transition font-semibold text-sm uppercase tracking-wide">
              Home
            </Link>
            <Link href="/menu" className="text-foreground hover:text-primary transition font-semibold text-sm uppercase tracking-wide">
              Menu
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition font-semibold text-sm uppercase tracking-wide">
              Visit Us
            </Link>
            <Link href="/franchise" className="text-foreground hover:text-primary transition font-semibold text-sm uppercase tracking-wide">
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
              <X className="w-6 h-6 text-secondary" />
            ) : (
              <Menu className="w-6 h-6 text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block text-foreground hover:text-primary transition px-2 py-2 uppercase text-sm"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block text-foreground hover:text-primary transition px-2 py-2 uppercase text-sm"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-primary transition px-2 py-2 uppercase text-sm"
              onClick={() => setIsOpen(false)}
            >
              Visit Us
            </Link>
            <Link
              href="/franchise"
              className="block text-foreground hover:text-primary transition px-2 py-2 uppercase text-sm"
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
