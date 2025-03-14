
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      <TestimonialsSection sectionRef={(el) => (sectionRefs.current[0] = el)} />
      <ServicesSection sectionRef={(el) => (sectionRefs.current[1] = el)} />
      <TechnologiesSection sectionRef={(el) => (sectionRefs.current[2] = el)} />
      <PartnersSection sectionRef={(el) => (sectionRefs.current[3] = el)} />
      <CTASection sectionRef={(el) => (sectionRefs.current[4] = el)} />
      
      <Footer />
    </div>
  );
};

export default Index;
