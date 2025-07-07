"use client"

import { Card, CardBody } from "@heroui/card"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import character from "../assets/Character.png"

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Chat with Virtual Health Assistant",
      description: "Ask health questions in your language (Kinyarwanda, French, or English) via text or voice.",
    },
    {
      id: 2,
      title: "Get Medication Reminders",
      description: "Always receive timely reminders to take medicine with accurate doses.",
    },
    {
      id: 3,
      title: "Use Health Services without Internet",
      description: "Get access to key features using USSD codes, even without a smartphone.",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-4 px-4">
          Our <span className="text-secondary">Services</span>
        </h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 place-items-center"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
            className="w-full max-w-sm"
          >
            <Card className="h-[350px] sm:h-[380px] md:h-[400px] w-full shadow-[0_-4px_16px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_-6px_20px_rgba(0,0,0,0.2),0_12px_32px_rgba(0,0,0,0.15)] transition-shadow duration-300 border-0">
              <CardBody className="p-4 sm:p-6 text-center flex flex-col items-center justify-between h-full">
                <div className="flex-shrink-0 mt-2">
                  <Image
                    src={character || "/placeholder.svg"}
                    alt={service.title}
                    width={100}
                    height={100}
                    className="object-contain sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px]"
                  />
                </div>
                <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-4 px-2 flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary leading-tight text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-primary leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional Navigation Arrows */}
      {/*
      <div className="flex justify-center space-x-4 mt-8">
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>
      */}
    </div>
  )
}

export default Services