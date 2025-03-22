
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
      className={`animate-fade-in h-full ${pkg.highlighted ? 'border-primary shadow-lg relative overflow-hidden' : ''}`}
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      {pkg.highlighted && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader>
        {pkg.icon}
        <CardTitle className={pkg.highlighted ? 'text-primary' : ''}>{pkg.title}</CardTitle>
        <CardDescription className="mt-1">{pkg.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <span className="text-3xl font-bold">{pkg.price}</span>
          <span className="text-muted-foreground ml-2 text-sm">{pkg.duration}</span>
        </div>
        
        <Separator className="mb-4" />
        
        <div className="mb-4">
          <h4 className="font-medium mb-2">Includes:</h4>
          <ul className="space-y-2">
            {pkg.services.map((service, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <span className="text-sm">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Deliverables:</h4>
          <ul className="space-y-2">
            {pkg.deliverables.map((deliverable, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <span className="text-sm">{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${pkg.highlighted ? '' : 'variant-outline'}`}>
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServicePackageCard;
