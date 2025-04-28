
import { Button } from "@/components/ui/button";
import { Users, Store, BarChart, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import IndustryFeatureList from "./IndustryFeatureList";
import IndustryCaseStudyCard from "./IndustryCaseStudyCard";
import { CaseStudyPreview, IndustryFeature } from "@/types/industry";

const MarketplaceTab = () => {
  const navigate = useNavigate();

  const navigateToCaseStudies = () => {
    navigate('/case-studies');
  };

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

  const marketplaceStudy: CaseStudyPreview = {
    title: "HelloTech: Post-Acquisition Integration",
    description: "Completed a Kustomer to Gladly migration with significant cost savings and improved performance.",
    image: "", // Empty image property
    industry: "Marketplace",
    metrics: [
      { icon: <Users size={16} className="text-primary" />, text: "2-Sided Marketplace" },
      { icon: <MessageSquare size={16} className="text-primary" />, text: "Reduced wait times" }
    ]
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Marketplace Solutions</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our marketplace solutions connect buyers and sellers efficiently while providing 
            robust platforms that scale with your business growth.
          </p>
        </div>
        
        <IndustryFeatureList features={marketplaceFeatures} />
        
        <div className="mt-10">
          <Button onClick={navigateToCaseStudies} size="lg" className="px-6">
            View Marketplace Case Studies
          </Button>
        </div>
      </div>
      
      <IndustryCaseStudyCard study={marketplaceStudy} />
    </div>
  );
};

export default MarketplaceTab;
