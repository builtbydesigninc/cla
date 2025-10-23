import { cn } from "@/lib/utils"
import { Video, Download, Award, Lightbulb, Users, Headphones } from "lucide-react"

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Video Classes",
      description: "Premium video lessons from world-class founders and executives.",
      icon: <Video className="w-8 h-8" />,
    },
    {
      title: "Downloadable Handbooks",
      description: "Complement the online experience with downloadable handbooks.",
      icon: <Download className="w-8 h-8" />,
    },
    {
      title: "Certificate",
      description: "Earn a certificate upon completion.",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Interactive Case Studies",
      description: "Apply your knowledge with real-world case studies from successful clinics.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Connector Community",
      description: "Join a network of successful facilitators building their businesses.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "1:1 Support",
      description: "Personal support and strategy sessions to ensure your success.",
      icon: <Headphones className="w-8 h-8" />,
    },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-[#544629]",
        (index === 0 || index === 3) && "lg:border-l border-[#544629]",
        index < 3 && "lg:border-b border-[#544629]"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#b38d38]/5 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#b38d38]/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#b38d38]">
        {icon}
      </div>
      <div className="text-lg font-light mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#544629] group-hover/feature:bg-[#b38d38] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/70 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

