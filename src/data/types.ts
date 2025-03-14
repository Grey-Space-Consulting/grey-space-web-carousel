
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
