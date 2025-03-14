
import { Star } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
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
  );
};

export default TestimonialCard;
