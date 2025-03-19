
import { Button } from "@/components/ui/button";
import { HeartPulse, BarChart, MessageSquare, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";
import IndustryFeatureList from "./IndustryFeatureList";
import IndustryCaseStudyCard from "./IndustryCaseStudyCard";
import { CaseStudyPreview, IndustryFeature } from "@/types/industry";

const HealthcareTab = () => {
  const navigate = useNavigate();

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

  const healthcareStudy: CaseStudyPreview = {
    title: "Spring Health: Platform Rebuild",
    description: "How we rebuilt Spring Health's support platform to improve response times and enhance patient experience.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop",
    industry: "Healthcare",
    metrics: [
      { icon: <HeartPulse size={16} className="text-primary" />, text: "Healthcare" },
      { icon: <BarChart size={16} className="text-primary" />, text: "69% faster wait times" }
    ]
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Healthcare Solutions</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our healthcare technology solutions streamline operations, improve patient 
            experiences, and optimize resource allocation for healthcare providers of all sizes.
          </p>
        </div>
        
        <IndustryFeatureList features={healthcareFeatures} />
        
        <div className="mt-10">
          <Button onClick={navigateToCaseStudies} size="lg" className="px-6">
            View Healthcare Case Studies
          </Button>
        </div>
      </div>
      
      <IndustryCaseStudyCard study={healthcareStudy} />
    </div>
  );
};

export default HealthcareTab;
