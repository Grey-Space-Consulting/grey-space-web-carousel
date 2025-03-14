
import React from "react";
import { DetailedCaseStudy } from "../types";
import { Users, ArrowLeftRight, Check } from "lucide-react";

const healthcareStudy: DetailedCaseStudy = {
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
};

export default healthcareStudy;
