
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCarouselAutoplay } from "@/hooks/useCarouselAutoplay";

const TestimonialCarousel = () => {
  const [api, setApi] = useState<{ scrollNext: () => void } | null>(null);
  const { pauseAutoplay, resumeAutoplay } = useCarouselAutoplay(api, {
    interval: 5000,
    initialAutoPlay: true
  });

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
      className="w-full max-w-full"
      setApi={setApi}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <ScrollArea className="w-full">
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="pl-4 md:basis-2/5 lg:basis-1/3">
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
