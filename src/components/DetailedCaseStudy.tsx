
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
        "mb-20 pt-20 -mt-20 scroll-mt-24 transition-opacity duration-500",
        isActive ? "opacity-100" : "opacity-80"
      )}
    >
      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="h-80 w-full relative">
          <img
            src={study.heroImage} 
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white">
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-3">
                <Briefcase size={16} />
                <span>{study.category}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h2>
            </div>
          </div>
        </div>
        
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Client</h3>
              <div className="flex items-center gap-3">
                <img
                  src={study.clientLogo}
                  alt={study.client}
                  className="h-10"
                />
                <span>{study.client}</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Industry</h3>
              <p>{study.industry}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Timeframe</h3>
              <p>{study.timeframe}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Results</h3>
              <p className="text-primary font-medium">{study.results}</p>
            </div>
          </div>
          
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{study.approach}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {study.keyPoints.map((point, idx) => (
                  <Card key={idx} className="border bg-muted/30">
                    <CardContent className="pt-6">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        {point.icon}
                      </div>
                      <h4 className="font-medium mb-2">{point.title}</h4>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">The Results</h3>
              <p className="text-muted-foreground leading-relaxed">{study.resultsDetails}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedCaseStudy;
