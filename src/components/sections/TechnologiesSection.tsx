
import TechGrid from "@/components/TechGrid";

interface TechnologiesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const TechnologiesSection = ({ sectionRef }: TechnologiesSectionProps) => {
  return (
    <section 
      id="technologies"
      ref={sectionRef}
      className="section-padding px-6 md:px-10 bg-card/30 opacity-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            Technology Stack
          </div>
          <h2 className="heading-lg mb-3">Technologies We Support</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans across a wide range of enterprise technologies and platforms to meet your operational needs.
          </p>
        </div>
        
        <TechGrid />
      </div>
    </section>
  );
};

export default TechnologiesSection;
