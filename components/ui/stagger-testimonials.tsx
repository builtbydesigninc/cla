"use client"

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const SQRT_5000 = Math.sqrt(5000)

const testimonials = [
  {
    tempId: 0,
    testimonial: "I have completed multiple, post-graduate certificates in my life and always felt relief at the end. This time, I felt a sense of loss when I had no new classes to attend.",
    by: "Ted Burgess, Business Owner",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=200&fit=crop"
  },
  {
    tempId: 1,
    testimonial: "Augment is interesting, engaging and easy to digest. It is designed with busy people in mind - lessons are bite-sized, meaning that you can make progress each day.",
    by: "Hester Scotton, CFO at Potter Clarkson",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=200&fit=crop"
  },
  {
    tempId: 2,
    testimonial: "I found the program to be rich in practical insights that are highly applicable in real-world business scenarios. The content bridges the gap between theory and execution.",
    by: "Rama Linga, Head of Distribution",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop"
  },
  {
    tempId: 3,
    testimonial: "I highly recommend this program to anyone who wants a practical approach focused on relevant information to further their business career.",
    by: "Christian Scull, Business Owner",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=200&fit=crop"
  },
  {
    tempId: 4,
    testimonial: "Balancing fintech, motherhood and entrepreneurship felt hard, but Augment's self-paced MBA made learning flexible and energizing.",
    by: "Faye Ana-Corpuz, Head of Growth",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=200&fit=crop"
  },
  {
    tempId: 5,
    testimonial: "Learning valuable lessons on my terms and timetable was incredible. I gained real, applicable insights into key areas like finding the right business model.",
    by: "Shimmy Balsam, Software Engineer",
    imgSrc: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=200&fit=crop"
  },
  {
    tempId: 6,
    testimonial: "Being part of Augment is amazing! You don't just get education, but you enter a community that is growing rapidly and internationally.",
    by: "Andy Bacciarini, Entrepreneur",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=200&fit=crop"
  },
  {
    tempId: 7,
    testimonial: "I can still recall the feeling I had the first time I took the Augment trial module. I thought, 'There's no way I'm going to let this go'. I felt like I found gold!",
    by: "Victory Oluwagbemiga, Aspiring Entrepreneur",
    imgSrc: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=200&fit=crop"
  },
  {
    tempId: 8,
    testimonial: "Augment MBA is a great program. I've honestly learned more from Augment MBA than any other coursework I've taken, including a traditional MBA that I started but didn't finish.",
    by: "Gene Hemmerich, Business Owner",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=200&fit=crop"
  },
  {
    tempId: 9,
    testimonial: "From developing a deep understanding of emerging technologies to exploring new business models, the program equipped me with the skills I needed.",
    by: "Gary Lamach II, Director at AICPA",
    imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=200&fit=crop"
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: typeof testimonials[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-black text-white border-black" 
          : "z-0 bg-white text-gray-800 border-[#544629] hover:border-[#b38d38]"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #000" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(',')[0]}
        className="mb-4 h-14 w-12 bg-gray-200 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px #fff"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-white" : "text-gray-800"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-gray-300" : "text-gray-600"
      )}>
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 600, backgroundColor: '#0c0a05' }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-gradient-to-r from-[#b38d38] to-[#7e5a00] border-2 border-[#544629] text-[#0c0a05] hover:shadow-lg hover:shadow-[#b38d38]/30",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-gradient-to-r from-[#b38d38] to-[#7e5a00] border-2 border-[#544629] text-[#0c0a05] hover:shadow-lg hover:shadow-[#b38d38]/30",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}