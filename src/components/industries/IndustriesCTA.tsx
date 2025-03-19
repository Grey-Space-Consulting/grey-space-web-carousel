
import { Button } from "@/components/ui/button";

const IndustriesCTA = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 max-w-6xl mx-auto">
      <div className="glass-card rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: "400ms" }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 lg:p-8">
            <h2 className="text-2xl font-semibold mb-3">Looking for a tailored solution?</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Our team specializes in creating custom technology solutions for Healthcare, 
              Marketplaces, and E-Commerce businesses. Let's discuss how we can help you 
              solve your specific challenges.
            </p>
            <Button size="default" onClick={() => window.location.href = "mailto:contact@example.com"}>
              Contact Our Team
            </Button>
          </div>
          <div className="relative h-full lg:block lg:h-auto min-h-[200px] lg:min-h-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070" 
              alt="Custom Solutions" 
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCTA;
