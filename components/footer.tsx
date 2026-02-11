import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background text-foreground mt-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-2xl mb-4 uppercase tracking-wider text-white">About Us</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Waffle & More - The OG waffle place serving the finest Belgian waffles and premium desserts with authentic recipes and passion.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-white">Locations</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white mb-1">Bharuch</p>
                <p className="opacity-80">Nagarpalika Shopping Centre, Civil Hospital Road, Bharuch, Gujarat 392001</p>
                <p className="opacity-80">+91 9499678796</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Ankleshwar</p>
                <p className="opacity-80">Orange Heights, Sardar Park, GIDC, Ankleshwar, Gujarat 393002</p>
                <p className="opacity-80">+91 9499678796</p>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-white">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-primary hover:text-primary/80 transition text-2xl">
                f
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition text-2xl">
                ⓘ
              </a>
            </div>
            <p className="text-primary italic font-semibold">@wafflesandmore</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-70">
          <p>© 2025 Waffle & More. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-60">Bharuch & Ankleshwar, Gujarat | +91 9499678796</p>
        </div>
      </div>
    </footer>
  )
}
