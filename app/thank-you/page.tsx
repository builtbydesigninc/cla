"use client"

import Image from "next/image"
import Script from "next/script"

const caseStudies = [
  {
    name: "Sarah",
    role: "Former Teacher, Texas",
    quote: "I tried everything—dropshipping, affiliate marketing, and got nowhere. The logic Mark presented just made so much sense. My life is completely different now.",
    result: "Now earning $40k/month",
  },
  {
    name: "Maria",
    role: "Florida",
    quote: "The fact that the team closes the deals for me was the game changer. I just focus on making connections. I've onboarded three clinics in three months.",
    result: "On track for $50k this month",
  },
  {
    name: "David",
    role: "Business Owner, California",
    quote: "I've explored various business models, but nothing compares to the recurring commission potential here. The support and infrastructure CLA provides is unmatched.",
    result: "$75k in first 4 months",
  },
]

export default function ThankYouPage() {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="beforeInteractive" />
      <Script src="https://fast.wistia.com/embed/gl99khtvfh.js" strategy="beforeInteractive" type="module" />
      
      <main className="min-h-screen flex flex-col" style={{ backgroundColor: '#0c0a05' }}>
        {/* Warning Strip */}
        <div className="py-4 px-4 border-b border-[#544629]" style={{ background: 'linear-gradient(90deg, #0c0a05, rgba(179, 141, 56, 0.15), #0c0a05)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base font-medium text-white/80">
              <span className="font-bold text-[#b38d38]">WARNING:</span> Successful people value time more than anything else. Therefore, we do not reschedule. We protect and value our time, and make sure that we are working with people that honor their commitments.
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
            <p className="text-[#b38d38] text-xs font-extrabold tracking-[0.18em] uppercase mb-2">
              Application Confirmed
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-2" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Application Confirmed for<br />
              <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Clinic Launch Academy</span>
            </h1>
            <p className="text-[#d2c9b6] text-base md:text-lg mb-12" style={{ textWrap: 'balance' }}>
              We have reserved this time specifically for you.
            </p>

            {/* Step 1 */}
            <div className="mb-10">
              <span className="text-[#8f762f] text-xs font-extrabold tracking-[0.18em] uppercase block mb-2">Step 01</span>
              <h2 className="text-lg md:text-xl font-bold text-[#f3eee2] mb-2">
                Watch This (1 Min)
              </h2>
              <p className="text-[#bdb6a8] text-sm mb-4">
                Essential instructions before we talk.
              </p>

              {/* Wistia Video Embed */}
              <div 
                className="max-w-2xl mx-auto rounded-lg overflow-hidden border border-[#544629]"
                dangerouslySetInnerHTML={{
                  __html: `
                    <style>
                      wistia-player[media-id='gl99khtvfh']:not(:defined) { 
                        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/gl99khtvfh/swatch'); 
                        display: block; 
                        filter: blur(5px); 
                        padding-top: 56.25%; 
                      }
                    </style>
                    <wistia-player media-id="gl99khtvfh" aspect="1.7777777777777777"></wistia-player>
                  `
                }}
              />
            </div>

            {/* Step 2 */}
            <div className="mb-14">
              <span className="text-[#8f762f] text-xs font-extrabold tracking-[0.18em] uppercase block mb-2">Step 02</span>
              <h2 className="text-lg md:text-xl font-bold text-[#f3eee2] mb-3">
                Reply &ldquo;YES&rdquo;
              </h2>
              <p className="text-[#dfd8c8] text-base md:text-lg leading-relaxed mb-2">
                We just sent you an email and SMS to verify your details. Reply{' '}
                <strong className="font-extrabold">
                  &ldquo;YES&rdquo;
                </strong>{' '}
                to that message immediately and we will send you the private full podcast link featuring Trevor Kruder, CEO of Alpha Biomed Labs, a $500&nbsp;million biotech enterprise.
              </p>
              <p className="text-[#c98274] text-sm mt-3">
                (Unconfirmed appointments are automatically canceled)
              </p>
            </div>

            {/* Case Studies */}
            <div className="mb-12">
              <p className="text-[#8f762f] text-xs font-extrabold tracking-[0.18em] uppercase mb-3">Results From Our System</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {caseStudies.map((study, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 text-left border border-[#544629]/50 backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(84, 70, 41, 0.1)' }}
                  >
                    <div className="text-4xl text-[#b38d38]/20 font-serif leading-none mb-2">&ldquo;</div>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">{study.quote}</p>
                    <div className="pt-3 border-t border-[#544629]/30">
                      <p className="text-white font-semibold text-sm">{study.name}</p>
                      <p className="text-white/50 text-xs">{study.role}</p>
                      <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b38d38]/15 border border-[#b38d38]/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b38d38] shadow-[0_0_6px_rgba(179,141,56,0.8)]" />
                        <span className="text-[#b38d38] font-semibold text-xs">{study.result}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#544629] py-6 px-4" style={{ backgroundColor: '#0c0a05' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#8d8679] text-sm">
              © Clinic Launch Academy 2026
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
