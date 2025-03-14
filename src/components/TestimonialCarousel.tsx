
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { useState, useEffect } from "react";
import { useCarouselAutoplay } from "@/hooks/useCarouselAutoplay";
import { useIsMobile } from "@/hooks/use-mobile";

const TestimonialCarousel = () => {
  const [api, setApi] = useState<{ scrollNext: () => void } | null>(null);
  const { pauseAutoplay, resumeAutoplay } = useCarouselAutoplay(api, {
    interval: 3000,
    initialAutoPlay: true
  });
  const isMobile = useIsMobile();
  const [itemsPerView, setItemsPerView] = useState(3);

  // Adjust number of items per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (width < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(3); // Desktop: 3 items
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
      className="w-full max-w-full px-2 sm:px-4 md:px-6"
      setApi={setApi}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <CarouselContent className="-ml-2 sm:-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem 
            key={testimonial.id} 
            className={`pl-2 sm:pl-4 ${
              itemsPerView === 1 
                ? 'basis-full' 
                : itemsPerView === 2 
                  ? 'basis-1/2 md:basis-1/2' 
                  : 'basis-full sm:basis-1/2 lg:basis-1/3'
            }`}
          >
            <div className="h-auto min-h-[300px] sm:min-h-[250px]">
              <TestimonialCard testimonial={testimonial} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-6 md:mt-8">
        <CarouselPrevious className="relative static -left-0 translate-y-0 mr-2" />
        <CarouselNext className="relative static -right-0 translate-y-0 ml-2" />
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
