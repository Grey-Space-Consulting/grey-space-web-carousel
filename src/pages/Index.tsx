
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import ServicesSection from "@/components/sections/ServicesSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Create individual refs for each section
  const testimonialsSectionRef = useRef<HTMLElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);
  const certificationsSectionRef = useRef<HTMLElement>(null);
  const technologiesSectionRef = useRef<HTMLElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  // Collect all refs for the intersection observer
  const sectionRefs = [
    testimonialsSectionRef,
    servicesSectionRef,
    certificationsSectionRef,
    technologiesSectionRef,
    ctaSectionRef
  ];

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all section refs
    sectionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      // Cleanup: unobserve all section refs
      sectionRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      <ServicesSection sectionRef={servicesSectionRef} />
      <TestimonialsSection sectionRef={testimonialsSectionRef} />
      <CertificationsSection sectionRef={certificationsSectionRef} />
      <TechnologiesSection sectionRef={technologiesSectionRef} />
      <CTASection sectionRef={ctaSectionRef} />
      
      <Footer />
    </div>
  );
};

export default Index;
