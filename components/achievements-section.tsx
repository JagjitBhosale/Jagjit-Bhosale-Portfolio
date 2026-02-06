"use client"

import { useEffect, useState } from "react"
import { Trophy, Users, Award, Star, Medal } from "lucide-react"
import Image from "next/image"

export function AchievementsSection() {
  const achievements = [
    {
      title: "Best Solution Award",
      event: "InnovateYou Techathon 2.0",
      position: "1st Place",
      participants: "1200+ participants (327+ teams)",
      project: "AI-powered civic-tech solution",
      description:
        "Ranked 1st out of 327+ teams with an innovative AI-powered civic-tech solution that impressed judges with its real-world impact and technical excellence.",
      images: ["/images/Techathon.jpg", "/images/Techathon1.jpg"],
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
      date: "2024",
      featured: true,
    },
    {
      title: "First Place Winner",
      event: "COEP CSI INSPIRON 4.0 Hackathon",
      position: "1st Place",
      participants: "Company-sponsored challenge",
      project: "AlphaGen - AI Content Creation Platform",
      description:
        "Won the company-sponsored challenge by E6Data & Mira with AlphaGen, an AI platform for content creators featuring auto-generation capabilities.",
      images: ["/images/COEPhackathon.jpg", "/images/COEPhackathon1.jpg", "/images/COEPhackathon2.jpg"],
      icon: Medal,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
      date: "2025",
      featured: true,
    },
    {
      title: "Third Place Achievement",
      event: "MKSSS Cummins×Mastercard Hackathon",
      position: "3rd Place",
      participants: "Women's college hackathon",
      project: "EcoSmart - Civic Engagement Platform",
      description:
        "Built EcoSmart for women's college hackathon, receiving praise for its civic engagement impact and innovative approach to community problem-solving.",
      images: ["/images/Cummins1.jpg", "/images/Cummins2.jpg", "/images/Cummins3.jpg"],
      icon: Award,
      color: "text-amber-400",
      bgColor: "bg-amber-500/20",
      borderColor: "border-amber-500/30",
      date: "2025",
      featured: false,
    },
  ]

  const stats = [
    { label: "Hackathons Won", value: "3+", icon: Trophy },
    { label: "First Place Wins", value: "2", icon: Medal },
    { label: "Recognition Awards", value: "Multiple", icon: Star },
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-900/20 gsap-fade-in">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gsap-slide-up">
            My <span className="text-orange-400">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto gsap-slide-up">
            Recognized for innovation and technical excellence in competitive hackathons and tech competitions
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 gsap-scale">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-border p-6 rounded-lg text-center hover:bg-orange-400/5 transition-colors"
            >
              <stat.icon className="h-8 w-8 text-orange-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center gsap-slide-up">Major Wins & Recognition</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group glass-border-enhanced rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 gsap-scale"
                >
                  {/* Achievement Image */}
                  <div className="relative h-64 overflow-hidden">
                    <AchievementImageCarousel
                      images={achievement.images}
                      alt={`${achievement.title} at ${achievement.event}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Position Badge */}
                    <div
                      className={`absolute top-4 left-4 flex items-center gap-2 glass-border ${achievement.bgColor} px-3 py-2 rounded-full ${achievement.borderColor} border`}
                    >
                      <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                      <span className={`${achievement.color} font-bold`}>{achievement.position}</span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 glass-border bg-gray-900/60 px-3 py-1 rounded-full">
                      <span className="text-white text-sm">{achievement.date}</span>
                    </div>

                    {/* Event Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-bold text-white mb-1">{achievement.title}</h4>
                      <p className="text-orange-400 font-medium">{achievement.event}</p>
                    </div>
                  </div>

                  {/* Achievement Details */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{achievement.participants}</span>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-white mb-1">Project: {achievement.project}</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                    </div>

                    {/* Achievement Highlight */}
                    <div className={`${achievement.bgColor} ${achievement.borderColor} border rounded-lg p-3`}>
                      <div className="flex items-center gap-2">
                        <Trophy className={`h-4 w-4 ${achievement.color}`} />
                        <span className={`${achievement.color} font-medium text-sm`}>
                          Outstanding Achievement in Innovation & Technical Excellence
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type AchievementImageCarouselProps = {
  images: string[]
  alt: string
  small?: boolean
}

function AchievementImageCarousel({ images, alt, small = false }: AchievementImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [images])

  const heightClass = small ? "h-48 md:h-32" : "h-64"

  return (
    <div className={`relative w-full ${heightClass}`}>
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        </div>
      ))}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-4 bg-orange-400" : "w-2 bg-white/40"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
