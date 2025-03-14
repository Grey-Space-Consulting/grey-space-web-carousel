
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePackagesSection from "@/components/sections/ServicePackagesSection";
import AdditionalServicesSection from "@/components/sections/AdditionalServicesSection";
import CustomSolutionCTA from "@/components/CustomSolutionCTA";

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Our Services
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Our comprehensive operations technology services are designed to transform your business from the inside out.
            </p>
          </div>
          
          <ServicePackagesSection />
          <AdditionalServicesSection />
          <CustomSolutionCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
