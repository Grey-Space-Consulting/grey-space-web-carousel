
import React from "react";
import { Briefcase } from "lucide-react";
import { type DetailedCaseStudy as DetailedCaseStudyType } from "@/data/caseStudies";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface DetailedCaseStudyProps {
  study: DetailedCaseStudyType;
  isActive: boolean;
}

const DetailedCaseStudy: React.FC<DetailedCaseStudyProps> = ({ study, isActive }) => {
  return (
    <div 
      id={study.id}
      className={cn(
        "mb-12 pt-16 -mt-16 scroll-mt-24 transition-opacity duration-500 w-full",
        isActive ? "opacity-100" : "opacity-80"
      )}
    >
      <Card className="overflow-hidden border-0 shadow-lg w-full">
        <div className="h-56 sm:h-64 md:h-72 w-full relative">
          <img
            src={study.heroImage} 
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-5 text-white">
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-2">
                <Briefcase size={16} />
                <span>{study.category}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{study.title}</h2>
            </div>
          </div>
        </div>
        
        <CardContent className="p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Client</h3>
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-bold text-primary">{study.client}</h4>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Industry</h3>
              <p className="text-sm">{study.industry}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Timeframe</h3>
              <p className="text-sm">{study.timeframe}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Results</h3>
              <p className="text-sm text-primary font-medium">{study.results}</p>
            </div>
          </div>
          
          <div className="space-y-5 mb-6">
            <div>
              <h3 className="text-base font-semibold mb-2">The Challenge</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
            </div>
            
            <div>
              <h3 className="text-base font-semibold mb-2">Our Approach</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{study.approach}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {study.keyPoints.map((point, idx) => (
                  <Card key={idx} className="border bg-muted/30">
                    <CardContent className="pt-3 p-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        {point.icon}
                      </div>
                      <h4 className="text-sm font-medium mb-1">{point.title}</h4>
                      <p className="text-xs text-muted-foreground">{point.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-base font-semibold mb-2">The Results</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{study.resultsDetails}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedCaseStudy;
