
import React from "react";
import { Users, Cog, Lightbulb, ArrowRight, ListChecks } from "lucide-react";
import ServicePackageCard, { ServicePackage } from "@/components/ServicePackageCard";

const servicePackages: ServicePackage[] = [
  {
    title: "CX Leadership & Strategy Package",
    description: "Expert leadership with a focus on aligning customer experience initiatives with strategic goals.",
    price: "$10,000/month",
    duration: "20 hours/month",
    icon: <Users className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Fractional CX Leadership: Flexible leadership support for your CX strategy.",
      "Strategic Consulting: Align your technology and CX investments with business goals.",
      "Training & Process Optimization: Enhance your team's capabilities and streamline workflows."
    ],
    deliverables: [
      "CX strategy roadmap",
      "Executive guidance and leadership for CX teams",
      "Process improvements and training materials"
    ],
    highlighted: false
  },
  {
    title: "System & Workflow Optimization Package",
    description: "Improve internal operations through system integration, workflow optimization, and technology upgrades.",
    price: "$15,000 - $25,000",
    duration: "Depends on system complexity",
    icon: <Cog className="h-8 w-8 text-primary mb-3" />,
    services: [
      "System Integration & Workflows: Streamline system connections and operational processes.",
      "Tool Selections, Audits, & Migrations: Select and migrate the right tools for your business.",
      "Training & Process Optimization: Train your teams on new systems and processes."
    ],
    deliverables: [
      "System integration plan",
      "Process workflow documentation",
      "Tool audit and migration reports"
    ],
    highlighted: true
  },
  {
    title: "AI & Automation Innovation Package",
    description: "Automate repetitive tasks and integrate AI for smarter operations and better customer experience.",
    price: "$20,000 - $40,000",
    duration: "Based on automation scope",
    icon: <Lightbulb className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Intelligent Automation & AI: Implement automation and AI to enhance operational efficiency.",
      "System Integration & Workflows: Ensure systems work seamlessly with new AI tools.",
      "Training & Process Optimization: Equip your team to work with automated systems."
    ],
    deliverables: [
      "AI implementation plan",
      "Automation setup and testing",
      "Training on using automation tools"
    ],
    highlighted: false
  },
  {
    title: "Comprehensive Transformation Package",
    description: "Full-service, end-to-end solution for businesses looking to completely overhaul their CX and operations.",
    price: "$40,000 - $75,000",
    duration: "Depends on engagement scope",
    icon: <ArrowRight className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Fractional CX Leadership: Ongoing leadership for the transformation.",
      "Strategic Consulting: Align business strategy with CX and operational goals.",
      "System Integration & Workflows: Integrate new systems for operational excellence.",
      "Tool Selections, Audits, & Migrations: Choose the best tools for your needs.",
      "Training & Process Optimization: Equip your teams with necessary adaptation skills."
    ],
    deliverables: [
      "A comprehensive transformation strategy",
      "New systems, tools, and processes implemented",
      "Ongoing leadership support and training"
    ],
    highlighted: false
  },
  {
    title: "CX Audit & Optimization Package",
    description: "For businesses that already have CX processes in place but need an audit and optimization for greater impact.",
    price: "$7,500 - $15,000",
    duration: "Based on business size",
    icon: <ListChecks className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Tool Selections, Audits, & Migrations: Conduct an audit of existing CX tools.",
      "Training & Process Optimization: Identify gaps and provide training to improve performance.",
      "System Integration & Workflows: Streamline systems and improve cross-team workflows."
    ],
    deliverables: [
      "CX audit report with recommended actions",
      "Process improvement plan and training schedule",
      "Optimized workflows"
    ],
    highlighted: false
  },
  {
    title: "Executive CX Workshop Package",
    description: "Short-term, intensive workshops that will kickstart your CX transformation.",
    price: "$5,000 - $10,000",
    duration: "Half-day to full-day",
    icon: <Users className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Strategic Consulting: One-day workshop for executive leaders on CX strategy.",
      "Training & Process Optimization: Targeted training for specific teams."
    ],
    deliverables: [
      "Workshop presentations and materials",
      "Actionable steps for CX transformation"
    ],
    highlighted: false
  }
];

const ServicePackagesSection: React.FC = () => {
  return (
    <div className="mb-16 text-center">
      <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
        Service Packages
      </div>
      <h2 className="heading-lg mb-6">
        Tailored Solutions for Your Business
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Choose from our carefully designed service packages or mix and match to meet your specific needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {servicePackages.map((pkg, index) => (
          <ServicePackageCard key={pkg.title} pkg={pkg} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicePackagesSection;
