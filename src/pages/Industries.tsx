
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeartPulse, Store, ShoppingCart, Stethoscope, Users, CreditCard, Package, BarChart, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const Industries = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navigateToCaseStudies = () => {
    navigate('/case-studies');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Our Industry Focus
            </div>
            <h1 className="heading-lg mb-6 max-w-4xl">
              Specialized Solutions for Your Industry
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We deliver tailored technology solutions that address the unique challenges faced by organizations in Healthcare, Marketplaces, and E-Commerce.
            </p>
          </div>
          
          <Tabs defaultValue="healthcare" className="mb-16 animate-fade-in">
            <TabsList className="w-full md:w-auto bg-background border mb-8">
              <TabsTrigger value="healthcare" className="text-base py-2 px-6">Healthcare</TabsTrigger>
              <TabsTrigger value="marketplaces" className="text-base py-2 px-6">Marketplaces</TabsTrigger>
              <TabsTrigger value="ecommerce" className="text-base py-2 px-6">E-Commerce</TabsTrigger>
            </TabsList>
            
            <TabsContent value="healthcare" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Healthcare Solutions</h2>
                  <p className="text-muted-foreground mb-6">
                    Our healthcare technology solutions streamline operations, improve patient experiences, and optimize resource allocation for healthcare providers of all sizes.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Stethoscope size={14} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Patient Experience Optimization</h3>
                        <p className="text-muted-foreground text-sm">Improve engagement and satisfaction through streamlined digital interactions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <BarChart size={14} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Resource Management</h3>
                        <p className="text-muted-foreground text-sm">Optimize scheduling and resource allocation to maximize efficiency</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <MessageSquare size={14} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Care Coordination</h3>
                        <p className="text-muted-foreground text-sm">Integrate systems for seamless information sharing across care teams</p>
                      </div>
                    </li>
                  </ul>
                  
                  <Button onClick={navigateToCaseStudies}>View Healthcare Case Studies</Button>
                </div>
                <div className="glass-card rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop" 
                    alt="Healthcare Solutions" 
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">Spring Health: Platform Rebuild</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      How we rebuilt Spring Health's support platform to improve response times and enhance patient experience.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <HeartPulse size={16} className="text-primary" />
                        <span className="text-sm">Healthcare</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart size={16} className="text-primary" />
                        <span className="text-sm">69% faster wait times</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="marketplaces" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Marketplace Solutions</h2>
                  <p className="text-muted-foreground mb-6">
                    Our marketplace solutions connect buyers and sellers efficiently while providing robust platforms that scale with your business growth.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Users size={14} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Two-Sided Platform Design</h3>
                        <p className="text-muted-foreground text-sm">Create seamless experiences for both providers and customers</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Store size={14} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Marketplace Optimization</h3>
                        <p className="text-muted-foreground text-sm">Improve matching algorithms and platform efficiency</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <BarChart size={14} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Analytics & Insights</h3>
                        <p className="text-muted-foreground text-sm">Leverage data for better decision-making and platform improvements</p>
                      </div>
                    </li>
                  </ul>
                  
                  <Button onClick={navigateToCaseStudies}>View Marketplace Case Studies</Button>
                </div>
                <div className="glass-card rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070" 
                    alt="Marketplace Solutions" 
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">HelloTech: Post-Acquisition Integration</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Completed a Kustomer to Gladly migration with significant cost savings and improved performance.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-primary" />
                        <span className="text-sm">2-Sided Marketplace</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare size={16} className="text-primary" />
                        <span className="text-sm">Reduced wait times</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ecommerce" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h2>
                  <p className="text-muted-foreground mb-6">
                    Our e-commerce solutions help businesses create compelling online shopping experiences while optimizing operations for growth and profitability.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <ShoppingCart size={14} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Customer Experience Enhancement</h3>
                        <p className="text-muted-foreground text-sm">Create seamless shopping journeys that drive conversion</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Package size={14} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Inventory & Logistics</h3>
                        <p className="text-muted-foreground text-sm">Optimize stock management and fulfill orders efficiently</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <CreditCard size={14} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Payment & Checkout</h3>
                        <p className="text-muted-foreground text-sm">Implement secure, frictionless transactions that boost sales</p>
                      </div>
                    </li>
                  </ul>
                  
                  <Button onClick={navigateToCaseStudies}>View E-Commerce Case Studies</Button>
                </div>
                <div className="glass-card rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1974" 
                    alt="E-Commerce Solutions" 
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">Sweetgreen: Customer Support Scaling</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Delivered a comprehensive support solution for this fast-growing food e-commerce business.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <ShoppingCart size={16} className="text-primary" />
                        <span className="text-sm">E-Commerce</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart size={16} className="text-primary" />
                        <span className="text-sm">35% auto-deflection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="glass-card p-8 rounded-xl mt-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Looking for a tailored solution?</h2>
                <p className="text-muted-foreground mb-6">
                  Our team specializes in creating custom technology solutions for Healthcare, Marketplaces, and E-Commerce businesses. Let's discuss how we can help you solve your specific challenges.
                </p>
                <Button onClick={() => window.location.href = "mailto:contact@example.com"}>
                  Contact Our Team
                </Button>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070" 
                  alt="Custom Solutions" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Industries;
