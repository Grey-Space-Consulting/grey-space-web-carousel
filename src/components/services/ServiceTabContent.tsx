
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Service } from "@/data/servicesData";
import ServiceBenefitsList from "./ServiceBenefitsList";

interface ServiceTabContentProps {
  service: Service;
}

const ServiceTabContent = ({ service }: ServiceTabContentProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
        <div className="h-12 w-12 mb-6 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
          <service.icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {service.expandedDescription}
        </p>
        <Link to={service.actionLink}>
          <Button 
            variant="default" 
            size="lg" 
            className="gap-2 font-medium group transition-colors"
          >
            {service.callToAction}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link>
      </div>

      <ServiceBenefitsList benefits={service.benefits} />
    </div>
  );
};

export default ServiceTabContent;
