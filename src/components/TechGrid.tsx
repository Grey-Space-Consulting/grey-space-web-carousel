
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
  { name: "Intercom", category: "CRM", logoUrl: "https://www.clipartmax.com/png/small/292-2927934_intercom-logo-intercom-logo.png" },
  { name: "Dixa", category: "CRM", logoUrl: "https://greyspace-v3.netlify.app/technologies/dixa-icon.avif" },
  { name: "Rudderstack", category: "Analytics", logoUrl: "https://api.getkoala.com/web/companies/rudderstack.com/logo" },
  { name: "Segment", category: "Analytics", logoUrl: "https://logosandtypes.com/wp-content/uploads/2020/08/segment.svg" },
  { name: "Mixpanel", category: "Analytics", logoUrl: "https://seeklogo.com/images/M/mixpanel-logo-A209D265A2-seeklogo.com.png" },
  { name: "GA4", category: "Analytics", logoUrl: "https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo.png" },
  { name: "Amplitude", category: "Analytics", logoUrl: "https://logosandtypes.com/wp-content/uploads/2020/06/amplitude.svg" },
  { name: "Kodif", category: "AI", logoUrl: "https://greyspace-v3.netlify.app/technologies/kodif-icon.jpeg" },
  { name: "Siena", category: "AI", logoUrl: "https://greyspace-v3.netlify.app/technologies/siena-icon.jpeg" },
  { name: "Netomi", category: "AI", logoUrl: "https://du3qakkv2rjkz.cloudfront.net/entity_assets/bots/113/Netomi_Logo_320px.png" },
  { name: "AWS", category: "Cloud", logoUrl: "https://greyspace-v3.netlify.app/technologies/aws-icon.svg" },
  { name: "Google Cloud", category: "Cloud", logoUrl: "https://images.icon-icons.com/2642/PNG/512/google_cloud_logo_icon_159333.png" },
  { name: "Snowflake", category: "Data", logoUrl: "https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Symbol-500x281.png" },
  { name: "Ada", category: "AI", logoUrl: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_dad63cb7954c989da3523a03418e408b/ada-support-inc-ada.png" },
  { name: "Twilio", category: "Communications", logoUrl: "https://greyspace-v3.netlify.app/technologies/twilio-icon.png" },
  { name: "Talkdesk", category: "Communications", logoUrl: "https://cdn.brandfetch.io/idf9G-9HRX/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1668013991932" },
  { name: "Aircall", category: "Communications", logoUrl: "https://greyspace-v3.netlify.app/technologies/aircall-icon.png" },
  { name: "Dialpad", category: "Communications", logoUrl: "https://greyspace-v3.netlify.app/technologies/dialpad-icon.png" },
  { name: "Assembled", category: "Operations", logoUrl: "https://res.cloudinary.com/apideck/image/upload/v1603781513/icons/assembled.png" },
  { name: "Mavenoid", category: "Support", logoUrl: "https://greyspace-v3.netlify.app/technologies/mavenoid-icon.avif" },
  { name: "AmazonConnect", category: "Communications", logoUrl: "https://greyspace-v3.netlify.app/technologies/amazon-connect-icon.avif" },
  { name: "ZoomPhone", category: "Communications", logoUrl: "https://ml.globenewswire.com/Resource/Download/1a5e6f52-9a8e-432b-84cc-7dfb0e6623e2?size=3" },
  { name: "NiceIncontact", category: "Communications", logoUrl: "https://www.celigo.com/wp-content/uploads/2024/01/nice-cxone-logo.jpg" },
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
