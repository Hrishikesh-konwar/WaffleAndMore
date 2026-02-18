import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background text-foreground mt-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-2xl mb-4 uppercase tracking-wider text-white">About Us</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Waffles & More - The OG waffle place serving the finest Belgian waffles and premium desserts with authentic recipes and passion.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-white">Locations</h4>
            <div className="space-y-4 text-sm">
              <div>
                {/* <p className="font-semibold text-white mb-1">Bharuch</p> */}
                <p className="opacity-80 mb-1">Owned & Operated by JAY SHAILESHKUMAR MODI</p>
                <p className="opacity-80">Shop No. 2, Nagarpalika Shopping Centre, Civil Road, Bharuch, Gujarat – 392001</p>
                <p className="opacity-80">Phone: +91 94996 78796</p>
              </div>
              {/* <div>
                <p className="font-semibold text-white mb-1">Ankleshwar</p>
                <p className="opacity-80">Orange Heights, Sardar Park, GIDC, Ankleshwar, Gujarat 393002</p>
                <p className="opacity-80">+91 9499678796</p>
              </div> */}
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-white">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://www.facebook.com/share/18RC9HPrGX/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition border-2 border-primary rounded-lg p-2"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/_wafflesandmore_?utm_source=qr&igsh=cGlsdDFrbTZ1MGd5" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition border-2 border-primary rounded-lg p-2"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <a 
              href="https://www.instagram.com/_wafflesandmore_?utm_source=qr&igsh=cGlsdDFrbTZ1MGd5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary italic font-semibold hover:text-primary/80 transition"
            >
              @wafflesandmore
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8"></div>

        {/* Links */}
        <div className="text-center mb-6">
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/terms" className="text-primary hover:text-primary/80 transition">
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/privacy" className="text-primary hover:text-primary/80 transition">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-70">
          <p>© 2025 Waffle & More</p>
          <p className="mt-1">Brand by Urban Grub by JAY SHAILESHKUMAR MODI. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-60">Bharuch & Ankleshwar, Gujarat | +91 9499678796</p>
        </div>
      </div>
    </footer>
  )
}
