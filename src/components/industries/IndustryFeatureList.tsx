
import { IndustryFeature } from "@/types/industry";

interface IndustryFeatureListProps {
  features: IndustryFeature[];
}

const IndustryFeatureList = ({ features }: IndustryFeatureListProps) => {
  return (
    <ul className="space-y-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
            {feature.icon}
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default IndustryFeatureList;
