
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ChevronRight } from "lucide-react";

const CaseStudies = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Our Success Stories
            </div>
            <h1 className="heading-lg mb-6 max-w-4xl">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore how we've helped organizations transform their operations with innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {caseStudies.map((study, index) => (
              <div key={study.title} className="glass-card rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-52 bg-card/80 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary text-sm mb-3">
                    <Briefcase size={16} />
                    <span>{study.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.excerpt}</p>
                  <a 
                    href={`#${study.title.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    Read Case Study <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const caseStudies = [
  {
    title: "Manufacturing Process Optimization",
    category: "Manufacturing",
    excerpt: "How we helped a leading manufacturer reduce operational costs by 30% through smart automation.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop",
  },
  {
    title: "Healthcare Data Integration",
    category: "Healthcare",
    excerpt: "Transforming patient care through integrated data systems at a major hospital network.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
  },
  {
    title: "Retail Supply Chain Revolution",
    category: "Retail",
    excerpt: "Creating a resilient, AI-driven supply chain for a national retail chain.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
  },
];

export default CaseStudies;
