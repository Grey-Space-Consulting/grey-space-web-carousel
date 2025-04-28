
import { Globe, Headphones, Lightbulb, Users } from "lucide-react";
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
          title="AI Readiness Exercises"
          description="Ensure your brand and tech stack are set up for success when evaluating AI vendors, with focus on data quality, agent processes, reporting, and defined business outcomes."
          icon={Lightbulb}
          ctaText="Learn More"
          ctaLink="/#contact"
          variant="glass"
        />
      </div>
    </div>
  );
};

export default ServiceDisplayExample;
