
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Define partners list
const partnersTop = [
  "Accenture", "Deloitte", "IBM", "Microsoft", "Oracle", 
  "SAP", "AWS", "Google", "Salesforce", "Adobe"
];

const partnersBottom = [
  "Twilio", "Segment", "Zendesk", "Snowflake", "MongoDB",
  "Stripe", "HubSpot", "Slack", "Shopify", "Cisco"
];

interface PartnerLogoProps {
  name: string;
  index: number;
}

const PartnerLogo = ({ name, index }: PartnerLogoProps) => {
  return (
    <div 
      className="h-16 rounded-lg glass-card flex items-center justify-center px-6 group hover:border-primary/30 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="text-lg font-medium text-foreground/70 group-hover:text-primary transition-colors duration-300">
        {name}
      </div>
    </div>
  );
};

const PartnerCarousels = () => {
  const [topApi, setTopApi] = useState<{ scrollNext: () => void } | null>(null);
  const [bottomApi, setBottomApi] = useState<{ scrollNext: () => void } | null>(null);

  // Configure plugins for auto-scrolling
  const topAutoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: false });
  
  // For the reverse direction, we'll use a different approach
  // Instead of using 'direction' property which isn't supported,
  // we'll reverse the order of items in the bottom carousel
  const bottomAutoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: false });

  return (
    <div className="space-y-6">
      {/* Top carousel - scrolling right */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        plugins={[topAutoplayPlugin]}
        setApi={setTopApi}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {partnersTop.map((partner, index) => (
            <CarouselItem key={partner} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <PartnerLogo name={partner} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Bottom carousel - scrolling left */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          direction: "rtl" // Use RTL direction to make it scroll left
        }}
        plugins={[bottomAutoplayPlugin]}
        setApi={setBottomApi}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {/* Using the partners list in reverse order */}
          {partnersBottom.map((partner, index) => (
            <CarouselItem key={partner} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <PartnerLogo name={partner} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PartnerCarousels;
