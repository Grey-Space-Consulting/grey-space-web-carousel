
import { Star } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import { useIsMobile } from "@/hooks/use-mobile";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full h-full flex flex-col glass-card rounded-2xl p-4 sm:p-5 md:p-6 max-w-sm mx-auto min-h-[340px] md:min-h-[380px]">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 rounded-full bg-primary/20 flex items-center justify-center">
            {testimonial.image ? (
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              <div className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 rounded-full bg-primary/40"></div>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">{testimonial.name}</h4>
            <p className="text-muted-foreground text-xs md:text-sm">
              {testimonial.role}
            </p>
            <h5 className="text-primary font-bold text-xs md:text-sm">
              {testimonial.company}
            </h5>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={isMobile ? 12 : 16}
              className={`fill-current ${
                i < testimonial.rating ? "text-primary" : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 sm:mt-4 md:mt-6 flex-grow">
        <p className="text-xs sm:text-sm md:text-md text-foreground/90 leading-relaxed break-words">
          "{testimonial.quote}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
