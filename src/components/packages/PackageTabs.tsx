
import React from "react";
import { Users, Database } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServicePackage } from "@/components/ServicePackageCard";
import PackageTabContent from "./PackageTabContent";
import { useIsMobile } from "@/hooks/use-mobile";

interface PackageTabsProps {
  leadershipPackages: ServicePackage[];
  technologyPackages: ServicePackage[];
}

const PackageTabs: React.FC<PackageTabsProps> = ({ 
  leadershipPackages, 
  technologyPackages 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <Tabs defaultValue="leadership" className="w-full mb-10">
      <TabsList className="mx-auto mb-8 bg-secondary/80 p-1.5 border border-muted/30 shadow-lg rounded-xl">
        <TabsTrigger 
          value="leadership" 
          className="px-4 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
        >
          <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          {isMobile ? "Leadership" : "Leadership & Advisory"}
        </TabsTrigger>
        <TabsTrigger 
          value="technology" 
          className="px-4 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
        >
          <Database className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          {isMobile ? "Technology" : "Technology Implementation"}
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="leadership">
        <PackageTabContent
          title="Leadership & Advisory"
          description="Strategic advisory services to help optimize your operations, tools, and customer experience initiatives."
          packages={leadershipPackages}
        />
      </TabsContent>
      
      <TabsContent value="technology">
        <PackageTabContent
          title="Technology Implementation"
          description="Hands-on technical implementation to build out your tools, integrations, and intelligent automation solutions."
          packages={technologyPackages}
        />
      </TabsContent>
    </Tabs>
  );
};

export default PackageTabs;
