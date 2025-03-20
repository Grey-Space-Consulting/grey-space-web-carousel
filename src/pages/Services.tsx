
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
    window.scrollTo(0, 0);
  }, []);
  
  return <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ServicePackagesSection />
          <AdditionalServicesSection />
          <CustomSolutionCTA />
        </div>
      </main>
      
      <Footer />
    </div>;
};

export default Services;
