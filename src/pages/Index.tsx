
import { useState, useEffect, useRef } from "react";
import { Building, ChevronRight, Cog, Globe, Lightbulb, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FeatureCard from "@/components/FeatureCard";
import TechGrid from "@/components/TechGrid";
import PartnerLogos from "@/components/PartnerLogos";

const features = [
  {
    title: "Strategic Consulting",
    description: "We analyze your operational challenges and create tailored technology strategies that align with your business goals.",
    icon: Lightbulb
  },
  {
    title: "Process Optimization",
    description: "Our experts streamline your workflows and implement automation to eliminate inefficiencies and reduce operational costs.",
    icon: Cog
  },
  {
    title: "Technology Integration",
    description: "Seamlessly connect your systems and data across the organization to create a unified operational ecosystem.",
    icon: Building
  },
  {
    title: "Global Implementation",
    description: "With experience across industries and regions, we deliver consistent results for operations around the world.",
    icon: Globe
  },
  {
    title: "Change Management",
    description: "We guide your team through technological transitions with comprehensive training and support programs.",
    icon: Users
  }
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
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
      
      {/* Hero Section */}
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
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "0s" }} />
          <div className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-accent/5 animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-2/3 left-1/2 h-48 w-48 rounded-full bg-primary/3 animate-float" style={{ animationDelay: "2s" }} />
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
            <a 
              href="#services" 
              className="px-8 py-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Learn More <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        id="testimonials"
        ref={(el) => (sectionRefs.current[0] = el)}
        className="section-padding px-0 opacity-0"
      >
        <div className="max-w-7xl mx-auto mb-12 px-6 md:px-10">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
            Client Success Stories
          </div>
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl">
            We've helped organizations across industries optimize their operations and achieve remarkable results.
          </p>
        </div>
        
        <TestimonialCarousel />
      </section>
      
      {/* Features/Services Section */}
      <section 
        id="services"
        ref={(el) => (sectionRefs.current[1] = el)}
        className="section-padding px-6 md:px-10 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Our Services
            </div>
            <h2 className="heading-lg mb-4">How We Help You Succeed</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive operations technology services are designed to transform your business from the inside out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section 
        id="technologies"
        ref={(el) => (sectionRefs.current[2] = el)}
        className="section-padding px-6 md:px-10 bg-card/30 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Technology Stack
            </div>
            <h2 className="heading-lg mb-4">Technologies We Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our expertise spans across a wide range of enterprise technologies and platforms to meet your operational needs.
            </p>
          </div>
          
          <TechGrid />
        </div>
      </section>
      
      {/* Partners Section */}
      <section 
        id="partners"
        ref={(el) => (sectionRefs.current[3] = el)}
        className="section-padding px-6 md:px-10 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Strategic Alliances
            </div>
            <h2 className="heading-lg mb-4">Our Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We collaborate with industry leaders to provide you with the best technological solutions.
            </p>
          </div>
          
          <PartnerLogos />
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        id="contact"
        ref={(el) => (sectionRefs.current[4] = el)}
        className="section-padding px-6 md:px-10 opacity-0"
      >
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 text-center">
          <h2 className="heading-md mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how Grey Space can help optimize your operational technology and drive business growth.
          </p>
          <a 
            href="#" 
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
