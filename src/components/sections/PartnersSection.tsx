
import PartnerLogos from "@/components/PartnerLogos";

interface PartnersSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const PartnersSection = ({ sectionRef }: PartnersSectionProps) => {
  return (
    <section 
      id="partners"
      ref={sectionRef}
      className="section-padding px-6 md:px-10 opacity-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
            Strategic Alliances
          </div>
          <h2 className="heading-lg mb-4">Our Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with industry leaders to provide you with the best technological solutions.
          </p>
        </div>
        
        <PartnerLogos />
      </div>
    </section>
  );
};

export default PartnersSection;
