'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ShimmerButton } from './ui/shimmer-button'
import { UrgencyBadge } from './ui/urgency-badge'

export default function ApplicationOnly() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden border-t" style={{ backgroundColor: '#0c0a05', borderColor: '#544629' }} id="enroll">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a05] via-[#544629]/20 to-[#0c0a05]" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* CLA Logo */}
          <div className="mb-12 flex justify-center">
            <img src="/cla-logo.png" alt="CLA" className="h-20 w-auto opacity-80" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-12 leading-tight"
          >
            ACCESS IS <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">STRICTLY</span><br />
            APPLICATION <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">ONLY.</span>
          </motion.h2>

          {/* CTA - Centered */}
          <div className="flex justify-center">
            <a href="/apply">
              <ShimmerButton>
                <span className="flex items-center gap-2">
                  APPLY NOW
                  <ArrowRight className="w-4 h-4" />
                </span>
              </ShimmerButton>
            </a>
          </div>

          {/* Urgency Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <UrgencyBadge variant="compact" spotsFilled={87} totalSpots={100} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
