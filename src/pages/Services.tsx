
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const packages = [
    {
      title: "Starter Package",
      description: "Perfect for small businesses looking to optimize their operations",
      price: "$5,000",
      duration: "2 weeks",
      features: [
        "Initial operations assessment",
        "Basic workflow optimization",
        "Tool recommendations",
        "1 training session",
        "30-day support"
      ],
      highlighted: false
    },
    {
      title: "Professional Package",
      description: "Comprehensive solution for growing businesses",
      price: "$15,000",
      duration: "4 weeks",
      features: [
        "Complete operations audit",
        "Advanced workflow automation",
        "System integration (up to 3 systems)",
        "Custom process documentation",
        "3 training sessions",
        "90-day support"
      ],
      highlighted: true
    },
    {
      title: "Enterprise Package",
      description: "Full-scale transformation for established organizations",
      price: "$30,000+",
      duration: "8+ weeks",
      features: [
        "End-to-end operations transformation",
        "Complete system integration",
        "Custom AI & automation solutions",
        "Dedicated fractional leadership",
        "Comprehensive team training",
        "6-month ongoing support"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Our Services
            </div>
            <h1 className="heading-lg mb-6 max-w-4xl">
              How We Help You Succeed
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Our comprehensive operations technology services are designed to transform your business from the inside out.
            </p>
          </div>
          
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Prebuilt Packages
            </div>
            <h2 className="heading-lg mb-6">
              Ready-to-Go Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully designed service packages to get started quickly with predictable pricing and timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.title}
                className={`animate-fade-in ${pkg.highlighted ? 'border-primary shadow-lg relative overflow-hidden' : ''}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className={pkg.highlighted ? 'text-primary' : ''}>{pkg.title}</CardTitle>
                  <CardDescription className="mt-1">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">{pkg.duration}</span>
                  </div>
                  <Separator className="mb-6" />
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${pkg.highlighted ? '' : 'variant-outline'}`}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="glass-card p-8 md:p-12 rounded-xl text-center">
            <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our team can create a tailored package that perfectly fits your unique business requirements and challenges.
            </p>
            <Button size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
