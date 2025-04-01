
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { services } from "@/data/servicesData";
import ServiceTabs from "@/components/services/ServiceTabs";
import MobileServicesList from "@/components/services/MobileServicesList";

interface ServicesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const ServicesSection = ({ sectionRef }: ServicesSectionProps) => {
  const isMobile = useIsMobile();

  return (
    <section 
      id="services"
      ref={sectionRef}
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
        
        <ServiceTabs services={services} />

        {isMobile && <MobileServicesList services={services} />}
      </div>
    </section>
  );
};

export default ServicesSection;
