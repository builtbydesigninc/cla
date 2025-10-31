"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Script from "next/script"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BookPage() {
  const router = useRouter()

  useEffect(() => {
    // Listen for booking calendar submission
    const handleBookingSubmit = (event: MessageEvent) => {
      // GHL calendar submissions typically send message events
      if (event.data && (
        event.data.type === 'booking-confirmed' || 
        event.data.type === 'hsFormCallback' ||
        event.data === 'booking-success'
      )) {
        // Redirect to thank you page after booking submission
        router.push('/thank-you')
      }
    }

    window.addEventListener('message', handleBookingSubmit)

    return () => {
      window.removeEventListener('message', handleBookingSubmit)
    }
  }, [router])

  return (
    <>
      <Script 
        src="https://api.leadconnectorhq.com/js/form_embed.js" 
        type="text/javascript"
        strategy="lazyOnload"
      />
      
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
        <div className="max-w-[1170px] mx-auto px-4 pb-20">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Congratulations! You&apos;ve Been<br />
              Approved To Book Your Vetting Call
            </h1>
            <p 
              className="text-2xl md:text-3xl"
              style={{ 
                fontFamily: 'Awesome Serif',
                fontStyle: 'italic',
                color: '#b38d38'
              }}
            >
              Hang tight — your scheduling options are loading below
            </p>
          </motion.div>

          {/* Calendar Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[936px] mx-auto"
          >
            <div 
              className="backdrop-blur-xl rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(179, 141, 56, 0.08)',
                border: '1px solid rgba(179, 141, 56, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(179, 141, 56, 0.15)'
              }}
            >
              <div className="p-4 md:p-8">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/StgVKa57nyEt8FKZg7Ga" 
                  style={{ 
                    width: '100%',
                    border: 'none',
                    overflow: 'hidden',
                    minHeight: '700px'
                  }} 
                  scrolling="no" 
                  id="StgVKa57nyEt8FKZg7Ga_1761711862621"
                  title="Booking Calendar"
                />
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16 text-white/60 text-sm"
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
    </>
  )
}

