
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
  metrics: {
    icon: React.ReactNode;
    text: string;
  }[];
}
