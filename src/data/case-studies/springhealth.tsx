
import React from "react";
import { DetailedCaseStudy } from "../types";
import { BarChart, Clock, Check } from "lucide-react";

const springhealthStudy: DetailedCaseStudy = {
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
};

export default springhealthStudy;
