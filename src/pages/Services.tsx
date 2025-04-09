
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePackagesSection from "@/components/sections/ServicePackagesSection";
import AdditionalServicesSection from "@/components/sections/AdditionalServicesSection";
import CustomSolutionCTA from "@/components/CustomSolutionCTA";
import { Button } from "@/components/ui/button";

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
          <div className="flex justify-end mb-8">
            <Link to="/services-one-pager">
              <Button variant="outline" className="flex items-center gap-2">
                <FileDown size={16} />
                Download Services One-Pager
              </Button>
            </Link>
          </div>
          <ServicePackagesSection />
          <AdditionalServicesSection />
          <CustomSolutionCTA />
        </div>
      </main>
      
      <Footer />
    </div>;
};

export default Services;
