
import { Quote } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import { useIsMobile } from "@/hooks/use-mobile";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full h-full flex flex-col glass-card rounded-2xl p-6 max-w-sm mx-auto min-h-[340px] md:min-h-[380px]">
      <div className="text-primary mb-4">
        <Quote size={24} className="opacity-50" />
      </div>
      
      <div className="flex-grow">
        <p className="text-xs sm:text-sm md:text-md text-foreground/90 leading-relaxed break-words">
          "{testimonial.quote}"
        </p>
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            {testimonial.image ? (
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              <div className="h-5 w-5 rounded-full bg-primary/40"></div>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base">{testimonial.name}</h4>
            <p className="text-muted-foreground text-xs">
              {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
