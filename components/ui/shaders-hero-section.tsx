"use client"

import { motion } from "framer-motion"
import type React from "react"
import { ArrowRight } from "lucide-react"
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
    <main className="relative z-20 flex items-center justify-center min-h-screen px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
        className="text-center max-w-3xl"
      >
        {/* Kickass Heading - Always 2 Lines */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-8 leading-tight"
        >
          Turn <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Connections</span> into <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Cash-Flowing</span> Income Streams
        </motion.h1>

        {/* Subtle Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3 }}
          className="text-lg md:text-xl font-light text-white/60 mb-10"
        >
          The facilitation economy for elite entrepreneurs
        </motion.p>

        {/* CTA - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.2 }}
          className="flex justify-center"
        >
          <a href="#vsl">
            <ShimmerButton
              shimmerColor="#b38d38"
              shimmerDuration="2.5s"
              className="text-sm"
            >
              <span className="flex items-center gap-2">
                Discover How
                <ArrowRight className="w-4 h-4" />
              </span>
            </ShimmerButton>
          </a>
        </motion.div>
      </motion.div>
    </main>
  )
}
