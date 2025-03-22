
import React from "react";
import { Users, Database, Puzzle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServicePackage } from "@/components/ServicePackageCard";
import PackageTabContent from "./PackageTabContent";
import { useIsMobile } from "@/hooks/use-mobile";

interface PackageTabsProps {
  leadershipPackages: ServicePackage[];
  technologyPackages: ServicePackage[];
  combinedPackages: ServicePackage[];
}

const PackageTabs: React.FC<PackageTabsProps> = ({ 
  leadershipPackages, 
  technologyPackages,
  combinedPackages
}) => {
  const isMobile = useIsMobile();
  
  return (
    <Tabs defaultValue="leadership" className="w-full mb-10">
      <div className="flex justify-center w-full mb-12">
        <TabsList className="bg-card shadow-md border border-border/30 p-1.5 rounded-xl flex flex-wrap justify-center max-w-fit mx-auto">
          <TabsTrigger 
            value="leadership" 
            className="px-5 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
          >
            <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            {isMobile ? "Advisory" : "Leadership & Advisory"}
          </TabsTrigger>
          <TabsTrigger 
            value="technology" 
            className="px-5 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
          >
            <Database className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            {isMobile ? "Technology" : "Technology Implementation"}
          </TabsTrigger>
          <TabsTrigger 
            value="combined" 
            className="px-5 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
          >
            <Puzzle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            {isMobile ? "Combined" : "Combined Packages"}
          </TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="leadership" className="animate-fade-in">
        <PackageTabContent
          title="Leadership & Advisory Packages"
          description="Strategic advisory services to help optimize your operations, tools, and customer experience initiatives."
          packages={leadershipPackages}
        />
      </TabsContent>
      
      <TabsContent value="technology" className="animate-fade-in">
        <PackageTabContent
          title="Technology Implementation Packages"
          description="Hands-on technical implementation to build out your tools, integrations, and intelligent automation solutions."
          packages={technologyPackages}
        />
      </TabsContent>
      
      <TabsContent value="combined" className="animate-fade-in">
        <PackageTabContent
          title="Combined Packages (Leadership + Implementation)"
          description="Comprehensive solutions that blend strategic leadership with hands-on implementation for end-to-end transformation."
          packages={combinedPackages}
        />
      </TabsContent>
    </Tabs>
  );
};

export default PackageTabs;
