
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies, detailedCaseStudies } from "@/data/caseStudies";
import CaseStudyCard from "@/components/CaseStudyCard";
import DetailedCaseStudy from "@/components/DetailedCaseStudy";
import CaseStudyPagination from "@/components/CaseStudyPagination";
import { CardContent } from "@/components/ui/card";

const CaseStudies = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeStudy, setActiveStudy] = useState<string | null>(null);
  
  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
    
    // Check if URL has a hash and scroll to that case study
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setActiveStudy(id);
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleCaseStudyClick = (id: string) => {
    setActiveStudy(id);
    // Update URL hash without full page reload
    window.history.pushState(null, '', `#${id}`);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-28 pb-12 px-3 md:px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-3">
              Our Success Stories
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 max-w-4xl">
              Case Studies
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              Explore how we've helped organizations transform their operations with innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {caseStudies.map((study) => (
              <CaseStudyCard 
                key={study.id} 
                study={study} 
                onClick={handleCaseStudyClick} 
              />
            ))}
          </div>
          
          {/* Detailed Case Studies */}
          <div className="mt-16 w-full">
            {detailedCaseStudies.map((study) => (
              <DetailedCaseStudy 
                key={study.id}
                study={study}
                isActive={activeStudy === study.id}
              />
            ))}
            
            {/* Add pagination to the last card */}
            {detailedCaseStudies.length > 0 && (
              <CardContent className="p-0">
                <CaseStudyPagination 
                  caseStudies={caseStudies}
                  activeStudy={activeStudy}
                  onCaseStudyClick={handleCaseStudyClick}
                />
              </CardContent>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
