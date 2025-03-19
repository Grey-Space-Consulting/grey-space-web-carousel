
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
        icon: <DollarSign size={16} className="text-primary" />,
        text: detailedStudy.results
      });
    }
    
    // Case-specific stats
    if (study.id === "turo") {
      // No additional Turo-specific stats needed
    } else if (study.id === "sweetgreen") {
      stats.push({
        icon: <BarChart size={16} className="text-primary" />,
        text: "35% auto-deflection"
      });
    } else if (study.id === "springhealth") {
      stats.push({
        icon: <Clock size={16} className="text-primary" />,
        text: "69% faster wait times"
      });
    } else if (study.id === "hopskipdrive") {
      stats.push({
        icon: <Clock size={16} className="text-primary" />,
        text: "45% reduced wait times"
      });
    } else if (study.id === "hellotech") {
      stats.push({
        icon: <Clock size={16} className="text-primary" />,
        text: "Accelerated deployment schedule"
      });
      stats.push({
        icon: <MessageSquare size={16} className="text-primary" />,
        text: "Reduced wait times"
      });
    }
    
    return stats;
  };
  
  const stats = getStatsForCaseStudy();
  const solutionTags = getSolutionTags(study.id);
  
  return (
    <div className="glass-card rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="h-52 bg-card/80 overflow-hidden">
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-primary text-sm">
            <Briefcase size={16} />
            <span>{study.category}</span>
          </div>
        </div>
        
        {detailedStudy && (
          <div className="font-bold text-xl text-primary mb-2">
            {detailedStudy.client}
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{study.title}</h3>
        
        <p className="text-muted-foreground mb-4">{study.excerpt}</p>
        
        {/* Display solution tags */}
        {solutionTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {solutionTags.map((solution, index) => (
              <span 
                key={index} 
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground"
              >
                {solution}
              </span>
            ))}
          </div>
        )}
        
        {stats.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                {stat.icon}
                <span className="text-sm">{stat.text}</span>
              </div>
            ))}
          </div>
        )}
        
        <button 
          onClick={() => onClick(study.id)}
          className="flex items-center gap-1 text-primary hover:underline"
        >
          Read Case Study <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
