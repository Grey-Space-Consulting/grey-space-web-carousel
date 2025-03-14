
import TestimonialCarousel from "@/components/TestimonialCarousel";

interface TestimonialsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const TestimonialsSection = ({ sectionRef }: TestimonialsSectionProps) => {
  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="pb-12 sm:pb-16 md:pb-24 pt-8 sm:pt-10 md:pt-12 px-0 opacity-0"
    >
      <div className="max-w-7xl mx-auto mb-4 sm:mb-6 md:mb-8 px-4 md:px-10">
        <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm mb-3 md:mb-6">
          Client Success Stories
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 md:mb-4">What Our Clients Say</h2>
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl">
          We've helped organizations across industries optimize their operations and achieve remarkable results.
        </p>
      </div>
      
      <TestimonialCarousel />
    </section>
  );
};

export default TestimonialsSection;
