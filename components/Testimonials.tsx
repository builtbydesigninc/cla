'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShimmerButton } from './ui/shimmer-button'

const testimonials = [
  {
    quote: "I tried everything—dropshipping, affiliate marketing, and got nowhere. I was about to give up, but the logic Mark presented just made so much sense. My life is completely different now.",
    name: "Sarah",
    role: "Former Teacher, Texas",
    result: "Now earning $40k/month",
  },
  {
    quote: "The fact that the team closes the deals for me was the game changer. I just focus on making connections. I've onboarded three clinics in three months.",
    name: "Maria",
    role: "Florida",
    result: "On track for $50k this month",
  },
  {
    quote: "I've explored various business models, but nothing compares to the recurring commission potential here. The support and infrastructure CLA provides is unmatched.",
    name: "David",
    role: "Business Owner, California",
    result: "$75k in first 4 months",
  },
  {
    quote: "Even with my background in healthcare, I never thought about the facilitation model. This opened my eyes to a completely new income stream.",
    name: "Jennifer",
    role: "Healthcare Professional",
    result: "5 clinics onboarded",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length)

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 md:py-32 border-y relative overflow-hidden" style={{ backgroundColor: '#0c0a05', borderColor: '#544629' }} id="testimonials">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#b38d38]/20 via-[#7e5a00]/5 to-transparent blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-[#544629]/25 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#544629]/25 via-transparent to-transparent blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-wider text-white/60 font-medium mb-4"
          >
            Success Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white"
          >
            <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Real</span> People, <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Real</span> Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 mt-6 max-w-3xl mx-auto"
          >
            Everyday people with no medical background are building six-figure income streams.
          </motion.p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-3xl mx-auto shadow-dramatic rounded-2xl backdrop-blur-md p-10 lg:p-12 mb-20 border-2 border-[#544629]/50"
              style={{ 
                backgroundColor: 'rgba(84, 70, 41, 0.15)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 40px rgba(179, 141, 56, 0.2)'
              }}
            >
            {/* Golden accent bar */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#b38d38] to-[#7e5a00] rounded-l-2xl shadow-[0_0_15px_rgba(179,141,56,0.6)]" />
            
            {/* Quote number indicator */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#b38d38] to-[#7e5a00] flex items-center justify-center shadow-lg">
              <span className="text-[#0c0a05] font-bold text-lg">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white text-xl md:text-2xl mb-8 leading-relaxed font-light pl-4"
            >
              "{current.quote}"
            </motion.p>

            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 pl-4"
            >
              <cite className="not-italic font-semibold text-white text-lg">
                {current.name}
              </cite>
              <span aria-hidden className="size-1 rounded-full bg-white/30" />
              <span className="text-white/60">{current.role}</span>
            </motion.footer>
            
            {/* Result badge */}
            <div className="mt-6 pl-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#b38d38]/20 to-[#7e5a00]/20 border border-[#b38d38]/30">
                <div className="w-2 h-2 rounded-full bg-[#b38d38] shadow-[0_0_8px_rgba(179,141,56,0.8)]" />
                <span className="text-[#b38d38] font-semibold text-sm">{current.result}</span>
              </div>
            </div>
            </motion.blockquote>
          </AnimatePresence>

          {/* Navigation - Enhanced */}
          <div className="flex items-center gap-4 ml-8">
            <button
              onClick={prev}
              className="backdrop-blur-md rounded-full p-4 transition-all group shadow-lg hover:shadow-[0_0_20px_rgba(179,141,56,0.4)] border-2 border-[#544629]/50 hover:border-[#b38d38]/50"
              style={{ backgroundColor: 'rgba(84, 70, 41, 0.2)' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-[#b38d38] transition-colors" />
            </button>
            
            {/* Pagination dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all ${
                    idx === currentIndex 
                      ? 'w-8 h-2 bg-gradient-to-r from-[#b38d38] to-[#7e5a00] shadow-[0_0_8px_rgba(179,141,56,0.8)]' 
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  } rounded-full`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="backdrop-blur-md rounded-full p-4 transition-all group shadow-lg hover:shadow-[0_0_20px_rgba(179,141,56,0.4)] border-2 border-[#544629]/50 hover:border-[#b38d38]/50"
              style={{ backgroundColor: 'rgba(84, 70, 41, 0.2)' }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-[#b38d38] transition-colors" />
            </button>
          </div>
        </div>

        {/* CTA - Centered After Section */}
        <div className="flex justify-center mt-16">
          <a href="#enroll">
            <ShimmerButton
              shimmerColor="#b38d38"
              shimmerDuration="2.5s"
            >
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
