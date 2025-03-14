
interface PartnerLogoProps {
  name: string;
  index: number;
}

const partners = [
  "Accenture",
  "Deloitte",
  "IBM",
  "Microsoft",
  "Oracle",
  "SAP",
  "AWS",
  "Google",
];

const PartnerLogo = ({ name, index }: PartnerLogoProps) => {
  return (
    <div 
      className="h-20 rounded-lg glass-card flex items-center justify-center px-6 group hover:border-primary/30 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="text-lg font-medium text-foreground/70 group-hover:text-primary transition-colors duration-300">{name}</div>
    </div>
  );
};

const PartnerLogos = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
      {partners.map((partner, index) => (
        <PartnerLogo
          key={partner}
          name={partner}
          index={index}
        />
      ))}
    </div>
  );
};

export default PartnerLogos;
