
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building, ChevronRight, Cog, Globe, Lightbulb, Users } from "lucide-react";

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: "Fractional CX Leadership",
      description: "Expert leadership to guide your customer experience initiatives on a flexible, as-needed basis.",
      icon: Users
    },
    {
      title: "System Integration & Workflows",
      description: "Seamlessly connect your systems and optimize workflows for maximum operational efficiency.",
      icon: Building
    },
    {
      title: "Training & Process Optimization",
      description: "Enhance team capabilities and streamline processes through comprehensive training and optimization.",
      icon: Cog
    },
    {
      title: "Tool Selections, Audits, & Migrations",
      description: "Expert guidance in selecting, auditing, and migrating to the right tools for your business needs.",
      icon: Globe
    },
    {
      title: "Intelligent Automation & AI",
      description: "Leverage cutting-edge AI and automation solutions to enhance operational efficiency and innovation.",
      icon: Lightbulb
    },
    {
      title: "Strategic Consulting",
      description: "Comprehensive strategic guidance to align your technology investments with business objectives.",
      icon: ChevronRight
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Our Services
            </div>
            <h1 className="heading-lg mb-6 max-w-4xl">
              How We Help You Succeed
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Our comprehensive operations technology services are designed to transform your business from the inside out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="glass-card rounded-xl p-8 group animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="h-16 w-16 mb-6 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
