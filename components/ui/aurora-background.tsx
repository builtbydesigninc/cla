"use client"

import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
  showRadialGradient?: boolean
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen items-center justify-center text-slate-950 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--gold-gradient:repeating-linear-gradient(100deg,#7e5a00_0%,#b38d38_7%,transparent_10%,transparent_12%,#7e5a00_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,#0c0a05_0%,#544629_7%,transparent_10%,transparent_12%,#0c0a05_16%)]
            [--aurora:repeating-linear-gradient(100deg,#b38d38_10%,#7e5a00_15%,#b38d38_20%,#544629_25%,#7e5a00_30%)]
            [background-image:var(--gold-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--gold-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  )
}
