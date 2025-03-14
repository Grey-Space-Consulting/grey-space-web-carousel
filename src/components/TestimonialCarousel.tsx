
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechInnovate Inc.",
    quote: "Grey Space transformed our operations with their innovative solutions. Their team's expertise and dedication led to a 40% increase in efficiency within three months.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Logistics",
    quote: "We've worked with many consultants, but Grey Space truly stands out. Their holistic approach to operations technology has revolutionized our supply chain.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Lopez",
    role: "VP of Manufacturing",
    company: "Industrial Solutions",
    quote: "The implementation team at Grey Space exceeded our expectations. Their attention to detail and understanding of our industry challenges was impressive.",
    rating: 4
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CEO",
    company: "Startup Ventures",
    quote: "As a growing company, we needed scalable operations solutions. Grey Space delivered a custom technology stack that has supported our 300% growth seamlessly.",
    rating: 5
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Head of Digital",
    company: "Retail Innovations",
    quote: "Grey Space's strategic guidance helped us navigate our digital transformation journey. Their expertise bridged our technology gaps and empowered our team.",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-full"
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="h-full glass-card rounded-2xl p-6 md:p-8">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="h-6 w-6 rounded-full bg-primary/40"></div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`fill-current ${
                        i < testimonial.rating ? "text-primary" : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="text-md text-foreground/90 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-8">
        <CarouselPrevious className="relative static -left-0 translate-y-0 mr-2" />
        <CarouselNext className="relative static -right-0 translate-y-0 ml-2" />
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
