'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, ArrowRight } from 'lucide-react'
import { ShimmerButton } from './ui/shimmer-button'

export default function VSLSection() {
  return (
    <section className="py-20 md:py-32 border-t" style={{ backgroundColor: '#0c0a05', borderColor: '#544629' }} id="vsl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Impactful One-Liner */}
        <div className="text-center mb-12 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4"
          >
            The <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">System</span>
          </motion.h2>
        </div>

        {/* Video Placeholder - Animated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden backdrop-blur-sm border border-[#544629] shadow-2xl shadow-[#b38d38]/10 mb-8"
          style={{ backgroundColor: 'rgba(84, 70, 41, 0.05)' }}
        />

        {/* Content Below Video - Animated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-lg text-white/70">
            The real insiders use a simple "connector" model to earn <span className="text-[#b38d38] font-semibold">recurring commissions on autopilot</span>.
          </p>
        </motion.div>

        {/* CTA - Centered After Section */}
        <div className="flex justify-center mt-16">
          <a href="#enroll">
            <ShimmerButton shimmerColor="#b38d38" shimmerDuration="2.5s">
              <span className="flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </span>
            </ShimmerButton>
          </a>
        </div>
      </div>
    </section>
  )
}

