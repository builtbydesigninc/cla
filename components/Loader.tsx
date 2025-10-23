'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: '#0c0a05' }}
      onAnimationComplete={(definition: any) => {
        if (definition.opacity === 0) {
          const loader = document.getElementById('cla-loader')
          if (loader) {
            loader.style.display = 'none'
          }
        }
      }}
      id="cla-loader"
    >
      <div className="relative px-4">
        <img 
          src="/cla-logo.png" 
          alt="CLA" 
          className="h-20 sm:h-24 md:h-32 w-auto relative z-10 max-w-[90vw]"
        />
        
        {/* Scanner effect - Gold */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            animation: 'scan 2s ease-in-out',
          }}
        >
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#b38d38] to-transparent opacity-90 blur-sm" />
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#7e5a00] to-transparent" />
        </div>
        
        {/* Loading text */}
        <p className="text-white/60 text-sm mt-6 text-center tracking-wider font-light">
          Loading...
        </p>
      </div>

    </motion.div>
  )
}

export default Loader

