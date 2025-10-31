'use client'

import { X, Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import { ShimmerButton } from './ui/shimmer-button'

const comparisons = [
  { traditional: 'Low commissions ($10-50 per sale)', connector: 'High-ticket commissions per clinic' },
  { traditional: 'One-time payments', connector: 'Recurring monthly commissions' },
  { traditional: 'High startup costs ($5k-50k)', connector: 'Minimal investment required' },
  { traditional: 'Constant chasing for sales', connector: 'Warm, interested leads provided' },
  { traditional: 'You do all the selling', connector: 'Elite team closes deals for you' },
  { traditional: 'No infrastructure or support', connector: 'Complete supply chain included' },
  { traditional: 'Complex fulfillment', connector: 'Plug & play logistics network' },
]

export default function Comparison() {
  return (
    <div className="py-20 md:py-32" style={{ backgroundColor: '#0c0a05' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-wider text-white/60 font-light mb-4"
          >
            THE DIFFERENCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6"
          >
            Traditional Models vs The <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Connector Model</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Most people get lured into models that are the opposite of beginner-friendly. Here&apos;s why the connector model is different.
          </motion.p>
        </div>

        {/* Comparison Cards - 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-9 mb-20">
          {/* Traditional Models - Fully Transparent */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm border border-[#544629]/40 rounded-2xl p-10"
          >
            <h3 className="text-3xl font-light text-white pb-6 mb-6 border-b border-[#544629]/40">
              Traditional Models
            </h3>
            <p className="text-white/50 mb-6 text-sm">
              Dropshipping, Affiliate Marketing, Info Products
            </p>
            <div className="space-y-0">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 py-4 border-b border-[#544629]/20 last:border-b-0"
                >
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-white/70 font-light">{item.traditional}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The Connector Model - Dark Gold Tint */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm border border-[#b38d38]/30 rounded-2xl p-10"
            style={{ backgroundColor: 'rgba(84, 70, 41, 0.15)' }}
          >
            <h3 className="text-3xl font-light text-white pb-6 mb-6 border-b border-[#b38d38]/30">
              The Connector Model
            </h3>
            <p className="text-white/70 mb-6 text-sm font-semibold">
              Clinic Launch Academy System
            </p>
            <div className="space-y-0 mb-6">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 py-4 border-b border-[#544629]/30 last:border-b-0"
                >
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-white font-light">{item.connector}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA - Centered After Comparison */}
        <div className="flex justify-center">
          <a href="/apply">
            <ShimmerButton>
              <span className="flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </span>
            </ShimmerButton>
          </a>
        </div>

        {/* What's Included Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-white/60 font-light mb-4">
              WHAT&apos;S INCLUDED
            </p>
            <h3 className="text-4xl md:text-5xl font-light text-white mb-6">
              All Your Resources in <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">One Place</span>
            </h3>
          </div>

          <FeaturesSectionWithHoverEffects />

          {/* CTA - Centered After Resources */}
          <div className="flex justify-center mt-16">
            <a href="/apply">
              <ShimmerButton>
                <span className="flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </span>
              </ShimmerButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
