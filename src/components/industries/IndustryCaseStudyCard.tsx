
import { useContext } from "react";
import { CaseStudyPreview } from "@/types/industry";
import { FilterContext } from "./IndustryTabs";
import { useNavigate } from "react-router-dom";

interface IndustryCaseStudyCardProps {
  study: CaseStudyPreview;
}

const IndustryCaseStudyCard = ({ study }: IndustryCaseStudyCardProps) => {
  const { selectedSolutions, isFiltering } = useContext(FilterContext);
  const navigate = useNavigate();
  
  // If filtering is active, check if this case study should be shown
  if (isFiltering && study.solutions) {
    const hasMatchingSolution = study.solutions.some(solution => 
      selectedSolutions.includes(solution as any));
    
    // Hide this card if it doesn't match the selected filters
    if (!hasMatchingSolution) {
      return null;
    }
  }

  // Navigate to case studies page when the card is clicked
  const handleCardClick = () => {
    navigate('/case-studies');
  };
  
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
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
};

export default IndustryCaseStudyCard;
