
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Leaf, Users, HandHeart } from "lucide-react";

const Causes = () => {
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
              Making A Difference
            </div>
            <h1 className="heading-lg mb-6 max-w-4xl">
              Causes We Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              At Grey Space, we're committed to creating positive change beyond our business operations. We proudly donate 3% of our profits to the causes we believe in.
            </p>
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-xl mb-16 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center justify-center md:justify-start mb-6">
              <HandHeart className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-2xl md:text-3xl font-semibold">Our Commitment to Giving Back</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
              Grey Space is dedicated to making a positive impact on our communities and the world at large. That's why we donate <span className="font-semibold text-primary">3% of our profits</span> to charitable organizations that align with our values and mission.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                3% of All Profits Donated
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Supporting Local & Global Causes
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Employee-Matched Giving Program
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {causes.map((cause, index) => (
              <div 
                key={cause.name} 
                className="glass-card rounded-xl overflow-hidden flex flex-col md:flex-row group animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="md:w-2/5 h-60 md:h-auto bg-card/80 overflow-hidden">
                  <img 
                    src={cause.image} 
                    alt={cause.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <cause.icon size={20} />
                    <span className="font-medium">{cause.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{cause.name}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{cause.description}</p>
                  <div className="mt-auto">
                    <a
                      href={cause.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
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

const causes = [
  {
    name: "Wags & Walks",
    category: "Animal Welfare",
    icon: Heart,
    description: "Wags & Walks is dedicated to rescuing shelter dogs and finding them permanent, loving homes. Their mission focuses on reducing euthanasia rates in shelters through rescue, rehabilitation, and education.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&auto=format&fit=crop",
    link: "https://www.wagsandwalks.org/",
  },
  {
    name: "DanceSafe",
    category: "Harm Reduction",
    icon: Users,
    description: "DanceSafe promotes health and safety within the nightlife and electronic music communities. They provide health education, harm reduction services, and work to reduce drug-related harm through education and peer-based initiatives.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    link: "https://dancesafe.org/",
  },
  {
    name: "American Foundation for Suicide Prevention",
    category: "Mental Health",
    icon: Heart,
    description: "The AFSP is dedicated to saving lives and bringing hope to those affected by suicide. They fund scientific research, provide educational programs, advocate for public policy, and support survivors of suicide loss.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop",
    link: "https://afsp.org/",
  },
  {
    name: "Environmental Sustainability Initiatives",
    category: "Environment",
    icon: Leaf,
    description: "Our commitment to sustainability extends beyond our business practices. We actively support and participate in reforestation projects, clean energy adoption, and plastic reduction initiatives.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&auto=format&fit=crop",
    link: "#environmental-initiatives",
  },
];

export default Causes;
