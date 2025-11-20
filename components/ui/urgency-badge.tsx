'use client'

import { motion, useTransform, useMotionValue, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

interface UrgencyBadgeProps {
  spotsFilled?: number
  totalSpots?: number
  variant?: 'hero' | 'header' | 'compact'
}

export function UrgencyBadge({ 
  spotsFilled = 87, 
  totalSpots = 100,
  variant = 'hero'
}: UrgencyBadgeProps) {
  const percentage = (spotsFilled / totalSpots) * 100
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayCount, setDisplayCount] = useState(0)

  useEffect(() => {
    if (variant === 'hero') {
      const controls = animate(count, spotsFilled, { duration: 2, delay: 0.5, ease: "easeOut" })
      return controls.stop
    }
  }, [count, spotsFilled, variant])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayCount(latest)
    })
    return unsubscribe
  }, [rounded])
  
  if (variant === 'header') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-1.5 text-xs"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-white/60 font-light">
          {spotsFilled}/{totalSpots} filled
        </span>
      </motion.div>
    )
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border border-[#544629]"
        style={{ backgroundColor: 'rgba(84, 70, 41, 0.2)' }}
      >
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-white/70 text-xs font-light">
          {spotsFilled}/{totalSpots} spots filled
        </span>
      </motion.div>
    )
  }

  // Hero variant - Sleek single line
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-md border border-[#544629]/60"
      style={{ backgroundColor: 'rgba(84, 70, 41, 0.15)' }}
    >
      {/* Pulse Indicator */}
      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
      
      {/* Text */}
      <span className="text-white/90 text-sm font-light whitespace-nowrap">
        <span className="font-semibold text-[#b38d38]">{displayCount}</span> out of <span className="text-white/70">{totalSpots}</span> spots filled
      </span>
      
      {/* Mini Progress Bar */}
      <div className="w-20 h-1 bg-[#0c0a05]/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#b38d38] to-[#7e5a00]"
        />
      </div>
    </motion.div>
  )
}

