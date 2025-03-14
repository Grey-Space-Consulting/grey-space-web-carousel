
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Create individual refs for each section
  const testimonialsSectionRef = useRef<HTMLElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  // Collect all refs for the intersection observer
  const sectionRefs = [
    testimonialsSectionRef,
    servicesSectionRef,
    ctaSectionRef
  ];

  useEffect(() => {
    setIsLoaded(true);

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
      <TestimonialsSection sectionRef={testimonialsSectionRef} />
      <ServicesSection sectionRef={servicesSectionRef} />
      <CTASection sectionRef={ctaSectionRef} />
      
      <Footer />
    </div>
  );
};

export default Index;
