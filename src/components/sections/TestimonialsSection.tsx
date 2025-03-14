
import TestimonialCarousel from "@/components/TestimonialCarousel";

interface TestimonialsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const TestimonialsSection = ({ sectionRef }: TestimonialsSectionProps) => {
  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="pb-24 pt-12 px-0 opacity-0"
    >
      <div className="max-w-7xl mx-auto mb-8 px-6 md:px-10">
        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
          Client Success Stories
        </div>
        <h2 className="heading-lg mb-4">What Our Clients Say</h2>
        <p className="text-muted-foreground max-w-2xl">
          We've helped organizations across industries optimize their operations and achieve remarkable results.
        </p>
      </div>
      
      <TestimonialCarousel />
    </section>
  );
};

export default TestimonialsSection;
