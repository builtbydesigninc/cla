"use client"

import { motion } from "framer-motion"
import type React from "react"
import { ArrowRight } from "lucide-react"
import Script from "next/script"
import { ShimmerButton } from "./shimmer-button"
import { AuroraBackground } from "./aurora-background"


interface ShaderBackgroundProps {
  children: React.ReactNode
}

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  return (
    <AuroraBackground className="min-h-screen w-full" style={{ backgroundColor: '#0c0a05' }}>
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
      {children}
    </AuroraBackground>
  )
}

export function HeroContent() {
  return (
    <>
      {/* Wistia Scripts */}
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script src="https://fast.wistia.com/embed/nciwamm8h9.js" strategy="lazyOnload" type="module" />
      
      <main className="relative z-20 flex items-center justify-center min-h-screen px-8 pt-32 md:pt-40 pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-center max-w-5xl"
        >
        {/* Kickass Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8 md:mb-12 leading-tight"
        >
          Your <span className="text-[#b38d38]">Turnkey Peptide Empire</span> Opportunity
        </motion.h1>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative rounded-2xl overflow-hidden backdrop-blur-sm border-2 border-[#544629] shadow-2xl shadow-[#b38d38]/20 mb-6 md:mb-8 max-w-4xl mx-auto"
          style={{ backgroundColor: 'rgba(84, 70, 41, 0.1)' }}
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                wistia-player[media-id='nciwamm8h9']:not(:defined) { 
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/nciwamm8h9/swatch'); 
                  display: block; 
                  filter: blur(5px); 
                  padding-top: 56.25%; 
                }
              </style>
              <wistia-player media-id="nciwamm8h9" aspect="1.7777777777777777"></wistia-player>
            `
          }}
        />

        {/* Subtle Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-lg md:text-xl font-light text-white/60 mb-10"
        >
          The Biggest Opportunity Since Online Advertising, Dropshipping, & Crypto
        </motion.p>

        {/* CTA - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex justify-center"
        >
          <a href="/apply">
            <ShimmerButton>
              <span className="flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </span>
            </ShimmerButton>
          </a>
        </motion.div>
      </motion.div>
    </main>
    </>
  )
}
