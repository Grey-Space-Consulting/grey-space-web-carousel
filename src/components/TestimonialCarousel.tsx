
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { useState } from "react";

const TestimonialGrid = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  
  const showMoreTestimonials = () => {
    setVisibleCount(prev => Math.min(prev + 4, testimonials.length));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`h-full transform ${
              // Add vertical offset for every other card in each row
              index % 4 === 1 ? 'translate-y-6' : 
              index % 4 === 2 ? 'translate-y-12' : 
              index % 4 === 3 ? 'translate-y-6' : ''
            }`}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
      
      {visibleCount < testimonials.length && (
        <div className="mt-16 md:mt-20 flex justify-center">
          <button 
            onClick={showMoreTestimonials}
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm md:text-base font-medium"
          >
            Load More Testimonials
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialGrid;
