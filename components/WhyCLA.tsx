'use client'

import { useState, useEffect, useRef } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Network, Phone, BookOpen, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MagicCard } from "@/components/ui/magic-card"
import { motion, AnimatePresence } from "framer-motion"
import { ShimmerButton } from "./ui/shimmer-button"

export default function WhyCLA() {
  const [activeTab, setActiveTab] = useState(0)
  const [userInteracted, setUserInteracted] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  // Auto-scroll effect
  useEffect(() => {
    const startAutoScroll = () => {
      if (timerRef.current) clearInterval(timerRef.current)
      
      timerRef.current = setInterval(() => {
        if (!userInteracted) {
          setActiveTab((prev) => (prev + 1) % tabs.length)
        }
      }, 4000) // Change tab every 4 seconds
    }

    startAutoScroll()

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [userInteracted])

  // Reset user interaction after 10 seconds of no activity
  useEffect(() => {
    if (userInteracted) {
      const timeout = setTimeout(() => {
        setUserInteracted(false)
      }, 10000)
      
      return () => clearTimeout(timeout)
    }
  }, [userInteracted, activeTab])

  const handleTabChange = (index: number) => {
    setActiveTab(index)
    setUserInteracted(true)
  }

  const tabs = [
    {
      value: "closing-team",
      icon: <Users className="h-4 w-4" />,
      iconLarge: <Users className="w-16 h-16 text-[#b38d38]/20" />,
      label: "Closing Team",
      content: {
        badge: "Done-For-You",
        title: "Elite Closing Team",
        description: "World-class sales professionals close deals for you. Your job: make the connection.",
      },
    },
    {
      value: "network",
      icon: <Network className="h-4 w-4" />,
      iconLarge: <Network className="w-16 h-16 text-[#b38d38]/20" />,
      label: "Supply Network",
      content: {
        badge: "Plug & Play",
        title: "Peptide Distribution Network",
        description: "Exclusive multi-million dollar supply chain. Vetted suppliers, licensed pharmacies, pre-negotiated pricing.",
      },
    },
    {
      value: "mentorship",
      icon: <Phone className="h-4 w-4" />,
      iconLarge: <Phone className="w-16 h-16 text-[#b38d38]/20" />,
      label: "1-on-1 Access",
      content: {
        badge: "Direct Line",
        title: "Founder's 1-on-1 Strategy",
        description: "Private access to Mark Suh. High-level confidential strategy worth $25,000+.",
      },
    },
    {
      value: "playbook",
      icon: <BookOpen className="h-4 w-4" />,
      iconLarge: <BookOpen className="w-16 h-16 text-[#b38d38]/20" />,
      label: "Full Playbook",
      content: {
        badge: "Step-by-Step",
        title: "Complete Connector's Playbook",
        description: "Scripts, templates, and proven processes. Everything to facilitate high-value connections.",
      },
    },
  ]

  return (
    <section className="py-20 md:py-32 border-y overflow-hidden relative" style={{ backgroundColor: '#0c0a05', borderColor: '#544629' }}>
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#b38d38]/15 via-[#7e5a00]/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#544629]/20 via-transparent to-transparent blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center mb-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="bg-[#b38d38] text-[#0c0a05] border-[#7e5a00] font-semibold">
              Why Clinic Launch Academy?
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="max-w-5xl text-4xl md:text-5xl lg:text-6xl font-light text-white"
          >
            Your Complete <span style={{ fontFamily: 'Awesome Serif', fontStyle: 'italic' }} className="text-[#b38d38]">Business-in-a-Box</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 max-w-2xl"
          >
            Everything you need to build a six or seven-figure peptide facilitation business.
          </motion.p>
        </div>
        
        <Tabs value={tabs[activeTab].value} onValueChange={(value) => {
          const index = tabs.findIndex(tab => tab.value === value)
          handleTabChange(index)
        }} className="mt-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <TabsList className="inline-grid grid-cols-2 md:grid-cols-4 gap-2 backdrop-blur-md border border-[#544629] p-2 rounded-2xl !h-auto" style={{ backgroundColor: 'rgba(84, 70, 41, 0.15)' }}>
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-white/70 data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#b38d38] data-[state=active]:to-[#7e5a00] data-[state=active]:text-[#0c0a05] data-[state=active]:shadow-lg data-[state=active]:shadow-[#b38d38]/30 transition-all hover:text-white"
                >
                  <div className="w-4 h-4">
                    {tab.icon}
                  </div>
                  <span className="text-[10px] leading-tight">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {/* Tab Content - Magic Cards with Breathtaking Animations */}
          <div className="mx-auto max-w-4xl relative">
            <AnimatePresence mode="wait">
              {tabs.map((tab, index) => 
                activeTab === index ? (
                  <motion.div
                    key={tab.value}
                    initial={{ 
                      opacity: 0,
                      scale: 0.95,
                      y: 20,
                      rotateX: -5
                    }}
                    animate={{ 
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      rotateX: 0
                    }}
                    exit={{ 
                      opacity: 0,
                      scale: 0.95,
                      y: -20,
                      rotateX: 5
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1.0],
                      opacity: { duration: 0.4 }
                    }}
                    className="flex justify-center"
                    style={{ perspective: '1000px' }}
                  >
                    <MagicCard 
                      className="p-10 lg:p-12 w-full relative overflow-hidden"
                      gradientColor="#b38d38"
                      gradientOpacity={0.3}
                      gradientSize={300}
                    >
                      {/* Animated glow effect */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute top-0 right-0 w-40 h-40 bg-[#b38d38]/10 rounded-full blur-3xl pointer-events-none" 
                      />
                      
                      <div className="flex items-start justify-between gap-8">
                        {/* Left: Content with staggered animations */}
                        <div className="flex flex-col gap-6 flex-1">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            <Badge variant="outline" className="bg-[#b38d38] text-[#0c0a05] border-[#7e5a00] font-semibold w-fit">
                              {tab.content.badge}
                            </Badge>
                          </motion.div>
                          
                          <motion.h3 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-4xl font-light text-white"
                          >
                            {tab.content.title}
                          </motion.h3>
                          
                          <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-white/70 text-base max-w-md leading-relaxed"
                          >
                            {tab.content.description}
                          </motion.p>
                        </div>

                        {/* Right: Icon with rotation animation */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                          className="hidden md:flex items-center justify-center"
                        >
                          {tab.iconLarge}
                        </motion.div>
                      </div>
                    </MagicCard>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </Tabs>

        {/* CTA - Centered After Section */}
        <div className="flex justify-center mt-16">
          <a href="/apply">
            <ShimmerButton shimmerColor="#b38d38" shimmerDuration="2.5s">
              <span className="flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </span>
            </ShimmerButton>
          </a>
        </div>
      </div>
    </section>
  )
}
