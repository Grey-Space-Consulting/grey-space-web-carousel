
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
import { Service } from "@/data/servicesData";
import ServiceTabContent from "./ServiceTabContent";

interface ServiceTabsProps {
  services: Service[];
}

const ServiceTabs = ({ services }: ServiceTabsProps) => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const isMobile = useIsMobile();

  // Function to add a line break to tab titles
  const formatTabTitle = (title: string) => {
    const words = title.split(' ');
    
    if (words.length <= 1) return title;
    
    // Find the middle point to break the line
    const midPoint = Math.ceil(words.length / 2);
    
    const firstLine = words.slice(0, midPoint).join(' ');
    const secondLine = words.slice(midPoint).join(' ');
    
    return (
      <>
        <span className="block font-bold">{firstLine}</span>
        <span className="block font-bold">{secondLine}</span>
      </>
    );
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full"
    >
      {isMobile ? (
        <div className="mb-8">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger className="w-full bg-secondary/30 rounded-lg py-2 px-4 transition-all duration-300 hover:bg-secondary/40">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        <TabsList className="w-full md:w-auto grid grid-cols-3 lg:grid-cols-6 gap-2 bg-secondary/30 rounded-lg p-1 h-auto mb-8">
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className="text-sm py-3 px-3 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md h-auto min-h-[4rem] 
                        flex flex-col items-center justify-center text-center transition-all duration-300
                        hover:bg-background/60"
            >
              {formatTabTitle(service.title)}
            </TabsTrigger>
          ))}
        </TabsList>
      )}

      {services.map((service) => (
        <TabsContent 
          key={service.id} 
          value={service.id} 
          className="mt-6 transition-all duration-500"
        >
          <ServiceTabContent service={service} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ServiceTabs;
