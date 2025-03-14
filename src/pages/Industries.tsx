
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building, Cpu, HeartPulse, ShoppingBag, Truck, Users } from "lucide-react";

const Industries = () => {
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
              Industries We Serve
            </div>
            <h1 className="heading-lg mb-6 max-w-4xl">
              Specialized Solutions for Every Industry
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We deliver tailored technology solutions that address the unique challenges faced by organizations across different sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {industries.map((industry, index) => (
              <div 
                key={industry.name} 
                className="glass-card rounded-xl p-8 group animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="h-16 w-16 mb-6 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <industry.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{industry.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{industry.description}</p>
                <ul className="space-y-2 text-muted-foreground">
                  {industry.services.map(service => (
                    <li key={service} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const industries = [
  {
    name: "Manufacturing",
    icon: Building,
    description: "Streamlining production processes with automation and real-time analytics to boost efficiency and reduce costs.",
    services: ["Process Automation", "Predictive Maintenance", "Quality Control Systems"],
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    description: "Transforming patient care with integrated systems that enhance data management and streamline operations.",
    services: ["Patient Data Integration", "Resource Management", "Compliance Solutions"],
  },
  {
    name: "Retail",
    icon: ShoppingBag,
    description: "Creating seamless customer experiences with innovative technology solutions for modern retail challenges.",
    services: ["Inventory Management", "Customer Analytics", "Omnichannel Solutions"],
  },
  {
    name: "Logistics",
    icon: Truck,
    description: "Optimizing supply chains with smart tracking and management systems for enhanced visibility and efficiency.",
    services: ["Route Optimization", "Warehouse Management", "Fleet Tracking"],
  },
  {
    name: "Technology",
    icon: Cpu,
    description: "Empowering tech companies with advanced solutions that accelerate innovation and market delivery.",
    services: ["DevOps Automation", "Cloud Infrastructure", "Data Analytics"],
  },
  {
    name: "Education",
    icon: Users,
    description: "Enhancing learning experiences with digital tools that connect students, educators, and resources.",
    services: ["Learning Management", "Administrative Systems", "Student Engagement"],
  },
];

export default Industries;
