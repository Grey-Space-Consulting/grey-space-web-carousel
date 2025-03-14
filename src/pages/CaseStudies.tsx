
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
      
      <main className="pt-24 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Our Success Stories
            </div>
            <h1 className="heading-lg mb-6 max-w-4xl">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore how we've helped organizations transform their operations with innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {caseStudies.map((study) => (
              <CaseStudyCard 
                key={study.id} 
                study={study} 
                onClick={handleCaseStudyClick} 
              />
            ))}
          </div>
          
          {/* Detailed Case Studies */}
          <div className="mt-32">
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
