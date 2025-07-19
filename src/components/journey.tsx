"use client"
import { motion, type Variants } from "framer-motion"
import { LogIn, CalendarCheck, Stethoscope, Pill, MessageSquareMore, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: LogIn,
    title: "Download our app",
    description: "Securely access your personalized app.",
  },
  {
    icon: CalendarCheck,
    title: "Book Appointment",
    description: "Schedule a convenient time with our healthcare professionals.",
  },
  {
    icon: Stethoscope,
    title: "Meet Nurse",
    description: "Connect with a qualified nurse for your consultation.",
  },
  {
    icon: Pill,
    title: "Get Medicament",
    description: "Receive your prescribed medication quickly and easily.",
  },
  {
    icon: MessageSquareMore,
    title: "We Follow-up",
    description: "We ensure your well-being with post-appointment support.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const stepItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

const connectorArrowVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1], // Changed to cubic bezier array
    },
  },
}

// Variants for the connecting lines (fade in)
const lineVariants: Variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: [0.42, 0, 0.58, 1],
    },
  },
}

export default function HowItWorksPage() {
  const radius = 280
  const numSteps = steps.length
  const angleIncrement = 360 / numSteps
  const offset = 20
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-2xl tracking-tight text-primary sm:text-5xl md:text-6xl font-poppins">
          Your Circle of Care <span className="text-secondary">Journey</span>
        </h1>
        <p className="mt-4 text-xl text-primary font-poppins">
          Discover how easy it is to get the care you need, step by step.
        </p>
      </div>

      <motion.div
        className="mt-16 flex flex-col items-center md:hidden w-full max-w-md mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.div
            key={`step-mobile-${index}`}
            className="flex flex-col items-center text-center p-4 mb-8"
            variants={stepItemVariants}
          >
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg border-4 border-[#004D99] mb-4">
              <step.icon className="w-10 h-10 text-secondary" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2 font-poppins">{step.title}</h3>
            <p className="text-primary text-sm font-poppins">{step.description}</p>
            {index < steps.length - 1 && (
              <motion.div variants={connectorArrowVariants} className="mt-4">
                <ArrowRight className="w-8 h-8 text-secondary rotate-90" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Desktop/Medium+ Screen Layout (Circular) */}
      <div className="hidden md:flex mt-16 relative w-[650px] h-[650px] mx-auto items-center justify-center">
        <motion.svg
          className="w-full h-full"
          style={{ position: "absolute", top: 0, left: 0 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => {
            const angle1 = index * angleIncrement
            const angle2 = ((index + 1) % numSteps) * angleIncrement
            const x1 = 325 + (radius + offset) * Math.cos((angle1 - 90) * (Math.PI / 180))
            const y1 = 325 + (radius + offset) * Math.sin((angle1 - 90) * (Math.PI / 180))
            const x2 = 325 + (radius + offset) * Math.cos((angle2 - 90) * (Math.PI / 180))
            const y2 = 325 + (radius + offset) * Math.sin((angle2 - 90) * (Math.PI / 180))
            return (
              <g key={`connector-${index}`}>
                <motion.path
                  d={`M${x1},${y1} L${x2},${y2}`}
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  variants={lineVariants}
                  markerEnd="url(#arrowhead)"
                />
              </g>
            )
          })}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="13"
              markerHeight="13"
              refX="10"
              refY="6"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L10,6 L0,12 L5,6 Z" fill="#3B82F6" />
            </marker>
          </defs>
        </motion.svg>
        <motion.div className="relative w-full h-full" variants={containerVariants} initial="hidden" animate="visible">
          {steps.map((step, index) => {
            const angle = index * angleIncrement
            const cardWidth = 200 // Width of the step card
            const cardHeight = 200 // Height of the step card
            const x = radius * Math.cos((angle - 90) * (Math.PI / 180)) - cardWidth / 2
            const y = radius * Math.sin((angle - 90) * (Math.PI / 180)) - cardHeight / 2
            return (
              <motion.div
                key={`step-desktop-${index}`}
                className="absolute w-56 h-56 flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-lg border border-[#004D99]"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                variants={stepItemVariants}
              >
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-secondary text-white mb-3">
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary whitespace-nowrap font-poppins">{step.title}</h3>
                <p className="text-primary text-sm mt-2 font-poppins">{step.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
