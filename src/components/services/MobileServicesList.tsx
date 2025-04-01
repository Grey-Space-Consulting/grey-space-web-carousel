
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Service } from "@/data/servicesData";

interface MobileServicesListProps {
  services: Service[];
}

const MobileServicesList = ({ services }: MobileServicesListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-8">
      <CollapsibleTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full transition-colors duration-300 hover:bg-secondary/20"
        >
          {isOpen ? "Show Less" : "See All Services"}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4 space-y-4">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className="glass-card rounded-xl p-6 group opacity-0 animate-fade-in transition-all duration-300 hover:shadow-lg hover:translate-y-[-3px]"
            style={{ 
              animationDelay: `${index * 100}ms`, 
              animationFillMode: "forwards" 
            }}
          >
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-primary/30">
                <service.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{service.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
            <Link to={service.actionLink}>
              <Button 
                variant="link" 
                className="p-0 h-auto text-primary gap-2 group transition-colors"
              >
                {service.callToAction}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MobileServicesList;
