
interface CertificationsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const CertificationsSection = ({ sectionRef }: CertificationsSectionProps) => {
  return (
    <section 
      id="certifications"
      ref={sectionRef}
      className="section-padding px-6 md:px-10 bg-background opacity-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            Certifications
          </div>
          <h2 className="heading-lg mb-3">Our Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We maintain industry certifications to ensure we deliver the highest quality solutions and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Certification 1 */}
          <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all duration-300">
            <div className="h-24 w-24 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center overflow-hidden">
              <div className="text-muted-foreground text-sm">Certification 1</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Certification Name</h3>
            <p className="text-sm text-muted-foreground">Brief description of this certification</p>
          </div>

          {/* Certification 2 */}
          <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all duration-300">
            <div className="h-24 w-24 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center overflow-hidden">
              <div className="text-muted-foreground text-sm">Certification 2</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Certification Name</h3>
            <p className="text-sm text-muted-foreground">Brief description of this certification</p>
          </div>

          {/* Certification 3 */}
          <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all duration-300">
            <div className="h-24 w-24 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center overflow-hidden">
              <div className="text-muted-foreground text-sm">Certification 3</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Certification Name</h3>
            <p className="text-sm text-muted-foreground">Brief description of this certification</p>
          </div>

          {/* Certification 4 */}
          <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all duration-300">
            <div className="h-24 w-24 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center overflow-hidden">
              <div className="text-muted-foreground text-sm">Certification 4</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Certification Name</h3>
            <p className="text-sm text-muted-foreground">Brief description of this certification</p>
          </div>

          {/* Certification 5 */}
          <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all duration-300">
            <div className="h-24 w-24 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center overflow-hidden">
              <div className="text-muted-foreground text-sm">Certification 5</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Certification Name</h3>
            <p className="text-sm text-muted-foreground">Brief description of this certification</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
