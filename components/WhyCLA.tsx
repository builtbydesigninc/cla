'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Network, Phone, BookOpen, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MagicCard } from "@/components/ui/magic-card"
import { motion } from "framer-motion"
import { ShimmerButton } from "./ui/shimmer-button"

export default function WhyCLA() {
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
    <section className="py-20 md:py-32 border-y overflow-hidden" style={{ backgroundColor: '#0c0a05', borderColor: '#544629' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            Everything you need to start earning $100k+ per month connecting clinics with peptide suppliers.
          </motion.p>
        </div>
        
        <Tabs defaultValue={tabs[0].value} className="mt-8">
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
          
          {/* Tab Content - Magic Cards with Initial Glow */}
          <div className="mx-auto max-w-4xl">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="flex justify-center"
              >
                <MagicCard 
                  className="p-10 lg:p-12 w-full relative"
                  gradientColor="#b38d38"
                  gradientOpacity={0.3}
                  gradientSize={300}
                >
                  {/* Initial glow in top-right */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#b38d38]/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="flex items-start justify-between gap-8">
                    {/* Left: Content */}
                    <div className="flex flex-col gap-6 flex-1">
                      <Badge variant="outline" className="bg-[#b38d38] text-[#0c0a05] border-[#7e5a00] font-semibold w-fit">
                        {tab.content.badge}
                      </Badge>
                      <h3 className="text-3xl md:text-4xl font-light text-white">
                        {tab.content.title}
                      </h3>
                      <p className="text-white/70 text-base max-w-md leading-relaxed">
                        {tab.content.description}
                      </p>
                      <a 
                        href="#enroll"
                        className="mt-4 inline-flex items-center gap-2 text-[#b38d38] hover:text-white transition-colors group w-fit"
                      >
                        <span className="text-sm font-semibold">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Right: Icon (placeholder for graphic) */}
                    <div className="hidden md:flex items-center justify-center">
                      {tab.iconLarge}
                    </div>
                  </div>
                </MagicCard>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* CTA - Centered After Section */}
        <div className="flex justify-center mt-16">
          <a href="#enroll">
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
