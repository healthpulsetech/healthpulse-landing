"use client"
import NavBar from "@/components/layout/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import ContactUs from "@/components/contact"
import HealthPulseFooter from "@/components/layout/footer"
import FAQ from "@/components/faqs"

export default function Page(){
  return(
    
    <div>
      <NavBar />
      <Hero />
      <Services/>
      <Features />
      <ContactUs />
      <FAQ />
      <HealthPulseFooter />
    
     
    </div>
  )
}