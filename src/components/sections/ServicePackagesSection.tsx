
import React from "react";
import { Users, Cog, Lightbulb, ArrowRight, ListChecks, Clipboard, BadgeAlert, BarChart, Database, Cpu } from "lucide-react";
import ServicePackageCard, { ServicePackage } from "@/components/ServicePackageCard";

// Define the consulting packages
const consultingPackages: ServicePackage[] = [
  {
    title: "Foundational Consulting",
    description: "High-level strategy and initial roadmap to clarify what's possible before investing in development.",
    price: "$5,000 - $10,000",
    duration: "2-3 weeks",
    icon: <Clipboard className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Discovery session to understand business goals and pain points",
      "High-level strategy for operational improvement",
      "Policy alignment and recommended best practices"
    ],
    deliverables: [
      "Strategy roadmap document",
      "Tech stack recommendations",
      "Best practices guide"
    ],
    highlighted: false
  },
  {
    title: "Operational Consulting",
    description: "Process design, policy development, and workflow optimization for teams with basic operational approaches.",
    price: "$10,000 - $20,000",
    duration: "4-6 weeks",
    icon: <BarChart className="h-8 w-8 text-primary mb-3" />,
    services: [
      "In-depth review of existing processes and policies",
      "Custom operational framework creation or refinement",
      "Recommendations for integrating metrics into business reporting"
    ],
    deliverables: [
      "Custom framework documentation",
      "Technology recommendations with guided RFP",
      "Process optimization plan"
    ],
    highlighted: true
  },
  {
    title: "Comprehensive Advisory",
    description: "Ongoing strategic partnership and continuous improvement for larger organizations.",
    price: "$15,000+/quarter",
    duration: "Ongoing partnership",
    icon: <BadgeAlert className="h-8 w-8 text-primary mb-3" />,
    services: [
      "All Operational Consulting deliverables",
      "Ongoing advisory sessions (monthly or quarterly)",
      "Review of performance metrics over time",
      "High-level stakeholder presentations to align leadership"
    ],
    deliverables: [
      "Regular performance analysis reports",
      "Executive summaries for leadership",
      "Strategic alignment with technical teams"
    ],
    highlighted: false
  }
];

// Define the technology services packages
const technologyPackages: ServicePackage[] = [
  {
    title: "Integration Setup",
    description: "Connecting core systems to get data flowing for clients who want to start small.",
    price: "$15,000 - $25,000",
    duration: "4-6 weeks",
    icon: <Database className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Initial setup and configuration with your primary CRM",
      "Basic authentication and data piping from one data source",
      "Simple alert integration for critical business events"
    ],
    deliverables: [
      "Working production or staging environment",
      "CRM integration",
      "Basic alert system"
    ],
    highlighted: false
  },
  {
    title: "Custom Feature Development",
    description: "Building specialized functionalities and AI-driven insights for enhanced operational processes.",
    price: "$30,000 - $60,000",
    duration: "8-12 weeks",
    icon: <Cpu className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Everything in Integration Setup, plus:",
      "Advanced API integrations with multiple CRMs and data sources",
      "AI-powered analysis and intelligent business insights",
      "Custom dashboards and reporting with trending and analytics"
    ],
    deliverables: [
      "Advanced integrations setup",
      "AI-driven operational tools",
      "Custom dashboards and reports",
      "Workflow management features"
    ],
    highlighted: true
  },
  {
    title: "Enterprise Implementation",
    description: "Full-scale deployment, customization, and continuous iteration for large organizations.",
    price: "$75,000+",
    duration: "3-6 months + ongoing",
    icon: <Lightbulb className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Everything in Custom Feature Development, plus:",
      "Enterprise-grade security and compliance considerations",
      "Multi-environment setup and CI/CD pipeline creation",
      "Advanced analytics and natural language query capabilities",
      "Ongoing development retainer for updates and enhancements"
    ],
    deliverables: [
      "Enterprise-ready deployment",
      "Advanced security configurations",
      "Natural language query system",
      "Dedicated support and maintenance"
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
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
        Our service packages are designed to deliver exactly what you need, whether it's strategic guidance or hands-on technical implementation.
      </p>
      
      {/* Consulting Packages */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Consulting Packages</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Strategic advisory services to help define your approach, policies, and success metrics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultingPackages.map((pkg, index) => (
            <ServicePackageCard key={pkg.title} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
      
      {/* Technology Services Packages */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Technology Services Packages</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Hands-on technical implementation to build out your tools, integrations, and AI features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologyPackages.map((pkg, index) => (
            <ServicePackageCard key={pkg.title} pkg={pkg} index={index + consultingPackages.length} />
          ))}
        </div>
      </div>
      
      {/* How These Packages Work Together */}
      <div className="mt-16 bg-secondary/50 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">How These Packages Work Together</h3>
        <p className="text-lg text-muted-foreground mb-6">
          Our packages are designed to be flexible and can be combined to create a comprehensive solution.
        </p>
        <ul className="text-left max-w-3xl mx-auto space-y-2">
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>Purchase <strong>Consulting packages</strong> if you want strategic input but will handle implementation yourself.</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>Choose <strong>Technology Services</strong> if you already have a defined strategy and need technical execution.</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>Combine <strong>Consulting + Technology</strong> for an end-to-end engagement covering both planning and implementation.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicePackagesSection;
