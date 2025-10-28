'use client'

import { ArrowRight, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { ShimmerButton } from './ui/shimmer-button'

export default function MoneyBackGuarantee() {
  return (
    <section id="guarantee" className="py-20 md:py-32 border-y relative overflow-hidden" style={{ backgroundColor: '#0c0a05', borderColor: '#544629' }}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b38d38]/20 rounded-full mb-8 border border-[#b38d38]/30">
            <Shield className="w-8 h-8 text-[#b38d38]" />
          </div>

          {/* Minimal Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl font-light text-white mb-6"
          >
            <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">90-Day</span> Action-Taker&apos;s Guarantee
          </motion.h2>

          {/* Simple Promise */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            We guarantee our system, if you guarantee your effort. If you follow the system for 90 days and don&apos;t see results, we&apos;ll send you a full refund.
          </motion.p>

          {/* CTA - Centered */}
          <div className="flex justify-center">
            <a href="#enroll">
              <ShimmerButton shimmerColor="#b38d38" shimmerDuration="2.5s">
                <span className="flex items-center gap-2">
                  Apply to Join
                  <ArrowRight className="w-5 h-5" />
                </span>
              </ShimmerButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
