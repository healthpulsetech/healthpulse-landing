"use client"

import featureImage from "../assets/feature.png"
import { Card, CardBody } from "@heroui/card"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import { Activity, Users, Database, BarChart3 } from "lucide-react"

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Symptom Checker",
      description: "Support possible health conditions and provides preventive health tips and emergency hotlines",
      icon: Activity,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Digital Tools for CHWs",
      description: "Helps Community Health Workers track patients and report issues easily.",
      icon: Users,
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      title: "Real-Time Hospital Data",
      description: "Get queue updates, available services, and services near you.",
      icon: Database,
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      id: 4,
      title: "Admin Dashboard for Clinics",
      description: "Hospitals manage appointments, medical records and inventory all in one place.",
      icon: BarChart3,
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="features" className="scroll-mt-20 font-poppins">
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Key <span className="text-secondary">Features</span>
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Feature Image */}
          <motion.div variants={imageVariants} initial="hidden" animate="visible" className="flex-1 flex justify-center">
            <Image
              src={featureImage || "/placeholder.svg"}
              alt="Healthcare professionals"
              width={500}
              height={400}
              className="object-contain max-w-full h-auto"
            />
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl"
          >
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                    <CardBody className="p-6 space-y-4">
                      <div className={`${feature.color} p-3 rounded-lg w-fit`}>
                        <IconComponent size={24} className={feature.iconColor} />
                      </div>

                      <h3 className="text-lg font-semibold text-gray-800 leading-tight">{feature.title}</h3>

                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Features