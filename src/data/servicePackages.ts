import React from "react";
import { Users, Cog, Lightbulb, BarChart, ListChecks, Database, Cpu, LineChart, Bot, Code, Workflow, Headphones, BrainCircuit } from "lucide-react";
import { ServicePackage } from "@/components/ServicePackageCard";

// Define the advisory packages
export const leadershipPackages: ServicePackage[] = [
  {
    title: "Platform & Operational Review",
    description: "Rapidly identify CX or technology gaps and provide a targeted roadmap for improvement, without a long-term commitment.",
    price: "Starting At $7,500",
    duration: "one-time",
    icon: React.createElement(BarChart, { className: "h-8 w-8 text-primary mb-3" }),
    services: [
      "CX & Technology Audit: High-level review of tools and workflows",
      "Maturity Assessment: Benchmark against industry best practices",
      "Vendor Recommendations: High-level guidance on potential vendors"
    ],
    deliverables: [
      "Short-form Audit Report & Quick-Win Recommendations",
      "Maturity Scorecard (light version)",
      "Vendor Analysis & Recommenations",
      "30/60/90 Day Improvement Action Plan"
    ],
    highlighted: false
  },
  {
    title: "Fractional CX Leadership Program",
    description: "Ongoing executive-level partnership at a fraction of the cost of hiring a full-time VP of CX/CTO.",
    price: "Starting at $8,500",
    duration: "/month",
    icon: React.createElement(Users, { className: "h-8 w-8 text-primary mb-3" }),
    services: [
      "Fractional CX or Tech Executive: Bi-Weekly strategic planning & stakeholder alignment",
      "Lightweight Audit & Health Checks: Continuous improvement updates",
      "Team Leadership, Goal-Setting, & Organization",
      "Mentorship & Workshops: Grow internal leadership capabilities"
    ],
    deliverables: [
      "Director/VP Level Team Leadership",
      "Monthly/Quarterly Executive Strategy Sessions",
      "Advisory Hours for Senior Leadership & Board Meetings",
      "Custom Playbooks for best practices"
    ],
    highlighted: true
  },
  {
    title: "Executive Advisory & Leadership Package",
    description: "Bring in a seasoned C-suite leader—at a fraction of a full-time hire cost—to develop and execute your vision for operational and customer experience excellence.",
    price: "Contact Us",
    duration: "(3–12+ month engagement)",
    icon: React.createElement(ListChecks, { className: "h-8 w-8 text-primary mb-3" }),
    services: [
      "Strategic Roadmap: A 12–24 month CX & Operations plan, with defined priorities and ROI targets.",
      "Leadership Mentorship: Workshops and coaching for your management team to strengthen CX-focused culture and streamline operations.",
      "Technology & Process Oversight: Recommendations for platform upgrades, workflow improvements, and vendor governance.",
      "Embedded Executive Partnership: On-demand advisory for board-level decisions, plus ongoing alignment across all departments."
    ],
    deliverables: [
      "Access years of leadership experience without the overhead of a permanent hire.",
      "Accelerate CX improvements and optimize operations quickly using proven frameworks.",
      " We act as an extension of your leadership team, ensuring every initiative aligns with your vision."
    ],
    highlighted: false
  }
];

// Define the technology implementation packages
export const technologyPackages: ServicePackage[] = [
  {
    title: "CRM & Telephony Essentials",
    description: "Quickly set up or optimize foundational CRM/telephony platforms with minimal disruption.",
    price: "Starting at $10,000",
    duration: "depending on complexity",
    icon: React.createElement(Headphones, { className: "h-8 w-8 text-primary mb-3" }),
    services: [
      "Platform Implementation/Optimization for key tools (Zendesk, Aircall, etc.)",
      "Basic Workflow Automations & Custom Fields",
      "System Training & Onboarding for internal teams"
    ],
    deliverables: [
      "Configured CRM/Telephony with best-practice workflows",
      "Documentation & Team Training Materials",
      "30-Day Post-Launch Support"
    ],
    highlighted: false
  },
  {
    title: "AI & Chatbot Accelerator",
    description: "Deploy advanced automation (chatbots, AI routing) to reduce workload and supercharge the customer experience.",
    price: "Starting at $15,000",
    duration: "2-6 month implementation",
    icon: React.createElement(Bot, { className: "h-8 w-8 text-primary mb-3" }),
    services: [
      "Chatbot Setup & NLP Training with platforms like Ada or Mavenoid",
      "AI-Driven Automation: Intelligent ticket routing, self-service deflection",
      "Basic CX Data Integration for analytics dashboards"
    ],
    deliverables: [
      "Deployed Chatbot with AI models",
      "Workflow Automations & Real-Time KPI Dashboards",
      "Success Metrics & Ongoing Tuning"
    ],
    highlighted: true
  },
  {
    title: "Full CX Data & Tech Overhaul",
    description: "A soup-to-nuts technology transformation that unifies all customer data and channels, complete with advanced AI/analytics.",
    price: "Schedule a Consultation",
    duration: "depending on scope",
    icon: React.createElement(Database, { className: "h-8 w-8 text-primary mb-3" }),
    services: [
      "CRM & Telephony Implementation or migrations",
      "Chatbot & Advanced AI with predictive analytics",
      "Deep Data Integration into platforms like Snowflake, Looker, or Power BI"
    ],
    deliverables: [
      "Fully Integrated CX Tech Stack",
      "Real-Time Executive Dashboards & AI Insights",
      "Training & Hand-Off to internal teams"
    ],
    highlighted: false
  }
];

// Define the combined packages
export const combinedPackages: ServicePackage[] = [
  {
    title: "CX & Tech Accelerator Program",
    description: "A blended approach that covers strategy, leadership, and key technology implementations over a defined timeline.",
    price: "Schedule a Consultation",
    duration: "total (4–6 month program)",
    icon: React.createElement(Workflow, { className: "h-8 w-8 text-primary mb-3" }),
    services: [
      "Advisory Quick-Start (or Fractional Leadership)",
      "CRM & Telephony Essentials implementation",
      "Optional AI/Chatbot Modules for advanced automation"
    ],
    deliverables: [
      "Phased Roadmap: from audit to system go-live",
      "Fractional Leadership for 3–6 months",
      "Configured Tech Stack & Mentorship"
    ],
    highlighted: true
  },
  {
    title: "AI Transformation & Executive Guidance",
    description: "A high-touch package for organizations that want AI-driven initiatives plus C-level strategic support.",
    price: "Schedule a Consultation",
    duration: "(6–9 month engagement)",
    icon: React.createElement(BrainCircuit, { className: "h-8 w-8 text-primary mb-3" }),
    services: [
      "Fractional CX/Tech Leadership with direct oversight of AI deployments",
      "Advanced AI & Automation for both customer-facing and back-end operations",
      "Detailed Data/Analytics Integration with executive dashboards"
    ],
    deliverables: [
      "AI Implementation Roadmap & Full Deployment",
      "Executive Coaching & AI Governance best practices",
      "Ongoing Tuning & Analytics"
    ],
    highlighted: false
  },
  {
    title: "Embedded Operations & Outsourcing",
    description: "Long-term partnership where we function as an extension of your internal CX and technology teams.",
    price: "Starting at $5,000",
    duration: "/month",
    icon: React.createElement(Lightbulb, { className: "h-8 w-8 text-primary mb-3" }),
    services: [
      "Fractional or Dedicated CX/Tech Leadership",
      "Continuous Tech Optimization as needed",
      "Data Governance & Quarterly Executive Strategy Reviews"
    ],
    deliverables: [
      "Day-to-Day Management of CX systems and processes",
      "Ongoing Process Improvements & AI Model Tuning",
      "Quarterly Roadmap Updates & KPI Reports"
    ],
    highlighted: false
  }
];
