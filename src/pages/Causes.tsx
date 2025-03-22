
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, HandHeart, Globe, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
            <Badge variant="outline" className="bg-tertiary/10 text-tertiary-foreground border-tertiary/20 mb-4">
              Making A Difference
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-4xl">
              Causes We <span className="text-gradient">Support</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              At Grey Space, we're committed to creating positive change beyond our business operations. We proudly donate 3% of our profits to the causes we believe in.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-xl mb-12 animate-fade-in bg-primary/5" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <HandHeart className="h-10 w-10 text-primary mr-3" />
              <h2 className="text-xl md:text-2xl font-semibold">Our Commitment to Giving Back</h2>
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-4xl">
              Grey Space is dedicated to making a positive impact on our communities and the world at large. That's why we donate <span className="font-semibold text-primary">3% of our profits</span> to charitable organizations that align with our values and mission.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                3% of All Profits Donated
              </Badge>
              <Badge variant="outline" className="bg-info/10 text-info border-info/20">
                Supporting Local & Global Causes
              </Badge>
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                Employee-Matched Giving Program
              </Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {causes.map((cause, index) => (
              <div 
                key={cause.name} 
                className={`glass-card rounded-lg overflow-hidden flex flex-col animate-fade-in ${getCauseColorClass(cause.category)}`}
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
                  <div className={`flex items-center gap-2 ${getCauseTextColorClass(cause.category)} mb-2`}>
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
                      className={`inline-block px-3 py-1.5 ${getCauseButtonClass(cause.category)} rounded-md transition-colors`}
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

// Helper functions to assign different colors to different cause categories
const getCauseColorClass = (category: string) => {
  switch (category) {
    case "Animal Welfare":
      return "bg-accent/5 border-accent/10";
    case "Harm Reduction":
      return "bg-info/5 border-info/10";
    case "Mental Health":
      return "bg-tertiary/5 border-tertiary/10";
    default:
      return "bg-primary/5 border-primary/10";
  }
};

const getCauseTextColorClass = (category: string) => {
  switch (category) {
    case "Animal Welfare":
      return "text-accent";
    case "Harm Reduction":
      return "text-info";
    case "Mental Health":
      return "text-tertiary";
    default:
      return "text-primary";
  }
};

const getCauseButtonClass = (category: string) => {
  switch (category) {
    case "Animal Welfare":
      return "bg-accent/10 text-accent hover:bg-accent/20";
    case "Harm Reduction":
      return "bg-info/10 text-info hover:bg-info/20";
    case "Mental Health":
      return "bg-tertiary/10 text-tertiary hover:bg-tertiary/20";
    default:
      return "bg-primary/10 text-primary hover:bg-primary/20";
  }
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
