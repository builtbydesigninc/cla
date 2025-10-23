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
    <section className="py-20 md:py-32 border-y" style={{ backgroundColor: '#0c0a05', borderColor: '#544629' }} id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="relative max-w-3xl mx-auto pl-8 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full before:bg-[#b38d38] backdrop-blur-md p-10 lg:p-12 mb-20"
              style={{ backgroundColor: 'rgba(84, 70, 41, 0.05)' }}
            >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white text-xl md:text-2xl mb-8 leading-relaxed font-light"
            >
              {current.quote}
            </motion.p>

            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <cite className="not-italic font-semibold text-white text-lg">
                {current.name}
              </cite>
              <span aria-hidden className="size-1 rounded-full bg-white/30" />
              <span className="text-white/60">{current.role}</span>
            </motion.footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Navigation - Bottom Left */}
          <div className="flex gap-3 ml-8">
            <button
              onClick={prev}
              className="backdrop-blur-md rounded-full p-3 hover:bg-[#b38d38]/10 transition-all group"
              style={{ backgroundColor: 'rgba(84, 70, 41, 0.15)' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-[#b38d38]" />
            </button>
            <button
              onClick={next}
              className="backdrop-blur-md rounded-full p-3 hover:bg-[#b38d38]/10 transition-all group"
              style={{ backgroundColor: 'rgba(84, 70, 41, 0.15)' }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-[#b38d38]" />
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
