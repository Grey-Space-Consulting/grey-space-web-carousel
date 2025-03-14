
import { Briefcase, Languages, GitMerge, ArrowLeftRight, DollarSign, Check, Users, Globe } from "lucide-react";
import React from "react";

export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
};

export type DetailedCaseStudy = CaseStudy & {
  client: string;
  clientLogo: string;
  industry: string;
  timeframe: string;
  results: string;
  challenge: string;
  approach: string;
  keyPoints: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  resultsDetails: string;
  heroImage: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "turo",
    title: "Turo: Post-Acquisition Migration and Localization",
    category: "Technology",
    excerpt: "How we helped Turo merge support systems after acquiring a European competitor while localizing to multiple languages.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop",
  },
  {
    id: "healthcare",
    title: "Healthcare Data Integration",
    category: "Healthcare",
    excerpt: "Transforming patient care through integrated data systems at a major hospital network.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
  },
  {
    id: "retail",
    title: "Retail Supply Chain Revolution",
    category: "Retail",
    excerpt: "Creating a resilient, AI-driven supply chain for a national retail chain.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
  },
];

export const detailedCaseStudies: DetailedCaseStudy[] = [
  {
    id: "turo",
    title: "Turo: Post-Acquisition Migration and Localization",
    category: "Technology",
    client: "Turo",
    clientLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Turo_logo.svg/320px-Turo_logo.svg.png",
    industry: "Car Sharing / Transportation",
    timeframe: "Less than 3 months",
    results: "$200K annual savings",
    challenge: "Following Turo's acquisition of a European competitor, the company faced the complex challenge of merging two distinct customer support systems. This merger was further complicated by the need to maintain localization in multiple languages to serve their international customer base. Turo needed a solution that would minimize disruption to their operations while achieving cost efficiency.",
    approach: "Our team took a systematic approach to addressing Turo's challenges, focusing on seamless integration while preserving multilingual support capabilities:",
    keyPoints: [
      {
        icon: <GitMerge className="h-6 w-6 text-primary" />,
        title: "Support System Merger",
        description: "Implemented a phased integration strategy to merge the two support platforms without service disruption."
      },
      {
        icon: <Languages className="h-6 w-6 text-primary" />,
        title: "Multilingual Localization",
        description: "Developed a comprehensive localization framework to maintain support in all required languages."
      },
      {
        icon: <DollarSign className="h-6 w-6 text-primary" />,
        title: "Cost Optimization",
        description: "Identified and eliminated redundancies while maintaining service quality to maximize cost savings."
      }
    ],
    resultsDetails: "The project was completed in under three months, significantly faster than industry averages for similar integrations. Our solution delivered an annualized savings of $200,000 compared to competing bids and the cost of utilizing internal resources. The integrated system maintained full localization capabilities, ensuring seamless customer support across all markets. Additionally, the new unified platform improved operational efficiency by standardizing processes and eliminating redundancies.",
    heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop",
    excerpt: "How we helped Turo merge support systems after acquiring a European competitor while localizing to multiple languages.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop",
  },
  {
    id: "healthcare",
    title: "Healthcare Data Integration",
    category: "Healthcare",
    client: "Major Hospital Network",
    clientLogo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&h=50&auto=format&fit=crop",
    industry: "Healthcare",
    timeframe: "6 months",
    results: "30% improvement in patient care efficiency",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    approach: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    keyPoints: [
      {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "Patient-Centric Design",
        description: "Developed systems with patient experience as the primary focus."
      },
      {
        icon: <ArrowLeftRight className="h-6 w-6 text-primary" />,
        title: "Seamless Data Flow",
        description: "Created integrated data pathways between previously siloed systems."
      },
      {
        icon: <Check className="h-6 w-6 text-primary" />,
        title: "Compliance Assurance",
        description: "Implemented robust security measures to maintain regulatory compliance."
      }
    ],
    resultsDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&auto=format&fit=crop",
    excerpt: "Transforming patient care through integrated data systems at a major hospital network.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
  },
  {
    id: "retail",
    title: "Retail Supply Chain Revolution",
    category: "Retail",
    client: "National Retail Chain",
    clientLogo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=100&h=50&auto=format&fit=crop",
    industry: "Retail",
    timeframe: "9 months",
    results: "45% reduction in supply chain costs",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    approach: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    keyPoints: [
      {
        icon: <Globe className="h-6 w-6 text-primary" />,
        title: "Global Integration",
        description: "Connected international supply chains into a single, manageable system."
      },
      {
        icon: <ArrowLeftRight className="h-6 w-6 text-primary" />,
        title: "Inventory Optimization",
        description: "Implemented AI-driven forecasting to minimize overstock and stockouts."
      },
      {
        icon: <DollarSign className="h-6 w-6 text-primary" />,
        title: "Cost Reduction",
        description: "Streamlined processes to eliminate waste and reduce operational costs."
      }
    ],
    resultsDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    heroImage: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=1200&auto=format&fit=crop",
    excerpt: "Creating a resilient, AI-driven supply chain for a national retail chain.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
  }
];
