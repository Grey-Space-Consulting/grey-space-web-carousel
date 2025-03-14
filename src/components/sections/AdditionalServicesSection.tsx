
import React from "react";
import AdditionalServiceItem from "@/components/AdditionalServiceItem";

const additionalServices = [
  "Customer Journey Mapping: Visualize customer journeys to identify friction points and improvement areas.",
  "CX Performance Metrics & KPIs: Develop metrics to measure CX success and optimize accordingly.",
  "Change Management Support: Assist in managing the human side of CX transformations.",
  "Ongoing CX Analytics & Reporting: Provide continuous support and analysis for CX improvement."
];

const AdditionalServicesSection: React.FC = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="heading-md mb-6">Additional Services</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Enhance your package with these specialized services to create a custom solution
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {additionalServices.map((service, index) => (
          <AdditionalServiceItem key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AdditionalServicesSection;
