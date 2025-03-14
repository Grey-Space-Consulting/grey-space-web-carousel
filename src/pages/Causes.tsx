
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Trophy, Users } from "lucide-react";

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
              At Grey Space, we're committed to creating positive change beyond our business operations. Here are the causes we actively support and contribute to.
            </p>
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
    name: "Technology Education for Underserved Communities",
    category: "Education",
    icon: Users,
    description: "We provide resources, mentorship, and technology access to students from underserved communities, helping bridge the digital divide and create pathways to careers in technology.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop",
    link: "#tech-education",
  },
  {
    name: "Environmental Sustainability Initiatives",
    category: "Environment",
    icon: Heart,
    description: "Our commitment to sustainability extends beyond our business practices. We actively support and participate in reforestation projects, clean energy adoption, and plastic reduction initiatives.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&auto=format&fit=crop",
    link: "#environmental-initiatives",
  },
  {
    name: "Technology Innovation for Nonprofits",
    category: "Innovation",
    icon: Trophy,
    description: "We provide pro bono technology consulting and implementation for nonprofit organizations, helping them leverage innovative solutions to maximize their impact and operational efficiency.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    link: "#nonprofit-tech",
  },
  {
    name: "Diversity in Tech Advocacy",
    category: "Diversity & Inclusion",
    icon: Users,
    description: "We're committed to promoting diversity and inclusion in the technology sector through scholarship programs, inclusive hiring practices, and mentorship opportunities for underrepresented groups.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop",
    link: "#diversity-tech",
  },
];

export default Causes;
