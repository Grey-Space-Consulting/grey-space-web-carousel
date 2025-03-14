
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const FeatureCard = ({ title, description, icon: Icon, index }: FeatureCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 md:p-8 group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-12 w-12 mb-6 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
