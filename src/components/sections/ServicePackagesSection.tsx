
import React from "react";
import { Users, Cog, Lightbulb, ArrowRight, ListChecks, BarChart, Database, Cpu } from "lucide-react";
import ServicePackageCard, { ServicePackage } from "@/components/ServicePackageCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define the service packages
const leadershipPackages: ServicePackage[] = [
  {
    title: "CX Leadership & Executive Guidance",
    description: "Strategic fractional CX leadership and executive guidance on best practices and industry standards.",
    price: "$8,000 - $15,000/month",
    duration: "Ongoing partnership",
    icon: <Users className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Fractional CX Leadership: On-demand strategic oversight",
      "Executive Workshops & Guidance on industry trends",
      "Standards & Compliance Advisement for customer experience"
    ],
    deliverables: [
      "CX strategy roadmap",
      "Quarterly executive workshop or briefing",
      "Leadership support hours for team or board meetings"
    ],
    highlighted: false
  },
  {
    title: "Platform & Tooling Advisory",
    description: "Platform audits, tool recommendations, and implementation planning to optimize your technology stack.",
    price: "$5,000 - $15,000",
    duration: "2-6 weeks",
    icon: <BarChart className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Platform/Tool Audits to identify gaps or inefficiencies",
      "Recommendation Reports aligned with budget and goals",
      "Implementation Roadmaps for adopting new tools"
    ],
    deliverables: [
      "Comprehensive audit report of current tools",
      "Vendor/tool selection matrix",
      "Implementation/migration roadmap"
    ],
    highlighted: true
  },
  {
    title: "Operational Process Optimization",
    description: "Process audits, team training, and ongoing system administration to streamline operations.",
    price: "$5,000 - $12,000/month",
    duration: "Ongoing support",
    icon: <ListChecks className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Operational Process Audits to identify inefficiencies",
      "Tool/System Admin Work for critical platforms",
      "Process Optimization & Training for streamlined workflows"
    ],
    deliverables: [
      "Current-state vs. future-state process maps",
      "Customized training materials and SOPs",
      "Monthly admin support hours"
    ],
    highlighted: false
  }
];

// Define the technology services packages
const technologyPackages: ServicePackage[] = [
  {
    title: "Technology Implementation & 'Tasteful AI'",
    description: "Platform implementations, integrations, and strategic AI solutions that align with business needs.",
    price: "$20,000 - $40,000+",
    duration: "2-4 months",
    icon: <Database className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Solution Architecture & Implementation planning",
      "Custom Integrations to unify disparate systems",
      "Fractional Tech Leadership ensuring strategic alignment",
      "AI Exploration for practical automation opportunities"
    ],
    deliverables: [
      "Detailed implementation plan and timeline",
      "Configured platforms or integrations",
      "Training on new systems and AI components"
    ],
    highlighted: true
  },
  {
    title: "Comprehensive Transformation Package",
    description: "End-to-end operational transformation combining leadership, audits, advisory, and implementation.",
    price: "Starting at $50,000+",
    duration: "3-12 months",
    icon: <Lightbulb className="h-8 w-8 text-primary mb-3" />,
    services: [
      "Full CX & Operational Audit across all domains",
      "Platform & Tooling Roadmap + Implementation",
      "Fractional CX & Tech Leadership for guidance",
      "Continuous Improvement & Change Management"
    ],
    deliverables: [
      "Unified transformation strategy and project plan",
      "Implementation of recommended platforms/tools",
      "Training, documentation, and change management support",
      "Regular executive-level oversight and reporting"
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
      
      <Tabs defaultValue="leadership" className="w-full mb-10">
        <TabsList className="mx-auto mb-8 bg-secondary/80 p-1.5 border border-muted/30 shadow-lg rounded-xl">
          <TabsTrigger 
            value="leadership" 
            className="px-8 py-3 rounded-lg text-base font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
          >
            <Users className="mr-2 h-5 w-5" />
            Leadership & Advisory
          </TabsTrigger>
          <TabsTrigger 
            value="technology" 
            className="px-8 py-3 rounded-lg text-base font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
          >
            <Database className="mr-2 h-5 w-5" />
            Technology Implementation
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="leadership" className="mt-8 animate-fade-in">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Strategic advisory services to help optimize your operations, tools, and customer experience initiatives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {leadershipPackages.map((pkg, index) => (
              <ServicePackageCard key={pkg.title} pkg={pkg} index={index} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="technology" className="mt-8 animate-fade-in">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Hands-on technical implementation to build out your tools, integrations, and intelligent automation solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {technologyPackages.map((pkg, index) => (
              <ServicePackageCard key={pkg.title} pkg={pkg} index={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      {/* How These Packages Work Together */}
      <div className="mt-8 bg-secondary/50 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">How These Packages Work Together</h3>
        <p className="text-lg text-muted-foreground mb-6">
          Our packages are designed to be flexible and can be combined to create a custom program that aligns with your specific needs.
        </p>
        <ul className="text-left max-w-3xl mx-auto space-y-2">
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>Use <strong>Leadership & Advisory</strong> packages for strategic guidance without technical implementation.</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>Choose <strong>Technology Implementation</strong> when you have a clear strategy but need technical execution.</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>Combine packages for a <strong>comprehensive solution</strong> covering strategy, operations, and implementation.</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>All packages offer <strong>customization options</strong> to adjust deliverables, timelines, and involvement levels.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicePackagesSection;
