
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HealthcareTab from "./HealthcareTab";
import MarketplaceTab from "./MarketplaceTab";
import EcommerceTab from "./EcommerceTab";
import { useIsMobile } from "@/hooks/use-mobile";

// Create context for filtering functionality
import React from "react";

export interface FilterContextType {
  selectedSolutions: string[];
  isFiltering: boolean;
}

export const FilterContext = React.createContext<FilterContextType>({
  selectedSolutions: ["All"],
  isFiltering: false
});

const IndustryTabs = () => {
  const [selectedTab, setSelectedTab] = useState("healthcare");
  const isMobile = useIsMobile();

  const handleValueChange = (value: string) => {
    setSelectedTab(value);
  };

  // Simplified FilterContext with no active filtering
  const filterContextValue = {
    selectedSolutions: ["All"],
    isFiltering: false
  };

  return (
    <section className="px-6 md:px-10 lg:px-20 max-w-7xl mx-auto mb-24">
      <Tabs 
        value={selectedTab} 
        onValueChange={handleValueChange}
        className="animate-fade-in" 
        style={{ animationDelay: "200ms" }}
      >
        <div className="mb-12">
          {isMobile ? (
            <div className="w-full">
              <Select value={selectedTab} onValueChange={handleValueChange}>
                <SelectTrigger className="w-full bg-secondary/30 border rounded-lg py-3 px-6">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="marketplace">Marketplaces</SelectItem>
                  <SelectItem value="ecommerce">E-Commerce</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <TabsList className="w-full md:w-auto bg-secondary/30 border rounded-lg p-1 h-auto">
              <TabsTrigger 
                value="healthcare" 
                className="text-base py-3 px-6 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md"
              >
                Healthcare
              </TabsTrigger>
              <TabsTrigger 
                value="marketplace" 
                className="text-base py-3 px-6 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md"
              >
                Marketplaces
              </TabsTrigger>
              <TabsTrigger 
                value="ecommerce" 
                className="text-base py-3 px-6 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md"
              >
                E-Commerce
              </TabsTrigger>
            </TabsList>
          )}
        </div>
        
        {/* Provide simplified filter context to tab contents */}
        <FilterContext.Provider value={filterContextValue}>
          {/* Healthcare Tab */}
          <TabsContent value="healthcare" className="space-y-10 mt-4">
            <HealthcareTab />
          </TabsContent>
          
          {/* Marketplace Tab */}
          <TabsContent value="marketplace" className="space-y-10 mt-4">
            <MarketplaceTab />
          </TabsContent>
          
          {/* E-commerce Tab */}
          <TabsContent value="ecommerce" className="space-y-10 mt-4">
            <EcommerceTab />
          </TabsContent>
        </FilterContext.Provider>
      </Tabs>
    </section>
  );
};

export default IndustryTabs;
