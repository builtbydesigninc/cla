'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShimmerButton } from './ui/shimmer-button'

const phases = [
  {
    id: 1,
    title: 'CEO Mindset & Discipline Protocol',
    description: 'Before you can earn like a top 1%er, you have to think like one. Rewire your mindset for wealth and success.',
    topics: [
      'Rewiring your mindset for wealth and success',
      '75 Hard Facilitator Mode discipline system',
      'Eliminating self-doubt and limiting beliefs',
      'Building unstoppable daily habits',
      'The psychology of high-income earners',
    ],
  },
  {
    id: 2,
    title: 'Trusted Facilitator Positioning System',
    description: 'Build an irresistible professional brand that positions you as a leading authority in healthcare facilitation.',
    topics: [
      'Creating your authority positioning',
      'LinkedIn and social media mastery',
      'Building trust with medical professionals',
      'Personal branding for B2B sales',
      'Attracting high-value partners vs chasing them',
    ],
  },
  {
    id: 3,
    title: 'Clinic Magnet Paid Ads Engine',
    description: 'Build a predictable, scalable client acquisition machine using paid advertising.',
    topics: [
      'Facebook Ads for clinic targeting',
      'Google Ads strategy for medical practices',
      'YouTube Ads funnel optimization',
      'Ad creative that converts decision-makers',
      'Scaling profitable campaigns',
    ],
  },
  {
    id: 4,
    title: 'Sales & Closing Mastery',
    description: 'Learn the art and science of high-value B2B sales from the ground up.',
    topics: [
      'The psychology of connection',
      'Navigating any conversation with confidence',
      'Handling objections with ease',
      'Guiding clinics to a "Yes"',
      'High-ticket closing techniques',
      'A skill that will pay you for life',
    ],
  },
  {
    id: 5,
    title: 'The Connector\'s Playbook',
    description: 'Your complete step-by-step guide to connecting clinics with peptide suppliers and earning recurring commissions.',
    topics: [
      'Finding qualified clinic prospects',
      'Initial outreach and positioning',
      'Qualifying decision-makers',
      'Introduction and handoff process',
      'Following up for maximum conversions',
      'Building long-term relationships',
    ],
  },
  {
    id: 6,
    title: 'Plug & Play Logistics Network',
    description: 'Immediate access to our exclusive multi-million dollar supply chain and fulfillment partners.',
    topics: [
      'Vetted network of peptide suppliers',
      'Licensed pharmacy partnerships',
      'Pre-negotiated off-market pricing',
      'Quality control and compliance',
      'White-glove fulfillment process',
    ],
  },
  {
    id: 7,
    title: 'Elite Operator Protocol',
    description: 'Advanced strategies for scaling to $100k+ per month and building a sustainable business empire.',
    topics: [
      'Scaling your connector business',
      'Building a team of connectors',
      'Automation and systems',
      'Multiple revenue streams',
      'Long-term wealth building strategies',
    ],
  },
]

export default function CourseModules() {
  const [openModule, setOpenModule] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: '#0c0a05' }} id="curriculum">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-wider text-white/80 font-light mb-4"
          >
            COMPLETE SYSTEM
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-white mb-6"
          >
            The <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">7-Phase</span> Clinic Launch Academy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
          >
            A complete turnkey system built to help you win fast. Everything you need to build a six or seven-figure peptide facilitation business.
          </motion.p>
        </div>

        {/* Phases List */}
        <div className="space-y-3">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm border border-[#544629] rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'rgba(84, 70, 41, 0.05)' }}
            >
              {/* Phase Header - Minimal */}
              <button
                onClick={() => setOpenModule(openModule === phase.id ? null : phase.id)}
                className="w-full flex items-center justify-between p-8 hover:bg-[#b38d38]/5 transition-all group text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="text-lg text-[#b38d38] font-light w-8">
                    0{phase.id}
                  </span>
                  <span className="text-xl md:text-2xl text-white font-light group-hover:text-[#b38d38] transition-colors">
                    {phase.title}
                  </span>
                </div>
                <div className={`w-px h-8 bg-[#544629] transition-all ${openModule === phase.id ? 'rotate-90' : ''}`} />
              </button>

              {/* Phase Details */}
              <AnimatePresence>
                {openModule === phase.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 py-8 border-t border-[#544629]/30" style={{ backgroundColor: 'rgba(12, 10, 5, 0.5)' }}>
                      {/* Description - Clean */}
                      <p className="text-base text-white/60 mb-6 leading-relaxed font-light">
                        {phase.description}
                      </p>

                      {/* Topics - Minimal List */}
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.topics.map((topic, index) => (
                          <div key={index} className="flex items-center gap-2 text-white/70 text-sm">
                            <span className="text-[#b38d38]">→</span>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

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
