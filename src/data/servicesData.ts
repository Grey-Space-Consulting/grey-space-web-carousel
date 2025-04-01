
import { Building, Cog, Globe, Headphones, Lightbulb, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  expandedDescription: string;
  benefits: string[];
  callToAction: string;
  actionLink: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "leadership",
    title: "Fractional Leadership",
    description: "Expert leadership and strategic guidance to align your customer experience initiatives with business objectives.",
    expandedDescription: "Our fractional leadership team brings decades of executive experience to your organization without the overhead of full-time hires. We provide strategic direction, stakeholder alignment, and hands-on guidance to transform your customer experience operations.",
    benefits: [
      "Reduce executive hiring costs while accessing senior expertise",
      "Accelerate CX improvements with proven frameworks",
      "Align technology investments with business objectives",
      "Develop internal leadership capabilities through mentorship"
    ],
    callToAction: "Book a Strategy Call",
    actionLink: "https://calendly.com/greyspace-hudson/grey-space-introductory-call",
    icon: Users
  },
  {
    id: "helpdesk",
    title: "Managed Helpdesk",
    description: "Customized support solution with AI-powered responses, seamless system integration, and comprehensive training for your team.",
    expandedDescription: "Our managed helpdesk service provides 24/7 technical support with AI-powered automation and seamless integration with your existing systems. We handle everything from initial setup and configuration to ongoing maintenance and optimization.",
    benefits: [
      "Provide 24/7 support without staffing challenges",
      "Reduce resolution times with AI-powered responses",
      "Maintain data consistency across platforms",
      "Scale support operations up or down as needed"
    ],
    callToAction: "Get Support Solutions",
    actionLink: "https://calendly.com/greyspace-hudson/grey-space-introductory-call",
    icon: Headphones
  },
  {
    id: "integration",
    title: "System Integrations",
    description: "Seamlessly connect your systems and optimize workflows for maximum operational efficiency.",
    expandedDescription: "We specialize in connecting disparate systems into a cohesive technology ecosystem. Our integration experts eliminate data silos, automate manual processes, and create unified workflows that drive operational excellence.",
    benefits: [
      "Eliminate duplicate data entry and manual processes",
      "Create seamless customer journeys across channels",
      "Unlock insights through connected data sources",
      "Increase team productivity with streamlined workflows"
    ],
    callToAction: "Schedule a Tech Assessment",
    actionLink: "https://calendly.com/greyspace-hudson/grey-space-introductory-call",
    icon: Building
  },
  {
    id: "training",
    title: "Training & Education",
    description: "Enhance team capabilities and streamline processes through comprehensive training and optimization.",
    expandedDescription: "Our training programs combine technical skills development with process optimization to ensure your team can fully leverage your technology investments. We create custom playbooks, deliver hands-on workshops, and implement continuous improvement frameworks.",
    benefits: [
      "Improve team adoption of new technologies",
      "Standardize processes for consistent customer experiences",
      "Reduce onboarding time for new employees",
      "Build a culture of continuous improvement"
    ],
    callToAction: "Explore Training Options",
    actionLink: "https://calendly.com/greyspace-hudson/grey-space-introductory-call",
    icon: Cog
  },
  {
    id: "tools",
    title: "Tooling Audits & RFPs",
    description: "Expert guidance in selecting, auditing, and migrating to the right tools for your business needs.",
    expandedDescription: "Choosing the right technology stack is critical for operational success. We guide you through vendor selection, perform detailed technical audits, and execute smooth migrations that minimize disruption while maximizing ROI.",
    benefits: [
      "Make confident technology investment decisions",
      "Identify improvement opportunities in existing systems",
      "Reduce risk during complex migrations",
      "Optimize configurations for your specific needs"
    ],
    callToAction: "Request a Tool Audit",
    actionLink: "https://calendly.com/greyspace-hudson/grey-space-introductory-call",
    icon: Globe
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    description: "Leverage cutting-edge AI and automation solutions to enhance operational efficiency and innovation.",
    expandedDescription: "We implement AI-powered solutions that transform customer experience while reducing operational costs. From conversational AI and predictive analytics to intelligent routing and process automation, we help you harness the power of artificial intelligence.",
    benefits: [
      "Increase self-service resolution rates",
      "Reduce response times with intelligent routing",
      "Anticipate customer needs with predictive analytics",
      "Scale operations without proportional cost increases"
    ],
    callToAction: "Discover AI Solutions",
    actionLink: "https://calendly.com/greyspace-hudson/grey-space-introductory-call",
    icon: Lightbulb
  }
];
