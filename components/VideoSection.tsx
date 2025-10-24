'use client'

import { Play, ArrowRight } from 'lucide-react'

export default function VideoSection() {
  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-400 font-medium mb-4">
            teaser
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            Learn from the Best in Business
          </h2>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden mb-12 group">
          {/* Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
          
          {/* Play Button */}
          <button className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-all">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-10 h-10 md:w-12 md:h-12 text-black ml-1" />
            </div>
          </button>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#free-class"
            className="inline-flex items-center gap-2 text-white font-medium text-lg hover:text-[#ffa726] transition-colors"
          >
            Watch free Class
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

