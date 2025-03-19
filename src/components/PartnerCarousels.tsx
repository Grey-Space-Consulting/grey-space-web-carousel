
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useCarouselAutoplay } from "@/hooks/useCarouselAutoplay";
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
  const bottomAutoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: false, direction: 'backward' });

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
        }}
        plugins={[bottomAutoplayPlugin]}
        setApi={setBottomApi}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
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
