"use client"

import Image from "next/image"
import Script from "next/script"

export default function ThankYouPage() {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="beforeInteractive" />
      <Script src="https://fast.wistia.com/embed/z47ka634uo.js" strategy="beforeInteractive" type="module" />
      
      <main className="min-h-screen flex flex-col" style={{ backgroundColor: '#0c0a05' }}>
        {/* Warning Strip */}
        <div className="py-4 px-4 border-b border-[#544629]" style={{ background: 'linear-gradient(90deg, #0c0a05, rgba(179, 141, 56, 0.15), #0c0a05)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base font-medium text-white/80">
              <span className="font-bold text-[#b38d38]">WARNING:</span> Successful people value time more than anything else. Therefore, we do not reschedule! We protect and value our time, and make sure that we are working with people that honor their commitments.
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
                width={120} 
                height={80} 
                className="h-16 w-auto" 
              />
            </div>

            {/* Application Confirmed */}
            <p className="text-[#b38d38] text-sm tracking-widest uppercase mb-2">
              Application Confirmed
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12">
              We have reserved this time specifically for you.
            </h1>

            {/* Step 1 */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                STEP 1: WATCH THIS (1 MIN)
              </h2>
              <p className="text-white/50 italic mb-6">
                Essential instructions before we talk.
              </p>

              {/* Wistia Video Embed */}
              <div 
                className="max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg shadow-[#b38d38]/10 border border-[#544629]"
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
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                STEP 2: REPLY &quot;YES&quot;
              </h2>
              <p className="text-white/70 mb-2">
                We just sent you an email to verify your email address.{' '}
                <span className="font-bold text-white">Reply &quot;YES&quot; to that email immediately to lock in your spot.</span>
              </p>
              <p className="text-white/40 italic text-sm">
                (Unconfirmed appointments are automatically canceled)
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#544629] py-6 px-4" style={{ backgroundColor: '#0c0a05' }}>
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
