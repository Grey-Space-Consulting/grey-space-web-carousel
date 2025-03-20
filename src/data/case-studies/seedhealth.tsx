import React from "react";
import { DetailedCaseStudy } from "../types";
import { DollarSign, Clock, MessageSquare, BarChart, Database, UserCheck } from "lucide-react";

const seedhealthStudy: DetailedCaseStudy = {
  id: "seedhealth",
  title: "CRM Rebuild with Improved Metrics & Cost Reduction",
  category: "D2C Ecommerce",
  excerpt: "A complete CRM overhaul that maintained support quality while allowing significant team restructuring and cost savings.",
  image: "https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto,c_scale,w_550/v1649193546/DS-01_Jar_and_capsule.png",
  client: "Seed Health",
  clientLogo: "/placeholder.svg",
  industry: "Health & Wellness",
  timeframe: "2 months",
  results: "$500,000+ annual savings",
  challenge: "Seed Health, a premium probiotic company, needed to restructure their customer care team for efficiency while maintaining their exceptional support standards. Their existing CRM infrastructure couldn't provide the automation and insights needed to support a leaner team structure without compromising on service quality.",
  approach: "We implemented a comprehensive CRM rebuild with a primary focus on redesigning their ticket routing business logic. The new system intelligently categorizes and prioritizes customer inquiries based on content analysis, customer history, and predicted resolution complexity. This intelligent routing ensures that even with fewer agents, high-priority issues are addressed promptly while routine inquiries are efficiently managed through automation. Our approach integrated this advanced routing system with broader improvements in data quality, workflow streamlining, and analytics capabilities, enabling the maintenance of high-quality customer interactions with significantly reduced resources.",
  keyPoints: [
    {
      icon: <DollarSign size={18} className="text-primary" />,
      title: "Cost Optimization",
      description: "Designed infrastructure to support team restructuring with significant cost savings."
    },
    {
      icon: <MessageSquare size={18} className="text-primary" />,
      title: "Support Excellence",
      description: "Maintained and improved response times and CSAT scores despite reduced team size."
    },
    {
      icon: <Database size={18} className="text-primary" />,
      title: "Data Quality",
      description: "Enhanced data collection and reporting capabilities for better business insights."
    },
    {
      icon: <BarChart size={18} className="text-primary" />,
      title: "Efficiency Metrics",
      description: "Reduced cost per interaction through automation and workflow improvements."
    },
    {
      icon: <Clock size={18} className="text-primary" />,
      title: "Time Savings",
      description: "Automated routine tasks to free up agent time for complex customer needs."
    },
    {
      icon: <UserCheck size={18} className="text-primary" />,
      title: "Customer Satisfaction",
      description: "Streamlined customer journeys for higher satisfaction and retention."
    }
  ],
  resultsDetails: "The CRM rebuild enabled Seed Health to maintain superior customer support quality while significantly reducing operational costs. The company achieved over $500,000 in annualized savings through team restructuring, supported by enhanced automation and more efficient workflows. Response times improved despite the leaner team structure, and customer satisfaction scores remained high. Additionally, improved data collection and reporting provided better visibility into customer trends and business metrics.",
  heroImage: "/placeholder.svg"
};

export default seedhealthStudy;
