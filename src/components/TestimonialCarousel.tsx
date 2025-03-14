
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { useState, useEffect, useCallback } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const TestimonialCarousel = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [api, setApi] = useState<{ scrollNext: () => void } | null>(null);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    let interval: number;
    
    if (autoPlay && api) {
      interval = setInterval(scrollNext, 5000) as unknown as number;
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, api, scrollNext]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
      className="w-full max-w-full"
      setApi={setApi}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <ScrollArea className="w-full">
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </ScrollArea>
      <div className="flex justify-center mt-8">
        <CarouselPrevious className="relative static -left-0 translate-y-0 mr-2" />
        <CarouselNext className="relative static -right-0 translate-y-0 ml-2" />
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
