"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import NavBar from "@/components/layout/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
// import Features from "@/components/features";
import ContactUs from "@/components/contact";
import HealthPulseFooter from "@/components/layout/footer";
import FAQ from "@/components/faqs";
import Partnership from "@/components/partners";
import Records from "@/components/record";
import HowItWorksPage from "@/components/journey";
// import ReservationForm from "@/components/sub";
// The logic must be inside a separate client component or suspended
function ScrollHandler() {
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

  return null;
}

export default function Page() {
  return (
    <>
      {/* This Suspense boundary is required for useSearchParams to work */}
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>

      <div>
    
        <NavBar />
        <Hero />
        <Services />
        < HowItWorksPage/>
        {/* <Features /> */}

        {/* <Services /> */}
        <Records />
        <Partnership />
        <ContactUs />
        <FAQ />
        {/* <ReservationForm /> */}
        {/* <Features /> */}
        {/* <HowItWorksPage /> */}
        <HealthPulseFooter />
      </div>
    </>
  );
}
