"use client";

import {
  Brain,
  Video,
  Pill,
  MapPin,
  Building2,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion"; // ✅ Required for motion.div

const services = [
  {
    id: 1,
    title: "Clinic Finder",
    description:
      "Locate clinics around you, view open hours and make appointments.",
    icon: Building2,
    gradientClass: "gradient-accent-5",
    badge: "Instant Booking",
  },
  {
    id: 2,
    title: "Pharmacy Finder",
    description: "Find nearby pharmacies easily with real-time directions.",
    icon: MapPin,
    gradientClass: "gradient-accent-4",
    badge: "Real-time",
  },
  {
    id: 5,
    title: "Mental Pulse (Psychologist Booking)",
    description:
      "Ask health questions in your language (Kinyarwanda, French, or English) via text or voice.",
    icon: Brain,
    gradientClass: "gradient-accent-1",
    badge: "AI Powered",
  },
  {
    id: 4,
    title: "Telemedicine Appointments",
    description:
      "Connect with healthcare professionals remotely through secure video consultations.",
    icon: Video,
    gradientClass: "gradient-secondary",
    badge: "24/7 Available",
  },
  {
    id: 3,
    title: "Pill Reminders",
    description:
      "Always receive timely reminders to take medicine with accurate doses.",
    icon: Pill,
    gradientClass: "gradient-accent-3",
    badge: "Smart Alerts",
  },
];

export default function ServicesComponent() {
  return (
    <section id="services" className="scroll-mt-20">
      <div className="bg-background py-8 sm:py-16 px-4 font-poppins">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-3 sm:mb-5"
          >
            <h1 className="text-xl sm:text-3xl relative bottom-4 lg:text-4xl font-bold">
              Our <span className="text-secondary">Services</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-background shadow-lg">
                      {service.badge}
                    </span>
                  </div>

                  <div className="p-8">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl ${service.gradientClass} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-full h-full text-secondary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300 mb-4 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-primary/70 leading-relaxed text-sm mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <div className="flex items-center text-secondary font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>

                  {/* Blue hover lines */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-500" />
                  <div className="absolute left-0 top-0 h-0 w-1 bg-secondary group-hover:h-full transition-all duration-500" />
                  <div className="absolute right-0 top-0 h-0 w-1 bg-secondary group-hover:h-full transition-all duration-500" />

                  {/* Shine effects */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] delay-200" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[3000ms] delay-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
