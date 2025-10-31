'use client'

import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import GlassSurface from './ui/GlassSurface'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'The System', href: '#curriculum' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Success Stories', href: '#testimonials' },
  ]

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <GlassSurface
          width="100%"
          height={60}
          borderRadius={30}
          backgroundOpacity={0.05}
          blur={12}
          distortionScale={-150}
          opacity={0.9}
          saturation={1.2}
          className="shadow-2xl shadow-[#b38d38]/10"
        >
          <div className="flex items-center justify-between w-full px-6 md:px-8 h-full">
            {/* Logo - Far Left */}
            <div className="flex items-center">
              <img src="/cla-logo.png" alt="CLA" className="h-8 w-auto" />
            </div>

            {/* Navigation - Center (Desktop Only) */}
            <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-light text-white/80 hover:text-[#b38d38] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-[#b38d38] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* CTA Button - Far Right (Desktop Only) */}
            <a
              href="/apply"
              className="hidden md:flex backdrop-blur-md border border-[#544629] rounded-full px-6 py-2 hover:border-[#b38d38] hover:bg-[#b38d38]/10 transition-all items-center gap-2 text-xs font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: 'rgba(84, 70, 41, 0.15)' }}
            >
              Apply Now
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </GlassSurface>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-[#0c0a05]/95 backdrop-blur-lg" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative z-50 flex flex-col items-center justify-center h-screen gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light text-white/80 hover:text-[#b38d38] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 backdrop-blur-md border border-[#544629] rounded-full px-8 py-3 hover:border-[#b38d38] hover:bg-[#b38d38]/10 transition-all flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: 'rgba(84, 70, 41, 0.15)' }}
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
