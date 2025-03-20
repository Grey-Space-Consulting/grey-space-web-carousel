
import React from "react";
import { ArrowRight } from "lucide-react";

const PackagesWorkTogether: React.FC = () => {
  return (
    <div className="mt-8 bg-secondary/50 p-8 rounded-xl">
      <h3 className="text-2xl font-semibold mb-4">How These Packages Work Together</h3>
      <p className="text-lg text-muted-foreground mb-6">
        Our packages are designed to be flexible and can be combined to create a custom program that aligns with your specific needs.
      </p>
      
      {/* Common Package Combinations section moved to the top */}
      <div className="bg-primary/10 p-6 rounded-lg shadow-sm mb-8">
        <h4 className="text-xl font-medium mb-3 text-primary text-center">Common Package Combinations</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Use <strong>Leadership & Advisory</strong> packages for strategic guidance without technical implementation.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Choose <strong>Technology Implementation</strong> when you have a clear strategy but need technical execution.</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Combine packages for a <strong>comprehensive solution</strong> covering strategy, operations, and implementation.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>All packages offer <strong>customization options</strong> to adjust deliverables, timelines, and involvement levels.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-background/70 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-medium mb-3 text-primary flex items-center">
            <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">1</span>
            Mix & Match for Complete Solutions
          </h4>
          <p className="mb-4">
            Combine packages from different categories to create a comprehensive solution that addresses all aspects of your business needs.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Pair <strong>Platform & Tooling Advisory</strong> with <strong>Technology Implementation</strong> for end-to-end solutions.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Add <strong>Fractional Leadership</strong> to any technical implementation for strategic oversight.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-background/70 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-medium mb-3 text-primary flex items-center">
            <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">2</span>
            Budget-Friendly Options
          </h4>
          <p className="mb-4">
            We believe in making our expertise accessible to businesses of all sizes, regardless of budget constraints.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Bundled services offer <strong>cost advantages</strong> while providing comprehensive solutions.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Long-term partnerships receive <strong>preferential rates</strong> and additional support hours.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-background/70 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-medium mb-3 text-primary flex items-center">
            <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">3</span>
            Custom Tailoring
          </h4>
          <p className="mb-4">
            Every business has unique requirements. We can customize any package to perfectly align with your specific situation.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Adjust service components, delivery timelines, and engagement levels to match your budget and priorities.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Scale services up or down based on your evolving needs and organizational growth.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-background/70 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-medium mb-3 text-primary flex items-center">
            <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">4</span>
            Accessible to All Businesses
          </h4>
          <p className="mb-4">
            We're passionate about helping brands succeed, regardless of their size or budget limitations.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>We always find creative ways to work within your budget constraints while delivering value.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Our modular approach lets us focus on your most critical needs first, allowing for phased implementation.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PackagesWorkTogether;
