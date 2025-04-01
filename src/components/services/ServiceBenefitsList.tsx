
import { ChevronRight } from "lucide-react";

interface ServiceBenefitsListProps {
  benefits: string[];
}

const ServiceBenefitsList = ({ benefits }: ServiceBenefitsListProps) => {
  return (
    <div className="glass-card rounded-xl p-6 md:p-8">
      <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ChevronRight className="h-4 w-4 text-primary" />
            </div>
            <span className="text-muted-foreground">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceBenefitsList;
