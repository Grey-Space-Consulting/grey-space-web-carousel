
import React from 'react';
import { 
  BarChart, Database, MessageCircle, Cloud, Server, 
  Phone, Headphones, Zap, Network, Bot, Layers, 
  PieChart, BarChartHorizontal, Activity, LineChart, 
  Users, HelpCircle, Code, MessageSquare, Slack
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
  { name: "Kustomer", category: "CRM", icon: <Users size={24} /> },
  { name: "Gladly", category: "CRM", icon: <MessageSquare size={24} /> },
  { name: "Gorgias", category: "CRM", icon: <MessageCircle size={24} /> },
  { name: "Intercom", category: "CRM", icon: <MessageSquare size={24} strokeWidth={1.5} /> },
  { name: "Rudderstack", category: "Analytics", icon: <BarChart size={24} /> },
  { name: "Segment", category: "Analytics", icon: <PieChart size={24} /> },
  { name: "Mixpanel", category: "Analytics", icon: <BarChartHorizontal size={24} /> },
  { name: "GA4", category: "Analytics", icon: <LineChart size={24} /> },
  { name: "Amplitude", category: "Analytics", icon: <Activity size={24} /> },
  { name: "Kodif", category: "AI", icon: <Bot size={24} /> },
  { name: "Siena", category: "AI", icon: <Zap size={24} /> },
  { name: "Netomi", category: "AI", icon: <Bot size={24} strokeWidth={1.5} /> },
  { name: "AWS", category: "Cloud", icon: <Cloud size={24} /> },
  { name: "Google Cloud", category: "Cloud", icon: <Cloud size={24} strokeWidth={1.5} /> },
  { name: "Snowflake", category: "Data", icon: <Database size={24} /> },
  { name: "Ada", category: "AI", icon: <Bot size={24} /> },
  { name: "Twilio", category: "Communications", icon: <Phone size={24} /> },
  { name: "Talkdesk", category: "Communications", icon: <Headphones size={24} /> },
  { name: "Aircall", category: "Communications", icon: <Phone size={24} strokeWidth={1.5} /> },
  { name: "Dialpad", category: "Communications", icon: <Phone size={24} /> },
  { name: "Assembled", category: "Operations", icon: <Layers size={24} /> },
  { name: "Mavenoid", category: "Support", icon: <HelpCircle size={24} /> },
  { name: "AmazonConnect", category: "Communications", icon: <Headphones size={24} /> },
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
