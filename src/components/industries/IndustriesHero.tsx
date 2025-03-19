
import { Building2, Briefcase, ShoppingCart, HeartPulse } from "lucide-react";

const IndustriesHero = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 max-w-7xl mx-auto mb-12">
      <div className="animate-fade-in">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
          Industry Expertise
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl">
          Specialized Solutions for <span className="text-gradient">Your Industry</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8">
          We deliver tailored technology solutions that address the unique challenges faced 
          by organizations in Healthcare, Marketplaces, and E-Commerce.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          <div className="glass-card p-4 rounded-xl flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <HeartPulse size={20} className="text-primary" />
            </div>
            <h3 className="text-base font-medium mb-1">Healthcare</h3>
            <p className="text-xs text-muted-foreground">Streamlining patient experiences and care coordination</p>
          </div>
          
          <div className="glass-card p-4 rounded-xl flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Briefcase size={20} className="text-primary" />
            </div>
            <h3 className="text-base font-medium mb-1">Marketplaces</h3>
            <p className="text-xs text-muted-foreground">Connecting providers and customers efficiently</p>
          </div>
          
          <div className="glass-card p-4 rounded-xl flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <ShoppingCart size={20} className="text-primary" />
            </div>
            <h3 className="text-base font-medium mb-1">E-Commerce</h3>
            <p className="text-xs text-muted-foreground">Creating compelling shopping experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;
