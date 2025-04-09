
import { OnePagerService } from "@/data/onePagerServicesData";

interface ServiceCardProps {
  service: OnePagerService;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;
  
  return (
    <div className="border border-border rounded-lg p-4">
      <div className="flex items-start gap-2 mb-2">
        <div className="p-1 rounded-md bg-primary/10 text-primary">
          <Icon size={16} />
        </div>
        <h3 className="text-lg font-semibold">{service.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
      <ul className="text-xs space-y-1">
        {service.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-1.5">
            <span className="text-primary">•</span>
            <span className="text-[11px]">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
