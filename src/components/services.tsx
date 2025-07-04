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
        ease: "easeOut", // Using string instead of array
      },
    },
  }

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="text-center mb-12"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Our <span className="text-secondary">Services</span>
        </h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <Card className="h-[400px] w-[380px] shadow-[0_-4px_16px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_-6px_20px_rgba(0,0,0,0.2),0_12px_32px_rgba(0,0,0,0.15)] transition-shadow duration-300 border-0">
              <CardBody className="p-4 text-center flex flex-col items-center justify-between h-full">
                <div className="flex-shrink-0 mt-2">
                  <Image
                    src={character || "/placeholder.svg"}
                    alt={service.title}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center items-center space-y-4 px-2 relative bottom-25">
                  <h3 className="text-lg font-semibold text-secondary leading-tight text-center">{service.title}</h3>
                  <p className="text-sm text-primary leading-relaxed text-center">{service.description}</p>
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