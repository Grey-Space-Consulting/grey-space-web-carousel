
interface TechCardProps {
  name: string;
  category: string;
  icon: string;
  index: number;
}

const technologies = [
  { name: "Zendesk", category: "CRM", icon: "Ze" },
  { name: "Salesforce", category: "CRM", icon: "Sa" },
  { name: "Kustomer", category: "CRM", icon: "Ku" },
  { name: "Gladly", category: "CRM", icon: "Gl" },
  { name: "Gorgias", category: "CRM", icon: "Go" },
  { name: "Intercom", category: "CRM", icon: "In" },
  { name: "Rudderstack", category: "Analytics", icon: "Ru" },
  { name: "Segment", category: "Analytics", icon: "Se" },
  { name: "Mixpanel", category: "Analytics", icon: "Mi" },
  { name: "GA4", category: "Analytics", icon: "GA" },
  { name: "Amplitude", category: "Analytics", icon: "Am" },
  { name: "Kodif", category: "AI", icon: "Ko" },
  { name: "Siena", category: "AI", icon: "Si" },
  { name: "Netomi", category: "AI", icon: "Ne" },
  { name: "AWS", category: "Cloud", icon: "AW" },
  { name: "Google Cloud", category: "Cloud", icon: "GC" },
  { name: "Snowflake", category: "Data", icon: "Sn" },
  { name: "Ada", category: "AI", icon: "Ad" },
  { name: "Twilio", category: "Communications", icon: "Tw" },
  { name: "Talkdesk", category: "Communications", icon: "Ta" },
  { name: "Aircall", category: "Communications", icon: "Ai" },
  { name: "Dialpad", category: "Communications", icon: "Di" },
  { name: "Assembled", category: "Operations", icon: "As" },
  { name: "Mavenoid", category: "Support", icon: "Ma" },
  { name: "AmazonConnect", category: "Communications", icon: "AC" },
  { name: "ZoomPhone", category: "Communications", icon: "ZP" },
  { name: "NiceIncontact", category: "Communications", icon: "NI" },
];

const TechCard = ({ name, category, icon, index }: TechCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="h-16 w-16 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center">
        <div className="text-xl font-bold text-primary">{icon}</div>
      </div>
      <h3 className="font-medium text-lg mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground">{category}</p>
    </div>
  );
};

const TechGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
      {technologies.map((tech, index) => (
        <TechCard
          key={tech.name}
          name={tech.name}
          category={tech.category}
          icon={tech.icon}
          index={index}
        />
      ))}
    </div>
  );
};

export default TechGrid;
