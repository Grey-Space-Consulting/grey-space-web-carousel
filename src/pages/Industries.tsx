
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryTabs from "@/components/industries/IndustryTabs";
import IndustriesCTA from "@/components/industries/IndustriesCTA";

const Industries = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Add fade-in effect when page loads
    setIsLoaded(true);
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className={`pt-28 pb-24 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
