
import React from "react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { type CaseStudy } from "@/data/caseStudies";

interface CaseStudyPaginationProps {
  caseStudies: CaseStudy[];
  activeStudy: string | null;
  onCaseStudyClick: (id: string) => void;
}

const CaseStudyPagination: React.FC<CaseStudyPaginationProps> = ({ 
  caseStudies, 
  activeStudy, 
  onCaseStudyClick 
}) => {
  // Helper function to get display name for pagination
  const getDisplayName = (id: string) => {
    switch(id) {
      case 'seedhealth': return 'Seed Health';
      case 'turo': return 'Turo';
      case 'sweetgreen': return 'Sweetgreen';
      case 'springhealth': return 'Spring Health';
      case 'hopskipdrive': return 'HopSkipDrive';
      case 'hellotech': return 'HelloTech';
      default: return id;
    }
  };

  // Find the index of the current active case study
  const activeIndex = activeStudy 
    ? caseStudies.findIndex(study => study.id === activeStudy) 
    : -1;

  // Determine the previous and next case studies
  const prevStudy = activeIndex > 0 
    ? caseStudies[activeIndex - 1].id 
    : caseStudies[caseStudies.length - 1].id;
  
  const nextStudy = activeIndex < caseStudies.length - 1 && activeIndex !== -1
    ? caseStudies[activeIndex + 1].id
    : caseStudies[0].id;

  return (
    <div className="border-t pt-4 mt-6">
      <Pagination>
        <PaginationContent className="flex flex-wrap">
          <PaginationItem>
            <PaginationPrevious 
              href={`#${prevStudy}`}
              onClick={(e) => {
                e.preventDefault();
                onCaseStudyClick(prevStudy);
              }}
            />
          </PaginationItem>
          {caseStudies.map((s) => (
            <PaginationItem key={s.id}>
              <PaginationLink 
                href={`#${s.id}`}
                isActive={activeStudy === s.id}
                onClick={(e) => {
                  e.preventDefault();
                  onCaseStudyClick(s.id);
                }}
                className="text-xs px-2"
              >
                {getDisplayName(s.id)}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext 
              href={`#${nextStudy}`}
              onClick={(e) => {
                e.preventDefault();
                onCaseStudyClick(nextStudy);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CaseStudyPagination;
