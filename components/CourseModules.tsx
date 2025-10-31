'use client'

import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShimmerButton } from './ui/shimmer-button'
import Image from 'next/image'

const modules = [
  {
    id: 1,
    title: 'CEO Mindset & Discipline Protocol',
    category: 'Mindset',
    description: 'Before you can earn like a top 1%er, you have to think like one. Rewire your mindset for wealth and build unstoppable daily habits.',
    instructor: 'Mark Suh',
    instructorLabel: 'Founder',
    image: '/headshots/mark.png',
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
    category: 'Personal Brand',
    description: 'Build an irresistible professional brand that positions you as a leading authority in healthcare facilitation.',
    instructor: 'Mark Suh',
    instructorLabel: 'Branding',
    image: '/headshots/mark.png',
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
    category: 'Paid Advertising',
    description: 'Build a predictable, scalable client acquisition machine using paid advertising to target high-value medical practices.',
    instructor: 'Oliver Ibrahim',
    instructorLabel: 'Paid Ads',
    image: '/headshots/Oliver Ibrahim.png',
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
    title: 'Cold Outreach Mastery',
    category: 'Lead Generation',
    description: 'Master the art of cold outreach to clinics and medical practices. Learn how to craft irresistible messages that get responses.',
    instructor: 'Ash Rahman',
    instructorLabel: 'Cold Outreach',
    image: '/headshots/Ash Rahman.png',
    topics: [
      'Cold email strategies that work',
      'LinkedIn outreach for medical professionals',
      'Direct message frameworks',
      'Follow-up sequences that convert',
      'Building rapport from scratch',
    ],
  },
  {
    id: 5,
    title: 'Sales, Setting & Closing Mastery',
    category: 'Sales',
    description: 'Learn the art and science of high-value B2B sales. Navigate any conversation with confidence and close deals like a pro.',
    instructor: 'Jimmy',
    instructorLabel: 'Sales',
    image: '/headshots/Jimmy.png',
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
    id: 6,
    title: 'The Connector\'s Playbook',
    category: 'Implementation',
    description: 'Your complete step-by-step guide to connecting clinics with peptide suppliers and earning recurring commissions.',
    instructor: 'Mark Suh',
    instructorLabel: 'Strategy',
    image: '/headshots/mark.png',
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
    id: 7,
    title: 'Plug & Play Logistics Network',
    category: 'Operations',
    description: 'Immediate access to our exclusive multi-million dollar supply chain and fulfillment partners. Everything done for you.',
    instructor: 'Mark Suh',
    instructorLabel: 'Operations',
    image: '/headshots/mark.png',
    topics: [
      'Vetted network of peptide suppliers',
      'Licensed pharmacy partnerships',
      'Pre-negotiated off-market pricing',
      'Quality control and compliance',
      'White-glove fulfillment process',
    ],
  },
  {
    id: 8,
    title: 'Elite Operator Protocol',
    category: 'Scaling',
    description: 'Advanced strategies for scaling to $100k+ per month and building a sustainable business empire.',
    instructor: 'Mark Suh',
    instructorLabel: 'Scaling',
    image: '/headshots/mark.png',
    topics: [
      'Scaling your connector business',
      'Building a team of connectors',
      'Automation and systems',
      'Multiple revenue streams',
      'Long-term wealth building strategies',
    ],
  },
  {
    id: 9,
    title: 'Copywriting & Messaging',
    category: 'Communication',
    description: 'Master the art of persuasive writing. Create compelling messages that resonate with clinic owners and drive action.',
    instructor: 'Rami',
    instructorLabel: 'Copywriting',
    image: '/headshots/Rami.png',
    topics: [
      'High-converting email templates',
      'Persuasion psychology fundamentals',
      'Writing for medical professionals',
      'Crafting irresistible offers',
      'Follow-up message frameworks',
    ],
  },
]

export default function CourseModules() {
  const [openModule, setOpenModule] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0c0a05' }} id="curriculum">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-[#b38d38]/10 via-[#7e5a00]/3 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-40 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#544629]/15 via-transparent to-transparent blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            The Complete <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Clinic Launch Academy</span>
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

        {/* Modules List */}
        <div className="space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl rounded-[20px] overflow-hidden"
              style={{ 
                background: 'rgba(179, 141, 56, 0.08)',
                border: '1px solid rgba(179, 141, 56, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(179, 141, 56, 0.15)'
              }}
            >
              {/* Module Header */}
              <button
                onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
                className="w-full p-5 hover:bg-white/5 transition-all text-left"
              >
                <div className="flex gap-6 items-start justify-between">
                  <div className="flex gap-6 items-center flex-1">
                    {/* Thumbnail */}
                    <div className="relative w-[108px] h-[150px] rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={module.image}
                        alt={module.instructor}
                        fill
                        className="object-cover"
                      />
                      {/* Black gradient overlay from top */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
                      {/* Black gradient at bottom - extends higher */}
                      <div 
                        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
                        style={{
                          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)'
                        }}
                      />
                      {/* Instructor label in italic */}
                      <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none">
                        <span 
                          className="text-lg font-light tracking-wide"
                          style={{ 
                            fontFamily: 'Awesome Serif',
                            fontStyle: 'italic',
                            color: '#ffffff',
                            textShadow: '0 2px 4px rgba(0,0,0,0.9)'
                          }}
                        >
                          {module.instructorLabel}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="mb-1">
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight">
                          {module.title}
                        </h3>
                      </div>
                      <div className="mb-4">
                        <span className="text-base font-bold uppercase" style={{ color: '#b38d38' }}>
                          {module.category}
                        </span>
                      </div>
                      <p className="text-sm text-[#f2f3f6] leading-relaxed mb-4">
                        {module.description}
                      </p>
                      <div className="flex gap-6 items-center text-white">
                        <span className="text-base font-semibold capitalize">{module.instructor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Module count and dropdown */}
                  <div className="flex flex-col items-end gap-4">
                    <div className="text-base font-medium text-white uppercase">
                      Module {String(module.id).padStart(2, '0')}
                    </div>
                    <div 
                      className="p-2 rounded-lg flex items-center justify-center transition-all"
                      style={{ backgroundColor: '#333030' }}
                    >
                      <ChevronDown 
                        className={`w-6 h-6 text-white transition-transform duration-300 ${
                          openModule === module.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </button>

              {/* Module Details */}
              <AnimatePresence>
                {openModule === module.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 py-6 border-t border-[#b38d38]/20" style={{ backgroundColor: 'rgba(179, 141, 56, 0.05)' }}>
                      <h4 className="text-lg font-semibold text-white mb-4">What You&apos;ll Learn:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {module.topics.map((topic, topicIndex) => (
                          <motion.div 
                            key={topicIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: topicIndex * 0.05 }}
                            className="flex items-center gap-3 text-white/70 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#b38d38]" />
                            <span>{topic}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <a href="/apply">
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
