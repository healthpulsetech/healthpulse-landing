"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@heroui/react"
import { motion } from "framer-motion"
import rafiki from "@/assets/rafiki.jpg"

const Hero: React.FC = () => {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="flex flex-col lg:flex-row items-center justify-center pt-0 px-4 font-sans">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-8 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-md lg:max-w-lg text-center lg:text-left">
            <motion.h1
              className="text-xl sm:text-lg lg:text-lg xl:text-3xl font-bold mb-4 lg:mb-6 text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: [0, -5, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                y: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              Welcome to{" "}
              <motion.span
                className="text-secondary"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [1, 0.7, 1],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.5 },
                  scale: {
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.5,
                  },
                }}
              >
                HealthPulse
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-sm lg:text-sm text-primary mb-6 lg:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: [1, 0.9, 1],
                y: 0,
              }}
              transition={{
                opacity: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                },
                y: { duration: 0.8, delay: 0.4 },
              }}
            >
              We empower individuals and healthcare workers with intelligent, locally adaptable tools that enhance
              preventive care, streamline health services, and improve patient outcomes in underserved communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                as="a"
                size="lg"
                className="bg-secondary hover:scale-105 text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transform transition-all duration-300"
              >
                <a href="/signup">
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
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    Get Started
                  </motion.span>
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{
                      x: [0, 5, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-8 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full max-w-md lg:max-w-lg"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <Image
              src={rafiki}
              alt="HealthPulse illustration"
              width={500}
              height={500}
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
