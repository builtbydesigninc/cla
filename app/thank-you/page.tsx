"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { CheckCircle2 } from "lucide-react"
import Footer from "@/components/Footer"

const testimonials = [
  {
    mediaId: 'g9p0h8q0yn',
    name: 'Christo',
    stats: 'Previous: High ticket sales ($5K-$5M) ? Now: Growing every month ? "Every month is my best month ever"'
  },
  {
    mediaId: 'gyas4vakz6',
    name: 'Daniel',
    stats: 'First client in 1 month ? 20 clients ? From $5K to $10K+/month ? Recurring commissions for years'
  },
  {
    mediaId: 'we5ko6ns9w',
    name: 'Hailey',
    stats: 'First client in 2 weeks ? Income: "Several times more" ? Paid off debt, saving for home'
  },
  {
    mediaId: 'hnc5twbzsp',
    name: 'Sabit',
    stats: 'First client on Day 1 ? 100% close rate (vs 30%) ? 1 client from 20 dials ? Full calendar'
  }
]

export default function ThankYouPage() {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      {testimonials.map(testimonial => (
        <Script 
          key={testimonial.mediaId}
          src={`https://fast.wistia.com/embed/${testimonial.mediaId}.js`} 
          strategy="lazyOnload" 
          type="module"
        />
      ))}
      
      <main style={{ backgroundColor: '#0c0a05' }}>
        {/* Header with Logo */}
        <div className="py-8 px-4">
          <div className="max-w-[1160px] mx-auto">
            <Link href="/">
              <Image
                src="/cla-logo.png"
                alt="Clinic Launch Academy"
                width={150}
                height={57}
                className="mx-auto"
              />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div 
                className="backdrop-blur-xl rounded-full p-6"
                style={{
                  background: 'rgba(179, 141, 56, 0.15)',
                  border: '2px solid rgba(179, 141, 56, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(179, 141, 56, 0.2)'
                }}
              >
                <CheckCircle2 className="w-20 h-20 text-[#b38d38]" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              You&apos;re All Set!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl mb-8"
              style={{ 
                fontFamily: 'Awesome Serif',
                fontStyle: 'italic',
                color: '#b38d38'
              }}
            >
              Your application has been submitted successfully
            </motion.p>

            {/* Message Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="backdrop-blur-xl rounded-2xl p-8 md:p-12 mb-16"
              style={{
                background: 'rgba(179, 141, 56, 0.08)',
                border: '1px solid rgba(179, 141, 56, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
              }}
            >
              <p className="text-white/80 text-lg md:text-xl mb-6 leading-relaxed">
                Thank you for scheduling your vetting call with Clinic Launch Academy!
              </p>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-4">
                We&apos;ve received your application and booking. A confirmation email has been sent to your inbox with all the details.
              </p>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                We&apos;re excited to speak with you and look forward to seeing you on the call!
              </p>
            </motion.div>

            {/* Testimonials Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                While You Wait, Hear From Our{' '}
                <span 
                  style={{ 
                    fontFamily: 'Awesome Serif',
                    fontStyle: 'italic',
                    color: '#b38d38'
                  }}
                >
                  Success Stories
                </span>
              </h2>
              <p className="text-white/60 text-lg mb-12">
                See what our graduates have achieved with CLA
              </p>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1100px] mx-auto px-2 md:px-0">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.mediaId}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="backdrop-blur-xl rounded-2xl overflow-hidden"
                    style={{
                      background: 'rgba(179, 141, 56, 0.08)',
                      border: '1px solid rgba(179, 141, 56, 0.2)',
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                  >
                    {/* Video */}
                    <div 
                      className="relative"
                      dangerouslySetInnerHTML={{
                        __html: `
                          <style>
                            wistia-player[media-id='${testimonial.mediaId}']:not(:defined) { 
                              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${testimonial.mediaId}/swatch'); 
                              display: block; 
                              filter: blur(5px); 
                              padding-top: 56.25%; 
                            }
                          </style>
                          <wistia-player media-id="${testimonial.mediaId}" aspect="1.7777777777777777"></wistia-player>
                        `
                      }}
                    />
                    
                    {/* Info Card Below Video */}
                    <div className="p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {testimonial.name}
                      </h3>
                      <p className="text-[#b38d38] text-sm font-medium leading-relaxed">
                        {testimonial.stats}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-12"
            >
              <Link
                href="/"
                className="inline-block backdrop-blur-md border-2 border-[#b38d38] rounded-full px-10 py-4 hover:border-[#d4af37] hover:bg-[#b38d38]/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all text-base font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: 'rgba(84, 70, 41, 0.15)' }}
              >
                Return to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Full Footer */}
        <Footer />
      </main>
    </>
  )
}
