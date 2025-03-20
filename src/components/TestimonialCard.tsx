
import { Quote } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import { useIsMobile } from "@/hooks/use-mobile";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full h-full flex flex-col glass-card rounded-2xl p-4 max-w-[250px] mx-auto min-h-[340px] md:min-h-[380px]">
      <div className="text-primary mb-3">
        <Quote size={20} className="opacity-50" />
      </div>
      
      <div className="flex-grow">
        <p className="text-xs text-foreground/90 leading-relaxed break-words">
          "{testimonial.quote}"
        </p>
      </div>
      
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            {testimonial.image ? (
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              <div className="h-4 w-4 rounded-full bg-primary/40"></div>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-xs">{testimonial.name}</h4>
            <p className="text-muted-foreground text-xs">{testimonial.role}</p>
            {testimonial.company && (
              <p className="text-primary font-medium text-xs italic">
                {testimonial.company}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
