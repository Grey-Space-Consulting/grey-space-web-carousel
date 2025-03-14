
import React from "react";
import { DetailedCaseStudy } from "../types";
import { Globe, ArrowLeftRight, DollarSign } from "lucide-react";

const retailStudy: DetailedCaseStudy = {
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
};

export default retailStudy;
