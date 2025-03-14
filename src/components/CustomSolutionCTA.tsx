
import React from "react";
import { Button } from "@/components/ui/button";

const CustomSolutionCTA: React.FC = () => {
  return (
    <div className="glass-card p-8 md:p-12 rounded-xl text-center">
      <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        Our team can create a tailored package that perfectly fits your unique business requirements and challenges.
      </p>
      <Button size="lg">
        Contact Us
      </Button>
    </div>
  );
};

export default CustomSolutionCTA;
