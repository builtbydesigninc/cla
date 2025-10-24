'use client'

import { motion } from 'framer-motion'

const members = [
  {
    name: 'Parth Gorge',
    role: 'Sales Call',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop',
    number: '01',
  },
  {
    name: 'Mark Suh',
    role: 'Main Instructor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1200&fit=crop',
    number: '02',
  },
  {
    name: 'Ash Rahman',
    role: 'Outreach',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1200&fit=crop',
    number: '03',
  },
  {
    name: 'Oliver Ibrahim',
    role: 'Marketing',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1200&fit=crop',
    number: '04',
  },
  {
    name: 'Muhammad Bin Sohail',
    role: 'Technology',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1200&fit=crop',
    number: '05',
  },
  {
    name: 'Jimmy Abdou',
    role: 'Closing',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&h=1200&fit=crop',
    number: '06',
  },
  {
    name: 'Gaelle Semaan',
    role: 'Client Success Liaison',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1200&fit=crop',
    number: '07',
  },
  {
    name: 'Rami H.',
    role: 'Copywriter',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=1200&fit=crop',
    number: '08',
  },
  {
    name: 'Sharib Sufi',
    role: 'Automations',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&h=1200&fit=crop',
    number: '09',
  },
]

export default function TeamShowcase() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative mb-4 overflow-hidden rounded-xl bg-gray-900">
                <img
                  className="h-96 w-full rounded-xl object-cover object-top transition-all duration-500 group-hover:scale-105"
                  src={member.avatar}
                  alt={member.name}
                  width="826"
                  height="1239"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 transition-opacity duration-500" />
              </div>

              {/* Member Info */}
              <div className="px-2">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-base font-semibold text-gray-800 transition-all duration-500 group-hover:tracking-wide">
                    {member.name}
                  </h3>
                  <span className="text-xs text-gray-400">_{member.number}</span>
                </div>
                
                <div className="overflow-hidden">
                  <span className="inline-block translate-y-6 text-sm text-gray-600 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {member.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
