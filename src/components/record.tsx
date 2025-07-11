"use client"

import { useState, useEffect, useRef } from "react"

const Records = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    clinics: 0,
    doctors: 0,
    pharmacies: 0,
    downloads: 0,
  })

  const sectionRef = useRef<HTMLDivElement>(null)

  const targetValues = {
    clinics: 300,
    doctors: 100,
    pharmacies: 500,
    downloads: 1000,
  }

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animated counter effect
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60 // 60 FPS
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setCounters({
        clinics: Math.floor(targetValues.clinics * easeOutQuart),
        doctors: Math.floor(targetValues.doctors * easeOutQuart),
        pharmacies: Math.floor(targetValues.pharmacies * easeOutQuart),
        downloads: Math.floor(targetValues.downloads * easeOutQuart),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounters(targetValues)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  const StatCard = ({
    value,
    label,
    delay,
    suffix = "",
  }: {
    value: number
    label: string
    delay: number
    suffix?: string
  }) => (
    <div
      className={`
                group relative overflow-hidden
                bg-gradient-to-br from-white/15 to-white/5 
                backdrop-blur-md rounded-2xl p-4 text-center
                border border-white/20 shadow-xl
                hover:from-white/25 hover:to-white/10
                hover:border-white/30 hover:shadow-2xl
                hover:-translate-y-2 hover:scale-105
                transition-all duration-500 ease-out
                cursor-pointer
                ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"}
            `}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full animate-float" />
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-300/30 rounded-full animate-float-delayed" />
      </div>

      <div className="relative z-10">
        <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono tracking-tight">
          <span className="inline-block">
            {value.toLocaleString()}
            {suffix}
          </span>
        </div>
        <div className="text-sm md:text-base text-blue-100 font-medium tracking-wide">{label}</div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
    </div>
  )

  return (
    <div className="bg-secondary py-8 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl animate-bounce-slow" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={sectionRef}>
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1
            className={`
                        text-3xl md:text-5xl font-bold text-white mb-2 
                        bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent
                        ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}
                    `}
          >
            Our Track Record
          </h1>
          <p
            className={`
                        text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed
                        ${isVisible ? "animate-fade-in-up-delayed" : "opacity-0 translate-y-8"}
                    `}
          >
            See how we've grown and made a positive impact in healthcare delivery across the region.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatCard value={counters.clinics} label="Total Clinics" delay={100} />
          <StatCard value={counters.doctors} label="Total Doctors" delay={200} />
          <StatCard value={counters.pharmacies} label="Total Pharmacies" delay={300} />
          <StatCard value={counters.downloads} label="Monthly App Downloads" delay={400} suffix="+" />
        </div>

        {/* Additional animated elements */}
        <div
          className={`
                    mt-6 text-center
                    ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}
                `}
          style={{ animationDelay: "600ms", animationFillMode: "both" }}
        >
          <div className="inline-flex items-center space-x-2 text-blue-200 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <span>Growing every day</span>
          </div>
        </div>
      </div>

      <style jsx>{`
                @keyframes fadeInUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }

                @keyframes slideUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(40px) scale(0.95); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0) scale(1); 
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(180deg); }
                }

                @keyframes floatDelayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(-180deg); }
                }

                @keyframes pulseDelayed {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.05); }
                }

                @keyframes bounceSlow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out;
                }

                .animate-fade-in-up-delayed {
                    animation: fadeInUp 0.8s ease-out 0.3s both;
                }

                .animate-slide-up {
                    animation: slideUp 0.8s ease-out;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: floatDelayed 4s ease-in-out infinite 1s;
                }

                .animate-pulse-delayed {
                    animation: pulseDelayed 4s ease-in-out infinite 2s;
                }

                .animate-bounce-slow {
                    animation: bounceSlow 6s ease-in-out infinite;
                }
            `}</style>
    </div>
  )
}

export default Records
