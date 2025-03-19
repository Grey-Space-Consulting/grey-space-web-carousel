
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
  solutions?: string[]; // Added solutions array for filtering
  metrics: {
    icon: React.ReactNode;
    text: string;
  }[];
}

// Define solution categories for filtering
export type SolutionCategory = 
  | "All"
  | "CRM"
  | "Automation"
  | "Chatbots"
  | "Telephony"
  | "Integration"
  | "Migration"
  | "Analytics"
  | "Support";
