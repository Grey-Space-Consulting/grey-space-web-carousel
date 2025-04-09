
import { useEffect, useRef } from "react";
import { services } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const ServicesOnePager = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the document title for better PDF naming
    document.title = "Grey Space Services - One Pager";
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Control buttons - these won't appear in print */}
      <div className="print:hidden mb-6 flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={() => window.history.back()}
        >
          Back
        </Button>
        <Button 
          onClick={handlePrint}
          className="flex items-center gap-2"
        >
          <FileDown size={16} />
          Download PDF
        </Button>
      </div>

      {/* Actual PDF content */}
      <div 
        ref={pageRef}
        className="w-full max-w-[8.5in] mx-auto bg-white shadow-lg print:shadow-none p-8 print:p-6"
        style={{
          minHeight: "11in",
          aspectRatio: "8.5/11",
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">GREY SPACE</h1>
            <p className="text-muted-foreground">Operations Technology Consultants</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">www.greyspace.io</p>
            <p className="text-sm text-muted-foreground">services@greyspace.io</p>
          </div>
        </div>
        
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="text-muted-foreground">Comprehensive solutions to transform your business operations</p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {services.map((service) => (
            <div key={service.id} className="border border-border rounded-lg p-4">
              <div className="flex items-start gap-3 mb-2">
                <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                  <service.icon size={16} />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
              <ul className="text-xs space-y-1 mb-2">
                {service.benefits.slice(0, 2).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="bg-primary/10 rounded-lg p-4 text-center mb-6">
          <h3 className="text-lg font-semibold mb-2">Ready to transform your operations?</h3>
          <p className="mb-2">Schedule a free consultation call with our experts.</p>
          <p className="font-medium">https://calendly.com/greyspace-hudson/grey-space-introductory-call</p>
        </div>
        
        {/* Footer */}
        <div className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Grey Space. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesOnePager;
