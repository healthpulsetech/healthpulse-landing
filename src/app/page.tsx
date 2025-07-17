"use client"
import NavBar from "@/components/layout/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import ContactUs from "@/components/contact"
import HealthPulseFooter from "@/components/layout/footer"
import FAQ from "@/components/faqs"
import Partnership from "@/components/partners"
import Records from "@/components/record"
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
export default function Page(){
  const params = useSearchParams();

  useEffect(() => {
    const sectionId = params.get("scrollTo");
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [params]);

  return(
    
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Services/>
      <Records />
      <Partnership />
      <ContactUs />
      {/* <Partnership /> */}
      <FAQ />
      <HealthPulseFooter />

    
     
    </div>
  )
}