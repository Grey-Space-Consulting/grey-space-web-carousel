
import React from "react";
import { ArrowRight } from "lucide-react";

const PackagesWorkTogether: React.FC = () => {
  return (
    <div className="mt-8 bg-secondary/50 p-8 rounded-xl">
      <h3 className="text-2xl font-semibold mb-4">How These Packages Work Together</h3>
      <p className="text-lg text-muted-foreground mb-6">
        Our packages are designed to be flexible and can be combined to create a custom program that aligns with your specific needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 text-left">
        <div className="bg-background/70 p-6 rounded-lg">
          <h4 className="text-xl font-medium mb-3 text-primary">Mix & Match for Complete Solutions</h4>
          <p className="mb-4">
            Combine packages from different categories to create a comprehensive solution that addresses all aspects of your business needs.
          </p>
          <ul className="space-y-2">
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
        
        <div className="bg-background/70 p-6 rounded-lg">
          <h4 className="text-xl font-medium mb-3 text-primary">Budget-Friendly Options</h4>
          <p className="mb-4">
            We believe in making our expertise accessible to businesses of all sizes, regardless of budget constraints.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Bundled services offer <strong>cost advantages</strong> while providing comprehensive solutions.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>Long-term partnerships receive <strong>preferential rates</strong> and additional support hours.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
              <span>We're committed to finding ways to work within your available budget while delivering value.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-background/70 p-6 rounded-lg text-left mb-6">
        <h4 className="text-xl font-medium mb-3 text-primary">Custom Tailoring</h4>
        <p className="mb-4">
          Every business has unique requirements. We can customize any package to perfectly align with your specific situation.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>Adjust service components, delivery timelines, and engagement levels to match your budget and priorities.</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>Scale services up or down based on your evolving needs and organizational growth.</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>We'll work with you to create the perfect solution - no cookie-cutter approaches.</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-background/70 p-6 rounded-lg text-left mb-6">
        <h4 className="text-xl font-medium mb-3 text-primary">Accessible to Businesses of All Sizes</h4>
        <p className="mb-4">
          We're passionate about helping brands succeed, regardless of their size or budget limitations.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>We can almost always find creative ways to work within your budget constraints while delivering value.</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>Our modular approach lets us focus on your most critical needs first, allowing for phased implementation.</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
            <span>Start with a smaller engagement and expand our partnership as you see positive results and ROI.</span>
          </li>
        </ul>
      </div>
      
      <ul className="text-left max-w-3xl mx-auto space-y-2">
        <li className="flex items-start">
          <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
          <span>Use <strong>Leadership & Advisory</strong> packages for strategic guidance without technical implementation.</span>
        </li>
        <li className="flex items-start">
          <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
          <span>Choose <strong>Technology Implementation</strong> when you have a clear strategy but need technical execution.</span>
        </li>
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
  );
};

export default PackagesWorkTogether;
