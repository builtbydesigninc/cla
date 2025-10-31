'use client'

import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail } from 'lucide-react'
import { ShimmerButton } from './ui/shimmer-button'

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Curriculum', href: '#curriculum' },
      { name: 'Faculty', href: '#faculty' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Guarantee', href: '#guarantee' },
    ],
    legal: [
      { name: 'Terms and Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
  }

  const socials = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ]

  return (
    <footer className="border-t" style={{ backgroundColor: '#0c0a05', borderColor: '#544629' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Logo - Large & Centered */}
        <div className="flex justify-center mb-12">
          <img src="/cla-logo.png" alt="CLA" className="h-24 w-auto" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-12 h-12 flex items-center justify-center border border-[#b38d38]/40 rounded-full text-[#b38d38] hover:bg-[#b38d38] hover:text-[#0c0a05] hover:border-[#b38d38] hover:shadow-lg hover:shadow-[#b38d38]/30 hover:scale-110 transition-all backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(179, 141, 56, 0.15)' }}
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-12">
          <a href="/apply">
            <ShimmerButton>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Us
              </span>
            </ShimmerButton>
          </a>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#544629] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/50">
              © 2025 Clinic Launch Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
