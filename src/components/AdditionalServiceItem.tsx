
import React from "react";
import { Check } from "lucide-react";

interface AdditionalServiceItemProps {
  service: string;
}

const AdditionalServiceItem: React.FC<AdditionalServiceItemProps> = ({ service }) => {
  return (
    <div className="glass-card p-6 flex items-start rounded-lg">
      <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-1" />
      <span>{service}</span>
    </div>
  );
};

export default AdditionalServiceItem;
