
import { LucideIcon, Users, Package, Boxes, Wrench, Globe, ArrowUpFromLine } from "lucide-react";

export interface OnePagerService {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
}

// Independent data for the one-pager
export const onePagerServices: OnePagerService[] = [
  {
    id: "leadership",
    title: "Fractional Leadership",
    description: "Expert leadership and strategic guidance to align your customer experience initiatives with business objectives.",
    benefits: [
      "Reduce executive hiring costs while accessing senior expertise",
      "Accelerate CX improvements with proven frameworks"
    ],
    icon: Users
  },
  {
    id: "helpdesk",
    title: "Managed Helpdesk",
    description: "Customized support solution covering net new implementations, ongoing maintenance and administration, and a true `part of your team` feel.",
    benefits: [
      "Fast and efficient setup of your preferred helpdesk",
      "Ongoing support and maintenance"
    ],
    icon: Package
  },
  {
    id: "integration",
    title: "System Integrations",
    description: "Seamlessly connect your in-house systems with your CRM and optimize workflows.",
    benefits: [
      "Eliminate duplicate data entry and manual processes",
      "Build native-feeling integrations with your CRM of choice",
      "Create seamless customer journeys across channels"
    ],
    icon: Boxes
  },
  {
    id: "training",
    title: "Training & Education",
    description: "Enhance team capabilities through comprehensive training and optimization.",
    benefits: [
      "Improve team adoption of new technologies",
      "Standardize processes for consistent customer experiences"
    ],
    icon: Wrench
  },
  {
    id: "tools",
    title: "Tooling Audits & RFPs",
    description: "Expert guidance in selecting, auditing, and migrating to the right tools for your business needs.",
    benefits: [
      "Fast and actionable audit reports with clear next steps",
      "Make confident technology investment decisions",
      "Identify improvement opportunities in existing systems"
    ],
    icon: Globe
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    description: "Leverage cutting-edge AI and automation solutions to enhance operational efficiency and innovation.",
    benefits: [
      "Increase self-service resolution rates",
      "Reduce response times with intelligent routing"
    ],
    icon: ArrowUpFromLine
  }
];
