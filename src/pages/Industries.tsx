
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryTabs from "@/components/industries/IndustryTabs";
import IndustriesCTA from "@/components/industries/IndustriesCTA";

const Industries = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-28 pb-24">
        {/* Hero Section */}
        <IndustriesHero />
        
        {/* Industry Tabs Section */}
        <IndustryTabs />
        
        {/* CTA Section */}
        <IndustriesCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Industries;
