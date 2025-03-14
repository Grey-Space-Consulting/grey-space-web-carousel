
import React from "react";
import { CaseStudy, DetailedCaseStudy } from "./types";

// Import individual case studies
import turoStudy from "./case-studies/turo";
import sweetgreenStudy from "./case-studies/sweetgreen";
import springhealthStudy from "./case-studies/springhealth";
import hopskipdriveStudy from "./case-studies/hopskipdrive";
import healthcareStudy from "./case-studies/healthcare";
import retailStudy from "./case-studies/retail";

// Export all case studies in an array for easy access
export const caseStudies: CaseStudy[] = [
  turoStudy,
  sweetgreenStudy,
  springhealthStudy,
  hopskipdriveStudy,
  healthcareStudy,
  retailStudy,
];

// Export detailed case studies
export const detailedCaseStudies: DetailedCaseStudy[] = [
  turoStudy,
  sweetgreenStudy,
  springhealthStudy,
  hopskipdriveStudy,
  healthcareStudy,
  retailStudy,
];

// Re-export types for easier imports elsewhere
export type { CaseStudy, DetailedCaseStudy };
