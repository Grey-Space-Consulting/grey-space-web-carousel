
import { Building2, Briefcase, ShoppingCart, HeartPulse } from "lucide-react";

const IndustriesHero = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 max-w-7xl mx-auto mb-20">
      <div className="animate-fade-in">
        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Industry Expertise
        </div>
        <h1 className="heading-lg mb-6 max-w-4xl">
          Specialized Solutions for <span className="text-gradient">Your Industry</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10">
          We deliver tailored technology solutions that address the unique challenges faced 
          by organizations in Healthcare, Marketplaces, and E-Commerce.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl">
          <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <HeartPulse size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Healthcare</h3>
            <p className="text-sm text-muted-foreground">Streamlining patient experiences and care coordination</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Briefcase size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Marketplaces</h3>
            <p className="text-sm text-muted-foreground">Connecting providers and customers efficiently</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <ShoppingCart size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">E-Commerce</h3>
            <p className="text-sm text-muted-foreground">Creating compelling shopping experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;
