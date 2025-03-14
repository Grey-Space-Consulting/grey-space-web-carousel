
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
      case 'turo': return 'Turo';
      case 'sweetgreen': return 'Sweetgreen';
      case 'springhealth': return 'Spring Health';
      case 'hopskipdrive': return 'HopSkipDrive';
      default: return id;
    }
  };

  return (
    <div className="border-t pt-8 mt-12">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
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
              >
                {getDisplayName(s.id)}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CaseStudyPagination;
