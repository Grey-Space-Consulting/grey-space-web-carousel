
import React from "react";
import ServicePackageCard, { ServicePackage } from "@/components/ServicePackageCard";

interface PackageTabContentProps {
  title: string;
  description: string;
  packages: ServicePackage[];
}

const PackageTabContent: React.FC<PackageTabContentProps> = ({ 
  title, 
  description, 
  packages 
}) => {
  return (
    <div className="mt-8 animate-fade-in">
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
        {description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {packages.map((pkg, index) => (
          <ServicePackageCard key={pkg.title} pkg={pkg} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PackageTabContent;
