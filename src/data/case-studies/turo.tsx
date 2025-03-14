
import React from "react";
import { DetailedCaseStudy } from "../types";
import { GitMerge, Languages, DollarSign } from "lucide-react";

const turoStudy: DetailedCaseStudy = {
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
};

export default turoStudy;
