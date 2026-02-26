"use client"

import Script from "next/script"
import Image from "next/image"

export default function ThankYouPage() {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="beforeInteractive" />
      <Script src="https://fast.wistia.com/embed/z47ka634uo.js" strategy="beforeInteractive" type="module" />
      
      <main className="min-h-screen flex flex-col" style={{ backgroundColor: '#0c0a05' }}>
        {/* Warning Strip */}
        <div className="py-4 px-4 border-b" style={{ backgroundColor: 'rgba(179, 141, 56, 0.15)', borderColor: '#544629' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base font-medium text-white/90">
              <span className="font-bold" style={{ color: '#b38d38' }}>WARNING:</span> Successful people value time more than anything else. Therefore, we do not reschedule! We protect and value our time, and make sure that we are working with people that honor their commitments.
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 py-12 md:py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image 
                src="/cla-logo.png" 
                alt="Clinic Launch Academy" 
                width={96} 
                height={64} 
                className="h-16 w-auto" 
                priority
              />
            </div>

            {/* Application Confirmed */}
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: '#b38d38' }}>
              Application Confirmed
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12">
              We have reserved this time specifically for you.
            </h1>

            {/* Step 1 */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                STEP 1: WATCH THIS <span style={{ color: '#b38d38' }}>(1 MIN)</span>
              </h2>
              <p className="text-white/60 italic mb-6">
                Essential instructions before we talk.
              </p>

              {/* Wistia Video Embed */}
              <div 
                className="max-w-2xl mx-auto rounded-lg overflow-hidden border"
                style={{ 
                  borderColor: '#544629',
                  boxShadow: '0 0 30px rgba(179, 141, 56, 0.2)'
                }}
                dangerouslySetInnerHTML={{
                  __html: `
                    <style>
                      wistia-player[media-id='z47ka634uo']:not(:defined) { 
                        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/z47ka634uo/swatch'); 
                        display: block; 
                        filter: blur(5px); 
                        padding-top: 56.25%; 
                      }
                    </style>
                    <wistia-player media-id="z47ka634uo" aspect="1.7777777777777777"></wistia-player>
                  `
                }}
              />
            </div>

            {/* Step 2 */}
            <div className="mb-12 p-6 md:p-8 rounded-xl border" style={{ backgroundColor: 'rgba(84, 70, 41, 0.15)', borderColor: '#544629' }}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                STEP 2: REPLY <span style={{ color: '#b38d38' }}>&quot;YES&quot;</span>
              </h2>
              <p className="text-white/80 mb-2">
                We just sent you an email to verify your email address.{' '}
                <span className="font-bold text-white">Reply &quot;YES&quot; to that email immediately to lock in your spot.</span>
              </p>
              <p className="text-white/50 italic text-sm">
                (Unconfirmed appointments are automatically canceled)
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t py-6 px-4" style={{ borderColor: '#544629' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/50 text-sm">
              © Clinic Launch Academy 2026
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
