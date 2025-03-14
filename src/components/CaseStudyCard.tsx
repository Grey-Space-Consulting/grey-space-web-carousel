
import React from "react";
import { ChevronRight, Briefcase, Clock, DollarSign, BarChart, Check, Globe, ArrowLeftRight, Users, Phone } from "lucide-react";
import { type CaseStudy } from "@/data/caseStudies";
import { detailedCaseStudies } from "@/data/caseStudies";

interface CaseStudyCardProps {
  study: CaseStudy;
  onClick: (id: string) => void;
}

// Helper function to get the detailed case study for a given ID
const getDetailedStudy = (id: string) => {
  return detailedCaseStudies.find(study => study.id === id);
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, onClick }) => {
  const detailedStudy = getDetailedStudy(study.id);
  
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
    } else if (study.id === "healthcare") {
      stats.push({
        icon: <BarChart size={16} className="text-primary" />,
        text: "30% improved efficiency"
      });
    } else if (study.id === "retail") {
      stats.push({
        icon: <ArrowLeftRight size={16} className="text-primary" />,
        text: "45% reduced costs"
      });
    }
    
    return stats;
  };
  
  const stats = getStatsForCaseStudy();
  
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
        <div className="flex items-center gap-2 text-primary text-sm mb-3">
          <Briefcase size={16} />
          <span>{study.category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{study.title}</h3>
        <p className="text-muted-foreground mb-4">{study.excerpt}</p>
        
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
