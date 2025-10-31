'use client'

import { useState } from 'react'
import { 
  ChevronDown, 
  ArrowRight, 
  Brain, 
  Award, 
  Target, 
  Send, 
  Handshake, 
  Compass, 
  Settings, 
  TrendingUp, 
  PenTool,
  type LucideIcon
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShimmerButton } from './ui/shimmer-button'

const modules = [
  {
    id: 1,
    title: 'CEO Mindset & Discipline Protocol',
    category: 'Mindset',
    description: 'Before you can earn like a top 1%er, you have to think like one. Rewire your mindset for wealth and build unstoppable daily habits.',
    instructor: 'Mark Suh',
    instructorLabel: 'Founder',
    icon: Brain,
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
    icon: Award,
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
    icon: Target,
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
    icon: Send,
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
    icon: Handshake,
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
    icon: Compass,
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
    icon: Settings,
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
    icon: TrendingUp,
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
    icon: PenTool,
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
        <div className="text-center mb-20 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-medium mb-5"
            style={{ 
              color: '#b38d38',
              letterSpacing: '0.2em'
            }}
          >
            COMPLETE SYSTEM
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-medium text-white mb-6"
            style={{ 
              letterSpacing: '-0.03em',
              lineHeight: '1.1'
            }}
          >
            The Complete <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Clinic Launch Academy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto mb-12"
            style={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: '1.7'
            }}
          >
            A complete turnkey system built to help you win fast. Everything you need to build a six or seven-figure peptide facilitation business.
          </motion.p>
        </div>

        {/* Modules List */}
        <div className="space-y-5">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="backdrop-blur-xl rounded-2xl overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, rgba(179, 141, 56, 0.06) 0%, rgba(179, 141, 56, 0.02) 100%)',
                border: '1px solid rgba(179, 141, 56, 0.2)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(179, 141, 56, 0.1), inset 0 1px 0 rgba(179, 141, 56, 0.1)'
              }}
            >
              {/* Module Header */}
              <button
                onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
                className="w-full p-8 hover:bg-white/5 transition-all duration-300 text-left group"
              >
                <div className="flex gap-8 items-start justify-between">
                  <div className="flex gap-8 items-start flex-1">
                    {/* Icon Symbol */}
                    <div className="relative flex-shrink-0">
                      <div 
                        className="relative w-28 h-28 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(179, 141, 56, 0.15) 0%, rgba(179, 141, 56, 0.05) 100%)',
                          border: '1px solid rgba(179, 141, 56, 0.3)',
                          boxShadow: '0 8px 32px rgba(179, 141, 56, 0.1)'
                        }}
                      >
                        <module.icon 
                          className="w-14 h-14 text-[#b38d38] stroke-[1.5]"
                          strokeWidth={1.5}
                        />
                      </div>
                      {/* Label below icon */}
                      <div className="mt-3 text-center">
                        <span 
                          className="text-sm font-light tracking-wider uppercase"
                          style={{ 
                            color: '#b38d38',
                            letterSpacing: '0.1em'
                          }}
                        >
                          {module.instructorLabel}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <div className="mb-2">
                            <span 
                              className="text-xs font-medium uppercase tracking-wider"
                              style={{ 
                                color: '#b38d38',
                                letterSpacing: '0.15em'
                              }}
                            >
                              {module.category}
                            </span>
                          </div>
                          <h3 
                            className="text-2xl font-medium text-white leading-tight tracking-tight"
                            style={{
                              letterSpacing: '-0.02em'
                            }}
                          >
                            {module.title}
                          </h3>
                        </div>
                        {/* Module number badge */}
                        <div 
                          className="flex-shrink-0 px-3 py-1 rounded-lg"
                          style={{
                            background: 'rgba(179, 141, 56, 0.1)',
                            border: '1px solid rgba(179, 141, 56, 0.2)'
                          }}
                        >
                          <span 
                            className="text-xs font-medium tracking-wider"
                            style={{ color: '#b38d38' }}
                          >
                            {String(module.id).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      <p 
                        className="text-[15px] leading-relaxed mb-5"
                        style={{ 
                          color: 'rgba(255, 255, 255, 0.65)',
                          lineHeight: '1.7'
                        }}
                      >
                        {module.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span 
                          className="text-sm text-white/50 font-light"
                        >
                          Led by {module.instructor}
                        </span>
                        <div 
                          className="p-2 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-white/5"
                          style={{ 
                            backgroundColor: 'rgba(179, 141, 56, 0.08)',
                            border: '1px solid rgba(179, 141, 56, 0.15)'
                          }}
                        >
                          <ChevronDown 
                            className={`w-5 h-5 text-[#b38d38] transition-transform duration-300 ${
                              openModule === module.id ? 'rotate-180' : ''
                            }`}
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
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
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="px-8 py-6 border-t"
                      style={{ 
                        backgroundColor: 'rgba(179, 141, 56, 0.03)',
                        borderColor: 'rgba(179, 141, 56, 0.15)'
                      }}
                    >
                      <h4 
                        className="text-sm font-medium uppercase tracking-wider mb-6"
                        style={{ 
                          color: '#b38d38',
                          letterSpacing: '0.15em'
                        }}
                      >
                        What You&apos;ll Learn
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {module.topics.map((topic, topicIndex) => (
                          <motion.div 
                            key={topicIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: topicIndex * 0.05,
                              duration: 0.3,
                              ease: [0.25, 0.1, 0.25, 1]
                            }}
                            className="flex items-start gap-3 group/topic"
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 group-hover/topic:scale-150 transition-transform duration-200"
                              style={{ backgroundColor: '#b38d38' }}
                            />
                            <span 
                              className="text-[15px] leading-relaxed group-hover/topic:text-white transition-colors duration-200"
                              style={{ 
                                color: 'rgba(255, 255, 255, 0.6)',
                                lineHeight: '1.6'
                              }}
                            >
                              {topic}
                            </span>
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
            <ShimmerButton>
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
