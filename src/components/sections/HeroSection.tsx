
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      ref={heroRef}
      className={cn(
        "min-h-screen flex items-center justify-center pt-20 px-6 md:px-10 relative overflow-hidden transition-opacity duration-1000 opacity-0",
        isLoaded && "opacity-100"
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/40 z-0" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* First circle - larger movement, slower */}
        <div 
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/5 animate-float-circle"
          style={{ 
            animation: "float-circle 20s ease-in-out infinite",
            animationDelay: "0s" 
          }} 
        />
        
        {/* Second circle - different direction, medium speed */}
        <div 
          className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-accent/5"
          style={{ 
            animation: "float-circle-alt 15s ease-in-out infinite",
            animationDelay: "1s" 
          }} 
        />
        
        {/* Third circle - smaller, faster movement */}
        <div 
          className="absolute top-2/3 left-1/2 h-48 w-48 rounded-full bg-primary/3"
          style={{ 
            animation: "float-circle-small 10s ease-in-out infinite",
            animationDelay: "2s" 
          }} 
        />
      </div>
      
      <div className="max-w-7xl mx-auto text-center z-10 relative">
        <div 
          className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6 animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          Operations Technology Consultants
        </div>
        <h1 
          className="heading-xl mb-6 max-w-4xl mx-auto text-balance animate-fade-in"
          style={{ animationDelay: "500ms" }}
        >
          Transforming Operations Through <span className="text-gradient">Innovative Technology</span>
        </h1>
        <p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-fade-in"
          style={{ animationDelay: "700ms" }}
        >
          We help companies optimize their operational processes with cutting-edge technology solutions tailored to their unique challenges.
        </p>
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "900ms" }}
        >
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
