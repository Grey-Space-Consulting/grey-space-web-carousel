
interface TechCardProps {
  name: string;
  category: string;
  icon: string;
  index: number;
}

const technologies = [
  { name: "SAP", category: "ERP", icon: "SAP" },
  { name: "Oracle", category: "Database", icon: "Oracle" },
  { name: "Salesforce", category: "CRM", icon: "Salesforce" },
  { name: "Microsoft Dynamics", category: "ERP", icon: "Microsoft" },
  { name: "AWS", category: "Cloud", icon: "AWS" },
  { name: "Azure", category: "Cloud", icon: "Azure" },
  { name: "Google Cloud", category: "Cloud", icon: "Google" },
  { name: "Tableau", category: "Analytics", icon: "Tableau" },
  { name: "Power BI", category: "Analytics", icon: "PowerBI" },
  { name: "ServiceNow", category: "ITSM", icon: "ServiceNow" },
  { name: "Workday", category: "HCM", icon: "Workday" },
  { name: "Snowflake", category: "Data", icon: "Snowflake" },
];

const TechCard = ({ name, category, icon, index }: TechCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="h-16 w-16 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center">
        <div className="text-xl font-bold text-primary">{icon.substring(0, 2)}</div>
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
