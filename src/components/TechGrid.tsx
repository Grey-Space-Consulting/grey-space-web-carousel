
import React from 'react';
import { 
  BarChart, Database, MessageCircle, Cloud, Server, 
  Phone, Headphones, Zap, Network, Bot, Layers, 
  PieChart, BarChartHorizontal, Activity, LineChart, 
  Users, HelpCircle, Code, MessageSquare, Slack,
  SquareCode
} from 'lucide-react';

interface TechCardProps {
  name: string;
  category: string;
  icon?: React.ReactNode;
  logoUrl?: string;
  index: number;
}

interface Technology {
  name: string;
  category: string;
  icon?: React.ReactNode;
  logoUrl?: string;
}

// Define technologies with proper icon components or logo URLs
const technologies: Technology[] = [
  { name: "Zendesk", category: "CRM", logoUrl: "https://greyspace-v3.netlify.app/technologies/zendesk-icon.png" },
  { name: "Salesforce", category: "CRM", logoUrl: "https://greyspace-v3.netlify.app/technologies/salesforce-icon.png" },
  { name: "Kustomer", category: "CRM", logoUrl: "https://greyspace-v3.netlify.app/technologies/kustomer-icon.svg" },
  { name: "Gladly", category: "CRM", logoUrl: "https://greyspace-v3.netlify.app/technologies/gladly-icon.png" },
  { name: "Gorgias", category: "CRM", logoUrl: "https://greyspace-v3.netlify.app/technologies/gorgias-icon.png" },
  { name: "Intercom", category: "CRM", icon: <MessageSquare size={24} strokeWidth={1.5} /> },
  { name: "Dixa", category: "CRM", logoUrl: "https://greyspace-v3.netlify.app/technologies/dixa-icon.avif" },
  { name: "Rudderstack", category: "Analytics", icon: <BarChart size={24} /> },
  { name: "Segment", category: "Analytics", icon: <PieChart size={24} /> },
  { name: "Mixpanel", category: "Analytics", icon: <BarChartHorizontal size={24} /> },
  { name: "GA4", category: "Analytics", icon: <LineChart size={24} /> },
  { name: "Amplitude", category: "Analytics", icon: <Activity size={24} /> },
  { name: "Kodif", category: "AI", logoUrl: "https://greyspace-v3.netlify.app/technologies/kodif-icon.jpeg" },
  { name: "Siena", category: "AI", logoUrl: "https://greyspace-v3.netlify.app/technologies/siena-icon.jpeg" },
  { name: "Netomi", category: "AI", icon: <Bot size={24} strokeWidth={1.5} /> },
  { name: "AWS", category: "Cloud", logoUrl: "https://greyspace-v3.netlify.app/technologies/aws-icon.svg" },
  { name: "Google Cloud", category: "Cloud", icon: <Cloud size={24} strokeWidth={1.5} /> },
  { name: "Snowflake", category: "Data", icon: <Database size={24} /> },
  { name: "Ada", category: "AI", icon: <Bot size={24} /> },
  { name: "Twilio", category: "Communications", logoUrl: "https://greyspace-v3.netlify.app/technologies/twilio-icon.png" },
  { name: "Talkdesk", category: "Communications", icon: <Headphones size={24} /> },
  { name: "Aircall", category: "Communications", logoUrl: "https://greyspace-v3.netlify.app/technologies/aircall-icon.png" },
  { name: "Dialpad", category: "Communications", logoUrl: "https://greyspace-v3.netlify.app/technologies/dialpad-icon.png" },
  { name: "Assembled", category: "Operations", icon: <Layers size={24} /> },
  { name: "Mavenoid", category: "Support", logoUrl: "https://greyspace-v3.netlify.app/technologies/mavenoid-icon.avif" },
  { name: "AmazonConnect", category: "Communications", logoUrl: "https://greyspace-v3.netlify.app/technologies/amazon-connect-icon.avif" },
  { name: "ZoomPhone", category: "Communications", icon: <Phone size={24} /> },
  { name: "NiceIncontact", category: "Communications", icon: <Headphones size={24} strokeWidth={1.5} /> },
];

const TechCard = ({ name, category, icon, logoUrl, index }: TechCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-3 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="h-10 w-10 rounded-lg bg-secondary/50 mb-2 flex items-center justify-center text-primary overflow-hidden">
        {logoUrl ? (
          <img src={logoUrl} alt={name} className="max-h-8 max-w-8 object-contain" />
        ) : (
          icon
        )}
      </div>
      <h3 className="font-medium text-xs mb-0.5">{name}</h3>
      <p className="text-xs text-muted-foreground">{category}</p>
    </div>
  );
};

const TechGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {technologies.map((tech, index) => (
        <TechCard
          key={tech.name}
          name={tech.name}
          category={tech.category}
          icon={tech.icon}
          logoUrl={tech.logoUrl}
          index={index}
        />
      ))}
    </div>
  );
};

export default TechGrid;
