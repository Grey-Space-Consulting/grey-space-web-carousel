
import { OnePagerService } from "@/data/onePagerServicesData";

interface ServiceCardProps {
  service: OnePagerService;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;
  
  return (
    <div className="border border-border rounded-lg p-3">
      <div className="flex items-start gap-2 mb-1.5">
        <div className="p-1 rounded-md bg-primary/10 text-primary">
          <Icon size={14} />
        </div>
        <h3 className="text-base font-semibold">{service.title}</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-1.5">{service.description}</p>
      <ul className="text-xs space-y-0.5">
        {service.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-1.5">
            <span className="text-primary">•</span>
            <span className="text-[10px]">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
