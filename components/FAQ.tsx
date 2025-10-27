'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is Clinic Launch Academy?",
      answer: "CLA is a comprehensive program designed to help you master the connector economy by turning your network into cash-flowing income streams through strategic facilitation and relationship capital."
    },
    {
      question: "Who is this program for?",
      answer: "This program is ideal for entrepreneurs, business owners, consultants, and professionals who have built valuable networks and want to monetize their connections ethically and systematically."
    },
    {
      question: "How long does the program take?",
      answer: "The core curriculum can be completed in 8-12 weeks at your own pace. However, you'll have lifetime access to all materials, updates, and the community."
    },
    {
      question: "What if I don't have a large network?",
      answer: "Quality matters more than quantity. The program teaches you how to leverage even a small network effectively and how to strategically grow your connections."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with the program, simply request a refund within 30 days of purchase."
    },
    {
      question: "Will I get direct access to the instructors?",
      answer: "Yes, you'll have access to monthly Q&A sessions, community support, and 1:1 strategy calls as part of the program."
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#0c0a05' }}>
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#b38d38]/15 via-[#7e5a00]/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#544629]/20 via-transparent to-transparent blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
              Frequently Asked <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Questions</span>
            </h2>
          </div>

          {/* Right Column - FAQs */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-glow hover-glow shadow-dramatic rounded-2xl overflow-hidden backdrop-blur-sm relative"
              style={{ 
                backgroundColor: 'rgba(84, 70, 41, 0.1)',
                borderWidth: '2px',
                borderColor: 'rgba(84, 70, 41, 0.5)'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center gap-4 hover:bg-[#544629]/20 transition-all group relative z-10"
              >
                {/* Number Badge */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#b38d38] to-[#7e5a00] flex items-center justify-center shadow-lg">
                  <span className="text-[#0c0a05] font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <span className="text-lg font-light text-white pr-8 flex-1 group-hover:text-[#b38d38] transition-colors">
                  {faq.question}
                </span>
                
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-[#b38d38] flex-shrink-0 transition-transform" />
                ) : (
                  <Plus className="w-6 h-6 text-[#b38d38] flex-shrink-0 transition-transform" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pl-[88px]">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

