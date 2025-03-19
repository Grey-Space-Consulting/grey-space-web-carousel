
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  HeartPulse, Store, ShoppingCart, Stethoscope, 
  Users, CreditCard, Package, BarChart, MessageSquare,
  Building2, Briefcase, Factory 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

interface IndustryFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CaseStudyPreview {
  title: string;
  description: string;
  image: string;
  industry: string;
  metrics: {
    icon: React.ReactNode;
    text: string;
  }[];
}

const Industries = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navigateToCaseStudies = () => {
    navigate('/case-studies');
  };

  // Healthcare industry features
  const healthcareFeatures: IndustryFeature[] = [
    {
      icon: <Stethoscope size={18} className="text-primary" />,
      title: "Patient Experience Optimization",
      description: "Improve engagement and satisfaction through streamlined digital interactions"
    },
    {
      icon: <BarChart size={18} className="text-primary" />,
      title: "Resource Management",
      description: "Optimize scheduling and resource allocation to maximize efficiency"
    },
    {
      icon: <MessageSquare size={18} className="text-primary" />,
      title: "Care Coordination",
      description: "Integrate systems for seamless information sharing across care teams"
    }
  ];

  // Marketplace industry features
  const marketplaceFeatures: IndustryFeature[] = [
    {
      icon: <Users size={18} className="text-primary" />,
      title: "Two-Sided Platform Design",
      description: "Create seamless experiences for both providers and customers"
    },
    {
      icon: <Store size={18} className="text-primary" />,
      title: "Marketplace Optimization",
      description: "Improve matching algorithms and platform efficiency"
    },
    {
      icon: <BarChart size={18} className="text-primary" />,
      title: "Analytics & Insights",
      description: "Leverage data for better decision-making and platform improvements"
    }
  ];

  // E-commerce industry features
  const ecommerceFeatures: IndustryFeature[] = [
    {
      icon: <ShoppingCart size={18} className="text-primary" />,
      title: "Customer Experience Enhancement",
      description: "Create seamless shopping journeys that drive conversion"
    },
    {
      icon: <Package size={18} className="text-primary" />,
      title: "Inventory & Logistics",
      description: "Optimize stock management and fulfill orders efficiently"
    },
    {
      icon: <CreditCard size={18} className="text-primary" />,
      title: "Payment & Checkout",
      description: "Implement secure, frictionless transactions that boost sales"
    }
  ];

  // Case Study previews
  const caseStudies: Record<string, CaseStudyPreview> = {
    healthcare: {
      title: "Spring Health: Platform Rebuild",
      description: "How we rebuilt Spring Health's support platform to improve response times and enhance patient experience.",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop",
      industry: "Healthcare",
      metrics: [
        { icon: <HeartPulse size={16} className="text-primary" />, text: "Healthcare" },
        { icon: <BarChart size={16} className="text-primary" />, text: "69% faster wait times" }
      ]
    },
    marketplace: {
      title: "HelloTech: Post-Acquisition Integration",
      description: "Completed a Kustomer to Gladly migration with significant cost savings and improved performance.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
      industry: "Marketplace",
      metrics: [
        { icon: <Users size={16} className="text-primary" />, text: "2-Sided Marketplace" },
        { icon: <MessageSquare size={16} className="text-primary" />, text: "Reduced wait times" }
      ]
    },
    ecommerce: {
      title: "Sweetgreen: Customer Support Scaling",
      description: "Delivered a comprehensive support solution for this fast-growing food e-commerce business.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1974",
      industry: "E-Commerce",
      metrics: [
        { icon: <ShoppingCart size={16} className="text-primary" />, text: "E-Commerce" },
        { icon: <BarChart size={16} className="text-primary" />, text: "35% auto-deflection" }
      ]
    }
  };

  const renderFeatureList = (features: IndustryFeature[]) => (
    <ul className="space-y-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
            {feature.icon}
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );

  const renderCaseStudyCard = (study: CaseStudyPreview) => (
    <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent z-10"></div>
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <span className="text-sm text-primary font-medium mb-1">{study.industry}</span>
        <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow">{study.description}</p>
        <div className="flex items-center gap-4 border-t border-border pt-4">
          {study.metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-2">
              {metric.icon}
              <span className="text-sm">{metric.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-28 pb-24">
        {/* Hero Section */}
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
        
        {/* Industry Tabs Section */}
        <section className="px-6 md:px-10 lg:px-20 max-w-7xl mx-auto mb-24">
          <Tabs defaultValue="healthcare" className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="mb-12">
              <TabsList className="w-full md:w-auto bg-secondary/30 border rounded-lg p-1 h-auto">
                <TabsTrigger 
                  value="healthcare" 
                  className="text-base py-3 px-6 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md"
                >
                  Healthcare
                </TabsTrigger>
                <TabsTrigger 
                  value="marketplace" 
                  className="text-base py-3 px-6 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md"
                >
                  Marketplaces
                </TabsTrigger>
                <TabsTrigger 
                  value="ecommerce" 
                  className="text-base py-3 px-6 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md"
                >
                  E-Commerce
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Healthcare Tab */}
            <TabsContent value="healthcare" className="space-y-10 mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Healthcare Solutions</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      Our healthcare technology solutions streamline operations, improve patient 
                      experiences, and optimize resource allocation for healthcare providers of all sizes.
                    </p>
                  </div>
                  
                  {renderFeatureList(healthcareFeatures)}
                  
                  <div className="mt-10">
                    <Button onClick={navigateToCaseStudies} size="lg" className="px-6">
                      View Healthcare Case Studies
                    </Button>
                  </div>
                </div>
                
                {renderCaseStudyCard(caseStudies.healthcare)}
              </div>
            </TabsContent>
            
            {/* Marketplace Tab */}
            <TabsContent value="marketplace" className="space-y-10 mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Marketplace Solutions</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      Our marketplace solutions connect buyers and sellers efficiently while providing 
                      robust platforms that scale with your business growth.
                    </p>
                  </div>
                  
                  {renderFeatureList(marketplaceFeatures)}
                  
                  <div className="mt-10">
                    <Button onClick={navigateToCaseStudies} size="lg" className="px-6">
                      View Marketplace Case Studies
                    </Button>
                  </div>
                </div>
                
                {renderCaseStudyCard(caseStudies.marketplace)}
              </div>
            </TabsContent>
            
            {/* E-commerce Tab */}
            <TabsContent value="ecommerce" className="space-y-10 mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">E-Commerce Solutions</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      Our e-commerce solutions help businesses create compelling online shopping 
                      experiences while optimizing operations for growth and profitability.
                    </p>
                  </div>
                  
                  {renderFeatureList(ecommerceFeatures)}
                  
                  <div className="mt-10">
                    <Button onClick={navigateToCaseStudies} size="lg" className="px-6">
                      View E-Commerce Case Studies
                    </Button>
                  </div>
                </div>
                
                {renderCaseStudyCard(caseStudies.ecommerce)}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* CTA Section */}
        <section className="px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
          <div className="glass-card rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 p-8 lg:p-12">
                <h2 className="text-3xl font-semibold mb-4">Looking for a tailored solution?</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Our team specializes in creating custom technology solutions for Healthcare, 
                  Marketplaces, and E-Commerce businesses. Let's discuss how we can help you 
                  solve your specific challenges.
                </p>
                <Button size="lg" onClick={() => window.location.href = "mailto:contact@example.com"}>
                  Contact Our Team
                </Button>
              </div>
              <div className="relative h-full lg:block lg:h-auto min-h-[300px] lg:min-h-0">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070" 
                  alt="Custom Solutions" 
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Industries;
