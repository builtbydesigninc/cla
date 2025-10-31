"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0c0a05' }}>
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
      <div className="max-w-[800px] mx-auto px-4 pb-20 pt-20">
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
            You're All Set!
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
            className="backdrop-blur-xl rounded-2xl p-8 md:p-12 mb-12"
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
              We've received your application and booking. A confirmation email has been sent to your inbox with all the details.
            </p>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              We're excited to speak with you and look forward to seeing you on the call!
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/"
              className="inline-block backdrop-blur-md border border-[#544629] rounded-full px-8 py-4 hover:border-[#b38d38] hover:bg-[#b38d38]/10 transition-all text-sm font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: 'rgba(84, 70, 41, 0.15)' }}
            >
              Return to Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 text-white/60 text-sm"
        >
          <p>
            Copyright 2025 Clinic Launch Academy | {' '}
            <a 
              href="/privacy" 
              className="text-[#b38d38] hover:text-[#d4a854] transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  )
}
