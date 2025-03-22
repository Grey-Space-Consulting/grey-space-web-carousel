
import React, { useContext } from "react";
import { ChevronRight, Briefcase, Clock, DollarSign, BarChart, MessageSquare } from "lucide-react";
import { type CaseStudy } from "@/data/caseStudies";
import { detailedCaseStudies } from "@/data/caseStudies";
import { FilterContext } from "@/components/industries/IndustryTabs";

interface CaseStudyCardProps {
  study: CaseStudy;
  onClick: (id: string) => void;
}

// Helper function to get the detailed case study for a given ID
const getDetailedStudy = (id: string) => {
  return detailedCaseStudies.find(study => study.id === id);
};

// Get solution tags for a case study based on its ID
const getSolutionTags = (id: string): string[] => {
  switch (id) {
    case "seedhealth":
      return ["CRM", "Analytics", "Automation", "Support"];
    case "turo":
      return ["Migration", "Integration"];
    case "sweetgreen":
      return ["Automation", "Analytics"];
    case "springhealth":
      return ["CRM", "Analytics", "Support"];
    case "hopskipdrive":
      return ["CRM", "Telephony", "Chatbots"];
    case "hellotech":
      return ["Migration", "Integration", "Support"];
    default:
      return [];
  }
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, onClick }) => {
  const detailedStudy = getDetailedStudy(study.id);
  const filterContext = useContext(FilterContext);
  
  // Check if this card should be filtered out
  if (filterContext && filterContext.isFiltering) {
    const solutions = getSolutionTags(study.id);
    const hasMatchingSolution = solutions.some(solution => 
      filterContext.selectedSolutions.includes(solution as any));
    
    // Hide this card if it doesn't match the selected filters
    if (!hasMatchingSolution) {
      return null;
    }
  }
  
  // Define stats to display based on the case study
  const getStatsForCaseStudy = () => {
    if (!detailedStudy) return [];
    
    const stats = [];
    
    // Only include results, not timeframes
    if (detailedStudy.results) {
      stats.push({
        icon: <DollarSign size={14} className="text-primary" />,
        text: detailedStudy.results
      });
    }
    
    // Case-specific stats
    if (study.id === "turo") {
      // No additional Turo-specific stats needed
    } else if (study.id === "sweetgreen") {
      stats.push({
        icon: <BarChart size={14} className="text-primary" />,
        text: "35% auto-deflection"
      });
    } else if (study.id === "springhealth") {
      stats.push({
        icon: <Clock size={14} className="text-primary" />,
        text: "69% faster wait times"
      });
    } else if (study.id === "hopskipdrive") {
      stats.push({
        icon: <Clock size={14} className="text-primary" />,
        text: "45% reduced wait times"
      });
    } else if (study.id === "hellotech") {
      stats.push({
        icon: <Clock size={14} className="text-primary" />,
        text: "Accelerated deployment schedule"
      });
      stats.push({
        icon: <MessageSquare size={14} className="text-primary" />,
        text: "Reduced wait times"
      });
    } else if (study.id === "seedhealth") {
      stats.push({
        icon: <MessageSquare size={14} className="text-primary" />,
        text: "Improved response times"
      });
      stats.push({
        icon: <BarChart size={14} className="text-primary" />,
        text: "Reduced cost per interaction"
      });
    }
    
    return stats;
  };
  
  const stats = getStatsForCaseStudy();
  
  return (
    <div 
      className="glass-card rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer"
      onClick={() => onClick(study.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(study.id);
        }
      }}
      aria-label={`View case study: ${study.title}`}
    >
      <div className="h-28 bg-card/80 overflow-hidden">
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1 text-primary text-xs">
            <Briefcase size={12} />
            <span className="truncate">{study.category}</span>
          </div>
        </div>
        
        {detailedStudy && (
          <div className="font-bold text-sm text-primary mb-1 truncate">
            {detailedStudy.client}
          </div>
        )}
        
        <h3 className="text-sm font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-3">{study.title}</h3>
        
        {stats.length > 0 && (
          <div className="grid grid-cols-1 gap-1 mb-2">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-1">
                {stat.icon}
                <span className="text-xs truncate">{stat.text}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-1 text-primary text-xs hover:underline mt-auto">
          Read Case Study <ChevronRight size={12} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
