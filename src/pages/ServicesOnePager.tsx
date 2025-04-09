
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileDown, Upload } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Independent data for the one-pager
const onePagerServices = [
  {
    id: "leadership",
    title: "Fractional Leadership",
    description: "Expert leadership and strategic guidance to align your customer experience initiatives with business objectives.",
    benefits: [
      "Reduce executive hiring costs while accessing senior expertise",
      "Accelerate CX improvements with proven frameworks"
    ],
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    id: "helpdesk",
    title: "Managed Helpdesk",
    description: "Customized support solution covering net new implementations, ongoing maintenance and administration, and a true `part of your team` feel.",
    benefits: [
      "Fast and efficient setup of your preferred helpdesk",
      "Ongoing support and maintenance"
    ],
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8a8 8 0 0 1-16 0"></path>
        <path d="M2 8h20"></path>
        <path d="M5 12.5V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7.5"></path>
        <line x1="12" y1="13" x2="12" y2="18"></line>
      </svg>
    )
  },
  {
    id: "integration",
    title: "System Integrations",
    description: "Seamlessly connect your systems and optimize workflows for maximum operational efficiency.",
    benefits: [
      "Eliminate duplicate data entry and manual processes",
      "Create seamless customer journeys across channels"
    ],
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2"></rect>
        <rect x="8" y="8" width="8" height="8" rx="1"></rect>
        <path d="M12 2v4"></path>
        <path d="M12 18v4"></path>
        <path d="M2 12h4"></path>
        <path d="M18 12h4"></path>
      </svg>
    )
  },
  {
    id: "training",
    title: "Training & Education",
    description: "Enhance team capabilities and streamline processes through comprehensive training and optimization.",
    benefits: [
      "Improve team adoption of new technologies",
      "Standardize processes for consistent customer experiences"
    ],
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  },
  {
    id: "tools",
    title: "Tooling Audits & RFPs",
    description: "Expert guidance in selecting, auditing, and migrating to the right tools for your business needs.",
    benefits: [
      "Make confident technology investment decisions",
      "Identify improvement opportunities in existing systems"
    ],
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    )
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    description: "Leverage cutting-edge AI and automation solutions to enhance operational efficiency and innovation.",
    benefits: [
      "Increase self-service resolution rates",
      "Reduce response times with intelligent routing"
    ],
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 20H6a4 4 0 0 1-4-4V7a3 3 0 0 1 3-3h14"></path>
        <path d="M18 22V10"></path>
        <path d="m14 14 4-4 4 4"></path>
      </svg>
    )
  }
];

const ServicesOnePager = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  
  useEffect(() => {
    // Set the document title for better PDF naming
    document.title = "Grey Space Services - One Pager";
  }, []);
  
  const handlePrint = () => {
    window.print();
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setLogoUrl(imageUrl);
    }
  };
  
  return <div className="min-h-screen bg-background p-6 px-[36px] mx-0">
      {/* Control buttons - these won't appear in print */}
      <div className="print:hidden mb-6 flex justify-between items-center">
        <Button variant="outline" onClick={() => window.history.back()}>
          Back
        </Button>
        <div className="flex gap-2">
          <label htmlFor="logo-upload" className="cursor-pointer">
            <Button variant="outline" className="flex items-center gap-2" as="span">
              <Upload size={16} />
              Upload Logo
            </Button>
            <input
              id="logo-upload"
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
            />
          </label>
          <Button onClick={handlePrint} className="flex items-center gap-2">
            <FileDown size={16} />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Actual PDF content */}
      <div ref={pageRef} className="w-full max-w-[8.5in] mx-auto bg-white shadow-lg print:shadow-none p-8 print:p-6" style={{
      minHeight: "11in",
      aspectRatio: "8.5/11"
    }}>
        {/* Header */}
        <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <Avatar className="w-10 h-10 rounded-md">
              <AvatarImage src={logoUrl || ""} alt="Grey Space Logo" />
              <AvatarFallback className="bg-primary text-white font-bold">GS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-semibold">GREY SPACE</h1>
              <p className="text-muted-foreground">Operations Technology Consultants</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">greyspace.co</p>
            <p className="text-sm text-muted-foreground">hudson@greyspace.co</p>
          </div>
        </div>
        
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="text-muted-foreground">Comprehensive solutions to transform your CX operations</p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {onePagerServices.map(service => <div key={service.id} className="border border-border rounded-lg p-4">
              <div className="flex items-start gap-3 mb-2">
                <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                  <service.icon />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
              <ul className="text-xs space-y-1 mb-2">
                {service.benefits.map((benefit, idx) => <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{benefit}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
        
        {/* Contact CTA */}
        <div className="bg-primary/10 rounded-lg p-4 text-center mb-6">
          <h3 className="text-lg font-semibold mb-2">Ready to transform your operations?</h3>
          <p className="mb-2">Schedule a free consultation call with our experts.</p>
          <p className="font-medium">
            <a 
              href="https://calendly.com/greyspace-hudson/grey-space-introductory-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Schedule a consultation call
            </a>
          </p>
        </div>
        
        {/* Footer */}
        <div className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Grey Space. All rights reserved.</p>
        </div>
      </div>
    </div>;
};
export default ServicesOnePager;
