
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export interface ServicePackage {
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ReactNode;
  services: string[];
  deliverables: string[];
  highlighted: boolean;
}

interface ServicePackageCardProps {
  pkg: ServicePackage;
  index: number;
}

const ServicePackageCard: React.FC<ServicePackageCardProps> = ({ pkg, index }) => {
  return (
    <Card 
      className={`animate-fade-in h-full flex flex-col ${
        pkg.highlighted 
          ? 'border-primary/50 shadow-lg relative overflow-hidden bg-primary/5' 
          : 'hover:border-secondary/50 hover:shadow-md transition-all duration-300'
      }`}
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      {pkg.highlighted && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-medium rounded-bl-md">
          Most Popular
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="mb-2">{pkg.icon}</div>
        <CardTitle className={pkg.highlighted ? 'text-primary' : ''}>{pkg.title}</CardTitle>
        <CardDescription className="mt-1">{pkg.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="mb-4 text-center">
          <span className={`text-3xl font-bold ${pkg.highlighted ? 'text-primary' : ''}`}>{pkg.price}</span>
          <span className="text-muted-foreground ml-2 text-sm">{pkg.duration}</span>
        </div>
        
        <Separator className="my-4" />
        
        <div className="mb-4 text-center">
          <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-3">Includes:</h4>
          <ul className="space-y-2.5">
            {pkg.services.map((service, i) => (
              <li key={i} className="flex items-start gap-2.5 justify-center text-center">
                <span className={`flex-shrink-0 rounded-full p-1 ${pkg.highlighted ? 'bg-primary/10' : 'bg-secondary/30'}`}>
                  <Check className={`h-3.5 w-3.5 ${pkg.highlighted ? 'text-primary' : 'text-foreground/80'}`} />
                </span>
                <span className="text-sm text-center max-w-[80%]">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center">
          <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-3">Deliverables:</h4>
          <ul className="space-y-2.5">
            {pkg.deliverables.map((deliverable, i) => (
              <li key={i} className="flex items-start gap-2.5 justify-center text-center">
                <span className={`flex-shrink-0 rounded-full p-1 ${pkg.highlighted ? 'bg-primary/10' : 'bg-secondary/30'}`}>
                  <Check className={`h-3.5 w-3.5 ${pkg.highlighted ? 'text-primary' : 'text-foreground/80'}`} />
                </span>
                <span className="text-sm text-center max-w-[80%]">{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4">
        <Button 
          className={`w-full transition-all ${
            pkg.highlighted 
              ? 'bg-primary hover:bg-primary/90' 
              : 'bg-secondary/50 hover:bg-secondary/70 text-foreground'
          }`}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServicePackageCard;
