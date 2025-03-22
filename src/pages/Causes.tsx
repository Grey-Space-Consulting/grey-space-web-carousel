
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, HandHeart } from "lucide-react";

const Causes = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
              Making A Difference
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-4xl">
              Causes We Support
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              At Grey Space, we're committed to creating positive change beyond our business operations. We proudly donate 3% of our profits to the causes we believe in.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-xl mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <HandHeart className="h-10 w-10 text-primary mr-3" />
              <h2 className="text-xl md:text-2xl font-semibold">Our Commitment to Giving Back</h2>
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-4xl">
              Grey Space is dedicated to making a positive impact on our communities and the world at large. That's why we donate <span className="font-semibold text-primary">3% of our profits</span> to charitable organizations that align with our values and mission.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                3% of All Profits Donated
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Supporting Local & Global Causes
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Employee-Matched Giving Program
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {causes.map((cause, index) => (
              <div 
                key={cause.name} 
                className="glass-card rounded-lg overflow-hidden flex flex-col animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="h-48 bg-card/80 overflow-hidden">
                  <img 
                    src={cause.image} 
                    alt={cause.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <cause.icon size={16} />
                    <span className="text-sm font-medium">{cause.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cause.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{cause.description}</p>
                  <div className="mt-auto">
                    <a
                      href={cause.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-md hover:bg-primary/20 transition-colors"
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
    image: "https://images.squarespace-cdn.com/content/v1/5f0e64fa1e037519173207cc/a781772b-c79c-429f-9dbe-d1c27d04156a/Wags+%26+Walks+Simple+Logo.png?format=1500w",
    link: "https://www.wagsandwalks.org/",
  },
  {
    name: "DanceSafe",
    category: "Harm Reduction",
    icon: Users,
    description: "DanceSafe promotes health and safety within the nightlife and electronic music communities. They provide health education, harm reduction services, and work to reduce drug-related harm through education and peer-based initiatives.",
    image: "https://dancesafe.org/wp-content/uploads/2024/12/cropped-dancesafe-circle-logo-200x200.webp",
    link: "https://dancesafe.org/",
  },
  {
    name: "American Foundation for Suicide Prevention",
    category: "Mental Health",
    icon: Heart,
    description: "The AFSP is dedicated to saving lives and bringing hope to those affected by suicide. They fund scientific research, provide educational programs, advocate for public policy, and support survivors of suicide loss.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/American_Foundation_for_Suicide_Prevention_logo.svg/2880px-American_Foundation_for_Suicide_Prevention_logo.svg.png",
    link: "https://afsp.org/",
  },
];

export default Causes;
