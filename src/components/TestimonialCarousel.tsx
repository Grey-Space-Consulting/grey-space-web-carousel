
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startAutoPlay();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: activeIndex * carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={carouselRef}
        className={cn(
          "flex transition-transform duration-500 overflow-x-hidden scroll-smooth",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="min-w-full flex-shrink-0 px-6 md:px-10"
          >
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-8 md:p-10">
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
                        className={cn(
                          "fill-current",
                          i < testimonial.rating ? "text-primary" : "text-muted-foreground/30"
                        )}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-lg md:text-xl italic text-foreground/90 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 h-9 w-9 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border hover:bg-card transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 h-9 w-9 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border hover:bg-card transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
