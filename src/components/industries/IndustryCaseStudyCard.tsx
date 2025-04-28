
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
  
  // Navigate to case studies page when the card is clicked
  const handleCardClick = () => {
    navigate('/case-studies');
  };
  
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`View case study: ${study.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      <div className="p-4 flex-grow flex flex-col">
        <span className="text-xs text-primary font-medium mb-1">{study.industry}</span>
        <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{study.description}</p>
        
        <div className="flex items-center gap-3 border-t border-border pt-3">
          {study.metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-1">
              {metric.icon}
              <span className="text-xs">{metric.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryCaseStudyCard;
