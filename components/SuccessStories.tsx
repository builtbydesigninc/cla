'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { motion } from 'framer-motion'

const successStories = [
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    text: 'I tried everything—dropshipping, affiliate marketing, and got nowhere. The logic Mark presented just made so much sense. My life is completely different now.',
    name: 'Sarah',
    username: 'Former Teacher, Texas',
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    text: 'The fact that the team closes the deals for me was the game changer. I just focus on making connections. I\'ve onboarded three clinics in three months.',
    name: 'Maria',
    username: 'Florida',
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    text: 'I\'ve explored various business models, but nothing compares to the recurring commission potential here. The support and infrastructure CLA provides is unmatched.',
    name: 'David',
    username: 'Business Owner, California',
  },
  {
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    text: 'Even with my background in healthcare, I never thought about the facilitation model. This opened my eyes to a completely new income stream.',
    name: 'Jennifer',
    username: 'Healthcare Professional',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    text: 'Learning valuable lessons on my terms was incredible. I gained real, applicable insights into building a sustainable business model.',
    name: 'Michael',
    username: 'Entrepreneur',
  },
  {
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop',
    text: 'The community and support at CLA is outstanding. Every question gets answered, every challenge gets solved.',
    name: 'Alex',
    username: 'Sales Professional',
  },
]

export default function SuccessStories() {
  const [showAll, setShowAll] = useState(false)
  const maxDisplayed = 6

  return (
    <section className="py-20 md:py-32 border-y" style={{ backgroundColor: '#0c0a05', borderColor: '#544629' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-12 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-wider text-white/60 font-medium mb-4"
          >
            More Success Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-light text-white mb-4"
          >
            What <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Members</span> Are Saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-white/70 max-w-2xl"
          >
            Real stories from real people building their connector businesses.
          </motion.p>
        </div>

        <div className="relative">
          <div className={`flex justify-center items-center gap-6 flex-wrap ${!showAll && successStories.length > maxDisplayed ? 'max-h-[800px] overflow-hidden' : ''}`}>
            {successStories
              .slice(0, showAll ? undefined : maxDisplayed)
              .map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card
                    className="w-80 h-auto p-6 relative backdrop-blur-md border-[#544629]"
                    style={{ backgroundColor: 'rgba(84, 70, 41, 0.05)' }}
                  >
                  <div className="mb-5">
                    <p className="text-white font-light text-base leading-relaxed">
                      {story.text}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-semibold text-base text-white">
                      {story.name}
                    </span>
                    <span className="text-sm text-white/60">
                      {story.username}
                    </span>
                  </div>
                </Card>
                </motion.div>
              ))}
          </div>

          {successStories.length > maxDisplayed && !showAll && (
            <>
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0c0a05] to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                <ShimmerButton
                  shimmerColor="#b38d38"
                  shimmerDuration="2.5s"
                  onClick={() => setShowAll(true)}
                >
                  Load More
                </ShimmerButton>
              </div>
            </>
          )}
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
