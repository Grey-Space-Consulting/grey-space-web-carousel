
import { Globe, Headphones, Users } from "lucide-react";
import ServiceDisplay from "../ServiceDisplay";

const ServiceDisplayExample = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="heading-md mb-8 text-center">Our Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceDisplay 
          title="Fractional Leadership"
          description="Expert leadership and strategic guidance to align your customer experience initiatives with business objectives."
          icon={Users}
          ctaText="Schedule a Call"
          ctaLink="/#contact"
          variant="glass"
        />
        
        <ServiceDisplay 
          title="System Integrations"
          description="Seamlessly connect your systems and optimize workflows for maximum operational efficiency."
          icon={Globe}
          ctaText="Get Started"
          ctaLink="/#contact"
          variant="glass"
        />
        
        <ServiceDisplay 
          title="Managed Helpdesk"
          description="Customized support solution with AI-powered responses, seamless system integration, and comprehensive training."
          icon={Headphones}
          ctaText="Learn More"
          ctaLink="/#contact"
          variant="glass"
        />
      </div>
    </div>
  );
};

export default ServiceDisplayExample;
