
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
        <Button variant="outline" className="w-full">
          {isOpen ? "Show Less" : "See All Services"}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4 space-y-4">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className="glass-card rounded-xl p-6 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{service.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
            <Link to={service.actionLink}>
              <Button variant="link" className="p-0 h-auto text-primary gap-2">
                {service.callToAction}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MobileServicesList;
