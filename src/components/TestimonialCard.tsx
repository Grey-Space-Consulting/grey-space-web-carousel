
import { Star } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import { useIsMobile } from "@/hooks/use-mobile";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="h-full glass-card rounded-2xl p-5 md:p-8">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="h-10 md:h-12 w-10 md:w-12 rounded-full bg-primary/20 flex items-center justify-center">
            {testimonial.image ? (
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              <div className="h-5 md:h-6 w-5 md:w-6 rounded-full bg-primary/40"></div>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-base md:text-lg">{testimonial.name}</h4>
            <p className="text-muted-foreground text-xs md:text-sm">
              {isMobile ? testimonial.company : `${testimonial.role}, ${testimonial.company}`}
            </p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={isMobile ? 14 : 16}
              className={`fill-current ${
                i < testimonial.rating ? "text-primary" : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 md:mt-6">
        <p className="text-sm md:text-md text-foreground/90 leading-relaxed">
          "{isMobile && testimonial.quote.length > 120 
            ? `${testimonial.quote.substring(0, 120)}...` 
            : testimonial.quote}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
