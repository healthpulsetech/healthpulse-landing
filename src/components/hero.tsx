"use client"

import type React from "react"
import { Button } from "@heroui/react"
import { motion } from "framer-motion"

const Hero: React.FC = () => {
  return (
    <section id="home" className="scroll-mt-20 relative overflow-hidden font-poppins">
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/pulses.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Optional animated blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl animate-bounce-slow" />
      </div>

      {/* Foreground Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center pt-16 pb-20 px-4 relative z-10 max-w-7xl mx-auto">
        {/* Left: Text */}
        <motion.div
          className="w-full lg:w-1/2 p-4 lg:p-8 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, -5, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
          >
            Empowering Health with HealthPulse
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: [1, 0.9, 1], y: 0 }}
            transition={{
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 },
              y: { duration: 0.8, delay: 0.4 },
            }}
          >
            We provide intelligent, locally adaptable tools to enhance preventive care, streamline healthcare access,
            and improve outcomes in underserved communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              as="a"
              size="lg"
              className="bg-white text-secondary hover:bg-blue-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300"
              href="#contactus"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 10px rgba(255,255,255,0.3)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Get Started
              </motion.span>
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0], rotate: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Optional mockup or illustration */}
        <motion.div
          className="w-full lg:w-1/2 p-4 lg:p-8 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full max-w-md lg:max-w-lg"
            animate={{ y: [0, -10, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
           
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulseDelayed {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-pulse-delayed {
          animation: pulseDelayed 4s ease-in-out infinite 2s;
        }

        .animate-bounce-slow {
          animation: bounceSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
