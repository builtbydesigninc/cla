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
  const [showCalendar, setShowCalendar] = useState(false)
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

    // Listen for booking events
    const handleBookingSubmit = (event: MessageEvent) => {
      // Log all messages for debugging
      console.log('Received postMessage:', event.data)
      
      // Check for booking confirmation from LeadConnector widget
      if (event.data && event.data.event) {
        const eventName = event.data.event
        
        // Handle various booking confirmation events
        if (eventName === 'calendly.event_scheduled' || 
            eventName === 'booking.scheduled' ||
            eventName === 'appointment.scheduled') {
          console.log('Booking confirmed! Redirecting...')
          setShowCalendar(false)
          setIsBooked(true)
          // Automatically redirect to thank you page after 1.5 seconds
          setTimeout(() => {
            router.push('/thank-you')
          }, 1500)
        }
      }
    }

    window.addEventListener('message', handleBookingSubmit)

    return () => {
      window.removeEventListener('message', handleBookingSubmit)
    }
  }, [router])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowCalendar(false)
    }
    if (showCalendar) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [showCalendar])

  return (
    <>
      <Script 
        src="https://links.cliniclaunchacademy.com/js/form_embed.js" 
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
              className="text-2xl md:text-3xl mb-10"
              style={{ 
                fontFamily: 'Awesome Serif',
                fontStyle: 'italic',
                color: '#b38d38'
              }}
            >
              Click below to choose your time
            </p>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => setShowCalendar(true)}
              className="px-10 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #b38d38 0%, #d4af37 50%, #b38d38 100%)',
                color: '#0c0a05',
                boxShadow: '0 4px 20px rgba(179, 141, 56, 0.4)'
              }}
            >
              Open Calendar
            </motion.button>
          </motion.div>

          {/* Calendar Popup Modal */}
          <AnimatePresence>
            {showCalendar && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={() => setShowCalendar(false)}
              >
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative w-full max-w-[936px] max-h-[90vh] rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(12, 10, 5, 0.98)',
                    border: '1px solid rgba(179, 141, 56, 0.3)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between p-4 border-b border-[#544629]">
                    <h2 className="text-xl font-semibold text-white">Book Your Vetting Call</h2>
                    <button
                      onClick={() => setShowCalendar(false)}
                      className="text-white/70 hover:text-white text-2xl leading-none p-1"
                      aria-label="Close"
                    >
                      ×
                    </button>
                  </div>
                  <div className="p-4 md:p-8 overflow-auto max-h-[calc(90vh-80px)]">
                    <iframe 
                      src="https://links.cliniclaunchacademy.com/widget/booking/bkksPA6IoIp9x17xTFZB" 
                      style={{ 
                        width: '100%',
                        minHeight: '600px',
                        border: 'none',
                        overflow: 'hidden'
                      }}
                      scrolling="no"
                      id="bkksPA6IoIp9x17xTFZB_1770571203782"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

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

        </div>

        {/* Full Footer */}
        <Footer />
      </main>
    </>
  )
}
