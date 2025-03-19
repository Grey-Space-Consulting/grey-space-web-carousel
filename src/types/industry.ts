
import React from "react";

export interface IndustryFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CaseStudyPreview {
  title: string;
  description: string;
  image: string;
  industry: string;
  solutions?: string[]; // This is still kept for future use if needed
  metrics: {
    icon: React.ReactNode;
    text: string;
  }[];
}

// Define solution categories for filtering - removing "All" since we're not using it anymore
export type SolutionCategory = 
  | "CRM"
  | "Automation"
  | "Chatbots"
  | "Telephony"
  | "Integration"
  | "Migration"
  | "Analytics"
  | "Support";
