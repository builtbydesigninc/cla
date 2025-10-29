import { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  style,
  ...props
}: Omit<BentoCardProps, 'href' | 'cta'> & { style?: React.CSSProperties }) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-2xl backdrop-blur-xl",
      className
    )}
    style={{
      background: 'rgba(179, 141, 56, 0.08)',
      border: '1px solid rgba(179, 141, 56, 0.2)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(179, 141, 56, 0.15)',
      ...style
    }}
    {...props}
  >
    {/* Golden glow background */}
    <div className="absolute inset-0 z-0">
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 100%, rgba(179, 141, 56, 0.3) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 80% 50%, rgba(179, 141, 56, 0.2) 0%, transparent 60%)',
        }}
      />
      {background}
    </div>
    <div className="relative z-10 p-8">
      <div className="pointer-events-none flex transform-gpu flex-col gap-3 transition-all duration-300">
        <Icon className="h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" style={{ color: '#b38d38' }} />
        <h3 className="text-2xl font-bold uppercase tracking-tight" style={{ color: '#b38d38' }}>
          {name}
        </h3>
        <p className="max-w-lg text-base leading-relaxed" style={{ color: '#f2f3f6' }}>{description}</p>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 z-5 transform-gpu transition-all duration-300 group-hover:bg-[#b38d38]/[.08]" />
  </div>
)

export { BentoCard, BentoGrid }
