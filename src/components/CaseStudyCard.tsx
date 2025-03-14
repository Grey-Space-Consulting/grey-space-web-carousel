
import React from "react";
import { ChevronRight, Briefcase, Clock, DollarSign, BarChart } from "lucide-react";
import { type CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  study: CaseStudy;
  onClick: (id: string) => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, onClick }) => {
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
        
        {study.id === "turo" && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span className="text-sm">3 month turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-primary" />
              <span className="text-sm">$200K annual savings</span>
            </div>
          </div>
        )}
        
        {study.id === "sweetgreen" && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-primary" />
              <span className="text-sm">$175K annual savings</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart size={16} className="text-primary" />
              <span className="text-sm">35% auto-deflection</span>
            </div>
          </div>
        )}
        
        {study.id === "springhealth" && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-primary" />
              <span className="text-sm">$300K annual savings</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span className="text-sm">69% faster wait times</span>
            </div>
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
