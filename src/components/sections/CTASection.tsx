
interface CTASectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const CTASection = ({ sectionRef }: CTASectionProps) => {
  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="section-padding px-6 md:px-10 opacity-0"
    >
      <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 text-center">
        <h2 className="heading-md mb-6">Ready to Transform Your Operations?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how Grey Space can help optimize your operational technology and drive business growth.
        </p>
        <a 
          href="#" 
          className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
};

export default CTASection;
