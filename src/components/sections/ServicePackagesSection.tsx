
import React from "react";
import PackageTabs from "@/components/packages/PackageTabs";
import PackagesWorkTogether from "@/components/packages/PackagesWorkTogether";
import { leadershipPackages, technologyPackages, combinedPackages } from "@/data/servicePackages";

const ServicePackagesSection: React.FC = () => {
  return (
    <div className="mb-16 text-center">
      <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
        Service Packages
      </div>
      <h2 className="heading-lg mb-6">
        Tailored Solutions for Your Business
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
        Our service packages are designed to deliver exactly what you need, whether it's strategic guidance, hands-on implementation, or a comprehensive solution.
      </p>
      
      <PackageTabs 
        leadershipPackages={leadershipPackages} 
        technologyPackages={technologyPackages}
        combinedPackages={combinedPackages}
      />
      
      {/* How These Packages Work Together */}
      <PackagesWorkTogether />
    </div>
  );
};

export default ServicePackagesSection;
