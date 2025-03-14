
import React from "react";
import { Users, Cog, Lightbulb, BarChart, ListChecks, Database, Cpu } from "lucide-react";
import { ServicePackage } from "@/components/ServicePackageCard";

// Define the service packages
export const leadershipPackages: ServicePackage[] = [
  {
    title: "CX Leadership & Executive Guidance",
    description: "Strategic fractional CX leadership and executive guidance on best practices and industry standards.",
    price: "$8,000 - $15,000/month",
    duration: "Ongoing partnership",
    icon: React.createElement(Users, { className: "h-8 w-8 text-primary mb-3" }),
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
    icon: React.createElement(BarChart, { className: "h-8 w-8 text-primary mb-3" }),
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
    icon: React.createElement(ListChecks, { className: "h-8 w-8 text-primary mb-3" }),
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
export const technologyPackages: ServicePackage[] = [
  {
    title: "Technology Implementation & 'Tasteful AI'",
    description: "Platform implementations, integrations, and strategic AI solutions that align with business needs.",
    price: "$20,000 - $40,000+",
    duration: "2-4 months",
    icon: React.createElement(Database, { className: "h-8 w-8 text-primary mb-3" }),
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
    icon: React.createElement(Lightbulb, { className: "h-8 w-8 text-primary mb-3" }),
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
