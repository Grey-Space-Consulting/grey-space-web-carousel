
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, CreditCard, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import IndustryFeatureList from "./IndustryFeatureList";
import IndustryCaseStudyCard from "./IndustryCaseStudyCard";
import { CaseStudyPreview, IndustryFeature } from "@/types/industry";

const EcommerceTab = () => {
  const navigate = useNavigate();

  const navigateToCaseStudies = () => {
    navigate('/case-studies');
  };

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

  const ecommerceStudy: CaseStudyPreview = {
    title: "Sweetgreen: Customer Support Scaling",
    description: "Delivered a comprehensive support solution for this fast-growing food e-commerce business.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1974",
    industry: "E-Commerce",
    metrics: [
      { icon: <ShoppingCart size={16} className="text-primary" />, text: "E-Commerce" },
      { icon: <BarChart size={16} className="text-primary" />, text: "35% auto-deflection" }
    ]
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">E-Commerce Solutions</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our e-commerce solutions help businesses create compelling online shopping 
            experiences while optimizing operations for growth and profitability.
          </p>
        </div>
        
        <IndustryFeatureList features={ecommerceFeatures} />
        
        <div className="mt-10">
          <Button onClick={navigateToCaseStudies} size="lg" className="px-6">
            View E-Commerce Case Studies
          </Button>
        </div>
      </div>
      
      <IndustryCaseStudyCard study={ecommerceStudy} />
    </div>
  );
};

export default EcommerceTab;
