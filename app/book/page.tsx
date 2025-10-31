"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Script from "next/script"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Footer from "@/components/Footer"

export default function BookPage() {
  const [isBooked, setIsBooked] = useState(false)

  useEffect(() => {
    // Listen for booking calendar submission
    const handleBookingSubmit = (event: MessageEvent) => {
      // Check for various booking confirmation messages
      if (event.data && (
        event.data.type === 'booking-confirmed' || 
        event.data.type === 'hsFormCallback' ||
        event.data === 'booking-success' ||
        event.data.eventName === 'booking.completed' ||
        (typeof event.data === 'string' && event.data.includes('booking'))
      )) {
        setIsBooked(true)
      }
    }

    window.addEventListener('message', handleBookingSubmit)

    // Also check for URL changes in the iframe (fallback)
    const checkInterval = setInterval(() => {
      const iframe = document.getElementById('StgVKa57nyEt8FKZg7Ga_1761711862621') as HTMLIFrameElement
      if (iframe) {
        try {
          // This might not work due to CORS, but worth trying
          if (iframe.contentWindow?.location.href.includes('success') || 
              iframe.contentWindow?.location.href.includes('confirmed')) {
            setIsBooked(true)
          }
        } catch {
          // Silently fail if CORS blocks us
        }
      }
    }, 2000)

    return () => {
      window.removeEventListener('message', handleBookingSubmit)
      clearInterval(checkInterval)
    }
  }, [])

  return (
    <>
      <Script 
        src="https://api.leadconnectorhq.com/js/form_embed.js" 
        type="text/javascript"
        strategy="lazyOnload"
      />
      
      <main className="w-full" style={{ backgroundColor: '#0c0a05', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
        <div className="flex-1 max-w-[1170px] mx-auto px-4 py-12 md:py-20 w-full">
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
                    height: '600px'
                  }} 
                  scrolling="no" 
                  id="StgVKa57nyEt8FKZg7Ga_1761711862621"
                  title="Booking Calendar"
                />
              </div>
            </div>
          </motion.div>

          {/* Booking Confirmation Section - Appears after submission */}
          <AnimatePresence>
            {isBooked && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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
                  <CheckCircle2 className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Booking Confirmed!
                  </h2>
                  <p className="text-xl text-white/80 mb-8">
                    We&apos;ve received your booking. A confirmation email is on its way!
                  </p>
                  <Link href="/thank-you">
                    <button
                      className="group relative z-0 flex mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-[#b38d38] px-10 py-5 whitespace-nowrap text-white uppercase tracking-wider font-bold text-lg hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
                      style={{
                        background: 'linear-gradient(to bottom right, #b38d38, #d4af37, #b38d38)'
                      }}
                    >
                      <span className="flex items-center gap-3">
                        Continue
                        <ArrowRight className="w-6 h-6" />
                      </span>
                    </button>
                  </Link>
                  <p className="text-white/50 text-sm mt-6">
                    Or manually set your booking as complete if the button doesn&apos;t appear
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Manual Trigger Button (for testing/backup) */}
          {!isBooked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center mt-12"
            >
              <button
                onClick={() => setIsBooked(true)}
                className="text-[#b38d38] hover:text-[#d4af37] text-sm underline transition-colors"
              >
                Already booked? Click here to continue
              </button>
            </motion.div>
          )}
        </div>

        {/* Full Footer */}
        <Footer />
      </main>
    </>
  )
}
