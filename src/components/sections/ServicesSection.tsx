
import { ArrowRight, Building, ChevronRight, Cog, Globe, Headphones, Lightbulb, Users } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Fractional CX & Strategic Leadership",
    description: "Expert leadership and strategic guidance to align your customer experience initiatives with business objectives.",
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
    title: "Managed Helpdesk",
    description: "24/7 customized support solution with AI-powered responses, seamless system integration, and comprehensive training for your team.",
    icon: Headphones
  }
];

interface ServicesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const ServicesSection = ({ sectionRef }: ServicesSectionProps) => {
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

        <div className="mt-16 text-center">
          <Link to="/services">
            <Button variant="default" size="lg" className="gap-2 font-medium text-base">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
