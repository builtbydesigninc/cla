"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { useRouter } from "next/navigation"

export default function ApplyPage() {
  const router = useRouter()

  useEffect(() => {
    // Listen for typeform submission
    const handleTypeformSubmit = (event: any) => {
      if (event.data?.type === 'form-submit') {
        // Redirect to booking page after typeform submission
        router.push('/book')
      }
    }

    window.addEventListener('message', handleTypeformSubmit)

    return () => {
      window.removeEventListener('message', handleTypeformSubmit)
    }
  }, [router])

  return (
    <>
      <Script 
        src="//embed.typeform.com/next/embed.js" 
        strategy="afterInteractive"
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
              Start Your Application
            </h1>
            <p 
              className="text-2xl md:text-3xl"
              style={{ 
                fontFamily: 'Awesome Serif',
                fontStyle: 'italic',
                color: '#b38d38'
              }}
            >
              Complete the form below to begin your journey
            </p>
          </motion.div>

          {/* Typeform Embed */}
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
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(179, 141, 56, 0.15)',
                minHeight: '700px'
              }}
            >
              <div 
                data-tf-live="01K8VYY96EZFGZA6KGPJNSR0FS"
                style={{ width: '100%', height: '700px' }}
              />
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
