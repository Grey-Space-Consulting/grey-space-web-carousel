
import { Briefcase, Languages, GitMerge, ArrowLeftRight, DollarSign, Check, Users, Globe, Clock, BarChart } from "lucide-react";
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
    id: "sweetgreen",
    title: "Sweetgreen: Scaling Customer Support with Automation",
    category: "Food & Beverage",
    excerpt: "How we helped Sweetgreen reduce costs while expanding their store network through intelligent customer service automation.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop",
  },
  {
    id: "springhealth",
    title: "Spring Health: Platform Rebuild for Customer Support Excellence",
    category: "Healthcare",
    excerpt: "How we rebuilt Spring Health's support platform to improve response times, reduce wait times, and enhance patient experience.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop",
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
    id: "sweetgreen",
    title: "Sweetgreen: Scaling Customer Support with Automation",
    category: "Food & Beverage",
    client: "Sweetgreen",
    clientLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Sweetgreen_logo.png",
    industry: "Fast Casual Restaurant",
    timeframe: "3+ year partnership",
    results: "$175K annual savings",
    challenge: "Sweetgreen faced the challenge of managing increasing customer support demands while rapidly expanding their store network. They needed to maintain high-quality customer service without proportionally increasing headcount costs. As a fast-growing company with both physical locations and a popular mobile app, their support volume was growing exponentially, threatening to increase operational costs unsustainably.",
    approach: "We implemented a multi-faceted approach to help Sweetgreen optimize their customer support operations while keeping costs under control:",
    keyPoints: [
      {
        icon: <BarChart className="h-6 w-6 text-primary" />,
        title: "AI-Powered Automation",
        description: "Deployed intelligent automation solutions to handle routine inquiries and frequently asked questions."
      },
      {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "Agent Efficiency Tools",
        description: "Implemented agent assistance tools that reduced handling time while maintaining quality standards."
      },
      {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: "Continuous Optimization",
        description: "Established data-driven improvement cycles to continuously refine automation and support processes."
      }
    ],
    resultsDetails: "Over our three-year partnership, Sweetgreen has realized $175,000 in annualized savings through our support optimization solutions. The automated systems we implemented achieved a 35% automated deflection rate, allowing human agents to focus on more complex issues. Additionally, our agent assistance tools contributed to a significant 24% decrease in handle times, further improving operational efficiency. Sweetgreen was able to successfully scale their business without proportionally increasing their customer support costs.",
    heroImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&auto=format&fit=crop",
    excerpt: "How we helped Sweetgreen reduce costs while expanding their store network through intelligent customer service automation.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop",
  },
  {
    id: "springhealth",
    title: "Spring Health: Platform Rebuild for Customer Support Excellence",
    category: "Healthcare",
    client: "Spring Health",
    clientLogo: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=100&h=50&auto=format&fit=crop",
    industry: "Mental Healthcare",
    timeframe: "3+ year partnership",
    results: "$300K annual savings",
    challenge: "Spring Health needed a complete rebuild of their customer support platform to accommodate rapid growth in their mental healthcare services. Their existing Zendesk implementation was struggling with scalability issues, leading to longer wait times for patients seeking mental health support, inconsistent data quality, and increasing operational costs.",
    approach: "We undertook a comprehensive rebuild of Spring Health's support infrastructure, focusing on three critical areas:",
    keyPoints: [
      {
        icon: <BarChart className="h-6 w-6 text-primary" />,
        title: "Platform Scalability",
        description: "Redesigned the support architecture to handle exponentially increasing volumes without performance degradation."
      },
      {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: "Response Time Optimization",
        description: "Implemented intelligent routing and prioritization systems to dramatically reduce patient wait times."
      },
      {
        icon: <Check className="h-6 w-6 text-primary" />,
        title: "Data Quality Framework",
        description: "Created robust data validation and enrichment processes to ensure consistent, high-quality information."
      }
    ],
    resultsDetails: "Through our ongoing three-year partnership, Spring Health has achieved remarkable improvements in their support operations. The platform rebuild has delivered $300,000 in annualized savings through operational efficiencies and reduced technology costs. Patient experience metrics have seen dramatic improvements with a 65% reduction in first response times, a 69% reduction in median wait times, and a 73% drop in median resolution times. These improvements have directly contributed to better patient outcomes and higher satisfaction scores.",
    heroImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&auto=format&fit=crop",
    excerpt: "How we rebuilt Spring Health's support platform to improve response times, reduce wait times, and enhance patient experience.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop",
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
