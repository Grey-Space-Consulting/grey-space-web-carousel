
import { LucideIcon } from "lucide-react";

export interface OnePagerService {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: () => JSX.Element;
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
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    id: "helpdesk",
    title: "Managed Helpdesk",
    description: "Customized support solution covering net new implementations, ongoing maintenance and administration, and a true `part of your team` feel.",
    benefits: [
      "Fast and efficient setup of your preferred helpdesk",
      "Ongoing support and maintenance"
    ],
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8a8 8 0 0 1-16 0"></path>
        <path d="M2 8h20"></path>
        <path d="M5 12.5V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7.5"></path>
        <line x1="12" y1="13" x2="12" y2="18"></line>
      </svg>
    )
  },
  {
    id: "integration",
    title: "System Integrations",
    description: "Seamlessly connect your systems and optimize workflows for maximum operational efficiency.",
    benefits: [
      "Eliminate duplicate data entry and manual processes",
      "Create seamless customer journeys across channels"
    ],
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2"></rect>
        <rect x="8" y="8" width="8" height="8" rx="1"></rect>
        <path d="M12 2v4"></path>
        <path d="M12 18v4"></path>
        <path d="M2 12h4"></path>
        <path d="M18 12h4"></path>
      </svg>
    )
  },
  {
    id: "training",
    title: "Training & Education",
    description: "Enhance team capabilities and streamline processes through comprehensive training and optimization.",
    benefits: [
      "Improve team adoption of new technologies",
      "Standardize processes for consistent customer experiences"
    ],
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  },
  {
    id: "tools",
    title: "Tooling Audits & RFPs",
    description: "Expert guidance in selecting, auditing, and migrating to the right tools for your business needs.",
    benefits: [
      "Make confident technology investment decisions",
      "Identify improvement opportunities in existing systems"
    ],
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    )
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    description: "Leverage cutting-edge AI and automation solutions to enhance operational efficiency and innovation.",
    benefits: [
      "Increase self-service resolution rates",
      "Reduce response times with intelligent routing"
    ],
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 20H6a4 4 0 0 1-4-4V7a3 3 0 0 1 3-3h14"></path>
        <path d="M18 22V10"></path>
        <path d="m14 14 4-4 4 4"></path>
      </svg>
    )
  }
];
