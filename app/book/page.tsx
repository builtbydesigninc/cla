"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Script from "next/script"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import Footer from "@/components/Footer"

export default function BookPage() {
  const [isBooked, setIsBooked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check URL parameters for booking confirmation
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('booking') === 'confirmed' || 
        urlParams.get('status') === 'confirmed' ||
        urlParams.get('booked') === 'true') {
      console.log('Booking confirmed via URL parameter! Redirecting...')
      router.push('/thank-you')
      return
    }

    // Listen for Calendly booking events
    const handleBookingSubmit = (event: MessageEvent) => {
      // Log all messages for debugging
      console.log('Received postMessage:', event.data)
      
      // Check for Calendly event scheduled
      if (event.data && event.data.event === 'calendly.event_scheduled') {
        console.log('Calendly booking confirmed! Redirecting...')
        setIsBooked(true)
        // Automatically redirect to thank you page after 1.5 seconds
        setTimeout(() => {
          router.push('/thank-you')
        }, 1500)
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
        src="https://assets.calendly.com/assets/external/widget.js" 
        type="text/javascript"
        strategy="lazyOnload"
      />
      
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
        <div className="max-w-[1170px] mx-auto px-4 py-12 md:py-16">
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
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/cliniclaunchacademy-info?background_color=1a1a1a&text_color=ffffff"
                  style={{ 
                    minWidth: '320px',
                    height: '700px'
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Booking Confirmation Section - Appears briefly before redirect */}
          <AnimatePresence>
            {isBooked && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="max-w-[936px] mx-auto mt-12"
              >
                <div 
                  className="backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center"
                  style={{
                    background: 'rgba(179, 141, 56, 0.15)',
                    border: '2px solid rgba(179, 141, 56, 0.3)',
                    boxShadow: '0 8px 32px 0 rgba(179, 141, 56, 0.3)'
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Booking Confirmed!
                  </h2>
                  <p className="text-xl text-white/80">
                    Redirecting you now...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Completion Prompt - Shows after booking */}
          {!isBooked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-center mt-16"
            >
              <motion.div
                className="backdrop-blur-xl rounded-2xl p-6 md:p-8 max-w-[600px] mx-auto"
                style={{
                  background: 'rgba(179, 141, 56, 0.08)',
                  border: '1px solid rgba(179, 141, 56, 0.2)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)'
                }}
              >
                <p className="text-white/80 text-base mb-4">
                  Finished booking your call?
                </p>
                <button
                  onClick={() => {
                    setIsBooked(true)
                    setTimeout(() => {
                      router.push('/thank-you')
                    }, 500)
                  }}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-[#b38d38] whitespace-nowrap text-white uppercase tracking-wider font-bold text-sm transition-all hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                  style={{
                    background: 'linear-gradient(135deg, #b38d38 0%, #1a1410 50%, #0c0a05 100%)'
                  }}
                >
                  Continue to Next Step →
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Full Footer */}
        <Footer />
      </main>
    </>
  )
}
