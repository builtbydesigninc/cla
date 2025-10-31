'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ShimmerButton } from './ui/shimmer-button'

const teamMembers = [
  {
    name: 'Mark',
    lastName: 'Suh',
    description: 'Main Instructor',
    imageUrl: '/headshots/mark.png',
  },
  {
    name: 'Ash',
    lastName: 'Rahman',
    description: 'Outreach Expert',
    imageUrl: '/headshots/Ash Rahman.png',
  },
  {
    name: 'Oliver',
    lastName: 'Ibrahim',
    description: 'Marketing Director',
    imageUrl: '/headshots/Oliver Ibrahim.png',
  },
  {
    name: 'Muhammad',
    lastName: 'Bin Sohail',
    description: 'Technology Lead',
    imageUrl: '/headshots/Muhammad Bin Sohail.png',
  },
  {
    name: 'Jimmy',
    lastName: 'Abou El Ezz',
    description: 'Closing Specialist',
    imageUrl: '/headshots/Jimmy.png',
  },
  {
    name: 'Gaelle',
    lastName: 'Semaan',
    description: 'Client Success',
    imageUrl: '/headshots/Gaelle Semaan.png',
  },
  {
    name: 'Rami',
    lastName: 'H.',
    description: 'Copywriter',
    imageUrl: '/headshots/Rami.png',
  },
]

export default function Faculty() {
  return (
    <section className="py-20 md:py-32 border-y" style={{ backgroundColor: '#0c0a05', borderColor: '#544629' }} id="faculty">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-wider text-white/60 font-medium mb-4"
          >
            Your Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-white mb-6"
          >
            Meet Your <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Elite</span> Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Meet the team behind Clinic Launch Academy who will support your success.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gray-900 rounded-lg overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <img
                  src={member.imageUrl}
                  alt={`${member.name} ${member.lastName}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-4">
                  <div className="text-center mb-2">
                    <p className="text-sm sm:text-base md:text-lg font-light text-white uppercase tracking-wide whitespace-nowrap">
                      {member.name}
                    </p>
                    <p className={`${member.lastName === 'Bin Sohail' ? 'text-xs sm:text-sm md:text-base' : 'text-sm sm:text-base md:text-lg'} font-extrabold text-white uppercase tracking-wide whitespace-nowrap`}>
                      {member.lastName}
                    </p>
                  </div>
                  <div className="w-full h-px bg-gray-500 mb-2" />
                  <p className="text-xs text-white/90 text-center">
                    {member.description}
                  </p>
                </div>

                <div className="absolute inset-0 border border-black/10 rounded-lg pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA - Centered After Section */}
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
