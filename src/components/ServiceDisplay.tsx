
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface ServiceDisplayProps {
  title: string;
  description: string;
  icon: LucideIcon;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  variant?: "default" | "glass" | "bordered";
}

const ServiceDisplay = ({
  title,
  description,
  icon: Icon,
  ctaText = "Learn More",
  ctaLink = "#",
  className,
  variant = "default"
}: ServiceDisplayProps) => {
  // Define base classes for different variants
  const cardClasses = cn(
    "h-full transition-all duration-300 animate-fade-in",
    {
      "glass-card hover:shadow-xl hover:translate-y-[-5px]": variant === "glass",
      "border-primary/20 hover:border-primary/50 hover:shadow-md": variant === "bordered",
      "bg-card hover:shadow-md": variant === "default"
    },
    className
  );

  return (
    <Card className={cardClasses}>
      <CardHeader>
        <div className="h-12 w-12 mb-4 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      {ctaText && ctaLink && (
        <CardFooter className="pt-0">
          <Link to={ctaLink} className="w-full">
            <Button 
              variant="default" 
              className="gap-2 font-medium group transition-colors w-full justify-center sm:justify-start"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default ServiceDisplay;
