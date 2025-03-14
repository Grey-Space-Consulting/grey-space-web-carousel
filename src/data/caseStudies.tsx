
import React from "react";
import { CaseStudy, DetailedCaseStudy } from "./types";

// Import individual case studies
import turoStudy from "./case-studies/turo";
import sweetgreenStudy from "./case-studies/sweetgreen";
import springhealthStudy from "./case-studies/springhealth";
import hopskipdriveStudy from "./case-studies/hopskipdrive";

// Export all case studies in an array for easy access
export const caseStudies: CaseStudy[] = [
  turoStudy,
  sweetgreenStudy,
  springhealthStudy,
  hopskipdriveStudy,
];

// Export detailed case studies
export const detailedCaseStudies: DetailedCaseStudy[] = [
  turoStudy,
  sweetgreenStudy,
  springhealthStudy,
  hopskipdriveStudy,
];

// Re-export types for easier imports elsewhere
export type { CaseStudy, DetailedCaseStudy };
